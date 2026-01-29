export type BackgroundTokens = {
  base: string;
  linearFrom: string;
  linearTo: string;
  glow: string;
  headerOverlayFrom: string;
  headerOverlayTo: string;
  border: string;
  logoText: string;
  iconBg: string;
  iconBorder: string;
};

export const backgroundTheme: { light: BackgroundTokens; dark: BackgroundTokens } = {
  dark: {
    base: "#050505",
    linearFrom: "#0d0d0d",
    linearTo: "#050505",
    glow: "rgba(255,255,255,0.06)",
    headerOverlayFrom: "rgba(0,0,0,0.70)",
    headerOverlayTo: "rgba(0,0,0,0.35)",
    border: "rgba(255,255,255,0.08)",
    logoText: "rgba(255,255,255,0.92)",
    iconBg: "rgba(255,255,255,0.10)",
    iconBorder: "rgba(255,255,255,0.10)",
  },
  light: {
    base: "#e6e6e6",
    linearFrom: "#f0f0f0",
    linearTo: "#e4e4e4",
    glow: "rgba(0,0,0,0.05)",
    headerOverlayFrom: "rgba(255,255,255,0.85)",
    headerOverlayTo: "rgba(240,240,240,0.70)",
    border: "rgba(0,0,0,0.08)",
    logoText: "rgba(17,17,17,0.92)",
    iconBg: "rgba(0,0,0,0.06)",
    iconBorder: "rgba(0,0,0,0.08)",
  },
};
