import { matchSorter } from 'match-sorter'
import { Arg, Query, Resolver } from 'type-graphql'

import * as books from '../../../test/data/books.json'
import { Book } from '../model/Book'

@Resolver(of => Book)
export class BookResolver {
  @Query(returns => [Book])
  async books(@Arg('query', { nullable: true, defaultValue: '' }) query: string): Promise<Book[]> {
    return matchSorter(books, query, {
      keys: [
        'title',
        'author',
        'publisher',
        { threshold: matchSorter.rankings.CONTAINS, key: 'synopsis' },
      ],
    }).slice(0, 10)
  }
}
