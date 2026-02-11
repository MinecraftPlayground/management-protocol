import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Set the allowlist
 */
export type MinecraftAllowlistSet = MethodObjectDefinition<
  'minecraft:allowlist/set',
  [{ players : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
