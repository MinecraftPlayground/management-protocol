import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Set the banlist
 */
export type MinecraftBansSet = MethodObjectDefinition<
  'minecraft:bans/set',
  [{ bans : UserBanObject[] }],
  { banlist? : UserBanObject[] }
>
