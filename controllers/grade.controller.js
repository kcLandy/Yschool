import * as svc from '../services/grade.service.js';

/* GET /grades */
export async function getGrades(req, res, next) {
    const grades = await svc.findAll();
    return res.json({
        data: grades,
        meta: { version: '1.0' }
    });
}

/* GET /grades/:id */
export async function getGradeById(req, res, next) {
    const grade = await svc.findById(req.params.id);
    if (!grade) return res.status(404).json({ error: 'Note non trouvée' });
    return res.json(grade);
}

/* POST /grades */
export async function createGrade(req, res, next) {
    try {
        const grade = await svc.create(req.body);
        res.status(201).json(grade);
    } catch (err) {
        console.error(err?.original || err);
        res.status(400).json({ error: 'Erreur lors de la création de la note' });
    }
}

/* PUT /grades/:id */
export async function updateGrade(req, res, next) {
    const grade = await svc.update(req.params.id, req.body);
    if (!grade) return res.status(404).json({ error: 'Note non trouvée' });
    res.json(grade);
}

/* DELETE /grades/:id */
export async function deleteGrade(req, res, next) {
    const deleted = await svc.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Note non trouvée' });
    res.status(204).send();
}
