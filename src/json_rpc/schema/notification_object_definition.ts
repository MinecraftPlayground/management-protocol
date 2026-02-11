import type { MethodObjectDefinition } from './method_object.ts';


export interface NotificationObjectDefinition<
  Name extends string = string,
  Params extends unknown[] = unknown[],
  Result = unknown
> extends MethodObjectDefinition<Name, Params, Result> {
  notification : true
}
