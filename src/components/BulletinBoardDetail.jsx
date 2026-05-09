import { motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBell,
  FaCheck,
  FaComments,
  FaCalendarCheck,
  FaDownload,
  FaEye,
  FaFilter,
  FaHeart,
  FaLaugh,
  FaPlusCircle,
  FaRegFileAlt,
  FaRegSquare,
  FaSearch,
  FaThumbsUp,
  FaUpload,
  FaUser,
  FaUserPlus,
  FaUserShield,
  FaUsers,
} from "react-icons/fa";
import { fadeUp } from "../animations";

const loginHighlights = [
  "Clean authentication screen for BBMS users",
  "Email and password inputs with clear spacing",
  "Remember-me option for returning users",
  "Forgot-password path for account recovery",
];

const postFeatures = [
  {
    title: "Create announcements",
    text: "Authorized users can create posts for notices, meetings, lost-and-found items, maintenance updates, and team news.",
  },
  {
    title: "Upload with CSV",
    text: "Admins can upload a CSV file to add many announcement posts at once, which saves time when sharing repeated or bulk updates.",
  },
  {
    title: "Search and filter",
    text: "Users can find posts by keyword, category, and date so important information is easier to reach.",
  },
  {
    title: "Download records",
    text: "Post data can be downloaded for backup, reporting, or checking shared announcement history.",
  },
];

const collaborationFeatures = [
  {
    title: "Role-based access",
    text: "Admin users can manage users, create posts, upload CSV files, and control bulletin content. Normal users can read announcements, react, and comment.",
  },
  {
    title: "Reactions",
    text: "Quick reactions such as like, love, and laugh help team members respond without writing a full reply.",
  },
  {
    title: "Comments",
    text: "Each post supports comments so users can ask questions, confirm updates, or continue the discussion under the announcement.",
  },
];

const userManagementFeatures = [
  {
    title: "Admin-only user CRUD",
    text: "Only admins can create, view, update, and delete users, which keeps account management controlled and secure.",
  },
  {
    title: "Create-user validation",
    text: "The create-user form shows validation errors when required fields, email format, password rules, or duplicate data are incorrect.",
  },
  {
    title: "User filters",
    text: "Admins can filter users by date range, user type, name, and email to find accounts quickly.",
  },
  {
    title: "Post filters",
    text: "The Posts page also includes date, category, and keyword filtering so announcements are easy to search.",
  },
];

const postDetailFields = [
  ["Description", "This is the first announcement post for all members."],
  ["Status", "Active"],
  ["Created Date", "2026-04-30 15:00:49"],
  ["Created By", "Admin"],
  ["Updated Date", "2026-04-30"],
  ["Updated By", "Admin"],
  ["Category", "Announcement"],
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

const BulletinBoardDetail = ({ onNavigate }) => (
  <main className="detail-page">
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
      <h1>Bulletin Board Management System</h1>
      <p>
        BBMS is a Laravel-based bulletin board application for team announcements.
        It helps members share updates, create posts, upload announcements by CSV,
        react to news, and comment on posts so communication stays simple and easy
        to follow.
      </p>
      <div className="detail-tags" aria-label="Technologies used">
        <span>Laravel</span>
        <span>PHP</span>
        <span>MySQL</span>
        <span>jQuery</span>
        <span>CSS</span>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section login-showcase-section">
      <div className="login-preview" aria-label="BBMS login page preview">
        <div className="login-card">
          <div className="board-icon" aria-hidden="true">
            <FaBell className="board-bell" />
            <span className="note note-one" />
            <span className="note note-two" />
            <span className="note note-three" />
          </div>
          <h2>BBMS</h2>
          <p>Bulletin Board Management System</p>
          <label>
            <span>Email Address</span>
            <input type="email" aria-label="Email Address" readOnly />
          </label>
          <label className="password-field">
            <span>Password</span>
            <input type="password" aria-label="Password" readOnly />
            <FaEye aria-hidden="true" />
          </label>
          <div className="remember-row">
            <FaRegSquare aria-hidden="true" />
            <span>Remember Me</span>
          </div>
          <button type="button">Sign In</button>
          <a href="#forgot-password">Forgot your password?</a>
        </div>
      </div>
      <div className="login-showcase-copy">
        <p className="detail-kicker">Login page first</p>
        <h2>Focused access for BBMS users</h2>
        <p>
          The login screen keeps the first step simple: users sign in with email
          and password, choose remember-me for faster access, and recover their
          account if they forget the password.
        </p>
        <div className="login-points">
          {loginHighlights.map((item) => (
            <span key={item}>
              <FaCheck aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section post-view-section">
      <div className="screen-section-copy">
        <p className="detail-kicker">Post view</p>
        <h2>Announcement posts for team communication</h2>
        <p>
          The post page is the main workspace after login. Team members can read
          announcements in a card layout, react to important updates, and leave
          comments when they need to ask questions or add more context.
        </p>
      </div>

      <div className="post-board-preview" aria-label="Bulletin board post view preview">
        <div className="post-board-nav">
          <strong>Bulletinboard</strong>
          <span>Users</span>
          <span>Posts</span>
          <span>Create User</span>
          <span>Admin</span>
        </div>
        <div className="csv-alert">CSV uploaded successfully!</div>
        <div className="post-toolbar">
          <span>mm/dd/yyyy</span>
          <span>All</span>
          <span className="search-box">Search by keyword <FaSearch aria-hidden="true" /></span>
          <button type="button">Category</button>
          <button type="button"><FaPlusCircle aria-hidden="true" /> Create</button>
          <button type="button"><FaUpload aria-hidden="true" /> Upload</button>
          <button type="button"><FaDownload aria-hidden="true" /> Download</button>
        </div>
        <div className="post-card-grid">
          {["Welcome to the Bulletin", "System Maintenance Notice", "Weekly Team Meeting"].map((title) => (
            <article className="post-mini-card" key={title}>
              <div className="post-mini-head">
                <span>{title}</span>
                <small>1 second ago</small>
              </div>
              <p>
                {title === "Weekly Team Meeting"
                  ? "Our weekly team meeting will be held on Friday afternoon."
                  : "This announcement keeps every member updated in one shared place."}
              </p>
              <div className="post-mini-actions">
                <span>Admin</span>
                <button type="button"><FaThumbsUp aria-hidden="true" /></button>
                <button type="button"><FaHeart aria-hidden="true" /></button>
                <button type="button"><FaLaugh aria-hidden="true" /></button>
                <button type="button"><FaComments aria-hidden="true" /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section">
      <div>
        <p className="detail-kicker">Post management</p>
        <h2>Create, upload, search, and export posts</h2>
      </div>
      <div className="detail-grid">
        {postFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            <FaCheck aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section post-detail-section">
      <div className="screen-section-copy">
        <p className="detail-kicker">Post details</p>
        <h2>View complete announcement information</h2>
        <p>
          When a user opens a post, BBMS shows a detail dialog with the full
          description, status, creator, category, created date, and latest update
          information. This helps team members confirm whether an announcement is
          still active and who is responsible for it.
        </p>
      </div>

      <div className="post-detail-preview" aria-label="Post detail modal preview">
        <div className="post-detail-backdrop">
          <div className="detail-modal">
            <div className="detail-modal-head">
              <div>
                <h3><FaRegFileAlt aria-hidden="true" /> Welcome to the Bulletin Board</h3>
                <span>Post Details</span>
              </div>
              <button type="button" aria-label="Close post details">x</button>
            </div>
            <div className="detail-modal-body">
              {postDetailFields.map(([label, value]) => (
                <div className="detail-row" key={label}>
                  <span>
                    {label.includes("Date") ? <FaCalendarCheck aria-hidden="true" /> : null}
                    {label.includes("By") ? <FaUser aria-hidden="true" /> : null}
                    {!label.includes("Date") && !label.includes("By") ? <FaRegFileAlt aria-hidden="true" /> : null}
                    {label}
                  </span>
                  <strong className={label === "Status" ? "status-pill" : ""}>{value}</strong>
                </div>
              ))}
            </div>
            <div className="detail-modal-foot">
              <button type="button">Close</button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section user-management-section">
      <div className="screen-section-copy">
        <p className="detail-kicker">User management</p>
        <h2>Admin controls for managing system users</h2>
        <p>
          The Users page gives admins a clear dashboard for monitoring accounts,
          checking user totals, filtering records, and managing user data. Create,
          update, and delete actions are restricted to the admin role so regular
          users cannot change system accounts.
        </p>
      </div>

      <div className="user-management-preview" aria-label="User management page preview">
        <div className="user-hero-preview">
          <div>
            <h3><FaUsers aria-hidden="true" /> User Management</h3>
            <p>Manage and monitor all system users</p>
          </div>
          <div className="user-stat-preview">
            <span>2</span>
            <small>Total users</small>
          </div>
          <div className="user-stat-preview">
            <span>1</span>
            <small>Admins</small>
          </div>
          <div className="user-stat-preview">
            <span>1</span>
            <small>Regular users</small>
          </div>
        </div>
        <div className="user-success-preview">User registered successfully!</div>
        <div className="user-filter-preview">
          <h4><FaFilter aria-hidden="true" /> Filter & Search</h4>
          <div>
            <span>Date Range</span>
            <span>All Users</span>
            <span>Search by name...</span>
            <span>Search by email...</span>
            <button type="button">Search</button>
          </div>
        </div>
        <div className="user-table-preview">
          <div className="user-table-head">
            <strong>Users List</strong>
            <small>2 results</small>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admin</td>
                <td>admin@example.com</td>
                <td><span className="admin-badge">Admin</span></td>
                <td>2026-02-11</td>
                <td><button type="button">Delete</button></td>
              </tr>
              <tr>
                <td>Mr John</td>
                <td>john@example.com</td>
                <td><span className="user-badge">User</span></td>
                <td>2026-04-30</td>
                <td><button type="button">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section">
      <div>
        <p className="detail-kicker">Admin workflow</p>
        <h2>User CRUD, validation, and filters</h2>
      </div>
      <div className="detail-grid">
        {userManagementFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("CRUD") ? <FaUserShield aria-hidden="true" /> : null}
            {item.title.includes("validation") ? <FaUserPlus aria-hidden="true" /> : null}
            {item.title.includes("filters") ? <FaFilter aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section">
      <div>
        <p className="detail-kicker">Team connection</p>
        <h2>Roles, reactions, and comments</h2>
      </div>
      <div className="collaboration-grid">
        {collaborationFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title === "Role-based access" ? <FaUserShield aria-hidden="true" /> : null}
            {item.title === "Reactions" ? <FaHeart aria-hidden="true" /> : null}
            {item.title === "Comments" ? <FaComments aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section detail-summary">
      <div>
        <p className="detail-kicker">Purpose</p>
        <h2>Why teams use BBMS</h2>
      </div>
      <p>
        The purpose of BBMS is to make announcements easy to share and easy to
        understand. Instead of messages being lost in different chats, a team can
        keep official updates in one place, control who can manage content, and let
        members respond through reactions and comments.
      </p>
    </AnimatedSection>
  </main>
);

export default BulletinBoardDetail;
