import { motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCheck,
  FaQrcode,
  FaUserFriends,
  FaCamera,
  FaKey,
} from "react-icons/fa";
import { fadeUp } from "../animations";
import loginShot from "../assets/projects/business-card-4u/login.jpg";
import savedCardsShot from "../assets/projects/business-card-4u/saved-cards.jpg";
import qrShot from "../assets/projects/business-card-4u/my-qr-code.jpg";

const screens = [
  {
    src: loginShot,
    alt: "businessCard4U login screen with a business-card illustration, email and password fields, and a Register link",
    step: "Screen 01",
    kicker: "Login",
    title: "Share your identity instantly",
    text: "The app opens with an illustration of a card moving from paper to phone, followed by a plain email and password form. New users register with an emailed one-time code before their account is activated.",
  },
  {
    src: savedCardsShot,
    alt: "businessCard4U Saved Cards tab listing contacts with name, position, phone, and email, plus a New Card button",
    step: "Screen 02",
    kicker: "Saved Cards",
    title: "A searchable wallet of everyone you've met",
    text: "Cards are split into Friend's Cards and Saved Cards. Each one shows name, position, phone, and email at a glance, a search bar filters the list, and New Card adds another contact.",
  },
  {
    src: qrShot,
    alt: "businessCard4U My QR Code sheet showing a QR code that others can scan to add the user's card",
    step: "Screen 03",
    kicker: "My QR Code",
    title: "Hand over a card without handing over paper",
    text: "One tap opens a QR code tied to the user's own card. Someone scans it with the in-app scanner and the card lands in their wallet, ready to send a friend request.",
  },
];

const systemFeatures = [
  {
    title: "QR card exchange",
    text: "Every profile card gets a unique QR value, and the in-app scanner turns someone else's code straight into a saved card.",
  },
  {
    title: "Scan paper cards",
    text: "On-device text recognition (Google ML Kit) reads a photographed business card, so its details don't have to be typed by hand.",
  },
  {
    title: "Friends and requests",
    text: "Saved contacts can become friends through a request and accept flow, with push notifications through Firebase Cloud Messaging.",
  },
  {
    title: "Laravel API with OTP auth",
    text: "A Laravel 12 API with Sanctum tokens handles email OTP registration, password reset, companies, and cards. Tokens are stored only in secure storage on the device.",
  },
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

const BusinessCard4UDetail = ({ onNavigate }) => (
  <main className="detail-page bc4u-detail-page">
    <Motion.section
      className="detail-page-header"
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
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

      <h1>Business Card 4U</h1>
      <p>
        A business networking app for saving and finding business cards. Users
        exchange cards by QR code, scan paper cards with on-device text
        recognition, and turn contacts into friends. It's a Flutter app backed
        by a Laravel API.
      </p>

      <div className="detail-tags" aria-label="Technologies used">
        <span>Flutter</span>
        <span>Riverpod</span>
        <span>Laravel</span>
        <span>Firebase</span>
      </div>
    </Motion.section>

    <AnimatedSection className="detail-section">
      <div className="login-showcase-copy" style={{ maxWidth: "760px" }}>
        <p className="detail-kicker">The problem</p>
        <h2>Paper cards get lost. Contacts in a phone lose their context.</h2>
        <p>
          Business Card 4U keeps the card as the unit: a name, a role, a
          company, and the ways to reach someone, saved the moment you meet
          them and searchable later.
        </p>
        <div className="login-points">
          {[
            "Exchange cards by scanning a QR code",
            "Digitize paper cards with on-device OCR",
            "Separate friends from simply saved contacts",
            "Email OTP sign-up and password reset",
          ].map((item) => (
            <span key={item}>
              <FaCheck aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>

    {screens.map((shot, index) => (
      <AnimatedSection
        className={`detail-section mobile-shot-section${index % 2 === 1 ? " flip" : ""}`}
        key={shot.kicker}
      >
        <div className="phone-shot-preview">
          <div className="phone-shot-frame">
            <div className="phone-speaker" />
            <div className="phone-shot-screen">
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </div>
          </div>
        </div>
        <div className="screen-section-copy">
          <p className="detail-kicker">{shot.step} · {shot.kicker}</p>
          <h2>{shot.title}</h2>
          <p>{shot.text}</p>
        </div>
      </AnimatedSection>
    ))}

    <AnimatedSection className="detail-section">
      <div>
        <p className="detail-kicker">System</p>
        <h2>What the app and API handle together</h2>
      </div>
      <div className="detail-grid">
        {systemFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("QR") ? <FaQrcode aria-hidden="true" /> : null}
            {item.title.includes("Scan") ? <FaCamera aria-hidden="true" /> : null}
            {item.title.includes("Friends") ? <FaUserFriends aria-hidden="true" /> : null}
            {item.title.includes("OTP") ? <FaKey aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section detail-summary">
      <div>
        <p className="detail-kicker">Architecture</p>
        <h2>Layered so each part can be tested on its own</h2>
      </div>
      <p>
        The Flutter client keeps strict layers. UI widgets read Riverpod
        providers, providers depend on an abstract data agent, and only that
        agent talks to the Retrofit and Dio client. Network errors become app
        exceptions at that boundary, so screens never deal with HTTP details,
        and every layer can be tested against a fake.
      </p>
    </AnimatedSection>
  </main>
);

export default BusinessCard4UDetail;
