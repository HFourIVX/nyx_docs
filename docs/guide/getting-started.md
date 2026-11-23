# Getting Started

Nyx is a multi-purpose Discord bot offering **117 user-facing commands** across **9 categories** — covering server configuration, moderation, utilities, media processing, leveling, social family trees, roleplay, economy, and party mini-games.

## Prefix vs. Slash Commands

Nyx supports both **prefix commands** and **Discord slash commands (`/`)**:

- **Default server prefix:** `;` (for example, `;help` or `;balance`)
- **Custom server prefix:** Server administrators (`Manage Server`) can customize or reset the server prefix using `/prefix server` or `;prefix <newPrefix>`.
- **Personal prefix:** Any user can set a personal prefix that works across servers and DMs using `/prefix self` or `;prefix self <newPrefix>`.
- **Slash commands (`/`):** **20 commands** support native Discord slash commands with autocomplete, dropdown menus, and ephemeral responses. Three configuration and moderation commands (`/setup`, `/trigger`, and `/warn`) plus `/stats` are **slash-only**.

::: tip Mentioning Nyx
Mentioning `@Nyx` is **not** a command prefix.
- Mentioning `@Nyx` with no extra text displays a quick help and prefix overview card.
- Mentioning `@Nyx` with a message (or replying to Nyx) chats with the conversational AI assistant when **AI Chatbot** is enabled in `/config extra`.
- Natural-language reminders also work without a prefix using phrases like `nyx remind me in 2 hours to check logs`.
:::

## Quick Server Setup

Follow these steps after inviting Nyx to your Discord server:

1. **Run the onboarding wizard:** Execute `/setup` (requires `Manage Server` or `Administrator`) to walk through a 4-step interactive setup:
   - Step 1: Set or reset your server command prefix.
   - Step 2: Toggle **AFK**, **Leveling**, **Snipe**, and **Economy**, and customize your currency symbol.
   - Step 3: Restrict commands in up to **10 banned channels** or for up to **10 banned roles**.
   - Step 4: Customize Nyx's nickname in your server.
2. **Fine-tune individual modules:** Use `/config view` to inspect current settings, or open `/config members`, `/config level`, `/config economy`, `/config logging`, and `/config extra`.
3. **Explore commands in Discord:** Run `/help` or `;help` to browse categories interactively, or inspect any command directly with `/help command:<name>`.

## Feature Modules Overview

| Module | Highlights | Documentation |
| --- | --- | --- |
| **Config & Setup** | `/setup`, `/config`, `/prefix`, `/trigger`, `;customrole`, `/changelogs` | [Configuration Guide](/guide/configuration) |
| **Slash Commands** | Full schema reference for all 20 slash commands & options | [Slash Commands](/commands/slash-commands) |
| **Moderation** | `/warn`, `;purge`, `;botclear`, `/slowmode`, `/perms`, `/roleinfo`, `;inrole`, `;rename` | [Moderation](/commands/moderation) |
| **Utility** | Snipes, AFK, reminders, giveaways, `/stats`, `/translate`, `/download`, `/whois` | [Utility](/commands/utility) |
| **Media** | Meme captions, GIF conversion, image OCR, and audio/voice transcription | [Media](/commands/media) |
| **Levels & Social** | Chat XP rank cards, marriage certificates, Graphviz family trees, roleplay GIFs | [Levels, Relations & Roleplay](/commands/social) |
| **Economy** | Per-server wallets, banks, jobs, custom shops, robbery, and leaderboards | [Economy System](/economy/overview) |
| **Mini-Games** | Blackjack, Crash, Mines, Slots, Word Bomb, Word Chain, Connect 4, Trivia | [Gambling & Mini-Games](/economy/minigames) |
