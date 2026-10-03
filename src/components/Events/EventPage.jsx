import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

export function formatTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
}

export function formatDate(iso) {
  if (!iso) return "Date to be announced";
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

function isExternal(href) {
  return /^https?:\/\//.test(href);
}

function CTA({ href, children, variant = "primary" }) {
  const className = clsx(styles.cta, variant === "primary" ? styles.ctaPrimary : styles.ctaSecondary);
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link
      to={href}
      className={className}
      {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}

function useLiveSessionIndex(event) {
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    if (!event.date) return undefined;
    const check = () => {
      const now = new Date();
      const today = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
      ].join("-");
      if (today !== event.date) return setIndex(-1);
      const mins = now.getHours() * 60 + now.getMinutes();
      setIndex(
        event.schedule.findIndex((s) => mins >= toMinutes(s.start) && mins < toMinutes(s.end))
      );
    };
    check();
    const id = setInterval(check, 30000);
    return () => clearInterval(id);
  }, [event]);
  return index;
}

function Hero({ event }) {
  return (
    <header className={styles.hero}>
      <div className={clsx("container", styles.heroInner)}>
        <div className={styles.heroText}>
          <p className={styles.heroKicker}>Technical Writing Mentorship Program presents</p>
          <h1 className={styles.heroTitle}>{event.name}</h1>
          <p className={styles.heroTagline}>{event.tagline}</p>
          <div className={styles.ctaRow}>
            <CTA href={event.links.register}>Register on Luma</CTA>
            <CTA href="#schedule" variant="secondary">
              See the schedule
            </CTA>
          </div>
        </div>

        <dl className={styles.factSheet}>
          <div>
            <dt>Date</dt>
            <dd>{formatDate(event.date)}</dd>
          </div>
          <div>
            <dt>Doors open</dt>
            <dd>{event.registrationOpens}</dd>
          </div>
          <div>
            <dt>We kick off</dt>
            <dd>{event.kickoff}</dd>
          </div>
          <div>
            <dt>Where</dt>
            <dd>
              {event.venue}
              <span className={styles.factSub}>
                {[event.address, event.city].filter(Boolean).join(", ")}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

function Formats({ event }) {
  const order = ["keynote", "workshop", "lightning", "panel"];
  return (
    <section className={styles.section} aria-labelledby="formats">
      <div className="container">
        <div className={styles.sectionHead}>
          <h2 id="formats">What the day looks like</h2>
          <p>{event.summary}</p>
        </div>
        <div className={styles.formats}>
          {order.map((key) => {
            const t = event.sessionTypes[key];
            const count = event.schedule.filter((s) => s.type === key).length;
            return (
              <div key={key} className={clsx(styles.format, styles[`tone_${key}`])}>
                <div className={styles.formatTop}>
                  <span className={styles.formatCount}>{count}</span>
                  <span className={styles.formatLength}>{t.length}</span>
                </div>
                <h3>{count === 1 ? t.label : `${t.label}s`}</h3>
                <p>{t.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Schedule({ event }) {
  const live = useLiveSessionIndex(event);
  return (
    <section className={clsx(styles.section, styles.scheduleSection)} id="schedule" aria-labelledby="schedule-title">
      <div className="container">
        <div className={styles.sectionHead}>
          <h2 id="schedule-title">Schedule</h2>
          <p>
            All times are West Africa Time. Sessions marked virtual are streamed into the room, so
            you&apos;ll still watch them with everyone else.
          </p>
        </div>

        <ol className={styles.timeline}>
          {event.schedule.map((s, i) => {
            const type = event.sessionTypes[s.type];
            const isBreak = s.type === "break";
            return (
              <li
                key={`${s.start}-${s.title}`}
                className={clsx(styles.slot, isBreak && styles.slotBreak, i === live && styles.slotLive)}
                aria-current={i === live ? "true" : undefined}
              >
                <div className={styles.slotTime}>
                  <time>{formatTime(s.start)}</time>
                  <span className={styles.slotEnd}>to {formatTime(s.end)}</span>
                </div>
                <div className={styles.slotBody}>
                  <div className={styles.slotMeta}>
                    {type && type.label && (
                      <span className={clsx(styles.badge, styles[`tone_${s.type}`])}>{type.label}</span>
                    )}
                    {s.virtual && <span className={styles.virtual}>Virtual</span>}
                    {i === live && <span className={styles.liveTag}>Happening now</span>}
                  </div>
                  <h3 className={styles.slotTitle}>{s.title}</h3>
                  {s.speakers && s.speakers.length > 0 && (
                    <p className={styles.slotSpeakers}>{s.speakers.join(", ")}</p>
                  )}
                  {s.description && <p className={styles.slotDesc}>{s.description}</p>}
                  {s.after && <p className={styles.slotAfter}>{s.after}</p>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Speakers({ event }) {
  const people = useMemo(() => {
    const seen = new Map();
    event.schedule.forEach((s) => {
      (s.speakers || []).forEach((name) => {
        if (seen.has(name)) return;
        const type = event.sessionTypes[s.type];
        const role = (event.speakerRoles || {})[name]
          ? event.speakerRoles[name]
          : s.type === "break"
            ? "App demo"
            : s.type === "panel"
            ? "Panelist"
            : s.type === "address" || !type
            ? s.title
            : type.label;
        seen.set(name, { name, role, virtual: !!s.virtual });
      });
    });
    return [...seen.values()];
  }, [event]);

  const photos = event.speakerPhotos || {};
  const initials = (name) =>
    name
      .split(/\s+/)
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <section className={styles.section} aria-labelledby="speakers">
      <div className="container">
        <div className={styles.sectionHead}>
          <h2 id="speakers">Speakers</h2>
        </div>
        <ul className={styles.speakers}>
          {people.map((p) => (
            <li key={p.name} className={styles.speaker}>
              {photos[p.name] ? (
                <img
                  className={styles.avatar}
                  src={useBaseUrl(photos[p.name])}
                  alt=""
                  loading="lazy"
                  width="72"
                  height="72"
                />
              ) : (
                <span className={styles.avatar} aria-hidden="true">
                  {initials(p.name)}
                </span>
              )}
              <span className={styles.speakerName}>{p.name}</span>
              <span className={styles.speakerRole}>
                {p.role}
                {p.virtual ? ", virtual" : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIn({ event }) {
  const steps = [
    {
      title: "Register on Luma",
      text: "Grab your spot through the event page on Luma. Your name goes on our attendee list.",
    },
    {
      title: "Check in at the door",
      text: `Registration opens at ${event.registrationOpens}. We'll find your name on the list and tick you off.`,
    },
    {
      title: "Collect your wristband",
      text: "Keep it on all day. It's how the team knows you're registered when food and drinks go out.",
    },
  ];
  return (
    <section className={clsx(styles.section, styles.checkin)} aria-labelledby="attend">
      <div className="container">
        <div className={styles.sectionHead}>
          <h2 id="attend">How to attend</h2>
        </div>
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.stepNum}>{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <CTA href={event.links.register}>Register on Luma</CTA>
      </div>
    </section>
  );
}

function Community({ event }) {
  return (
    <section className={styles.community} aria-labelledby="community">
      <div className={clsx("container", styles.communityInner)}>
        <div>
          <h2 id="community">The meetup is one day. The community is every day.</h2>
          <p>
            TWMP helps people break into and grow in technical writing through mentorship, a free
            academy and an active community. Join us before the event and come say hi in person.
          </p>
        </div>
        <div className={styles.ctaRow}>
          <CTA href={event.links.community}>Join the community</CTA>
          <CTA href="/docs/category/technical-writing-course" variant="secondary">
            Explore the academy
          </CTA>
        </div>
      </div>
    </section>
  );
}

export default function EventPage({ event }) {
  return (
    <main className={styles.page}>
      <Hero event={event} />
      <nav className={styles.jump} aria-label="On this page">
        <div className="container">
          <a href="#schedule">Schedule</a>
          <a href="#speakers">Speakers</a>
          <a href="#attend">How to attend</a>
        </div>
      </nav>
      <Formats event={event} />
      <Schedule event={event} />
      <Speakers event={event} />
      <CheckIn event={event} />
      <Community event={event} />
    </main>
  );
}
