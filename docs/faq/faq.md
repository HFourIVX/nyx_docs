# Frequently Asked Questions

## General & Prefix Usage

### Why didn't `@Nyx command` run a command?
In Nyx, **bot mentions are not command prefixes**. Mentioning `@Nyx` alone opens the quick help card, while mentioning `@Nyx` with text (or replying to Nyx) chats with the conversational AI assistant when **AI Chatbot** is enabled in `/config extra`.

To run prefix commands, use your server prefix (default `;`, changed with `/prefix server` or `;prefix`) or your personal prefix (`/prefix self` or `;prefix self`).

### Can I use my own personal prefix across all servers?
Yes. Run `/prefix self prefix:<your prefix>` or `;prefix self <your prefix>`. Your personal prefix works in both servers and DMs alongside the server's prefix. Use `/prefix self` (empty) or `;prefix self reset` to remove it.

### Which commands are slash-only vs. available in DMs?
- **Slash-only (4 commands):** `/setup`, `/stats`, `/trigger`, and `/warn`. Running `;setup`, `;trigger`, or `;warn` with a prefix reminds you to use `/` instead.
- **DM-compatible commands:** `changelogs`, `help`, `info`, `prefix`, `color`, `define`, `download`, `palette`, `time`, `translate`, `roleplay`, and all four Media commands (`caption`, `gif`, `ocr`, `transcribe`). All other user commands are server-only.

### Why did Nyx say `"Did you mean /command?"`?
When a prefixed word doesn't match any command or alias, Nyx runs fuzzy command matching and suggests the closest valid command name.

---

## Configuration & Restrictions

### Why are economy commands saying the economy is disabled?
Every server starts with the economy **disabled** by default. An administrator with `Manage Server` needs to enable it via `/config economy` or `/setup`. (Only `;ecoconfig` bypasses this check so admins can locate `/config economy`.)

### How do banned channels and banned roles work?
Admins can select up to **10 banned channels** and **10 banned roles** in `/setup` or `/config extra` (`module:restrictions`) to restrict bot command usage in specific channels or for specific roles.

### Why isn't `;snipe`, `;editsnipe`, or `;reactionsnipe` showing anything?
- Snipe tracking is configurable in `/config extra` (`Snipe System`).
- Each channel caches up to **10 entries** for up to **6 hours** (non-bot events only).
- `;clearsnipe` (requires `ManageMessages`) wipes stored snipes across the server.

### Why does `;rank` or `;leaderboard` say leveling is disabled or empty?
Leveling must be enabled in `/setup` or `/config level`. When active, members earn **1–10 base chat XP** every 60 seconds per message (`100 × level²` per level).

---

## Cooldowns, Limits & Admin Commands

### How do cooldowns work?
Commands enforce `userCooldown` (per-user across servers) and/or `serverCooldown` (per-user within a server), plus feature-specific cooldowns such as:
- Economy small actions (`beg`, `cry`, `flatter`, `hunt`, `pray`, `scam`): **90 seconds**
- `steal`: **60 seconds** | `daily`: **24 hours** (48h streak window) | `weekly`: **7 days**
- Job shifts (`work`): **30 to 120 minutes** depending on the job

### What is the file size limit for `;download`, `;caption`, `;gif`, `;ocr`, and `;transcribe`?
- `;download`: Discord attachment cap of **20 MB** (queues up to 2 concurrent / 10 waiting).
- `;caption`: **100 MB** input download, **60s** max video clip, compressed under **20 MB** output.
- `;gif`: **30 MB** input, **60s** max clip, under **20 MB** output (or **10 MB** with `banner`).
- `;ocr`: **20 MB** image input.
- `;transcribe`: **30 MB** input, clipped at **5 minutes** (300s).

### Why are `ping`, `status`, `restart`, `slash`, `test`, `testlogs`, and `update` missing from `;help`?
Those 7 commands are marked `ownerOnly: true` for the bot owner and configured bot admins (`isBotAdmin`), so they are automatically hidden from public help menus and autocomplete.
