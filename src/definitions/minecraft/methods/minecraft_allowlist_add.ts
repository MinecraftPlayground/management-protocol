import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Add players to allowlist
 */
export type MinecraftAllowlistAdd = MethodObjectDefinition<
  'minecraft:allowlist/add',
  [{ add : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
