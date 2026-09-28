import { FloatingMenu } from "@/components/demo2/FloatingMenu";
import { HomeIntroLoader } from "@/components/demo2/HomeIntroLoader";
import { ScrollEffects } from "@/components/demo2/ScrollEffects";
import { SiteFooter } from "@/components/demo2/SiteFooter";
import { SiteHeader } from "@/components/demo2/SiteHeader";
import { Demo2AboutSection, Demo2ContactSection, Demo2HeroSection, Demo2NewsSection, Demo2NttPartnerSection, Demo2OasysSection, Demo2OneStopSection, Demo2ProblemsSection, Demo2RecruitSection, Demo2ServicesSection, Demo2TrustSection } from "@/components/demo2/HomeSections";

export default function Demo2Home(){return <main className="demo2Home" id="top">
  <HomeIntroLoader/><SiteHeader className="demo2Header"/>
  <Demo2HeroSection/><Demo2TrustSection/><Demo2NttPartnerSection/><Demo2ProblemsSection/>
  <Demo2OneStopSection/><Demo2ServicesSection/><Demo2OasysSection/><Demo2AboutSection/>
  <Demo2RecruitSection/><Demo2NewsSection/><Demo2ContactSection/>
  <SiteFooter pageTopHref="/demo2#top"/><FloatingMenu/><ScrollEffects/>
</main>}
