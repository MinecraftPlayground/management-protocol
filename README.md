# Server Management Client

A Minecraft Server JSON-RPC TypeScript Client.

[![Run Linter](https://github.com/MinecraftPlayground/server-management-client/actions/workflows/lint.yml/badge.svg)](https://github.com/MinecraftPlayground/server-management-client/actions/workflows/lint.yml)
[![Run Unit Tests](https://github.com/MinecraftPlayground/server-management-client/actions/workflows/unit_test.yml/badge.svg)](https://github.com/MinecraftPlayground/server-management-client/actions/workflows/unit_test.yml)


## Usage
```ts
import { Client } from './index.ts';

// Create a client instance
const client = new Client('ws://localhost:25576', {
  token: 'my-secret-token'
});

// Call methods
const allowlist = await client.call('minecraft:allowlist');
console.log('Allowlisted players:', allowlist.allowlist);

// Listen for notifications
client.addNotificationListener('minecraft:notification/players/joined', ({ player }) => {
  console.log(`${player.name} joined the server`);
});
```

```ts
// Managing server settings
const client = new Client('ws://localhost:25576');

// Get current difficulty
const { difficulty } = await client.call('minecraft:serversettings/difficulty');
console.log('Current difficulty:', difficulty);

// Set difficulty to hard
await client.call('minecraft:serversettings/difficulty/set', { difficulty: 'hard' });
```

```ts
// Managing players
const client = new Client('ws://localhost:25576');

// Get all connected players
const { players } = await client.call('minecraft:players');

// Add player to allowlist
await client.call('minecraft:allowlist/add', {
  add: [{ id: 'uuid-here', name: 'PlayerName' }]
});

// Kick a player
await client.call('minecraft:players/kick', {
  kick: [{
    player: { id: 'uuid', name: 'PlayerName' },
    message: { literal: 'You have been kicked' }
  }]
});
```
