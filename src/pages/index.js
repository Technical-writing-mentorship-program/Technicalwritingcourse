import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HandsOnCourses from "../components/academyComponent/HandsOnCourses";
import BlogSection from "../components/blogComponent/BlogSection";
import TestimonialSection from "../components/TestimonialSection/testimonial";
import Homepage from "../components/HomePage";
import Hotjar from "@hotjar/browser";
import { useEffect } from 'react';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const siteId = 6417587;
  const hotjarVersion = 6;

  useEffect(() => {
    // This only runs client-side, after the component mounts
    if (typeof window !== "undefined") {
      Hotjar.init(siteId, hotjarVersion);
    }
  }, []);
  return (
    <Layout
      title={`${siteConfig.title}`}
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
