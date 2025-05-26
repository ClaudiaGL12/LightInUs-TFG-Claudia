export interface Tema {
    id: number;
    name: string;
    description: string;
    content: string;
    tipo_id: string;
    isFavorited?: boolean; // esta propiedad no viene del backend, la marcamos en Angular
}