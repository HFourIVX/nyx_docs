# Slash Commands Reference

Nyx registers **20 Discord slash commands** (`/`) directly from the codebase. Four commands (`/setup`, `/stats`, `/trigger`, and `/warn`) are **slash-only**, while the remaining **16 commands** support both `/` slash usage and `;` prefix aliases.

## Summary Index

| Command | Category | Mode | Scope | Autocomplete | Required User Perms |
| --- | --- | --- | --- | --- | --- |
| [`/changelogs`](#changelogs) | config | Slash & Prefix | Servers & DMs | Yes | Everyone |
| [`/color`](#color) | utility | Slash & Prefix | Servers & DMs | No | Everyone |
| [`/config`](#config) | config | Slash & Prefix | Server-only | No | `ManageGuild` |
| [`/define`](#define) | utility | Slash & Prefix | Servers & DMs | No | Everyone |
| [`/download`](#download) | utility | Slash & Prefix | Servers & DMs | No | Everyone |
| [`/help`](#help) | config | Slash & Prefix | Servers & DMs | Yes | Everyone |
| [`/info`](#info) | config | Slash & Prefix | Servers & DMs | No | Everyone |
| [`/palette`](#palette) | utility | Slash & Prefix | Servers & DMs | No | Everyone |
| [`/perms`](#perms) | moderation | Slash & Prefix | Server-only | No | `ManageRoles` |
| [`/prefix`](#prefix) | config | Slash & Prefix | Servers & DMs | No | Everyone |
| [`/roleinfo`](#roleinfo) | moderation | Slash & Prefix | Server-only | No | `ManageRoles` |
| [`/roleplay`](#roleplay) | roleplay | Slash & Prefix | Servers & DMs | Yes | Everyone |
| [`/setup`](#setup) | config | Slash-only | Server-only | No | `ManageGuild` |
| [`/slowmode`](#slowmode) | moderation | Slash & Prefix | Server-only | No | `ManageChannels` |
| [`/stats`](#stats) | utility | Slash-only | Server-only | No | Everyone |
| [`/time`](#time) | utility | Slash & Prefix | Servers & DMs | No | Everyone |
| [`/translate`](#translate) | utility | Slash & Prefix | Servers & DMs | No | Everyone |
| [`/trigger`](#trigger) | config | Slash-only | Server-only | No | `ManageMessages` |
| [`/warn`](#warn) | moderation | Slash-only | Server-only | Yes | `ModerateMembers` |
| [`/whois`](#whois) | utility | Slash & Prefix | Server-only | No | Everyone |

---

## `/changelogs` {#changelogs}

View the latest bot updates and patch notes

- **Category:** `config` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `SendMessages`, `EmbedLinks`
- **Cooldown:** 3s user, 1s server | **Autocomplete:** Enabled

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `version` | String | No | Specific version to view (defaults to latest) — Autocomplete |

**Examples:** `/changelogs` · `/changelogs version:2.1.0`

## `/color` {#color}

View details about a certain color.

- **Category:** `utility` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `EmbedLinks`, `AttachFiles`
- **Cooldown:** 5s server

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `color` | String | Yes | Hex of a color |

**Examples:** `/color color:#9b59b6` · `/color color:ff00ff`

## `/config` {#config}

Configure bot settings for your server

- **Category:** `config` | **Mode:** Slash & Prefix | **Scope:** Server-only
- **User Permissions:** `ManageGuild` | **Bot Permissions:** `SendMessages`, `EmbedLinks`, `AttachFiles`
- **Cooldown:** 3s server

### Subcommands

#### `/config view`

View all server configuration settings at a glance

_No parameters._

#### `/config members`

Configure welcome & goodbye messages, auto roles on join, and sticky roles

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `section` | String | No | Open a specific member settings section directly — Choices: `welcome` (Welcome Message), `goodbye` (Goodbye Message), `autoroles` (Auto Roles), `stickyroles` (Sticky Roles) |

#### `/config level`

Configure the leveling system, XP boosts, and role rewards

_No parameters._

#### `/config economy`

Configure server economy, boosters, jobs, shop, members, and data resets

_No parameters._

#### `/config logging`

Configure server event and moderation logging

_No parameters._

#### `/config extra`

Configure restrictions, bot appearance, AFK, snipe, announcements, AI chatbot, and activity stats

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `module` | String | No | Open a specific extra module directly — Choices: `restrictions` (Restrictions (Channels & Roles)), `appearance` (Bot Appearance), `afk` (AFK System), `snipe` (Snipe System), `announcements` (Announcements), `chatbot` (AI Chatbot), `stats` (Activity Stats) |

**Examples:** `/config view` · `/config members section:welcome` · `/config level` · `/config economy` · `/config extra module:restrictions`

## `/define` {#define}

Search up the definition of a word or name.

- **Category:** `utility` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `SendMessages`, `EmbedLinks`
- **Cooldown:** 5s server

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `query` | String | Yes | Search term |

**Examples:** `/define query:serendipity`

## `/download` {#download}

Download video or audio from yt-dlp supported links (20MB max).

- **Category:** `utility` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `SendMessages`, `EmbedLinks`, `AttachFiles`
- **Cooldown:** 5s server

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `url` | String | Yes | Link to download media from |
| `audio` | Boolean | No | Download audio only (MP3) |

**Examples:** `/download url:https://www.youtube.com/watch?v=dQw4w9WgXcQ` · `/download url:https://www.youtube.com/watch?v=dQw4w9WgXcQ audio:True`

## `/help` {#help}

Display all available commands or get help on a specific command.

- **Category:** `config` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `SendMessages`, `EmbedLinks`
- **Cooldown:** 3s server | **Autocomplete:** Enabled

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `command` | String | No | The command or alias you want to get help with — Autocomplete |
| `category` | String | No | The category of commands to display — Autocomplete |

**Examples:** `/help` · `/help command:warn` · `/help category:economy`

## `/info` {#info}

View details about this bot.

- **Category:** `config` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `SendMessages`, `EmbedLinks`
- **Cooldown:** 10s user, 3s server

_This command takes no options._

**Examples:** `/info`

## `/palette` {#palette}

Get the color palette of an image or the avatar of any member.

- **Category:** `utility` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `EmbedLinks`, `AttachFiles`
- **Cooldown:** 10s server

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `image` | Attachment | No | Attach an image to extract colors from |
| `user` | User | No | The user whose avatar you want to extract colors from |
| `link` | String | No | Direct image URL (or member) to extract colors from |

**Examples:** `/palette user:@member` · `/palette link:https://example.com/image.png`

## `/perms` {#perms}

Check a member's or role's permissions within the server

- **Category:** `moderation` | **Mode:** Slash & Prefix | **Scope:** Server-only
- **User Permissions:** `ManageRoles` | **Bot Permissions:** `EmbedLinks`
- **Cooldown:** 5s server

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `role` | Role | No | Role to inspect permissions for |
| `member` | User | No | Member to inspect permissions for |

**Examples:** `/perms` · `/perms member:@member` · `/perms role:@Moderator`

## `/prefix` {#prefix}

Change or reset the server prefix or your personal prefix.

- **Category:** `config` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `EmbedLinks`
- **Cooldown:** 3s server

### Subcommands

#### `/prefix server`

Set the server prefix or disable/reset it

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `prefix` | String | No | The new server prefix, leave empty to disable/reset |

#### `/prefix self`

Set your personal prefix or disable/reset it

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `prefix` | String | No | The new personal prefix, leave empty to disable/reset |

**Examples:** `/prefix server prefix:!` · `/prefix self prefix:,` · `/prefix self`

## `/roleinfo` {#roleinfo}

Display detailed information about a role in this server

- **Category:** `moderation` | **Mode:** Slash & Prefix | **Scope:** Server-only
- **User Permissions:** `ManageRoles` | **Bot Permissions:** `SendMessages`, `EmbedLinks`
- **Cooldown:** 5s user

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `role` | Role | Yes | The role to inspect |

**Examples:** `/roleinfo role:@Moderator`

## `/roleplay` {#roleplay}

Send anime reaction GIFs or view roleplay stats

- **Category:** `roleplay` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `SendMessages`, `EmbedLinks`
- **Cooldown:** 5s server | **Autocomplete:** Enabled

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `action` | String | Yes | The reaction action you want to perform — Autocomplete |
| `user` | User | No | The user you want to react with/to (optional for solo actions) |

**Examples:** `/roleplay action:hug user:@member` · `/roleplay action:dance` · `/roleplay action:stats`

## `/setup` {#setup}

Interactive server onboarding wizard to configure Nyx for your server

- **Category:** `config` | **Mode:** Slash-only | **Scope:** Server-only
- **User Permissions:** `ManageGuild` | **Bot Permissions:** `SendMessages`, `EmbedLinks`
- **Cooldown:** 5s server

_This command takes no options._

**Examples:** `/setup`

## `/slowmode` {#slowmode}

Set or turn off slowmode for a channel

- **Category:** `moderation` | **Mode:** Slash & Prefix | **Scope:** Server-only
- **User Permissions:** `ManageChannels` | **Bot Permissions:** `ManageChannels`, `SendMessages`, `EmbedLinks`
- **Cooldown:** 3s server

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `duration` | String | Yes | Duration (e.g. 5s, 30s, 2m, 1h, 6h) or 'off' to disable |
| `channel` | Channel | No | Target channel (defaults to current channel) |
| `reason` | String | No | Audit log reason for updating slowmode |

**Examples:** `/slowmode duration:10s` · `/slowmode duration:2m channel:#general reason:"Slowing chat"` · `/slowmode duration:off`

## `/stats` {#stats}

View server, member, and channel message activity statistics with graphs

- **Category:** `utility` | **Mode:** Slash-only | **Scope:** Server-only
- **User Permissions:** None | **Bot Permissions:** `SendMessages`, `EmbedLinks`, `AttachFiles`
- **Cooldown:** 5s user

### Subcommands

#### `/stats overview`

View overall server activity with top members, top channels, and activity graph

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `duration` | String | No | Timeframe to analyze (defaults to Last 7 Days) — Choices: `24h` (Last 24 Hours), `7d` (Last 7 Days), `14d` (Last 14 Days), `30d` (Last 30 Days) |

#### `/stats user`

View top active members, or a specific member's most active channels

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `user` | User | No | Member to inspect (omit to see the server's most active members) |
| `duration` | String | No | Timeframe to analyze (defaults to Last 7 Days) — Choices: `24h` (Last 24 Hours), `7d` (Last 7 Days), `14d` (Last 14 Days), `30d` (Last 30 Days) |

#### `/stats channel`

View top active channels, or a specific channel's most active members

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `channel` | Channel | No | Channel to inspect (omit to see the server's most active channels) |
| `duration` | String | No | Timeframe to analyze (defaults to Last 7 Days) — Choices: `24h` (Last 24 Hours), `7d` (Last 7 Days), `14d` (Last 14 Days), `30d` (Last 30 Days) |

**Examples:** `/stats overview duration:7d` · `/stats user user:@member duration:14d` · `/stats channel channel:#general duration:24h`

## `/time` {#time}

Display the time in a certain city, or someone's if it's saved.

- **Category:** `utility` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `EmbedLinks`
- **Cooldown:** 5s user, 5s server

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `user` | User | No | The user or member you want to view details for |
| `city-or-country` | String | No | The city or country you want to view the time in |
| `set` | String | No | Set your timezone, enter a city or a timezone (Paris, UTC+1, ...) |

**Examples:** `/time` · `/time city-or-country:Tokyo` · `/time set:Europe/London` · `/time user:@member`

## `/translate` {#translate}

Translate text to a specified language using Google Translate.

- **Category:** `utility` | **Mode:** Slash & Prefix | **Scope:** Servers & DMs
- **User Permissions:** None | **Bot Permissions:** `SendMessages`, `EmbedLinks`
- **Cooldown:** 5s server

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `text` | String | Yes | The text to translate |
| `to` | String | No | Language code or name to translate to (e.g. 'es', 'french', 'ja' - defaults to English) |
| `from` | String | No | Source language code or name (defaults to auto-detect) |

**Examples:** `/translate text:"Bonjour tout le monde"` · `/translate text:"Hello world" to:ja from:en`

## `/trigger` {#trigger}

Manage autoresponders, auto-reactions, and word counters

- **Category:** `config` | **Mode:** Slash-only | **Scope:** Server-only
- **User Permissions:** `ManageMessages` | **Bot Permissions:** `SendMessages`, `ManageMessages`, `EmbedLinks`
- **Cooldown:** 3s server

### Subcommands

#### `/trigger autoresponder`

Manage automatic message responses and triggers

_No parameters._

#### `/trigger autoreact`

Manage automatic emoji reactions, triggers, and rules

_No parameters._

#### `/trigger wordcount`

Manage tracked words and occurrence counters

_No parameters._

**Examples:** `/trigger autoresponder` · `/trigger autoreact` · `/trigger wordcount`

## `/warn` {#warn}

Manage and issue warnings to server members

- **Category:** `moderation` | **Mode:** Slash-only | **Scope:** Server-only
- **User Permissions:** `ModerateMembers` | **Bot Permissions:** `SendMessages`, `EmbedLinks`
- **Cooldown:** 3s server | **Autocomplete:** Enabled

### Subcommands

#### `/warn add`

Warn a server member

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `user` | User | Yes | The member to warn |
| `reason` | String | No | Reason for the warning |
| `severity` | String | No | Severity level (high, medium, or low) — Choices: `high` (High), `medium` (Medium), `low` (Low) |

#### `/warn list`

List warnings for a member with interactive management

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `user` | User | Yes | The member whose warnings to inspect |

#### `/warn remove`

Delete a warning by ID

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `warn_id` | String | Yes | The warning ID to remove — Autocomplete |

#### `/warn edit`

Edit the reason or severity of an existing warning

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `warn_id` | String | Yes | The warning ID to edit — Autocomplete |
| `reason` | String | No | The new reason for the warning |
| `severity` | String | No | The new severity level — Choices: `high` (High), `medium` (Medium), `low` (Low) |

**Examples:** `/warn add user:@member reason:"Spamming" severity:medium` · `/warn list user:@member` · `/warn edit warn_id:123 reason:"Updated" severity:low` · `/warn remove warn_id:123`

## `/whois` {#whois}

View details about you or a server member.

- **Category:** `utility` | **Mode:** Slash & Prefix | **Scope:** Server-only
- **User Permissions:** None | **Bot Permissions:** `EmbedLinks`
- **Cooldown:** 5s server

| Option | Type | Required | Details |
| --- | --- | --- | --- |
| `user` | String | No | The user or member you want to view details for |

**Examples:** `/whois` · `/whois user:@member`

