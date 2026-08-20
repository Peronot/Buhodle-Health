export const navigation = [
  {
    label: 'About Buhodle',
    items: [
      'Welcome',
      'About us',
      'Memberships & Partners',
      'Strategic Goals',
      'Organizational Structure',
      'Accreditation',
    ],
  },
  {
    label: 'Academics',
    items: [
      'Diploma In Laboratory',
      'Diploma In Midwifery',
      'Diploma In Nursing',
      'Diploma In Pharmacology',
      'Diploma In Nutrition',
    ],
  },
  {
    label: 'Admissions',
    items: ['Admission Requirements', 'Program Fees', 'Apply Now'],
  },
  {
    label: 'Research',
    items: ['Publications', 'Conferences'],
  },
  {
    label: 'Centers',
    items: [
      'Laboratory Center',
      'Demonstration Rooms',
      'Library and Study Facilities',
      'Conference Hall',
      'Clinical Partnerships',
    ],
  },
  {
    label: 'Students',
    items: [
      'Orientation Week',
      'Academic Calendar',
      'Campus Events',
      'Announcements',
      'Student Organizations',
      'Awards & Scholarships',
      'Alumni Organization',
      'Student Exchange',
    ],
  },
  {
    label: 'Media',
    items: ['News'],
  },
]

export function slugify(value) {
  return value.toLowerCase().replaceAll('&', 'and').replaceAll(' ', '-')
}

export function findPageBySlug(slug) {
  for (const group of navigation) {
    if (slugify(group.label) === slug) {
      return {
        group: group.label,
        title: group.label,
      }
    }

    const item = group.items.find((entry) => slugify(entry) === slug)

    if (item) {
      return {
        group: group.label,
        title: item,
      }
    }
  }

  return null
}
