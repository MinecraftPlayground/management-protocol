import type { MethodOrNotificationObjectDefinition } from '../../schema/index.ts';
import type { All as AllNotifications } from './notifications.ts';
import type { All as AllMethods } from './methods.ts';


/**
 * Extend the default Minecraft definitions with a custom definition.
 * 
 * @template CustomDefinition Definition to extend the default Minecraft definitions with
 */
export type Extend<CustomDefinition extends MethodOrNotificationObjectDefinition> = 
  | AllNotifications
  | AllMethods
  | CustomDefinition
