import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Set the maximum number of players allowed to connect to the server
 */
export type MinecraftServersettingsMaxPlayersSet = MethodObjectDefinition<
  'minecraft:serversettings/max_players/set',
  [{ max : number }],
  { max? : number }
>
