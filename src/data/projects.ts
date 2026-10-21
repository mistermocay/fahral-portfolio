export type Project = {
  id: string
  number: string
  title: string
  subtitle: string
  category: 'Business Systems' | 'Digital Experience' | 'Creative'
  year: string
  description: string
  image: string
  gallery?: string[]
  accent: string
  tags: string[]
  href: string
}

export const projects: Project[] = [
  {
    id: 'payroll',
    number: '01',
    title: 'Payroll Management System',
    subtitle: 'For PT Master Artha Kharisma',
    category: 'Business Systems',
    year: '2026',
    description: 'A web-based payroll workspace for organizing employee records and supporting payroll administration. Screens shown are portfolio previews; confidential employee details should remain hidden.',
    image: 'https://i.vgy.me/RD2dth.png',
    gallery: ['https://i.vgy.me/GyWtvY.png'],
    accent: '#171612',
    tags: ['Employee records', 'Payroll workflow', 'Administration'],
    href: '#contact',
  },
  {
    id: 'unit-documentation',
    number: '02',
    title: 'Unit Documentation System',
    subtitle: 'For PT Master Artha Kharisma',
    category: 'Business Systems',
    year: '2026',
    description: 'A digital documentation interface designed to organize unit-related files and make information easier to browse and manage.',
    image: 'https://i.vgy.me/cnYA9S.png',
    gallery: ['https://i.vgy.me/uCIZtl.png'],
    accent: '#171612',
    tags: ['Document management', 'Dashboard', 'Digital archive'],
    href: '#contact',
  },
  {
    id: 'sigudang',
    number: '03',
    title: 'SIGUDANG',
    subtitle: 'Inventory management system',
    category: 'Business Systems',
    year: '2026',
    description: 'A warehouse information system concept featuring stock summaries and inventory activity in a single operational dashboard.',
    image: 'https://i.vgy.me/KooHUp.png',
    gallery: ['https://i.vgy.me/MRFhiT.png'],
    accent: '#171612',
    tags: ['Inventory', 'Warehouse', 'Stock monitoring'],
    href: '#contact',
  },
  {
    id: 'luma',
    number: '04',
    title: 'LUMA',
    subtitle: 'Live album for event guests',
    category: 'Digital Experience',
    year: '2026',
    description: 'A live photo-sharing experience for events, designed to collect guest moments in one place and display them in an aesthetic Polaroid-inspired frame.',
    image: 'https://i.vgy.me/aLZD7u.png',
    gallery: ['https://i.vgy.me/H75xk5.png'],
    accent: '#171612',
    tags: ['Live photo sharing', 'Event experience', 'Polaroid frames'],
    href: '#contact',
  },
  {
    id: 'wedding',
    number: '05',
    title: 'Interactive Wedding Invitation',
    subtitle: 'Fabi & Oca — digital invitation',
    category: 'Digital Experience',
    year: '2026',
    description: 'A digital wedding invitation experience combining a considered visual presentation with interactive details for guests.',
    image: 'https://i.vgy.me/aRu5q4.png',
    gallery: ['https://i.vgy.me/H75xk5.png'],
    accent: '#171612',
    tags: ['Digital invitation', 'Editorial design', 'Interactive experience'],
    href: '#contact',
  },
  {
    id: 'graphic-design',
    number: '06',
    title: 'Graphic Design',
    subtitle: 'Catalogues, posters & brochures',
    category: 'Creative',
    year: '2026',
    description: 'A selection of visual communication work across catalogues, posters, and brochures, bringing information together with clear hierarchy and visual storytelling.',
    image: 'https://i.vgy.me/tBZlHk.png',
    gallery: ['https://i.vgy.me/RDH8g3.png', 'https://i.vgy.me/OKMXDG.png'],
    accent: '#171612',
    tags: ['Catalogue', 'Poster', 'Brochure'],
    href: '#contact',
  },
]
