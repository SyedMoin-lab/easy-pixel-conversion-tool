
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProcessSection from '@/components/ProcessSection';
import InsuranceSection from '@/components/InsuranceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTASection title="GET STARTED TODAY – NO WAITLIST!" buttonText="GET STARTED" />
      <WhyChooseUsSection />
      <ProcessSection />
      <InsuranceSection />
      <CTASection title="Serving North Carolina & Surrounding Areas" buttonText="GET STARTED" />
      <TestimonialsSection />
      <CTASection title="SCHEDULE YOUR CONSULTATION" buttonText="GET STARTED" />
      <Footer />
    </div>
  );
};

export default Index;
