import AchievmentSection from "@/components/AchievmentSection";
import CTA from "@/components/CTA";
import CurriculumComponent from "@/components/CurriculumComponent";
import FacilitiesComponent from "@/components/FacilitiesComponent";
import HomeComponent from "@/components/HomeComponent";
import NewsSection from "@/components/NewsSection";
import Question from "@/components/Question";
import ShortWelcomeTextComponent from "@/components/ShortWelcomeTextComponent";
import TestimonialScroller from "@/components/Testmonial";
import WhyEnroll from "@/components/WhyUsComponent";

export default function Home() {
  return (
    <div className="max-w-screen">

      <HomeComponent />

      <ShortWelcomeTextComponent />

      <WhyEnroll />

      <CurriculumComponent />

      <FacilitiesComponent />

      <TestimonialScroller />

      <NewsSection />

      <AchievmentSection />

      {/* Call To Action */}
      <CTA />

      <Question />
    </div>
  );
}
