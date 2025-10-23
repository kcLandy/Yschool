export function serializeClasses(classes) {
    return {
        id: classes.id,
        name: classes.name,
        createdAt: classes.createdAt,
        updatedAt: classes.updatedAt
    }
}

export function serializeList(classes) {
    return classes.map(serializeClass);
}