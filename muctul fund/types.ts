export interface Fund {
  id: number;
  name: string;
  category: string;
  returns3Yr: number;
  risk: 'High' | 'Very High' | 'Moderate';
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface UserSubmission {
  pan: string;
  mobile: string;
  timestamp: string;
}