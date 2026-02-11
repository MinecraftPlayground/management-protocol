import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Set the number of seconds before the game is automatically paused when no players are online
 */
export type MinecraftServersettingsPauseWhenEmptySecondsSet = MethodObjectDefinition<
  'minecraft:serversettings/pause_when_empty_seconds/set',
  [{ seconds : number }],
  { seconds? : number }
>
