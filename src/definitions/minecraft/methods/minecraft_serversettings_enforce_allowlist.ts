import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether allowlist enforcement is enabled (kicks players immediately when removed from allowlist).
 */
export type MinecraftServersettingsEnforceAllowlist = MethodObjectDefinition<{
  name : 'minecraft:serversettings/enforce_allowlist',
  params : [],
  result : boolean
}>
