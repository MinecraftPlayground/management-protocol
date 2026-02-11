import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get whether the allowlist is enabled on the server
 */
export type MinecraftServersettingsUseAllowlist = MethodObjectDefinition<
  'minecraft:serversettings/use_allowlist',
  never[],
  { used? : boolean }
>
