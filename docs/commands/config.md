# Config & Setup Commands

Commands for configuring server preferences, personal booster/custom roles, automated triggers, prefixes, bot information, and release notes.

| Command | Mode | Aliases | Scope | User Perms |
| --- | --- | --- | --- | --- |
| `changelogs` | Slash & Prefix | `changelog`, `updates`, `whatsnew` | Servers & DMs | Everyone |
| `config` | Slash & Prefix | `settings`, `xpconfig`, `levelconfig` | Server-only | `ManageGuild` (rankcard: Everyone) |
| `customrole` | Prefix | `customroles`, `cr`, `boosterrole`, `boostrole`, `br` | Server-only | Everyone (eligible) / `ManageRoles` (mod tools) |
| `help` | Slash & Prefix | `commands`, `command`, `h` | Servers & DMs | Everyone |
| `info` | Slash & Prefix | `botinfo`, `about` | Servers & DMs | Everyone |
| `prefix` | Slash & Prefix | `sign` | Servers & DMs | `ManageGuild` (server) / Everyone (self) |
| `setup` | Slash-only | — | Server-only | `ManageGuild` |
| `trigger` | Slash-only | `triggers`, `autoresponder`, `ar`, `autoreact`, `wc`, … | Server-only | `ManageMessages` |

---

## `changelogs`

Displays Nyx's release notes and version history from the changelog database, defaulting to the latest release.

- **Mode:** `/changelogs [version]` or `;changelogs [version]` (autocomplete enabled on slash)
- **Aliases:** `changelog`, `updates`, `whatsnew`
- **Cooldown:** 3s user, 1s server
- **Details:** Includes an interactive release switcher dropdown for 3 minutes when multiple versions exist and acknowledges any pending update notice for the invoking user.
- **Examples:** `;changelogs` · `;changelogs 2.1.0` · `/changelogs`

## `config`

Opens interactive server configuration dashboards under `/config`, or configures your personal XP rank card via prefix.

- **Mode:** `/config <view | members | level | economy | logging | extra>` or `;config <card | rankcard> <bar | font | background | reset>`
- **Aliases:** `settings`, `xpconfig`, `levelconfig`
- **Cooldown:** 3s server
- **Permissions:** `ManageGuild` (or `Administrator`) for server dashboards; any member can customize their personal rank card via `;config card`.
- **Subcommands:**
  - `/config view` — Full summary of active server settings.
  - `/config members [section]` — Welcome & Goodbye messages (Card, Canvas Image with 4 layout presets & 4 background modes, or Plain Text with tokens like `{user}` and `{joinpos}`), up to 5 Auto Roles, and Sticky Roles.
  - `/config level` — Leveling toggle, silent level-ups, XP boost multiplier, level-up channel, up to 25 role rewards, member XP edits, and XP resets.
  - `/config economy` — Currency branding, server multipliers, role boosters, up to 25 custom jobs, up to 25 custom shop items, member edits, and resets.
  - `/config logging` — Main logging webhook channel and toggles/overrides across 8 logging modules.
  - `/config extra [module]` — Command restrictions (up to 10 banned channels/roles), per-server Bot Appearance (avatar & banner), AFK, Snipe, Announcements, AI Chatbot, and Activity Stats.
- **Examples:** `/config view` · `/config members section:welcome` · `;config card bar #9b59b6`

See [Server Configuration](/guide/configuration) and [`/config` Schema](/commands/slash-commands#config) for full details.

## `customrole`

Lets eligible members (server boosters, allowed roles, or moderators with `ManageRoles`) create and manage one personal role, and lets moderators configure custom role rules.

- **Mode:** Prefix-only (`;customrole <subcommand> [options]`)
- **Aliases:** `customroles`, `cr`, `boosterrole`, `boostrole`, `br`
- **Cooldown:** 5s server
- **Bot Permissions:** `ManageRoles` (plus `ViewAuditLog` for `deleteall`)
- **Member Subcommands:**
  - `;customrole create [color] <name>` — Create a personal role.
  - `;customrole rename <name>` — Rename your role.
  - `;customrole color <color|remove> [secondary]` — Set solid hex color or Tier 2 gradient.
  - `;customrole icon <emote|link|attachment|remove>` — Set a static role icon (Boost Tier 2 servers).
  - `;customrole share [remove] <@user>` — Share or unshare your role with consent buttons.
  - `;customrole members` / `remove [role]` / `delete` — Inspect members, remove a shared role, or delete your role.
- **Moderator Subcommands (`ManageRoles`):**
  - `;customrole config` — Interactive settings panel (base hierarchy role, allowed/banned roles, creation/share limits, word filter).
  - `;customrole list` / `filter` / `link` / `unlink` / `deleteall` — List, filter, link/unlink existing roles, or wipe custom roles.
- **Examples:** `;customrole create #ff0000 cool` · `;customrole rename NewRoleName` · `;customrole share @user`

## `help`

Displays all available command categories or detailed documentation for a specific command or category.

- **Mode:** `/help [command] [category]` or `;help [command or category]` (autocomplete enabled on slash)
- **Aliases:** `commands`, `command`, `h`
- **Cooldown:** 3s server
- **Details:** Shows total command/category counts with an interactive category dropdown (marking slash-enabled commands). Owner-only commands are excluded.
- **Examples:** `;help` · `;help config` · `;help whois` · `/help command:warn`

## `info`

Displays bot statistics, runtime versions (Bun/Node.js), uptime, WebSocket ping, heap memory usage, and prefix configuration.

- **Mode:** `/info` or `;info`
- **Aliases:** `botinfo`, `about`
- **Cooldown:** 10s user, 3s server
- **Examples:** `;info` · `/info`

## `prefix`

Changes or resets either the server command prefix or your personal command prefix.

- **Mode:** `/prefix <server|self> [prefix]` or `;prefix <[prefix] | reset | self [prefix] | self reset>`
- **Aliases:** `sign`
- **Cooldown:** 3s server
- **Permissions:** `ManageGuild` (or bot owner) for server prefix changes; everyone for `self` prefix.
- **Details:** Personal prefixes work across both servers and DMs alongside the server's configured prefix (default `;`). Leaving `prefix` empty in `/prefix server` resets back to `;`.
- **Examples:** `;prefix !` · `;prefix reset` · `;prefix self ,` · `/prefix self`

## `setup`

Launches an ephemeral 4-step server onboarding wizard for configuring prefix, AFK/Leveling/Snipe/Economy toggles, currency symbol, banned channels/roles, and bot nickname.

- **Mode:** `/setup` (**Slash-only**)
- **Cooldown:** 5s server
- **Permissions:** `ManageGuild` or `Administrator`
- **Examples:** `/setup`

## `trigger`

Manages server autoresponders, auto-reactions, and tracked word counters via interactive dashboards.

- **Mode:** `/trigger <autoresponder | autoreact | wordcount>` (**Slash-only**; prefix aliases notify you to use `/trigger`)
- **Aliases:** `triggers`, `autoresponder`, `ar`, `autoreply`, `autoresponders`, `reaction`, `autoreact`, `react`, `reactions`, `arx`, `wordcount`, `wc`, `wordcounter`, `wordcounts`
- **Cooldown:** 3s server
- **Permissions:** `ManageMessages` for both user and bot (`AddReactions` and `ReadMessageHistory` also required for `autoreact` execution).
- **Details:** Supports up to 20 autoresponder rules, 50 autoreact triggers (up to 5 emojis per rule, 10 reactions per message), and 20 tracked words, each using **Smart Match**, **Wildcard**, or **Exact Match** rules.
- **Examples:** `/trigger autoresponder` · `/trigger autoreact` · `/trigger wordcount`
