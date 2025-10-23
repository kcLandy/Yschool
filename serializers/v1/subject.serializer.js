export function serializeSubject(subject) {
    return {
        id: subject.id,
        name: subject.name,
        createdAt: subject.createdAt,
        updatedAt: subject.updatedAt,
    }
}

export function serializeList(subjects) {
    return subjects.map(serializeClass);
}