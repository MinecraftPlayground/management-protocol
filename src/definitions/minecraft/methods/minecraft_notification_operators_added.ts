import type { OperatorObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Player was oped
 */
export type MinecraftNotificationOperatorsAdded = NotificationObjectDefinition<
  'minecraft:notification/operators/added',
  [{ player : OperatorObject }]
>
