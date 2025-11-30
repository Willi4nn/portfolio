import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import SocialLink from '../ui/social-link';

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-10 border-t border-white/10 bg-transparent py-16"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <h2 className="mb-12 justify-center text-center text-3xl font-bold text-white">
          Meus {''} <span className="text-cyan-500">Contatos</span>
        </h2>
        <div className="flex items-center gap-5">
          <SocialLink
            href="https://github.com/Willi4nn"
            icon={SiGithub}
            borderColor="white"
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/willian-psilva"
            icon={SiLinkedin}
            borderColor="blue-500"
            label="LinkedIn"
          />
          <SocialLink
            href="mailto:willianpereirasilva69@gmail.com"
            icon={SiGmail}
            borderColor="red-500"
            label="Gmail"
          />
          <SocialLink
            href="https://wa.me/5534999903558"
            icon={SiWhatsapp}
            borderColor="green-500"
            label="WhatsApp"
          />
        </div>
      </div>
    </section>
  );
}
