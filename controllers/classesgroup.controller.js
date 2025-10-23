import * as svc from '../services/classesgroup.services';
import { serializeClassesGroup, serializeList } from '../serializers/v1/classesgroup.serializer.js';

/* GET /classesgroups */
export async function getClassesGroups(req, res, next) {
    const groups = await svc.findAll();
    return res.json({
        data: serializeList(groups),
        meta: { version: '1.0' }
    });
}

/* GET /classesgroups/:id */
export async function getClassesGroupById(req, res, next) {
    const group = await svc.findById(req.params.id);
    if (!group) return res.status(404).json({ error: 'Groupe de classe non trouvé' });
    return res.json({
        data: serializeClassesGroup(group),
        meta: { version: '1.0' }
    });
}

/* POST /classesgroups */
export async function createClassesGroup(req, res, next) {
    try {
        const group = await svc.create(req.body);
        res.status(201).json({
            data: serializeClassesGroup(group),
            meta: { version: '1.0' }
        });
    } catch (err) {
        console.error(err?.original || err);
        res.status(400).json({ error: 'Erreur lors de la création du groupe' });
    }
}

/* PUT /classesgroups/:id */
export async function updateClassesGroup(req, res, next) {
    const group = await svc.update(req.params.id, req.body);
    if (!group) return res.status(404).json({ error: 'Groupe non trouvé' });
    res.json({
        data: serializeClassesGroup(group),
        meta: { version: '1.0' }
    });
}

/* DELETE /classesgroups/:id */
export async function deleteClassesGroup(req, res, next) {
    const deleted = await svc.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Groupe non trouvé' });
    res.status(204).send();
}
