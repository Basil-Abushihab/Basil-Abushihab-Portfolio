import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/main-page/sections/hero-section/HeroSection";
import { RocketLaunchButton } from "@/main-page/sections/my-journey/components/rocket-launch-button/RocketLaunchButton";
import { MyJourney } from "@/main-page/sections/my-journey/MyJourney";
export const MainPage = () => {
  return (
    <Layout>
      <HeroSection />
      <MyJourney />
      <RocketLaunchButton />
    </Layout>
  );
};
