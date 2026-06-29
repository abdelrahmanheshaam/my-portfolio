export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  colors: string[];
  liveUrl?: string;
  description: string;
  details: string;
  isComingSoon?: boolean; 
}

export interface EducationItem {
  year: string;
  school: string;
  description: string;
}

export interface ReelItem {
  id: string;
  videoUrl: string;
  thumbnail: string;
  label: string;
}

// Added ColorSwatch interface for color palette items
export interface ColorSwatch {
  name: string;
  hex: string;
  description: string;
}

// Added DesignSystem interface for the AI-generated design identity
export interface DesignSystem {
  visualLanguage: {
    aesthetic: string;
    keywords: string[];
    description: string;
  };
  palette: ColorSwatch[];
  typography: {
    heading: string;
    body: string;
    mono: string;
    rationale: string;
  };
  uiElements: {
    buttons: string;
    cards: string;
    borders: string;
  };
  animations: {
    gsap: string;
    threejs: string;
  };
  layout: string;
}
