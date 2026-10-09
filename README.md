# Hafeefa P C — Software Engineer Portfolio

A minimal, multi-page portfolio built with **Astro**, showcasing my experience in AI/ML engineering, Generative AI, full-stack development, selected projects, and achievements.

The website is designed to present my technical background, professional experience, and projects in a clean, accessible format. All portfolio content is maintained separately from the page components, making updates straightforward.

## Features

- **About:** Introduction, profile image, contact links, and location.
- **Work:** Selected projects, technology stack, and writing entries.
- **Background:** Professional experience and education.
- **Resume:** Resume information with an optional PDF download and embedded PDF preview.
- **Achievements:** A dedicated section for hackathon wins, recognition, and other accomplishments, if configured in the project.
- **Responsive design:** A minimal interface designed for different screen sizes.
- **ATS-friendly resume:** A downloadable PDF resume can be provided for recruiters.
- **Maintainable content:** Portfolio information is organized in JSON files.
- **Local time display:** The footer displays the time for the configured location.

## Tech Stack

- **Framework:** Astro
- **UI:** Tailwind CSS
- **Frontend:** HTML, CSS, JavaScript, React setup
- **Content:** JSON
- **Typography:** Inter and Geist Mono
- **Deployment:** Compatible with static hosting platforms that support Astro builds

## Portfolio Content

Editable text and content configuration files live in `src/data/`.

| File | Purpose |
|---|---|
| `profile.json` | Name, introduction, contact information, social links, profile images, location, timezone, and optional resume PDF URL |
| `projects.json` | Project descriptions, technology stacks, and optional GitHub or live-demo links |
| `experience.json` | Professional roles, responsibilities, and impact |
| `education.json` | Academic qualifications and achievements related to education |
| `stack.json` | Technology list displayed on the Work page |
| `posts.json` | Writing entries and optional external article links |
| `achievements.json` | Optional achievement data, if the achievements section has been implemented |

The order of entries in the JSON files determines their display order. Keep the most relevant information first, use concise descriptions, and include only accurate, verifiable claims.

Required fields and links are validated during the build. For optional links, omit the field until a real destination is available. Avoid empty strings and placeholder links such as `"#"`.

## Selected Projects

The portfolio can highlight projects across Generative AI, machine learning, and blockchain development.

### LifeScience-AI Agent

An AI-powered research assistant that uses retrieval-augmented generation (RAG) to answer domain-specific questions using curated biomedical literature and regulatory documents.

**Technologies:** Python, Generative AI, RAG, LLMs

### Credit Card Fraud Detection

A machine learning pipeline for identifying fraudulent credit card transactions in a highly imbalanced dataset, using model comparison, sampling techniques, and threshold optimization.

**Technologies:** Python, Scikit-learn, XGBoost, SMOTE, PCA

### Aurum-Chain

A blockchain-powered gold traceability platform designed to track gold from mine to market using smart contracts and transparent ownership records.

**Technologies:** Next.js, Solidity, Scaffold-ETH 2, Tailwind CSS, Shadcn UI, Anon Aadhaar, Arweave

Project descriptions, repository URLs, live demos, and technology lists should be maintained in `src/data/projects.json`.

## Experience

### AI/ML Engineer — Tata Consultancy Services (TCS)

**November 2025 – Present | Kochi, India**

Work involving LLM-powered agents, AI safety and reliability evaluation, empirical analysis of hallucinations and adversarial robustness, and data processing pipeline development.

### Full Stack Developer Intern — Kireap

**August 2024 – January 2025 | Bangalore, India**

Contributed to a Flutter application, backend API integration, API testing, and research into token systems and blockchain traceability.

### Frontend Developer Intern — Xplor

**December 2023 – February 2024 | Kochi, India**

Worked on interactive website components, REST API integration, frontend testing, and responsive user interfaces using React.

Update `src/data/experience.json` whenever professional responsibilities or roles change. Only publish project details that can be shared publicly.

## Achievements

- Winner — ETHIndia 2024.
- Winner — BuildOnChain 2024, hosted by LayerEdu at NIT Calicut.
- Selected among the Top 100 coders by the MuLearn Community during Huddle Global 2023.
- Organized the IIC Project Presentation Event in October 2023.

If achievements are managed through a dedicated JSON file, keep the data in `src/data/achievements.json` and render it through the relevant page component.

## Education

**Cochin University of Science and Technology (CUSAT)**  
B.Tech. in Information Technology | November 2021 – April 2025  
GPA: 9.6/10

**PKMM Higher Secondary School**  
Higher Secondary Education, Science | June 2019 – March 2021  
Percentage: 98.5%

## Images and Profile

The portrait, portrait frame, and footer illustration are stored in:

`src/assets/images/`

Configure the image filenames and portrait description in `src/data/profile.json`. Astro processes these image assets during the build.

The footer clock uses the `location` and `timeZone` fields. Contact links and icons use the `email` and LinkedIn/GitHub entries in the profile configuration.

## Resume PDF Setup

To provide a downloadable resume and embedded PDF preview:

1. Export the latest resume as a PDF.
2. Place the file in the `public/` directory.
3. Configure the `resumeUrl` field in `src/data/profile.json`.

For example:

```json
{
  "resumeUrl": "/Hafeefa-PC-Resume.pdf"
}
```

Make sure the filename matches the actual PDF filename, including capitalization.

The `/resume` page should reference the configured PDF URL to display the preview and download link. If the PDF is not configured, the download link can remain hidden.

## Pages

| Route | Purpose |
|---|---|
| `/` | About and profile |
| `/work` | Projects, technology stack, and writing |
| `/experience` | Professional background and education |
| `/resume` | Resume information and PDF preview, if configured |
| `/achievements` | Achievements, if the dedicated page has been implemented |

The existing navigation and page components determine which routes are available. If you add a new page, update the navigation configuration in `src/layouts/Layout.astro` as needed.

## Getting Started

### Prerequisites

- Node.js compatible with the project's dependencies
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

To run the server in the background, if supported by the project's scripts:

```bash
npm run dev -- --background
```

Use the project's available Astro scripts to check status, view logs, or stop a background development server.

### Build for production

```bash
npm run build
```

Run the production build before deploying to identify missing fields, invalid links, and other build-time issues.

## Project Structure

```text
.
├── public/
│   └── Hafeefa-PC-Resume.pdf
├── src/
│   ├── assets/
│   │   └── images/
│   ├── data/
│   │   ├── profile.json
│   │   ├── projects.json
│   │   ├── experience.json
│   │   ├── education.json
│   │   ├── stack.json
│   │   ├── posts.json
│   │   └── achievements.json
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── work.astro
│       ├── experience.astro
│       ├── resume.astro
│       └── achievements.astro
├── package.json
└── README.md
```

This is a representative structure. Keep the actual filenames and folders consistent with the repository; optional files such as `achievements.json` and `achievements.astro` must be created before they can be used.

## Deployment

Build the site using:

```bash
npm run build
```

Deploy the generated static site from Astro's configured build output directory to a hosting provider that supports static websites. Verify that all page routes, images, external links, and the resume PDF work correctly after deployment.

## Maintenance

- Keep professional experience and project descriptions accurate.
- Put the most relevant projects first.
- Verify repository and demo URLs before publishing.
- Avoid publishing confidential employer information.
- Keep the resume PDF and its configured URL synchronized.
- Run a production build after updating content or page components.

---
