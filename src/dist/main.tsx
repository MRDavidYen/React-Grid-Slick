import React from "react";
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
    const containerStyle: React.CSSProperties = {
        gridAutoFlow: "column",
        gridGap: "1rem",
        gridTemplateColumns: `repeat(${settings.children?.length}, calc(${100 / settings.screenItems!}% - 1rem))`
    }

    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.slick_container}`} style={containerStyle}>
                {settings.children}
            </div>
        </div>
    )
}