import {
  ShieldCheck,
  Zap,
  UserCheck,
  Wallet,
  Headphones,
  Network,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import WhyCard from './WhyCard';

const reasons = [
  { icon: ShieldCheck, title: 'Trusted Advisors', description: 'Our licensed experts provide honest, transparent advice tailored to your risk profile.' },
  { icon: Zap, title: 'Fast Claims Assistance', description: 'We guide you through the claims process to ensure quick and fair settlements.' },
  { icon: UserCheck, title: 'Personalized Solutions', description: 'Every client is unique. We design insurance plans that fit your specific needs.' },
  { icon: Wallet, title: 'Affordable Premiums', description: 'Competitive pricing without compromising on the quality and breadth of coverage.' },
  { icon: Headphones, title: 'Quick Customer Support', description: 'Reach us by phone, email, WhatsApp, or in person for prompt assistance.' },
  { icon: Network, title: 'Reliable Partner Network', description: 'We collaborate with leading underwriters to ensure financial strength and stability.' },
];

function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Why Choose Us"
          title="The Eminent Advantage"
          subtitle="We combine local expertise with global standards to deliver insurance experiences that exceed expectations."
        />
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <WhyCard
              key={reason.title}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
