# Moderation Commands

Server moderation tools for bulk message cleanup, member warnings, role inspection, permission checks, nickname updates, and channel slowmode.

| Command | Mode | Aliases | User Perms | Bot Perms |
| --- | --- | --- | --- | --- |
| `botclear` | Prefix | `bc`, `botpurge` | `ManageMessages`, `ReadMessageHistory` | `ManageMessages`, `ReadMessageHistory` |
| `inrole` | Prefix | — | `ManageRoles` | `EmbedLinks` |
| `perms` | Slash & Prefix | `permissions`, `perm`, `checkperms` | `ManageRoles` | `EmbedLinks` |
| `purge` | Prefix | `purify`, `cleanse`, `delete`, `clean` | `ManageMessages` | `ManageMessages`, `ReadMessageHistory` |
| `rename` | Prefix | `setnick`, `nick` | `ManageNicknames` | `ManageNicknames` |
| `roleinfo` | Slash & Prefix | `rinfo`, `ri` | `ManageRoles` | `SendMessages`, `EmbedLinks` |
| `slowmode` | Slash & Prefix | `sm`, `slow`, `ratelimit` | `ManageChannels` | `ManageChannels`, `SendMessages`, `EmbedLinks` |
| `warn` | Slash-only | — | `ModerateMembers` | `SendMessages`, `EmbedLinks` |

---

## `botclear`

Clears recent messages sent by bots to unclog a channel.

- **Usage:** `;botclear [amount]`
- **Aliases:** `bc`, `botpurge`
- **Cooldown:** 7s server
- **Permissions:** `ManageMessages` & `ReadMessageHistory` (user and bot)
- **Details:** Scans recent messages in batches of 100 and bulk-deletes up to `amount` bot messages (default `20`, max `1000`), caching deleted snapshots for `;snipe`. Reacts with `✅` when done.
- **Examples:** `;botclear` · `;botclear 10`

## `inrole`

Displays a paginated list of all members holding a specific role (20 members per page, sorted alphabetically).

- **Usage:** `;inrole <@role | name | id> [--refresh]`
- **Cooldown:** 5s server
- **Permissions:** `ManageRoles` (user)
- **Details:** Uses cached role membership for speed; pass `--refresh` (or `-r` / `refresh`) to force a fresh guild member fetch. Includes First, Previous, Next, and Last buttons (60s timeout).
- **Examples:** `;inrole @Members` · `;inrole new role --refresh`

## `perms`

Inspects a member's or role's permissions across 40 Discord permission flags.

- **Usage:** `/perms [role] [member]` or `;perms [@member | @role | ID | name]`
- **Aliases:** `permissions`, `perm`, `checkperms`
- **Cooldown:** 5s server
- **Permissions:** `ManageRoles` (user)
- **Details:** Defaults to inspecting yourself if no target is provided. Supports `@everyone` as a role target.
- **Examples:** `;perms` · `;perms @eth` · `;perms @Members` · `/perms role:@Moderator`

## `purge`

Bulk-deletes messages or strips reactions in the current channel using flexible ranges and content filters.

- **Usage:** `;purge <amount | filter> [filter | amount] [args...]`
- **Aliases:** `purify`, `cleanse`, `delete`, `clean`
- **Cooldown:** 3s server
- **Permissions:** `ManageMessages` (user); `ManageMessages` & `ReadMessageHistory` (bot)
- **Details:** Scans up to 1,000 recent messages (respecting Discord's 14-day bulk-delete limit), caches deleted messages for `;snipe`, and sends a confirmation that auto-deletes after 4 seconds.
- **Supported Filters:**
  - **Range anchors:** `after <msgId/link>`, `upto <msgId/link>`, `before <msgId/link>`, `between <msg1> <msg2>` (also works with replies)
  - **Text matching:** `startswith` / `sw`, `endswith` / `ew`, `contains` / `has`, `match`, `not`
  - **Target filters:** `mentions` / `pings`, `user` / `member`
  - **Content filters:** `bots`, `humans`, `webhooks`, `links`, `invites`, `stickers`, `emoji`, `embeds`, `files`, `images`, `text`
  - **Reaction cleanup:** `reactions` — removes all reactions from matching messages instead of deleting the messages
- **Examples:** `;purge 50` · `;purge 50 bots` · `;purge after <msgId/link>` · `;purge 50 mentions @Role` · `;purge 30 reactions` · `;purge 50 endswith ?`

## `rename`

Changes or clears a server member's nickname (up to 32 characters) and logs the change to moderation logs.

- **Usage:** `;rename <@target> [new nickname]`
- **Aliases:** `setnick`, `nick`
- **Cooldown:** 5s server
- **Permissions:** `ManageNicknames` (user and bot)
- **Details:** Blocks renaming the server owner or anyone whose highest role is equal to or higher than Nyx's highest role. Omit `[new nickname]` to clear an existing nickname.
- **Examples:** `;rename @eth ethereal` · `;rename 123456789012345678 ethereal`

## `roleinfo`

Displays detailed role metadata, ID, creation timestamp, color hex/decimal, hierarchy rank, member count, flags (hoisted, mentionable, managed, editable), icon link, special tags, and key permissions.

- **Usage:** `/roleinfo <role>` or `;roleinfo <@role | role ID | role name>`
- **Aliases:** `rinfo`, `ri`
- **Cooldown:** 5s user
- **Permissions:** `ManageRoles` (user)
- **Examples:** `/roleinfo role:@Moderator` · `;roleinfo @Moderator` · `;roleinfo Members`

## `slowmode`

Sets or disables channel slowmode (from `1s` up to Discord's `6h` / 21,600s limit).

- **Usage:** `/slowmode <duration> [channel] [reason]` or `;slowmode [#channel] [duration | off] [reason]`
- **Aliases:** `sm`, `slow`, `ratelimit`
- **Cooldown:** 3s server
- **Permissions:** `ManageChannels` (user and bot)
- **Details:** Running `;slowmode` with no arguments opens a 2-minute interactive panel with a 14-preset dropdown, a Custom Duration modal, and a Turn Off button. Pass `off`, `0`, or `reset` to disable slowmode.
- **Examples:** `;slowmode` · `;slowmode 10s` · `;slowmode 2m 30s` · `;slowmode #general 1m` · `/slowmode duration:off`

## `warn`

Issues, lists, edits, and removes tiered server member warnings (`high`, `medium`, `low`).

- **Mode:** `/warn <add | list | remove | edit>` (**Slash-only**)
- **Cooldown:** 3s server
- **Permissions:** `ModerateMembers` (user; also checks moderator/admin role hierarchy)
- **Subcommands:**
  - `/warn add <user> [reason] [severity]` — Issues a warning, attempts to DM the member, and logs to mod logs.
  - `/warn list <user>` — Opens a paginated inspector (3 warnings per page) with Clear User Warns and Clear All Server Warns buttons (exports JSON backup before clearing).
  - `/warn remove <warn_id>` — Removes a warning by ID (autocomplete enabled).
  - `/warn edit <warn_id> [reason] [severity]` — Edits warning reason or severity (autocomplete enabled).
- **Examples:** `/warn add user:@member reason:"Spamming" severity:medium` · `/warn list user:@member`
