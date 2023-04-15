import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TripDocument = Trip & Document

// class activity{
    
//     @Prop()
//     time: string

//     @Prop()
//     name: string

//     @Prop()
//     note: string
// }

@Schema({collection: 'TripPlan'})
export class Trip{
    @Prop()
    tripId: string

    @Prop()
    name: string;

    @Prop([Object])
    days: object[];

}

export const TripSchema = SchemaFactory.createForClass(Trip);

