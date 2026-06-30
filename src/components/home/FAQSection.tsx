'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { ScrollReveal } from './ScrollReveal';

const FAQS = [
  {
    question: 'Does root canal treatment hurt?',
    answer:
      'Modern root canal treatment is performed under local anaesthesia and is no more uncomfortable than getting a filling. Most patients report feeling relief from the pain caused by the infection.',
  },
  {
    question: 'How often should I visit the dentist?',
    answer:
      'We recommend a check-up and professional cleaning every six months. Regular visits help prevent problems before they start and keep your smile healthy.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer:
      'We accept most major dental insurance plans. Please contact our clinic with your policy details, and we will verify your coverage before your appointment.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer:
      'Your first visit includes a comprehensive oral examination, professional cleaning, and a discussion of your dental health goals. We take the time to understand your needs and answer any questions.',
  },
  {
    question: 'Do you treat children?',
    answer:
      'Yes, we welcome patients of all ages. Our team is experienced in making children feel comfortable and building positive dental habits from an early age.',
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group py-2">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-[0.98rem] font-medium text-text-main transition-colors duration-200 hover:text-accent"
        aria-expanded={open}
      >
        {question}
        <motion.span
          className="shrink-0 text-lg text-text-muted"
          aria-hidden="true"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        >
          +
        </motion.span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pt-1">
            <p className="max-w-2xl text-sm leading-[1.9] text-text-muted">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="section-frame bg-highlight py-[4.5rem] lg:py-24" aria-label="Frequently asked questions">
      <div className="container-main">
        <ScrollReveal>
          <div className="section-intro">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-copy">Answers to the questions we hear most often.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-12 max-w-3xl" delay={0.2}>
          <div className="panel-surface divide-y divide-border/80 px-5 md:px-7">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-10 text-center" delay={0.3}>
          <Link href="/faq" className="button-secondary">
            View All FAQs
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
