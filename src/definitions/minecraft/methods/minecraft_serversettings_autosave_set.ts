import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Enable or disable automatic world saving on the server.
 */
export type MinecraftServersettingsAutosaveSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/autosave/set',
  params : [enable: boolean],
  result : boolean
}>
