import type { PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Add players to allowlist
 */
export type MinecraftAllowlistAdd = MethodObject<
  'minecraft:allowlist/add',
  [{ add : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
