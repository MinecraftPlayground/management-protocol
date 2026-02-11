import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get the ban list
 */
export type MinecraftBans = MethodObjectDefinition<
  'minecraft:bans',
  never[],
  { banlist? : UserBanObject[] }
>
