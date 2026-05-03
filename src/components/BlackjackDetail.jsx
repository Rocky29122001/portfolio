import { motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCheck,
  FaDatabase,
  FaGamepad,
  FaMobileAlt,
  FaRedo,
  FaSave,
  FaTrophy,
} from "react-icons/fa";
import { fadeUp } from "../animations";

const gameFeatures = [
  {
    title: "Blackjack-style rounds",
    text: "The app follows the classic 21 target: draw cards, compare totals, and avoid going over the limit.",
  },
  {
    title: "Mobile-first play",
    text: "The Android interface keeps card totals, actions, and round status readable on small screens.",
  },
  {
    title: "Local persistence",
    text: "SQLite stores local game data so useful state can remain available between sessions.",
  },
  {
    title: "Clear round feedback",
    text: "Win, lose, and bust states are shown immediately so each turn feels easy to understand.",
  },
];

const implementationNotes = [
  "Android Studio project structure",
  "SQLite for local persistence",
  "Card and score state handled locally",
  "Responsive mobile game layout",
];

const AnimatedSection = ({ className, children }) => (
  <Motion.section
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.18 }}
  >
    {children}
  </Motion.section>
);

const BlackjackDetail = ({ onNavigate }) => (
  <main className="detail-page blackjack-detail-page">
    <AnimatedSection className="detail-page-header">
      <div className="detail-topline">
        <a
          className="back-link"
          href="/#projects"
          aria-label="Back to projects"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/#projects");
          }}
        >
          <FaArrowLeft aria-hidden="true" />
        </a>
        <p className="detail-kicker">Academic project</p>
      </div>
      <h1>21 Game Android App</h1>
      <p>
        A mobile card game based on Blackjack rules. Players draw cards toward
        a total of 21, compare scores, and receive immediate round feedback in a
        compact Android interface backed by local SQLite storage.
      </p>
      <div className="detail-tags" aria-label="Technologies used">
        <span>Android Studio</span>
        <span>SQLite</span>
        <span>Mobile UI</span>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section blackjack-showcase-section">
      <div className="phone-game-preview" aria-label="Blackjack Android game preview">
        <div className="phone-frame">
          <div className="phone-speaker" />
          <div className="game-screen">
            <div className="game-topbar">
              <span>21 Game</span>
              <strong>Coins 240</strong>
            </div>
            <div className="dealer-area">
              <small>Dealer</small>
              <div className="card-row">
                <div className="playing-card red">K H</div>
                <div className="playing-card hidden-card">?</div>
              </div>
              <strong>Total 10</strong>
            </div>
            <div className="round-status">Your turn</div>
            <div className="player-area">
              <small>Player</small>
              <div className="card-row">
                <div className="playing-card">A S</div>
                <div className="playing-card red">9 D</div>
              </div>
              <strong>Total 20</strong>
            </div>
            <div className="game-actions">
              <button type="button">Hit</button>
              <button type="button">Stand</button>
              <button type="button">Deal</button>
            </div>
          </div>
        </div>
      </div>
      <div className="login-showcase-copy">
        <p className="detail-kicker">Game loop</p>
        <h2>Fast card rounds built for Android</h2>
        <p>
          The interface keeps the main decisions visible: current cards, player
          total, dealer area, and action buttons. This makes each round easy to
          play without navigating away from the game screen.
        </p>
        <div className="login-points">
          {implementationNotes.map((item) => (
            <span key={item}>
              <FaCheck aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section">
      <div>
        <p className="detail-kicker">Features</p>
        <h2>Rules, state, and mobile interaction</h2>
      </div>
      <div className="detail-grid">
        {gameFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("Blackjack") ? <FaGamepad aria-hidden="true" /> : null}
            {item.title.includes("Mobile") ? <FaMobileAlt aria-hidden="true" /> : null}
            {item.title.includes("persistence") ? <FaDatabase aria-hidden="true" /> : null}
            {item.title.includes("feedback") ? <FaTrophy aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section blackjack-flow-section">
      <div className="screen-section-copy">
        <p className="detail-kicker">Round flow</p>
        <h2>Simple decisions with clear outcomes</h2>
        <p>
          The game flow moves through dealing, drawing, standing, score checking,
          and saving relevant local data. The UI keeps each state distinct so the
          user understands what action is available next.
        </p>
      </div>
      <div className="blackjack-flow-grid">
        {[
          ["Deal", "Start a new round and show initial cards."],
          ["Hit or stand", "Let the player draw or hold their total."],
          ["Compare", "Check player and dealer totals against 21."],
          ["Save", "Store useful game state locally with SQLite."],
        ].map(([title, text]) => (
          <article className="blackjack-flow-card" key={title}>
            {title === "Deal" ? <FaRedo aria-hidden="true" /> : null}
            {title === "Save" ? <FaSave aria-hidden="true" /> : null}
            {title !== "Deal" && title !== "Save" ? <FaCheck aria-hidden="true" /> : null}
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section detail-summary">
      <div>
        <p className="detail-kicker">Purpose</p>
        <h2>What the app demonstrates</h2>
      </div>
      <p>
        The project demonstrates Android UI construction, game-state handling,
        local data storage, and user feedback for a rules-based mobile app. It is
        small enough to stay focused, but complete enough to show practical app
        development skills.
      </p>
    </AnimatedSection>
  </main>
);

export default BlackjackDetail;
