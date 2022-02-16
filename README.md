# f-mate

This is just a fun little project to explore some ideas in how to implement some functional types and concepts in a more "JavaScript-ish" way. E.g. a lot of people seem to struggle with:
```ts
import { array as A } from 'fp-ts';
import { pipe } from 'fp-ts/function';

const t = pipe(
  [1, 2, 3],
  A.map(n => n + 1)
);
```
but are totaly fine with:
```ts
const t = [1, 2, 3]
  .map(n => n + 1);
```

Personaly I really like [fp-ts](https://github.com/gcanti/fp-ts) or languages like [elm](https://elm-lang.org/) and this project is heavily influenced by those. 

Still, I gues a lot of folks would struggle less if instead of this:
```ts
import { either as E } from 'fp-ts';
import { pipe } from 'fp-ts/function';

declare smthThatCouldGoWrong(a: number): E.Either<string, number>;

const t = pipe(
  12,
  smthThatCouldGoWrong,
  E.map(n => n + 1),
  E.getOrElse(() => 0)
);
```
they could write this:
```ts
import { result as Result } from 'f-mate';

declare smthThatCouldGoWrong(a: number): Result<string, number>;

const t = smthThatCouldGoWrong(12)
  .map(n => n + 1)
  .withDefault(() => 0);
```

It looks more like "traditional" JavaScript and maybe it'll be more accessible because of this.
