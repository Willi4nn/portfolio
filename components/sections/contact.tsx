'use client';
import { motion } from 'motion/react';
import { SectionTitle } from '../ui/section-title';
import SocialLink from '../ui/social-link';

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20">
      <div className="mx-auto flex flex-col items-center">
        <SectionTitle highlighted="Contatos">Meus</SectionTitle>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <SocialLink
              href="https://github.com/Willi4nn"
              icon="github"
              borderColor="white"
              label="GitHub"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <SocialLink
              href="https://www.linkedin.com/in/willian-psilva"
              icon="linkedin"
              borderColor="blue-500"
              label="LinkedIn"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <SocialLink
              href="mailto:willianpereirasilva69@gmail.com"
              icon="gmail"
              borderColor="red-500"
              label="Gmail"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <SocialLink
              href="https://wa.me/5534999903558"
              icon="whatsapp"
              borderColor="green-500"
              label="WhatsApp"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
