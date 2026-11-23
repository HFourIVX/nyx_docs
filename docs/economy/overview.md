# Economy System

Nyx includes a full **server-scoped** economy system. Every server tracks its own wallets, bank vaults, Economy Levels, jobs, shops, inventories, and multipliers independently.

::: warning Disabled by Default
New servers start with the economy **disabled**. Server administrators with `Manage Server` can enable and customize it via `/config economy` or `/setup`. (The `;ecoconfig` command is exempt from this check and directs admins to `/config economy`.)
:::

## Core Mechanics

- **Default Currency:** `ᴥ` **Credits** (customizable per server in `/config economy` or `/setup`)
- **Economy Leveling Formula:** Advancing from Economy Level `L` to `L + 1` requires `50 + L × 50` Economy XP (Level 1 → 100 XP, Level 2 → 150 XP, Level 3 → 200 XP).
- **Multipliers:** Earnings and Economy XP from actions, streaks, and shifts scale with the server's configured money/XP multipliers and your highest matching role booster.
- **Gambling & Transfers:** Banking (`deposit`, `withdraw`), transfers (`pay`), shop purchases (`buy`), and gambling games award **no Economy XP**.

---

## Banking, Profiles & Leaderboards

| Command | Usage | Aliases | Cooldown | Description |
| --- | --- | --- | --- | --- |
| `balance` | `;balance [@target]` | `bal`, `money`, `wallet`, `cash`, `coins` | 3s server | Shows wallet, bank vault, net worth, gains/losses, Economy Level, job, and daily streak. |
| `deposit` | `;deposit <amount \| all>` | `dep` | 3s server | Moves currency from your wallet to your robbery-proof bank vault. |
| `withdraw` | `;withdraw <amount \| all>` | `with` | 3s server | Withdraws currency from your bank vault back into your wallet. |
| `pay` | `;pay <@user> <amount \| all>` | `give`, `transfer`, `send` | 3s server | Transfers wallet currency to another non-bot member. |
| `profile` | `;profile [@target]` | `ecoprofile`, `p`, `card` | 5s server | Renders an 880×500 JPEG profile card summarizing career, rank, shields, boosters, balances, and inventory value. |
| `ecorank` | `;ecorank [@target]` | `ecoxp`, `ecolevel`, `erank`, `elevel` | 5s server | Renders an 800×250 JPEG Economy Rank card with XP bar and active boosters. |
| `ecolb` | `;ecolb [xp \| money]` | `ecoleaderboard`, `baltop`, `richest`, `ecotop` | 5s server | Paginated leaderboard (10 per page) with interactive tabs for **Economy Levels** and **Richest** net worth. |
| `ecoconfig` | `;ecoconfig` | `ecosettings`, `economyconfig`, `ecoadmin` | 3s server | Redirects `ManageGuild` admins to `/config economy`. |

---

## Daily, Weekly & Street Actions

All small actions (`beg`, `cry`, `flatter`, `hunt`, `pray`, `scam`) have an internal **90-second** action cooldown.

| Command | Base Payout | Base Eco XP | Cooldown / Rules |
| --- | --- | --- | --- |
| `daily` (`claimdaily`) | `500` + `(streak - 1) × 50` (cap `+1,500` at day 31) | `75` + `min((streak - 1) × 5, 50)` | 24h cooldown · 48h window before streak resets to 1 |
| `weekly` | `10,000` – `39,999` | `200` | 7 days (604,800s) |
| `pray` | `15` – `34` | `5` – `10` | 90s action cooldown |
| `beg` | `5` – `14` | `5` – `10` | 90s action cooldown |
| `cry` | `5` – `14` | `5` – `10` | 90s action cooldown |
| `flatter` | `5` – `14` | `5` – `10` | 90s action cooldown |
| `hunt` | `5` – `14` | `5` – `10` | 90s action cooldown |
| `scam` | `5` – `14` | `5` – `10` | 90s action cooldown |

---

## Careers & Jobs

Servers start with 7 default jobs (customizable up to 25 server jobs in `/config economy`). Working a shift awards **35–55 base Economy XP** alongside your salary.

| Command | Usage | Aliases | Description |
| --- | --- | --- | --- |
| `jobs` | `;jobs [page]` | `joblist`, `careers` | Lists server jobs (5 per page) showing pay range, cooldown, level requirement, and eligibility. |
| `apply` | `;apply <job_id_or_title>` | `jobapply` | Applies for a job matching your Economy Level (keeps shifts worked & level when switching). |
| `work` | `;work [apply <job_id> \| quit \| list \| info]` | `shift` | Works a shift at your current job or manages job actions. |
| `quit` | `;quit` | `resign` | Resigns from your current job while preserving shifts worked and Economy Level. |

### Default Jobs

| ID | Title | Level Req | Salary Range | Shift Cooldown |
| --- | --- | --- | --- | --- |
| `janitor` | 🧹 School Janitor | Level 1 | `120` – `250` | 30 minutes |
| `cashier` | 🛒 Convenience Cashier | Level 2 | `220` – `400` | 40 minutes |
| `barista` | ☕ Artisan Barista | Level 4 | `350` – `620` | 50 minutes |
| `developer` | 💻 Software Engineer | Level 7 | `600` – `1,100` | 60 minutes |
| `detective` | 🕵️ Private Investigator | Level 11 | `1,100` – `1,900` | 80 minutes |
| `pilot` | ✈️ Commercial Airline Captain | Level 16 | `1,800` – `2,800` | 100 minutes |
| `astronaut` | 🚀 Deep Space Explorer | Level 22 | `3,000` – `5,000` | 120 minutes |

---

## Shop, Inventory & Items

| Command | Usage | Aliases | Description |
| --- | --- | --- | --- |
| `shop` | `;shop [category \| page]` | `store`, `market` | Browses the server shop (5 items per page, sorted by price ascending) with thumbnails and limits. |
| `buy` | `;buy <item_id_or_name> [quantity]` | `purchase` | Purchases items from the shop (enforces stock and per-user caps). |
| `inventory` | `;inventory [@user]` | `inv`, `bag`, `collectibles` | Displays owned items (5 per page) with thumbnails, types, and total collection value. |
| `use` | `;use <item_name> [@member] [new nickname]` | `useitem`, `consume`, `itemuse` | Activates protection shields, steal boosters, role rewards (`ManageRoles`), or prank nametags (`ManageNicknames`). |

### Default Shop Catalog (18 Items)

| Category | Item ID | Name | Price | Type & Effect |
| --- | --- | --- | --- | --- |
| **Novelty** | `clover` | 🍀 Lucky Four-Leaf Clover | `350` | Collectible |
| **Novelty** | `coffee_cup` | ☕ Thermal Espresso Mug | `750` | Collectible |
| **Novelty** | `rubber_duck` | 🦆 Golden Debugger Duck | `1,500` | Collectible |
| **Novelty** | `prank_nametag` | 🏷️ Prank Nametag | `2,500` | Rename — changes another member's nickname (`;use nametag @user <new nickname>`) |
| **Protection** | `padlock` | 🔒 Heavy-Duty Padlock | `2,500` | Protection (max 5) — blocks 1 robbery attempt |
| **Protection** | `decoy_wallet` | 🧨 Exploding Decoy Wallet | `4,500` | Protection (max 5) — blocks 2 robbery attempts |
| **Protection** | `security_alarm` | 🚨 Laser Security System | `12,000` | Protection (max 3) — blocks up to 3 robberies for 24 hours |
| **Boosters** | `thief_gloves` | 🧤 Shadow Thief Gloves | `3,500` | Booster (max 5) — `+15%` steal chance (to 45%) on next robbery |
| **Boosters** | `lucky_coin` | 🪙 Lucky Heist Coin | `6,000` | Booster (max 5) — `+20%` steal chance (to 50%) on next 2 robberies |
| **Boosters** | `skeleton_key` | 🗝️ Master Skeleton Key | `9,500` | Booster (max 3) — `+25%` steal chance (to 55%) and bypasses basic padlocks |
| **Lifestyle** | `gameboy` | 🎮 Retro Handheld Console | `3,200` | Collectible |
| **Lifestyle** | `sunglasses` | 🕶️ Designer Cyber Shades | `6,500` | Collectible |
| **Lifestyle** | `camera` | 📷 Vintage Rangefinder Camera | `12,000` | Collectible |
| **Luxury** | `watch` | ⌚ Diamond Chronograph | `28,000` | Collectible |
| **Luxury** | `sports_car` | 🏎️ Cyber Roadster | `75,000` | Collectible |
| **Luxury** | `golden_trophy` | 🏆 Champion's Gold Trophy | `150,000` | Collectible |
| **Artifacts** | `meteorite` | ✨ Cosmic Star Shard | `350,000` | Collectible |
| **Artifacts** | `crown_of_nyx` | 👑 Obsidian Crown of Nyx | `1,000,000` | Collectible |

---

## Robbery (`;steal` / `;rob`)

- **Usage:** `;steal <@user>` (60-second heist cooldown)
- **Requirements:** Target's wallet must not be empty, and your wallet must hold at least **50%** of the target's wallet balance.
- **Odds & Payouts:** Base **30%** success chance (boostable up to 90% with active boosters). Success steals **25%–55%** of the target's wallet and awards **15–25 base Economy XP**. Failure (or hitting a target's active shield) costs **30%** of your own wallet. (`Skeleton Key` bypasses basic padlocks/decoys, not `Laser Security System`.)
