import PageHero from '../components/PageHero';
import Statistics from '../components/Statistics';
import Partners from '../components/Partners';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';
import MetaTags from '../components/MetaTags';

function About() {
  const schema = {
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'InsuranceAgency',
      name: 'Eminent Insurance Solutions',
      description: 'Professional insurance services in Dar es Salaam, Tanzania.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dar es Salaam',
        addressCountry: 'TZ',
      },
    },
  };

  return (
    <>
      <MetaTags
        title="About Us"
        description="Learn about Eminent Insurance Solutions, our mission, values, partner network, and commitment to protecting what matters most."
        path="/about"
        schema={schema}
      />
      <PageHero
        title="About Eminent Insurance"
        subtitle="We are a trusted insurance intermediary in Tanzania, committed to delivering professional advice, tailored coverage, and exceptional claims support."
      />
      <Statistics />
      <WhyChooseUs />
      <HowItWorks />
      <Partners />
      <CTASection />
    </>
  );
}

export default About;
