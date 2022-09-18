import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType('User', { simpleResolvers: true })
export class User {
  @Field(() => ID)
  id: string

  @Field(() => String)
  username: string
}
