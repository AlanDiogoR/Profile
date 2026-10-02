import { FaGithub } from 'react-icons/fa';

export const socialIconMap = {
  github: FaGithub,
} as const;

export type SocialIconKey = keyof typeof socialIconMap;
