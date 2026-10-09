# Software engineer portfolio

A minimal, multi-page Astro portfolio. The content is sample text until you replace it with accurate details.

## Edit content

Editable text and image filenames live in `src/data/`:

| File | Used for |
| --- | --- |
| `profile.json` | Name, introduction, contact links, images, Kochi clock, and optional resume PDF |
| `projects.json` | Projects and optional source/demo links |
| `experience.json` | Roles and impact points |
| `education.json` | Qualifications |
| `stack.json` | One technology list on Work |
| `posts.json` | Writing entries with optional external article links |

List order is display order. Keep descriptions short and put the most relevant entries first. Required fields and links are checked during the build. Omit optional links until they have real destinations; do not use `""` or `"#"`.

The portrait, its frame, and the footer illustration live in `src/assets/images/`. Set their filenames and the portrait description in `profile.json`; Astro processes the image files during the build. The footer clock uses the `location` and `timeZone` fields. Contact icons use `email` and the LinkedIn/GitHub `social` entries in the same file.

The `/resume` page assembles experience and education from their existing JSON files. To add a PDF download, place it in `public/` and set `"resumeUrl": "/resume.pdf"`; external PDF URLs also work. The download link stays hidden until configured.

## Pages

`/` is About. `/work` combines projects, one tech stack list, and writing. `/experience` is Background, combining roles and education. `/resume` provides a concise summary. The design uses Inter and Geist Mono from Google Fonts.

## Development

```sh
npm install
npm run dev -- --background
```

Manage the background server with `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop`.

```sh
npm run build
```

The existing Tailwind and React setup remains in the project. The current pages render as static Astro HTML without client-side React code.
