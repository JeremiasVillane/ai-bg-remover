import { Features, Hero, Pricing } from "../components";
import Layout from "./Layout";

export const LandingPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Pricing />
    </Layout>
  );
};
