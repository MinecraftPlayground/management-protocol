import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get whether allowlist enforcement is enabled (kicks players immediately when removed from allowlist)
 */
export type MinecraftServersettingsEnforceAllowlist = MethodObjectDefinition<
  'minecraft:serversettings/enforce_allowlist',
  never[],
  { enforced? : boolean }
>
