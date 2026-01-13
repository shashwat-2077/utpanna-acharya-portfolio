
import type { EducationItem, ExperienceItem, CertificationItem, VolunteeringItem, AchievementItem, ResearchItem } from './types';

export const PERSONAL_INFO = {
    name: "Utpanna Acharya",
    tagline: "HR/IR Postgraduate | Labour Welfare | Employee Relations | HR Operations",
    email: "uacharya4422@gmail.com",
    phone: "+91 8118062150",
    linkedin: "https://www.linkedin.com/in/utpanna-acharya/",
    resumeLink: "/utpanna acharya resume.pdf",
};

export const ABOUT_ME = {
    p1: "As a driven and empathetic postgraduate student specializing in Industrial Relations and Personnel Management, I am passionate about creating equitable and productive workplace environments. My academic foundation and hands-on internship experiences at JSW Steel and AMNS India have equipped me with practical skills in labour law compliance, employee engagement, and welfare policy analysis.",
    p2: "I thrive on identifying challenges and formulating data-driven recommendations to enhance employee well-being and organizational effectiveness. I am eager to apply my knowledge and dedication to a challenging HR/IR role where I can contribute to fostering positive industrial relations and robust HR operations."
};

export const LOOKING_FOR = "I am actively seeking internships and full-time placements in roles focusing on Employee Relations, Labour Welfare, Personnel Management, and generalist HR Operations. I am keen to contribute to an organization that values ethical practices and employee growth.";

export const KEY_HIGHLIGHTS = [
    "Labour welfare compliance at JSW Steel",
    "Employee satisfaction survey at AMNS India",
    "Conflict Management & EI certifications",
    "Strong cultural & volunteering leadership"
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: "Masters in Industrial Relations & Personnel Management",
        details: "Berhampur University, Berhampur",
        period: "Ongoing",
        result: "CGPA 8.75/10",
        ongoing: true
    },
    {
        degree: "Bachelor of Business Administration (BBA)",
        details: "Utkal University, Bhubaneswar",
        period: "2021 – 2024",
        result: "CGPA 8.5/10"
    },
    {
        degree: "Class XII (Commerce)",
        details: "ODM Public School, Bhubaneswar",
        period: "May 2020",
        result: "81.2%"
    },
    {
        degree: "Class X",
        details: "St. Xavier’s High School, Jajpur Road",
        period: "May 2018",
        result: "83.2%"
    },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        company: "JSW Steel Limited",
        location: "Barbil, Odisha",
        period: "June 2025 – July 2025",
        title: "Labour Welfare Measures",
        points: [
            "Assessed existing welfare policies to ensure comprehensive compliance with contemporary labour laws.",
            "Conducted one-on-one interactions with workers to accurately evaluate the effectiveness of welfare policies.",
            "Identified and documented ground-level challenges related to worker welfare, safety protocols, and communication gaps.",
            "Prepared and presented a detailed report with actionable recommendations to enhance employee well-being and workplace harmony."
        ]
    },
    {
        company: "AMNS India",
        location: "Barbil, Odisha",
        period: "May 2023 – June 2023",
        title: "Employee Satisfaction Survey",
        points: [
            "Designed and implemented a comprehensive questionnaire to identify prevalent issues and areas for improvement among employees.",
            "Gained valuable insights into corporate dynamics and the practical application of HR principles in a large-scale industrial setting.",
            "Analyzed survey results to formulate and suggest targeted improvements for boosting employee morale and satisfaction.",
            "Significantly strengthened interpersonal, communication, and administrative skills through direct engagement and project ownership."
        ]
    }
];

export const RESEARCH_DATA: ResearchItem[] = [
    {
        title: "Conflict Management System (CMS) Research Paper Proposal",
        description: "Developed a research paper proposal on Conflict Management System (CMS) as part of Conflict Management coursework; received Consolation Best Paper Award in recognition of research quality and originality."
    }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
    { name: "Conflict Management", issuer: "ALISON", year: 2025 },
    { name: "Emotional Intelligence", issuer: "NPTEL (IIT Kharagpur)", year: 2025 },
    { name: "Human Resource Management", issuer: "Great Learning", year: 2024 },
    { name: "Edge Young Professionals", issuer: "TCS iON", year: 2021 },
];

export const VOLUNTEERING_DATA: VolunteeringItem[] = [
    { event: "Mio Conclave", year: 2022, description: "Represented Tata Steel, engaging with industry leaders to discuss emerging trends and build professional networks." },
    { event: "University Convocation", year: 2022, description: "Assisted in event coordination at Utkal University, gaining experience in large-scale event management and networking." },
    { event: "Millet Fest", year: 2022, description: "Promoted innovative ideas for millet consumption and sustainable food practices at an Utkal University event." },
    { event: "Women’s Hygiene Awareness", year: 2021, description: "Organized and participated in a group act and distributed sanitary napkins in the tribal village of Bhalunka with ODM Public School." },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
    { description: "1st Prize in Mono-acting and Ramp walk", context: "Utkal University" },
    { description: "2nd Prize in Painting and Extempore", context: "Utkal University" },
    { description: "State-level qualifier in WIZ National Spell Bee", context: "ODM Public School" },
    { description: "Active member of the Cultural Club Group", context: "Utkal University" },
    { description: "Voiceover for Mahashakti Foundation projects", context: "Volunteer Work" },
    { description: "Served as an Anchor during internship", context: "AMNS India" },
];

export const SKILLS_DATA: string[] = [
    "Labour Welfare", "Employee Engagement", "Survey Design & Analysis", "HR Policy Compliance", "Conflict Management", "Employee Relations", "Stakeholder Management", "Recruitment Support", "HR Documentation", "Interpersonal Communication", "Teamwork & Collaboration", "Problem Solving"
];

export const ADDITIONAL_INFO_DATA = {
    hobbies: ["Painting", "Dancing"],
    languages: ["English", "Hindi", "Odia"],
};
