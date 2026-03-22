import { Client } from '@minecraft-server/management-protocol';
import type { NotificationObjectDefinition } from "@minecraft-server/management-protocol/schema";
import type { minecraft } from "@minecraft-server/management-protocol/definitions";


type ConsoleNotification = NotificationObjectDefinition<
  'console:notification/log_event',
  [{
    timestamp: string,
    level: string,
    thread: string,
    logger: string,
    message: string
  }]
>;

const client = new Client<minecraft.Extend<ConsoleNotification>>('ws://localhost:25576', {
  token: 'V7ieoKGqhbUFv7S6QiCVjM515VpZlbZFZM6krgUX'
});

// client.addNotificationListener('console:notification/log_event', async (data) => {
//   console.log('Received log event:', data);
//   await client.call('minecraft:server/system_message', {message: {literal: data.message}, overlay: false})
// });

// await client.call('minecraft:server/system_message', {message: {literal: 'Hello!'}, overlay: false})

client.addNotificationListener('minecraft:notification/players/joined', (data) => {
  console.log('Player joined:', data);
});

// setTimeout(() => {
//   client.close();
// }, 5000);
