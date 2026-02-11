import type { PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Get the allowlist
 */
export type MinecraftAllowlist = MethodObject<
  'minecraft:allowlist',
  never[],
  { allowlist? : PlayerObject[] }
>
