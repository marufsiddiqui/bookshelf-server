import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType('ListItem', { simpleResolvers: true })
export class ListItem {
  @Field(() => ID)
  id: string

  @Field(() => String)
  bookId: string

  @Field(() => String)
  ownerId: string

  @Field(() => Number)
  rating: number

  @Field(() => String)
  notes: string

  @Field(() => Number)
  startDate: number

  @Field(() => Number)
  finishDate: number
}
