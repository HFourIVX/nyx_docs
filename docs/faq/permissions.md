# Required Permissions

Nyx validates both **bot permissions** and **user permissions** at command execution time via its command pipeline.

---

## Baseline Bot Permissions (Prefix Commands)

In `src/core/CommandPipeline.ts` and `events/messageCreate.ts`, Nyx requires the following channel permissions to read messages and send prefix responses properly:

- `ViewChannel` — Required to see messages and track channel events.
- `SendMessages` — Required to send replies in channels.
- `EmbedLinks` — Checked before every prefix command.
- `AttachFiles` — Checked before every prefix command (required for rank cards, profile cards, quotes, media output, etc.).
- `UseExternalEmojis` — Checked before every prefix command.
- `SendMessagesInThreads` — Checked before every prefix command.

If any of `EmbedLinks`, `AttachFiles`, `UseExternalEmojis`, or `SendMessagesInThreads` is missing in a channel, Nyx will notify you which permission is missing before running a prefix command.

---

## Feature-Specific Bot Permissions

Certain commands and automated modules require additional server or channel permissions for Nyx's bot role:

| Bot Permission | Commands / Modules Requiring It | Notes |
| --- | --- | --- |
| `ManageMessages` | `botclear`, `purge`, `/trigger`, word games (message cleanup) | Needed to bulk-delete messages and manage trigger dashboards. |
| `ReadMessageHistory` | `botclear`, `purge`, `/trigger autoreact` | Needed to scan message history and attach auto-reactions. |
| `AddReactions` | `/trigger autoreact`, `wordchain`, `coffee`, `matcha` | Needed to react to messages automatically. |
| `ManageChannels` | `/slowmode` | Needed to update channel rate limits. |
| `ManageNicknames` | `rename`, `;use` (Prank Nametag) | Nyx's highest role must also sit above the target member's highest role. |
| `ManageRoles` | `customrole`, `;use` (Role Reward items), Auto Roles / Sticky Roles / Level Role Rewards | Nyx's highest role must sit above any role it assigns or edits. |
| `ViewAuditLog` | `;customrole deleteall` | Used when auditing bulk custom role deletions. |
| `ManageGuildExpressions` | `clone`, `emoji`, `sticker` | Required to upload custom emojis and stickers to the server. |

---

## User Permissions by Command

Permissions required by the member running the command:

| User Permission | Commands |
| --- | --- |
| `ManageGuild` (or `Administrator`) | `/setup`, `/config`, `/prefix server`, `;prefix <new \| reset>`, `;ecoconfig`, `;giveaway`, `;birthday announcements`, `;joinpos refresh` |
| `ManageMessages` | `/trigger`, `;botclear`, `;purge`, `;clearsnipe`, `;listafk`, `;deleteafk`, `;stop` (word games, or `ManageChannels`) |
| `ManageRoles` | `/perms`, `/roleinfo`, `;inrole`, `;customrole` (moderator subcommands: `config`, `list`, `filter`, `link`, `unlink`, `deleteall`) |
| `ManageChannels` | `/slowmode`, `;stop` (word games, or `ManageMessages`) |
| `ManageNicknames` | `;rename` |
| `ModerateMembers` | `/warn` |
| `ManageGuildExpressions` | `;clone`, `;emoji`, `;sticker` |
| `ReadMessageHistory` | `;botclear` |

::: tip Role Hierarchy Matters
Even with `ManageNicknames`, `ManageRoles`, or `ModerateMembers`, Discord enforces role hierarchy:
- Moderators cannot `;rename` the server owner or members at/above their or Nyx's highest role.
- `/warn add` enforces role hierarchy checks before warning higher-ranked members.
- `;customrole` and `;use` role items require Nyx's role to be positioned above the managed role.
:::
