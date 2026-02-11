import type { GameType } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Get the server's default game mode
 */
export type MinecraftServersettingsGameMode = MethodObject<
  'minecraft:serversettings/game_mode',
  never[],
  { mode? : GameType }
>
