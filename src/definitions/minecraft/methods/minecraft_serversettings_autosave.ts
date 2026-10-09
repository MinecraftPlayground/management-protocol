import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether automatic world saving is enabled on the server.
 */
export type MinecraftServersettingsAutosave = MethodObjectDefinition<{
  name : 'minecraft:serversettings/autosave',
  params : [],
  result : boolean
}>
