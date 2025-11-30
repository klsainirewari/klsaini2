import { Fund, Testimonial, Service } from './types';

export const TOP_FUNDS: Fund[] = [
  {
    id: 1,
    name: "Quant Small Cap Fund Direct Plan-Growth",
    category: "Small Cap",
    returns3Yr: 46.5,
    risk: "Very High"
  },
  {
    id: 2,
    name: "Nippon India Small Cap Fund Direct-Growth",
    category: "Small Cap",
    returns3Yr: 38.2,
    risk: "Very High"
  },
  {
    id: 3,
    name: "HDFC Mid-Cap Opportunities Fund Direct-Growth",
    category: "Mid Cap",
    returns3Yr: 32.1,
    risk: "High"
  },
  {
    id: 4,
    name: "ICICI Prudential Bluechip Fund Direct-Growth",
    category: "Large Cap",
    returns3Yr: 21.8,
    risk: "Moderate"
  },
  {
    id: 5,
    name: "Parag Parikh Flexi Cap Fund Direct-Growth",
    category: "Flexi Cap",
    returns3Yr: 24.5,
    risk: "High"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Jaipur",
    image: "https://picsum.photos/100/100?random=1",
    text: "Mr. Kanaram has excellent market knowledge. My portfolio has grown significantly under his guidance. The SIP planning was perfect for my retirement goals."
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi",
    image: "https://picsum.photos/100/100?random=2",
    text: "The service is very transparent. I started with a small SIP and now I am confident in equity markets. Highly recommend his services."
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ahmedabad",
    image: "https://picsum.photos/100/100?random=3",
    text: "Great advice on SWP for my parents. The regular income setup was smooth and hassle-free. Trustworthy financial partner."
  }
];

export const SERVICES: Service[] = [
  {
    title: "SIP (Systematic Investment Plan)",
    description: "Invest small amounts regularly to build wealth over time. Power of compounding works best here.",
    icon: "TrendingUp"
  },
  {
    title: "SWP (Systematic Withdrawal Plan)",
    description: "Generate a regular income stream from your investments, ideal for post-retirement needs.",
    icon: "DollarSign"
  },
  {
    title: "Portfolio Review",
    description: "Comprehensive analysis of your existing investments to optimize returns and minimize risk.",
    icon: "PieChart"
  },
  {
    title: "Tax Saving (ELSS)",
    description: "Save taxes under Section 80C while creating wealth through Equity Linked Savings Schemes.",
    icon: "Shield"
  }
];

export const CONTACT_INFO = {
  name: "Kanaram Saini",
  arn: "ARN-254674",
  mobile: "7206770673",
  email: "Kanheya@live.com",
  aum: "1.7 CR+",
  signupLink: "https://zfunds.in/visiting-card/487ceaee-9660-40f5-9bac-352008e518b4"
};