import React from "react";
import Layout from "@theme/Layout";
import EventPage from "@site/src/components/Events/EventPage";
import { twmpMeetup1 } from "@site/src/data/events";

export default function TwmpMeetup1() {
  return (
    <Layout title={twmpMeetup1.name} description={`${twmpMeetup1.name}: ${twmpMeetup1.tagline}`}>
      <EventPage event={twmpMeetup1} />
    </Layout>
  );
}
