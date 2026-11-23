# Gambling & Mini-Games

Nyx includes **6 economy gambling games** (using your server wallet) and **20 standalone fun & party games** that require no currency.

---

## Economy Gambling Games

All gambling games require the server economy to be enabled, use a per-user gambling lock so bets cannot overlap, and award **no Economy XP**.

### `blackjack` (`bj`, `21`)
- **Usage:** `;blackjack <amount | all>`
- **Rules:** Plays against the dealer from a shuffled 52-card deck with `Hit`, `Stand` (dealer draws to 17), and `Double Down` (on initial 2 cards) buttons (60s timeout auto-stands).
- **Payouts:** Natural Blackjack pays **3:2** (`2.5×` return), standard wins pay **`2×`**, and ties push your wager back.

### `coinflip` (`cf`, `flip`)
- **Usage:** `;coinflip <amount | all> [heads | tails]` or `;coinflip <@user> <amount | all> [heads | tails]`
- **Rules:** Defaults to `heads` (`h`/`t` accepted). Solo mode flips 50/50 against the house (`2×` return). Mentioning a member opens a 60s PvP duel with `Accept Duel` / `Decline` buttons for the combined `2×` pot.

### `crash` (`rocket`, `crashgame`)
- **Usage:** `;crash <amount | all> [solo]`
- **Rules:** One active game per channel. Default mode opens a 12-second lobby for up to 10 players (`Match`, `Custom Bet`, `Launch Now`, `Leave / Cancel`), or pass `solo` to launch immediately.
- **Payouts:** Multiplier climbs exponentially up to `100.00×` (with a 4% chance of an instant `1.00×` crash). Click `Cash Out` before the explosion to lock in `floor(bet × multiplier)`.

### `highlow` (`hl`, `hilo`)
- **Usage:** `;highlow <amount | all> [over | under | 7 | higher | lower | equal] [card]`
- **Rules:** Supports dice mode (`2–12`, default) or card mode (`A=1` to `K=13` with `card`). Offers 6 predictions via arguments or 60s interactive buttons:
  - `Higher` / `Lower` / `Over 7` / `Under 7` → **`2×`**
  - `Equal` / `Lucky 7` → **`5×`** (dice) or **`10×`** (card)

### `mines` (`minefield`)
- **Usage:** `;mines <amount | all> [mines: 2-20]`
- **Rules:** Interactive 5×5 button grid (24 tiles + Cash Out button) defaulting to `3` mines. Uncover at least 3 safe diamonds (or 2 with 8+ mines) to cash out; each diamond boosts your multiplier (6% house edge), while hitting a bomb forfeits your bet. Clearing all safe tiles pays the maximum jackpot automatically.

### `slots` (`slot`, `slotmachine`)
- **Usage:** `;slots <amount | all | paytable>`
- **Rules:** Spins 3 weighted reels. Pass `paytable` (or `table`, `odds`, `info`) to view full odds without wagering. Pays **`3×` to `75×`** for 3 matching symbols (`75×` for triple stars) and **`1.5×` to `8×`** for 2 matching symbols.

---

## Multiplayer Word & Party Mini-Games

All multiplayer word lobbies (`boba`, `coffee`, `matcha`, `wordbomb`, `wordchain`) support **2–10 players**, open a **32.5-second** lobby (`Join` / `Leave`), run one session per channel, allow players to exit with `;leave`, and let the host or moderators (`ManageMessages` / `ManageChannels`) end the game with `;stop`.

| Command | Players | Gameplay Summary |
| --- | --- | --- |
| `boba` | 2–10 | 10 rounds; type the **shortest** unused valid word starting with the prompt letter (round timer shrinks from 30s down to 10s). |
| `coffee` | 2–10 | 10 rounds; type the **longest** unused valid word starting with the prompt letter (timers shrink from 30s down to 12s). |
| `matcha` | 2–10 | `;matcha [points]` (3–30, default 5). Race within 30s per round to be first to type a valid word containing all **3 target letters**. |
| `wordbomb` | 2–10 | Start with 3 lives (max 5). Type an unused English dictionary word containing the 2–3 letter prompt before a hidden 5–15s fuse explodes; using all 26 letters grants `+1` life. |
| `wordchain` | 2–10 | Start with 3 lives. Type a valid unused word beginning with the previous word's last letter; turn timer speeds up from 20s down to 5s. |
| `hangman` | Solo | 14 categories with hints (`guess <letter or word>` or `stop`, 10 wrong letter limit, 15s server cooldown). |
| `connect4` (`c4`) | 2 | `;connect4 <@target>` — 6×7 emoji grid with column buttons (`1–7`), 60s idle timeout. |
| `tictactoe` (`ttt`) | 2 | `;tictactoe <@target>` — 3×3 button grid, 60s idle timeout. |
| `rockpaperscissors` (`rps`) | 2 | `;rockpaperscissors <@target>` — Secret-choice `Rock`, `Paper`, `Scissors` buttons (60s timeout). |
| `trivia` (`quiz`) | Multi | `;trivia [category \| categories]` — 24 categories via Open Trivia DB (15s answer timer). |

---

## Fun Social & Image Commands

| Command | Usage | Aliases | Description |
| --- | --- | --- | --- |
| `quote` | `;quote` (reply to message) | `quotation`, `inspire` | Renders a 1500×900 dark-gradient quote card (`QUOTE_MSG.png`) from a replied message. |
| `fake` | `;fake <@target> <text>` | `impersonate` | Renders a realistic 1200px dark-mode Discord message screenshot (`FAKE_MSG.png`) with role color and emojis. |
| `aipac` | `;aipac <@target> [amount]` | — | Composites avatar, username, and custom or random (`$1,000–$50,999`) amount onto `aipac.png`. |
| `ship` | `;ship [@target] [@target]` | `matchmaker` | Generates a 500×250 compatibility card (`ship.png`) with blended name and score (`0%–100%`). |
| `topic` | `;topic [topic]` | — | Posts a random conversation starter (music, animals, art, games, movies, food, or general). |
| `wouldyourather` | `;wouldyourather [@target]` | `wyr` | Poses one of 82 built-in "Would You Rather" dilemmas. |
| `rate` | `;rate <text \| @target \| me \| my <text>>` | — | Gives a randomized rating out of 10 or 100. |
| `gayrate` | `;gayrate [@target]` | `gay`, `howgay`, `howgayis` | Generates a random percentage (`0%–98%`). |
| `pp` | `;pp [@target]` | — | Generates a lighthearted random ASCII ruler (`0–21` units). |
| `uwu` | `;uwu <text \| reply>` | `uwuify` | Uwu-ifies text or a replied message and appends a kaomoji (max 2,000 chars). |
