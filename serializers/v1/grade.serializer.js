export function serializeGrade(grade) {
    return {
        id: grade.id,
        studentId: grade.studentId,
        subjectId: grade.subjectId,
        teacherId: grade.teacherId,
        value: grade.value,
        comment: grade.comment,
        createdAt: grade.createdAt,
        updatedAt: grade.updatedAt
    }
}

export function serializeList(grades) {
    return grades.map(serializeClass);
}