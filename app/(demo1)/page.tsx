import { OfficeAdvisor } from "@/components/OfficeAdvisor";
import { ScrollEffects } from "@/components/ScrollEffects";
import { FloatingMenu } from "@/components/FloatingMenu";
import { HomeIntroLoader } from "@/components/HomeIntroLoader";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { Demo3HomeEnding } from "@/components/demo3/Demo3HomeEnding";
import { Demo3StrengthSection } from "@/components/demo3/HomeSections";
import { Demo2AboutSection, Demo2OneStopSection, Demo2ServicesSection } from "@/components/demo2/HomeSections";
import { HomeAboutSection, HomeAreaSection, HomeBrandMarquee, HomeCompanySection, HomeHeroSection, HomeNewsSection, HomeOasysSection, HomeParallaxCompanySection, HomePartnerSection, HomeRecruitSection, HomeSdgsSection, HomeServicesSection } from "@/components/home/HomeSections";

export function HomeContent({ heroMotion = "orbit" }: { heroMotion?: "orbit" | "wave" }) {
  const isDemo4 = heroMotion === "wave";
  return <main>
    {!isDemo4&&<HomeIntroLoader/>}<SiteHeader demo4={isDemo4}/><HomeHeroSection heroMotion={heroMotion}/><HomeBrandMarquee/>
    {isDemo4?<><div className="demo2Home demo4AboutAlphaScope"><Demo2AboutSection demo4/></div><Demo3StrengthSection/></>:<div className="storyStack"><HomeAboutSection/><HomePartnerSection/></div>}
    {isDemo4?<><Demo2OneStopSection demo4/><div className="demo2Home"><Demo2ServicesSection demo4/></div></>:<HomeServicesSection/>}<HomeOasysSection isDemo4={isDemo4}/>
    {!isDemo4&&<><HomeAreaSection/><HomeParallaxCompanySection/><HomeCompanySection/></>}
    <HomeRecruitSection isDemo4={isDemo4}/>{isDemo4?<HomeSdgsSection/>:<HomeNewsSection/>}
    {isDemo4?<Demo3HomeEnding whiteContact/>:<><ContactSection id="contact" animated title={<>オフィスのお困りごとを、<br/>お気軽にご相談ください。</>} description={<>機器の入れ替え、通信費の見直し、ネットワークの不調など<br/>小さなお悩みからでも丁寧にお伺いします。</>}/><SiteFooter/></>}
    <OfficeAdvisor/><FloatingMenu demo4={isDemo4}/><ScrollEffects/>
  </main>;
}

export default function Home() { return <HomeContent/>; }
