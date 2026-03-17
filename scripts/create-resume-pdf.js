import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function wrapText(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if (current.length + word.length + 1 <= maxChars) {
      current += (current ? ' ' : '') + word;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

// A4: 595.28 x 841.89 points
const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_LEFT = 50;
const MARGIN_RIGHT = 50;
const MARGIN_TOP = 48;
const MARGIN_BOTTOM = 48;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;
const MAX_CHARS_PER_LINE = 78; // Safe width so text doesn't touch right edge
const LINE_HEIGHT = 13;
const SECTION_GAP = 10;

function ensurePage(state) {
  if (state.y < MARGIN_BOTTOM) {
    state.page = state.pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    state.y = PAGE_HEIGHT - MARGIN_TOP;
  }
}

function drawSectionTitle(state, font, boldFont, title) {
  ensurePage(state);
  const primary = rgb(0.075, 0.58, 0.535);
  state.page.drawRectangle({
    x: MARGIN_LEFT,
    y: state.y - 2,
    width: 4,
    height: 13,
    color: primary,
  });
  state.page.drawText(title, {
    x: MARGIN_LEFT + 10,
    y: state.y,
    size: 11,
    font: boldFont,
    color: rgb(0.12, 0.12, 0.12),
  });
}

async function createResumePdf() {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const primary = rgb(0.075, 0.58, 0.535);

  const state = {
    pdfDoc,
    page: pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]),
    y: PAGE_HEIGHT - MARGIN_TOP,
  };

  // === HEADER ===
  state.page.drawText('DAWA GURUNG', {
    x: MARGIN_LEFT,
    y: state.y,
    size: 22,
    font: boldFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  state.y -= 24;

  state.page.drawText('Creative Lead | Website Design • Branding • Product Design', {
    x: MARGIN_LEFT,
    y: state.y,
    size: 10,
    font,
    color: primary,
  });
  state.y -= 15;

  const contactLine = 'Denver, Colorado 80110  •  gurungdava@gmail.com';
  state.page.drawText(contactLine, {
    x: MARGIN_LEFT,
    y: state.y,
    size: 9,
    font,
    color: rgb(0.45, 0.45, 0.45),
  });
  state.y -= 22;

  // Header underline
  state.page.drawLine({
    start: { x: MARGIN_LEFT, y: state.y },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: state.y },
    thickness: 0.5,
    color: rgb(0.88, 0.88, 0.88),
  });
  state.y -= 18;

  // === PROFESSIONAL SUMMARY ===
  drawSectionTitle(state, font, boldFont, 'PROFESSIONAL SUMMARY');
  state.y -= LINE_HEIGHT + 5;

  const summaryParagraphs = [
    'Creative Lead with 10+ years driving digital solutions in website design, branding, and product design. I craft user-centered experiences that connect brands with audiences through clear strategy, visual storytelling, and attention to detail.',
    'I integrate AI into creative and technical workflows for innovative, efficient, and user-centric outcomes. Expertise in prompt engineering for high-quality design assets and content ideation; implementation of AI APIs (Anthropic Claude, OpenAI, Google Cloud AI, Adobe Sensei) across web design and product development—optimizing automated layout generation, image enhancement, and dynamic branding. I apply ethical AI practices with focus on accessibility, inclusivity, privacy, and bias mitigation.',
    'Core delivery: Custom web development, Shopify, WordPress, UI/UX design, Figma and Adobe Suite—delivering end-to-end projects from concept to launch. Based in Denver, Colorado. Serving clients across the United States. Available for full-time, contract, and freelance opportunities.',
  ];

  for (const para of summaryParagraphs) {
    const lines = wrapText(para, MAX_CHARS_PER_LINE);
    for (const line of lines) {
      ensurePage(state);
      state.page.drawText(line, { x: MARGIN_LEFT, y: state.y, size: 9, font, color: rgb(0.22, 0.22, 0.22) });
      state.y -= LINE_HEIGHT;
    }
    state.y -= 4;
  }
  state.y -= SECTION_GAP;

  // === EXPERIENCE ===
  drawSectionTitle(state, font, boldFont, 'EXPERIENCE');
  state.y -= LINE_HEIGHT + 5;

  const experiences = [
    {
      title: 'Creative Lead',
      company: 'Yartung LLC',
      location: 'Denver, CO',
      period: 'Oct 2023 – Present',
      bullets: [
        'End-to-end custom web solutions: design systems and high-fidelity mockups, UX/UI and branding, custom front-end and backend development, DevOps and hosting configuration, and on-brand graphics—delivered as a cohesive, scalable product.',
        'Leading creative direction for digital projects and brand initiatives.',
        'Crafting strategic AI prompts to unlock generative AI potential for content, design, and creative workflows.',
        'WordPress development, CMS and content strategy, template customization, and site management.',
        'Mobile optimization, responsive design, cross-browser testing, and quality assurance.',
        'Collaborative ideation with stakeholders; quality control and design consistency; industry trend integration and best practices.',
      ],
    },
    {
      title: 'Product Designer',
      company: 'SomeDesign Inc',
      location: 'Remote, NY',
      period: 'May 2021 – Sep 2023',
      bullets: [
        'Designed UI components for AI-powered reports and dashboards; conducted usability testing and user research to inform design decisions.',
        'Created storyboards, user flows, and interactive prototypes in Figma; iterated on designs based on stakeholder and user feedback.',
      ],
    },
    {
      title: 'UX/UI Designer',
      company: 'Modelwise.ai',
      location: 'Colorado',
      period: 'Feb 2022 – May 2022',
      bullets: [
        'Performed usability testing and heuristic evaluation; developed UI designs, visual hierarchy, wireframes, and low-fidelity prototypes.',
        'Conducted user research and contributed to persona development to align product with user needs.',
      ],
    },
    {
      title: 'Web Designer & IT Support',
      company: 'Faith B. Church',
      location: 'Queens, NY',
      period: 'Jun 2017 – Aug 2019',
      bullets: [
        'Managed web content creation and updates; provided technical troubleshooting and inventory and asset management support.',
      ],
    },
  ];

  for (const exp of experiences) {
    ensurePage(state);
    state.page.drawText(exp.title, { x: MARGIN_LEFT, y: state.y, size: 10, font: boldFont, color: rgb(0.1, 0.1, 0.1) });
    state.y -= 12;

    ensurePage(state);
    const metaLine = `${exp.company}  |  ${exp.location}  |  ${exp.period}`;
    state.page.drawText(metaLine, {
      x: MARGIN_LEFT,
      y: state.y,
      size: 8,
      font,
      color: rgb(0.45, 0.45, 0.45),
    });
    state.y -= 14;

    for (const bullet of exp.bullets) {
      const lines = wrapText(bullet, MAX_CHARS_PER_LINE - 2);
      for (let i = 0; i < lines.length; i++) {
        ensurePage(state);
        if (i === 0) state.page.drawText('•', { x: MARGIN_LEFT, y: state.y, size: 9, font, color: primary });
        state.page.drawText(lines[i], { x: MARGIN_LEFT + 10, y: state.y, size: 8, font, color: rgb(0.28, 0.28, 0.28) });
        state.y -= 11;
      }
      state.y -= 2;
    }
    state.y -= 6;
  }
  state.y -= 4;

  // === SKILLS ===
  drawSectionTitle(state, font, boldFont, 'SKILLS');
  state.y -= LINE_HEIGHT + 5;

  const skillsLine1 = 'UI/UX Design • Graphic Design • Web Design • WordPress • Shopify • Figma • Adobe XD, Illustrator, Photoshop • HTML, CSS, JavaScript';
  const skillsLine2 = 'Prompt Engineering • AI API Integration (Anthropic Claude, OpenAI, Google Cloud AI, Adobe Sensei) • Git • Google Workspace • MS Office • SEO • Analytics • Project Management • Photography • Slack, Trello, Basecamp';
  for (const line of wrapText(skillsLine1, MAX_CHARS_PER_LINE)) {
    ensurePage(state);
    state.page.drawText(line, { x: MARGIN_LEFT, y: state.y, size: 8, font, color: rgb(0.3, 0.3, 0.3) });
    state.y -= 11;
  }
  for (const line of wrapText(skillsLine2, MAX_CHARS_PER_LINE)) {
    ensurePage(state);
    state.page.drawText(line, { x: MARGIN_LEFT, y: state.y, size: 8, font, color: rgb(0.3, 0.3, 0.3) });
    state.y -= 11;
  }
  state.y -= SECTION_GAP;

  // === LANGUAGES ===
  ensurePage(state);
  state.page.drawText('Languages: ', { x: MARGIN_LEFT, y: state.y, size: 8, font: boldFont, color: rgb(0.2, 0.2, 0.2) });
  state.page.drawText('English (Fluent), Nepali (Expert), Hindi (Fluent)', {
    x: MARGIN_LEFT + 55,
    y: state.y,
    size: 8,
    font,
    color: rgb(0.3, 0.3, 0.3),
  });
  state.y -= 22;

  // === EDUCATION ===
  drawSectionTitle(state, font, boldFont, 'EDUCATION');
  state.y -= LINE_HEIGHT + 5;

  const educations = [
    { degree: "Associate's in Computer Science & Information System", school: 'CUNY LaGuardia', period: '2016 – 2019' },
    { degree: "Bachelor's in Mass Communications & Media Studies", school: 'Tribhuvan University', period: '2008 – 2012' },
  ];
  for (const edu of educations) {
    const degreeLines = wrapText(edu.degree, MAX_CHARS_PER_LINE);
    for (const line of degreeLines) {
      ensurePage(state);
      state.page.drawText(line, { x: MARGIN_LEFT, y: state.y, size: 9, font: boldFont, color: rgb(0.15, 0.15, 0.15) });
      state.y -= 12;
    }
    ensurePage(state);
    state.page.drawText(`${edu.school}  |  ${edu.period}`, { x: MARGIN_LEFT, y: state.y, size: 8, font, color: rgb(0.45, 0.45, 0.45) });
    state.y -= 24;
  }
  state.y -= 4;

  // === CERTIFICATIONS ===
  drawSectionTitle(state, font, boldFont, 'CERTIFICATIONS');
  state.y -= LINE_HEIGHT + 5;

  ensurePage(state);
  state.page.drawText('UX/UI Design (Credential)  •  JavaScript (SoloLearn)', {
    x: MARGIN_LEFT,
    y: state.y,
    size: 8,
    font,
    color: rgb(0.3, 0.3, 0.3),
  });

  const pdfBytes = await pdfDoc.save();
  const outPath = path.join(__dirname, '..', 'public', 'resume.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log('Created professional resume.pdf at', outPath);
}

createResumePdf().catch(console.error);
