import type { minecraft } from './schema/methods/index.ts';


export interface RequestObject {
  jsonrpc : '2.0',
  // deno-lint-ignore ban-types
  method : minecraft.MethodNames | (string & {}),
  params? : unknown,
  id : string | number | null
}
