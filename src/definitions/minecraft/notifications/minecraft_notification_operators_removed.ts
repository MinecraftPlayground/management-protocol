import type { OperatorObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Player was deoped
 */
export type MinecraftNotificationOperatorsRemoved = NotificationObjectDefinition<{
  name : 'minecraft:notification/operators/removed',
  params : [player: OperatorObject]
}>
