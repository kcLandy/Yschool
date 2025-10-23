export function serializeClassesGroup(classesGroup) {
    return {
        id: classesGroup.id,
        studentId: classesGroup.studentId,
        classId: classesGroup.classId,
        createdAt: classesGroup.createdAt,
        updatedAt: classesGroup.updatedAt
    }
}

export function serializeList(classesgroup) {
    return classesgroup.map(serializeClass);
}