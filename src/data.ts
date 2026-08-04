export interface Testimonial {
  id: string;
  avatar: string;
  alt?: string;
  stars: number;
  badge?: string;
  quote: string;
  author: string;
  childInfo: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  theme: 'red' | 'orange' | 'green' | 'purple';
}

export interface Struggle {
  id: string;
  title: string;
  description: string;
  image: string;
  alt?: string;
  tag: string;
}

export interface ThriveMetric {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

export interface ProgramClass {
  id: string;
  title: string;
  age: string;
  description: string;
  bgClass: string;
  textClass: string;
  btnClass: string;
  badge: string;
  image: string;
  alt?: string;
  perfectFor?: string[];
}

export interface Space {
  id: string;
  title: string;
  image: string;
  alt?: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  alt?: string;
  badge?: string;
}

// High-quality children and music themed images from Unsplash
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    avatar: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a65ee14fddfeb1aa912dca8.png',
    alt: 'Jocelyn Wong, Kindermusik parent in Ipoh',
    stars: 5,
    badge: '🟣 Started at 6 Months',
    quote: '"Starting at six months, Kindermusik nurtured my child\'s natural sense of rhythm, curiosity, and love for music through joyful everyday experiences."',
    author: '-Jocelyn Wong,',
    childInfo: 'Parent of Qian Qian, 2 years old'
  },
  {
    id: 't2',
    avatar: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a66fea19eb8e1b1cc5404d6.png',
    alt: 'Mee Ling, Kindermusik parent in Ipoh',
    stars: 5,
    badge: '🟣 Started 3 Years Old',
    quote: '"Kindermusik made learning part of our everyday life. Shaun now sings, listens, and stays focused with confidence, while every class inspires joyful learning that continues naturally at home."',
    author: '-Mee Ling,',
    childInfo: 'Parent of Shaun Koh, 6 years old'
  },
  {
    id: 't3',
    avatar: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a65e9e8847bbd8a64e4d8b0.png',
    alt: 'Li Xuan, Kindermusik parent in Ipoh',
    stars: 5,
    badge: '🟣 Started 2 Years Old',
    quote: '"Patient teachers transformed my shy daughter into a happy, eager learner by creating a safe environment where she could grow confidently at her own pace."',
    author: '-Li Xuan,',
    childInfo: 'Parent of Luna , 7 years old'
  },
  {
    id: 't4',
    avatar: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a65ffa1fb06386ede1434f6.png',
    alt: 'Mr Kan, Kindermusik parent in Ipoh',
    stars: 5,
    badge: '🟣 Started 3 Years Old',
    quote: '"Kindermusik built a strong musical foundation, developing focus, perseverance, and confidence while preparing my children for long-term success in piano."',
    author: '-Mr Kan,',
    childInfo: 'Parent of Jyden , 12 years old'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Stronger Parent-Child Bond',
    description: 'Meaningful time together through music and play.',
    icon: 'Heart',
    theme: 'red'
  },
  {
    id: 'b2',
    title: 'Supports Holistic Development',
    description: 'Builds confidence, communication, emotions & more.',
    icon: 'Sun',
    theme: 'orange'
  },
  {
    id: 'b3',
    title: 'Research-Based Curriculum',
    description: '20+ years of proven results with thousands of families.',
    icon: 'Music',
    theme: 'green'
  },
  {
    id: 'b4',
    title: 'Caring & Experienced Teachers',
    description: 'Passionate educators who truly understand children.',
    icon: 'GraduationCap',
    theme: 'purple'
  }
];

export const STRUGGLES: Struggle[] = [
  {
    id: 's1',
    title: 'Lacking Confidence',
    description: 'Hesitates to try new experiences.',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71e26afcee90cf63d493b3.webp',
    alt: 'Shy child gaining confidence through music and movement',
    tag: 'Shy & Reserved'
  },
  {
    id: 's2',
    title: 'Struggling to Express Emotions',
    description: 'Finds it difficult to express feelings.',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71e26afcee90cf63d493b8.webp',
    alt: 'Child expressing feelings through musical play',
    tag: 'Emotional tantrums'
  },
  {
    id: 's3',
    title: 'Having Weak Social Skills',
    description: 'Needs more opportunities to connect with others.',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71e26b670a4ee783dcab8f.webp',
    alt: 'Children connecting and building social skills in Kindermusik class',
    tag: 'Hard to mix with others'
  },
  {
    id: 's4',
    title: 'Missing Quality Parent–Child Time',
    description: 'Busy schedules leave less time together.',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71e26adf32aa3e169fd9e8.webp',
    alt: 'Parent and child bonding during music class',
    tag: 'Busy working lifestyle'
  },
  {
    id: 's5',
    title: 'Not Sure How to Support Growth',
    description: 'Looking for the right guidance to build lifelong skills.',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71e26aa25930148e0ba56f.webp',
    alt: 'Children engaging in early childhood music activities',
    tag: 'Overwhelmed with options'
  }
];

export const THRIVE_METRICS: ThriveMetric[] = [
  {
    id: 'm1',
    title: 'Music',
    subtitle: 'Sparks Joy',
    icon: 'Music',
    color: 'bg-bg-purple text-brand-purple border-brand-purple/20'
  },
  {
    id: 'm2',
    title: 'Movement',
    subtitle: 'Builds Confidence',
    icon: 'FlameKindling', // Or Activity, or Footprints - let's use Footprints or Sparkles
    color: 'bg-bg-orange text-orange-500 border-orange-200'
  },
  {
    id: 'm3',
    title: 'Connection',
    subtitle: 'Creates Belonging',
    icon: 'Users',
    color: 'bg-bg-teal text-brand-teal border-brand-teal/20'
  },
  {
    id: 'm4',
    title: 'Emotional',
    subtitle: 'Development',
    icon: 'Heart',
    color: 'bg-bg-pink text-brand-pink border-brand-pink/20'
  },
  {
    id: 'm5',
    title: 'Cognitive',
    subtitle: 'Growth',
    icon: 'BrainCircuit', // Or Brain
    color: 'bg-purple-50 text-indigo-500 border-indigo-100'
  }
];

export const PROGRAM_CLASSES: ProgramClass[] = [
  {
    id: 'p1',
    title: 'Babies',
    age: '0-18 months',
    description: 'Soothe, connect & discover music together.',
    bgClass: 'bg-bg-yellow border-amber-200 text-amber-900',
    textClass: 'text-amber-800',
    btnClass: 'bg-amber-500 hover:bg-amber-600 text-white',
    badge: 'NOW ENROLLING',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a717f3dcf81b06f05d00612.webp',
    alt: 'Babies and parents exploring sensory music in Kindermusik Babies class',
    perfectFor: ['First-time Parents', 'Parent & Child Bonding', 'Sensory Development']
  },
  {
    id: 'p2',
    title: 'Toddlers',
    age: '18moths - 3 years', // preserved spelling typo from image "18moths"
    description: 'Explore, move & express with joy.',
    bgClass: 'bg-bg-teal border-emerald-200 text-brand-teal',
    textClass: 'text-teal-800',
    btnClass: 'bg-brand-teal hover:bg-brand-teal-hover text-white',
    badge: 'NOW ENROLLING',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a7188d8497cd89d24f74262.webp',
    alt: 'Toddlers moving and playing instruments in Kindermusik Toddlers class',
    perfectFor: ['Active Exploration', 'Early Speech & Movement', 'Social & Emotional Growth']
  },
  {
    id: 'p3',
    title: 'Preschoolers',
    age: '3 - 5 years',
    description: 'Learn, imagine & grow through music.',
    bgClass: 'bg-bg-pink border-pink-200 text-pink-900',
    textClass: 'text-pink-800',
    btnClass: 'bg-brand-pink hover:bg-pink-600 text-white',
    badge: 'NOW ENROLLING',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a7188d8497cd89d24f7425e.webp',
    alt: 'Preschool children singing and learning rhythm in Kindermusik Preschoolers class',
    perfectFor: ['Creative Expression', 'Independent Learning', 'Rhythm & Coordination']
  },
  {
    id: 'p4',
    title: 'Kindy & Beyond',
    age: '5+ years',
    description: 'Build skills, confidence & a love of music.',
    bgClass: 'bg-bg-purple border-purple-200 text-purple-900',
    textClass: 'text-purple-800',
    btnClass: 'bg-brand-purple hover:bg-brand-purple-hover text-white',
    badge: 'NOW ENROLLING',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a7188d8cf81b06f05f23a36.webp',
    alt: 'Young children playing musical instruments in Kindy & Beyond class',
    perfectFor: ['Instrumental Foundation', 'Confidence & Focus', 'Musical Literacy']
  }
];

export const GALLERY_MOMENTS = [
  'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71d823a25930148ef9a78f.webp',
  'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db90ee7ca3d1c41cce0a.webp',
  'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db920629193ed5aba86b.webp',
  'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db93c8f2b5f1cfd3ca44.webp',
  'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db92df32aa3e16959f60.webp',
  'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db90ee7ca3d1c41cce05.webp',
  'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db90df32aa3e169596fd.webp',
  'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71d823670a4ee783c9c79a.webp',
  'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db920629193ed5aba864.webp',
  'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db90fcee90cf63c5413a.webp'
];

export const LEARNING_SPACES: Space[] = [
  {
    id: 'ls1',
    title: 'Children Corner',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db92ee7ca3d1c41cce53.webp',
    alt: 'Kindermusik Children Corner learning space environment'
  },
  {
    id: 'ls2',
    title: 'Parents Corner',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db93670a4ee783cefde2.webp',
    alt: 'Kindermusik Parents Corner comfortable waiting area'
  },
  {
    id: 'ls3',
    title: 'Service Counter',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db9093ccff2840bdc5f3.webp',
    alt: 'Kindermusik with Agape service counter and reception'
  },
  {
    id: 'ls4',
    title: 'Music Room',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db92fcee90cf63c54160.webp',
    alt: 'Purpose-built Kindermusik music room classroom environment'
  },
  {
    id: 'ls5',
    title: 'Waiting Area',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db900629193ed5aba846.webp',
    alt: 'Welcoming waiting area for parents and children'
  },
  {
    id: 'ls6',
    title: 'Piano Stair',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71db9493ccff2840bdc643.webp',
    alt: 'Interactive piano staircase in Kindermusik learning center'
  }
];

export const MS_CLARICE = {
  name: 'Ms Clarice Koo',
  role: 'Founder & Principal Educator',
  experience: '20+ Years of Experience',
  bio: 'With over 20 years of experience in music education and working with children and families, Ms Clarice leads the educational vision of Kindermusik with Agape.\n\nHer passion is to nurture every child\'s potential through the joy of music, movement, and meaningful connections.',
  image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71d823a25930148ef9a621.webp',
  alt: 'Kindermusik educator teaching children - Ms Clarice Koo, founder and principal educator'
};

export const OTHER_TEACHERS: Teacher[] = [
  {
    id: 'ot1',
    name: 'Sandy',
    role: 'Kindermusik Educator',
    badge: '🎵 Music & Storytelling',
    bio: 'Creates joyful music experiences that inspire confidence and curiosity.',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71d823c8f2b5f1cfc55e3b.webp',
    alt: 'Kindermusik educator Sandy teaching music and storytelling'
  },
  {
    id: 'ot2',
    name: 'Xin Yuan',
    role: 'Kindermusik Educator',
    badge: '❤️ Warm & Patient',
    bio: 'Creates warm, engaging classes where children learn through joyful music and movement.',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71d8230629193ed5a3eb2d.webp',
    alt: 'Kindermusik educator Xin Yuan guiding children in music and movement'
  },
  {
    id: 'ot3',
    name: 'Fun',
    role: 'Kindermusik Educator',
    badge: '🌈 Creativity & Confidence',
    bio: 'Guides children to build confidence, creativity, and lasting social connections.',
    image: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71d823ee7ca3d1c4173ed2.webp',
    alt: 'Kindermusik educator Fun leading creative music activities'
  }
];

export const RECOGNITION_BADGES = {
  accredited: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71e26c0629193ed5b7dd34.webp',
  topProgram: 'https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a71e26afcee90cf63d493ae.webp',
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What age can my child start Kindermusik?",
    answer: "Our programmes begin from infancy (0–18 months) and continue through age 7, with classes specially designed for every stage of your child's development."
  },
  {
    question: "Does my child need any musical experience?",
    answer: "Not at all. Kindermusik is designed for children of all abilities. No previous music experience is required."
  },
  {
    question: "Do parents join the class?",
    answer: "Yes! Parents actively participate in our classes for younger children, creating meaningful bonding experiences while learning and growing together. As children reach age 3 and above, parents gradually step back as they become more confident and independent."
  },
  {
    question: "What if my child is shy or cries during class?",
    answer: "That's completely normal. Our caring educators create a warm and welcoming environment where children can participate comfortably at their own pace."
  },
  {
    question: "How long is each class?",
    answer: "Most classes last between 45 and 60 minutes depending on your child's age group and programme."
  },
  {
    question: "Can we attend a trial class first?",
    answer: "Absolutely. We encourage every family to experience a trial class before deciding on enrolment."
  },
  {
    question: "What should my child wear?",
    answer: "Comfortable clothing that allows your child to move, dance, and explore freely is all they need. For hygiene purposes, all children are required to wear socks during class."
  },
  {
    question: "How do I choose the right programme?",
    answer: "Simply click \"Book a Free Trial Class\" or contact us on WhatsApp. We'll recommend the programme that's best suited to your child's age and developmental stage."
  }
];

