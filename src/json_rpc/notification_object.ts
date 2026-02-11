import type { minecraft } from './schema/methods/index.ts';

export interface NotificationObject {
  jsonrpc : '2.0',
  // deno-lint-ignore ban-types
  method : minecraft.MethodNames | (string & {}),
  params? : unknown
  id? : never
}
