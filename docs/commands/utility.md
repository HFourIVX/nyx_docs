# Utility Commands

General-purpose commands for member/server info, activity statistics, AFK management, snipes, reminders, giveaways, custom expressions, colors, translation, and media downloads. (Note: `ping` is restricted to bot admins.)

---

## Server & Member Information

### `whois`
Displays detailed account and server profile info (nickname, ID, creation & join dates, highest/hoist roles, up to 15 roles, avatar), falling back to global Discord user lookup if the ID is outside the server.
- **Mode:** `/whois [user]` or `;whois [@target]` · **Aliases:** `userinfo`, `memberinfo`, `who` · **Cooldown:** 5s server

### `serverinfo`
Shows server owner, creation date, boost count/tier, member count, text/voice channel counts, emoji count, and icon thumbnail (plus role count and top 20 roles if you have `ManageRoles`).
- **Mode:** `;serverinfo` · **Aliases:** `sinfo`, `svinfo` · **Cooldown:** 10s server

### `servericon`
Displays the current server's icon at 2048px resolution with a direct download link button.
- **Mode:** `;servericon` · **Aliases:** `sicon`, `spfp`, `spic`, `slogo` · **Cooldown:** 10s server

### `membercount`
Fetches current guild metadata and displays the total member count.
- **Mode:** `;membercount` · **Aliases:** `count` · **Cooldown:** 10s server

### `joinpos`
Checks your or another member's ordinal join rank (among non-bot members), lists the first 10 joiners, or rebuilds the join cache (`refresh` requires `ManageGuild`).
- **Mode:** `;joinpos [@target | refresh | list]` · **Cooldown:** 10s server

### `stats`
Displays server, member, and channel message activity analytics with rendered activity graphs over `24h`, `7d`, `14d`, or `30d`.
- **Mode:** `/stats <overview | user | channel> [target] [duration]` (**Slash-only**) · **Cooldown:** 5s user

### `topcommands`
Lists the top 50 most frequently executed commands in the server, paginated 10 per page for 120 seconds (bot admins can also view exact counts and pass `global`).
- **Mode:** `;topcommands [global]` · **Aliases:** `topcmds`, `mostused`, `cmdstats`, `topcmd` · **Cooldown:** 5s user

---

## Avatars, Colors & Expressions

### `avatar`
Displays your or a target member's profile picture at up to 4096px resolution, with `User PFP` and `Server PFP` toggle buttons when a server-specific avatar exists.
- **Mode:** `;avatar [@target]` · **Aliases:** `av`, `pfp`, `pic`, `logo` · **Cooldown:** 5s user

### `avmatch`
Generates a 512×256 PNG side-by-side comparison of two avatars (defaults to comparing you with Nyx if no target is provided).
- **Mode:** `;avmatch [@target] [@target]` · **Aliases:** `pfpmatch` · **Cooldown:** 10s server

### `banner`
Displays a user's global or server-specific profile banner at up to 4096px (`.gif` or `.png`), with `User Banner` / `Server Banner` buttons when both exist.
- **Mode:** `;banner [@target]` · **Cooldown:** 10s server

### `color`
Renders a 256×256 labeled swatch preview (`color.jpg`) for any 3- or 6-digit hex code (`#`, `0x`, or raw hex) with a Coolors link button. Works in **Servers & DMs**.
- **Mode:** `/color <color>` or `;color <color hex>` · **Cooldown:** 5s server

### `palette`
Extracts up to 5 dominant hex colors from an attached image, URL, replied sticker, or member avatar, rendering `palette.jpg` with Coolors buttons. Works in **Servers & DMs**.
- **Mode:** `/palette [image] [user] [link]` or `;palette [@target | link]` · **Aliases:** `colors` · **Cooldown:** 10s server

### `clone`
Clones custom emojis (sequentially with 2s spacing, resized under 256 KB) or non-Lottie stickers (max 320×320, under 512 KB) from arguments, attachments, or replied/forwarded messages into your server.
- **Mode:** `;clone <emoji/sticker/attachment>` · **Aliases:** `cloneemote`, `clonesticker`, `cloneemoji` · **Cooldown:** 10s server · **Permissions:** `ManageGuildExpressions` (user and bot)

### `emoji`
Uploads a new custom emoji from an attached image, URL, or existing emote with an optional name (2–32 alphanumeric/underscore characters).
- **Mode:** `;emoji <image/emoji/link> [emoji name]` · **Aliases:** `emojiadd`, `addemoji` · **Cooldown:** 10s server · **Permissions:** `ManageGuildExpressions` (user and bot)

### `sticker`
Uploads a server sticker from an image, URL, emote, or existing non-Lottie sticker (resized to max 320×320 and 512 KB) with an optional name (2–30 characters).
- **Mode:** `;sticker <image/link> [sticker name]` · **Aliases:** `stickeradd`, `addsticker` · **Cooldown:** 10s server · **Permissions:** `ManageGuildExpressions` (user and bot)

### `enlarge`
Sends a full-resolution attachment of a custom Discord emoji, static image URL, or message sticker.
- **Mode:** `;enlarge <emoji/sticker>` · **Aliases:** `big`, `showemoji`, `showsticker` · **Cooldown:** 5s server

---

## AFK, Birthdays, Giveaways & Reminders

### `afk`
Marks you as AFK (when the server's AFK module is enabled) with an optional status message (up to 256 chars) and static PNG/JPEG/WebP image attachment. Clears automatically on your next message after 30 seconds and summarizes up to 5 received pings.
- **Mode:** `;afk [AFK message]` · **Aliases:** `setafk`, `afkset` · **Cooldown:** 10s server

### `listafk`
Lists all members currently marked as AFK in the server (paginated 10 per page when over 12 entries).
- **Mode:** `;listafk` · **Aliases:** `afklist` · **Cooldown:** 5s server · **Permissions:** `ManageMessages` (user)

### `deleteafk`
Removes one member's AFK status by ID, or prompts with Confirm/Cancel buttons to clear all server AFK statuses when no target is provided.
- **Mode:** `;deleteafk [user ID]` · **Aliases:** `delafk`, `rmafk`, `afkremove` · **Cooldown:** 5s server · **Permissions:** `ManageMessages` (user)

### `birthday`
Stores your global birthday (`set July 20`), removes it (`remove`), lists upcoming server birthdays (`list [page]`), checks a member's birthday (`[@target]`), or toggles midnight announcements (`announcements <on|off>`, requires `ManageGuild`).
- **Mode:** `;birthday [set <date> | remove | list [page] | announcements <on|off> | @target]` · **Aliases:** `birthd`, `bday`, `bd` · **Cooldown:** 5s server

### `giveaway`
Runs a 3-step interactive setup wizard for server giveaways (10s to 30d duration, allowed/banned roles, minimum account age) and manages live giveaways.
- **Mode:** `;giveaway [end <id> | reroll <id> | cancel <id> | list | age [id] <duration|off>]` · **Aliases:** `gstart`, `gw` · **Cooldown:** 15s user · **Permissions:** `ManageGuild` (user)

### `remind`
Schedules persistent reminders (5 seconds to 5 years) using shorthand (`30m`, `2h`) or natural language (`tomorrow at 5pm`), lists/cancels active reminders (`list`, `cancel <id>`, `clear`), and delivers reminders with `Snooze 10m`, `Snooze 1h`, and `Dismiss` buttons. Also supports prefix-free `nyx remind me ...`.
- **Mode:** `;remind <time and message> | list | cancel <id> | clear` · **Aliases:** `reminder`, `reminders`, `remindme` · **Cooldown:** 3s user

---

## Snipe Commands

Snipe caches store up to **10 entries per channel for 6 hours** (non-bot events, respecting server snipe settings in `/config extra`).

### `snipe`
Displays recently deleted messages in the current channel with attached image (`snipe.png`) and a `Context` jump button.
- **Mode:** `;snipe [number]` · **Aliases:** `snipes`, `s` · **Cooldown:** 3s server

### `editsnipe`
Shows the original pre-edit content of recently edited messages in the channel.
- **Mode:** `;editsnipe [number]` · **Aliases:** `es` · **Cooldown:** 3s server

### `reactionsnipe`
Displays recently added reactions in the current channel with reactor, emoji, and message link.
- **Mode:** `;reactionsnipe [number]` · **Aliases:** `rs`, `reactsnipe`, `rsnipe` · **Cooldown:** 3s server

### `clearsnipe`
Clears all deleted, edit, and reaction snipes across the server (or only reaction snipes when `reactions` is passed).
- **Mode:** `;clearsnipe [reactions]` · **Aliases:** `clearsnipes`, `cs` · **Cooldown:** 5s server · **Permissions:** `ManageMessages` (user)

---

## Lookups, Translation, Downloads & Text Tools

### `define`
Searches Urban Dictionary (up to 10 paginated results) with Wikipedia fallback and automatic non-English query translation. Works in **Servers & DMs**.
- **Mode:** `/define <query>` or `;define <search term>` · **Cooldown:** 5s server

### `download`
Downloads `.mp4` video or 192kbps `.mp3` audio (`audio`) from `yt-dlp`-supported public URLs up to 20 MB (queued up to 2 concurrent, 10 waiting; blocks localhost/private IPs). Works in **Servers & DMs**.
- **Mode:** `/download <url> [audio]` or `;download <link> [audio]` · **Aliases:** `dl`, `ytdl`, `ytdlp` · **Cooldown:** 5s server

### `time`
Sets your global timezone (`set <city|IANA|UTC offset>`) or checks your, another user's, or any city/country's current local time. Works in **Servers & DMs**.
- **Mode:** `/time [user] [city-or-country] [set]` or `;time [@target | set <city>]` · **Aliases:** `tz`, `timezone` · **Cooldown:** 5s user, 5s server

### `translate`
Translates text or replied messages (up to 1,024 chars) via Google Translate, with an `Open in Google Translate` button. Works in **Servers & DMs**.
- **Mode:** `/translate <text> [to] [from]` or `;translate [language] <text>` (or reply) · **Aliases:** `tr` · **Cooldown:** 5s server

### `ascii`
Converts text into Figlet `Doom` ASCII art inside a code block (max 3,950 characters).
- **Mode:** `;ascii <text>` · **Cooldown:** 5s server

### `morse`
Encodes text to Morse code (`encode <text>`) or decodes Morse back to text (`decode <morse>`).
- **Mode:** `;morse <decode|encode> <text|morse>` · **Cooldown:** 5s server

### `pick`
Randomly selects one choice from a comma-separated (`,`) or `or`-separated list of 2+ options.
- **Mode:** `;pick <option 1, option 2, ... | option 1 or option 2 ...>` · **Aliases:** `choose` · **Cooldown:** 2s server
