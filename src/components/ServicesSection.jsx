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
  { icon: Car, title: 'Motor Insurance', description: 'Comprehensive coverage for private, commercial, and fleet vehicles against accidents, theft, and third-party liability.' },
  { icon: HeartPulse, title: 'Health Insurance', description: 'Quality medical cover for individuals, families, and corporate groups with access to leading healthcare providers.' },
  { icon: Heart, title: 'Life Insurance', description: 'Secure your loved ones’ future with term life, whole life, and investment-linked policies.' },
  { icon: Plane, title: 'Travel Insurance', description: 'Protection against trip cancellations, medical emergencies, lost baggage, and travel delays worldwide.' },
  { icon: Ship, title: 'Marine Insurance', description: 'Cover for cargo, hull, and freight risks during domestic and international transit.' },
  { icon: Flame, title: 'Fire Insurance', description: 'Safeguard residential and commercial properties against fire, lightning, and allied perils.' },
  { icon: Building2, title: 'Business Insurance', description: 'Tailored packages protecting business assets, liability, employees, and operational continuity.' },
  { icon: HardHat, title: 'Engineering Insurance', description: 'Coverage for contractors, plant, machinery, and erection risks during construction and operation.' },
  { icon: ShieldAlert, title: 'Liability Insurance', description: 'Protect your business from legal liabilities including public liability, employer’s liability, and professional indemnity.' },
  { icon: Sprout, title: 'Agriculture Insurance', description: 'Shield crops and livestock from natural disasters, pests, and adverse weather conditions.' },
  { icon: Users, title: 'Group Insurance', description: 'Employee benefit schemes including medical, life, and personal accident covers for organizations.' },
  { icon: Briefcase, title: 'Professional Indemnity', description: 'Defense against claims arising from professional negligence, errors, or omissions.' },
];

function ServicesSection({ limit }) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <section className="section section-alt">
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
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
