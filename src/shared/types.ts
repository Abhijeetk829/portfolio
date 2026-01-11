export interface SubRoute {
  title: string;
  path: string;
}

export interface NavItem {
  title: string;
  path: string;
  children?: SubRoute[];
}

export interface NavData {
  navigation: NavItem[];
}

export const Themes = {
  Light: "Light",
  Dark: "Dark",
} as const;

export type Themes = (typeof Themes)[keyof typeof Themes];

export interface PageProps {
  className?: string;
  id?: PAGEIDS;
  styles?: React.CSSProperties;
}
