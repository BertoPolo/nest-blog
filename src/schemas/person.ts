import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Person extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  posts: string[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);
