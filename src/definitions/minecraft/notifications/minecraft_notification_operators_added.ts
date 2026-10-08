import type { OperatorObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Player was oped
 */
export type MinecraftNotificationOperatorsAdded = NotificationObjectDefinition<{
  name : 'minecraft:notification/operators/added',
  params : [player: OperatorObject]
}>
