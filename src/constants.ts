export const TABLET_THRESHOLD = 768;
export const DESKTOP_THRESHOLD = 1200;

export enum LinkType {
  GITHUB = 'github',
  ANDROID = 'android',
  WINDOWS = 'windows',
}

export interface Project {
  route: string;
  title: string;
  subtitle: string;
  description: string[];
  links: { url: string; type: LinkType };
  qr: string | false;
  videoPosition: number;
  video: boolean;
  numberOfScreenshots: number;
  horizontal: boolean;
  process: string;
}

export const FADE_ANIMATION_DURATION = 0.3;
