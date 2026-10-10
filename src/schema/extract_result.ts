import type { MethodObjectDefinition } from './method_object_definition.ts';


/**
 * Extract the result type from a method or notification by its name.
 * 
 * This utility type searches through a union of Definition types and extracts
 * the result property of the matching method/notification.
 * 
 * @template Definitions Union of all method/notification objects to extract from
 * @template Name Name of the method/notification to extract the result type from
 * 
 * @example
 * ```ts
 * import type { minecraft } from '@minecraft-server/management-protocol/definitions';
 * import type { ExtractResult } from '@minecraft-server/management-protocol/schema';
 * 
 * // Reusable alias that resolves the result type by method name
 * type ResultOf<Name extends minecraft.methods.All['name']> =
 *   ExtractResult<minecraft.methods.All, Name>;
 * 
 * type Players = ResultOf<'minecraft:players'>;
 * // PlayerObject[]
 * 
 * // Usage in a Promise return type
 * type PendingPlayers = Promise<ResultOf<'minecraft:players'>>;
 * ```
 */
export type ExtractResult<
  Definitions extends MethodObjectDefinition,
  Name extends string
> = Extract<Definitions, { name : Name }>['result'];
