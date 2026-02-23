import { useEffect, useState } from "react";

const texts = [
    "Backend Developer",
    "Web Developer",
    "C# Developer",
    "PHP Developer"
];

const Typing = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [char, setChar] = useState(0);
    const [del, setDel] = useState(false);

    useEffect(() => {
        const current = texts[index];
        let timer;

        if (!del && char < current.length) {
            timer = setTimeout(() => {
                setText(current.substring(0, char + 1));
                setChar(char + 1);
            }, 120);
        } else if (del && char > 0) {
            timer = setTimeout(() => {
                setText(current.substring(0, char - 1));
                setChar(char - 1);
            }, 80);
        } else if (!del && char === current.length) {
            timer = setTimeout(() => setDel(true), 1500);
        } else {
            timer = setTimeout(() => {
                setDel(false);
                setIndex((index + 1) % texts.length);
            }, 0);
        }

        return () => clearTimeout(timer);
    }, [char, del, index]);

    return <span className="typing">{text}</span>;
};

export default Typing;
