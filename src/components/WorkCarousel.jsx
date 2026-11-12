import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import FlexCarousel from "./reactbits/FlexCarousel";
import { workProjects, academicProjects } from "../data/projects";

// only projects with a screenshot and a case study make it into the reel
const featured = [...workProjects, ...academicProjects]
    .filter((p) => p.image && p.showDetail && p.link)
    .map((p) => ({
        src: p.image,
        alt: `${p.title} screenshot`,
        title: p.title,
        subtitle: p.tags.slice(0, 3).join(" · "),
        link: p.link,
    }));

const WorkCarousel = ({ onNavigate }) => {
    const [active, setActive] = useState(0);
    const current = featured[active];

    return (
        <section className="section work-section" id="work">
            <div className="section-intro">
                <p className="section-label">01 — Selected work</p>
                <h2 className="section-title">Things I've built.</h2>
                <p className="section-sub">
                    Drag or use the arrow keys to browse. Click the centered
                    project to open its case study.
                </p>
            </div>

            <div className="work-reel">
                <FlexCarousel
                    items={featured}
                    preset="liquid"
                    intro="rise"
                    cardHeight={0.56}
                    gap={18}
                    radius={14}
                    fit="landscape"
                    captions
                    captureWheel={false}
                    focusOnClick={false}
                    onChange={(index) => setActive(index)}
                    onSelect={(_, item) => onNavigate(item.link)}
                />
            </div>

            {current ? (
                <div className="work-reel-footer">
                    <a
                        href={current.link}
                        className="text-link"
                        onClick={(event) => {
                            event.preventDefault();
                            onNavigate(current.link);
                        }}
                    >
                        Open {current.title} case study <FaArrowRight aria-hidden="true" />
                    </a>
                </div>
            ) : null}
        </section>
    );
};

export default WorkCarousel;
