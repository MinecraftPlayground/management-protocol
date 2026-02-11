import type { PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Set the allowlist
 */
export type MinecraftAllowlistSet = MethodObject<
  'minecraft:allowlist/set',
  [{ players : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
