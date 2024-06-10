export interface StaticImage {
  file: string;
  soundEffect?: string; // Son déclenché à l'affichage de l'image
}

export interface AnimatedImage {
  files: string[]; // Tableau de fichiers d'images pour l'animation
  soundEffect?: string; // Son déclenché à l'affichage de l'image
  duration: number; // Durée de l'animation en millisecondes
}

export type Image = StaticImage | AnimatedImage;

export interface Music {
  name: string;
  file: string;
}

export interface Sequence {
  images: Image[];
  music: Music;
}

export interface Choice {
  name: string;
  buttonLabel: string;
  nextSequence: Sequence; // Pointe vers une Sequence
}

export interface Step {
  index: number;
  name?: string;
  sequence: Sequence;
  choices?: Choice[];
}
