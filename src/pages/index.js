import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HandsOnCourses from "../components/academyComponent/HandsOnCourses";
import BlogSection from "../components/blogComponent/BlogSection";
import TestimonialSection from "../components/TestimonialSection/testimonial";
import Homepage from "../components/HomePage";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Homepage />
        <HandsOnCourses />
        <BlogSection />
        <TestimonialSection />
      </main>
    </Layout>
  );
}
