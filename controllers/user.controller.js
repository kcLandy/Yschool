import * as svc from '../services/user.services';
import { serializeUser, serializeList } from '../serializers/v1/user.serializer.js';

/* GET /users */
export async function getUsers(req, res, next) {
    const users = await svc.findAll();
    return res.json({
        data: serializeUser(users),
        meta: { version: '1.0' }
    });
}

/* GET /users/:id */
export async function getUserById(req, res, next) {
    const user = await svc.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    return res.json({
        data: serializeUser(user),
        meta: { version: '1.0' }
    });
}

/* POST /users */
export async function createUser(req, res, next) {
    try {
        const user = await svc.create(req.body);
        res.status(201).json({
            data: serializeUser(user),
            meta: { version: '1.0' }
        });
    } catch (err) {
        console.error(err?.original || err);
        res.status(400).json({ error: 'Erreur lors de la création de l’utilisateur' });
    }
}

/* PUT /users/:id */
export async function updateUser(req, res, next) {
    const user = await svc.update(req.params.id, req.body);
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    res.json({
        data: serializeUser(user),
        meta: { version: '1.0' }
    });
}

/* DELETE /users/:id */
export async function deleteUser(req, res, next) {
    const deleted = await svc.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    res.status(204).send();
}
