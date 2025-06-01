import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CourseGrid from "@/components/CourseGrid";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      <Header />
      <HeroSection />
      <CourseGrid />
      <StatsSection />
    </div>
  );
};

export default Index;
