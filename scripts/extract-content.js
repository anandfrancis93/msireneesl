const fs = require('fs');
const path = require('path');

// Pages and their content descriptions for the chatbot
const websiteContent = {
  siteName: "Ms. Irene ESL Portfolio",
  siteDescription: "Professional portfolio website for Ms. Irene, an ESL teacher with over 13 years of experience in Administration, Customer Service, Training, and ESL Teaching.",

  pages: {
    home: {
      title: "Home",
      path: "/home",
      content: `
        Ms. Irene's ESL Teaching Portfolio - The Art of Language
        Established 2012

        Tagline: Bridging cultures through expert English instruction. A research-backed approach to mastering communication.

        Teaching Philosophy Summary:
        Education is not just about transferring knowledge; it is about igniting a curiosity that lasts a lifetime. My approach combines rigorous academic standards with a deep empathy for the learner's journey.

        Core Approaches:
        - Communicative Approach: Language lives in interaction. Focus on real-world usage, moving beyond textbooks to authentic, meaningful communication.
        - Cultural Intelligence: Understanding a language means understanding its culture. Lessons integrate cultural nuances for true intercultural competence.

        Services Offered:
        1. Private Tutoring - $50 per session
           - One-on-One Instruction
           - Bespoke lessons tailored to specific goals (academic, professional, or personal)
           - Features: Custom Syllabus, Flexible Timing, Detailed Feedback

        2. Conversation Seminar - $30 per session
           - Small Group Practice (Max 4 Students)
           - Guided discussions on complex topics to improve fluency, vocabulary, and confidence
           - Features: Current Events, Peer Interaction

        3. Mastery Course - $150 full course
           - Intensive Program
           - Multi-week deep dive into specific language skills (Academic Writing or Business English)
           - Features: Certificate, Course Materials, Final Assessment

        Experience Highlights:
        - Academic Foundation: Master's in TESOL (In Progress), Bachelor's in Education, Psychology specialization
        - 13+ Years Teaching Experience across 5+ countries
        - 1000+ Students Mentored
        - Specialized in ESL & Business English
        - Curriculum Development Expert

        Statistics:
        - 13+ Years Teaching
        - 5 Countries
        - 1000+ Students
        - 100% Satisfaction

        Testimonials:
        - Isabella M. (Student): "Ms. Irene changed my vision about grammar and writing because she taught me with love."
        - Sarah T. (Student): "Ms. Irene's teaching style is incredibly effective. I have seen a remarkable improvement in my English skills."
        - Sarah L-M. (Supervisor): "Irene is an excellent teacher who believes in really teaching students. She is always willing to try new methods."
        - Daniel L. (Student): "Learning English with Ms. Irene has been a game-changer for me. Her dedication boosted my confidence."
      `
    },

    aboutMe: {
      title: "About Me",
      path: "/about-me",
      content: `
        About Ms. Irene - Professional Profile

        Biography:
        My name is Irene. I am from New Delhi, India. I have over 13 years of work experience in Administration, Customer Service, Training, and ESL Teaching. I have traveled to different countries teaching students and prospective ESL Teachers.

        I currently live in the USA, where I am studying to be a trained TESOL teacher. My journey has been defined by a passion for connecting with people from diverse backgrounds and empowering them through language.

        Portfolio Mission:
        "To demonstrate my commitment to student-centered learning, cultural responsiveness, and evidence-based teaching practices that empower language learners to achieve their goals."

        Teaching Philosophy Core Beliefs:
        - Effective language learning occurs when students are at the center of the instructional process
        - Every learner presents unique needs, skills, and experiences
        - Essential to customize teaching strategies to address individual variances
        - Language and culture are intrinsically linked
        - Integrate cultural awareness within language instruction
        - Promote intercultural competence

        Teaching Approaches:
        1. Communicative: Real-world communication and functional language use through authentic interactions
        2. Task-Based: Practical tasks that prompt students to use English in real-world situations
        3. Inclusive: A supportive environment where humor and connection encourage risk-taking

        Highlights:
        - Lesson Plans: Comprehensive plans demonstrating communicative language teaching
        - Book Reports: In-depth analysis and reflections on influential TESOL literature
        - Philosophy: Detailed statement and action research case studies
        - Experience: 13+ years of teaching across multiple countries
        - Portfolio: Instructional materials and innovative teaching projects
        - Testimonials: Feedback highlighting the impact of teaching methods
      `
    },

    professionalExperience: {
      title: "Professional Experience",
      path: "/professional-experience",
      content: `
        Professional Experience

        Tabs/Categories:
        - TESOL Roles
        - Other Experience
        - Professional Development
        - CV & Contact

        Professional experience details available on this page including teaching positions, administrative roles, and career development history.
      `
    },

    teachingCurriculum: {
      title: "Teaching & Curriculum",
      path: "/teaching-curriculum",
      content: `
        Teaching & Curriculum

        Categories:
        - Teaching Experience
        - Lesson Plans
        - Curriculum Development

        Details about teaching methodologies, curriculum design, and instructional materials developed by Ms. Irene.
      `
    },

    teachingPhilosophy: {
      title: "Teaching Philosophy",
      path: "/teaching-philosophy",
      content: `
        Teaching Philosophy

        Core Belief: Language learning combines cognitive processes with social, emotional, and experiential journeys.

        Key Principles:
        - Student-centered instruction
        - Cultural responsiveness
        - Evidence-based teaching practices
        - Communicative language teaching
        - Task-based learning
        - Inclusive classroom environment
      `
    },

    researchScholarship: {
      title: "Research & Scholarship",
      path: "/research-scholarship",
      content: `
        Research & Scholarship

        Categories:
        - Research
        - Book Reports
        - Presentations
        - Assessment

        Academic work, research papers, book analyses, and professional presentations by Ms. Irene.
      `
    },

    workExperience: {
      title: "Work Experience",
      path: "/work-experience",
      content: `
        Work Experience

        13+ years of professional experience including:
        - ESL Teaching positions
        - Administration roles
        - Customer Service
        - Training and Development

        Experience spans multiple countries and diverse educational settings.
      `
    },

    portfolio: {
      title: "Portfolio",
      path: "/portfolio",
      content: `
        Portfolio

        Collection of:
        - Teaching materials
        - Lesson plans
        - Curriculum samples
        - Instructional projects
        - Educational resources
      `
    },

    tesol: {
      title: "TESOL",
      path: "/tesol",
      content: `
        TESOL (Teaching English to Speakers of Other Languages)

        Subpages:
        - Book Reports: Analysis of TESOL literature and educational texts
        - Lesson Plans: Detailed lesson plans for ESL instruction
        - Test Technical Manual: Assessment and testing materials

        Ms. Irene is currently pursuing a Master's in TESOL.
      `
    },

    bookReports: {
      title: "Book Reports",
      path: "/tesol/book-reports",
      content: `
        Book Reports

        In-depth analysis and reflections on influential TESOL literature and educational texts.
      `
    },

    lessonPlans: {
      title: "Lesson Plans",
      path: "/tesol/lesson-plans",
      content: `
        Lesson Plans

        Comprehensive lesson plans demonstrating communicative language teaching approaches and task-based learning methodologies.
      `
    },

    testManual: {
      title: "Test Technical Manual",
      path: "/tesol/test-manual",
      content: `
        Test Technical Manual

        Assessment materials, testing guidelines, and evaluation frameworks for ESL instruction.
      `
    },

    blog: {
      title: "Blog",
      path: "/blog",
      content: `
        Blog

        Articles and posts about ESL teaching, language learning, and educational insights.
      `
    },

    testimonials: {
      title: "Testimonials",
      path: "/testimonials",
      content: `
        Testimonials

        Feedback and reviews from students, colleagues, and supervisors about Ms. Irene's teaching.

        Featured testimonials include praise for her teaching methods, dedication, and positive impact on students' language learning journeys.
      `
    },

    contact: {
      title: "Contact",
      path: "/contactus",
      content: `
        Contact

        Contact form to reach Ms. Irene for:
        - Tutoring inquiries
        - Professional collaboration
        - Speaking engagements
        - General questions

        Form fields: Name, Email, Subject, Message
      `
    },

    resume: {
      title: "Resume",
      path: "/resume",
      content: `
        Resume

        Download Ms. Irene's professional resume/CV with detailed education, experience, and qualifications.
      `
    }
  },

  quickFacts: {
    name: "Ms. Irene",
    origin: "New Delhi, India",
    currentLocation: "USA",
    yearsExperience: "13+",
    studentsCount: "1000+",
    countriesTaught: "5+",
    currentStudy: "Master's in TESOL",
    specializations: ["ESL Teaching", "Business English", "Curriculum Development", "Teacher Training"],
    services: ["Private Tutoring ($50/session)", "Conversation Seminar ($30/session)", "Mastery Course ($150)"],
    contactPage: "/contactus"
  }
};

// Write the content to a JSON file
const outputPath = path.join(__dirname, '..', 'src', 'data', 'website-content.json');

// Ensure the data directory exists
const dataDir = path.dirname(outputPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(websiteContent, null, 2));

console.log('Website content extracted successfully to:', outputPath);
