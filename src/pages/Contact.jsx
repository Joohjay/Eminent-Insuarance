import PageHero from '../components/PageHero';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import MetaTags from '../components/MetaTags';

function Contact() {
  const schema = {
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'InsuranceAgency',
      name: 'Eminent Insurance Solutions',
      telephone: '+255-781-585-781',
      email: 'eminentinsurance@hotmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dar es Salaam',
        addressCountry: 'TZ',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+255-781-585-781',
        contactType: 'customer service',
        availableLanguage: ['English', 'Swahili'],
      },
    },
  };

  return (
    <>
      <MetaTags
        title="Contact Us"
        description="Get in touch with Eminent Insurance Solutions for professional insurance advice and quotes in Dar es Salaam, Tanzania."
        path="/contact"
        schema={schema}
      />
      <PageHero
        title="Contact Us"
        subtitle="Reach out to our team for expert insurance advice, quotes, or claims support. We are here to help."
      />
      <ContactSection />
      <CTASection />
    </>
  );
}

export default Contact;
