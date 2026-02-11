import type { Difficulty } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Set the difficulty level of the server
 */
export type MinecraftServersettingsDifficultySet = MethodObjectDefinition<
  'minecraft:serversettings/difficulty/set',
  [{ difficulty : Difficulty }],
  { difficulty? : Difficulty }
>
