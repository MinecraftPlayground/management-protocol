import type { NotificationObject } from './notification_object.ts';
import type { ResponseObject } from './response_object.ts';


/**
 * Checks if the given data is a notification object.
 * 
 * @param data Data to check
 * 
 * @returns `true` if the data is a notification object, `false` otherwise
 */
export function isNotificationObject(data : ResponseObject | NotificationObject) : boolean {
  return !('id' in data) || data.id === undefined
}
