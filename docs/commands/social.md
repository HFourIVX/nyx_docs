# Levels, Relations & Roleplay Commands

Social progression, family-tree graphs, and anime reaction GIF commands.

---

## Levels Commands

When server leveling is enabled (via `/setup` or `/config level`), members earn **1–10 base chat XP** every 60 seconds per message (`100 × level²` progression curve).

### `rank`

Renders an 800×250 PNG rank card (`rankCard.png`) showing your or another member's avatar, server rank, current level, and XP progress bar.

- **Usage:** `;rank [@target]`
- **Aliases:** `xp`, `level`, `lvl`
- **Cooldown:** 30s server
- **Customization:** Customize your card with `;config card bar <hex>`, `;config card font <hex>`, `;config card background <url|attachment>`, or `;config card reset`.
- **Examples:** `;rank` · `;rank @eth`

### `leaderboard`

Displays the server's chat XP rankings.

- **Usage:** `;leaderboard`
- **Aliases:** `lb`
- **Cooldown:** 60s server
- **Details:** Page 1 renders a 900×680 PNG podium (`leaderboard.png`) for ranks #1–#3 plus #4–#11 in a progress-bar grid. Additional pages (10 members per page) open in an ephemeral text browser via `Previous` / `Next` buttons for 6 minutes.
- **Examples:** `;leaderboard`

---

## Relations Commands

Build server-independent social family trees with marriages, adoptions, relationship pathfinding, and Graphviz family diagrams.

| Command | Usage | Aliases | Cooldown | Description |
| --- | --- | --- | --- | --- |
| `marry` | `;marry [@target]` | `wed`, `marriage`, `propose`, `spouse`, `husband`, `wife` | 10s user | Proposes marriage (generates `marriage.png` on accept) or shows current marriage status. |
| `divorce` | `;divorce` | `breakup`, `unmarry` | 10s user | Ends your current marriage after a 30s confirmation prompt. |
| `adopt` | `;adopt <@target>` | `adoptt`, `adoption` | 10s user | Sends a 30s adoption invite (max 10 children; blocks already-related or parented users). |
| `children` | `;children` | `kids`, `childlist` | 15s user | Lists all of your adopted children and their user IDs. |
| `disown` | `;disown [@target]` | `abandon` | 5s user | Removes an adopted child (supports interactive dropdown if omitted) with 60s confirmation. |
| `runaway` | `;runaway` | — | 30s user | Leaves your current parent after a 15s confirmation prompt. |
| `family` | `;family [@target]` | — | 10s user | Displays spouse (with marriage date), parents, siblings, and combined children. |
| `relation` | `;relation <@target> [@target2]` | `relationship` | 5s user | Computes the shortest family relationship path (e.g. `spouse`, `grandparent`, `cousin`, `sibling-in-law`, or `unrelated`). |
| `tree` | `;tree [@target]` | — | 30s user | Renders a 4-generation Graphviz PNG (`family-tree.png`) centered on the target member. |

---

## Roleplay Commands

Anime reaction GIF commands backed by OtakuGIFs with per-action and per-target SQLite statistics tracking.

### `roleplay`

Sends an anime reaction GIF for targeted or solo actions, or displays your full roleplay statistics table (`stats`). Works in **both servers and DMs** via `/roleplay` or `;roleplay`, and every action can also be called directly as a top-level prefix alias (such as `;hug @user` or `;dance`).

- **Mode:** `/roleplay <action> [user]` or `;roleplay [action] [@target]` (or `;<action_alias> [@target]`)
- **Cooldown:** 5s server
- **Autocomplete:** Enabled on `/roleplay action`
- **Target-Required Actions (12):** `kiss`, `hug`, `cuddle`, `pat`, `slap`, `punch`, `bite`, `lick`, `tickle`, `poke`, `handhold`, `brofist` (plus the target-required `fuck` easter-egg without GIF)
- **Solo or Targeted Actions (33):** `stare`, `mad`, `pout`, `cry`, `laugh`, `smile`, `blush`, `confused`, `surprised`, `sleep`, `clap`, `celebrate`, `dance`, `shrug`, `facepalm`, `sigh`, `scared`, `wave`, `wink`, `run`, `smug`, `yes`, `no`, `sip`, `drool`, `shout`, `sneeze`, `sweat`, `sorry`, `sing`, `cool`, `nosebleed`, `nyah`
- **Note on Alias Collisions:** Standalone `;cry` runs the economy `cry` command and `;coffee` runs the `coffee` word game; `;stop` is ignored as a roleplay alias while a word game is active in the channel. Use `/roleplay action:cry` or `;roleplay cry` to trigger roleplay `cry`.
- **Examples:** `/roleplay action:hug user:@member` · `;hug @member` · `;dance` · `;roleplay stats`

### `rpstats`

Displays a concise ASCII-doc summary table across 12 core tracked keys (`cuddle`, `fuck`, `hug`, `kick`, `kill`, `kiss`, `pat`, `pout`, `punch`, `shock`, `slap`, `sleep`).

- **Usage:** `;rpstats [@target]`
- **Cooldown:** 10s server
- **Tip:** For all 45 consolidated roleplay actions, use `;roleplay stats` or `/roleplay action:stats`.
- **Examples:** `;rpstats` · `;rpstats @eth`
