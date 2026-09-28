import styles from "./demo3.module.css";
import { Demo3Motion } from "@/components/demo3/Demo3Motion";
import { FloatingMenu } from "@/components/demo3/FloatingMenu";
import { SiteHeader } from "@/components/demo3/SiteHeader";
import { Demo3HomeContact, Demo3HomeFooter } from "@/components/demo3/Demo3HomeEnding";
import { Demo3FlowSection, Demo3GatewaySection, Demo3HeroSection, Demo3InterviewSection, Demo3NewsSection, Demo3PartnerSection, Demo3ServicesSection, Demo3SolutionSection, Demo3StatsSection, Demo3StrengthSection, Demo3TickerSection } from "@/components/demo3/HomeSections";

export default function Demo3Home(){return <main className={styles.page} id="top">
  <Demo3Motion/><SiteHeader className="demo3UnifiedHeader"/>
  <Demo3HeroSection/><Demo3TickerSection/><Demo3StatsSection/><Demo3PartnerSection/>
  <Demo3StrengthSection/><Demo3SolutionSection/><Demo3ServicesSection/><Demo3FlowSection/>
  <Demo3InterviewSection/><Demo3GatewaySection/><Demo3NewsSection/>
  <Demo3HomeContact/><Demo3HomeFooter/><FloatingMenu/>
</main>}
