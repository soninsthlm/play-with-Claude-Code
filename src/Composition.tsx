import {
  AbsoluteFill,
  interpolate,
  Easing,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

const LINES = [
  "Ideas begin in silence.",
  "They grow in the spaces between words.",
  "Each line a breath.",
  "Each pause a heartbeat.",
  "Until clarity arrives.",
];

const BLUE = "#3b82f6";
const BG = "#0a0a0f";

export const MyComposition = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stagger = Math.round(1.8 * fps); // 54 frames between each line
  const fadeDuration = Math.round(1.6 * fps); // 48 frames to fade in

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        justifyContent: "center",
        alignItems: "center",
        fontFamily,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        {LINES.map((line, i) => {
          const start = Math.round(1 * fps) + i * stagger;
          const opacity = interpolate(
            frame,
            [start, start + fadeDuration],
            [0, 1],
            {
              easing: Easing.bezier(0.25, 0.1, 0.25, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );
          const translateY = interpolate(
            frame,
            [start, start + fadeDuration],
            [12, 0],
            {
              easing: Easing.bezier(0.25, 0.1, 0.25, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateY(${translateY}px)`,
                color: "white",
                fontSize: i === 0 ? 52 : 36,
                fontWeight: i === 0 ? 700 : 400,
                letterSpacing: i === 0 ? -1 : 0,
              }}
            >
              {line}
            </div>
          );
        })}

        {/* Blue accent line */}
        {(() => {
          const accentStart =
            Math.round(1 * fps) + LINES.length * stagger + Math.round(0.5 * fps);
          const accentOpacity = interpolate(
            frame,
            [accentStart, accentStart + fadeDuration],
            [0, 1],
            {
              easing: Easing.bezier(0.25, 0.1, 0.25, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );
          const accentWidth = interpolate(
            frame,
            [accentStart, accentStart + fadeDuration],
            [0, 80],
            {
              easing: Easing.bezier(0.25, 0.1, 0.25, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );
          return (
            <div
              style={{
                opacity: accentOpacity,
                width: accentWidth,
                height: 3,
                backgroundColor: BLUE,
                borderRadius: 2,
                marginTop: 12,
              }}
            />
          );
        })()}
      </div>
    </AbsoluteFill>
  );
};
