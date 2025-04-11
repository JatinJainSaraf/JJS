import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaDiscord,
} from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export const contacts = [
  {
    name: 'Email',
    icon: <FaEnvelope />,
    url: 'mailto:jatinjainsaraf@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://linkedin.com/in/jatin-jain-saraf',
  },
  {
    name: 'X',
    icon: <FaX />,
    url: 'https://x.com/JatinJainSaraf1',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/jatinjainsaraf/',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp />,
    url: 'https://wa.me/919907593838', // replace with your number
  },
  {
    name: 'Facebook',
    icon: <FaFacebook />,
    url: 'https://www.facebook.com/JatinJainSaraf',
  },
  {
    name: 'Telegram',
    icon: <FaTelegram />,
    url: 'https://t.me/J_J_S_1',
  },
  {
    name: 'Discord',
    icon: <FaDiscord />,
    url: 'https://discord.com/users/jatinjainsaraf', // replace
  }
];
