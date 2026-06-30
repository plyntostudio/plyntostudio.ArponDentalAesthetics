import { HeroSection } from '@/components/home/HeroSection';
import { QuickAppointmentSection } from '@/components/home/QuickAppointmentSection';
import { FeaturedTreatmentsSection } from '@/components/home/FeaturedTreatmentsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { MeetDentistSection } from '@/components/home/MeetDentistSection';
import { SmileGalleryPreview } from '@/components/home/SmileGalleryPreview';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickAppointmentSection />
      <FeaturedTreatmentsSection />
      <WhyChooseUsSection />
      <MeetDentistSection />
      <SmileGalleryPreview />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
