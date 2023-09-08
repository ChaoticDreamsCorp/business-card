import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import portfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import portfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import portfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import portfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import portfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import portfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import portfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  ContactUrls,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Manuel Saleta',
  description: 'My resume website built with a react resume template',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello - The Name is Manuel.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Florida based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Bitstop Inc</strong> Helping build the leading Bitcoin ATM platform.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training at the gym, going with my dad to the track{' '}
        <strong className="text-stone-100">driving</strong>, Writing my next{' '}
        <strong className="text-stone-100">book</strong>, or traveling to{' '}
        <strong className="text-stone-100">the Dominican Republic</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/src/assets/Manuel_Saleta_Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `A bit about me, I moved to Miami FL when I was 12, I am fluent in english and spanish, I have a computer science degree. 
  Some of the technologies I am most comfortable with are C# .NET, ASP.NET, VueJS, and sometimes a bit of React. I am a backend specialist but moonlight as full-stack developer.`,
  aboutItems: [
    {label: 'Location', text: 'Miami, FL', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Dominican', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Driving cars, Exercising', Icon: SparklesIcon},
    {label: 'Study', text: 'Florida International University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bitstop, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'VueJs',
        level: 7,
      },
      {
        name: 'React',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'C#',
        level: 8,
      },
      {
        name: '.NET',
        level: 7,
      },
      {
        name: 'Blazor',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Kotlin',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://manuelsaleta.com',
    image: portfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2017',
    location: 'Florida International University',
    title: 'Computer Science - Application Development',
    content: <p>As a student I focused all my electives on core programming classes, such as database design, application development
      info sec, mobile development, web development and unix programming. 
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2021 - Present',
    location: 'Bitstop',
    title: 'Software Engineer Lead',
    content: (
      <ul>
        <li>
          <p>
            Worked with principal engineers to re-architect Python APIs providing real-time pricing data, replaced with
            .NET based APIs, coupled with Docker technology resulting in improved uptime and quarterly revenue by 200K.
          </p>
        </li>
        <li>
          <p>
            Lead team to create an integration and developed a new infrastructure to migrate away from hosting Cryptos
            nodes, and integrate with cloud-based Crypto Currency providers. Such as BItGO API
          </p>
        </li>
        <li>
          <p>
            Build RESTful C# APIs, to serve data to multiple JavaScript web-applications providing users with critical
            features, like ATM management, data exports, and API configurations.
          </p>
        </li>
        <li>
          <p>
            Work with senior engineers to implement load-balancing pipelines using CircleCi and Kubernetes increasing
            APIs throughput, and services uptime.
          </p>
        </li>
        <li>
          <p>
            Responsible for performing code reviews, adding integration-tests and user-manuals resulting in faster
            developer onboarding.
          </p>
        </li>
      </ul>
    ),
  },
  {
    date: '2017 - 2021',
    location: 'Amadeus Hospitality',
    title: 'Software Engineer',
    content: (
      <ul>
        <li>
          <p>
            Worked within an agile team to create API integrations for PMS like Opera, ShijiPMS and our own products
            HotSOS, and HotSOS Mobile, leading to an increase in housekeeping staff efficiency by decreasing cleaning
            time between rooms.
          </p>
        </li>
        <li>
          <p>
            Work to create their next-gen cloud based PMS system with technologies such as Angular2 for web UI, C# for
            API layer, SQL and Microsoft Azure. Was solely responsible for the Mobile development process which included
            Java, Kotlin, Objective-C for iOS.
          </p>
        </li>
      </ul>
    ),
  },
  {
    date: '2017',
    location: 'Assurant IT Solutions',
    title: 'Software Engineer Intern',
    content: (
      <ul>
        <li>
          <p>
            Worked with the VP of Technologies to rollout internal corporate-sponsored hackathons, creating web-apps to
            track all of the department POC initiatives such as Alexa Skills for interactive payment options.
          </p>
        </li>
      </ul>
    ),
  },
  {
    date: '2015 - 2017',
    location: 'Florida International University',
    title: 'Programming Tutor',
    content: (
      <ul>
        <li>
          <p>
            Worked with the computer science department to provide individualized study sessions for students seeking
            help with Database Management, web development, and programming I, II, III; leading to an increase of
            students passing finals.
          </p>
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Hey here is how to best get a hold of me!',
  items: [
    {
      type: ContactType.Email,
      text: ContactUrls.Email,
      href: 'mailto:manny2206@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Miami, FL',
      href: 'https://www.google.ca/maps/place/Miami,+FL/@25.7823843,-80.3118592,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@manny_saleta',
      href: 'https://www.instagram.com/manny_saleta/',
    },
    {
      type: ContactType.Github,
      text: 'ManuelSaleta',
      href: 'https://github.com/ManuelSaleta',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: ContactUrls.Github},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: ContactUrls.StackOverflow},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: ContactUrls.LinkedIn},
  {label: 'Instagram', Icon: InstagramIcon, href: ContactUrls.Instagram},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
