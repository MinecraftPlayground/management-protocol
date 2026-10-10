import type { GameType } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the server's default game mode.
 */
export type MinecraftServersettingsGameMode = MethodObjectDefinition<{
  name : 'minecraft:serversettings/game_mode',
  params : [],
  result : GameType
}>
