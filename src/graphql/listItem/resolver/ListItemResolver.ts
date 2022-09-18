import { Arg, Query, Resolver, ResolverInterface } from 'type-graphql'

import { ListItem } from '../model/ListItem'

const listItem: ListItem = {
  bookId: '1',
  finishDate: -1,
  startDate: -1,
  notes: '',
  ownerId: '1',
  rating: 0,
  id: '1',
}

@Resolver(of => ListItem)
export class ListItemResolver implements ResolverInterface<ListItem> {
  @Query(returns => ListItem)
  async listItem(/* @Arg('usedId', { nullable: false }) usedId: string*/): Promise<ListItem | null> {
    return listItem
  }
}
