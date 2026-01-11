export type MentorKey = "machiavelli" | "napoleon" | "aurelius";

export type Mentor = {
  key: MentorKey;
  name: string;
  title: string;
  cta: string;
  imageSrc: string;
};

export const MENTORS: Mentor[] = [
  {
    key: "machiavelli",
    name: "NICCOLÒ MACHIAVELLI",
    title: "MASTER OF MANIPULATION",
    cta: "CONSULT MACHIAVELLI",
    imageSrc: "/mentors/machiavelli.jpg",
  },
  {
    key: "napoleon",
    name: "NAPOLEON BONAPARTE",
    title: "MASTER OF CONQUEST",
    cta: "CONSULT NAPOLEON",
    imageSrc: "/mentors/napoleon.jpg",
  },
  {
    key: "aurelius",
    name: "MARCUS AURELIUS",
    title: "MASTER OF INNER SOVEREIGNTY",
    cta: "CONSULT AURELIUS",
    imageSrc: "/mentors/aurelius.jpg",
  },
];
