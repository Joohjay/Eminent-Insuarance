import PageHero from '../components/PageHero';
import ServicesSection from '../components/ServicesSection';
import InsuranceCategories from '../components/InsuranceCategories';
import CTASection from '../components/CTASection';
import MetaTags from '../components/MetaTags';

function Services() {
  const servicesList = [
    'Motor Insurance', 'Health Insurance', 'Life Insurance', 'Travel Insurance',
    'Marine Insurance', 'Fire Insurance', 'Business Insurance', 'Engineering Insurance',
    'Liability Insurance', 'Agriculture Insurance', 'Group Insurance', 'Professional Indemnity',
  ];

  const schema = {
    '@type': 'CollectionPage',
    name: 'Insurance Services',
    description: 'Explore our comprehensive insurance services in Tanzania.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Insurance Services',
      itemListElement: servicesList.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
  };

  return (
    <>
      <MetaTags
        title="Our Services"
        description="Explore our comprehensive insurance services in Tanzania: motor, health, life, business, travel, marine, fire, agriculture, and more."
        path="/services"
        schema={schema}
      />
      <PageHero
        title="Our Insurance Services"
        subtitle="From personal protection to complex commercial risks, discover insurance solutions designed around your needs."
      />
      <ServicesSection />
      <InsuranceCategories />
      <CTASection />
    </>
  );
}

export default Services;
