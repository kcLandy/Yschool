import * as svc from '../services/classgroup.service.js';

/* GET /classgroups */
export async function getClassGroups(req, res, next) {
    const groups = await svc.findAll();
    return res.json({
        data: groups,
        meta: { version: '1.0' }
    });
}

/* GET /classgroups/:id */
export async function getClassGroupById(req, res, next) {
    const group = await svc.findById(req.params.id);
    if (!group) return res.status(404).json({ error: 'Groupe de classe non trouvé' });
    return res.json(group);
}

/* POST /classgroups */
export async function createClassGroup(req, res, next) {
    try {
        const group = await svc.create(req.body);
        res.status(201).json(group);
    } catch (err) {
        console.error(err?.original || err);
        res.status(400).json({ error: 'Erreur lors de la création du groupe' });
    }
}

/* PUT /classgroups/:id */
export async function updateClassGroup(req, res, next) {
    const group = await svc.update(req.params.id, req.body);
    if (!group) return res.status(404).json({ error: 'Groupe non trouvé' });
    res.json(group);
}

/* DELETE /classgroups/:id */
export async function deleteClassGroup(req, res, next) {
    const deleted = await svc.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Groupe non trouvé' });
    res.status(204).send();
}
