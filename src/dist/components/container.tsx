import { MouseEvent } from "react"
import styles from "../styles/container.module.css"

export default function Container({ ...settings }: ISliderProps) {
    const containerStyle: React.CSSProperties = {
        gridAutoFlow: "column",
        gridGap: "1rem",
        gridTemplateColumns: `repeat(${settings.children?.length}, calc(${100 / settings.screenItems!}% - 1rem))`
    }

    const beginDrag = (event: MouseEvent<HTMLDivElement>) => {

    }

    const onDragging = (event: MouseEvent<HTMLDivElement>) => {
        
    }

    return (
        <div
            className={`${styles.slick_container}`}
            style={containerStyle}
            onMouseDown={beginDrag}
        >
            {settings.children}
        </div>
    )
}