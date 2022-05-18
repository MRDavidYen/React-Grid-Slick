import React from "react";
import Container from "./components/container";
import styles from "./styles/main.module.css";

const defaultSettings: ISliderProps = {
    children: undefined,
    dots: false,
    arrow: false,
    screenItems: 4,
    slideItem: 1,
    infinite: false
}

export default function Slider({ ...props }: ISliderProps) {
    const settings = { ...defaultSettings, ...props };

    return (
        <div className={`${styles.main}`}>
            <Container {...settings}></Container>
        </div>
    )
}