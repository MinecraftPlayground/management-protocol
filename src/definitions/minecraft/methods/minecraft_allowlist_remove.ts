import type { PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Remove players from allowlist
 */
export type MinecraftAllowlistRemove = MethodObject<
  'minecraft:allowlist/remove',
  [{ remove : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
