import { Beef, Flame, Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import { useMetaTags } from "../hooks/useMetaTags";

const values = [
  {
    icon: Flame,
    title: "Slow Smoked",
    description:
      "Every cut of meat is smoked low and slow over real hickory wood, never rushed, never compromised.",
  },
  {
    icon: Beef,
    title: "Homemade Sauces",
    description:
      "Our BBQ sauces are made from scratch using family recipes handed down through generations.",
  },
  {
    icon: Heart,
    title: "Family Tradition",
    description:
      "Chapman's was founded on family values — every meal is made with the same love as a Sunday dinner.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We're proud to be a cornerstone of Monticello and support our local community every single day.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function AboutPage() {
  useMetaTags({
    title: "About Us | Chapman's BBQ Monticello Indiana",
    description:
      "Learn the story of Chapman's BBQ — a family BBQ restaurant in Monticello, Indiana serving slow-smoked meats and homemade sauces.",
    ogImage: "/assets/generated/smoker.dim_800x600.jpg",
  });

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/assets/generated/smoker.dim_800x600.jpg"
          alt="Our BBQ Smoker"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <div className="text-center">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Est. in Monticello
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mt-1">
              Our Story
            </h1>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-4xl font-black mb-8">
              Where <span className="fire-text">Smoke Meets Soul</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Chapman's BBQ was born from a simple love of fire and flavor.
                Back when founder Ray Chapman started smoking meats in his
                backyard for neighborhood cookouts, he never imagined it would
                become Monticello's most-loved BBQ destination. But the
                neighbors kept coming back, and soon they were bringing their
                neighbors too.
              </p>
              <p>
                In 2003, Ray opened the doors to the first Chapman's BBQ
                location on North Main Street — the same location we call home
                today. The menu was simple: whatever came off the smoker that
                morning. Ribs, brisket, pulled pork, chicken. All of it kissed
                by hickory smoke and served with Ray's homemade sauces.
              </p>
              <p>
                Today, the Chapman family still runs every aspect of the
                operation. Ray's son Daniel oversees the pit, rising at 4am to
                light the smokers and tend the meats through the morning. Ray's
                daughter-in-law Maria crafts the sauces and sides from scratch
                each day. Nothing comes out of a bag or can if they can help it.
              </p>
              <p>
                We smoke over genuine hickory wood from local suppliers. We make
                our sauces fresh — the tangy vinegar-based original, the sweet
                and smoky Kansas City, and the fiery house hot sauce that keeps
                people coming back. It's labor-intensive, time-consuming work.
                And we wouldn't have it any other way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interior Image Section */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-96">
            <img
              src="/assets/generated/restaurant-interior.dim_800x600.jpg"
              alt="Chapman's BBQ Restaurant Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10 md:px-16">
              <div className="max-w-md">
                <h2 className="font-display text-3xl md:text-4xl font-black mb-3">
                  A Place to <span className="fire-text">Gather</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our dining room is warm, welcoming, and built for memories.
                  Pull up a chair, dig in, and stay a while.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl font-black">
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((val) => (
              <motion.div
                key={val.title}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-accent/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <val.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {val.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
