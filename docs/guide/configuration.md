# Server Configuration

Server administrators with `Manage Server` (or `Administrator`) permissions can configure every module of Nyx through interactive Discord dashboards.

## Onboarding Wizard (`/setup`)

`/setup` is a server-only, ephemeral 4-step wizard with Back/Next navigation, toggle buttons, select menus, and modals:

1. **Server Prefix:** Set a custom prefix or reset back to `;`.
2. **Core Modules & Currency:** Toggle **AFK**, **Leveling**, **Snipe**, and **Economy**, and change the server's currency symbol.
3. **Command Restrictions:** Select up to 10 banned channels and 10 banned roles where regular command usage is restricted.
4. **Bot Nickname & Summary:** Set or reset Nyx's server nickname and review the final configuration summary.

## Configuration Dashboard (`/config`)

Use `/config` to inspect or edit individual modules at any time:

| Subcommand | Description |
| --- | --- |
| `/config view` | Displays a summary of all current server settings at a glance. |
| `/config members [section]` | Configures **Welcome** and **Goodbye** messages (Card, Canvas Image with 4 layout presets & 4 background modes, or Plain Text with tokens like `{user}` and `{joinpos}`), up to 5 **Auto Roles** on join, and **Sticky Roles** (with optional ignored roles). |
| `/config level` | Toggles leveling, silent level-ups, XP boost multiplier, level-up channel, up to 25 stacked or single role rewards, member XP/level edits, and XP resets. |
| `/config economy` | Sets currency sign/name, server money and XP multipliers, role boosters, up to 25 custom jobs, up to 25 custom shop items with thumbnails, member balance/inventory edits, and scoped resets. |
| `/config logging` | Sets the main logging webhook channel and per-module toggles/overrides across 8 logging categories. |
| `/config extra [module]` | Opens **Restrictions** (up to 10 banned channels/roles), **Bot Appearance** (per-server avatar & banner uploads), **AFK System**, **Snipe System**, **Announcements**, **AI Chatbot**, and **Activity Stats**. |

::: info Personal Rank Card Customization
Running `;config card` (or `;config rankcard`, `;xpconfig`, `;levelconfig`) lets any member customize their personal `;rank` card:
- `;config card bar #9b59b6` — Progress bar hex color
- `;config card font #ffffff` — Font hex color
- `;config card background <url|attachment>` — Custom background image
- `;config card reset` — Restore default appearance
:::

## Prefixes (`/prefix` and `;prefix`)

- **Server prefix:** `/prefix server [prefix]` or `;prefix <prefix>` / `;prefix reset` (requires `Manage Server`). Leaving `prefix` empty in `/prefix server` resets/disables back to `;`.
- **Personal prefix:** `/prefix self [prefix]` or `;prefix self <prefix>` / `;prefix self reset` sets a personal prefix usable in both servers and DMs.

## Triggers (`/trigger`)

`/trigger` requires `Manage Messages` for both the moderator and Nyx, and opens interactive management dashboards for three automation systems:

- `/trigger autoresponder` — Up to **20 rules**, configurable as direct replies or standalone messages, with toggles for user/role pings (`@everyone` and `@here` are always neutralized).
- `/trigger autoreact` — Up to **50 triggers**, up to **5 emojis per rule** (capped at 10 reactions per message), plus global every-message, user-specific, channel-specific, and ignored channel/role rules. Requires `Add Reactions` and `Read Message History` in the target channel.
- `/trigger wordcount` — Tracks up to **20 words** across server messages and ranks them by total occurrences.

### Trigger Matching Modes

All three `/trigger` modules support three matching modes:

| Mode | CLI Flags | Behavior |
| --- | --- | --- |
| **Smart Match** | `--smart`, `--smart-match`, `--word`, `-w` | Matches whole words/standalone phrases using Unicode word-boundary lookarounds (`"eth"` matches `"hello eth, how are you?"`, not `"something"`). |
| **Wildcard** | `--wildcard`, `--contains` | Case-insensitive substring match anywhere inside a message (`"eth"` matches `"something"`). |
| **Exact Match** | `--exact`, `--strict`, `-e`, `-s` | Matches only when the entire trimmed message equals the trigger (case-insensitive). |

## Personal & Booster Roles (`;customrole`)

Server boosters, members with allowed roles, or moderators with `Manage Roles` can create and customize one personal role using `;customrole`:

- `;customrole create [color] <name>` — Create your personal role
- `;customrole rename <name>` — Rename your role
- `;customrole color <color|remove> [secondary]` — Set solid or gradient colors (Tier 2 boost servers)
- `;customrole icon <emote|link|attachment|remove>` — Set a static role icon (Boost Tier 2 servers)
- `;customrole share [remove] <@user>` — Share or unshare your role with consent buttons
- `;customrole members` / `;customrole remove [role]` / `;customrole delete`
- `;customrole config` / `list` / `filter` / `link` / `unlink` — Moderator configuration panel (`Manage Roles`, plus `View Audit Log` for `deleteall`)
