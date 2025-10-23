export function serializeUser(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        passwordHash: user.passwordHash,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }
}

export function serializeList(users) {
    return users.map(serializeClass);
}