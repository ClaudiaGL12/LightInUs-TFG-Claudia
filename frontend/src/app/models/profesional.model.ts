export interface Profesional {
    id: number;
    name: string;
    description: string;
    image: string;
    specialty: string;
    id_user: number;
    image_pending: string | null;
    description_pending: string | null;
    specialty_pending: string | null;
    pending_review: string | null;
}