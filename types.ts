
export interface EducationItem {
    degree: string;
    details: string;
    period: string;
    result: string;
    ongoing?: boolean;
}

export interface ExperienceItem {
    company: string;
    location: string;
    period: string;
    title: string;
    points: string[];
}

export interface CertificationItem {
    name: string;
    issuer: string;
    year: number;
}

export interface VolunteeringItem {
    event: string;
    year: number;
    description: string;
}

export interface AchievementItem {
    description: string;
    context: string;
}

export interface ResearchItem {
    title: string;
    description: string;
}
