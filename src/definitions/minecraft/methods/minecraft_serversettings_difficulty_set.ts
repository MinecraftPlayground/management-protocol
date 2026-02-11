import type { Difficulty } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Set the difficulty level of the server
 */
export type MinecraftServersettingsDifficultySet = MethodObject<
  'minecraft:serversettings/difficulty/set',
  [{ difficulty : Difficulty }],
  { difficulty? : Difficulty }
>
