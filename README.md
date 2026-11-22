# Playroom 🎮

**Small games. Big rivalries.**

Playroom is a small collection of classic browser games built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step, and no dependencies. Pick a game from the landing page, grab a friend, and play.

---

## Games

### 1. Tic-Tac-Toe
A two-player, same-device game.
* **Alternating Turns:** Player 1 plays `O`, Player 2 plays `X`, and turns alternate automatically.
* **Live Tracking:** Live turn indicator and round counter.
* **Scoreboard:** Tracks wins, draws, and losses for each player.
* **Winner Pop-Up:** Displays a celebratory pop-up when a round is won.
* **Controls:**
  * **Restart Round:** Clears the board and moves to the next round.
  * **Restart Game:** Clears the board and resets all scores and the round counter.
* **Responsive Layout:** The restart buttons move below the board on screens up to `990px` wide.

### 2. Rock Paper Scissors
Play against the computer.
* **Random Opponent:** Choose Rock, Paper, or Scissors; the computer picks randomly.
* **Visual Comparison:** Side-by-side display of your pick vs. the computer's pick.
* **Round Feedback:** Result message for each round (win, loss, or tie).
* **Running Score:** Tracks scores for both you and the computer.
* **Controls:**
  * **Next Round:** Starts a new round while keeping the current score.
  * **Reset Match:** Clears the score and resets the board.

---

## Project Structure

```text
playroom/
├── index.html          # Landing page with links to both games
├── game1.html          # Tic-Tac-Toe page
├── game1.js            # Tic-Tac-Toe logic
├── game2.html          # Rock Paper Scissors page
├── game2.js            # Rock Paper Scissors logic
├── style/              # Page stylesheets
│   ├── index.css
│   ├── game1.css
│   └── game2.css
├── mediaquery/         # Responsive (media query) stylesheets
│   ├── index.css
│   ├── game1.css
│   └── game2.css
└── images/             # Icons and artwork (undo.png, right-arrow.png,
                        # Rock.png, Paper.png, Scissior.png, and their
                        # "-recolored" variants, etc.)
```

---

## Getting Started

### Prerequisites
Just a modern web browser. To serve the files locally, you can use any simple static server.

### Run Locally
1. Clone or download this repository.
2. Serve the project folder from its root using one of the following methods:

   ```bash
   # Python 3
   python -m http.server 8000

   # or Node.js
   npx serve .
   ```
   *(Alternatively, use the **Live Server** extension in VS Code.)*

3. Open `http://localhost:8000` in your browser.

> **Note:** The pages reference assets with root-relative paths such as `/images/...` and `/game1.html`. Opening the HTML files directly with `file://` will break images and links, so always run the project through a local server (or deploy it at the root of a domain).

---

## How to Play

### Tic-Tac-Toe
1. Player 1 (`O`) starts. Click any empty square to place your mark.
2. Players alternate turns.
3. The first player to get three in a row (horizontal, vertical, or diagonal) wins the round.
4. If all nine squares are filled with no winner, the round ends in a draw.

### Rock Paper Scissors
1. Click **Rock**, **Paper**, or **Scissors**.
2. Rules: Rock beats Scissors, Scissors beats Paper, and Paper beats Rock.
3. Click **Next Round** to play again.

---

## Tech Stack
* **HTML5**
* **CSS3** (with separate media query stylesheets)
* **Vanilla JavaScript (ES6+)**
* **Roboto** via Google Fonts

---

## Roadmap Ideas
* [ ] Single-player Tic-Tac-Toe against the computer
* [ ] Draw message pop-up in Tic-Tac-Toe
* [ ] Best-of-N match mode for Rock Paper Scissors
* [ ] Sound effects and keyboard support
* [ ] More games for the Playroom collection

---

## License
This project is open for personal and educational use. Add a license of your choice (e.g., MIT) before distributing.
