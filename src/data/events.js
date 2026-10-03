export const twmpMeetup1 = {
  slug: "twmp-meetup-1",
  name: "TWMP Meetup 1.0",
  tagline: "The future of technical writing and open source in the age of AI",
  summary:
    "A day of talks, hands-on workshops and conversations about where documentation is heading: technical writing, open source, and how docs work in fields far beyond software, now that AI is part of the job.",

  date: "2026-10-10",
  venue: "Wema Bank Purple Academy",
  address: "48B Town Planning Way, Ilupeju",
  city: "Lagos, Nigeria",

  registrationOpens: "9:00 am",
  kickoff: "10:00 am",

  links: {
    register: "https://luma.com/zv3906yj",
    community: "https://discord.gg/UC4QEsE8",
  },

  schedule: [
    {
      start: "09:00",
      end: "10:00",
      type: "break",
      title: "Registration and check-in",
      description:
        "Find your name on the registration list at the door and collect your wristband.",
    },
    {
      start: "10:00",
      end: "10:10",
      type: "address",
      title: "Welcome address",
      speakers: ["Wisdom Nwokocha"],
      virtual: true,
    },
    {
      start: "10:10",
      end: "10:30",
      type: "lightning",
      title: "Zero-Margin Docs: The Process of Documenting Live Core Banking Systems",
      speakers: ["Ejiro Onose"],
    },
    {
      start: "10:35",
      end: "11:05",
      type: "workshop",
      title: "Documentation Is a Product: Treating Docs Like Software",
      speakers: ["Constance Etiosa"],
    },
    {
      start: "11:10",
      end: "11:40",
      type: "keynote",
      title: "The $100K+ Shift: Stop Writing Docs, Start Architecting Information Systems",
      description:
        "In the AI and Agentic era, many technical writers are feeling replaceable. Quetzalli flips that script live on stage, showing exactly how AI and agents turn \"just a writer\" into the consultant architect that companies fight to hire. She'll demo what separates a $60K applicant from a $100K+ portfolio. Walk in a writer. Walk out with the exact system to get your 6-figures.",
      speakers: ["Quetzalli Writes"],
      virtual: true,
    },
    {
      start: "11:45",
      end: "12:00",
      type: "break",
      title: "Icebreaker games and a sneak peek",
      description:
        "A Kahoot quiz on technical writing, a social media challenge where the most-engaged post about the event wins a gift, and a first look at the app the TWMP team is building.",
      speakers: ["Prince Onyeanuna"],
    },
    {
      start: "12:05",
      end: "12:25",
      type: "lightning",
      title: "The Internet Is Starting to Write Itself",
      speakers: ["Wale Olowonyo"],
    },
    {
      start: "12:30",
      end: "13:00",
      type: "workshop",
      title:
        "From Keyword to Publish-Ready: An AI-Assisted Content Workflow Fixed on Storytelling",
      speakers: ["Ifedolapo Ojo", "Praise James"],
      after: "Followed by a short community spotlight from Mercy on how to join TWMP.",
    },
    {
      start: "13:05",
      end: "13:45",
      type: "panel",
      title: "Panel discussion",
      description: "Five panelists, one conversation.",
      speakers: [
        "Peace Sandy",
        "Makinde Mercy Miracle",
        "Prince Onyeanuna",
        "Dami Oshun",
        "Mfonobong Umondia",
      ],
    },
    {
      start: "13:45",
      end: "14:00",
      type: "break",
      title: "Group photo and lunch",
      description: "Everyone in the frame, then food is served.",
    },
    {
      start: "14:05",
      end: "14:25",
      type: "lightning",
      title: "Building reusable AI skills for documentation and technical content",
      speakers: ["Emmanuella Ubokabasi Etop Essien"],
    },
    {
      start: "14:30",
      end: "15:00",
      type: "workshop",
      title:
        "Beyond AI Writing: Building an AI-Powered, Agent-Ready Documentation Pipeline",
      speakers: ["David Ozokoye"],
    },
    {
      start: "15:00",
      end: "15:10",
      type: "address",
      title: "Closing remarks",
      speakers: ["Prince Onyeanuna"],
    },
  ],

  sessionTypes: {
    keynote: {
      label: "Keynote",
      length: "30 min",
      description: "One headline talk, delivered virtually, that sets the tone for the day.",
    },
    workshop: {
      label: "Workshop",
      length: "30 min",
      description: "Hands-on sessions. Bring a laptop and expect to build or write something.",
    },
    lightning: {
      label: "Lightning talk",
      length: "20 min",
      description: "Short, focused talks on one idea, one lesson or one story.",
    },
    panel: {
      label: "Panel",
      length: "40 min",
      description: "A moderated conversation between five panelists.",
    },
    address: {
      label: "Address",
      length: "",
      description: "",
    },
  },

  speakerRoles: {
    "Prince Onyeanuna": "Host",
  },

  speakerPhotos: {
    "Wisdom Nwokocha": "/img/events/twmp-meetup-1/speakers/wisdom-nwokocha.jpg",
    "Ejiro Onose": "/img/events/twmp-meetup-1/speakers/ejiro-onose.jpg",
    "Constance Etiosa": "/img/events/twmp-meetup-1/speakers/constance-etiosa.jpg",
    "Quetzalli Writes": "/img/events/twmp-meetup-1/speakers/quetzalli-writes.jpg",
    "Prince Onyeanuna": "/img/events/twmp-meetup-1/speakers/prince-onyeanuna.jpg",
    "Wale Olowonyo": "/img/events/twmp-meetup-1/speakers/wale-olowonyo.jpg",
    "Ifedolapo Ojo": "/img/events/twmp-meetup-1/speakers/ifedolapo-ojo.jpg",
    "Praise James": "/img/events/twmp-meetup-1/speakers/praise-james.jpg",
    "Emmanuella Ubokabasi Etop Essien": "/img/events/twmp-meetup-1/speakers/emmanuella-ubokabasi-etop-essien.jpg",
    "David Ozokoye": "/img/events/twmp-meetup-1/speakers/david-ozokoye.jpg",
    "Peace Sandy": "/img/events/twmp-meetup-1/speakers/peace-sandy.jpg",
    "Makinde Mercy Miracle": "/img/events/twmp-meetup-1/speakers/makinde-mercy-miracle.jpg",
    "Dami Oshun": "/img/events/twmp-meetup-1/speakers/dami-oshun.jpg",
    "Mfonobong Umondia": "/img/events/twmp-meetup-1/speakers/mfonobong-umondia.jpg",
  },
};

export const events = [twmpMeetup1];
