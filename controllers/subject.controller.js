import * as svc from '../services/subject.service.js';

/* GET /subjects */
export async function getSubjects(req, res, next) {
    const subjects = await svc.findAll();
    return res.json({
        data: subjects,
        meta: { version: '1.0' }
    });
}

/* GET /subjects/:id */
export async function getSubjectById(req, res, next) {
    const subject = await svc.findById(req.params.id);
    if (!subject) return res.status(404).json({ error: 'Matière non trouvée' });
    return res.json(subject);
}

/* POST /subjects */
export async function createSubject(req, res, next) {
    try {
        const subject = await svc.create(req.body);
        res.status(201).json(subject);
    } catch (err) {
        console.error(err?.original || err);
        res.status(400).json({ error: 'Erreur lors de la création de la matière' });
    }
}

/* PUT /subjects/:id */
export async function updateSubject(req, res, next) {
    const subject = await svc.update(req.params.id, req.body);
    if (!subject) return res.status(404).json({ error: 'Matière non trouvée' });
    res.json(subject);
}

/* DELETE /subjects/:id */
export async function deleteSubject(req, res, next) {
    const deleted = await svc.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Matière non trouvée' });
    res.status(204).send();
}
