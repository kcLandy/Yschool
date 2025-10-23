export function serializesSchedule(schedule) {
    return {
        id: schedule.id,
        studentId: schedule.studentId,
        teacherId: schedule.teacherId,
        classId: schedule.classId,
        classroom: schedule.classroom,
        startTime: schedule.startTime,
        endTime: schedule.endTime,
        createdAt: schedule.createdAt,
        updatedAt: schedule.updatedAt
    }
}

export function serializeList(schedules) {
    return schedules.map(serializeClass);
}