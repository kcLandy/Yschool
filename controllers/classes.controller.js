import * as svc from '../services/classes.services';
import { serializeClasses, serializeList } from '../serializers/v1/classes.serializer.js';

/* GET /classes */
export async function getClasses(req, res, next) {
    const classes = await svc.findAll();
    return res.json({
        data: serializeList(classes),
        meta: { version: '1.0' }
    });
}

/* GET /classes/:id */
export async function getClassesById(req, res, next) {
    const classe = await svc.findById(req.params.id);
    if (!classe) return res.status(404).json({ error: 'Classe non trouvée' });
    return res.json({
        data: serializeClasses(classe),
        meta: { version: '1.0' }
    });
}

/* POST /classes */
export async function createClasses(req, res, next) {
    try {
        const classe = await svc.create(req.body);
        res.status(201).json({
            data: serializeClasses(classe),
            meta: { version: '1.0' }
        });
    } catch (err) {
        console.error(err?.original || err);
        res.status(400).json({ error: 'Erreur lors de la création de la classe' });
    }
}

/* PUT /classes/:id */
export async function updateClasses(req, res, next) {
    const classe = await svc.update(req.params.id, req.body);
    if (!classe) return res.status(404).json({ error: 'Classe non trouvée' });
    res.json({
        data: serializeClasses(classe),
        meta: { version: '1.0' }
    });
}

/* DELETE /classes/:id */
export async function deleteClasses(req, res, next) {
    const deleted = await svc.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Classe non trouvée' });
    res.status(200).send();
}
