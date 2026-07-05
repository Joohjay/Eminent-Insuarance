import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Partners from '../components/Partners';
import ServicesSection from '../components/ServicesSection';
import InsuranceCategories from '../components/InsuranceCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import MetaTags from '../components/MetaTags';

function Home() {
  const schema = {
    '@type': 'InsuranceAgency',
    name: 'Eminent Insurance Solutions',
    description: 'Premium insurance solutions in Dar es Salaam, Tanzania.',
    url: 'https://eminentinsurance.co.tz',
    logo: 'https://eminentinsurance.co.tz/logo.PNG',
    telephone: '+255-781-585-781',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dar es Salaam',
      addressCountry: 'TZ',
    },
    sameAs: ['https://wa.me/255781585781'],
  };

  return (
    <>
      <MetaTags
        title="Eminent Insurance Solutions"
        description="Premium insurance solutions in Dar es Salaam, Tanzania. Motor, health, life, business, travel, marine, fire, agriculture, and more."
        path="/"
        schema={schema}
      />
      <Hero />
      <Statistics />
      <Partners />
      <ServicesSection limit={8} />
      <InsuranceCategories />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}

export default Home;
