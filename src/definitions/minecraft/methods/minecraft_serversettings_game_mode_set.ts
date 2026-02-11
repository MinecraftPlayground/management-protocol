import type { GameType } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Set the server's default game mode
 */
export type MinecraftServersettingsGameModeSet = MethodObjectDefinition<
  'minecraft:serversettings/game_mode/set',
  [{ mode : GameType }],
  { mode? : GameType }
>
