import type { ServerStateObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Get server status
 */
export type MinecraftServerStatus = MethodObject<
  'minecraft:server/status',
  never[],
  { status? : ServerStateObject }
>
