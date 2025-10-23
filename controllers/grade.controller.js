import * as svc from '../services/grade.services';
import { serializeGrade, serializeList } from '../serializers/v1/grade.serializer.js';

/* GET /grades */
export async function getGrades(req, res, next) {
    const grades = await svc.findAll();
    return res.json({
        data: serializeList(grades),
        meta: { version: '1.0' }
    });
}

/* GET /grades/:id */
export async function getGradeById(req, res, next) {
    const grade = await svc.findById(req.params.id);
    if (!grade) return res.status(404).json({ error: 'Note non trouvée' });
    return res.json({
        data: serializeGrade(grade),
        meta: { version: '1.0' }
    });
}

/* POST /grades */
export async function createGrade(req, res, next) {
    try {
        const grade = await svc.create(req.body);
        res.status(201).json({
            data: serializeGrade(grade),
            meta: { version: '1.0' }
        });
    } catch (err) {
        console.error(err?.original || err);
        res.status(400).json({ error: 'Erreur lors de la création de la note' });
    }
}

/* PUT /grades/:id */
export async function updateGrade(req, res, next) {
    const grade = await svc.update(req.params.id, req.body);
    if (!grade) return res.status(404).json({ error: 'Note non trouvée' });
    res.json({
        data: serializeGrade(grade),
        meta: { version: '1.0' }
    });
}

/* DELETE /grades/:id */
export async function deleteGrade(req, res, next) {
    const deleted = await svc.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Note non trouvée' });
    res.status(204).send();
}
