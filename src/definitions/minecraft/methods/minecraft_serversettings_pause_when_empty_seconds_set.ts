import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the number of seconds before the game is automatically paused when no players are online.
 */
export type MinecraftServersettingsPauseWhenEmptySecondsSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/pause_when_empty_seconds/set',
  params : [seconds: number],
  result : number
}>
