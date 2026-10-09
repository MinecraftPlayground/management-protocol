import type { SystemMessageObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Send a system message.
 */
export type MinecraftServerSystemMessage = MethodObjectDefinition<{
  name : 'minecraft:server/system_message',
  params : [message: SystemMessageObject],
  result : boolean
}>
