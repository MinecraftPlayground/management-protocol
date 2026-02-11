import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Clear all players in allowlist
 */
export type MinecraftAllowlistClear = MethodObjectDefinition<
  'minecraft:allowlist/clear',
  never[],
  { allowlist? : PlayerObject[] }
>
