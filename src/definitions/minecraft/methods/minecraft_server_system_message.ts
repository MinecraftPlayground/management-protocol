import type { SystemMessageObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Send a system message
 */
export type MinecraftServerSystemMessage = MethodObject<
  'minecraft:server/system_message',
  [{ message : SystemMessageObject }],
  { sent? : boolean }
>
