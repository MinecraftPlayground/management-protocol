import type { GameType } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Set the server's default game mode
 */
export type MinecraftServersettingsGameModeSet = MethodObject<
  'minecraft:serversettings/game_mode/set',
  [{ mode : GameType }],
  { mode? : GameType }
>
