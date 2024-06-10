export interface ImageChoice {
  id: string;
  buttonLabel: string;
  nextSequence: string; // Pointe vers une Sequence
}

export interface StaticImage {
  id: string;
  title?: string;
  file: string;
  soundEffect?: string; // Son déclenché à l'affichage de l'image
  choices?: ImageChoice[]; // Choix associé à l'image
}

export interface AnimatedImage {
  id: string;
  title?: string;
  files: string[]; // Tableau de fichiers d'images pour l'animation
  soundEffect?: string; // Son déclenché à l'affichage de l'image
  duration: number; // Durée de l'animation en millisecondes
  choices?: ImageChoice[]; // Choix associé à l'image
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

export interface Step {
  index: number;
  name?: string;
  sequence: Sequence;
}
