import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get all connected players
 */
export type MinecraftPlayers = MethodObjectDefinition<
  'minecraft:players',
  never[],
  { players? : PlayerObject[] }
>
