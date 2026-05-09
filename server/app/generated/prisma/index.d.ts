
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model privacy
 * 
 */
export type privacy = $Result.DefaultSelection<Prisma.$privacyPayload>
/**
 * Model song
 * 
 */
export type song = $Result.DefaultSelection<Prisma.$songPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model connection
 * 
 */
export type connection = $Result.DefaultSelection<Prisma.$connectionPayload>
/**
 * Model Games
 * 
 */
export type Games = $Result.DefaultSelection<Prisma.$GamesPayload>
/**
 * Model EmojiCharades
 * 
 */
export type EmojiCharades = $Result.DefaultSelection<Prisma.$EmojiCharadesPayload>
/**
 * Model Scoring
 * 
 */
export type Scoring = $Result.DefaultSelection<Prisma.$ScoringPayload>
/**
 * Model GlobalChats
 * 
 */
export type GlobalChats = $Result.DefaultSelection<Prisma.$GlobalChatsPayload>
/**
 * Model GlobalChatMessage
 * 
 */
export type GlobalChatMessage = $Result.DefaultSelection<Prisma.$GlobalChatMessagePayload>
/**
 * Model PrivateRoom
 * 
 */
export type PrivateRoom = $Result.DefaultSelection<Prisma.$PrivateRoomPayload>
/**
 * Model PrivateRoomMessage
 * 
 */
export type PrivateRoomMessage = $Result.DefaultSelection<Prisma.$PrivateRoomMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privacy`: Exposes CRUD operations for the **privacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Privacies
    * const privacies = await prisma.privacy.findMany()
    * ```
    */
  get privacy(): Prisma.privacyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.songDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connection`: Exposes CRUD operations for the **connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connection.findMany()
    * ```
    */
  get connection(): Prisma.connectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.games`: Exposes CRUD operations for the **Games** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.games.findMany()
    * ```
    */
  get games(): Prisma.GamesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emojiCharades`: Exposes CRUD operations for the **EmojiCharades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmojiCharades
    * const emojiCharades = await prisma.emojiCharades.findMany()
    * ```
    */
  get emojiCharades(): Prisma.EmojiCharadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scoring`: Exposes CRUD operations for the **Scoring** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scorings
    * const scorings = await prisma.scoring.findMany()
    * ```
    */
  get scoring(): Prisma.ScoringDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalChats`: Exposes CRUD operations for the **GlobalChats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalChats
    * const globalChats = await prisma.globalChats.findMany()
    * ```
    */
  get globalChats(): Prisma.GlobalChatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalChatMessage`: Exposes CRUD operations for the **GlobalChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalChatMessages
    * const globalChatMessages = await prisma.globalChatMessage.findMany()
    * ```
    */
  get globalChatMessage(): Prisma.GlobalChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateRoom`: Exposes CRUD operations for the **PrivateRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateRooms
    * const privateRooms = await prisma.privateRoom.findMany()
    * ```
    */
  get privateRoom(): Prisma.PrivateRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateRoomMessage`: Exposes CRUD operations for the **PrivateRoomMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateRoomMessages
    * const privateRoomMessages = await prisma.privateRoomMessage.findMany()
    * ```
    */
  get privateRoomMessage(): Prisma.PrivateRoomMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    privacy: 'privacy',
    song: 'song',
    Message: 'Message',
    connection: 'connection',
    Games: 'Games',
    EmojiCharades: 'EmojiCharades',
    Scoring: 'Scoring',
    GlobalChats: 'GlobalChats',
    GlobalChatMessage: 'GlobalChatMessage',
    PrivateRoom: 'PrivateRoom',
    PrivateRoomMessage: 'PrivateRoomMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "privacy" | "song" | "message" | "connection" | "games" | "emojiCharades" | "scoring" | "globalChats" | "globalChatMessage" | "privateRoom" | "privateRoomMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      privacy: {
        payload: Prisma.$privacyPayload<ExtArgs>
        fields: Prisma.privacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.privacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.privacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          findFirst: {
            args: Prisma.privacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.privacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          findMany: {
            args: Prisma.privacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>[]
          }
          create: {
            args: Prisma.privacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          createMany: {
            args: Prisma.privacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.privacyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>[]
          }
          delete: {
            args: Prisma.privacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          update: {
            args: Prisma.privacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          deleteMany: {
            args: Prisma.privacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.privacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.privacyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>[]
          }
          upsert: {
            args: Prisma.privacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          aggregate: {
            args: Prisma.PrivacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivacy>
          }
          groupBy: {
            args: Prisma.privacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.privacyCountArgs<ExtArgs>
            result: $Utils.Optional<PrivacyCountAggregateOutputType> | number
          }
        }
      }
      song: {
        payload: Prisma.$songPayload<ExtArgs>
        fields: Prisma.songFieldRefs
        operations: {
          findUnique: {
            args: Prisma.songFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.songFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          findFirst: {
            args: Prisma.songFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.songFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          findMany: {
            args: Prisma.songFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload>[]
          }
          create: {
            args: Prisma.songCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          createMany: {
            args: Prisma.songCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.songCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload>[]
          }
          delete: {
            args: Prisma.songDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          update: {
            args: Prisma.songUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          deleteMany: {
            args: Prisma.songDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.songUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.songUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload>[]
          }
          upsert: {
            args: Prisma.songUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.songGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.songCountArgs<ExtArgs>
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      connection: {
        payload: Prisma.$connectionPayload<ExtArgs>
        fields: Prisma.connectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.connectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.connectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload>
          }
          findFirst: {
            args: Prisma.connectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.connectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload>
          }
          findMany: {
            args: Prisma.connectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload>[]
          }
          create: {
            args: Prisma.connectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload>
          }
          createMany: {
            args: Prisma.connectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.connectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload>[]
          }
          delete: {
            args: Prisma.connectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload>
          }
          update: {
            args: Prisma.connectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload>
          }
          deleteMany: {
            args: Prisma.connectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.connectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.connectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload>[]
          }
          upsert: {
            args: Prisma.connectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$connectionPayload>
          }
          aggregate: {
            args: Prisma.ConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnection>
          }
          groupBy: {
            args: Prisma.connectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.connectionCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionCountAggregateOutputType> | number
          }
        }
      }
      Games: {
        payload: Prisma.$GamesPayload<ExtArgs>
        fields: Prisma.GamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          findFirst: {
            args: Prisma.GamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          findMany: {
            args: Prisma.GamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          create: {
            args: Prisma.GamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          createMany: {
            args: Prisma.GamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GamesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          delete: {
            args: Prisma.GamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          update: {
            args: Prisma.GamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          deleteMany: {
            args: Prisma.GamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GamesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          upsert: {
            args: Prisma.GamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          aggregate: {
            args: Prisma.GamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGames>
          }
          groupBy: {
            args: Prisma.GamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<GamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.GamesCountArgs<ExtArgs>
            result: $Utils.Optional<GamesCountAggregateOutputType> | number
          }
        }
      }
      EmojiCharades: {
        payload: Prisma.$EmojiCharadesPayload<ExtArgs>
        fields: Prisma.EmojiCharadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmojiCharadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmojiCharadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload>
          }
          findFirst: {
            args: Prisma.EmojiCharadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmojiCharadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload>
          }
          findMany: {
            args: Prisma.EmojiCharadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload>[]
          }
          create: {
            args: Prisma.EmojiCharadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload>
          }
          createMany: {
            args: Prisma.EmojiCharadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmojiCharadesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload>[]
          }
          delete: {
            args: Prisma.EmojiCharadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload>
          }
          update: {
            args: Prisma.EmojiCharadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload>
          }
          deleteMany: {
            args: Prisma.EmojiCharadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmojiCharadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmojiCharadesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload>[]
          }
          upsert: {
            args: Prisma.EmojiCharadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiCharadesPayload>
          }
          aggregate: {
            args: Prisma.EmojiCharadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmojiCharades>
          }
          groupBy: {
            args: Prisma.EmojiCharadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmojiCharadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmojiCharadesCountArgs<ExtArgs>
            result: $Utils.Optional<EmojiCharadesCountAggregateOutputType> | number
          }
        }
      }
      Scoring: {
        payload: Prisma.$ScoringPayload<ExtArgs>
        fields: Prisma.ScoringFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoringFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoringFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload>
          }
          findFirst: {
            args: Prisma.ScoringFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoringFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload>
          }
          findMany: {
            args: Prisma.ScoringFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload>[]
          }
          create: {
            args: Prisma.ScoringCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload>
          }
          createMany: {
            args: Prisma.ScoringCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoringCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload>[]
          }
          delete: {
            args: Prisma.ScoringDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload>
          }
          update: {
            args: Prisma.ScoringUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload>
          }
          deleteMany: {
            args: Prisma.ScoringDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoringUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoringUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload>[]
          }
          upsert: {
            args: Prisma.ScoringUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringPayload>
          }
          aggregate: {
            args: Prisma.ScoringAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScoring>
          }
          groupBy: {
            args: Prisma.ScoringGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoringGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoringCountArgs<ExtArgs>
            result: $Utils.Optional<ScoringCountAggregateOutputType> | number
          }
        }
      }
      GlobalChats: {
        payload: Prisma.$GlobalChatsPayload<ExtArgs>
        fields: Prisma.GlobalChatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalChatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalChatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload>
          }
          findFirst: {
            args: Prisma.GlobalChatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalChatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload>
          }
          findMany: {
            args: Prisma.GlobalChatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload>[]
          }
          create: {
            args: Prisma.GlobalChatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload>
          }
          createMany: {
            args: Prisma.GlobalChatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalChatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload>[]
          }
          delete: {
            args: Prisma.GlobalChatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload>
          }
          update: {
            args: Prisma.GlobalChatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload>
          }
          deleteMany: {
            args: Prisma.GlobalChatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalChatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalChatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload>[]
          }
          upsert: {
            args: Prisma.GlobalChatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatsPayload>
          }
          aggregate: {
            args: Prisma.GlobalChatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalChats>
          }
          groupBy: {
            args: Prisma.GlobalChatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalChatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalChatsCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalChatsCountAggregateOutputType> | number
          }
        }
      }
      GlobalChatMessage: {
        payload: Prisma.$GlobalChatMessagePayload<ExtArgs>
        fields: Prisma.GlobalChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload>
          }
          findFirst: {
            args: Prisma.GlobalChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload>
          }
          findMany: {
            args: Prisma.GlobalChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload>[]
          }
          create: {
            args: Prisma.GlobalChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload>
          }
          createMany: {
            args: Prisma.GlobalChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload>[]
          }
          delete: {
            args: Prisma.GlobalChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload>
          }
          update: {
            args: Prisma.GlobalChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.GlobalChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.GlobalChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatMessagePayload>
          }
          aggregate: {
            args: Prisma.GlobalChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalChatMessage>
          }
          groupBy: {
            args: Prisma.GlobalChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalChatMessageCountAggregateOutputType> | number
          }
        }
      }
      PrivateRoom: {
        payload: Prisma.$PrivateRoomPayload<ExtArgs>
        fields: Prisma.PrivateRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload>
          }
          findFirst: {
            args: Prisma.PrivateRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload>
          }
          findMany: {
            args: Prisma.PrivateRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload>[]
          }
          create: {
            args: Prisma.PrivateRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload>
          }
          createMany: {
            args: Prisma.PrivateRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload>[]
          }
          delete: {
            args: Prisma.PrivateRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload>
          }
          update: {
            args: Prisma.PrivateRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload>
          }
          deleteMany: {
            args: Prisma.PrivateRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload>[]
          }
          upsert: {
            args: Prisma.PrivateRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomPayload>
          }
          aggregate: {
            args: Prisma.PrivateRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateRoom>
          }
          groupBy: {
            args: Prisma.PrivateRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateRoomCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateRoomCountAggregateOutputType> | number
          }
        }
      }
      PrivateRoomMessage: {
        payload: Prisma.$PrivateRoomMessagePayload<ExtArgs>
        fields: Prisma.PrivateRoomMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateRoomMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateRoomMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload>
          }
          findFirst: {
            args: Prisma.PrivateRoomMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateRoomMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload>
          }
          findMany: {
            args: Prisma.PrivateRoomMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload>[]
          }
          create: {
            args: Prisma.PrivateRoomMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload>
          }
          createMany: {
            args: Prisma.PrivateRoomMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateRoomMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload>[]
          }
          delete: {
            args: Prisma.PrivateRoomMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload>
          }
          update: {
            args: Prisma.PrivateRoomMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload>
          }
          deleteMany: {
            args: Prisma.PrivateRoomMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateRoomMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateRoomMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload>[]
          }
          upsert: {
            args: Prisma.PrivateRoomMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateRoomMessagePayload>
          }
          aggregate: {
            args: Prisma.PrivateRoomMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateRoomMessage>
          }
          groupBy: {
            args: Prisma.PrivateRoomMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateRoomMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateRoomMessageCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateRoomMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    privacy?: privacyOmit
    song?: songOmit
    message?: MessageOmit
    connection?: connectionOmit
    games?: GamesOmit
    emojiCharades?: EmojiCharadesOmit
    scoring?: ScoringOmit
    globalChats?: GlobalChatsOmit
    globalChatMessage?: GlobalChatMessageOmit
    privateRoom?: PrivateRoomOmit
    privateRoomMessage?: PrivateRoomMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    recvMessages: number
    sentMessages: number
    globalMessages: number
    privateRoomMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recvMessages?: boolean | UserCountOutputTypeCountRecvMessagesArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    globalMessages?: boolean | UserCountOutputTypeCountGlobalMessagesArgs
    privateRoomMessages?: boolean | UserCountOutputTypeCountPrivateRoomMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecvMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGlobalMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrivateRoomMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateRoomMessageWhereInput
  }


  /**
   * Count Type GlobalChatsCountOutputType
   */

  export type GlobalChatsCountOutputType = {
    messages: number
  }

  export type GlobalChatsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | GlobalChatsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * GlobalChatsCountOutputType without action
   */
  export type GlobalChatsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatsCountOutputType
     */
    select?: GlobalChatsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GlobalChatsCountOutputType without action
   */
  export type GlobalChatsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalChatMessageWhereInput
  }


  /**
   * Count Type PrivateRoomCountOutputType
   */

  export type PrivateRoomCountOutputType = {
    messages: number
  }

  export type PrivateRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | PrivateRoomCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * PrivateRoomCountOutputType without action
   */
  export type PrivateRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomCountOutputType
     */
    select?: PrivateRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrivateRoomCountOutputType without action
   */
  export type PrivateRoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateRoomMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    googleId: string | null
    mobileNumber: string | null
    bio: string | null
    avatar: string | null
    avatar2: string | null
    birthday: Date | null
    gender: string | null
    horoscope: string | null
    mood: string | null
    purpose: string | null
    prefferGender: string | null
    intentions: string | null
    experienceLevel: string | null
    status: string | null
    attachmentStyle: string | null
    beliefSystem: string | null
    mbtiType: string | null
    uiTheme: string | null
    instagram: string | null
    facebook: string | null
    isOnline: boolean | null
    lastSeen: Date | null
    profileCompleted: boolean | null
    isVerified: boolean | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    googleId: string | null
    mobileNumber: string | null
    bio: string | null
    avatar: string | null
    avatar2: string | null
    birthday: Date | null
    gender: string | null
    horoscope: string | null
    mood: string | null
    purpose: string | null
    prefferGender: string | null
    intentions: string | null
    experienceLevel: string | null
    status: string | null
    attachmentStyle: string | null
    beliefSystem: string | null
    mbtiType: string | null
    uiTheme: string | null
    instagram: string | null
    facebook: string | null
    isOnline: boolean | null
    lastSeen: Date | null
    profileCompleted: boolean | null
    isVerified: boolean | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    googleId: number
    mobileNumber: number
    bio: number
    avatar: number
    avatar2: number
    images: number
    birthday: number
    gender: number
    horoscope: number
    mood: number
    purpose: number
    prefferGender: number
    intentions: number
    experienceLevel: number
    preferredMatch: number
    primaryNeurotype: number
    status: number
    attachmentStyle: number
    beliefSystem: number
    mbtiType: number
    interest: number
    topArtists: number
    favoriteGenres: number
    uiTheme: number
    instagram: number
    facebook: number
    isOnline: number
    lastSeen: number
    profileCompleted: number
    isVerified: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    googleId?: true
    mobileNumber?: true
    bio?: true
    avatar?: true
    avatar2?: true
    birthday?: true
    gender?: true
    horoscope?: true
    mood?: true
    purpose?: true
    prefferGender?: true
    intentions?: true
    experienceLevel?: true
    status?: true
    attachmentStyle?: true
    beliefSystem?: true
    mbtiType?: true
    uiTheme?: true
    instagram?: true
    facebook?: true
    isOnline?: true
    lastSeen?: true
    profileCompleted?: true
    isVerified?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    googleId?: true
    mobileNumber?: true
    bio?: true
    avatar?: true
    avatar2?: true
    birthday?: true
    gender?: true
    horoscope?: true
    mood?: true
    purpose?: true
    prefferGender?: true
    intentions?: true
    experienceLevel?: true
    status?: true
    attachmentStyle?: true
    beliefSystem?: true
    mbtiType?: true
    uiTheme?: true
    instagram?: true
    facebook?: true
    isOnline?: true
    lastSeen?: true
    profileCompleted?: true
    isVerified?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    googleId?: true
    mobileNumber?: true
    bio?: true
    avatar?: true
    avatar2?: true
    images?: true
    birthday?: true
    gender?: true
    horoscope?: true
    mood?: true
    purpose?: true
    prefferGender?: true
    intentions?: true
    experienceLevel?: true
    preferredMatch?: true
    primaryNeurotype?: true
    status?: true
    attachmentStyle?: true
    beliefSystem?: true
    mbtiType?: true
    interest?: true
    topArtists?: true
    favoriteGenres?: true
    uiTheme?: true
    instagram?: true
    facebook?: true
    isOnline?: true
    lastSeen?: true
    profileCompleted?: true
    isVerified?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string | null
    googleId: string | null
    mobileNumber: string | null
    bio: string | null
    avatar: string | null
    avatar2: string | null
    images: string[]
    birthday: Date | null
    gender: string | null
    horoscope: string | null
    mood: string | null
    purpose: string | null
    prefferGender: string | null
    intentions: string | null
    experienceLevel: string | null
    preferredMatch: string[]
    primaryNeurotype: string[]
    status: string | null
    attachmentStyle: string | null
    beliefSystem: string | null
    mbtiType: string | null
    interest: string[]
    topArtists: string[]
    favoriteGenres: string[]
    uiTheme: string | null
    instagram: string | null
    facebook: string | null
    isOnline: boolean
    lastSeen: Date | null
    profileCompleted: boolean
    isVerified: boolean
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    mobileNumber?: boolean
    bio?: boolean
    avatar?: boolean
    avatar2?: boolean
    images?: boolean
    birthday?: boolean
    gender?: boolean
    horoscope?: boolean
    mood?: boolean
    purpose?: boolean
    prefferGender?: boolean
    intentions?: boolean
    experienceLevel?: boolean
    preferredMatch?: boolean
    primaryNeurotype?: boolean
    status?: boolean
    attachmentStyle?: boolean
    beliefSystem?: boolean
    mbtiType?: boolean
    interest?: boolean
    topArtists?: boolean
    favoriteGenres?: boolean
    uiTheme?: boolean
    instagram?: boolean
    facebook?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recvMessages?: boolean | User$recvMessagesArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    globalMessages?: boolean | User$globalMessagesArgs<ExtArgs>
    privateRoomMessages?: boolean | User$privateRoomMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    mobileNumber?: boolean
    bio?: boolean
    avatar?: boolean
    avatar2?: boolean
    images?: boolean
    birthday?: boolean
    gender?: boolean
    horoscope?: boolean
    mood?: boolean
    purpose?: boolean
    prefferGender?: boolean
    intentions?: boolean
    experienceLevel?: boolean
    preferredMatch?: boolean
    primaryNeurotype?: boolean
    status?: boolean
    attachmentStyle?: boolean
    beliefSystem?: boolean
    mbtiType?: boolean
    interest?: boolean
    topArtists?: boolean
    favoriteGenres?: boolean
    uiTheme?: boolean
    instagram?: boolean
    facebook?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    mobileNumber?: boolean
    bio?: boolean
    avatar?: boolean
    avatar2?: boolean
    images?: boolean
    birthday?: boolean
    gender?: boolean
    horoscope?: boolean
    mood?: boolean
    purpose?: boolean
    prefferGender?: boolean
    intentions?: boolean
    experienceLevel?: boolean
    preferredMatch?: boolean
    primaryNeurotype?: boolean
    status?: boolean
    attachmentStyle?: boolean
    beliefSystem?: boolean
    mbtiType?: boolean
    interest?: boolean
    topArtists?: boolean
    favoriteGenres?: boolean
    uiTheme?: boolean
    instagram?: boolean
    facebook?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    mobileNumber?: boolean
    bio?: boolean
    avatar?: boolean
    avatar2?: boolean
    images?: boolean
    birthday?: boolean
    gender?: boolean
    horoscope?: boolean
    mood?: boolean
    purpose?: boolean
    prefferGender?: boolean
    intentions?: boolean
    experienceLevel?: boolean
    preferredMatch?: boolean
    primaryNeurotype?: boolean
    status?: boolean
    attachmentStyle?: boolean
    beliefSystem?: boolean
    mbtiType?: boolean
    interest?: boolean
    topArtists?: boolean
    favoriteGenres?: boolean
    uiTheme?: boolean
    instagram?: boolean
    facebook?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "googleId" | "mobileNumber" | "bio" | "avatar" | "avatar2" | "images" | "birthday" | "gender" | "horoscope" | "mood" | "purpose" | "prefferGender" | "intentions" | "experienceLevel" | "preferredMatch" | "primaryNeurotype" | "status" | "attachmentStyle" | "beliefSystem" | "mbtiType" | "interest" | "topArtists" | "favoriteGenres" | "uiTheme" | "instagram" | "facebook" | "isOnline" | "lastSeen" | "profileCompleted" | "isVerified" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recvMessages?: boolean | User$recvMessagesArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    globalMessages?: boolean | User$globalMessagesArgs<ExtArgs>
    privateRoomMessages?: boolean | User$privateRoomMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      recvMessages: Prisma.$MessagePayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      globalMessages: Prisma.$GlobalChatMessagePayload<ExtArgs>[]
      privateRoomMessages: Prisma.$PrivateRoomMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string | null
      googleId: string | null
      mobileNumber: string | null
      bio: string | null
      avatar: string | null
      avatar2: string | null
      images: string[]
      birthday: Date | null
      gender: string | null
      horoscope: string | null
      mood: string | null
      purpose: string | null
      prefferGender: string | null
      intentions: string | null
      experienceLevel: string | null
      preferredMatch: string[]
      primaryNeurotype: string[]
      status: string | null
      attachmentStyle: string | null
      beliefSystem: string | null
      mbtiType: string | null
      interest: string[]
      topArtists: string[]
      favoriteGenres: string[]
      uiTheme: string | null
      instagram: string | null
      facebook: string | null
      isOnline: boolean
      lastSeen: Date | null
      profileCompleted: boolean
      isVerified: boolean
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recvMessages<T extends User$recvMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$recvMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    globalMessages<T extends User$globalMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$globalMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    privateRoomMessages<T extends User$privateRoomMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$privateRoomMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly mobileNumber: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly avatar2: FieldRef<"User", 'String'>
    readonly images: FieldRef<"User", 'String[]'>
    readonly birthday: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'String'>
    readonly horoscope: FieldRef<"User", 'String'>
    readonly mood: FieldRef<"User", 'String'>
    readonly purpose: FieldRef<"User", 'String'>
    readonly prefferGender: FieldRef<"User", 'String'>
    readonly intentions: FieldRef<"User", 'String'>
    readonly experienceLevel: FieldRef<"User", 'String'>
    readonly preferredMatch: FieldRef<"User", 'String[]'>
    readonly primaryNeurotype: FieldRef<"User", 'String[]'>
    readonly status: FieldRef<"User", 'String'>
    readonly attachmentStyle: FieldRef<"User", 'String'>
    readonly beliefSystem: FieldRef<"User", 'String'>
    readonly mbtiType: FieldRef<"User", 'String'>
    readonly interest: FieldRef<"User", 'String[]'>
    readonly topArtists: FieldRef<"User", 'String[]'>
    readonly favoriteGenres: FieldRef<"User", 'String[]'>
    readonly uiTheme: FieldRef<"User", 'String'>
    readonly instagram: FieldRef<"User", 'String'>
    readonly facebook: FieldRef<"User", 'String'>
    readonly isOnline: FieldRef<"User", 'Boolean'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly profileCompleted: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.recvMessages
   */
  export type User$recvMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.globalMessages
   */
  export type User$globalMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    where?: GlobalChatMessageWhereInput
    orderBy?: GlobalChatMessageOrderByWithRelationInput | GlobalChatMessageOrderByWithRelationInput[]
    cursor?: GlobalChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlobalChatMessageScalarFieldEnum | GlobalChatMessageScalarFieldEnum[]
  }

  /**
   * User.privateRoomMessages
   */
  export type User$privateRoomMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    where?: PrivateRoomMessageWhereInput
    orderBy?: PrivateRoomMessageOrderByWithRelationInput | PrivateRoomMessageOrderByWithRelationInput[]
    cursor?: PrivateRoomMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateRoomMessageScalarFieldEnum | PrivateRoomMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model privacy
   */

  export type AggregatePrivacy = {
    _count: PrivacyCountAggregateOutputType | null
    _min: PrivacyMinAggregateOutputType | null
    _max: PrivacyMaxAggregateOutputType | null
  }

  export type PrivacyMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    instagramPreference: boolean | null
    facebookPreference: boolean | null
  }

  export type PrivacyMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    instagramPreference: boolean | null
    facebookPreference: boolean | null
  }

  export type PrivacyCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    instagramPreference: number
    facebookPreference: number
    _all: number
  }


  export type PrivacyMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    instagramPreference?: true
    facebookPreference?: true
  }

  export type PrivacyMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    instagramPreference?: true
    facebookPreference?: true
  }

  export type PrivacyCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    instagramPreference?: true
    facebookPreference?: true
    _all?: true
  }

  export type PrivacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which privacy to aggregate.
     */
    where?: privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of privacies to fetch.
     */
    orderBy?: privacyOrderByWithRelationInput | privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` privacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned privacies
    **/
    _count?: true | PrivacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivacyMaxAggregateInputType
  }

  export type GetPrivacyAggregateType<T extends PrivacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivacy[P]>
      : GetScalarType<T[P], AggregatePrivacy[P]>
  }




  export type privacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: privacyWhereInput
    orderBy?: privacyOrderByWithAggregationInput | privacyOrderByWithAggregationInput[]
    by: PrivacyScalarFieldEnum[] | PrivacyScalarFieldEnum
    having?: privacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivacyCountAggregateInputType | true
    _min?: PrivacyMinAggregateInputType
    _max?: PrivacyMaxAggregateInputType
  }

  export type PrivacyGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    instagramPreference: boolean | null
    facebookPreference: boolean | null
    _count: PrivacyCountAggregateOutputType | null
    _min: PrivacyMinAggregateOutputType | null
    _max: PrivacyMaxAggregateOutputType | null
  }

  type GetPrivacyGroupByPayload<T extends privacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivacyGroupByOutputType[P]>
            : GetScalarType<T[P], PrivacyGroupByOutputType[P]>
        }
      >
    >


  export type privacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    instagramPreference?: boolean
    facebookPreference?: boolean
  }, ExtArgs["result"]["privacy"]>

  export type privacySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    instagramPreference?: boolean
    facebookPreference?: boolean
  }, ExtArgs["result"]["privacy"]>

  export type privacySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    instagramPreference?: boolean
    facebookPreference?: boolean
  }, ExtArgs["result"]["privacy"]>

  export type privacySelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    instagramPreference?: boolean
    facebookPreference?: boolean
  }

  export type privacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "instagramPreference" | "facebookPreference", ExtArgs["result"]["privacy"]>

  export type $privacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "privacy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      instagramPreference: boolean | null
      facebookPreference: boolean | null
    }, ExtArgs["result"]["privacy"]>
    composites: {}
  }

  type privacyGetPayload<S extends boolean | null | undefined | privacyDefaultArgs> = $Result.GetResult<Prisma.$privacyPayload, S>

  type privacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<privacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivacyCountAggregateInputType | true
    }

  export interface privacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['privacy'], meta: { name: 'privacy' } }
    /**
     * Find zero or one Privacy that matches the filter.
     * @param {privacyFindUniqueArgs} args - Arguments to find a Privacy
     * @example
     * // Get one Privacy
     * const privacy = await prisma.privacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends privacyFindUniqueArgs>(args: SelectSubset<T, privacyFindUniqueArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Privacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {privacyFindUniqueOrThrowArgs} args - Arguments to find a Privacy
     * @example
     * // Get one Privacy
     * const privacy = await prisma.privacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends privacyFindUniqueOrThrowArgs>(args: SelectSubset<T, privacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Privacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyFindFirstArgs} args - Arguments to find a Privacy
     * @example
     * // Get one Privacy
     * const privacy = await prisma.privacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends privacyFindFirstArgs>(args?: SelectSubset<T, privacyFindFirstArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Privacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyFindFirstOrThrowArgs} args - Arguments to find a Privacy
     * @example
     * // Get one Privacy
     * const privacy = await prisma.privacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends privacyFindFirstOrThrowArgs>(args?: SelectSubset<T, privacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Privacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Privacies
     * const privacies = await prisma.privacy.findMany()
     * 
     * // Get first 10 Privacies
     * const privacies = await prisma.privacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privacyWithIdOnly = await prisma.privacy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends privacyFindManyArgs>(args?: SelectSubset<T, privacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Privacy.
     * @param {privacyCreateArgs} args - Arguments to create a Privacy.
     * @example
     * // Create one Privacy
     * const Privacy = await prisma.privacy.create({
     *   data: {
     *     // ... data to create a Privacy
     *   }
     * })
     * 
     */
    create<T extends privacyCreateArgs>(args: SelectSubset<T, privacyCreateArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Privacies.
     * @param {privacyCreateManyArgs} args - Arguments to create many Privacies.
     * @example
     * // Create many Privacies
     * const privacy = await prisma.privacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends privacyCreateManyArgs>(args?: SelectSubset<T, privacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Privacies and returns the data saved in the database.
     * @param {privacyCreateManyAndReturnArgs} args - Arguments to create many Privacies.
     * @example
     * // Create many Privacies
     * const privacy = await prisma.privacy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Privacies and only return the `id`
     * const privacyWithIdOnly = await prisma.privacy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends privacyCreateManyAndReturnArgs>(args?: SelectSubset<T, privacyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Privacy.
     * @param {privacyDeleteArgs} args - Arguments to delete one Privacy.
     * @example
     * // Delete one Privacy
     * const Privacy = await prisma.privacy.delete({
     *   where: {
     *     // ... filter to delete one Privacy
     *   }
     * })
     * 
     */
    delete<T extends privacyDeleteArgs>(args: SelectSubset<T, privacyDeleteArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Privacy.
     * @param {privacyUpdateArgs} args - Arguments to update one Privacy.
     * @example
     * // Update one Privacy
     * const privacy = await prisma.privacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends privacyUpdateArgs>(args: SelectSubset<T, privacyUpdateArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Privacies.
     * @param {privacyDeleteManyArgs} args - Arguments to filter Privacies to delete.
     * @example
     * // Delete a few Privacies
     * const { count } = await prisma.privacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends privacyDeleteManyArgs>(args?: SelectSubset<T, privacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Privacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Privacies
     * const privacy = await prisma.privacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends privacyUpdateManyArgs>(args: SelectSubset<T, privacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Privacies and returns the data updated in the database.
     * @param {privacyUpdateManyAndReturnArgs} args - Arguments to update many Privacies.
     * @example
     * // Update many Privacies
     * const privacy = await prisma.privacy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Privacies and only return the `id`
     * const privacyWithIdOnly = await prisma.privacy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends privacyUpdateManyAndReturnArgs>(args: SelectSubset<T, privacyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Privacy.
     * @param {privacyUpsertArgs} args - Arguments to update or create a Privacy.
     * @example
     * // Update or create a Privacy
     * const privacy = await prisma.privacy.upsert({
     *   create: {
     *     // ... data to create a Privacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Privacy we want to update
     *   }
     * })
     */
    upsert<T extends privacyUpsertArgs>(args: SelectSubset<T, privacyUpsertArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Privacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyCountArgs} args - Arguments to filter Privacies to count.
     * @example
     * // Count the number of Privacies
     * const count = await prisma.privacy.count({
     *   where: {
     *     // ... the filter for the Privacies we want to count
     *   }
     * })
    **/
    count<T extends privacyCountArgs>(
      args?: Subset<T, privacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Privacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrivacyAggregateArgs>(args: Subset<T, PrivacyAggregateArgs>): Prisma.PrismaPromise<GetPrivacyAggregateType<T>>

    /**
     * Group by Privacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends privacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: privacyGroupByArgs['orderBy'] }
        : { orderBy?: privacyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, privacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the privacy model
   */
  readonly fields: privacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for privacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__privacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the privacy model
   */
  interface privacyFieldRefs {
    readonly id: FieldRef<"privacy", 'String'>
    readonly senderId: FieldRef<"privacy", 'String'>
    readonly receiverId: FieldRef<"privacy", 'String'>
    readonly instagramPreference: FieldRef<"privacy", 'Boolean'>
    readonly facebookPreference: FieldRef<"privacy", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * privacy findUnique
   */
  export type privacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Filter, which privacy to fetch.
     */
    where: privacyWhereUniqueInput
  }

  /**
   * privacy findUniqueOrThrow
   */
  export type privacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Filter, which privacy to fetch.
     */
    where: privacyWhereUniqueInput
  }

  /**
   * privacy findFirst
   */
  export type privacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Filter, which privacy to fetch.
     */
    where?: privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of privacies to fetch.
     */
    orderBy?: privacyOrderByWithRelationInput | privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for privacies.
     */
    cursor?: privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` privacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of privacies.
     */
    distinct?: PrivacyScalarFieldEnum | PrivacyScalarFieldEnum[]
  }

  /**
   * privacy findFirstOrThrow
   */
  export type privacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Filter, which privacy to fetch.
     */
    where?: privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of privacies to fetch.
     */
    orderBy?: privacyOrderByWithRelationInput | privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for privacies.
     */
    cursor?: privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` privacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of privacies.
     */
    distinct?: PrivacyScalarFieldEnum | PrivacyScalarFieldEnum[]
  }

  /**
   * privacy findMany
   */
  export type privacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Filter, which privacies to fetch.
     */
    where?: privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of privacies to fetch.
     */
    orderBy?: privacyOrderByWithRelationInput | privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing privacies.
     */
    cursor?: privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` privacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of privacies.
     */
    distinct?: PrivacyScalarFieldEnum | PrivacyScalarFieldEnum[]
  }

  /**
   * privacy create
   */
  export type privacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * The data needed to create a privacy.
     */
    data: XOR<privacyCreateInput, privacyUncheckedCreateInput>
  }

  /**
   * privacy createMany
   */
  export type privacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many privacies.
     */
    data: privacyCreateManyInput | privacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * privacy createManyAndReturn
   */
  export type privacyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * The data used to create many privacies.
     */
    data: privacyCreateManyInput | privacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * privacy update
   */
  export type privacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * The data needed to update a privacy.
     */
    data: XOR<privacyUpdateInput, privacyUncheckedUpdateInput>
    /**
     * Choose, which privacy to update.
     */
    where: privacyWhereUniqueInput
  }

  /**
   * privacy updateMany
   */
  export type privacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update privacies.
     */
    data: XOR<privacyUpdateManyMutationInput, privacyUncheckedUpdateManyInput>
    /**
     * Filter which privacies to update
     */
    where?: privacyWhereInput
    /**
     * Limit how many privacies to update.
     */
    limit?: number
  }

  /**
   * privacy updateManyAndReturn
   */
  export type privacyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * The data used to update privacies.
     */
    data: XOR<privacyUpdateManyMutationInput, privacyUncheckedUpdateManyInput>
    /**
     * Filter which privacies to update
     */
    where?: privacyWhereInput
    /**
     * Limit how many privacies to update.
     */
    limit?: number
  }

  /**
   * privacy upsert
   */
  export type privacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * The filter to search for the privacy to update in case it exists.
     */
    where: privacyWhereUniqueInput
    /**
     * In case the privacy found by the `where` argument doesn't exist, create a new privacy with this data.
     */
    create: XOR<privacyCreateInput, privacyUncheckedCreateInput>
    /**
     * In case the privacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<privacyUpdateInput, privacyUncheckedUpdateInput>
  }

  /**
   * privacy delete
   */
  export type privacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Filter which privacy to delete.
     */
    where: privacyWhereUniqueInput
  }

  /**
   * privacy deleteMany
   */
  export type privacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which privacies to delete
     */
    where?: privacyWhereInput
    /**
     * Limit how many privacies to delete.
     */
    limit?: number
  }

  /**
   * privacy without action
   */
  export type privacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
  }


  /**
   * Model song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    duration: number | null
  }

  export type SongSumAggregateOutputType = {
    duration: number | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    song_name: string | null
    song_url: string | null
    duration: number | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    song_name: string | null
    song_url: string | null
    duration: number | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    song_name: number
    song_url: number
    duration: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    duration?: true
  }

  export type SongSumAggregateInputType = {
    duration?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    song_name?: true
    song_url?: true
    duration?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    song_name?: true
    song_url?: true
    duration?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    song_name?: true
    song_url?: true
    duration?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which song to aggregate.
     */
    where?: songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songOrderByWithRelationInput | songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type songGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: songWhereInput
    orderBy?: songOrderByWithAggregationInput | songOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: songScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: string
    song_name: string
    song_url: string
    duration: number
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends songGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type songSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    song_name?: boolean
    song_url?: boolean
    duration?: boolean
  }, ExtArgs["result"]["song"]>

  export type songSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    song_name?: boolean
    song_url?: boolean
    duration?: boolean
  }, ExtArgs["result"]["song"]>

  export type songSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    song_name?: boolean
    song_url?: boolean
    duration?: boolean
  }, ExtArgs["result"]["song"]>

  export type songSelectScalar = {
    id?: boolean
    song_name?: boolean
    song_url?: boolean
    duration?: boolean
  }

  export type songOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "song_name" | "song_url" | "duration", ExtArgs["result"]["song"]>

  export type $songPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "song"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      song_name: string
      song_url: string
      duration: number
    }, ExtArgs["result"]["song"]>
    composites: {}
  }

  type songGetPayload<S extends boolean | null | undefined | songDefaultArgs> = $Result.GetResult<Prisma.$songPayload, S>

  type songCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<songFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface songDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['song'], meta: { name: 'song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {songFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends songFindUniqueArgs>(args: SelectSubset<T, songFindUniqueArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Song that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {songFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends songFindUniqueOrThrowArgs>(args: SelectSubset<T, songFindUniqueOrThrowArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends songFindFirstArgs>(args?: SelectSubset<T, songFindFirstArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends songFindFirstOrThrowArgs>(args?: SelectSubset<T, songFindFirstOrThrowArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends songFindManyArgs>(args?: SelectSubset<T, songFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Song.
     * @param {songCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
     */
    create<T extends songCreateArgs>(args: SelectSubset<T, songCreateArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Songs.
     * @param {songCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends songCreateManyArgs>(args?: SelectSubset<T, songCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {songCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends songCreateManyAndReturnArgs>(args?: SelectSubset<T, songCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Song.
     * @param {songDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
     */
    delete<T extends songDeleteArgs>(args: SelectSubset<T, songDeleteArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Song.
     * @param {songUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends songUpdateArgs>(args: SelectSubset<T, songUpdateArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Songs.
     * @param {songDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends songDeleteManyArgs>(args?: SelectSubset<T, songDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends songUpdateManyArgs>(args: SelectSubset<T, songUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs and returns the data updated in the database.
     * @param {songUpdateManyAndReturnArgs} args - Arguments to update many Songs.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends songUpdateManyAndReturnArgs>(args: SelectSubset<T, songUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Song.
     * @param {songUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
     */
    upsert<T extends songUpsertArgs>(args: SelectSubset<T, songUpsertArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends songCountArgs>(
      args?: Subset<T, songCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends songGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: songGroupByArgs['orderBy'] }
        : { orderBy?: songGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, songGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the song model
   */
  readonly fields: songFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__songClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the song model
   */
  interface songFieldRefs {
    readonly id: FieldRef<"song", 'String'>
    readonly song_name: FieldRef<"song", 'String'>
    readonly song_url: FieldRef<"song", 'String'>
    readonly duration: FieldRef<"song", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * song findUnique
   */
  export type songFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * Filter, which song to fetch.
     */
    where: songWhereUniqueInput
  }

  /**
   * song findUniqueOrThrow
   */
  export type songFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * Filter, which song to fetch.
     */
    where: songWhereUniqueInput
  }

  /**
   * song findFirst
   */
  export type songFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * Filter, which song to fetch.
     */
    where?: songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songOrderByWithRelationInput | songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for songs.
     */
    cursor?: songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * song findFirstOrThrow
   */
  export type songFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * Filter, which song to fetch.
     */
    where?: songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songOrderByWithRelationInput | songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for songs.
     */
    cursor?: songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * song findMany
   */
  export type songFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * Filter, which songs to fetch.
     */
    where?: songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songOrderByWithRelationInput | songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing songs.
     */
    cursor?: songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * song create
   */
  export type songCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * The data needed to create a song.
     */
    data: XOR<songCreateInput, songUncheckedCreateInput>
  }

  /**
   * song createMany
   */
  export type songCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many songs.
     */
    data: songCreateManyInput | songCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * song createManyAndReturn
   */
  export type songCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * The data used to create many songs.
     */
    data: songCreateManyInput | songCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * song update
   */
  export type songUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * The data needed to update a song.
     */
    data: XOR<songUpdateInput, songUncheckedUpdateInput>
    /**
     * Choose, which song to update.
     */
    where: songWhereUniqueInput
  }

  /**
   * song updateMany
   */
  export type songUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update songs.
     */
    data: XOR<songUpdateManyMutationInput, songUncheckedUpdateManyInput>
    /**
     * Filter which songs to update
     */
    where?: songWhereInput
    /**
     * Limit how many songs to update.
     */
    limit?: number
  }

  /**
   * song updateManyAndReturn
   */
  export type songUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * The data used to update songs.
     */
    data: XOR<songUpdateManyMutationInput, songUncheckedUpdateManyInput>
    /**
     * Filter which songs to update
     */
    where?: songWhereInput
    /**
     * Limit how many songs to update.
     */
    limit?: number
  }

  /**
   * song upsert
   */
  export type songUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * The filter to search for the song to update in case it exists.
     */
    where: songWhereUniqueInput
    /**
     * In case the song found by the `where` argument doesn't exist, create a new song with this data.
     */
    create: XOR<songCreateInput, songUncheckedCreateInput>
    /**
     * In case the song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<songUpdateInput, songUncheckedUpdateInput>
  }

  /**
   * song delete
   */
  export type songDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
    /**
     * Filter which song to delete.
     */
    where: songWhereUniqueInput
  }

  /**
   * song deleteMany
   */
  export type songDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which songs to delete
     */
    where?: songWhereInput
    /**
     * Limit how many songs to delete.
     */
    limit?: number
  }

  /**
   * song without action
   */
  export type songDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Omit specific fields from the song
     */
    omit?: songOmit<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    text: string | null
    createdAt: Date | null
    seen: boolean | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    text: string | null
    createdAt: Date | null
    seen: boolean | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    text: number
    createdAt: number
    seen: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    text?: true
    createdAt?: true
    seen?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    text?: true
    createdAt?: true
    seen?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    text?: true
    createdAt?: true
    seen?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    text: string
    createdAt: Date
    seen: boolean
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    text?: boolean
    createdAt?: boolean
    seen?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    text?: boolean
    createdAt?: boolean
    seen?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    text?: boolean
    createdAt?: boolean
    seen?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    text?: boolean
    createdAt?: boolean
    seen?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "text" | "createdAt" | "seen", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      receiver: Prisma.$UserPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      text: string
      createdAt: Date
      seen: boolean
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly text: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly seen: FieldRef<"Message", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model connection
   */

  export type AggregateConnection = {
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  export type ConnectionMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: string | null
    updatedAt: Date | null
  }

  export type ConnectionMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: string | null
    updatedAt: Date | null
  }

  export type ConnectionCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    status: number
    updatedAt: number
    _all: number
  }


  export type ConnectionMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    updatedAt?: true
  }

  export type ConnectionMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    updatedAt?: true
  }

  export type ConnectionCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type ConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which connection to aggregate.
     */
    where?: connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of connections to fetch.
     */
    orderBy?: connectionOrderByWithRelationInput | connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned connections
    **/
    _count?: true | ConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionMaxAggregateInputType
  }

  export type GetConnectionAggregateType<T extends ConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnection[P]>
      : GetScalarType<T[P], AggregateConnection[P]>
  }




  export type connectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: connectionWhereInput
    orderBy?: connectionOrderByWithAggregationInput | connectionOrderByWithAggregationInput[]
    by: ConnectionScalarFieldEnum[] | ConnectionScalarFieldEnum
    having?: connectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionCountAggregateInputType | true
    _min?: ConnectionMinAggregateInputType
    _max?: ConnectionMaxAggregateInputType
  }

  export type ConnectionGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    status: string
    updatedAt: Date
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  type GetConnectionGroupByPayload<T extends connectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
        }
      >
    >


  export type connectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["connection"]>

  export type connectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["connection"]>

  export type connectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["connection"]>

  export type connectionSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type connectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "status" | "updatedAt", ExtArgs["result"]["connection"]>

  export type $connectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "connection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      status: string
      updatedAt: Date
    }, ExtArgs["result"]["connection"]>
    composites: {}
  }

  type connectionGetPayload<S extends boolean | null | undefined | connectionDefaultArgs> = $Result.GetResult<Prisma.$connectionPayload, S>

  type connectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<connectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionCountAggregateInputType | true
    }

  export interface connectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['connection'], meta: { name: 'connection' } }
    /**
     * Find zero or one Connection that matches the filter.
     * @param {connectionFindUniqueArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends connectionFindUniqueArgs>(args: SelectSubset<T, connectionFindUniqueArgs<ExtArgs>>): Prisma__connectionClient<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Connection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {connectionFindUniqueOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends connectionFindUniqueOrThrowArgs>(args: SelectSubset<T, connectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__connectionClient<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connectionFindFirstArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends connectionFindFirstArgs>(args?: SelectSubset<T, connectionFindFirstArgs<ExtArgs>>): Prisma__connectionClient<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connectionFindFirstOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends connectionFindFirstOrThrowArgs>(args?: SelectSubset<T, connectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__connectionClient<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connection.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionWithIdOnly = await prisma.connection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends connectionFindManyArgs>(args?: SelectSubset<T, connectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Connection.
     * @param {connectionCreateArgs} args - Arguments to create a Connection.
     * @example
     * // Create one Connection
     * const Connection = await prisma.connection.create({
     *   data: {
     *     // ... data to create a Connection
     *   }
     * })
     * 
     */
    create<T extends connectionCreateArgs>(args: SelectSubset<T, connectionCreateArgs<ExtArgs>>): Prisma__connectionClient<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Connections.
     * @param {connectionCreateManyArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends connectionCreateManyArgs>(args?: SelectSubset<T, connectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Connections and returns the data saved in the database.
     * @param {connectionCreateManyAndReturnArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends connectionCreateManyAndReturnArgs>(args?: SelectSubset<T, connectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Connection.
     * @param {connectionDeleteArgs} args - Arguments to delete one Connection.
     * @example
     * // Delete one Connection
     * const Connection = await prisma.connection.delete({
     *   where: {
     *     // ... filter to delete one Connection
     *   }
     * })
     * 
     */
    delete<T extends connectionDeleteArgs>(args: SelectSubset<T, connectionDeleteArgs<ExtArgs>>): Prisma__connectionClient<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Connection.
     * @param {connectionUpdateArgs} args - Arguments to update one Connection.
     * @example
     * // Update one Connection
     * const connection = await prisma.connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends connectionUpdateArgs>(args: SelectSubset<T, connectionUpdateArgs<ExtArgs>>): Prisma__connectionClient<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Connections.
     * @param {connectionDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends connectionDeleteManyArgs>(args?: SelectSubset<T, connectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends connectionUpdateManyArgs>(args: SelectSubset<T, connectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections and returns the data updated in the database.
     * @param {connectionUpdateManyAndReturnArgs} args - Arguments to update many Connections.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends connectionUpdateManyAndReturnArgs>(args: SelectSubset<T, connectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Connection.
     * @param {connectionUpsertArgs} args - Arguments to update or create a Connection.
     * @example
     * // Update or create a Connection
     * const connection = await prisma.connection.upsert({
     *   create: {
     *     // ... data to create a Connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connection we want to update
     *   }
     * })
     */
    upsert<T extends connectionUpsertArgs>(args: SelectSubset<T, connectionUpsertArgs<ExtArgs>>): Prisma__connectionClient<$Result.GetResult<Prisma.$connectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connectionCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connection.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends connectionCountArgs>(
      args?: Subset<T, connectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConnectionAggregateArgs>(args: Subset<T, ConnectionAggregateArgs>): Prisma.PrismaPromise<GetConnectionAggregateType<T>>

    /**
     * Group by Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {connectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends connectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: connectionGroupByArgs['orderBy'] }
        : { orderBy?: connectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, connectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the connection model
   */
  readonly fields: connectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__connectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the connection model
   */
  interface connectionFieldRefs {
    readonly id: FieldRef<"connection", 'String'>
    readonly senderId: FieldRef<"connection", 'String'>
    readonly receiverId: FieldRef<"connection", 'String'>
    readonly status: FieldRef<"connection", 'String'>
    readonly updatedAt: FieldRef<"connection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * connection findUnique
   */
  export type connectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * Filter, which connection to fetch.
     */
    where: connectionWhereUniqueInput
  }

  /**
   * connection findUniqueOrThrow
   */
  export type connectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * Filter, which connection to fetch.
     */
    where: connectionWhereUniqueInput
  }

  /**
   * connection findFirst
   */
  export type connectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * Filter, which connection to fetch.
     */
    where?: connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of connections to fetch.
     */
    orderBy?: connectionOrderByWithRelationInput | connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for connections.
     */
    cursor?: connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * connection findFirstOrThrow
   */
  export type connectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * Filter, which connection to fetch.
     */
    where?: connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of connections to fetch.
     */
    orderBy?: connectionOrderByWithRelationInput | connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for connections.
     */
    cursor?: connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * connection findMany
   */
  export type connectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * Filter, which connections to fetch.
     */
    where?: connectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of connections to fetch.
     */
    orderBy?: connectionOrderByWithRelationInput | connectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing connections.
     */
    cursor?: connectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * connection create
   */
  export type connectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * The data needed to create a connection.
     */
    data: XOR<connectionCreateInput, connectionUncheckedCreateInput>
  }

  /**
   * connection createMany
   */
  export type connectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many connections.
     */
    data: connectionCreateManyInput | connectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * connection createManyAndReturn
   */
  export type connectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * The data used to create many connections.
     */
    data: connectionCreateManyInput | connectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * connection update
   */
  export type connectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * The data needed to update a connection.
     */
    data: XOR<connectionUpdateInput, connectionUncheckedUpdateInput>
    /**
     * Choose, which connection to update.
     */
    where: connectionWhereUniqueInput
  }

  /**
   * connection updateMany
   */
  export type connectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update connections.
     */
    data: XOR<connectionUpdateManyMutationInput, connectionUncheckedUpdateManyInput>
    /**
     * Filter which connections to update
     */
    where?: connectionWhereInput
    /**
     * Limit how many connections to update.
     */
    limit?: number
  }

  /**
   * connection updateManyAndReturn
   */
  export type connectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * The data used to update connections.
     */
    data: XOR<connectionUpdateManyMutationInput, connectionUncheckedUpdateManyInput>
    /**
     * Filter which connections to update
     */
    where?: connectionWhereInput
    /**
     * Limit how many connections to update.
     */
    limit?: number
  }

  /**
   * connection upsert
   */
  export type connectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * The filter to search for the connection to update in case it exists.
     */
    where: connectionWhereUniqueInput
    /**
     * In case the connection found by the `where` argument doesn't exist, create a new connection with this data.
     */
    create: XOR<connectionCreateInput, connectionUncheckedCreateInput>
    /**
     * In case the connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<connectionUpdateInput, connectionUncheckedUpdateInput>
  }

  /**
   * connection delete
   */
  export type connectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
    /**
     * Filter which connection to delete.
     */
    where: connectionWhereUniqueInput
  }

  /**
   * connection deleteMany
   */
  export type connectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which connections to delete
     */
    where?: connectionWhereInput
    /**
     * Limit how many connections to delete.
     */
    limit?: number
  }

  /**
   * connection without action
   */
  export type connectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the connection
     */
    select?: connectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the connection
     */
    omit?: connectionOmit<ExtArgs> | null
  }


  /**
   * Model Games
   */

  export type AggregateGames = {
    _count: GamesCountAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  export type GamesMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
  }

  export type GamesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
  }

  export type GamesCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    _all: number
  }


  export type GamesMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
  }

  export type GamesMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
  }

  export type GamesCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    _all?: true
  }

  export type GamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to aggregate.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamesMaxAggregateInputType
  }

  export type GetGamesAggregateType<T extends GamesAggregateArgs> = {
        [P in keyof T & keyof AggregateGames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGames[P]>
      : GetScalarType<T[P], AggregateGames[P]>
  }




  export type GamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamesWhereInput
    orderBy?: GamesOrderByWithAggregationInput | GamesOrderByWithAggregationInput[]
    by: GamesScalarFieldEnum[] | GamesScalarFieldEnum
    having?: GamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamesCountAggregateInputType | true
    _min?: GamesMinAggregateInputType
    _max?: GamesMaxAggregateInputType
  }

  export type GamesGroupByOutputType = {
    id: string
    name: string
    icon: string
    _count: GamesCountAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  type GetGamesGroupByPayload<T extends GamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamesGroupByOutputType[P]>
            : GetScalarType<T[P], GamesGroupByOutputType[P]>
        }
      >
    >


  export type GamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
  }, ExtArgs["result"]["games"]>

  export type GamesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
  }, ExtArgs["result"]["games"]>

  export type GamesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
  }, ExtArgs["result"]["games"]>

  export type GamesSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
  }

  export type GamesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon", ExtArgs["result"]["games"]>

  export type $GamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Games"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string
    }, ExtArgs["result"]["games"]>
    composites: {}
  }

  type GamesGetPayload<S extends boolean | null | undefined | GamesDefaultArgs> = $Result.GetResult<Prisma.$GamesPayload, S>

  type GamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GamesCountAggregateInputType | true
    }

  export interface GamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Games'], meta: { name: 'Games' } }
    /**
     * Find zero or one Games that matches the filter.
     * @param {GamesFindUniqueArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GamesFindUniqueArgs>(args: SelectSubset<T, GamesFindUniqueArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Games that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GamesFindUniqueOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GamesFindUniqueOrThrowArgs>(args: SelectSubset<T, GamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindFirstArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GamesFindFirstArgs>(args?: SelectSubset<T, GamesFindFirstArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindFirstOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GamesFindFirstOrThrowArgs>(args?: SelectSubset<T, GamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.games.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.games.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gamesWithIdOnly = await prisma.games.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GamesFindManyArgs>(args?: SelectSubset<T, GamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Games.
     * @param {GamesCreateArgs} args - Arguments to create a Games.
     * @example
     * // Create one Games
     * const Games = await prisma.games.create({
     *   data: {
     *     // ... data to create a Games
     *   }
     * })
     * 
     */
    create<T extends GamesCreateArgs>(args: SelectSubset<T, GamesCreateArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GamesCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GamesCreateManyArgs>(args?: SelectSubset<T, GamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GamesCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gamesWithIdOnly = await prisma.games.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GamesCreateManyAndReturnArgs>(args?: SelectSubset<T, GamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Games.
     * @param {GamesDeleteArgs} args - Arguments to delete one Games.
     * @example
     * // Delete one Games
     * const Games = await prisma.games.delete({
     *   where: {
     *     // ... filter to delete one Games
     *   }
     * })
     * 
     */
    delete<T extends GamesDeleteArgs>(args: SelectSubset<T, GamesDeleteArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Games.
     * @param {GamesUpdateArgs} args - Arguments to update one Games.
     * @example
     * // Update one Games
     * const games = await prisma.games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GamesUpdateArgs>(args: SelectSubset<T, GamesUpdateArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GamesDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GamesDeleteManyArgs>(args?: SelectSubset<T, GamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GamesUpdateManyArgs>(args: SelectSubset<T, GamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GamesUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gamesWithIdOnly = await prisma.games.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GamesUpdateManyAndReturnArgs>(args: SelectSubset<T, GamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Games.
     * @param {GamesUpsertArgs} args - Arguments to update or create a Games.
     * @example
     * // Update or create a Games
     * const games = await prisma.games.upsert({
     *   create: {
     *     // ... data to create a Games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Games we want to update
     *   }
     * })
     */
    upsert<T extends GamesUpsertArgs>(args: SelectSubset<T, GamesUpsertArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.games.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GamesCountArgs>(
      args?: Subset<T, GamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GamesAggregateArgs>(args: Subset<T, GamesAggregateArgs>): Prisma.PrismaPromise<GetGamesAggregateType<T>>

    /**
     * Group by Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GamesGroupByArgs['orderBy'] }
        : { orderBy?: GamesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Games model
   */
  readonly fields: GamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Games.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Games model
   */
  interface GamesFieldRefs {
    readonly id: FieldRef<"Games", 'String'>
    readonly name: FieldRef<"Games", 'String'>
    readonly icon: FieldRef<"Games", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Games findUnique
   */
  export type GamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games findUniqueOrThrow
   */
  export type GamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games findFirst
   */
  export type GamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games findFirstOrThrow
   */
  export type GamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games findMany
   */
  export type GamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games create
   */
  export type GamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The data needed to create a Games.
     */
    data: XOR<GamesCreateInput, GamesUncheckedCreateInput>
  }

  /**
   * Games createMany
   */
  export type GamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GamesCreateManyInput | GamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Games createManyAndReturn
   */
  export type GamesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GamesCreateManyInput | GamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Games update
   */
  export type GamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The data needed to update a Games.
     */
    data: XOR<GamesUpdateInput, GamesUncheckedUpdateInput>
    /**
     * Choose, which Games to update.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games updateMany
   */
  export type GamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GamesUpdateManyMutationInput, GamesUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Games updateManyAndReturn
   */
  export type GamesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GamesUpdateManyMutationInput, GamesUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Games upsert
   */
  export type GamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The filter to search for the Games to update in case it exists.
     */
    where: GamesWhereUniqueInput
    /**
     * In case the Games found by the `where` argument doesn't exist, create a new Games with this data.
     */
    create: XOR<GamesCreateInput, GamesUncheckedCreateInput>
    /**
     * In case the Games was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GamesUpdateInput, GamesUncheckedUpdateInput>
  }

  /**
   * Games delete
   */
  export type GamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Filter which Games to delete.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games deleteMany
   */
  export type GamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Games without action
   */
  export type GamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
  }


  /**
   * Model EmojiCharades
   */

  export type AggregateEmojiCharades = {
    _count: EmojiCharadesCountAggregateOutputType | null
    _min: EmojiCharadesMinAggregateOutputType | null
    _max: EmojiCharadesMaxAggregateOutputType | null
  }

  export type EmojiCharadesMinAggregateOutputType = {
    id: string | null
    questions: string | null
    answer: string | null
  }

  export type EmojiCharadesMaxAggregateOutputType = {
    id: string | null
    questions: string | null
    answer: string | null
  }

  export type EmojiCharadesCountAggregateOutputType = {
    id: number
    questions: number
    answer: number
    _all: number
  }


  export type EmojiCharadesMinAggregateInputType = {
    id?: true
    questions?: true
    answer?: true
  }

  export type EmojiCharadesMaxAggregateInputType = {
    id?: true
    questions?: true
    answer?: true
  }

  export type EmojiCharadesCountAggregateInputType = {
    id?: true
    questions?: true
    answer?: true
    _all?: true
  }

  export type EmojiCharadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmojiCharades to aggregate.
     */
    where?: EmojiCharadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiCharades to fetch.
     */
    orderBy?: EmojiCharadesOrderByWithRelationInput | EmojiCharadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmojiCharadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiCharades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiCharades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmojiCharades
    **/
    _count?: true | EmojiCharadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmojiCharadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmojiCharadesMaxAggregateInputType
  }

  export type GetEmojiCharadesAggregateType<T extends EmojiCharadesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmojiCharades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmojiCharades[P]>
      : GetScalarType<T[P], AggregateEmojiCharades[P]>
  }




  export type EmojiCharadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmojiCharadesWhereInput
    orderBy?: EmojiCharadesOrderByWithAggregationInput | EmojiCharadesOrderByWithAggregationInput[]
    by: EmojiCharadesScalarFieldEnum[] | EmojiCharadesScalarFieldEnum
    having?: EmojiCharadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmojiCharadesCountAggregateInputType | true
    _min?: EmojiCharadesMinAggregateInputType
    _max?: EmojiCharadesMaxAggregateInputType
  }

  export type EmojiCharadesGroupByOutputType = {
    id: string
    questions: string
    answer: string
    _count: EmojiCharadesCountAggregateOutputType | null
    _min: EmojiCharadesMinAggregateOutputType | null
    _max: EmojiCharadesMaxAggregateOutputType | null
  }

  type GetEmojiCharadesGroupByPayload<T extends EmojiCharadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmojiCharadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmojiCharadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmojiCharadesGroupByOutputType[P]>
            : GetScalarType<T[P], EmojiCharadesGroupByOutputType[P]>
        }
      >
    >


  export type EmojiCharadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questions?: boolean
    answer?: boolean
  }, ExtArgs["result"]["emojiCharades"]>

  export type EmojiCharadesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questions?: boolean
    answer?: boolean
  }, ExtArgs["result"]["emojiCharades"]>

  export type EmojiCharadesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questions?: boolean
    answer?: boolean
  }, ExtArgs["result"]["emojiCharades"]>

  export type EmojiCharadesSelectScalar = {
    id?: boolean
    questions?: boolean
    answer?: boolean
  }

  export type EmojiCharadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questions" | "answer", ExtArgs["result"]["emojiCharades"]>

  export type $EmojiCharadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmojiCharades"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questions: string
      answer: string
    }, ExtArgs["result"]["emojiCharades"]>
    composites: {}
  }

  type EmojiCharadesGetPayload<S extends boolean | null | undefined | EmojiCharadesDefaultArgs> = $Result.GetResult<Prisma.$EmojiCharadesPayload, S>

  type EmojiCharadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmojiCharadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmojiCharadesCountAggregateInputType | true
    }

  export interface EmojiCharadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmojiCharades'], meta: { name: 'EmojiCharades' } }
    /**
     * Find zero or one EmojiCharades that matches the filter.
     * @param {EmojiCharadesFindUniqueArgs} args - Arguments to find a EmojiCharades
     * @example
     * // Get one EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmojiCharadesFindUniqueArgs>(args: SelectSubset<T, EmojiCharadesFindUniqueArgs<ExtArgs>>): Prisma__EmojiCharadesClient<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmojiCharades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmojiCharadesFindUniqueOrThrowArgs} args - Arguments to find a EmojiCharades
     * @example
     * // Get one EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmojiCharadesFindUniqueOrThrowArgs>(args: SelectSubset<T, EmojiCharadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmojiCharadesClient<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmojiCharades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiCharadesFindFirstArgs} args - Arguments to find a EmojiCharades
     * @example
     * // Get one EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmojiCharadesFindFirstArgs>(args?: SelectSubset<T, EmojiCharadesFindFirstArgs<ExtArgs>>): Prisma__EmojiCharadesClient<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmojiCharades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiCharadesFindFirstOrThrowArgs} args - Arguments to find a EmojiCharades
     * @example
     * // Get one EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmojiCharadesFindFirstOrThrowArgs>(args?: SelectSubset<T, EmojiCharadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmojiCharadesClient<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmojiCharades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiCharadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.findMany()
     * 
     * // Get first 10 EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emojiCharadesWithIdOnly = await prisma.emojiCharades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmojiCharadesFindManyArgs>(args?: SelectSubset<T, EmojiCharadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmojiCharades.
     * @param {EmojiCharadesCreateArgs} args - Arguments to create a EmojiCharades.
     * @example
     * // Create one EmojiCharades
     * const EmojiCharades = await prisma.emojiCharades.create({
     *   data: {
     *     // ... data to create a EmojiCharades
     *   }
     * })
     * 
     */
    create<T extends EmojiCharadesCreateArgs>(args: SelectSubset<T, EmojiCharadesCreateArgs<ExtArgs>>): Prisma__EmojiCharadesClient<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmojiCharades.
     * @param {EmojiCharadesCreateManyArgs} args - Arguments to create many EmojiCharades.
     * @example
     * // Create many EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmojiCharadesCreateManyArgs>(args?: SelectSubset<T, EmojiCharadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmojiCharades and returns the data saved in the database.
     * @param {EmojiCharadesCreateManyAndReturnArgs} args - Arguments to create many EmojiCharades.
     * @example
     * // Create many EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmojiCharades and only return the `id`
     * const emojiCharadesWithIdOnly = await prisma.emojiCharades.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmojiCharadesCreateManyAndReturnArgs>(args?: SelectSubset<T, EmojiCharadesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmojiCharades.
     * @param {EmojiCharadesDeleteArgs} args - Arguments to delete one EmojiCharades.
     * @example
     * // Delete one EmojiCharades
     * const EmojiCharades = await prisma.emojiCharades.delete({
     *   where: {
     *     // ... filter to delete one EmojiCharades
     *   }
     * })
     * 
     */
    delete<T extends EmojiCharadesDeleteArgs>(args: SelectSubset<T, EmojiCharadesDeleteArgs<ExtArgs>>): Prisma__EmojiCharadesClient<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmojiCharades.
     * @param {EmojiCharadesUpdateArgs} args - Arguments to update one EmojiCharades.
     * @example
     * // Update one EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmojiCharadesUpdateArgs>(args: SelectSubset<T, EmojiCharadesUpdateArgs<ExtArgs>>): Prisma__EmojiCharadesClient<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmojiCharades.
     * @param {EmojiCharadesDeleteManyArgs} args - Arguments to filter EmojiCharades to delete.
     * @example
     * // Delete a few EmojiCharades
     * const { count } = await prisma.emojiCharades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmojiCharadesDeleteManyArgs>(args?: SelectSubset<T, EmojiCharadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmojiCharades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiCharadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmojiCharadesUpdateManyArgs>(args: SelectSubset<T, EmojiCharadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmojiCharades and returns the data updated in the database.
     * @param {EmojiCharadesUpdateManyAndReturnArgs} args - Arguments to update many EmojiCharades.
     * @example
     * // Update many EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmojiCharades and only return the `id`
     * const emojiCharadesWithIdOnly = await prisma.emojiCharades.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmojiCharadesUpdateManyAndReturnArgs>(args: SelectSubset<T, EmojiCharadesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmojiCharades.
     * @param {EmojiCharadesUpsertArgs} args - Arguments to update or create a EmojiCharades.
     * @example
     * // Update or create a EmojiCharades
     * const emojiCharades = await prisma.emojiCharades.upsert({
     *   create: {
     *     // ... data to create a EmojiCharades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmojiCharades we want to update
     *   }
     * })
     */
    upsert<T extends EmojiCharadesUpsertArgs>(args: SelectSubset<T, EmojiCharadesUpsertArgs<ExtArgs>>): Prisma__EmojiCharadesClient<$Result.GetResult<Prisma.$EmojiCharadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmojiCharades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiCharadesCountArgs} args - Arguments to filter EmojiCharades to count.
     * @example
     * // Count the number of EmojiCharades
     * const count = await prisma.emojiCharades.count({
     *   where: {
     *     // ... the filter for the EmojiCharades we want to count
     *   }
     * })
    **/
    count<T extends EmojiCharadesCountArgs>(
      args?: Subset<T, EmojiCharadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmojiCharadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmojiCharades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiCharadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmojiCharadesAggregateArgs>(args: Subset<T, EmojiCharadesAggregateArgs>): Prisma.PrismaPromise<GetEmojiCharadesAggregateType<T>>

    /**
     * Group by EmojiCharades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiCharadesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmojiCharadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmojiCharadesGroupByArgs['orderBy'] }
        : { orderBy?: EmojiCharadesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmojiCharadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmojiCharadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmojiCharades model
   */
  readonly fields: EmojiCharadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmojiCharades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmojiCharadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmojiCharades model
   */
  interface EmojiCharadesFieldRefs {
    readonly id: FieldRef<"EmojiCharades", 'String'>
    readonly questions: FieldRef<"EmojiCharades", 'String'>
    readonly answer: FieldRef<"EmojiCharades", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmojiCharades findUnique
   */
  export type EmojiCharadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * Filter, which EmojiCharades to fetch.
     */
    where: EmojiCharadesWhereUniqueInput
  }

  /**
   * EmojiCharades findUniqueOrThrow
   */
  export type EmojiCharadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * Filter, which EmojiCharades to fetch.
     */
    where: EmojiCharadesWhereUniqueInput
  }

  /**
   * EmojiCharades findFirst
   */
  export type EmojiCharadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * Filter, which EmojiCharades to fetch.
     */
    where?: EmojiCharadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiCharades to fetch.
     */
    orderBy?: EmojiCharadesOrderByWithRelationInput | EmojiCharadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmojiCharades.
     */
    cursor?: EmojiCharadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiCharades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiCharades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmojiCharades.
     */
    distinct?: EmojiCharadesScalarFieldEnum | EmojiCharadesScalarFieldEnum[]
  }

  /**
   * EmojiCharades findFirstOrThrow
   */
  export type EmojiCharadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * Filter, which EmojiCharades to fetch.
     */
    where?: EmojiCharadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiCharades to fetch.
     */
    orderBy?: EmojiCharadesOrderByWithRelationInput | EmojiCharadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmojiCharades.
     */
    cursor?: EmojiCharadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiCharades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiCharades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmojiCharades.
     */
    distinct?: EmojiCharadesScalarFieldEnum | EmojiCharadesScalarFieldEnum[]
  }

  /**
   * EmojiCharades findMany
   */
  export type EmojiCharadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * Filter, which EmojiCharades to fetch.
     */
    where?: EmojiCharadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiCharades to fetch.
     */
    orderBy?: EmojiCharadesOrderByWithRelationInput | EmojiCharadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmojiCharades.
     */
    cursor?: EmojiCharadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiCharades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiCharades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmojiCharades.
     */
    distinct?: EmojiCharadesScalarFieldEnum | EmojiCharadesScalarFieldEnum[]
  }

  /**
   * EmojiCharades create
   */
  export type EmojiCharadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * The data needed to create a EmojiCharades.
     */
    data: XOR<EmojiCharadesCreateInput, EmojiCharadesUncheckedCreateInput>
  }

  /**
   * EmojiCharades createMany
   */
  export type EmojiCharadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmojiCharades.
     */
    data: EmojiCharadesCreateManyInput | EmojiCharadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmojiCharades createManyAndReturn
   */
  export type EmojiCharadesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * The data used to create many EmojiCharades.
     */
    data: EmojiCharadesCreateManyInput | EmojiCharadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmojiCharades update
   */
  export type EmojiCharadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * The data needed to update a EmojiCharades.
     */
    data: XOR<EmojiCharadesUpdateInput, EmojiCharadesUncheckedUpdateInput>
    /**
     * Choose, which EmojiCharades to update.
     */
    where: EmojiCharadesWhereUniqueInput
  }

  /**
   * EmojiCharades updateMany
   */
  export type EmojiCharadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmojiCharades.
     */
    data: XOR<EmojiCharadesUpdateManyMutationInput, EmojiCharadesUncheckedUpdateManyInput>
    /**
     * Filter which EmojiCharades to update
     */
    where?: EmojiCharadesWhereInput
    /**
     * Limit how many EmojiCharades to update.
     */
    limit?: number
  }

  /**
   * EmojiCharades updateManyAndReturn
   */
  export type EmojiCharadesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * The data used to update EmojiCharades.
     */
    data: XOR<EmojiCharadesUpdateManyMutationInput, EmojiCharadesUncheckedUpdateManyInput>
    /**
     * Filter which EmojiCharades to update
     */
    where?: EmojiCharadesWhereInput
    /**
     * Limit how many EmojiCharades to update.
     */
    limit?: number
  }

  /**
   * EmojiCharades upsert
   */
  export type EmojiCharadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * The filter to search for the EmojiCharades to update in case it exists.
     */
    where: EmojiCharadesWhereUniqueInput
    /**
     * In case the EmojiCharades found by the `where` argument doesn't exist, create a new EmojiCharades with this data.
     */
    create: XOR<EmojiCharadesCreateInput, EmojiCharadesUncheckedCreateInput>
    /**
     * In case the EmojiCharades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmojiCharadesUpdateInput, EmojiCharadesUncheckedUpdateInput>
  }

  /**
   * EmojiCharades delete
   */
  export type EmojiCharadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
    /**
     * Filter which EmojiCharades to delete.
     */
    where: EmojiCharadesWhereUniqueInput
  }

  /**
   * EmojiCharades deleteMany
   */
  export type EmojiCharadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmojiCharades to delete
     */
    where?: EmojiCharadesWhereInput
    /**
     * Limit how many EmojiCharades to delete.
     */
    limit?: number
  }

  /**
   * EmojiCharades without action
   */
  export type EmojiCharadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiCharades
     */
    select?: EmojiCharadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiCharades
     */
    omit?: EmojiCharadesOmit<ExtArgs> | null
  }


  /**
   * Model Scoring
   */

  export type AggregateScoring = {
    _count: ScoringCountAggregateOutputType | null
    _avg: ScoringAvgAggregateOutputType | null
    _sum: ScoringSumAggregateOutputType | null
    _min: ScoringMinAggregateOutputType | null
    _max: ScoringMaxAggregateOutputType | null
  }

  export type ScoringAvgAggregateOutputType = {
    senderScore: number | null
    receiverScore: number | null
  }

  export type ScoringSumAggregateOutputType = {
    senderScore: number | null
    receiverScore: number | null
  }

  export type ScoringMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    senderScore: number | null
    receiverScore: number | null
  }

  export type ScoringMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    senderScore: number | null
    receiverScore: number | null
  }

  export type ScoringCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    senderAnswer: number
    receiverAnswer: number
    senderScore: number
    receiverScore: number
    _all: number
  }


  export type ScoringAvgAggregateInputType = {
    senderScore?: true
    receiverScore?: true
  }

  export type ScoringSumAggregateInputType = {
    senderScore?: true
    receiverScore?: true
  }

  export type ScoringMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    senderScore?: true
    receiverScore?: true
  }

  export type ScoringMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    senderScore?: true
    receiverScore?: true
  }

  export type ScoringCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    senderAnswer?: true
    receiverAnswer?: true
    senderScore?: true
    receiverScore?: true
    _all?: true
  }

  export type ScoringAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scoring to aggregate.
     */
    where?: ScoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scorings to fetch.
     */
    orderBy?: ScoringOrderByWithRelationInput | ScoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scorings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scorings
    **/
    _count?: true | ScoringCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoringAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoringSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoringMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoringMaxAggregateInputType
  }

  export type GetScoringAggregateType<T extends ScoringAggregateArgs> = {
        [P in keyof T & keyof AggregateScoring]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoring[P]>
      : GetScalarType<T[P], AggregateScoring[P]>
  }




  export type ScoringGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoringWhereInput
    orderBy?: ScoringOrderByWithAggregationInput | ScoringOrderByWithAggregationInput[]
    by: ScoringScalarFieldEnum[] | ScoringScalarFieldEnum
    having?: ScoringScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoringCountAggregateInputType | true
    _avg?: ScoringAvgAggregateInputType
    _sum?: ScoringSumAggregateInputType
    _min?: ScoringMinAggregateInputType
    _max?: ScoringMaxAggregateInputType
  }

  export type ScoringGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    senderAnswer: string[]
    receiverAnswer: string[]
    senderScore: number
    receiverScore: number
    _count: ScoringCountAggregateOutputType | null
    _avg: ScoringAvgAggregateOutputType | null
    _sum: ScoringSumAggregateOutputType | null
    _min: ScoringMinAggregateOutputType | null
    _max: ScoringMaxAggregateOutputType | null
  }

  type GetScoringGroupByPayload<T extends ScoringGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoringGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoringGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoringGroupByOutputType[P]>
            : GetScalarType<T[P], ScoringGroupByOutputType[P]>
        }
      >
    >


  export type ScoringSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    senderAnswer?: boolean
    receiverAnswer?: boolean
    senderScore?: boolean
    receiverScore?: boolean
  }, ExtArgs["result"]["scoring"]>

  export type ScoringSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    senderAnswer?: boolean
    receiverAnswer?: boolean
    senderScore?: boolean
    receiverScore?: boolean
  }, ExtArgs["result"]["scoring"]>

  export type ScoringSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    senderAnswer?: boolean
    receiverAnswer?: boolean
    senderScore?: boolean
    receiverScore?: boolean
  }, ExtArgs["result"]["scoring"]>

  export type ScoringSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    senderAnswer?: boolean
    receiverAnswer?: boolean
    senderScore?: boolean
    receiverScore?: boolean
  }

  export type ScoringOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "senderAnswer" | "receiverAnswer" | "senderScore" | "receiverScore", ExtArgs["result"]["scoring"]>

  export type $ScoringPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scoring"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      senderAnswer: string[]
      receiverAnswer: string[]
      senderScore: number
      receiverScore: number
    }, ExtArgs["result"]["scoring"]>
    composites: {}
  }

  type ScoringGetPayload<S extends boolean | null | undefined | ScoringDefaultArgs> = $Result.GetResult<Prisma.$ScoringPayload, S>

  type ScoringCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoringFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoringCountAggregateInputType | true
    }

  export interface ScoringDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scoring'], meta: { name: 'Scoring' } }
    /**
     * Find zero or one Scoring that matches the filter.
     * @param {ScoringFindUniqueArgs} args - Arguments to find a Scoring
     * @example
     * // Get one Scoring
     * const scoring = await prisma.scoring.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoringFindUniqueArgs>(args: SelectSubset<T, ScoringFindUniqueArgs<ExtArgs>>): Prisma__ScoringClient<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scoring that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoringFindUniqueOrThrowArgs} args - Arguments to find a Scoring
     * @example
     * // Get one Scoring
     * const scoring = await prisma.scoring.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoringFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoringFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoringClient<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scoring that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringFindFirstArgs} args - Arguments to find a Scoring
     * @example
     * // Get one Scoring
     * const scoring = await prisma.scoring.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoringFindFirstArgs>(args?: SelectSubset<T, ScoringFindFirstArgs<ExtArgs>>): Prisma__ScoringClient<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scoring that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringFindFirstOrThrowArgs} args - Arguments to find a Scoring
     * @example
     * // Get one Scoring
     * const scoring = await prisma.scoring.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoringFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoringFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoringClient<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scorings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scorings
     * const scorings = await prisma.scoring.findMany()
     * 
     * // Get first 10 Scorings
     * const scorings = await prisma.scoring.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoringWithIdOnly = await prisma.scoring.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoringFindManyArgs>(args?: SelectSubset<T, ScoringFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scoring.
     * @param {ScoringCreateArgs} args - Arguments to create a Scoring.
     * @example
     * // Create one Scoring
     * const Scoring = await prisma.scoring.create({
     *   data: {
     *     // ... data to create a Scoring
     *   }
     * })
     * 
     */
    create<T extends ScoringCreateArgs>(args: SelectSubset<T, ScoringCreateArgs<ExtArgs>>): Prisma__ScoringClient<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scorings.
     * @param {ScoringCreateManyArgs} args - Arguments to create many Scorings.
     * @example
     * // Create many Scorings
     * const scoring = await prisma.scoring.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoringCreateManyArgs>(args?: SelectSubset<T, ScoringCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scorings and returns the data saved in the database.
     * @param {ScoringCreateManyAndReturnArgs} args - Arguments to create many Scorings.
     * @example
     * // Create many Scorings
     * const scoring = await prisma.scoring.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scorings and only return the `id`
     * const scoringWithIdOnly = await prisma.scoring.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoringCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoringCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scoring.
     * @param {ScoringDeleteArgs} args - Arguments to delete one Scoring.
     * @example
     * // Delete one Scoring
     * const Scoring = await prisma.scoring.delete({
     *   where: {
     *     // ... filter to delete one Scoring
     *   }
     * })
     * 
     */
    delete<T extends ScoringDeleteArgs>(args: SelectSubset<T, ScoringDeleteArgs<ExtArgs>>): Prisma__ScoringClient<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scoring.
     * @param {ScoringUpdateArgs} args - Arguments to update one Scoring.
     * @example
     * // Update one Scoring
     * const scoring = await prisma.scoring.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoringUpdateArgs>(args: SelectSubset<T, ScoringUpdateArgs<ExtArgs>>): Prisma__ScoringClient<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scorings.
     * @param {ScoringDeleteManyArgs} args - Arguments to filter Scorings to delete.
     * @example
     * // Delete a few Scorings
     * const { count } = await prisma.scoring.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoringDeleteManyArgs>(args?: SelectSubset<T, ScoringDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scorings
     * const scoring = await prisma.scoring.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoringUpdateManyArgs>(args: SelectSubset<T, ScoringUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scorings and returns the data updated in the database.
     * @param {ScoringUpdateManyAndReturnArgs} args - Arguments to update many Scorings.
     * @example
     * // Update many Scorings
     * const scoring = await prisma.scoring.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scorings and only return the `id`
     * const scoringWithIdOnly = await prisma.scoring.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScoringUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoringUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scoring.
     * @param {ScoringUpsertArgs} args - Arguments to update or create a Scoring.
     * @example
     * // Update or create a Scoring
     * const scoring = await prisma.scoring.upsert({
     *   create: {
     *     // ... data to create a Scoring
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scoring we want to update
     *   }
     * })
     */
    upsert<T extends ScoringUpsertArgs>(args: SelectSubset<T, ScoringUpsertArgs<ExtArgs>>): Prisma__ScoringClient<$Result.GetResult<Prisma.$ScoringPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringCountArgs} args - Arguments to filter Scorings to count.
     * @example
     * // Count the number of Scorings
     * const count = await prisma.scoring.count({
     *   where: {
     *     // ... the filter for the Scorings we want to count
     *   }
     * })
    **/
    count<T extends ScoringCountArgs>(
      args?: Subset<T, ScoringCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoringCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scoring.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoringAggregateArgs>(args: Subset<T, ScoringAggregateArgs>): Prisma.PrismaPromise<GetScoringAggregateType<T>>

    /**
     * Group by Scoring.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoringGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoringGroupByArgs['orderBy'] }
        : { orderBy?: ScoringGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoringGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoringGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scoring model
   */
  readonly fields: ScoringFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scoring.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoringClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scoring model
   */
  interface ScoringFieldRefs {
    readonly id: FieldRef<"Scoring", 'String'>
    readonly senderId: FieldRef<"Scoring", 'String'>
    readonly receiverId: FieldRef<"Scoring", 'String'>
    readonly senderAnswer: FieldRef<"Scoring", 'String[]'>
    readonly receiverAnswer: FieldRef<"Scoring", 'String[]'>
    readonly senderScore: FieldRef<"Scoring", 'Int'>
    readonly receiverScore: FieldRef<"Scoring", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Scoring findUnique
   */
  export type ScoringFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * Filter, which Scoring to fetch.
     */
    where: ScoringWhereUniqueInput
  }

  /**
   * Scoring findUniqueOrThrow
   */
  export type ScoringFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * Filter, which Scoring to fetch.
     */
    where: ScoringWhereUniqueInput
  }

  /**
   * Scoring findFirst
   */
  export type ScoringFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * Filter, which Scoring to fetch.
     */
    where?: ScoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scorings to fetch.
     */
    orderBy?: ScoringOrderByWithRelationInput | ScoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scorings.
     */
    cursor?: ScoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scorings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scorings.
     */
    distinct?: ScoringScalarFieldEnum | ScoringScalarFieldEnum[]
  }

  /**
   * Scoring findFirstOrThrow
   */
  export type ScoringFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * Filter, which Scoring to fetch.
     */
    where?: ScoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scorings to fetch.
     */
    orderBy?: ScoringOrderByWithRelationInput | ScoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scorings.
     */
    cursor?: ScoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scorings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scorings.
     */
    distinct?: ScoringScalarFieldEnum | ScoringScalarFieldEnum[]
  }

  /**
   * Scoring findMany
   */
  export type ScoringFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * Filter, which Scorings to fetch.
     */
    where?: ScoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scorings to fetch.
     */
    orderBy?: ScoringOrderByWithRelationInput | ScoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scorings.
     */
    cursor?: ScoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scorings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scorings.
     */
    distinct?: ScoringScalarFieldEnum | ScoringScalarFieldEnum[]
  }

  /**
   * Scoring create
   */
  export type ScoringCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * The data needed to create a Scoring.
     */
    data: XOR<ScoringCreateInput, ScoringUncheckedCreateInput>
  }

  /**
   * Scoring createMany
   */
  export type ScoringCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scorings.
     */
    data: ScoringCreateManyInput | ScoringCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scoring createManyAndReturn
   */
  export type ScoringCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * The data used to create many Scorings.
     */
    data: ScoringCreateManyInput | ScoringCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scoring update
   */
  export type ScoringUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * The data needed to update a Scoring.
     */
    data: XOR<ScoringUpdateInput, ScoringUncheckedUpdateInput>
    /**
     * Choose, which Scoring to update.
     */
    where: ScoringWhereUniqueInput
  }

  /**
   * Scoring updateMany
   */
  export type ScoringUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scorings.
     */
    data: XOR<ScoringUpdateManyMutationInput, ScoringUncheckedUpdateManyInput>
    /**
     * Filter which Scorings to update
     */
    where?: ScoringWhereInput
    /**
     * Limit how many Scorings to update.
     */
    limit?: number
  }

  /**
   * Scoring updateManyAndReturn
   */
  export type ScoringUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * The data used to update Scorings.
     */
    data: XOR<ScoringUpdateManyMutationInput, ScoringUncheckedUpdateManyInput>
    /**
     * Filter which Scorings to update
     */
    where?: ScoringWhereInput
    /**
     * Limit how many Scorings to update.
     */
    limit?: number
  }

  /**
   * Scoring upsert
   */
  export type ScoringUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * The filter to search for the Scoring to update in case it exists.
     */
    where: ScoringWhereUniqueInput
    /**
     * In case the Scoring found by the `where` argument doesn't exist, create a new Scoring with this data.
     */
    create: XOR<ScoringCreateInput, ScoringUncheckedCreateInput>
    /**
     * In case the Scoring was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoringUpdateInput, ScoringUncheckedUpdateInput>
  }

  /**
   * Scoring delete
   */
  export type ScoringDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
    /**
     * Filter which Scoring to delete.
     */
    where: ScoringWhereUniqueInput
  }

  /**
   * Scoring deleteMany
   */
  export type ScoringDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scorings to delete
     */
    where?: ScoringWhereInput
    /**
     * Limit how many Scorings to delete.
     */
    limit?: number
  }

  /**
   * Scoring without action
   */
  export type ScoringDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoring
     */
    select?: ScoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoring
     */
    omit?: ScoringOmit<ExtArgs> | null
  }


  /**
   * Model GlobalChats
   */

  export type AggregateGlobalChats = {
    _count: GlobalChatsCountAggregateOutputType | null
    _min: GlobalChatsMinAggregateOutputType | null
    _max: GlobalChatsMaxAggregateOutputType | null
  }

  export type GlobalChatsMinAggregateOutputType = {
    id: string | null
    roomName: string | null
    roomImage: string | null
  }

  export type GlobalChatsMaxAggregateOutputType = {
    id: string | null
    roomName: string | null
    roomImage: string | null
  }

  export type GlobalChatsCountAggregateOutputType = {
    id: number
    roomName: number
    roomImage: number
    memberLists: number
    _all: number
  }


  export type GlobalChatsMinAggregateInputType = {
    id?: true
    roomName?: true
    roomImage?: true
  }

  export type GlobalChatsMaxAggregateInputType = {
    id?: true
    roomName?: true
    roomImage?: true
  }

  export type GlobalChatsCountAggregateInputType = {
    id?: true
    roomName?: true
    roomImage?: true
    memberLists?: true
    _all?: true
  }

  export type GlobalChatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalChats to aggregate.
     */
    where?: GlobalChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChats to fetch.
     */
    orderBy?: GlobalChatsOrderByWithRelationInput | GlobalChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalChats
    **/
    _count?: true | GlobalChatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalChatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalChatsMaxAggregateInputType
  }

  export type GetGlobalChatsAggregateType<T extends GlobalChatsAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalChats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalChats[P]>
      : GetScalarType<T[P], AggregateGlobalChats[P]>
  }




  export type GlobalChatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalChatsWhereInput
    orderBy?: GlobalChatsOrderByWithAggregationInput | GlobalChatsOrderByWithAggregationInput[]
    by: GlobalChatsScalarFieldEnum[] | GlobalChatsScalarFieldEnum
    having?: GlobalChatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalChatsCountAggregateInputType | true
    _min?: GlobalChatsMinAggregateInputType
    _max?: GlobalChatsMaxAggregateInputType
  }

  export type GlobalChatsGroupByOutputType = {
    id: string
    roomName: string
    roomImage: string | null
    memberLists: string[]
    _count: GlobalChatsCountAggregateOutputType | null
    _min: GlobalChatsMinAggregateOutputType | null
    _max: GlobalChatsMaxAggregateOutputType | null
  }

  type GetGlobalChatsGroupByPayload<T extends GlobalChatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalChatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalChatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalChatsGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalChatsGroupByOutputType[P]>
        }
      >
    >


  export type GlobalChatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomName?: boolean
    roomImage?: boolean
    memberLists?: boolean
    messages?: boolean | GlobalChats$messagesArgs<ExtArgs>
    _count?: boolean | GlobalChatsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalChats"]>

  export type GlobalChatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomName?: boolean
    roomImage?: boolean
    memberLists?: boolean
  }, ExtArgs["result"]["globalChats"]>

  export type GlobalChatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomName?: boolean
    roomImage?: boolean
    memberLists?: boolean
  }, ExtArgs["result"]["globalChats"]>

  export type GlobalChatsSelectScalar = {
    id?: boolean
    roomName?: boolean
    roomImage?: boolean
    memberLists?: boolean
  }

  export type GlobalChatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomName" | "roomImage" | "memberLists", ExtArgs["result"]["globalChats"]>
  export type GlobalChatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | GlobalChats$messagesArgs<ExtArgs>
    _count?: boolean | GlobalChatsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GlobalChatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GlobalChatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GlobalChatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalChats"
    objects: {
      messages: Prisma.$GlobalChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomName: string
      roomImage: string | null
      memberLists: string[]
    }, ExtArgs["result"]["globalChats"]>
    composites: {}
  }

  type GlobalChatsGetPayload<S extends boolean | null | undefined | GlobalChatsDefaultArgs> = $Result.GetResult<Prisma.$GlobalChatsPayload, S>

  type GlobalChatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalChatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalChatsCountAggregateInputType | true
    }

  export interface GlobalChatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalChats'], meta: { name: 'GlobalChats' } }
    /**
     * Find zero or one GlobalChats that matches the filter.
     * @param {GlobalChatsFindUniqueArgs} args - Arguments to find a GlobalChats
     * @example
     * // Get one GlobalChats
     * const globalChats = await prisma.globalChats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalChatsFindUniqueArgs>(args: SelectSubset<T, GlobalChatsFindUniqueArgs<ExtArgs>>): Prisma__GlobalChatsClient<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalChats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalChatsFindUniqueOrThrowArgs} args - Arguments to find a GlobalChats
     * @example
     * // Get one GlobalChats
     * const globalChats = await prisma.globalChats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalChatsFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalChatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalChatsClient<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatsFindFirstArgs} args - Arguments to find a GlobalChats
     * @example
     * // Get one GlobalChats
     * const globalChats = await prisma.globalChats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalChatsFindFirstArgs>(args?: SelectSubset<T, GlobalChatsFindFirstArgs<ExtArgs>>): Prisma__GlobalChatsClient<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalChats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatsFindFirstOrThrowArgs} args - Arguments to find a GlobalChats
     * @example
     * // Get one GlobalChats
     * const globalChats = await prisma.globalChats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalChatsFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalChatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalChatsClient<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalChats
     * const globalChats = await prisma.globalChats.findMany()
     * 
     * // Get first 10 GlobalChats
     * const globalChats = await prisma.globalChats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalChatsWithIdOnly = await prisma.globalChats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalChatsFindManyArgs>(args?: SelectSubset<T, GlobalChatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalChats.
     * @param {GlobalChatsCreateArgs} args - Arguments to create a GlobalChats.
     * @example
     * // Create one GlobalChats
     * const GlobalChats = await prisma.globalChats.create({
     *   data: {
     *     // ... data to create a GlobalChats
     *   }
     * })
     * 
     */
    create<T extends GlobalChatsCreateArgs>(args: SelectSubset<T, GlobalChatsCreateArgs<ExtArgs>>): Prisma__GlobalChatsClient<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalChats.
     * @param {GlobalChatsCreateManyArgs} args - Arguments to create many GlobalChats.
     * @example
     * // Create many GlobalChats
     * const globalChats = await prisma.globalChats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalChatsCreateManyArgs>(args?: SelectSubset<T, GlobalChatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalChats and returns the data saved in the database.
     * @param {GlobalChatsCreateManyAndReturnArgs} args - Arguments to create many GlobalChats.
     * @example
     * // Create many GlobalChats
     * const globalChats = await prisma.globalChats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalChats and only return the `id`
     * const globalChatsWithIdOnly = await prisma.globalChats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalChatsCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalChatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalChats.
     * @param {GlobalChatsDeleteArgs} args - Arguments to delete one GlobalChats.
     * @example
     * // Delete one GlobalChats
     * const GlobalChats = await prisma.globalChats.delete({
     *   where: {
     *     // ... filter to delete one GlobalChats
     *   }
     * })
     * 
     */
    delete<T extends GlobalChatsDeleteArgs>(args: SelectSubset<T, GlobalChatsDeleteArgs<ExtArgs>>): Prisma__GlobalChatsClient<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalChats.
     * @param {GlobalChatsUpdateArgs} args - Arguments to update one GlobalChats.
     * @example
     * // Update one GlobalChats
     * const globalChats = await prisma.globalChats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalChatsUpdateArgs>(args: SelectSubset<T, GlobalChatsUpdateArgs<ExtArgs>>): Prisma__GlobalChatsClient<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalChats.
     * @param {GlobalChatsDeleteManyArgs} args - Arguments to filter GlobalChats to delete.
     * @example
     * // Delete a few GlobalChats
     * const { count } = await prisma.globalChats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalChatsDeleteManyArgs>(args?: SelectSubset<T, GlobalChatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalChats
     * const globalChats = await prisma.globalChats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalChatsUpdateManyArgs>(args: SelectSubset<T, GlobalChatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalChats and returns the data updated in the database.
     * @param {GlobalChatsUpdateManyAndReturnArgs} args - Arguments to update many GlobalChats.
     * @example
     * // Update many GlobalChats
     * const globalChats = await prisma.globalChats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalChats and only return the `id`
     * const globalChatsWithIdOnly = await prisma.globalChats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlobalChatsUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalChatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalChats.
     * @param {GlobalChatsUpsertArgs} args - Arguments to update or create a GlobalChats.
     * @example
     * // Update or create a GlobalChats
     * const globalChats = await prisma.globalChats.upsert({
     *   create: {
     *     // ... data to create a GlobalChats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalChats we want to update
     *   }
     * })
     */
    upsert<T extends GlobalChatsUpsertArgs>(args: SelectSubset<T, GlobalChatsUpsertArgs<ExtArgs>>): Prisma__GlobalChatsClient<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatsCountArgs} args - Arguments to filter GlobalChats to count.
     * @example
     * // Count the number of GlobalChats
     * const count = await prisma.globalChats.count({
     *   where: {
     *     // ... the filter for the GlobalChats we want to count
     *   }
     * })
    **/
    count<T extends GlobalChatsCountArgs>(
      args?: Subset<T, GlobalChatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalChatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalChatsAggregateArgs>(args: Subset<T, GlobalChatsAggregateArgs>): Prisma.PrismaPromise<GetGlobalChatsAggregateType<T>>

    /**
     * Group by GlobalChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalChatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalChatsGroupByArgs['orderBy'] }
        : { orderBy?: GlobalChatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalChatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalChatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalChats model
   */
  readonly fields: GlobalChatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalChats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalChatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends GlobalChats$messagesArgs<ExtArgs> = {}>(args?: Subset<T, GlobalChats$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalChats model
   */
  interface GlobalChatsFieldRefs {
    readonly id: FieldRef<"GlobalChats", 'String'>
    readonly roomName: FieldRef<"GlobalChats", 'String'>
    readonly roomImage: FieldRef<"GlobalChats", 'String'>
    readonly memberLists: FieldRef<"GlobalChats", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * GlobalChats findUnique
   */
  export type GlobalChatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatsInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChats to fetch.
     */
    where: GlobalChatsWhereUniqueInput
  }

  /**
   * GlobalChats findUniqueOrThrow
   */
  export type GlobalChatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatsInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChats to fetch.
     */
    where: GlobalChatsWhereUniqueInput
  }

  /**
   * GlobalChats findFirst
   */
  export type GlobalChatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatsInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChats to fetch.
     */
    where?: GlobalChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChats to fetch.
     */
    orderBy?: GlobalChatsOrderByWithRelationInput | GlobalChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalChats.
     */
    cursor?: GlobalChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalChats.
     */
    distinct?: GlobalChatsScalarFieldEnum | GlobalChatsScalarFieldEnum[]
  }

  /**
   * GlobalChats findFirstOrThrow
   */
  export type GlobalChatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatsInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChats to fetch.
     */
    where?: GlobalChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChats to fetch.
     */
    orderBy?: GlobalChatsOrderByWithRelationInput | GlobalChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalChats.
     */
    cursor?: GlobalChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalChats.
     */
    distinct?: GlobalChatsScalarFieldEnum | GlobalChatsScalarFieldEnum[]
  }

  /**
   * GlobalChats findMany
   */
  export type GlobalChatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatsInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChats to fetch.
     */
    where?: GlobalChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChats to fetch.
     */
    orderBy?: GlobalChatsOrderByWithRelationInput | GlobalChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalChats.
     */
    cursor?: GlobalChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalChats.
     */
    distinct?: GlobalChatsScalarFieldEnum | GlobalChatsScalarFieldEnum[]
  }

  /**
   * GlobalChats create
   */
  export type GlobalChatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatsInclude<ExtArgs> | null
    /**
     * The data needed to create a GlobalChats.
     */
    data: XOR<GlobalChatsCreateInput, GlobalChatsUncheckedCreateInput>
  }

  /**
   * GlobalChats createMany
   */
  export type GlobalChatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalChats.
     */
    data: GlobalChatsCreateManyInput | GlobalChatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalChats createManyAndReturn
   */
  export type GlobalChatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalChats.
     */
    data: GlobalChatsCreateManyInput | GlobalChatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalChats update
   */
  export type GlobalChatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatsInclude<ExtArgs> | null
    /**
     * The data needed to update a GlobalChats.
     */
    data: XOR<GlobalChatsUpdateInput, GlobalChatsUncheckedUpdateInput>
    /**
     * Choose, which GlobalChats to update.
     */
    where: GlobalChatsWhereUniqueInput
  }

  /**
   * GlobalChats updateMany
   */
  export type GlobalChatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalChats.
     */
    data: XOR<GlobalChatsUpdateManyMutationInput, GlobalChatsUncheckedUpdateManyInput>
    /**
     * Filter which GlobalChats to update
     */
    where?: GlobalChatsWhereInput
    /**
     * Limit how many GlobalChats to update.
     */
    limit?: number
  }

  /**
   * GlobalChats updateManyAndReturn
   */
  export type GlobalChatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * The data used to update GlobalChats.
     */
    data: XOR<GlobalChatsUpdateManyMutationInput, GlobalChatsUncheckedUpdateManyInput>
    /**
     * Filter which GlobalChats to update
     */
    where?: GlobalChatsWhereInput
    /**
     * Limit how many GlobalChats to update.
     */
    limit?: number
  }

  /**
   * GlobalChats upsert
   */
  export type GlobalChatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatsInclude<ExtArgs> | null
    /**
     * The filter to search for the GlobalChats to update in case it exists.
     */
    where: GlobalChatsWhereUniqueInput
    /**
     * In case the GlobalChats found by the `where` argument doesn't exist, create a new GlobalChats with this data.
     */
    create: XOR<GlobalChatsCreateInput, GlobalChatsUncheckedCreateInput>
    /**
     * In case the GlobalChats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalChatsUpdateInput, GlobalChatsUncheckedUpdateInput>
  }

  /**
   * GlobalChats delete
   */
  export type GlobalChatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatsInclude<ExtArgs> | null
    /**
     * Filter which GlobalChats to delete.
     */
    where: GlobalChatsWhereUniqueInput
  }

  /**
   * GlobalChats deleteMany
   */
  export type GlobalChatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalChats to delete
     */
    where?: GlobalChatsWhereInput
    /**
     * Limit how many GlobalChats to delete.
     */
    limit?: number
  }

  /**
   * GlobalChats.messages
   */
  export type GlobalChats$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    where?: GlobalChatMessageWhereInput
    orderBy?: GlobalChatMessageOrderByWithRelationInput | GlobalChatMessageOrderByWithRelationInput[]
    cursor?: GlobalChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlobalChatMessageScalarFieldEnum | GlobalChatMessageScalarFieldEnum[]
  }

  /**
   * GlobalChats without action
   */
  export type GlobalChatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChats
     */
    select?: GlobalChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChats
     */
    omit?: GlobalChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatsInclude<ExtArgs> | null
  }


  /**
   * Model GlobalChatMessage
   */

  export type AggregateGlobalChatMessage = {
    _count: GlobalChatMessageCountAggregateOutputType | null
    _min: GlobalChatMessageMinAggregateOutputType | null
    _max: GlobalChatMessageMaxAggregateOutputType | null
  }

  export type GlobalChatMessageMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderId: string | null
    text: string | null
    createdAt: Date | null
  }

  export type GlobalChatMessageMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderId: string | null
    text: string | null
    createdAt: Date | null
  }

  export type GlobalChatMessageCountAggregateOutputType = {
    id: number
    roomId: number
    senderId: number
    text: number
    createdAt: number
    _all: number
  }


  export type GlobalChatMessageMinAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    text?: true
    createdAt?: true
  }

  export type GlobalChatMessageMaxAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    text?: true
    createdAt?: true
  }

  export type GlobalChatMessageCountAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type GlobalChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalChatMessage to aggregate.
     */
    where?: GlobalChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChatMessages to fetch.
     */
    orderBy?: GlobalChatMessageOrderByWithRelationInput | GlobalChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalChatMessages
    **/
    _count?: true | GlobalChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalChatMessageMaxAggregateInputType
  }

  export type GetGlobalChatMessageAggregateType<T extends GlobalChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalChatMessage[P]>
      : GetScalarType<T[P], AggregateGlobalChatMessage[P]>
  }




  export type GlobalChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalChatMessageWhereInput
    orderBy?: GlobalChatMessageOrderByWithAggregationInput | GlobalChatMessageOrderByWithAggregationInput[]
    by: GlobalChatMessageScalarFieldEnum[] | GlobalChatMessageScalarFieldEnum
    having?: GlobalChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalChatMessageCountAggregateInputType | true
    _min?: GlobalChatMessageMinAggregateInputType
    _max?: GlobalChatMessageMaxAggregateInputType
  }

  export type GlobalChatMessageGroupByOutputType = {
    id: string
    roomId: string
    senderId: string
    text: string
    createdAt: Date
    _count: GlobalChatMessageCountAggregateOutputType | null
    _min: GlobalChatMessageMinAggregateOutputType | null
    _max: GlobalChatMessageMaxAggregateOutputType | null
  }

  type GetGlobalChatMessageGroupByPayload<T extends GlobalChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type GlobalChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    text?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | GlobalChatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalChatMessage"]>

  export type GlobalChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    text?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | GlobalChatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalChatMessage"]>

  export type GlobalChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    text?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | GlobalChatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalChatMessage"]>

  export type GlobalChatMessageSelectScalar = {
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type GlobalChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "senderId" | "text" | "createdAt", ExtArgs["result"]["globalChatMessage"]>
  export type GlobalChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | GlobalChatsDefaultArgs<ExtArgs>
  }
  export type GlobalChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | GlobalChatsDefaultArgs<ExtArgs>
  }
  export type GlobalChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | GlobalChatsDefaultArgs<ExtArgs>
  }

  export type $GlobalChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalChatMessage"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$GlobalChatsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      senderId: string
      text: string
      createdAt: Date
    }, ExtArgs["result"]["globalChatMessage"]>
    composites: {}
  }

  type GlobalChatMessageGetPayload<S extends boolean | null | undefined | GlobalChatMessageDefaultArgs> = $Result.GetResult<Prisma.$GlobalChatMessagePayload, S>

  type GlobalChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalChatMessageCountAggregateInputType | true
    }

  export interface GlobalChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalChatMessage'], meta: { name: 'GlobalChatMessage' } }
    /**
     * Find zero or one GlobalChatMessage that matches the filter.
     * @param {GlobalChatMessageFindUniqueArgs} args - Arguments to find a GlobalChatMessage
     * @example
     * // Get one GlobalChatMessage
     * const globalChatMessage = await prisma.globalChatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalChatMessageFindUniqueArgs>(args: SelectSubset<T, GlobalChatMessageFindUniqueArgs<ExtArgs>>): Prisma__GlobalChatMessageClient<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalChatMessageFindUniqueOrThrowArgs} args - Arguments to find a GlobalChatMessage
     * @example
     * // Get one GlobalChatMessage
     * const globalChatMessage = await prisma.globalChatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalChatMessageClient<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatMessageFindFirstArgs} args - Arguments to find a GlobalChatMessage
     * @example
     * // Get one GlobalChatMessage
     * const globalChatMessage = await prisma.globalChatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalChatMessageFindFirstArgs>(args?: SelectSubset<T, GlobalChatMessageFindFirstArgs<ExtArgs>>): Prisma__GlobalChatMessageClient<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatMessageFindFirstOrThrowArgs} args - Arguments to find a GlobalChatMessage
     * @example
     * // Get one GlobalChatMessage
     * const globalChatMessage = await prisma.globalChatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalChatMessageClient<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalChatMessages
     * const globalChatMessages = await prisma.globalChatMessage.findMany()
     * 
     * // Get first 10 GlobalChatMessages
     * const globalChatMessages = await prisma.globalChatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalChatMessageWithIdOnly = await prisma.globalChatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalChatMessageFindManyArgs>(args?: SelectSubset<T, GlobalChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalChatMessage.
     * @param {GlobalChatMessageCreateArgs} args - Arguments to create a GlobalChatMessage.
     * @example
     * // Create one GlobalChatMessage
     * const GlobalChatMessage = await prisma.globalChatMessage.create({
     *   data: {
     *     // ... data to create a GlobalChatMessage
     *   }
     * })
     * 
     */
    create<T extends GlobalChatMessageCreateArgs>(args: SelectSubset<T, GlobalChatMessageCreateArgs<ExtArgs>>): Prisma__GlobalChatMessageClient<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalChatMessages.
     * @param {GlobalChatMessageCreateManyArgs} args - Arguments to create many GlobalChatMessages.
     * @example
     * // Create many GlobalChatMessages
     * const globalChatMessage = await prisma.globalChatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalChatMessageCreateManyArgs>(args?: SelectSubset<T, GlobalChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalChatMessages and returns the data saved in the database.
     * @param {GlobalChatMessageCreateManyAndReturnArgs} args - Arguments to create many GlobalChatMessages.
     * @example
     * // Create many GlobalChatMessages
     * const globalChatMessage = await prisma.globalChatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalChatMessages and only return the `id`
     * const globalChatMessageWithIdOnly = await prisma.globalChatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalChatMessage.
     * @param {GlobalChatMessageDeleteArgs} args - Arguments to delete one GlobalChatMessage.
     * @example
     * // Delete one GlobalChatMessage
     * const GlobalChatMessage = await prisma.globalChatMessage.delete({
     *   where: {
     *     // ... filter to delete one GlobalChatMessage
     *   }
     * })
     * 
     */
    delete<T extends GlobalChatMessageDeleteArgs>(args: SelectSubset<T, GlobalChatMessageDeleteArgs<ExtArgs>>): Prisma__GlobalChatMessageClient<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalChatMessage.
     * @param {GlobalChatMessageUpdateArgs} args - Arguments to update one GlobalChatMessage.
     * @example
     * // Update one GlobalChatMessage
     * const globalChatMessage = await prisma.globalChatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalChatMessageUpdateArgs>(args: SelectSubset<T, GlobalChatMessageUpdateArgs<ExtArgs>>): Prisma__GlobalChatMessageClient<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalChatMessages.
     * @param {GlobalChatMessageDeleteManyArgs} args - Arguments to filter GlobalChatMessages to delete.
     * @example
     * // Delete a few GlobalChatMessages
     * const { count } = await prisma.globalChatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalChatMessageDeleteManyArgs>(args?: SelectSubset<T, GlobalChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalChatMessages
     * const globalChatMessage = await prisma.globalChatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalChatMessageUpdateManyArgs>(args: SelectSubset<T, GlobalChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalChatMessages and returns the data updated in the database.
     * @param {GlobalChatMessageUpdateManyAndReturnArgs} args - Arguments to update many GlobalChatMessages.
     * @example
     * // Update many GlobalChatMessages
     * const globalChatMessage = await prisma.globalChatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalChatMessages and only return the `id`
     * const globalChatMessageWithIdOnly = await prisma.globalChatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlobalChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalChatMessage.
     * @param {GlobalChatMessageUpsertArgs} args - Arguments to update or create a GlobalChatMessage.
     * @example
     * // Update or create a GlobalChatMessage
     * const globalChatMessage = await prisma.globalChatMessage.upsert({
     *   create: {
     *     // ... data to create a GlobalChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends GlobalChatMessageUpsertArgs>(args: SelectSubset<T, GlobalChatMessageUpsertArgs<ExtArgs>>): Prisma__GlobalChatMessageClient<$Result.GetResult<Prisma.$GlobalChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatMessageCountArgs} args - Arguments to filter GlobalChatMessages to count.
     * @example
     * // Count the number of GlobalChatMessages
     * const count = await prisma.globalChatMessage.count({
     *   where: {
     *     // ... the filter for the GlobalChatMessages we want to count
     *   }
     * })
    **/
    count<T extends GlobalChatMessageCountArgs>(
      args?: Subset<T, GlobalChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalChatMessageAggregateArgs>(args: Subset<T, GlobalChatMessageAggregateArgs>): Prisma.PrismaPromise<GetGlobalChatMessageAggregateType<T>>

    /**
     * Group by GlobalChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: GlobalChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalChatMessage model
   */
  readonly fields: GlobalChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends GlobalChatsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GlobalChatsDefaultArgs<ExtArgs>>): Prisma__GlobalChatsClient<$Result.GetResult<Prisma.$GlobalChatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalChatMessage model
   */
  interface GlobalChatMessageFieldRefs {
    readonly id: FieldRef<"GlobalChatMessage", 'String'>
    readonly roomId: FieldRef<"GlobalChatMessage", 'String'>
    readonly senderId: FieldRef<"GlobalChatMessage", 'String'>
    readonly text: FieldRef<"GlobalChatMessage", 'String'>
    readonly createdAt: FieldRef<"GlobalChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalChatMessage findUnique
   */
  export type GlobalChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChatMessage to fetch.
     */
    where: GlobalChatMessageWhereUniqueInput
  }

  /**
   * GlobalChatMessage findUniqueOrThrow
   */
  export type GlobalChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChatMessage to fetch.
     */
    where: GlobalChatMessageWhereUniqueInput
  }

  /**
   * GlobalChatMessage findFirst
   */
  export type GlobalChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChatMessage to fetch.
     */
    where?: GlobalChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChatMessages to fetch.
     */
    orderBy?: GlobalChatMessageOrderByWithRelationInput | GlobalChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalChatMessages.
     */
    cursor?: GlobalChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalChatMessages.
     */
    distinct?: GlobalChatMessageScalarFieldEnum | GlobalChatMessageScalarFieldEnum[]
  }

  /**
   * GlobalChatMessage findFirstOrThrow
   */
  export type GlobalChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChatMessage to fetch.
     */
    where?: GlobalChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChatMessages to fetch.
     */
    orderBy?: GlobalChatMessageOrderByWithRelationInput | GlobalChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalChatMessages.
     */
    cursor?: GlobalChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalChatMessages.
     */
    distinct?: GlobalChatMessageScalarFieldEnum | GlobalChatMessageScalarFieldEnum[]
  }

  /**
   * GlobalChatMessage findMany
   */
  export type GlobalChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChatMessages to fetch.
     */
    where?: GlobalChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChatMessages to fetch.
     */
    orderBy?: GlobalChatMessageOrderByWithRelationInput | GlobalChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalChatMessages.
     */
    cursor?: GlobalChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalChatMessages.
     */
    distinct?: GlobalChatMessageScalarFieldEnum | GlobalChatMessageScalarFieldEnum[]
  }

  /**
   * GlobalChatMessage create
   */
  export type GlobalChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a GlobalChatMessage.
     */
    data: XOR<GlobalChatMessageCreateInput, GlobalChatMessageUncheckedCreateInput>
  }

  /**
   * GlobalChatMessage createMany
   */
  export type GlobalChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalChatMessages.
     */
    data: GlobalChatMessageCreateManyInput | GlobalChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalChatMessage createManyAndReturn
   */
  export type GlobalChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalChatMessages.
     */
    data: GlobalChatMessageCreateManyInput | GlobalChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlobalChatMessage update
   */
  export type GlobalChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a GlobalChatMessage.
     */
    data: XOR<GlobalChatMessageUpdateInput, GlobalChatMessageUncheckedUpdateInput>
    /**
     * Choose, which GlobalChatMessage to update.
     */
    where: GlobalChatMessageWhereUniqueInput
  }

  /**
   * GlobalChatMessage updateMany
   */
  export type GlobalChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalChatMessages.
     */
    data: XOR<GlobalChatMessageUpdateManyMutationInput, GlobalChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which GlobalChatMessages to update
     */
    where?: GlobalChatMessageWhereInput
    /**
     * Limit how many GlobalChatMessages to update.
     */
    limit?: number
  }

  /**
   * GlobalChatMessage updateManyAndReturn
   */
  export type GlobalChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update GlobalChatMessages.
     */
    data: XOR<GlobalChatMessageUpdateManyMutationInput, GlobalChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which GlobalChatMessages to update
     */
    where?: GlobalChatMessageWhereInput
    /**
     * Limit how many GlobalChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlobalChatMessage upsert
   */
  export type GlobalChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the GlobalChatMessage to update in case it exists.
     */
    where: GlobalChatMessageWhereUniqueInput
    /**
     * In case the GlobalChatMessage found by the `where` argument doesn't exist, create a new GlobalChatMessage with this data.
     */
    create: XOR<GlobalChatMessageCreateInput, GlobalChatMessageUncheckedCreateInput>
    /**
     * In case the GlobalChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalChatMessageUpdateInput, GlobalChatMessageUncheckedUpdateInput>
  }

  /**
   * GlobalChatMessage delete
   */
  export type GlobalChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
    /**
     * Filter which GlobalChatMessage to delete.
     */
    where: GlobalChatMessageWhereUniqueInput
  }

  /**
   * GlobalChatMessage deleteMany
   */
  export type GlobalChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalChatMessages to delete
     */
    where?: GlobalChatMessageWhereInput
    /**
     * Limit how many GlobalChatMessages to delete.
     */
    limit?: number
  }

  /**
   * GlobalChatMessage without action
   */
  export type GlobalChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatMessage
     */
    select?: GlobalChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChatMessage
     */
    omit?: GlobalChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model PrivateRoom
   */

  export type AggregatePrivateRoom = {
    _count: PrivateRoomCountAggregateOutputType | null
    _min: PrivateRoomMinAggregateOutputType | null
    _max: PrivateRoomMaxAggregateOutputType | null
  }

  export type PrivateRoomMinAggregateOutputType = {
    id: string | null
    createrId: string | null
    roomName: string | null
    inviteToken: string | null
    roomImage: string | null
    category: string | null
    description: string | null
  }

  export type PrivateRoomMaxAggregateOutputType = {
    id: string | null
    createrId: string | null
    roomName: string | null
    inviteToken: string | null
    roomImage: string | null
    category: string | null
    description: string | null
  }

  export type PrivateRoomCountAggregateOutputType = {
    id: number
    createrId: number
    roomName: number
    inviteToken: number
    roomImage: number
    category: number
    description: number
    memberLists: number
    _all: number
  }


  export type PrivateRoomMinAggregateInputType = {
    id?: true
    createrId?: true
    roomName?: true
    inviteToken?: true
    roomImage?: true
    category?: true
    description?: true
  }

  export type PrivateRoomMaxAggregateInputType = {
    id?: true
    createrId?: true
    roomName?: true
    inviteToken?: true
    roomImage?: true
    category?: true
    description?: true
  }

  export type PrivateRoomCountAggregateInputType = {
    id?: true
    createrId?: true
    roomName?: true
    inviteToken?: true
    roomImage?: true
    category?: true
    description?: true
    memberLists?: true
    _all?: true
  }

  export type PrivateRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateRoom to aggregate.
     */
    where?: PrivateRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateRooms to fetch.
     */
    orderBy?: PrivateRoomOrderByWithRelationInput | PrivateRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateRooms
    **/
    _count?: true | PrivateRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateRoomMaxAggregateInputType
  }

  export type GetPrivateRoomAggregateType<T extends PrivateRoomAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateRoom[P]>
      : GetScalarType<T[P], AggregatePrivateRoom[P]>
  }




  export type PrivateRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateRoomWhereInput
    orderBy?: PrivateRoomOrderByWithAggregationInput | PrivateRoomOrderByWithAggregationInput[]
    by: PrivateRoomScalarFieldEnum[] | PrivateRoomScalarFieldEnum
    having?: PrivateRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateRoomCountAggregateInputType | true
    _min?: PrivateRoomMinAggregateInputType
    _max?: PrivateRoomMaxAggregateInputType
  }

  export type PrivateRoomGroupByOutputType = {
    id: string
    createrId: string
    roomName: string
    inviteToken: string
    roomImage: string | null
    category: string | null
    description: string | null
    memberLists: string[]
    _count: PrivateRoomCountAggregateOutputType | null
    _min: PrivateRoomMinAggregateOutputType | null
    _max: PrivateRoomMaxAggregateOutputType | null
  }

  type GetPrivateRoomGroupByPayload<T extends PrivateRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateRoomGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateRoomGroupByOutputType[P]>
        }
      >
    >


  export type PrivateRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createrId?: boolean
    roomName?: boolean
    inviteToken?: boolean
    roomImage?: boolean
    category?: boolean
    description?: boolean
    memberLists?: boolean
    messages?: boolean | PrivateRoom$messagesArgs<ExtArgs>
    _count?: boolean | PrivateRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateRoom"]>

  export type PrivateRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createrId?: boolean
    roomName?: boolean
    inviteToken?: boolean
    roomImage?: boolean
    category?: boolean
    description?: boolean
    memberLists?: boolean
  }, ExtArgs["result"]["privateRoom"]>

  export type PrivateRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createrId?: boolean
    roomName?: boolean
    inviteToken?: boolean
    roomImage?: boolean
    category?: boolean
    description?: boolean
    memberLists?: boolean
  }, ExtArgs["result"]["privateRoom"]>

  export type PrivateRoomSelectScalar = {
    id?: boolean
    createrId?: boolean
    roomName?: boolean
    inviteToken?: boolean
    roomImage?: boolean
    category?: boolean
    description?: boolean
    memberLists?: boolean
  }

  export type PrivateRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createrId" | "roomName" | "inviteToken" | "roomImage" | "category" | "description" | "memberLists", ExtArgs["result"]["privateRoom"]>
  export type PrivateRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | PrivateRoom$messagesArgs<ExtArgs>
    _count?: boolean | PrivateRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrivateRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PrivateRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PrivateRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateRoom"
    objects: {
      messages: Prisma.$PrivateRoomMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createrId: string
      roomName: string
      inviteToken: string
      roomImage: string | null
      category: string | null
      description: string | null
      memberLists: string[]
    }, ExtArgs["result"]["privateRoom"]>
    composites: {}
  }

  type PrivateRoomGetPayload<S extends boolean | null | undefined | PrivateRoomDefaultArgs> = $Result.GetResult<Prisma.$PrivateRoomPayload, S>

  type PrivateRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateRoomCountAggregateInputType | true
    }

  export interface PrivateRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateRoom'], meta: { name: 'PrivateRoom' } }
    /**
     * Find zero or one PrivateRoom that matches the filter.
     * @param {PrivateRoomFindUniqueArgs} args - Arguments to find a PrivateRoom
     * @example
     * // Get one PrivateRoom
     * const privateRoom = await prisma.privateRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateRoomFindUniqueArgs>(args: SelectSubset<T, PrivateRoomFindUniqueArgs<ExtArgs>>): Prisma__PrivateRoomClient<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateRoomFindUniqueOrThrowArgs} args - Arguments to find a PrivateRoom
     * @example
     * // Get one PrivateRoom
     * const privateRoom = await prisma.privateRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateRoomClient<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomFindFirstArgs} args - Arguments to find a PrivateRoom
     * @example
     * // Get one PrivateRoom
     * const privateRoom = await prisma.privateRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateRoomFindFirstArgs>(args?: SelectSubset<T, PrivateRoomFindFirstArgs<ExtArgs>>): Prisma__PrivateRoomClient<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomFindFirstOrThrowArgs} args - Arguments to find a PrivateRoom
     * @example
     * // Get one PrivateRoom
     * const privateRoom = await prisma.privateRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateRoomClient<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateRooms
     * const privateRooms = await prisma.privateRoom.findMany()
     * 
     * // Get first 10 PrivateRooms
     * const privateRooms = await prisma.privateRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateRoomWithIdOnly = await prisma.privateRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivateRoomFindManyArgs>(args?: SelectSubset<T, PrivateRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateRoom.
     * @param {PrivateRoomCreateArgs} args - Arguments to create a PrivateRoom.
     * @example
     * // Create one PrivateRoom
     * const PrivateRoom = await prisma.privateRoom.create({
     *   data: {
     *     // ... data to create a PrivateRoom
     *   }
     * })
     * 
     */
    create<T extends PrivateRoomCreateArgs>(args: SelectSubset<T, PrivateRoomCreateArgs<ExtArgs>>): Prisma__PrivateRoomClient<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateRooms.
     * @param {PrivateRoomCreateManyArgs} args - Arguments to create many PrivateRooms.
     * @example
     * // Create many PrivateRooms
     * const privateRoom = await prisma.privateRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateRoomCreateManyArgs>(args?: SelectSubset<T, PrivateRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateRooms and returns the data saved in the database.
     * @param {PrivateRoomCreateManyAndReturnArgs} args - Arguments to create many PrivateRooms.
     * @example
     * // Create many PrivateRooms
     * const privateRoom = await prisma.privateRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateRooms and only return the `id`
     * const privateRoomWithIdOnly = await prisma.privateRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateRoom.
     * @param {PrivateRoomDeleteArgs} args - Arguments to delete one PrivateRoom.
     * @example
     * // Delete one PrivateRoom
     * const PrivateRoom = await prisma.privateRoom.delete({
     *   where: {
     *     // ... filter to delete one PrivateRoom
     *   }
     * })
     * 
     */
    delete<T extends PrivateRoomDeleteArgs>(args: SelectSubset<T, PrivateRoomDeleteArgs<ExtArgs>>): Prisma__PrivateRoomClient<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateRoom.
     * @param {PrivateRoomUpdateArgs} args - Arguments to update one PrivateRoom.
     * @example
     * // Update one PrivateRoom
     * const privateRoom = await prisma.privateRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateRoomUpdateArgs>(args: SelectSubset<T, PrivateRoomUpdateArgs<ExtArgs>>): Prisma__PrivateRoomClient<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateRooms.
     * @param {PrivateRoomDeleteManyArgs} args - Arguments to filter PrivateRooms to delete.
     * @example
     * // Delete a few PrivateRooms
     * const { count } = await prisma.privateRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateRoomDeleteManyArgs>(args?: SelectSubset<T, PrivateRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateRooms
     * const privateRoom = await prisma.privateRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateRoomUpdateManyArgs>(args: SelectSubset<T, PrivateRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateRooms and returns the data updated in the database.
     * @param {PrivateRoomUpdateManyAndReturnArgs} args - Arguments to update many PrivateRooms.
     * @example
     * // Update many PrivateRooms
     * const privateRoom = await prisma.privateRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateRooms and only return the `id`
     * const privateRoomWithIdOnly = await prisma.privateRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrivateRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateRoom.
     * @param {PrivateRoomUpsertArgs} args - Arguments to update or create a PrivateRoom.
     * @example
     * // Update or create a PrivateRoom
     * const privateRoom = await prisma.privateRoom.upsert({
     *   create: {
     *     // ... data to create a PrivateRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateRoom we want to update
     *   }
     * })
     */
    upsert<T extends PrivateRoomUpsertArgs>(args: SelectSubset<T, PrivateRoomUpsertArgs<ExtArgs>>): Prisma__PrivateRoomClient<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomCountArgs} args - Arguments to filter PrivateRooms to count.
     * @example
     * // Count the number of PrivateRooms
     * const count = await prisma.privateRoom.count({
     *   where: {
     *     // ... the filter for the PrivateRooms we want to count
     *   }
     * })
    **/
    count<T extends PrivateRoomCountArgs>(
      args?: Subset<T, PrivateRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrivateRoomAggregateArgs>(args: Subset<T, PrivateRoomAggregateArgs>): Prisma.PrismaPromise<GetPrivateRoomAggregateType<T>>

    /**
     * Group by PrivateRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrivateRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateRoomGroupByArgs['orderBy'] }
        : { orderBy?: PrivateRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrivateRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateRoom model
   */
  readonly fields: PrivateRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends PrivateRoom$messagesArgs<ExtArgs> = {}>(args?: Subset<T, PrivateRoom$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrivateRoom model
   */
  interface PrivateRoomFieldRefs {
    readonly id: FieldRef<"PrivateRoom", 'String'>
    readonly createrId: FieldRef<"PrivateRoom", 'String'>
    readonly roomName: FieldRef<"PrivateRoom", 'String'>
    readonly inviteToken: FieldRef<"PrivateRoom", 'String'>
    readonly roomImage: FieldRef<"PrivateRoom", 'String'>
    readonly category: FieldRef<"PrivateRoom", 'String'>
    readonly description: FieldRef<"PrivateRoom", 'String'>
    readonly memberLists: FieldRef<"PrivateRoom", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * PrivateRoom findUnique
   */
  export type PrivateRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomInclude<ExtArgs> | null
    /**
     * Filter, which PrivateRoom to fetch.
     */
    where: PrivateRoomWhereUniqueInput
  }

  /**
   * PrivateRoom findUniqueOrThrow
   */
  export type PrivateRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomInclude<ExtArgs> | null
    /**
     * Filter, which PrivateRoom to fetch.
     */
    where: PrivateRoomWhereUniqueInput
  }

  /**
   * PrivateRoom findFirst
   */
  export type PrivateRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomInclude<ExtArgs> | null
    /**
     * Filter, which PrivateRoom to fetch.
     */
    where?: PrivateRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateRooms to fetch.
     */
    orderBy?: PrivateRoomOrderByWithRelationInput | PrivateRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateRooms.
     */
    cursor?: PrivateRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateRooms.
     */
    distinct?: PrivateRoomScalarFieldEnum | PrivateRoomScalarFieldEnum[]
  }

  /**
   * PrivateRoom findFirstOrThrow
   */
  export type PrivateRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomInclude<ExtArgs> | null
    /**
     * Filter, which PrivateRoom to fetch.
     */
    where?: PrivateRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateRooms to fetch.
     */
    orderBy?: PrivateRoomOrderByWithRelationInput | PrivateRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateRooms.
     */
    cursor?: PrivateRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateRooms.
     */
    distinct?: PrivateRoomScalarFieldEnum | PrivateRoomScalarFieldEnum[]
  }

  /**
   * PrivateRoom findMany
   */
  export type PrivateRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomInclude<ExtArgs> | null
    /**
     * Filter, which PrivateRooms to fetch.
     */
    where?: PrivateRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateRooms to fetch.
     */
    orderBy?: PrivateRoomOrderByWithRelationInput | PrivateRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateRooms.
     */
    cursor?: PrivateRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateRooms.
     */
    distinct?: PrivateRoomScalarFieldEnum | PrivateRoomScalarFieldEnum[]
  }

  /**
   * PrivateRoom create
   */
  export type PrivateRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateRoom.
     */
    data: XOR<PrivateRoomCreateInput, PrivateRoomUncheckedCreateInput>
  }

  /**
   * PrivateRoom createMany
   */
  export type PrivateRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateRooms.
     */
    data: PrivateRoomCreateManyInput | PrivateRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateRoom createManyAndReturn
   */
  export type PrivateRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateRooms.
     */
    data: PrivateRoomCreateManyInput | PrivateRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateRoom update
   */
  export type PrivateRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateRoom.
     */
    data: XOR<PrivateRoomUpdateInput, PrivateRoomUncheckedUpdateInput>
    /**
     * Choose, which PrivateRoom to update.
     */
    where: PrivateRoomWhereUniqueInput
  }

  /**
   * PrivateRoom updateMany
   */
  export type PrivateRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateRooms.
     */
    data: XOR<PrivateRoomUpdateManyMutationInput, PrivateRoomUncheckedUpdateManyInput>
    /**
     * Filter which PrivateRooms to update
     */
    where?: PrivateRoomWhereInput
    /**
     * Limit how many PrivateRooms to update.
     */
    limit?: number
  }

  /**
   * PrivateRoom updateManyAndReturn
   */
  export type PrivateRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * The data used to update PrivateRooms.
     */
    data: XOR<PrivateRoomUpdateManyMutationInput, PrivateRoomUncheckedUpdateManyInput>
    /**
     * Filter which PrivateRooms to update
     */
    where?: PrivateRoomWhereInput
    /**
     * Limit how many PrivateRooms to update.
     */
    limit?: number
  }

  /**
   * PrivateRoom upsert
   */
  export type PrivateRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateRoom to update in case it exists.
     */
    where: PrivateRoomWhereUniqueInput
    /**
     * In case the PrivateRoom found by the `where` argument doesn't exist, create a new PrivateRoom with this data.
     */
    create: XOR<PrivateRoomCreateInput, PrivateRoomUncheckedCreateInput>
    /**
     * In case the PrivateRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateRoomUpdateInput, PrivateRoomUncheckedUpdateInput>
  }

  /**
   * PrivateRoom delete
   */
  export type PrivateRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomInclude<ExtArgs> | null
    /**
     * Filter which PrivateRoom to delete.
     */
    where: PrivateRoomWhereUniqueInput
  }

  /**
   * PrivateRoom deleteMany
   */
  export type PrivateRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateRooms to delete
     */
    where?: PrivateRoomWhereInput
    /**
     * Limit how many PrivateRooms to delete.
     */
    limit?: number
  }

  /**
   * PrivateRoom.messages
   */
  export type PrivateRoom$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    where?: PrivateRoomMessageWhereInput
    orderBy?: PrivateRoomMessageOrderByWithRelationInput | PrivateRoomMessageOrderByWithRelationInput[]
    cursor?: PrivateRoomMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateRoomMessageScalarFieldEnum | PrivateRoomMessageScalarFieldEnum[]
  }

  /**
   * PrivateRoom without action
   */
  export type PrivateRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoom
     */
    select?: PrivateRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoom
     */
    omit?: PrivateRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomInclude<ExtArgs> | null
  }


  /**
   * Model PrivateRoomMessage
   */

  export type AggregatePrivateRoomMessage = {
    _count: PrivateRoomMessageCountAggregateOutputType | null
    _min: PrivateRoomMessageMinAggregateOutputType | null
    _max: PrivateRoomMessageMaxAggregateOutputType | null
  }

  export type PrivateRoomMessageMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderId: string | null
    text: string | null
    createdAt: Date | null
  }

  export type PrivateRoomMessageMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderId: string | null
    text: string | null
    createdAt: Date | null
  }

  export type PrivateRoomMessageCountAggregateOutputType = {
    id: number
    roomId: number
    senderId: number
    text: number
    createdAt: number
    _all: number
  }


  export type PrivateRoomMessageMinAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    text?: true
    createdAt?: true
  }

  export type PrivateRoomMessageMaxAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    text?: true
    createdAt?: true
  }

  export type PrivateRoomMessageCountAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type PrivateRoomMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateRoomMessage to aggregate.
     */
    where?: PrivateRoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateRoomMessages to fetch.
     */
    orderBy?: PrivateRoomMessageOrderByWithRelationInput | PrivateRoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateRoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateRoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateRoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateRoomMessages
    **/
    _count?: true | PrivateRoomMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateRoomMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateRoomMessageMaxAggregateInputType
  }

  export type GetPrivateRoomMessageAggregateType<T extends PrivateRoomMessageAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateRoomMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateRoomMessage[P]>
      : GetScalarType<T[P], AggregatePrivateRoomMessage[P]>
  }




  export type PrivateRoomMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateRoomMessageWhereInput
    orderBy?: PrivateRoomMessageOrderByWithAggregationInput | PrivateRoomMessageOrderByWithAggregationInput[]
    by: PrivateRoomMessageScalarFieldEnum[] | PrivateRoomMessageScalarFieldEnum
    having?: PrivateRoomMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateRoomMessageCountAggregateInputType | true
    _min?: PrivateRoomMessageMinAggregateInputType
    _max?: PrivateRoomMessageMaxAggregateInputType
  }

  export type PrivateRoomMessageGroupByOutputType = {
    id: string
    roomId: string
    senderId: string
    text: string
    createdAt: Date
    _count: PrivateRoomMessageCountAggregateOutputType | null
    _min: PrivateRoomMessageMinAggregateOutputType | null
    _max: PrivateRoomMessageMaxAggregateOutputType | null
  }

  type GetPrivateRoomMessageGroupByPayload<T extends PrivateRoomMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateRoomMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateRoomMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateRoomMessageGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateRoomMessageGroupByOutputType[P]>
        }
      >
    >


  export type PrivateRoomMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    text?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | PrivateRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateRoomMessage"]>

  export type PrivateRoomMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    text?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | PrivateRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateRoomMessage"]>

  export type PrivateRoomMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    text?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | PrivateRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateRoomMessage"]>

  export type PrivateRoomMessageSelectScalar = {
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type PrivateRoomMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "senderId" | "text" | "createdAt", ExtArgs["result"]["privateRoomMessage"]>
  export type PrivateRoomMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | PrivateRoomDefaultArgs<ExtArgs>
  }
  export type PrivateRoomMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | PrivateRoomDefaultArgs<ExtArgs>
  }
  export type PrivateRoomMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | PrivateRoomDefaultArgs<ExtArgs>
  }

  export type $PrivateRoomMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateRoomMessage"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$PrivateRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      senderId: string
      text: string
      createdAt: Date
    }, ExtArgs["result"]["privateRoomMessage"]>
    composites: {}
  }

  type PrivateRoomMessageGetPayload<S extends boolean | null | undefined | PrivateRoomMessageDefaultArgs> = $Result.GetResult<Prisma.$PrivateRoomMessagePayload, S>

  type PrivateRoomMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateRoomMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateRoomMessageCountAggregateInputType | true
    }

  export interface PrivateRoomMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateRoomMessage'], meta: { name: 'PrivateRoomMessage' } }
    /**
     * Find zero or one PrivateRoomMessage that matches the filter.
     * @param {PrivateRoomMessageFindUniqueArgs} args - Arguments to find a PrivateRoomMessage
     * @example
     * // Get one PrivateRoomMessage
     * const privateRoomMessage = await prisma.privateRoomMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateRoomMessageFindUniqueArgs>(args: SelectSubset<T, PrivateRoomMessageFindUniqueArgs<ExtArgs>>): Prisma__PrivateRoomMessageClient<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateRoomMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateRoomMessageFindUniqueOrThrowArgs} args - Arguments to find a PrivateRoomMessage
     * @example
     * // Get one PrivateRoomMessage
     * const privateRoomMessage = await prisma.privateRoomMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateRoomMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateRoomMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateRoomMessageClient<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateRoomMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomMessageFindFirstArgs} args - Arguments to find a PrivateRoomMessage
     * @example
     * // Get one PrivateRoomMessage
     * const privateRoomMessage = await prisma.privateRoomMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateRoomMessageFindFirstArgs>(args?: SelectSubset<T, PrivateRoomMessageFindFirstArgs<ExtArgs>>): Prisma__PrivateRoomMessageClient<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateRoomMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomMessageFindFirstOrThrowArgs} args - Arguments to find a PrivateRoomMessage
     * @example
     * // Get one PrivateRoomMessage
     * const privateRoomMessage = await prisma.privateRoomMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateRoomMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateRoomMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateRoomMessageClient<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateRoomMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateRoomMessages
     * const privateRoomMessages = await prisma.privateRoomMessage.findMany()
     * 
     * // Get first 10 PrivateRoomMessages
     * const privateRoomMessages = await prisma.privateRoomMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateRoomMessageWithIdOnly = await prisma.privateRoomMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivateRoomMessageFindManyArgs>(args?: SelectSubset<T, PrivateRoomMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateRoomMessage.
     * @param {PrivateRoomMessageCreateArgs} args - Arguments to create a PrivateRoomMessage.
     * @example
     * // Create one PrivateRoomMessage
     * const PrivateRoomMessage = await prisma.privateRoomMessage.create({
     *   data: {
     *     // ... data to create a PrivateRoomMessage
     *   }
     * })
     * 
     */
    create<T extends PrivateRoomMessageCreateArgs>(args: SelectSubset<T, PrivateRoomMessageCreateArgs<ExtArgs>>): Prisma__PrivateRoomMessageClient<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateRoomMessages.
     * @param {PrivateRoomMessageCreateManyArgs} args - Arguments to create many PrivateRoomMessages.
     * @example
     * // Create many PrivateRoomMessages
     * const privateRoomMessage = await prisma.privateRoomMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateRoomMessageCreateManyArgs>(args?: SelectSubset<T, PrivateRoomMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateRoomMessages and returns the data saved in the database.
     * @param {PrivateRoomMessageCreateManyAndReturnArgs} args - Arguments to create many PrivateRoomMessages.
     * @example
     * // Create many PrivateRoomMessages
     * const privateRoomMessage = await prisma.privateRoomMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateRoomMessages and only return the `id`
     * const privateRoomMessageWithIdOnly = await prisma.privateRoomMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateRoomMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateRoomMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateRoomMessage.
     * @param {PrivateRoomMessageDeleteArgs} args - Arguments to delete one PrivateRoomMessage.
     * @example
     * // Delete one PrivateRoomMessage
     * const PrivateRoomMessage = await prisma.privateRoomMessage.delete({
     *   where: {
     *     // ... filter to delete one PrivateRoomMessage
     *   }
     * })
     * 
     */
    delete<T extends PrivateRoomMessageDeleteArgs>(args: SelectSubset<T, PrivateRoomMessageDeleteArgs<ExtArgs>>): Prisma__PrivateRoomMessageClient<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateRoomMessage.
     * @param {PrivateRoomMessageUpdateArgs} args - Arguments to update one PrivateRoomMessage.
     * @example
     * // Update one PrivateRoomMessage
     * const privateRoomMessage = await prisma.privateRoomMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateRoomMessageUpdateArgs>(args: SelectSubset<T, PrivateRoomMessageUpdateArgs<ExtArgs>>): Prisma__PrivateRoomMessageClient<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateRoomMessages.
     * @param {PrivateRoomMessageDeleteManyArgs} args - Arguments to filter PrivateRoomMessages to delete.
     * @example
     * // Delete a few PrivateRoomMessages
     * const { count } = await prisma.privateRoomMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateRoomMessageDeleteManyArgs>(args?: SelectSubset<T, PrivateRoomMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateRoomMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateRoomMessages
     * const privateRoomMessage = await prisma.privateRoomMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateRoomMessageUpdateManyArgs>(args: SelectSubset<T, PrivateRoomMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateRoomMessages and returns the data updated in the database.
     * @param {PrivateRoomMessageUpdateManyAndReturnArgs} args - Arguments to update many PrivateRoomMessages.
     * @example
     * // Update many PrivateRoomMessages
     * const privateRoomMessage = await prisma.privateRoomMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateRoomMessages and only return the `id`
     * const privateRoomMessageWithIdOnly = await prisma.privateRoomMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrivateRoomMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateRoomMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateRoomMessage.
     * @param {PrivateRoomMessageUpsertArgs} args - Arguments to update or create a PrivateRoomMessage.
     * @example
     * // Update or create a PrivateRoomMessage
     * const privateRoomMessage = await prisma.privateRoomMessage.upsert({
     *   create: {
     *     // ... data to create a PrivateRoomMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateRoomMessage we want to update
     *   }
     * })
     */
    upsert<T extends PrivateRoomMessageUpsertArgs>(args: SelectSubset<T, PrivateRoomMessageUpsertArgs<ExtArgs>>): Prisma__PrivateRoomMessageClient<$Result.GetResult<Prisma.$PrivateRoomMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateRoomMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomMessageCountArgs} args - Arguments to filter PrivateRoomMessages to count.
     * @example
     * // Count the number of PrivateRoomMessages
     * const count = await prisma.privateRoomMessage.count({
     *   where: {
     *     // ... the filter for the PrivateRoomMessages we want to count
     *   }
     * })
    **/
    count<T extends PrivateRoomMessageCountArgs>(
      args?: Subset<T, PrivateRoomMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateRoomMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateRoomMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrivateRoomMessageAggregateArgs>(args: Subset<T, PrivateRoomMessageAggregateArgs>): Prisma.PrismaPromise<GetPrivateRoomMessageAggregateType<T>>

    /**
     * Group by PrivateRoomMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateRoomMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrivateRoomMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateRoomMessageGroupByArgs['orderBy'] }
        : { orderBy?: PrivateRoomMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrivateRoomMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateRoomMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateRoomMessage model
   */
  readonly fields: PrivateRoomMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateRoomMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateRoomMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends PrivateRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrivateRoomDefaultArgs<ExtArgs>>): Prisma__PrivateRoomClient<$Result.GetResult<Prisma.$PrivateRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrivateRoomMessage model
   */
  interface PrivateRoomMessageFieldRefs {
    readonly id: FieldRef<"PrivateRoomMessage", 'String'>
    readonly roomId: FieldRef<"PrivateRoomMessage", 'String'>
    readonly senderId: FieldRef<"PrivateRoomMessage", 'String'>
    readonly text: FieldRef<"PrivateRoomMessage", 'String'>
    readonly createdAt: FieldRef<"PrivateRoomMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrivateRoomMessage findUnique
   */
  export type PrivateRoomMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateRoomMessage to fetch.
     */
    where: PrivateRoomMessageWhereUniqueInput
  }

  /**
   * PrivateRoomMessage findUniqueOrThrow
   */
  export type PrivateRoomMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateRoomMessage to fetch.
     */
    where: PrivateRoomMessageWhereUniqueInput
  }

  /**
   * PrivateRoomMessage findFirst
   */
  export type PrivateRoomMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateRoomMessage to fetch.
     */
    where?: PrivateRoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateRoomMessages to fetch.
     */
    orderBy?: PrivateRoomMessageOrderByWithRelationInput | PrivateRoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateRoomMessages.
     */
    cursor?: PrivateRoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateRoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateRoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateRoomMessages.
     */
    distinct?: PrivateRoomMessageScalarFieldEnum | PrivateRoomMessageScalarFieldEnum[]
  }

  /**
   * PrivateRoomMessage findFirstOrThrow
   */
  export type PrivateRoomMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateRoomMessage to fetch.
     */
    where?: PrivateRoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateRoomMessages to fetch.
     */
    orderBy?: PrivateRoomMessageOrderByWithRelationInput | PrivateRoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateRoomMessages.
     */
    cursor?: PrivateRoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateRoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateRoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateRoomMessages.
     */
    distinct?: PrivateRoomMessageScalarFieldEnum | PrivateRoomMessageScalarFieldEnum[]
  }

  /**
   * PrivateRoomMessage findMany
   */
  export type PrivateRoomMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateRoomMessages to fetch.
     */
    where?: PrivateRoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateRoomMessages to fetch.
     */
    orderBy?: PrivateRoomMessageOrderByWithRelationInput | PrivateRoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateRoomMessages.
     */
    cursor?: PrivateRoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateRoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateRoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateRoomMessages.
     */
    distinct?: PrivateRoomMessageScalarFieldEnum | PrivateRoomMessageScalarFieldEnum[]
  }

  /**
   * PrivateRoomMessage create
   */
  export type PrivateRoomMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateRoomMessage.
     */
    data: XOR<PrivateRoomMessageCreateInput, PrivateRoomMessageUncheckedCreateInput>
  }

  /**
   * PrivateRoomMessage createMany
   */
  export type PrivateRoomMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateRoomMessages.
     */
    data: PrivateRoomMessageCreateManyInput | PrivateRoomMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateRoomMessage createManyAndReturn
   */
  export type PrivateRoomMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateRoomMessages.
     */
    data: PrivateRoomMessageCreateManyInput | PrivateRoomMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateRoomMessage update
   */
  export type PrivateRoomMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateRoomMessage.
     */
    data: XOR<PrivateRoomMessageUpdateInput, PrivateRoomMessageUncheckedUpdateInput>
    /**
     * Choose, which PrivateRoomMessage to update.
     */
    where: PrivateRoomMessageWhereUniqueInput
  }

  /**
   * PrivateRoomMessage updateMany
   */
  export type PrivateRoomMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateRoomMessages.
     */
    data: XOR<PrivateRoomMessageUpdateManyMutationInput, PrivateRoomMessageUncheckedUpdateManyInput>
    /**
     * Filter which PrivateRoomMessages to update
     */
    where?: PrivateRoomMessageWhereInput
    /**
     * Limit how many PrivateRoomMessages to update.
     */
    limit?: number
  }

  /**
   * PrivateRoomMessage updateManyAndReturn
   */
  export type PrivateRoomMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * The data used to update PrivateRoomMessages.
     */
    data: XOR<PrivateRoomMessageUpdateManyMutationInput, PrivateRoomMessageUncheckedUpdateManyInput>
    /**
     * Filter which PrivateRoomMessages to update
     */
    where?: PrivateRoomMessageWhereInput
    /**
     * Limit how many PrivateRoomMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateRoomMessage upsert
   */
  export type PrivateRoomMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateRoomMessage to update in case it exists.
     */
    where: PrivateRoomMessageWhereUniqueInput
    /**
     * In case the PrivateRoomMessage found by the `where` argument doesn't exist, create a new PrivateRoomMessage with this data.
     */
    create: XOR<PrivateRoomMessageCreateInput, PrivateRoomMessageUncheckedCreateInput>
    /**
     * In case the PrivateRoomMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateRoomMessageUpdateInput, PrivateRoomMessageUncheckedUpdateInput>
  }

  /**
   * PrivateRoomMessage delete
   */
  export type PrivateRoomMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
    /**
     * Filter which PrivateRoomMessage to delete.
     */
    where: PrivateRoomMessageWhereUniqueInput
  }

  /**
   * PrivateRoomMessage deleteMany
   */
  export type PrivateRoomMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateRoomMessages to delete
     */
    where?: PrivateRoomMessageWhereInput
    /**
     * Limit how many PrivateRoomMessages to delete.
     */
    limit?: number
  }

  /**
   * PrivateRoomMessage without action
   */
  export type PrivateRoomMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateRoomMessage
     */
    select?: PrivateRoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateRoomMessage
     */
    omit?: PrivateRoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateRoomMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    googleId: 'googleId',
    mobileNumber: 'mobileNumber',
    bio: 'bio',
    avatar: 'avatar',
    avatar2: 'avatar2',
    images: 'images',
    birthday: 'birthday',
    gender: 'gender',
    horoscope: 'horoscope',
    mood: 'mood',
    purpose: 'purpose',
    prefferGender: 'prefferGender',
    intentions: 'intentions',
    experienceLevel: 'experienceLevel',
    preferredMatch: 'preferredMatch',
    primaryNeurotype: 'primaryNeurotype',
    status: 'status',
    attachmentStyle: 'attachmentStyle',
    beliefSystem: 'beliefSystem',
    mbtiType: 'mbtiType',
    interest: 'interest',
    topArtists: 'topArtists',
    favoriteGenres: 'favoriteGenres',
    uiTheme: 'uiTheme',
    instagram: 'instagram',
    facebook: 'facebook',
    isOnline: 'isOnline',
    lastSeen: 'lastSeen',
    profileCompleted: 'profileCompleted',
    isVerified: 'isVerified',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PrivacyScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    instagramPreference: 'instagramPreference',
    facebookPreference: 'facebookPreference'
  };

  export type PrivacyScalarFieldEnum = (typeof PrivacyScalarFieldEnum)[keyof typeof PrivacyScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    song_name: 'song_name',
    song_url: 'song_url',
    duration: 'duration'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    text: 'text',
    createdAt: 'createdAt',
    seen: 'seen'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ConnectionScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type ConnectionScalarFieldEnum = (typeof ConnectionScalarFieldEnum)[keyof typeof ConnectionScalarFieldEnum]


  export const GamesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon'
  };

  export type GamesScalarFieldEnum = (typeof GamesScalarFieldEnum)[keyof typeof GamesScalarFieldEnum]


  export const EmojiCharadesScalarFieldEnum: {
    id: 'id',
    questions: 'questions',
    answer: 'answer'
  };

  export type EmojiCharadesScalarFieldEnum = (typeof EmojiCharadesScalarFieldEnum)[keyof typeof EmojiCharadesScalarFieldEnum]


  export const ScoringScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    senderAnswer: 'senderAnswer',
    receiverAnswer: 'receiverAnswer',
    senderScore: 'senderScore',
    receiverScore: 'receiverScore'
  };

  export type ScoringScalarFieldEnum = (typeof ScoringScalarFieldEnum)[keyof typeof ScoringScalarFieldEnum]


  export const GlobalChatsScalarFieldEnum: {
    id: 'id',
    roomName: 'roomName',
    roomImage: 'roomImage',
    memberLists: 'memberLists'
  };

  export type GlobalChatsScalarFieldEnum = (typeof GlobalChatsScalarFieldEnum)[keyof typeof GlobalChatsScalarFieldEnum]


  export const GlobalChatMessageScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    senderId: 'senderId',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type GlobalChatMessageScalarFieldEnum = (typeof GlobalChatMessageScalarFieldEnum)[keyof typeof GlobalChatMessageScalarFieldEnum]


  export const PrivateRoomScalarFieldEnum: {
    id: 'id',
    createrId: 'createrId',
    roomName: 'roomName',
    inviteToken: 'inviteToken',
    roomImage: 'roomImage',
    category: 'category',
    description: 'description',
    memberLists: 'memberLists'
  };

  export type PrivateRoomScalarFieldEnum = (typeof PrivateRoomScalarFieldEnum)[keyof typeof PrivateRoomScalarFieldEnum]


  export const PrivateRoomMessageScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    senderId: 'senderId',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type PrivateRoomMessageScalarFieldEnum = (typeof PrivateRoomMessageScalarFieldEnum)[keyof typeof PrivateRoomMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    mobileNumber?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    avatar2?: StringNullableFilter<"User"> | string | null
    images?: StringNullableListFilter<"User">
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    horoscope?: StringNullableFilter<"User"> | string | null
    mood?: StringNullableFilter<"User"> | string | null
    purpose?: StringNullableFilter<"User"> | string | null
    prefferGender?: StringNullableFilter<"User"> | string | null
    intentions?: StringNullableFilter<"User"> | string | null
    experienceLevel?: StringNullableFilter<"User"> | string | null
    preferredMatch?: StringNullableListFilter<"User">
    primaryNeurotype?: StringNullableListFilter<"User">
    status?: StringNullableFilter<"User"> | string | null
    attachmentStyle?: StringNullableFilter<"User"> | string | null
    beliefSystem?: StringNullableFilter<"User"> | string | null
    mbtiType?: StringNullableFilter<"User"> | string | null
    interest?: StringNullableListFilter<"User">
    topArtists?: StringNullableListFilter<"User">
    favoriteGenres?: StringNullableListFilter<"User">
    uiTheme?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    isOnline?: BoolFilter<"User"> | boolean
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    profileCompleted?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    recvMessages?: MessageListRelationFilter
    sentMessages?: MessageListRelationFilter
    globalMessages?: GlobalChatMessageListRelationFilter
    privateRoomMessages?: PrivateRoomMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    avatar2?: SortOrderInput | SortOrder
    images?: SortOrder
    birthday?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    horoscope?: SortOrderInput | SortOrder
    mood?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    prefferGender?: SortOrderInput | SortOrder
    intentions?: SortOrderInput | SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    preferredMatch?: SortOrder
    primaryNeurotype?: SortOrder
    status?: SortOrderInput | SortOrder
    attachmentStyle?: SortOrderInput | SortOrder
    beliefSystem?: SortOrderInput | SortOrder
    mbtiType?: SortOrderInput | SortOrder
    interest?: SortOrder
    topArtists?: SortOrder
    favoriteGenres?: SortOrder
    uiTheme?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    profileCompleted?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recvMessages?: MessageOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    globalMessages?: GlobalChatMessageOrderByRelationAggregateInput
    privateRoomMessages?: PrivateRoomMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    mobileNumber?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    avatar2?: StringNullableFilter<"User"> | string | null
    images?: StringNullableListFilter<"User">
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    horoscope?: StringNullableFilter<"User"> | string | null
    mood?: StringNullableFilter<"User"> | string | null
    purpose?: StringNullableFilter<"User"> | string | null
    prefferGender?: StringNullableFilter<"User"> | string | null
    intentions?: StringNullableFilter<"User"> | string | null
    experienceLevel?: StringNullableFilter<"User"> | string | null
    preferredMatch?: StringNullableListFilter<"User">
    primaryNeurotype?: StringNullableListFilter<"User">
    status?: StringNullableFilter<"User"> | string | null
    attachmentStyle?: StringNullableFilter<"User"> | string | null
    beliefSystem?: StringNullableFilter<"User"> | string | null
    mbtiType?: StringNullableFilter<"User"> | string | null
    interest?: StringNullableListFilter<"User">
    topArtists?: StringNullableListFilter<"User">
    favoriteGenres?: StringNullableListFilter<"User">
    uiTheme?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    isOnline?: BoolFilter<"User"> | boolean
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    profileCompleted?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    recvMessages?: MessageListRelationFilter
    sentMessages?: MessageListRelationFilter
    globalMessages?: GlobalChatMessageListRelationFilter
    privateRoomMessages?: PrivateRoomMessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    avatar2?: SortOrderInput | SortOrder
    images?: SortOrder
    birthday?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    horoscope?: SortOrderInput | SortOrder
    mood?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    prefferGender?: SortOrderInput | SortOrder
    intentions?: SortOrderInput | SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    preferredMatch?: SortOrder
    primaryNeurotype?: SortOrder
    status?: SortOrderInput | SortOrder
    attachmentStyle?: SortOrderInput | SortOrder
    beliefSystem?: SortOrderInput | SortOrder
    mbtiType?: SortOrderInput | SortOrder
    interest?: SortOrder
    topArtists?: SortOrder
    favoriteGenres?: SortOrder
    uiTheme?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    profileCompleted?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    mobileNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar2?: StringNullableWithAggregatesFilter<"User"> | string | null
    images?: StringNullableListFilter<"User">
    birthday?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    horoscope?: StringNullableWithAggregatesFilter<"User"> | string | null
    mood?: StringNullableWithAggregatesFilter<"User"> | string | null
    purpose?: StringNullableWithAggregatesFilter<"User"> | string | null
    prefferGender?: StringNullableWithAggregatesFilter<"User"> | string | null
    intentions?: StringNullableWithAggregatesFilter<"User"> | string | null
    experienceLevel?: StringNullableWithAggregatesFilter<"User"> | string | null
    preferredMatch?: StringNullableListFilter<"User">
    primaryNeurotype?: StringNullableListFilter<"User">
    status?: StringNullableWithAggregatesFilter<"User"> | string | null
    attachmentStyle?: StringNullableWithAggregatesFilter<"User"> | string | null
    beliefSystem?: StringNullableWithAggregatesFilter<"User"> | string | null
    mbtiType?: StringNullableWithAggregatesFilter<"User"> | string | null
    interest?: StringNullableListFilter<"User">
    topArtists?: StringNullableListFilter<"User">
    favoriteGenres?: StringNullableListFilter<"User">
    uiTheme?: StringNullableWithAggregatesFilter<"User"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"User"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"User"> | string | null
    isOnline?: BoolWithAggregatesFilter<"User"> | boolean
    lastSeen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    profileCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type privacyWhereInput = {
    AND?: privacyWhereInput | privacyWhereInput[]
    OR?: privacyWhereInput[]
    NOT?: privacyWhereInput | privacyWhereInput[]
    id?: StringFilter<"privacy"> | string
    senderId?: StringFilter<"privacy"> | string
    receiverId?: StringFilter<"privacy"> | string
    instagramPreference?: BoolNullableFilter<"privacy"> | boolean | null
    facebookPreference?: BoolNullableFilter<"privacy"> | boolean | null
  }

  export type privacyOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    instagramPreference?: SortOrderInput | SortOrder
    facebookPreference?: SortOrderInput | SortOrder
  }

  export type privacyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    senderId_receiverId?: privacySenderIdReceiverIdCompoundUniqueInput
    AND?: privacyWhereInput | privacyWhereInput[]
    OR?: privacyWhereInput[]
    NOT?: privacyWhereInput | privacyWhereInput[]
    senderId?: StringFilter<"privacy"> | string
    receiverId?: StringFilter<"privacy"> | string
    instagramPreference?: BoolNullableFilter<"privacy"> | boolean | null
    facebookPreference?: BoolNullableFilter<"privacy"> | boolean | null
  }, "id" | "senderId_receiverId">

  export type privacyOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    instagramPreference?: SortOrderInput | SortOrder
    facebookPreference?: SortOrderInput | SortOrder
    _count?: privacyCountOrderByAggregateInput
    _max?: privacyMaxOrderByAggregateInput
    _min?: privacyMinOrderByAggregateInput
  }

  export type privacyScalarWhereWithAggregatesInput = {
    AND?: privacyScalarWhereWithAggregatesInput | privacyScalarWhereWithAggregatesInput[]
    OR?: privacyScalarWhereWithAggregatesInput[]
    NOT?: privacyScalarWhereWithAggregatesInput | privacyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"privacy"> | string
    senderId?: StringWithAggregatesFilter<"privacy"> | string
    receiverId?: StringWithAggregatesFilter<"privacy"> | string
    instagramPreference?: BoolNullableWithAggregatesFilter<"privacy"> | boolean | null
    facebookPreference?: BoolNullableWithAggregatesFilter<"privacy"> | boolean | null
  }

  export type songWhereInput = {
    AND?: songWhereInput | songWhereInput[]
    OR?: songWhereInput[]
    NOT?: songWhereInput | songWhereInput[]
    id?: StringFilter<"song"> | string
    song_name?: StringFilter<"song"> | string
    song_url?: StringFilter<"song"> | string
    duration?: IntFilter<"song"> | number
  }

  export type songOrderByWithRelationInput = {
    id?: SortOrder
    song_name?: SortOrder
    song_url?: SortOrder
    duration?: SortOrder
  }

  export type songWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: songWhereInput | songWhereInput[]
    OR?: songWhereInput[]
    NOT?: songWhereInput | songWhereInput[]
    song_name?: StringFilter<"song"> | string
    song_url?: StringFilter<"song"> | string
    duration?: IntFilter<"song"> | number
  }, "id">

  export type songOrderByWithAggregationInput = {
    id?: SortOrder
    song_name?: SortOrder
    song_url?: SortOrder
    duration?: SortOrder
    _count?: songCountOrderByAggregateInput
    _avg?: songAvgOrderByAggregateInput
    _max?: songMaxOrderByAggregateInput
    _min?: songMinOrderByAggregateInput
    _sum?: songSumOrderByAggregateInput
  }

  export type songScalarWhereWithAggregatesInput = {
    AND?: songScalarWhereWithAggregatesInput | songScalarWhereWithAggregatesInput[]
    OR?: songScalarWhereWithAggregatesInput[]
    NOT?: songScalarWhereWithAggregatesInput | songScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"song"> | string
    song_name?: StringWithAggregatesFilter<"song"> | string
    song_url?: StringWithAggregatesFilter<"song"> | string
    duration?: IntWithAggregatesFilter<"song"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    seen?: BoolFilter<"Message"> | boolean
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
    receiver?: UserOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    seen?: BoolFilter<"Message"> | boolean
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
    text?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    seen?: BoolWithAggregatesFilter<"Message"> | boolean
  }

  export type connectionWhereInput = {
    AND?: connectionWhereInput | connectionWhereInput[]
    OR?: connectionWhereInput[]
    NOT?: connectionWhereInput | connectionWhereInput[]
    id?: StringFilter<"connection"> | string
    senderId?: StringFilter<"connection"> | string
    receiverId?: StringFilter<"connection"> | string
    status?: StringFilter<"connection"> | string
    updatedAt?: DateTimeFilter<"connection"> | Date | string
  }

  export type connectionOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type connectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    senderId_receiverId?: connectionSenderIdReceiverIdCompoundUniqueInput
    AND?: connectionWhereInput | connectionWhereInput[]
    OR?: connectionWhereInput[]
    NOT?: connectionWhereInput | connectionWhereInput[]
    senderId?: StringFilter<"connection"> | string
    receiverId?: StringFilter<"connection"> | string
    status?: StringFilter<"connection"> | string
    updatedAt?: DateTimeFilter<"connection"> | Date | string
  }, "id" | "senderId_receiverId">

  export type connectionOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: connectionCountOrderByAggregateInput
    _max?: connectionMaxOrderByAggregateInput
    _min?: connectionMinOrderByAggregateInput
  }

  export type connectionScalarWhereWithAggregatesInput = {
    AND?: connectionScalarWhereWithAggregatesInput | connectionScalarWhereWithAggregatesInput[]
    OR?: connectionScalarWhereWithAggregatesInput[]
    NOT?: connectionScalarWhereWithAggregatesInput | connectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"connection"> | string
    senderId?: StringWithAggregatesFilter<"connection"> | string
    receiverId?: StringWithAggregatesFilter<"connection"> | string
    status?: StringWithAggregatesFilter<"connection"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"connection"> | Date | string
  }

  export type GamesWhereInput = {
    AND?: GamesWhereInput | GamesWhereInput[]
    OR?: GamesWhereInput[]
    NOT?: GamesWhereInput | GamesWhereInput[]
    id?: StringFilter<"Games"> | string
    name?: StringFilter<"Games"> | string
    icon?: StringFilter<"Games"> | string
  }

  export type GamesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type GamesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GamesWhereInput | GamesWhereInput[]
    OR?: GamesWhereInput[]
    NOT?: GamesWhereInput | GamesWhereInput[]
    name?: StringFilter<"Games"> | string
    icon?: StringFilter<"Games"> | string
  }, "id">

  export type GamesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    _count?: GamesCountOrderByAggregateInput
    _max?: GamesMaxOrderByAggregateInput
    _min?: GamesMinOrderByAggregateInput
  }

  export type GamesScalarWhereWithAggregatesInput = {
    AND?: GamesScalarWhereWithAggregatesInput | GamesScalarWhereWithAggregatesInput[]
    OR?: GamesScalarWhereWithAggregatesInput[]
    NOT?: GamesScalarWhereWithAggregatesInput | GamesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Games"> | string
    name?: StringWithAggregatesFilter<"Games"> | string
    icon?: StringWithAggregatesFilter<"Games"> | string
  }

  export type EmojiCharadesWhereInput = {
    AND?: EmojiCharadesWhereInput | EmojiCharadesWhereInput[]
    OR?: EmojiCharadesWhereInput[]
    NOT?: EmojiCharadesWhereInput | EmojiCharadesWhereInput[]
    id?: StringFilter<"EmojiCharades"> | string
    questions?: StringFilter<"EmojiCharades"> | string
    answer?: StringFilter<"EmojiCharades"> | string
  }

  export type EmojiCharadesOrderByWithRelationInput = {
    id?: SortOrder
    questions?: SortOrder
    answer?: SortOrder
  }

  export type EmojiCharadesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmojiCharadesWhereInput | EmojiCharadesWhereInput[]
    OR?: EmojiCharadesWhereInput[]
    NOT?: EmojiCharadesWhereInput | EmojiCharadesWhereInput[]
    questions?: StringFilter<"EmojiCharades"> | string
    answer?: StringFilter<"EmojiCharades"> | string
  }, "id">

  export type EmojiCharadesOrderByWithAggregationInput = {
    id?: SortOrder
    questions?: SortOrder
    answer?: SortOrder
    _count?: EmojiCharadesCountOrderByAggregateInput
    _max?: EmojiCharadesMaxOrderByAggregateInput
    _min?: EmojiCharadesMinOrderByAggregateInput
  }

  export type EmojiCharadesScalarWhereWithAggregatesInput = {
    AND?: EmojiCharadesScalarWhereWithAggregatesInput | EmojiCharadesScalarWhereWithAggregatesInput[]
    OR?: EmojiCharadesScalarWhereWithAggregatesInput[]
    NOT?: EmojiCharadesScalarWhereWithAggregatesInput | EmojiCharadesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmojiCharades"> | string
    questions?: StringWithAggregatesFilter<"EmojiCharades"> | string
    answer?: StringWithAggregatesFilter<"EmojiCharades"> | string
  }

  export type ScoringWhereInput = {
    AND?: ScoringWhereInput | ScoringWhereInput[]
    OR?: ScoringWhereInput[]
    NOT?: ScoringWhereInput | ScoringWhereInput[]
    id?: StringFilter<"Scoring"> | string
    senderId?: StringFilter<"Scoring"> | string
    receiverId?: StringFilter<"Scoring"> | string
    senderAnswer?: StringNullableListFilter<"Scoring">
    receiverAnswer?: StringNullableListFilter<"Scoring">
    senderScore?: IntFilter<"Scoring"> | number
    receiverScore?: IntFilter<"Scoring"> | number
  }

  export type ScoringOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    senderAnswer?: SortOrder
    receiverAnswer?: SortOrder
    senderScore?: SortOrder
    receiverScore?: SortOrder
  }

  export type ScoringWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    senderId_receiverId?: ScoringSenderIdReceiverIdCompoundUniqueInput
    AND?: ScoringWhereInput | ScoringWhereInput[]
    OR?: ScoringWhereInput[]
    NOT?: ScoringWhereInput | ScoringWhereInput[]
    senderId?: StringFilter<"Scoring"> | string
    receiverId?: StringFilter<"Scoring"> | string
    senderAnswer?: StringNullableListFilter<"Scoring">
    receiverAnswer?: StringNullableListFilter<"Scoring">
    senderScore?: IntFilter<"Scoring"> | number
    receiverScore?: IntFilter<"Scoring"> | number
  }, "id" | "senderId_receiverId">

  export type ScoringOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    senderAnswer?: SortOrder
    receiverAnswer?: SortOrder
    senderScore?: SortOrder
    receiverScore?: SortOrder
    _count?: ScoringCountOrderByAggregateInput
    _avg?: ScoringAvgOrderByAggregateInput
    _max?: ScoringMaxOrderByAggregateInput
    _min?: ScoringMinOrderByAggregateInput
    _sum?: ScoringSumOrderByAggregateInput
  }

  export type ScoringScalarWhereWithAggregatesInput = {
    AND?: ScoringScalarWhereWithAggregatesInput | ScoringScalarWhereWithAggregatesInput[]
    OR?: ScoringScalarWhereWithAggregatesInput[]
    NOT?: ScoringScalarWhereWithAggregatesInput | ScoringScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scoring"> | string
    senderId?: StringWithAggregatesFilter<"Scoring"> | string
    receiverId?: StringWithAggregatesFilter<"Scoring"> | string
    senderAnswer?: StringNullableListFilter<"Scoring">
    receiverAnswer?: StringNullableListFilter<"Scoring">
    senderScore?: IntWithAggregatesFilter<"Scoring"> | number
    receiverScore?: IntWithAggregatesFilter<"Scoring"> | number
  }

  export type GlobalChatsWhereInput = {
    AND?: GlobalChatsWhereInput | GlobalChatsWhereInput[]
    OR?: GlobalChatsWhereInput[]
    NOT?: GlobalChatsWhereInput | GlobalChatsWhereInput[]
    id?: StringFilter<"GlobalChats"> | string
    roomName?: StringFilter<"GlobalChats"> | string
    roomImage?: StringNullableFilter<"GlobalChats"> | string | null
    memberLists?: StringNullableListFilter<"GlobalChats">
    messages?: GlobalChatMessageListRelationFilter
  }

  export type GlobalChatsOrderByWithRelationInput = {
    id?: SortOrder
    roomName?: SortOrder
    roomImage?: SortOrderInput | SortOrder
    memberLists?: SortOrder
    messages?: GlobalChatMessageOrderByRelationAggregateInput
  }

  export type GlobalChatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomName?: string
    AND?: GlobalChatsWhereInput | GlobalChatsWhereInput[]
    OR?: GlobalChatsWhereInput[]
    NOT?: GlobalChatsWhereInput | GlobalChatsWhereInput[]
    roomImage?: StringNullableFilter<"GlobalChats"> | string | null
    memberLists?: StringNullableListFilter<"GlobalChats">
    messages?: GlobalChatMessageListRelationFilter
  }, "id" | "roomName">

  export type GlobalChatsOrderByWithAggregationInput = {
    id?: SortOrder
    roomName?: SortOrder
    roomImage?: SortOrderInput | SortOrder
    memberLists?: SortOrder
    _count?: GlobalChatsCountOrderByAggregateInput
    _max?: GlobalChatsMaxOrderByAggregateInput
    _min?: GlobalChatsMinOrderByAggregateInput
  }

  export type GlobalChatsScalarWhereWithAggregatesInput = {
    AND?: GlobalChatsScalarWhereWithAggregatesInput | GlobalChatsScalarWhereWithAggregatesInput[]
    OR?: GlobalChatsScalarWhereWithAggregatesInput[]
    NOT?: GlobalChatsScalarWhereWithAggregatesInput | GlobalChatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalChats"> | string
    roomName?: StringWithAggregatesFilter<"GlobalChats"> | string
    roomImage?: StringNullableWithAggregatesFilter<"GlobalChats"> | string | null
    memberLists?: StringNullableListFilter<"GlobalChats">
  }

  export type GlobalChatMessageWhereInput = {
    AND?: GlobalChatMessageWhereInput | GlobalChatMessageWhereInput[]
    OR?: GlobalChatMessageWhereInput[]
    NOT?: GlobalChatMessageWhereInput | GlobalChatMessageWhereInput[]
    id?: StringFilter<"GlobalChatMessage"> | string
    roomId?: StringFilter<"GlobalChatMessage"> | string
    senderId?: StringFilter<"GlobalChatMessage"> | string
    text?: StringFilter<"GlobalChatMessage"> | string
    createdAt?: DateTimeFilter<"GlobalChatMessage"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<GlobalChatsScalarRelationFilter, GlobalChatsWhereInput>
  }

  export type GlobalChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    room?: GlobalChatsOrderByWithRelationInput
  }

  export type GlobalChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalChatMessageWhereInput | GlobalChatMessageWhereInput[]
    OR?: GlobalChatMessageWhereInput[]
    NOT?: GlobalChatMessageWhereInput | GlobalChatMessageWhereInput[]
    roomId?: StringFilter<"GlobalChatMessage"> | string
    senderId?: StringFilter<"GlobalChatMessage"> | string
    text?: StringFilter<"GlobalChatMessage"> | string
    createdAt?: DateTimeFilter<"GlobalChatMessage"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<GlobalChatsScalarRelationFilter, GlobalChatsWhereInput>
  }, "id">

  export type GlobalChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: GlobalChatMessageCountOrderByAggregateInput
    _max?: GlobalChatMessageMaxOrderByAggregateInput
    _min?: GlobalChatMessageMinOrderByAggregateInput
  }

  export type GlobalChatMessageScalarWhereWithAggregatesInput = {
    AND?: GlobalChatMessageScalarWhereWithAggregatesInput | GlobalChatMessageScalarWhereWithAggregatesInput[]
    OR?: GlobalChatMessageScalarWhereWithAggregatesInput[]
    NOT?: GlobalChatMessageScalarWhereWithAggregatesInput | GlobalChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalChatMessage"> | string
    roomId?: StringWithAggregatesFilter<"GlobalChatMessage"> | string
    senderId?: StringWithAggregatesFilter<"GlobalChatMessage"> | string
    text?: StringWithAggregatesFilter<"GlobalChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GlobalChatMessage"> | Date | string
  }

  export type PrivateRoomWhereInput = {
    AND?: PrivateRoomWhereInput | PrivateRoomWhereInput[]
    OR?: PrivateRoomWhereInput[]
    NOT?: PrivateRoomWhereInput | PrivateRoomWhereInput[]
    id?: StringFilter<"PrivateRoom"> | string
    createrId?: StringFilter<"PrivateRoom"> | string
    roomName?: StringFilter<"PrivateRoom"> | string
    inviteToken?: StringFilter<"PrivateRoom"> | string
    roomImage?: StringNullableFilter<"PrivateRoom"> | string | null
    category?: StringNullableFilter<"PrivateRoom"> | string | null
    description?: StringNullableFilter<"PrivateRoom"> | string | null
    memberLists?: StringNullableListFilter<"PrivateRoom">
    messages?: PrivateRoomMessageListRelationFilter
  }

  export type PrivateRoomOrderByWithRelationInput = {
    id?: SortOrder
    createrId?: SortOrder
    roomName?: SortOrder
    inviteToken?: SortOrder
    roomImage?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    memberLists?: SortOrder
    messages?: PrivateRoomMessageOrderByRelationAggregateInput
  }

  export type PrivateRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomName?: string
    inviteToken?: string
    AND?: PrivateRoomWhereInput | PrivateRoomWhereInput[]
    OR?: PrivateRoomWhereInput[]
    NOT?: PrivateRoomWhereInput | PrivateRoomWhereInput[]
    createrId?: StringFilter<"PrivateRoom"> | string
    roomImage?: StringNullableFilter<"PrivateRoom"> | string | null
    category?: StringNullableFilter<"PrivateRoom"> | string | null
    description?: StringNullableFilter<"PrivateRoom"> | string | null
    memberLists?: StringNullableListFilter<"PrivateRoom">
    messages?: PrivateRoomMessageListRelationFilter
  }, "id" | "roomName" | "inviteToken">

  export type PrivateRoomOrderByWithAggregationInput = {
    id?: SortOrder
    createrId?: SortOrder
    roomName?: SortOrder
    inviteToken?: SortOrder
    roomImage?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    memberLists?: SortOrder
    _count?: PrivateRoomCountOrderByAggregateInput
    _max?: PrivateRoomMaxOrderByAggregateInput
    _min?: PrivateRoomMinOrderByAggregateInput
  }

  export type PrivateRoomScalarWhereWithAggregatesInput = {
    AND?: PrivateRoomScalarWhereWithAggregatesInput | PrivateRoomScalarWhereWithAggregatesInput[]
    OR?: PrivateRoomScalarWhereWithAggregatesInput[]
    NOT?: PrivateRoomScalarWhereWithAggregatesInput | PrivateRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrivateRoom"> | string
    createrId?: StringWithAggregatesFilter<"PrivateRoom"> | string
    roomName?: StringWithAggregatesFilter<"PrivateRoom"> | string
    inviteToken?: StringWithAggregatesFilter<"PrivateRoom"> | string
    roomImage?: StringNullableWithAggregatesFilter<"PrivateRoom"> | string | null
    category?: StringNullableWithAggregatesFilter<"PrivateRoom"> | string | null
    description?: StringNullableWithAggregatesFilter<"PrivateRoom"> | string | null
    memberLists?: StringNullableListFilter<"PrivateRoom">
  }

  export type PrivateRoomMessageWhereInput = {
    AND?: PrivateRoomMessageWhereInput | PrivateRoomMessageWhereInput[]
    OR?: PrivateRoomMessageWhereInput[]
    NOT?: PrivateRoomMessageWhereInput | PrivateRoomMessageWhereInput[]
    id?: StringFilter<"PrivateRoomMessage"> | string
    roomId?: StringFilter<"PrivateRoomMessage"> | string
    senderId?: StringFilter<"PrivateRoomMessage"> | string
    text?: StringFilter<"PrivateRoomMessage"> | string
    createdAt?: DateTimeFilter<"PrivateRoomMessage"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<PrivateRoomScalarRelationFilter, PrivateRoomWhereInput>
  }

  export type PrivateRoomMessageOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    room?: PrivateRoomOrderByWithRelationInput
  }

  export type PrivateRoomMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrivateRoomMessageWhereInput | PrivateRoomMessageWhereInput[]
    OR?: PrivateRoomMessageWhereInput[]
    NOT?: PrivateRoomMessageWhereInput | PrivateRoomMessageWhereInput[]
    roomId?: StringFilter<"PrivateRoomMessage"> | string
    senderId?: StringFilter<"PrivateRoomMessage"> | string
    text?: StringFilter<"PrivateRoomMessage"> | string
    createdAt?: DateTimeFilter<"PrivateRoomMessage"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<PrivateRoomScalarRelationFilter, PrivateRoomWhereInput>
  }, "id">

  export type PrivateRoomMessageOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: PrivateRoomMessageCountOrderByAggregateInput
    _max?: PrivateRoomMessageMaxOrderByAggregateInput
    _min?: PrivateRoomMessageMinOrderByAggregateInput
  }

  export type PrivateRoomMessageScalarWhereWithAggregatesInput = {
    AND?: PrivateRoomMessageScalarWhereWithAggregatesInput | PrivateRoomMessageScalarWhereWithAggregatesInput[]
    OR?: PrivateRoomMessageScalarWhereWithAggregatesInput[]
    NOT?: PrivateRoomMessageScalarWhereWithAggregatesInput | PrivateRoomMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrivateRoomMessage"> | string
    roomId?: StringWithAggregatesFilter<"PrivateRoomMessage"> | string
    senderId?: StringWithAggregatesFilter<"PrivateRoomMessage"> | string
    text?: StringWithAggregatesFilter<"PrivateRoomMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PrivateRoomMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recvMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    globalMessages?: GlobalChatMessageCreateNestedManyWithoutSenderInput
    privateRoomMessages?: PrivateRoomMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recvMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    globalMessages?: GlobalChatMessageUncheckedCreateNestedManyWithoutSenderInput
    privateRoomMessages?: PrivateRoomMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recvMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    globalMessages?: GlobalChatMessageUpdateManyWithoutSenderNestedInput
    privateRoomMessages?: PrivateRoomMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recvMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    globalMessages?: GlobalChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    privateRoomMessages?: PrivateRoomMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type privacyCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    instagramPreference?: boolean | null
    facebookPreference?: boolean | null
  }

  export type privacyUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    instagramPreference?: boolean | null
    facebookPreference?: boolean | null
  }

  export type privacyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    instagramPreference?: NullableBoolFieldUpdateOperationsInput | boolean | null
    facebookPreference?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type privacyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    instagramPreference?: NullableBoolFieldUpdateOperationsInput | boolean | null
    facebookPreference?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type privacyCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    instagramPreference?: boolean | null
    facebookPreference?: boolean | null
  }

  export type privacyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    instagramPreference?: NullableBoolFieldUpdateOperationsInput | boolean | null
    facebookPreference?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type privacyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    instagramPreference?: NullableBoolFieldUpdateOperationsInput | boolean | null
    facebookPreference?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type songCreateInput = {
    id?: string
    song_name: string
    song_url: string
    duration: number
  }

  export type songUncheckedCreateInput = {
    id?: string
    song_name: string
    song_url: string
    duration: number
  }

  export type songUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    song_name?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type songUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    song_name?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type songCreateManyInput = {
    id?: string
    song_name: string
    song_url: string
    duration: number
  }

  export type songUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    song_name?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type songUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    song_name?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    seen?: boolean
    receiver: UserCreateNestedOneWithoutRecvMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    text: string
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    receiver?: UserUpdateOneRequiredWithoutRecvMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    text: string
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type connectionCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    status: string
    updatedAt?: Date | string
  }

  export type connectionUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    status: string
    updatedAt?: Date | string
  }

  export type connectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type connectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type connectionCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    status: string
    updatedAt?: Date | string
  }

  export type connectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type connectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamesCreateInput = {
    id?: string
    name: string
    icon: string
  }

  export type GamesUncheckedCreateInput = {
    id?: string
    name: string
    icon: string
  }

  export type GamesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type GamesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type GamesCreateManyInput = {
    id?: string
    name: string
    icon: string
  }

  export type GamesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type GamesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type EmojiCharadesCreateInput = {
    id?: string
    questions: string
    answer: string
  }

  export type EmojiCharadesUncheckedCreateInput = {
    id?: string
    questions: string
    answer: string
  }

  export type EmojiCharadesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type EmojiCharadesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type EmojiCharadesCreateManyInput = {
    id?: string
    questions: string
    answer: string
  }

  export type EmojiCharadesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type EmojiCharadesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type ScoringCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    senderAnswer?: ScoringCreatesenderAnswerInput | string[]
    receiverAnswer?: ScoringCreatereceiverAnswerInput | string[]
    senderScore: number
    receiverScore: number
  }

  export type ScoringUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    senderAnswer?: ScoringCreatesenderAnswerInput | string[]
    receiverAnswer?: ScoringCreatereceiverAnswerInput | string[]
    senderScore: number
    receiverScore: number
  }

  export type ScoringUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    senderAnswer?: ScoringUpdatesenderAnswerInput | string[]
    receiverAnswer?: ScoringUpdatereceiverAnswerInput | string[]
    senderScore?: IntFieldUpdateOperationsInput | number
    receiverScore?: IntFieldUpdateOperationsInput | number
  }

  export type ScoringUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    senderAnswer?: ScoringUpdatesenderAnswerInput | string[]
    receiverAnswer?: ScoringUpdatereceiverAnswerInput | string[]
    senderScore?: IntFieldUpdateOperationsInput | number
    receiverScore?: IntFieldUpdateOperationsInput | number
  }

  export type ScoringCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    senderAnswer?: ScoringCreatesenderAnswerInput | string[]
    receiverAnswer?: ScoringCreatereceiverAnswerInput | string[]
    senderScore: number
    receiverScore: number
  }

  export type ScoringUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    senderAnswer?: ScoringUpdatesenderAnswerInput | string[]
    receiverAnswer?: ScoringUpdatereceiverAnswerInput | string[]
    senderScore?: IntFieldUpdateOperationsInput | number
    receiverScore?: IntFieldUpdateOperationsInput | number
  }

  export type ScoringUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    senderAnswer?: ScoringUpdatesenderAnswerInput | string[]
    receiverAnswer?: ScoringUpdatereceiverAnswerInput | string[]
    senderScore?: IntFieldUpdateOperationsInput | number
    receiverScore?: IntFieldUpdateOperationsInput | number
  }

  export type GlobalChatsCreateInput = {
    id?: string
    roomName: string
    roomImage?: string | null
    memberLists?: GlobalChatsCreatememberListsInput | string[]
    messages?: GlobalChatMessageCreateNestedManyWithoutRoomInput
  }

  export type GlobalChatsUncheckedCreateInput = {
    id?: string
    roomName: string
    roomImage?: string | null
    memberLists?: GlobalChatsCreatememberListsInput | string[]
    messages?: GlobalChatMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type GlobalChatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: GlobalChatsUpdatememberListsInput | string[]
    messages?: GlobalChatMessageUpdateManyWithoutRoomNestedInput
  }

  export type GlobalChatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: GlobalChatsUpdatememberListsInput | string[]
    messages?: GlobalChatMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type GlobalChatsCreateManyInput = {
    id?: string
    roomName: string
    roomImage?: string | null
    memberLists?: GlobalChatsCreatememberListsInput | string[]
  }

  export type GlobalChatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: GlobalChatsUpdatememberListsInput | string[]
  }

  export type GlobalChatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: GlobalChatsUpdatememberListsInput | string[]
  }

  export type GlobalChatMessageCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutGlobalMessagesInput
    room: GlobalChatsCreateNestedOneWithoutMessagesInput
  }

  export type GlobalChatMessageUncheckedCreateInput = {
    id?: string
    roomId: string
    senderId: string
    text: string
    createdAt?: Date | string
  }

  export type GlobalChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutGlobalMessagesNestedInput
    room?: GlobalChatsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type GlobalChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalChatMessageCreateManyInput = {
    id?: string
    roomId: string
    senderId: string
    text: string
    createdAt?: Date | string
  }

  export type GlobalChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateRoomCreateInput = {
    id?: string
    createrId: string
    roomName: string
    inviteToken: string
    roomImage?: string | null
    category?: string | null
    description?: string | null
    memberLists?: PrivateRoomCreatememberListsInput | string[]
    messages?: PrivateRoomMessageCreateNestedManyWithoutRoomInput
  }

  export type PrivateRoomUncheckedCreateInput = {
    id?: string
    createrId: string
    roomName: string
    inviteToken: string
    roomImage?: string | null
    category?: string | null
    description?: string | null
    memberLists?: PrivateRoomCreatememberListsInput | string[]
    messages?: PrivateRoomMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type PrivateRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    inviteToken?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: PrivateRoomUpdatememberListsInput | string[]
    messages?: PrivateRoomMessageUpdateManyWithoutRoomNestedInput
  }

  export type PrivateRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    inviteToken?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: PrivateRoomUpdatememberListsInput | string[]
    messages?: PrivateRoomMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PrivateRoomCreateManyInput = {
    id?: string
    createrId: string
    roomName: string
    inviteToken: string
    roomImage?: string | null
    category?: string | null
    description?: string | null
    memberLists?: PrivateRoomCreatememberListsInput | string[]
  }

  export type PrivateRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    inviteToken?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: PrivateRoomUpdatememberListsInput | string[]
  }

  export type PrivateRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    inviteToken?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: PrivateRoomUpdatememberListsInput | string[]
  }

  export type PrivateRoomMessageCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutPrivateRoomMessagesInput
    room: PrivateRoomCreateNestedOneWithoutMessagesInput
  }

  export type PrivateRoomMessageUncheckedCreateInput = {
    id?: string
    roomId: string
    senderId: string
    text: string
    createdAt?: Date | string
  }

  export type PrivateRoomMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutPrivateRoomMessagesNestedInput
    room?: PrivateRoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type PrivateRoomMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateRoomMessageCreateManyInput = {
    id?: string
    roomId: string
    senderId: string
    text: string
    createdAt?: Date | string
  }

  export type PrivateRoomMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateRoomMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type GlobalChatMessageListRelationFilter = {
    every?: GlobalChatMessageWhereInput
    some?: GlobalChatMessageWhereInput
    none?: GlobalChatMessageWhereInput
  }

  export type PrivateRoomMessageListRelationFilter = {
    every?: PrivateRoomMessageWhereInput
    some?: PrivateRoomMessageWhereInput
    none?: PrivateRoomMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GlobalChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrivateRoomMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    mobileNumber?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    avatar2?: SortOrder
    images?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    horoscope?: SortOrder
    mood?: SortOrder
    purpose?: SortOrder
    prefferGender?: SortOrder
    intentions?: SortOrder
    experienceLevel?: SortOrder
    preferredMatch?: SortOrder
    primaryNeurotype?: SortOrder
    status?: SortOrder
    attachmentStyle?: SortOrder
    beliefSystem?: SortOrder
    mbtiType?: SortOrder
    interest?: SortOrder
    topArtists?: SortOrder
    favoriteGenres?: SortOrder
    uiTheme?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    profileCompleted?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    mobileNumber?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    avatar2?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    horoscope?: SortOrder
    mood?: SortOrder
    purpose?: SortOrder
    prefferGender?: SortOrder
    intentions?: SortOrder
    experienceLevel?: SortOrder
    status?: SortOrder
    attachmentStyle?: SortOrder
    beliefSystem?: SortOrder
    mbtiType?: SortOrder
    uiTheme?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    profileCompleted?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    mobileNumber?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    avatar2?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    horoscope?: SortOrder
    mood?: SortOrder
    purpose?: SortOrder
    prefferGender?: SortOrder
    intentions?: SortOrder
    experienceLevel?: SortOrder
    status?: SortOrder
    attachmentStyle?: SortOrder
    beliefSystem?: SortOrder
    mbtiType?: SortOrder
    uiTheme?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    profileCompleted?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type privacySenderIdReceiverIdCompoundUniqueInput = {
    senderId: string
    receiverId: string
  }

  export type privacyCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    instagramPreference?: SortOrder
    facebookPreference?: SortOrder
  }

  export type privacyMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    instagramPreference?: SortOrder
    facebookPreference?: SortOrder
  }

  export type privacyMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    instagramPreference?: SortOrder
    facebookPreference?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type songCountOrderByAggregateInput = {
    id?: SortOrder
    song_name?: SortOrder
    song_url?: SortOrder
    duration?: SortOrder
  }

  export type songAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type songMaxOrderByAggregateInput = {
    id?: SortOrder
    song_name?: SortOrder
    song_url?: SortOrder
    duration?: SortOrder
  }

  export type songMinOrderByAggregateInput = {
    id?: SortOrder
    song_name?: SortOrder
    song_url?: SortOrder
    duration?: SortOrder
  }

  export type songSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type connectionSenderIdReceiverIdCompoundUniqueInput = {
    senderId: string
    receiverId: string
  }

  export type connectionCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type connectionMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type connectionMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type GamesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type GamesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type GamesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type EmojiCharadesCountOrderByAggregateInput = {
    id?: SortOrder
    questions?: SortOrder
    answer?: SortOrder
  }

  export type EmojiCharadesMaxOrderByAggregateInput = {
    id?: SortOrder
    questions?: SortOrder
    answer?: SortOrder
  }

  export type EmojiCharadesMinOrderByAggregateInput = {
    id?: SortOrder
    questions?: SortOrder
    answer?: SortOrder
  }

  export type ScoringSenderIdReceiverIdCompoundUniqueInput = {
    senderId: string
    receiverId: string
  }

  export type ScoringCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    senderAnswer?: SortOrder
    receiverAnswer?: SortOrder
    senderScore?: SortOrder
    receiverScore?: SortOrder
  }

  export type ScoringAvgOrderByAggregateInput = {
    senderScore?: SortOrder
    receiverScore?: SortOrder
  }

  export type ScoringMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    senderScore?: SortOrder
    receiverScore?: SortOrder
  }

  export type ScoringMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    senderScore?: SortOrder
    receiverScore?: SortOrder
  }

  export type ScoringSumOrderByAggregateInput = {
    senderScore?: SortOrder
    receiverScore?: SortOrder
  }

  export type GlobalChatsCountOrderByAggregateInput = {
    id?: SortOrder
    roomName?: SortOrder
    roomImage?: SortOrder
    memberLists?: SortOrder
  }

  export type GlobalChatsMaxOrderByAggregateInput = {
    id?: SortOrder
    roomName?: SortOrder
    roomImage?: SortOrder
  }

  export type GlobalChatsMinOrderByAggregateInput = {
    id?: SortOrder
    roomName?: SortOrder
    roomImage?: SortOrder
  }

  export type GlobalChatsScalarRelationFilter = {
    is?: GlobalChatsWhereInput
    isNot?: GlobalChatsWhereInput
  }

  export type GlobalChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type GlobalChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type GlobalChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type PrivateRoomCountOrderByAggregateInput = {
    id?: SortOrder
    createrId?: SortOrder
    roomName?: SortOrder
    inviteToken?: SortOrder
    roomImage?: SortOrder
    category?: SortOrder
    description?: SortOrder
    memberLists?: SortOrder
  }

  export type PrivateRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    createrId?: SortOrder
    roomName?: SortOrder
    inviteToken?: SortOrder
    roomImage?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type PrivateRoomMinOrderByAggregateInput = {
    id?: SortOrder
    createrId?: SortOrder
    roomName?: SortOrder
    inviteToken?: SortOrder
    roomImage?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type PrivateRoomScalarRelationFilter = {
    is?: PrivateRoomWhereInput
    isNot?: PrivateRoomWhereInput
  }

  export type PrivateRoomMessageCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type PrivateRoomMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type PrivateRoomMessageMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateimagesInput = {
    set: string[]
  }

  export type UserCreatepreferredMatchInput = {
    set: string[]
  }

  export type UserCreateprimaryNeurotypeInput = {
    set: string[]
  }

  export type UserCreateinterestInput = {
    set: string[]
  }

  export type UserCreatetopArtistsInput = {
    set: string[]
  }

  export type UserCreatefavoriteGenresInput = {
    set: string[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type GlobalChatMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<GlobalChatMessageCreateWithoutSenderInput, GlobalChatMessageUncheckedCreateWithoutSenderInput> | GlobalChatMessageCreateWithoutSenderInput[] | GlobalChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GlobalChatMessageCreateOrConnectWithoutSenderInput | GlobalChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: GlobalChatMessageCreateManySenderInputEnvelope
    connect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
  }

  export type PrivateRoomMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<PrivateRoomMessageCreateWithoutSenderInput, PrivateRoomMessageUncheckedCreateWithoutSenderInput> | PrivateRoomMessageCreateWithoutSenderInput[] | PrivateRoomMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateRoomMessageCreateOrConnectWithoutSenderInput | PrivateRoomMessageCreateOrConnectWithoutSenderInput[]
    createMany?: PrivateRoomMessageCreateManySenderInputEnvelope
    connect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type GlobalChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<GlobalChatMessageCreateWithoutSenderInput, GlobalChatMessageUncheckedCreateWithoutSenderInput> | GlobalChatMessageCreateWithoutSenderInput[] | GlobalChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GlobalChatMessageCreateOrConnectWithoutSenderInput | GlobalChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: GlobalChatMessageCreateManySenderInputEnvelope
    connect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
  }

  export type PrivateRoomMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<PrivateRoomMessageCreateWithoutSenderInput, PrivateRoomMessageUncheckedCreateWithoutSenderInput> | PrivateRoomMessageCreateWithoutSenderInput[] | PrivateRoomMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateRoomMessageCreateOrConnectWithoutSenderInput | PrivateRoomMessageCreateOrConnectWithoutSenderInput[]
    createMany?: PrivateRoomMessageCreateManySenderInputEnvelope
    connect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdatepreferredMatchInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateprimaryNeurotypeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateinterestInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatetopArtistsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatefavoriteGenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type GlobalChatMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GlobalChatMessageCreateWithoutSenderInput, GlobalChatMessageUncheckedCreateWithoutSenderInput> | GlobalChatMessageCreateWithoutSenderInput[] | GlobalChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GlobalChatMessageCreateOrConnectWithoutSenderInput | GlobalChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: GlobalChatMessageUpsertWithWhereUniqueWithoutSenderInput | GlobalChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GlobalChatMessageCreateManySenderInputEnvelope
    set?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    disconnect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    delete?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    connect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    update?: GlobalChatMessageUpdateWithWhereUniqueWithoutSenderInput | GlobalChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GlobalChatMessageUpdateManyWithWhereWithoutSenderInput | GlobalChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GlobalChatMessageScalarWhereInput | GlobalChatMessageScalarWhereInput[]
  }

  export type PrivateRoomMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PrivateRoomMessageCreateWithoutSenderInput, PrivateRoomMessageUncheckedCreateWithoutSenderInput> | PrivateRoomMessageCreateWithoutSenderInput[] | PrivateRoomMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateRoomMessageCreateOrConnectWithoutSenderInput | PrivateRoomMessageCreateOrConnectWithoutSenderInput[]
    upsert?: PrivateRoomMessageUpsertWithWhereUniqueWithoutSenderInput | PrivateRoomMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PrivateRoomMessageCreateManySenderInputEnvelope
    set?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    disconnect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    delete?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    connect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    update?: PrivateRoomMessageUpdateWithWhereUniqueWithoutSenderInput | PrivateRoomMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PrivateRoomMessageUpdateManyWithWhereWithoutSenderInput | PrivateRoomMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PrivateRoomMessageScalarWhereInput | PrivateRoomMessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type GlobalChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GlobalChatMessageCreateWithoutSenderInput, GlobalChatMessageUncheckedCreateWithoutSenderInput> | GlobalChatMessageCreateWithoutSenderInput[] | GlobalChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GlobalChatMessageCreateOrConnectWithoutSenderInput | GlobalChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: GlobalChatMessageUpsertWithWhereUniqueWithoutSenderInput | GlobalChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GlobalChatMessageCreateManySenderInputEnvelope
    set?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    disconnect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    delete?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    connect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    update?: GlobalChatMessageUpdateWithWhereUniqueWithoutSenderInput | GlobalChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GlobalChatMessageUpdateManyWithWhereWithoutSenderInput | GlobalChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GlobalChatMessageScalarWhereInput | GlobalChatMessageScalarWhereInput[]
  }

  export type PrivateRoomMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PrivateRoomMessageCreateWithoutSenderInput, PrivateRoomMessageUncheckedCreateWithoutSenderInput> | PrivateRoomMessageCreateWithoutSenderInput[] | PrivateRoomMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateRoomMessageCreateOrConnectWithoutSenderInput | PrivateRoomMessageCreateOrConnectWithoutSenderInput[]
    upsert?: PrivateRoomMessageUpsertWithWhereUniqueWithoutSenderInput | PrivateRoomMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PrivateRoomMessageCreateManySenderInputEnvelope
    set?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    disconnect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    delete?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    connect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    update?: PrivateRoomMessageUpdateWithWhereUniqueWithoutSenderInput | PrivateRoomMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PrivateRoomMessageUpdateManyWithWhereWithoutSenderInput | PrivateRoomMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PrivateRoomMessageScalarWhereInput | PrivateRoomMessageScalarWhereInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutRecvMessagesInput = {
    create?: XOR<UserCreateWithoutRecvMessagesInput, UserUncheckedCreateWithoutRecvMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecvMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecvMessagesNestedInput = {
    create?: XOR<UserCreateWithoutRecvMessagesInput, UserUncheckedCreateWithoutRecvMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecvMessagesInput
    upsert?: UserUpsertWithoutRecvMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecvMessagesInput, UserUpdateWithoutRecvMessagesInput>, UserUncheckedUpdateWithoutRecvMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type ScoringCreatesenderAnswerInput = {
    set: string[]
  }

  export type ScoringCreatereceiverAnswerInput = {
    set: string[]
  }

  export type ScoringUpdatesenderAnswerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ScoringUpdatereceiverAnswerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GlobalChatsCreatememberListsInput = {
    set: string[]
  }

  export type GlobalChatMessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<GlobalChatMessageCreateWithoutRoomInput, GlobalChatMessageUncheckedCreateWithoutRoomInput> | GlobalChatMessageCreateWithoutRoomInput[] | GlobalChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GlobalChatMessageCreateOrConnectWithoutRoomInput | GlobalChatMessageCreateOrConnectWithoutRoomInput[]
    createMany?: GlobalChatMessageCreateManyRoomInputEnvelope
    connect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
  }

  export type GlobalChatMessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<GlobalChatMessageCreateWithoutRoomInput, GlobalChatMessageUncheckedCreateWithoutRoomInput> | GlobalChatMessageCreateWithoutRoomInput[] | GlobalChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GlobalChatMessageCreateOrConnectWithoutRoomInput | GlobalChatMessageCreateOrConnectWithoutRoomInput[]
    createMany?: GlobalChatMessageCreateManyRoomInputEnvelope
    connect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
  }

  export type GlobalChatsUpdatememberListsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GlobalChatMessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<GlobalChatMessageCreateWithoutRoomInput, GlobalChatMessageUncheckedCreateWithoutRoomInput> | GlobalChatMessageCreateWithoutRoomInput[] | GlobalChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GlobalChatMessageCreateOrConnectWithoutRoomInput | GlobalChatMessageCreateOrConnectWithoutRoomInput[]
    upsert?: GlobalChatMessageUpsertWithWhereUniqueWithoutRoomInput | GlobalChatMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: GlobalChatMessageCreateManyRoomInputEnvelope
    set?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    disconnect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    delete?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    connect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    update?: GlobalChatMessageUpdateWithWhereUniqueWithoutRoomInput | GlobalChatMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: GlobalChatMessageUpdateManyWithWhereWithoutRoomInput | GlobalChatMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: GlobalChatMessageScalarWhereInput | GlobalChatMessageScalarWhereInput[]
  }

  export type GlobalChatMessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<GlobalChatMessageCreateWithoutRoomInput, GlobalChatMessageUncheckedCreateWithoutRoomInput> | GlobalChatMessageCreateWithoutRoomInput[] | GlobalChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GlobalChatMessageCreateOrConnectWithoutRoomInput | GlobalChatMessageCreateOrConnectWithoutRoomInput[]
    upsert?: GlobalChatMessageUpsertWithWhereUniqueWithoutRoomInput | GlobalChatMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: GlobalChatMessageCreateManyRoomInputEnvelope
    set?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    disconnect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    delete?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    connect?: GlobalChatMessageWhereUniqueInput | GlobalChatMessageWhereUniqueInput[]
    update?: GlobalChatMessageUpdateWithWhereUniqueWithoutRoomInput | GlobalChatMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: GlobalChatMessageUpdateManyWithWhereWithoutRoomInput | GlobalChatMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: GlobalChatMessageScalarWhereInput | GlobalChatMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGlobalMessagesInput = {
    create?: XOR<UserCreateWithoutGlobalMessagesInput, UserUncheckedCreateWithoutGlobalMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGlobalMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type GlobalChatsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<GlobalChatsCreateWithoutMessagesInput, GlobalChatsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GlobalChatsCreateOrConnectWithoutMessagesInput
    connect?: GlobalChatsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGlobalMessagesNestedInput = {
    create?: XOR<UserCreateWithoutGlobalMessagesInput, UserUncheckedCreateWithoutGlobalMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGlobalMessagesInput
    upsert?: UserUpsertWithoutGlobalMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGlobalMessagesInput, UserUpdateWithoutGlobalMessagesInput>, UserUncheckedUpdateWithoutGlobalMessagesInput>
  }

  export type GlobalChatsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<GlobalChatsCreateWithoutMessagesInput, GlobalChatsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GlobalChatsCreateOrConnectWithoutMessagesInput
    upsert?: GlobalChatsUpsertWithoutMessagesInput
    connect?: GlobalChatsWhereUniqueInput
    update?: XOR<XOR<GlobalChatsUpdateToOneWithWhereWithoutMessagesInput, GlobalChatsUpdateWithoutMessagesInput>, GlobalChatsUncheckedUpdateWithoutMessagesInput>
  }

  export type PrivateRoomCreatememberListsInput = {
    set: string[]
  }

  export type PrivateRoomMessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<PrivateRoomMessageCreateWithoutRoomInput, PrivateRoomMessageUncheckedCreateWithoutRoomInput> | PrivateRoomMessageCreateWithoutRoomInput[] | PrivateRoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PrivateRoomMessageCreateOrConnectWithoutRoomInput | PrivateRoomMessageCreateOrConnectWithoutRoomInput[]
    createMany?: PrivateRoomMessageCreateManyRoomInputEnvelope
    connect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
  }

  export type PrivateRoomMessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<PrivateRoomMessageCreateWithoutRoomInput, PrivateRoomMessageUncheckedCreateWithoutRoomInput> | PrivateRoomMessageCreateWithoutRoomInput[] | PrivateRoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PrivateRoomMessageCreateOrConnectWithoutRoomInput | PrivateRoomMessageCreateOrConnectWithoutRoomInput[]
    createMany?: PrivateRoomMessageCreateManyRoomInputEnvelope
    connect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
  }

  export type PrivateRoomUpdatememberListsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PrivateRoomMessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PrivateRoomMessageCreateWithoutRoomInput, PrivateRoomMessageUncheckedCreateWithoutRoomInput> | PrivateRoomMessageCreateWithoutRoomInput[] | PrivateRoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PrivateRoomMessageCreateOrConnectWithoutRoomInput | PrivateRoomMessageCreateOrConnectWithoutRoomInput[]
    upsert?: PrivateRoomMessageUpsertWithWhereUniqueWithoutRoomInput | PrivateRoomMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PrivateRoomMessageCreateManyRoomInputEnvelope
    set?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    disconnect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    delete?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    connect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    update?: PrivateRoomMessageUpdateWithWhereUniqueWithoutRoomInput | PrivateRoomMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PrivateRoomMessageUpdateManyWithWhereWithoutRoomInput | PrivateRoomMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PrivateRoomMessageScalarWhereInput | PrivateRoomMessageScalarWhereInput[]
  }

  export type PrivateRoomMessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PrivateRoomMessageCreateWithoutRoomInput, PrivateRoomMessageUncheckedCreateWithoutRoomInput> | PrivateRoomMessageCreateWithoutRoomInput[] | PrivateRoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PrivateRoomMessageCreateOrConnectWithoutRoomInput | PrivateRoomMessageCreateOrConnectWithoutRoomInput[]
    upsert?: PrivateRoomMessageUpsertWithWhereUniqueWithoutRoomInput | PrivateRoomMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PrivateRoomMessageCreateManyRoomInputEnvelope
    set?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    disconnect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    delete?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    connect?: PrivateRoomMessageWhereUniqueInput | PrivateRoomMessageWhereUniqueInput[]
    update?: PrivateRoomMessageUpdateWithWhereUniqueWithoutRoomInput | PrivateRoomMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PrivateRoomMessageUpdateManyWithWhereWithoutRoomInput | PrivateRoomMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PrivateRoomMessageScalarWhereInput | PrivateRoomMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPrivateRoomMessagesInput = {
    create?: XOR<UserCreateWithoutPrivateRoomMessagesInput, UserUncheckedCreateWithoutPrivateRoomMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateRoomMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type PrivateRoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<PrivateRoomCreateWithoutMessagesInput, PrivateRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: PrivateRoomCreateOrConnectWithoutMessagesInput
    connect?: PrivateRoomWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPrivateRoomMessagesNestedInput = {
    create?: XOR<UserCreateWithoutPrivateRoomMessagesInput, UserUncheckedCreateWithoutPrivateRoomMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateRoomMessagesInput
    upsert?: UserUpsertWithoutPrivateRoomMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrivateRoomMessagesInput, UserUpdateWithoutPrivateRoomMessagesInput>, UserUncheckedUpdateWithoutPrivateRoomMessagesInput>
  }

  export type PrivateRoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<PrivateRoomCreateWithoutMessagesInput, PrivateRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: PrivateRoomCreateOrConnectWithoutMessagesInput
    upsert?: PrivateRoomUpsertWithoutMessagesInput
    connect?: PrivateRoomWhereUniqueInput
    update?: XOR<XOR<PrivateRoomUpdateToOneWithWhereWithoutMessagesInput, PrivateRoomUpdateWithoutMessagesInput>, PrivateRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    text: string
    createdAt?: Date | string
    seen?: boolean
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    text: string
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    text: string
    createdAt?: Date | string
    seen?: boolean
    receiver: UserCreateNestedOneWithoutRecvMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    text: string
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type GlobalChatMessageCreateWithoutSenderInput = {
    id?: string
    text: string
    createdAt?: Date | string
    room: GlobalChatsCreateNestedOneWithoutMessagesInput
  }

  export type GlobalChatMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    roomId: string
    text: string
    createdAt?: Date | string
  }

  export type GlobalChatMessageCreateOrConnectWithoutSenderInput = {
    where: GlobalChatMessageWhereUniqueInput
    create: XOR<GlobalChatMessageCreateWithoutSenderInput, GlobalChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type GlobalChatMessageCreateManySenderInputEnvelope = {
    data: GlobalChatMessageCreateManySenderInput | GlobalChatMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PrivateRoomMessageCreateWithoutSenderInput = {
    id?: string
    text: string
    createdAt?: Date | string
    room: PrivateRoomCreateNestedOneWithoutMessagesInput
  }

  export type PrivateRoomMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    roomId: string
    text: string
    createdAt?: Date | string
  }

  export type PrivateRoomMessageCreateOrConnectWithoutSenderInput = {
    where: PrivateRoomMessageWhereUniqueInput
    create: XOR<PrivateRoomMessageCreateWithoutSenderInput, PrivateRoomMessageUncheckedCreateWithoutSenderInput>
  }

  export type PrivateRoomMessageCreateManySenderInputEnvelope = {
    data: PrivateRoomMessageCreateManySenderInput | PrivateRoomMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    seen?: BoolFilter<"Message"> | boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type GlobalChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: GlobalChatMessageWhereUniqueInput
    update: XOR<GlobalChatMessageUpdateWithoutSenderInput, GlobalChatMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<GlobalChatMessageCreateWithoutSenderInput, GlobalChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type GlobalChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: GlobalChatMessageWhereUniqueInput
    data: XOR<GlobalChatMessageUpdateWithoutSenderInput, GlobalChatMessageUncheckedUpdateWithoutSenderInput>
  }

  export type GlobalChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: GlobalChatMessageScalarWhereInput
    data: XOR<GlobalChatMessageUpdateManyMutationInput, GlobalChatMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type GlobalChatMessageScalarWhereInput = {
    AND?: GlobalChatMessageScalarWhereInput | GlobalChatMessageScalarWhereInput[]
    OR?: GlobalChatMessageScalarWhereInput[]
    NOT?: GlobalChatMessageScalarWhereInput | GlobalChatMessageScalarWhereInput[]
    id?: StringFilter<"GlobalChatMessage"> | string
    roomId?: StringFilter<"GlobalChatMessage"> | string
    senderId?: StringFilter<"GlobalChatMessage"> | string
    text?: StringFilter<"GlobalChatMessage"> | string
    createdAt?: DateTimeFilter<"GlobalChatMessage"> | Date | string
  }

  export type PrivateRoomMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: PrivateRoomMessageWhereUniqueInput
    update: XOR<PrivateRoomMessageUpdateWithoutSenderInput, PrivateRoomMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<PrivateRoomMessageCreateWithoutSenderInput, PrivateRoomMessageUncheckedCreateWithoutSenderInput>
  }

  export type PrivateRoomMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: PrivateRoomMessageWhereUniqueInput
    data: XOR<PrivateRoomMessageUpdateWithoutSenderInput, PrivateRoomMessageUncheckedUpdateWithoutSenderInput>
  }

  export type PrivateRoomMessageUpdateManyWithWhereWithoutSenderInput = {
    where: PrivateRoomMessageScalarWhereInput
    data: XOR<PrivateRoomMessageUpdateManyMutationInput, PrivateRoomMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type PrivateRoomMessageScalarWhereInput = {
    AND?: PrivateRoomMessageScalarWhereInput | PrivateRoomMessageScalarWhereInput[]
    OR?: PrivateRoomMessageScalarWhereInput[]
    NOT?: PrivateRoomMessageScalarWhereInput | PrivateRoomMessageScalarWhereInput[]
    id?: StringFilter<"PrivateRoomMessage"> | string
    roomId?: StringFilter<"PrivateRoomMessage"> | string
    senderId?: StringFilter<"PrivateRoomMessage"> | string
    text?: StringFilter<"PrivateRoomMessage"> | string
    createdAt?: DateTimeFilter<"PrivateRoomMessage"> | Date | string
  }

  export type UserCreateWithoutRecvMessagesInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    globalMessages?: GlobalChatMessageCreateNestedManyWithoutSenderInput
    privateRoomMessages?: PrivateRoomMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutRecvMessagesInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    globalMessages?: GlobalChatMessageUncheckedCreateNestedManyWithoutSenderInput
    privateRoomMessages?: PrivateRoomMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutRecvMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecvMessagesInput, UserUncheckedCreateWithoutRecvMessagesInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recvMessages?: MessageCreateNestedManyWithoutReceiverInput
    globalMessages?: GlobalChatMessageCreateNestedManyWithoutSenderInput
    privateRoomMessages?: PrivateRoomMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recvMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    globalMessages?: GlobalChatMessageUncheckedCreateNestedManyWithoutSenderInput
    privateRoomMessages?: PrivateRoomMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserUpsertWithoutRecvMessagesInput = {
    update: XOR<UserUpdateWithoutRecvMessagesInput, UserUncheckedUpdateWithoutRecvMessagesInput>
    create: XOR<UserCreateWithoutRecvMessagesInput, UserUncheckedCreateWithoutRecvMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecvMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecvMessagesInput, UserUncheckedUpdateWithoutRecvMessagesInput>
  }

  export type UserUpdateWithoutRecvMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    globalMessages?: GlobalChatMessageUpdateManyWithoutSenderNestedInput
    privateRoomMessages?: PrivateRoomMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutRecvMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    globalMessages?: GlobalChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    privateRoomMessages?: PrivateRoomMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recvMessages?: MessageUpdateManyWithoutReceiverNestedInput
    globalMessages?: GlobalChatMessageUpdateManyWithoutSenderNestedInput
    privateRoomMessages?: PrivateRoomMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recvMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    globalMessages?: GlobalChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    privateRoomMessages?: PrivateRoomMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type GlobalChatMessageCreateWithoutRoomInput = {
    id?: string
    text: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutGlobalMessagesInput
  }

  export type GlobalChatMessageUncheckedCreateWithoutRoomInput = {
    id?: string
    senderId: string
    text: string
    createdAt?: Date | string
  }

  export type GlobalChatMessageCreateOrConnectWithoutRoomInput = {
    where: GlobalChatMessageWhereUniqueInput
    create: XOR<GlobalChatMessageCreateWithoutRoomInput, GlobalChatMessageUncheckedCreateWithoutRoomInput>
  }

  export type GlobalChatMessageCreateManyRoomInputEnvelope = {
    data: GlobalChatMessageCreateManyRoomInput | GlobalChatMessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type GlobalChatMessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: GlobalChatMessageWhereUniqueInput
    update: XOR<GlobalChatMessageUpdateWithoutRoomInput, GlobalChatMessageUncheckedUpdateWithoutRoomInput>
    create: XOR<GlobalChatMessageCreateWithoutRoomInput, GlobalChatMessageUncheckedCreateWithoutRoomInput>
  }

  export type GlobalChatMessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: GlobalChatMessageWhereUniqueInput
    data: XOR<GlobalChatMessageUpdateWithoutRoomInput, GlobalChatMessageUncheckedUpdateWithoutRoomInput>
  }

  export type GlobalChatMessageUpdateManyWithWhereWithoutRoomInput = {
    where: GlobalChatMessageScalarWhereInput
    data: XOR<GlobalChatMessageUpdateManyMutationInput, GlobalChatMessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserCreateWithoutGlobalMessagesInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recvMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    privateRoomMessages?: PrivateRoomMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutGlobalMessagesInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recvMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    privateRoomMessages?: PrivateRoomMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutGlobalMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGlobalMessagesInput, UserUncheckedCreateWithoutGlobalMessagesInput>
  }

  export type GlobalChatsCreateWithoutMessagesInput = {
    id?: string
    roomName: string
    roomImage?: string | null
    memberLists?: GlobalChatsCreatememberListsInput | string[]
  }

  export type GlobalChatsUncheckedCreateWithoutMessagesInput = {
    id?: string
    roomName: string
    roomImage?: string | null
    memberLists?: GlobalChatsCreatememberListsInput | string[]
  }

  export type GlobalChatsCreateOrConnectWithoutMessagesInput = {
    where: GlobalChatsWhereUniqueInput
    create: XOR<GlobalChatsCreateWithoutMessagesInput, GlobalChatsUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutGlobalMessagesInput = {
    update: XOR<UserUpdateWithoutGlobalMessagesInput, UserUncheckedUpdateWithoutGlobalMessagesInput>
    create: XOR<UserCreateWithoutGlobalMessagesInput, UserUncheckedCreateWithoutGlobalMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGlobalMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGlobalMessagesInput, UserUncheckedUpdateWithoutGlobalMessagesInput>
  }

  export type UserUpdateWithoutGlobalMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recvMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    privateRoomMessages?: PrivateRoomMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutGlobalMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recvMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    privateRoomMessages?: PrivateRoomMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type GlobalChatsUpsertWithoutMessagesInput = {
    update: XOR<GlobalChatsUpdateWithoutMessagesInput, GlobalChatsUncheckedUpdateWithoutMessagesInput>
    create: XOR<GlobalChatsCreateWithoutMessagesInput, GlobalChatsUncheckedCreateWithoutMessagesInput>
    where?: GlobalChatsWhereInput
  }

  export type GlobalChatsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: GlobalChatsWhereInput
    data: XOR<GlobalChatsUpdateWithoutMessagesInput, GlobalChatsUncheckedUpdateWithoutMessagesInput>
  }

  export type GlobalChatsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: GlobalChatsUpdatememberListsInput | string[]
  }

  export type GlobalChatsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: GlobalChatsUpdatememberListsInput | string[]
  }

  export type PrivateRoomMessageCreateWithoutRoomInput = {
    id?: string
    text: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutPrivateRoomMessagesInput
  }

  export type PrivateRoomMessageUncheckedCreateWithoutRoomInput = {
    id?: string
    senderId: string
    text: string
    createdAt?: Date | string
  }

  export type PrivateRoomMessageCreateOrConnectWithoutRoomInput = {
    where: PrivateRoomMessageWhereUniqueInput
    create: XOR<PrivateRoomMessageCreateWithoutRoomInput, PrivateRoomMessageUncheckedCreateWithoutRoomInput>
  }

  export type PrivateRoomMessageCreateManyRoomInputEnvelope = {
    data: PrivateRoomMessageCreateManyRoomInput | PrivateRoomMessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PrivateRoomMessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: PrivateRoomMessageWhereUniqueInput
    update: XOR<PrivateRoomMessageUpdateWithoutRoomInput, PrivateRoomMessageUncheckedUpdateWithoutRoomInput>
    create: XOR<PrivateRoomMessageCreateWithoutRoomInput, PrivateRoomMessageUncheckedCreateWithoutRoomInput>
  }

  export type PrivateRoomMessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: PrivateRoomMessageWhereUniqueInput
    data: XOR<PrivateRoomMessageUpdateWithoutRoomInput, PrivateRoomMessageUncheckedUpdateWithoutRoomInput>
  }

  export type PrivateRoomMessageUpdateManyWithWhereWithoutRoomInput = {
    where: PrivateRoomMessageScalarWhereInput
    data: XOR<PrivateRoomMessageUpdateManyMutationInput, PrivateRoomMessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserCreateWithoutPrivateRoomMessagesInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recvMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    globalMessages?: GlobalChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutPrivateRoomMessagesInput = {
    id?: string
    fullName: string
    email: string
    password?: string | null
    googleId?: string | null
    mobileNumber?: string | null
    bio?: string | null
    avatar?: string | null
    avatar2?: string | null
    images?: UserCreateimagesInput | string[]
    birthday?: Date | string | null
    gender?: string | null
    horoscope?: string | null
    mood?: string | null
    purpose?: string | null
    prefferGender?: string | null
    intentions?: string | null
    experienceLevel?: string | null
    preferredMatch?: UserCreatepreferredMatchInput | string[]
    primaryNeurotype?: UserCreateprimaryNeurotypeInput | string[]
    status?: string | null
    attachmentStyle?: string | null
    beliefSystem?: string | null
    mbtiType?: string | null
    interest?: UserCreateinterestInput | string[]
    topArtists?: UserCreatetopArtistsInput | string[]
    favoriteGenres?: UserCreatefavoriteGenresInput | string[]
    uiTheme?: string | null
    instagram?: string | null
    facebook?: string | null
    isOnline?: boolean
    lastSeen?: Date | string | null
    profileCompleted?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recvMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    globalMessages?: GlobalChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutPrivateRoomMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrivateRoomMessagesInput, UserUncheckedCreateWithoutPrivateRoomMessagesInput>
  }

  export type PrivateRoomCreateWithoutMessagesInput = {
    id?: string
    createrId: string
    roomName: string
    inviteToken: string
    roomImage?: string | null
    category?: string | null
    description?: string | null
    memberLists?: PrivateRoomCreatememberListsInput | string[]
  }

  export type PrivateRoomUncheckedCreateWithoutMessagesInput = {
    id?: string
    createrId: string
    roomName: string
    inviteToken: string
    roomImage?: string | null
    category?: string | null
    description?: string | null
    memberLists?: PrivateRoomCreatememberListsInput | string[]
  }

  export type PrivateRoomCreateOrConnectWithoutMessagesInput = {
    where: PrivateRoomWhereUniqueInput
    create: XOR<PrivateRoomCreateWithoutMessagesInput, PrivateRoomUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutPrivateRoomMessagesInput = {
    update: XOR<UserUpdateWithoutPrivateRoomMessagesInput, UserUncheckedUpdateWithoutPrivateRoomMessagesInput>
    create: XOR<UserCreateWithoutPrivateRoomMessagesInput, UserUncheckedCreateWithoutPrivateRoomMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrivateRoomMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrivateRoomMessagesInput, UserUncheckedUpdateWithoutPrivateRoomMessagesInput>
  }

  export type UserUpdateWithoutPrivateRoomMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recvMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    globalMessages?: GlobalChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutPrivateRoomMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    avatar2?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UserUpdateimagesInput | string[]
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    horoscope?: NullableStringFieldUpdateOperationsInput | string | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    prefferGender?: NullableStringFieldUpdateOperationsInput | string | null
    intentions?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMatch?: UserUpdatepreferredMatchInput | string[]
    primaryNeurotype?: UserUpdateprimaryNeurotypeInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentStyle?: NullableStringFieldUpdateOperationsInput | string | null
    beliefSystem?: NullableStringFieldUpdateOperationsInput | string | null
    mbtiType?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: UserUpdateinterestInput | string[]
    topArtists?: UserUpdatetopArtistsInput | string[]
    favoriteGenres?: UserUpdatefavoriteGenresInput | string[]
    uiTheme?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recvMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    globalMessages?: GlobalChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type PrivateRoomUpsertWithoutMessagesInput = {
    update: XOR<PrivateRoomUpdateWithoutMessagesInput, PrivateRoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<PrivateRoomCreateWithoutMessagesInput, PrivateRoomUncheckedCreateWithoutMessagesInput>
    where?: PrivateRoomWhereInput
  }

  export type PrivateRoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: PrivateRoomWhereInput
    data: XOR<PrivateRoomUpdateWithoutMessagesInput, PrivateRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type PrivateRoomUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    inviteToken?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: PrivateRoomUpdatememberListsInput | string[]
  }

  export type PrivateRoomUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createrId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    inviteToken?: StringFieldUpdateOperationsInput | string
    roomImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberLists?: PrivateRoomUpdatememberListsInput | string[]
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    senderId: string
    text: string
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageCreateManySenderInput = {
    id?: string
    receiverId: string
    text: string
    createdAt?: Date | string
    seen?: boolean
  }

  export type GlobalChatMessageCreateManySenderInput = {
    id?: string
    roomId: string
    text: string
    createdAt?: Date | string
  }

  export type PrivateRoomMessageCreateManySenderInput = {
    id?: string
    roomId: string
    text: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    receiver?: UserUpdateOneRequiredWithoutRecvMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalChatMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: GlobalChatsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type GlobalChatMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalChatMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateRoomMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: PrivateRoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type PrivateRoomMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateRoomMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalChatMessageCreateManyRoomInput = {
    id?: string
    senderId: string
    text: string
    createdAt?: Date | string
  }

  export type GlobalChatMessageUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutGlobalMessagesNestedInput
  }

  export type GlobalChatMessageUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalChatMessageUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateRoomMessageCreateManyRoomInput = {
    id?: string
    senderId: string
    text: string
    createdAt?: Date | string
  }

  export type PrivateRoomMessageUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutPrivateRoomMessagesNestedInput
  }

  export type PrivateRoomMessageUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateRoomMessageUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}