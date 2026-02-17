# Management Protocol

A TypeScript JSON-RPC 2.0 WebSocket client for Minecraft server management.

[![Run Linter](https://github.com/MinecraftPlayground/management-protocol/actions/workflows/lint.yml/badge.svg)](https://github.com/MinecraftPlayground/management-protocol/actions/workflows/lint.yml)
[![Run Unit Tests](https://github.com/MinecraftPlayground/management-protocol/actions/workflows/unit_test.yml/badge.svg)](https://github.com/MinecraftPlayground/management-protocol/actions/workflows/unit_test.yml)

---

## Usage
### Creating a Client
```ts
import { Client } from '@minecraft-server/management-protocol';


const client = new Client('ws://localhost:25576', {
  token: 'my-secret-token' // Token from server.properties
});
```

### Calling Methods
Methods follow a request/response pattern. Parameters are fully type-safe.

```ts
// No parameters
const players = await client.call('minecraft:players');

// With parameters
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

### Getting & Setting Server Settings
```ts
// Get current difficulty
const difficulty = await client.call('minecraft:serversettings/difficulty');
console.log('Current difficulty:', difficulty); // 'peaceful' | 'easy' | 'normal' | 'hard'

// Set difficulty
await client.call('minecraft:serversettings/difficulty/set', { difficulty: 'hard' });
```

### Listening for Notifications
```ts
client.addNotificationListener('minecraft:notification/server/status', ({ status }) => {
  console.log(`Players online: ${status.player?.length ?? 0}`);
});

// Remove a listener
const onJoin = ({ player }) => console.log(`${player.name} joined`);
client.addNotificationListener('minecraft:notification/players/joined', onJoin);
client.removeNotificationListener('minecraft:notification/players/joined', onJoin);
```

---

## Custom Methods & Notifications
The client is fully generic - you can extend the default definitions with your own definitions.

### Custom Method
```ts
import { Client } from '@minecraft-server/management-protocol';
import type { MethodObjectDefinition } from '@minecraft-server/management-protocol/schema';
import type { minecraft } from '@minecraft-server/management-protocol/definitions';


type CustomGreetMethod = MethodObjectDefinition<
  'custom:player/greet',
  [{
    player : minecraft.schemas.PlayerObject,
    message : string
  }],
  minecraft.schemas.PlayerObject
>;

const client = new Client<minecraft.Extend<CustomGreetMethod>>('ws://localhost:25576', {
  token: 'my-token'
});

const greeted = await client.call('custom:player/greet', {
  player: { id: 'uuid', name: 'PlayerName' },
  message: 'Hello!'
});
console.log(`Greeted: ${greeted.name}`);
```

### Custom Notification
```ts
import { Client } from '@minecraft-server/management-protocol';
import type { NotificationObjectDefinition } from '@minecraft-server/management-protocol/schema';
import type { minecraft } from '@minecraft-server/management-protocol/definitions';


type CustomGreetedNotification = NotificationObjectDefinition<
  'custom:notification/player/greeted',
  [{ player: minecraft.schemas.PlayerObject }]
>;

const client = new Client<minecraft.Extend<CustomGreetedNotification>>('ws://localhost:25576', {
  token: 'my-token'
});

client.addNotificationListener('custom:notification/player/greeted', ({ player }) => {
  console.log(`Greeted: ${player.name}`);
});
```

---

## API Reference
### `new Client(url, options?)`
| Parameter | Type | Description |
|---|---|---|
| `url` | `ConnectionAddress` | WebSocket URL (`ws://` or `wss://`) |
| `options.token` | `string` (optional) | Bearer token for authentication |

### Methods
| Method | Description |
|---|---|
| `call(method, ...params)` | Call a JSON-RPC method, returns a `Promise` with the result |
| `addNotificationListener(method, listener)` | Register a notification listener |
| `removeNotificationListener(method, listener)` | Remove a notification listener |
| `close(code?, reason?)` | Close the WebSocket connection |

### Schema Utilities
Available from `@minecraft-server/management-protocol/schema`:

| Type | Description |
|---|---|
| `MethodObjectDefinition<Name, Params, Result>` | Define a custom method |
| `NotificationObjectDefinition<Name, Params>` | Define a custom notification |
| `ExtractParams<Definitions, Name>` | Extract param types for a given method name |
| `ExtractResult<Definitions, Name>` | Extract the result type for a given method name |

---

## Available Methods
Available from `@minecraft-server/management-protocol/definitions`:

<details>
<summary><strong>Players</strong></summary>

| Method | Description |
|---|---|
| `minecraft:players` | Get all connected players |
| `minecraft:players/kick` | Kick one or more players |

</details>

<details>
<summary><strong>Allowlist</strong></summary>

| Method | Description |
|---|---|
| `minecraft:allowlist` | Get the allowlist |
| `minecraft:allowlist/add` | Add players to the allowlist |
| `minecraft:allowlist/remove` | Remove players from the allowlist |
| `minecraft:allowlist/set` | Replace the entire allowlist |
| `minecraft:allowlist/clear` | Clear the allowlist |

</details>

<details>
<summary><strong>Bans</strong></summary>

| Method | Description |
|---|---|
| `minecraft:bans` | Get the ban list |
| `minecraft:bans/add` | Add players to the ban list |
| `minecraft:bans/remove` | Remove players from the ban list |
| `minecraft:bans/set` | Replace the entire ban list |
| `minecraft:bans/clear` | Clear the ban list |
| `minecraft:ip_bans` | Get the IP ban list |
| `minecraft:ip_bans/add` | Add IPs to the ban list |
| `minecraft:ip_bans/remove` | Remove IPs from the ban list |
| `minecraft:ip_bans/set` | Replace the entire IP ban list |
| `minecraft:ip_bans/clear` | Clear the IP ban list |

</details>

<details>
<summary><strong>Operators</strong></summary>

| Method | Description |
|---|---|
| `minecraft:operators` | Get all operators |
| `minecraft:operators/add` | Op players |
| `minecraft:operators/remove` | Deop players |
| `minecraft:operators/set` | Replace the full operator list |
| `minecraft:operators/clear` | Deop all players |

</details>

<details>
<summary><strong>Game Rules</strong></summary>

| Method | Description |
|---|---|
| `minecraft:gamerules` | Get all game rules and their values |
| `minecraft:gamerules/update` | Update a game rule value |

</details>

<details>
<summary><strong>Server</strong></summary>

| Method | Description |
|---|---|
| `minecraft:server/status` | Get server status |
| `minecraft:server/save` | Save server state |
| `minecraft:server/stop` | Stop the server |
| `minecraft:server/system_message` | Send a system message to players |

</details>

<details>
<summary><strong>Server Settings</strong></summary>

| Method | Description |
|---|---|
| `minecraft:serversettings/difficulty` | Get difficulty |
| `minecraft:serversettings/difficulty/set` | Set difficulty |
| `minecraft:serversettings/game_mode` | Get default game mode |
| `minecraft:serversettings/game_mode/set` | Set default game mode |
| `minecraft:serversettings/max_players` | Get max player count |
| `minecraft:serversettings/max_players/set` | Set max player count |
| `minecraft:serversettings/motd` | Get message of the day |
| `minecraft:serversettings/motd/set` | Set message of the day |
| `minecraft:serversettings/allow_flight` | Get flight permission (survival) |
| `minecraft:serversettings/allow_flight/set` | Set flight permission (survival) |
| `minecraft:serversettings/autosave` | Get autosave state |
| `minecraft:serversettings/autosave/set` | Enable/disable autosave |
| `minecraft:serversettings/force_game_mode` | Get force game mode state |
| `minecraft:serversettings/force_game_mode/set` | Enable/disable force game mode |
| `minecraft:serversettings/use_allowlist` | Get allowlist enabled state |
| `minecraft:serversettings/use_allowlist/set` | Enable/disable allowlist |
| `minecraft:serversettings/enforce_allowlist` | Get enforce-allowlist state |
| `minecraft:serversettings/enforce_allowlist/set` | Enable/disable enforce-allowlist |
| `minecraft:serversettings/view_distance` | Get view distance (chunks) |
| `minecraft:serversettings/view_distance/set` | Set view distance (chunks) |
| `minecraft:serversettings/simulation_distance` | Get simulation distance (chunks) |
| `minecraft:serversettings/simulation_distance/set` | Set simulation distance (chunks) |
| `minecraft:serversettings/spawn_protection_radius` | Get spawn protection radius |
| `minecraft:serversettings/spawn_protection_radius/set` | Set spawn protection radius |
| `minecraft:serversettings/player_idle_timeout` | Get idle kick timeout (seconds) |
| `minecraft:serversettings/player_idle_timeout/set` | Set idle kick timeout (seconds) |
| `minecraft:serversettings/pause_when_empty_seconds` | Get pause-when-empty delay (seconds) |
| `minecraft:serversettings/pause_when_empty_seconds/set` | Set pause-when-empty delay (seconds) |
| `minecraft:serversettings/entity_broadcast_range` | Get entity broadcast range (%) |
| `minecraft:serversettings/entity_broadcast_range/set` | Set entity broadcast range (%) |
| `minecraft:serversettings/hide_online_players` | Get hide-online-players state |
| `minecraft:serversettings/hide_online_players/set` | Enable/disable hide-online-players |
| `minecraft:serversettings/status_replies` | Get status reply state |
| `minecraft:serversettings/status_replies/set` | Enable/disable status replies |
| `minecraft:serversettings/accept_transfers` | Get accept-transfers state |
| `minecraft:serversettings/accept_transfers/set` | Enable/disable accept-transfers |
| `minecraft:serversettings/operator_user_permission_level` | Get default operator permission level |
| `minecraft:serversettings/operator_user_permission_level/set` | Set default operator permission level |
| `minecraft:serversettings/status_heartbeat_interval` | Get heartbeat interval (seconds) |
| `minecraft:serversettings/status_heartbeat_interval/set` | Set heartbeat interval (seconds) |

</details>

---

## Available Notifications
Available from `@minecraft-server/management-protocol/definitions`:

<details>
<summary><strong>Players</strong></summary>

| Notification | Description |
|---|---|
| `minecraft:notification/players/joined` | A player joined |
| `minecraft:notification/players/left` | A player left |

</details>

<details>
<summary><strong>Server</strong></summary>

| Notification | Description |
|---|---|
| `minecraft:notification/server/started` | Server started |
| `minecraft:notification/server/stopping` | Server is shutting down |
| `minecraft:notification/server/status` | Server status heartbeat |
| `minecraft:notification/server/saving` | World save started |
| `minecraft:notification/server/saved` | World save completed |
| `minecraft:notification/server/activity` | Server activity (rate-limited to 1/30s) |

</details>

<details>
<summary><strong>Allowlist</strong></summary>

| Notification | Description |
|---|---|
| `minecraft:notification/allowlist/added` | Player added to allowlist |
| `minecraft:notification/allowlist/removed` | Player removed from allowlist |

</details>

<details>
<summary><strong>Bans</strong></summary>

| Notification | Description |
|---|---|
| `minecraft:notification/bans/added` | Player added to ban list |
| `minecraft:notification/bans/removed` | Player removed from ban list |
| `minecraft:notification/ip_bans/added` | IP added to ban list |
| `minecraft:notification/ip_bans/removed` | IP removed from ban list |

</details>

<details>
<summary><strong>Operators</strong></summary>

| Notification | Description |
|---|---|
| `minecraft:notification/operators/added` | Player was opped |
| `minecraft:notification/operators/removed` | Player was deopped |

</details>

<details>
<summary><strong>Game Rules</strong></summary>

| Notification | Description |
|---|---|
| `minecraft:notification/gamerules/updated` | A game rule was changed |

</details>
