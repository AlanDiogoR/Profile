import { FaWhatsapp } from 'react-icons/fa';
import { contact } from '../data/contact';

/** Botão fixo de WhatsApp (celular e desktop). */
export default function WhatsAppFab() {
  return (
    <a
      href={contact.whatsappGeneral}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-4 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-on-brand shadow-lg transition hover:brightness-110 sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp size={28} aria-hidden />
    </a>
  );
}
