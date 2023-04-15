import { Optional } from "@nestjs/common"

export class CreateTripDto{
    name: string
    @Optional()
    days: daysDto
}
class daysDto{
    @Optional()
    date: string

    @Optional()
    activitys: [activityDto]
}
class activityDto {
    @Optional()
    time: string
    @Optional()
    name: string
    @Optional()
    note: string
}