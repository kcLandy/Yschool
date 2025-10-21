import * as svc from '../services/schedule.service.js';

/* GET /schedules */
export async function getSchedules(req, res, next) {
    const schedules = await svc.findAll();
    return res.json({
        data: schedules,
        meta: { version: '1.0' }
    });
}

/* GET /schedules/:id */
export async function getScheduleById(req, res, next) {
    const schedule = await svc.findById(req.params.id);
    if (!schedule) return res.status(404).json({ error: 'Horaire non trouvé' });
    return res.json(schedule);
}

/* POST /schedules */
export async function createSchedule(req, res, next) {
    try {
        const schedule = await svc.create(req.body);
        res.status(201).json(schedule);
    } catch (err) {
        console.error(err?.original || err);
        res.status(400).json({ error: 'Erreur lors de la création de l’horaire' });
    }
}

/* PUT /schedules/:id */
export async function updateSchedule(req, res, next) {
    const schedule = await svc.update(req.params.id, req.body);
    if (!schedule) return res.status(404).json({ error: 'Horaire non trouvé' });
    res.json(schedule);
}

/* DELETE /schedules/:id */
export async function deleteSchedule(req, res, next) {
    const deleted = await svc.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Horaire non trouvé' });
    res.status(204).send();
}
