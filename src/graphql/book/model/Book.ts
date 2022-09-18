import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType('Book', { simpleResolvers: true })
export class Book {
  @Field(() => ID)
  id: string

  @Field(() => String)
  title: string

  @Field(() => String)
  author: string

  @Field(() => Number)
  pageCount: number

  @Field(() => String)
  coverImageUrl: string

  @Field(() => String)
  publisher: string

  @Field(() => String)
  synopsis: string
}
