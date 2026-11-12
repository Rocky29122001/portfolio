import {
    SiPhp,
    SiLaravel,
    SiPython,
    SiDjango,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiJquery,
    SiBootstrap,
    SiTailwindcss,
    SiFlutter,
    SiDart,
    SiFirebase,
    SiMysql,
    SiSqlite,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import LogoLoop from "./reactbits/LogoLoop";

// grouped by where each tool sits in a project, not by proficiency
const groups = [
    {
        title: "Backend",
        items: [
            { title: "PHP", Icon: SiPhp },
            { title: "Laravel", Icon: SiLaravel },
            { title: "Python", Icon: SiPython },
            { title: "Django", Icon: SiDjango },
        ],
    },
    {
        title: "Frontend",
        items: [
            { title: "React", Icon: SiReact },
            { title: "JavaScript", Icon: SiJavascript },
            { title: "HTML", Icon: SiHtml5 },
            { title: "CSS", Icon: SiCss3 },
            { title: "Tailwind CSS", Icon: SiTailwindcss },
            { title: "Bootstrap", Icon: SiBootstrap },
            { title: "jQuery", Icon: SiJquery },
        ],
    },
    {
        title: "Mobile",
        items: [
            { title: "Flutter", Icon: SiFlutter },
            { title: "Dart", Icon: SiDart },
            { title: "Firebase", Icon: SiFirebase },
        ],
    },
    {
        title: "Data",
        items: [
            { title: "MySQL", Icon: SiMysql },
            { title: "SQL Server", Icon: DiMsqlServer },
            { title: "SQLite", Icon: SiSqlite },
        ],
    },
];

const logos = groups.flatMap((g) =>
    g.items.map((item) => ({ node: <item.Icon />, title: item.title }))
);

const Skills = () => (
    <section className="section" id="skills">
        <div className="section-intro">
            <p className="section-label">03 — Stack</p>
            <h2 className="section-title">Tools I work with.</h2>
            <p className="section-sub">
                Laravel and SQL on the server, React and Flutter on the client.
            </p>
        </div>

        <div className="skills-loop">
            <LogoLoop
                logos={logos}
                speed={40}
                logoHeight={30}
                gap={56}
                labels="below"
                fadeOut
                fadeOutWidth={0.16}
                pauseOnHover
                scaleOnHover
                ariaLabel="Technologies I use"
            />
        </div>

        <dl className="skills-groups">
            {groups.map((g) => (
                <div className="skills-group" key={g.title}>
                    <dt>{g.title}</dt>
                    <dd>
                        {g.items.map((item) => (
                            <span key={item.title}>{item.title}</span>
                        ))}
                    </dd>
                </div>
            ))}
        </dl>
    </section>
);

export default Skills;
