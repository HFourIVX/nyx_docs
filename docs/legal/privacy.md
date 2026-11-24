# Privacy Policy

*Last updated: November 24, 2026*

This Privacy Policy explains what information the **Nyx** Discord bot ("Nyx", "the Bot", or "the Service") collects, how that information is used and stored, and what choices you and server administrators have regarding your data.

---

## 1. Information We Collect

Nyx only collects and processes data necessary to provide its Discord bot features.

### A. Discord Identifiers & Profile Data
- **User IDs, Server (Guild) IDs, Channel IDs, and Role IDs** used to scope configurations, permissions, leaderboards, warnings, and user preferences.
- **Public Discord metadata** such as usernames, display names, nicknames, and avatar URLs when rendering cards (rank cards, welcome/goodbye cards, profiles, family trees) or logs.

### B. Server Configuration & Automation Data
Stored per server when configured by administrators via `/setup`, `/config`, `/prefix`, `/trigger`, or `;customrole`:
- Custom server prefixes, bot nicknames, per-server appearance settings, and module toggles.
- Banned channels, banned roles, auto roles, sticky roles, logging webhook channels, and event log settings.
- Welcome/goodbye templates, custom jobs, custom shop items, autoresponder rules, autoreact rules, and tracked word-count words.
- Personal/booster custom role mappings and role-sharing links.

### C. User-Initiated & Community Feature Data
Stored when users interact with specific Nyx modules:
- **Personal preferences:** Personal command prefixes (`/prefix self`), custom rank card colors/backgrounds (`;config card`), birthdays, AFK statuses, and scheduled reminders.
- **Moderation & activity:** Warnings issued via `/warn`, chat XP and levels, activity stats, and server join-position records.
- **Economy & social:** Per-server wallet/bank balances, job progress, shop inventories, cooldown timestamps, and social/family-tree relationships.

### D. Transient / Temporary Data
- **Snipe Cache:** When the Snipe System is enabled, Nyx temporarily caches up to **10 recent deleted messages, edited messages, or removed reactions per channel** for up to **6 hours** (non-bot events only). Moderators can wipe this cache immediately with `;clearsnipe`.
- **Media Processing & AI Inputs:** Attachments, audio/voice files, and public URLs submitted to `;caption`, `;gif`, `;ocr`, `;transcribe`, or `;download` are processed transiently to return the requested output and are not permanently archived by Nyx. Messages sent to the optional **AI Chatbot** (when enabled and `@Nyx` is mentioned or replied to) are processed to generate a reply.

---

## 2. How We Use Information

We use collected data strictly to:
- Execute commands and deliver configured server features (moderation, logging, economy, leveling, mini-games, triggers, and utilities).
- Enforce command cooldowns, role/channel restrictions, and permission checks.
- Prevent abuse, troubleshoot bugs, and maintain the stability of the Service.

We do **not** sell, rent, or trade your personal data to third parties, and we do **not** use your data for advertising.

---

## 3. Third-Party Services

Nyx operates on the **Discord** platform and is subject to [Discord's Privacy Policy](https://discord.com/privacy). Certain optional features may interact with external services when explicitly invoked by a user or enabled by a server administrator (for example, translation, dictionary lookups, media downloads from user-supplied URLs, or AI chatbot providers). Local media tools such as `tesseract.js` OCR and local Whisper transcription process inputs directly on the bot host.

---

## 4. Data Retention & Deletion

- **Server & Feature Data:** Retained for as long as needed to provide the Bot's features in your server.
- **Temporary Caches:** Snipe entries expire automatically after **6 hours** (or sooner when evicted by newer entries or cleared with `;clearsnipe`).
- **Self-Service Controls:**
  - Server administrators can disable modules, reset XP (`/config level`), reset economy data (`/config economy`), clear snipes (`;clearsnipe`), or remove triggers (`/trigger`) at any time.
  - Users can clear personal prefixes (`/prefix self`), reset rank cards (`;config card reset`), or remove their AFK/reminder/birthday entries using the respective commands.
- **Full Deletion Requests:** If you want your stored user data or a server's stored configuration removed completely, please contact us using the details in [Section 7](#_7-contact). We will verify ownership/identity (via Discord ID) and process deletion requests within a reasonable timeframe.

---

## 5. Data Security

We take reasonable technical measures to protect stored data against unauthorized access, alteration, or loss, including strict permission validation in Nyx's command pipeline and blocking private/local network URLs in media commands. However, no online service can guarantee absolute security.

---

## 6. Children's Privacy

Nyx is not directed to individuals under the minimum age required to use Discord in their jurisdiction. We do not knowingly collect personal information from children below that age. If you believe a child has provided personal data through Nyx, please contact us so we can remove it.

---

## 7. Contact

For privacy questions, data access inquiries, or deletion requests, please join our [Discord Support Server](https://discord.gg/Ut2XcQ3GQV).

---

## 8. Changes to This Policy

We may update this Privacy Policy periodically to reflect new features or legal requirements. Any updates will be posted on this page with a revised "Last updated" date.
