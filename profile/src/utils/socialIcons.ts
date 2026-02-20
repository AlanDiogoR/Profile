import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

export const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: BsInstagram,
} as const;

export type SocialIconKey = keyof typeof socialIconMap;
