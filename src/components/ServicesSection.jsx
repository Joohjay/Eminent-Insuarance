import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HeartPulse,
  Car,
  Building2,
  Plane,
  Ship,
  Flame,
  Heart,
  Sprout,
  Users,
  Briefcase,
  HardHat,
  ShieldAlert,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Car,
    title: 'Motor Insurance',
    description: 'Comprehensive coverage for private, commercial, and fleet vehicles against accidents, theft, and third-party liability.',
    details: ['Comprehensive and third-party options', 'Accident, theft, and fire protection', 'Claims guidance from policy review to settlement'],
  },
  {
    icon: HeartPulse,
    title: 'Health Insurance',
    description: 'Quality medical cover for individuals, families, and corporate groups with access to leading healthcare providers.',
    details: ['Individual, family, and corporate plans', 'Inpatient and outpatient benefit options', 'Provider network guidance before you choose'],
  },
  {
    icon: Heart,
    title: 'Life Insurance',
    description: "Secure your loved ones' future with term life, whole life, and investment-linked policies.",
    details: ['Term and whole-life policy options', 'Family income and education protection', 'Flexible cover amounts based on your goals'],
  },
  {
    icon: Plane,
    title: 'Travel Insurance',
    description: 'Protection against trip cancellations, medical emergencies, lost baggage, and travel delays worldwide.',
    details: ['Emergency medical support while abroad', 'Trip cancellation and delay benefits', 'Lost baggage and travel document assistance'],
  },
  {
    icon: Ship,
    title: 'Marine Insurance',
    description: 'Cover for cargo, hull, and freight risks during domestic and international transit.',
    details: ['Cargo, hull, and freight risk support', 'Local and international transit cover', 'Policy matching for importers and exporters'],
  },
  {
    icon: Flame,
    title: 'Fire Insurance',
    description: 'Safeguard residential and commercial properties against fire, lightning, and allied perils.',
    details: ['Residential and commercial property cover', 'Fire, lightning, and allied peril options', 'Asset valuation support before placement'],
  },
  {
    icon: Building2,
    title: 'Business Insurance',
    description: 'Tailored packages protecting business assets, liability, employees, and operational continuity.',
    details: ['Property, liability, and employee protection', 'Packages for SMEs and larger businesses', 'Risk review before recommending cover'],
  },
  {
    icon: HardHat,
    title: 'Engineering Insurance',
    description: 'Coverage for contractors, plant, machinery, and erection risks during construction and operation.',
    details: ['Contractors all-risk and erection cover', 'Plant and machinery protection', 'Support for project-specific policy wording'],
  },
  {
    icon: ShieldAlert,
    title: 'Liability Insurance',
    description: "Protect your business from legal liabilities including public liability, employer's liability, and professional indemnity.",
    details: ['Public and employer liability options', 'Professional and product liability guidance', 'Cover limits shaped around your exposure'],
  },
  {
    icon: Sprout,
    title: 'Agriculture Insurance',
    description: 'Shield crops and livestock from natural disasters, pests, and adverse weather conditions.',
    details: ['Crop and livestock protection options', 'Weather and natural disaster risk support', 'Cover designed for farms and agribusinesses'],
  },
  {
    icon: Users,
    title: 'Group Insurance',
    description: 'Employee benefit schemes including medical, life, and personal accident covers for organizations.',
    details: ['Medical, life, and accident benefits', 'Plans for teams and organizations', 'Employee-focused policy administration support'],
  },
  {
    icon: Briefcase,
    title: 'Professional Indemnity',
    description: 'Defense against claims arising from professional negligence, errors, or omissions.',
    details: ['Negligence, errors, and omissions cover', 'Defense cost support where applicable', 'Suitable for consultants and specialist firms'],
  },
];

function ServicesSection({ limit, linkToServices = false }) {
  const location = useLocation();
  const [openService, setOpenService] = useState(null);
  const displayed = limit ? services.slice(0, limit) : services;

  useEffect(() => {
    if (linkToServices) {
      return;
    }

    const requestedService = new URLSearchParams(location.search).get('service');
    const matchingService = services.find((service) => service.title === requestedService);

    if (matchingService) {
      setOpenService(matchingService.title);
    }
  }, [linkToServices, location.search]);

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <SectionHeading
          label="What We Offer"
          title="Comprehensive Insurance Solutions"
          subtitle="From personal protection to complex commercial risks, we provide insurance products designed around your needs."
        />
        <div className="services-grid">
          {displayed.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
              isOpen={openService === service.title}
              learnMoreTo={
                linkToServices
                  ? `/services?service=${encodeURIComponent(service.title)}#services`
                  : undefined
              }
              onToggle={() =>
                setOpenService((current) => (current === service.title ? null : service.title))
              }
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
