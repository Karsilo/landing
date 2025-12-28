export type Tutor = {
    id: string;
    name: string;
    subject: string;
    specializations: string[];
    level: string;
    hourlyRate: number;
    email: string;
    phone?: string;
    bio: string;
    experience: string;
};

export const tutors: Tutor[] = [];
