/**
 * An interface representing an object with an identifier.
 *
 * @template T - The type of the identifier, default is string.
 * @property {T} id - The unique identifier for the object.
 */
export interface Idable<T = string> {
  id: T
}
