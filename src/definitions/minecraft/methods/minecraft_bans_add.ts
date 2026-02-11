import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Add players to ban list
 */
export type MinecraftBansAdd = MethodObjectDefinition<
  'minecraft:bans/add',
  [{ add : UserBanObject[] }],
  { banlist? : UserBanObject[] }
>
