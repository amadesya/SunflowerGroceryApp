import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function EyeOpenedIcon() {
    return (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#652D0A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.6}
            strokeWidth={2}
            d="M21.257 13.038a1.693 1.693 0 0 0 0-2.076C19.764 9.013 16.182 5 12 5c-4.182 0-7.764 4.013-9.257 5.962a1.69 1.69 0 0 0 0 2.076C4.236 14.987 7.818 19 12 19c4.182 0 7.764-4.013 9.257-5.962Z"
        />
        <Path
            stroke="#652D0A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.6}
            strokeWidth={2}
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
    </Svg>
    );
}
