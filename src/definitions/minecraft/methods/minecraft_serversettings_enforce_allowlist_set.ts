import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Enable or disable allowlist enforcement (when enabled, players are kicked immediately upon removal from allowlist).
 */
export type MinecraftServersettingsEnforceAllowlistSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/enforce_allowlist/set',
  params : [enforce: boolean],
  result : boolean
}>
