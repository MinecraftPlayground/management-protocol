import type { ServerStateObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Server status heartbeat
 */
export type MinecraftNotificationServerStatus = MethodObject<
  'minecraft:notification/server/status',
  [{ status : ServerStateObject }]
>
