import { z } from 'astro/zod';
import profileJson from './profile.json';
import projectsJson from './projects.json';
import experienceJson from './experience.json';
import educationJson from './education.json';
import stackJson from './stack.json';
import postsJson from './posts.json';
import achievementsJson from './achievements.json';

const text = z.string().trim().min(1);
const url = z.string().url();
const fileOrUrl = z.union([url, z.string().regex(/^\/(?!\/)/)]);
const imageFile = text.regex(/^[^/\\]+\.(?:jpe?g|png|webp)$/i);

export const profile = z.object({
  name: text,
  role: text,
  intro: text,
  about: z.array(text),
  email: z.string().email(),
  portraitSrc: imageFile,
  portraitFrameSrc: imageFile,
  portraitAlt: text,
  footerIllustrationSrc: imageFile,
  location: text,
  timeZone: text,
  resumeUrl: fileOrUrl.optional(),
  social: z.array(z.object({ platform: z.enum(['linkedin', 'github']), url }))
}).parse(profileJson);

export const projects = z.array(z.object({
  title: text,
  summary: text,
  outcome: text,
  stack: z.array(text),
  repoUrl: url.optional(),
  liveUrl: url.optional()
})).parse(projectsJson);

export const experience = z.array(z.object({
  role: text,
  company: text,
  period: text,
  highlights: z.array(text)
})).parse(experienceJson);

export const education = z.array(z.object({
  qualification: text,
  institution: text,
  period: text
})).parse(educationJson);

export const stack = z.array(text).parse(stackJson);

export const posts = z.array(z.object({
  title: text,
  summary: text,
  date: text,
  url: url.optional()
})).parse(postsJson);

export const achievements = z.array(
  z.object({
    title: text,
    organization: text,
    description: text,
    date: text,
    category: z.enum([
      'Hackathon',
      'Recognition',
      'Leadership',
      'Academic',
      'Certification',
      'Other'
    ]),
    url: url.optional()
  })
).parse(achievementsJson);
