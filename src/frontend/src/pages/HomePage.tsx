import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronRight, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { motion } from "motion/react";
import { useMetaTags } from "../hooks/useMetaTags";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=1430+N+Main+St,+Monticello,+IN+47960";

const STAR = "★";

const featuredDishes = [
  {
    name: "Baby Back Ribs",
    description:
      "Slow-smoked for 6 hours over hickory wood with our signature dry rub and house BBQ sauce.",
    image: "/assets/generated/ribs.dim_800x600.jpg",
    price: "From $16.99",
  },
  {
    name: "Beef Brisket",
    description:
      "Texas-style 12-hour smoked brisket with a perfect bark and melt-in-your-mouth tenderness.",
    image: "/assets/generated/brisket.dim_800x600.jpg",
    price: "$18.99/lb",
  },
  {
    name: "Smoked Chicken",
    description:
      "Juicy half chicken rubbed with our secret blend and slow-smoked to golden perfection.",
    image: "/assets/generated/smoked-chicken.dim_800x600.jpg",
    price: "$12.99",
  },
  {
    name: "Pulled Pork",
    description:
      "Pork shoulder smoked low and slow for 10+ hours, hand-pulled and served with two sides.",
    image: "/assets/generated/pulled-pork.dim_800x600.jpg",
    price: "$14.99/lb",
  },
];

const testimonials = [
  {
    name: "Mike T.",
    rating: 5,
    text: "Best BBQ in White County, hands down. The brisket is unreal — perfectly smoky with that beautiful bark. We drive 45 minutes just to eat here.",
    location: "Lafayette, IN",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "Chapman's has become a family tradition for us every Friday night. The ribs fall off the bone and the sides are incredible. The staff treats you like family.",
    location: "Monticello, IN",
  },
  {
    name: "Dave R.",
    rating: 5,
    text: "I've traveled the country eating BBQ and Chapman's holds up against the best. The pulled pork sandwich alone is worth the trip to Monticello.",
    location: "Indianapolis, IN",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function HomePage() {
  useMetaTags({
    title: "Chapman's BBQ | Authentic BBQ in Monticello, Indiana",
    description:
      "Chapman's BBQ serves authentic slow-smoked BBQ in Monticello, Indiana. Ribs, brisket, pulled pork, smoked chicken, and more.",
    ogImage: "/assets/generated/hero-grill.dim_1600x800.jpg",
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-grill.dim_1600x800.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="smoke-overlay absolute inset-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block mb-4 text-sm font-semibold tracking-[0.2em] uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5">
              Monticello, Indiana
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6"
          >
            <span className="fire-text">Authentic BBQ</span>
            <br />
            <span className="text-foreground">Flavor in</span>
            <br />
            <span className="text-foreground">Monticello</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Slow-smoked meats, homemade sauces, and Southern comfort — right
            here in Monticello, Indiana.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              data-ocid="hero.primary_button"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 ember-glow"
            >
              <a href="tel:+18309985031">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              data-ocid="hero.order_button"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6"
            >
              <Link to="/menu">
                <UtensilsCrossed className="w-5 h-5 mr-2" />
                Order Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-ocid="hero.secondary_button"
              className="border-accent/50 text-accent hover:bg-accent/10 font-bold text-lg px-8 py-6"
            >
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronRight className="w-6 h-6 text-accent rotate-90" />
        </div>
      </section>

      {/* About Blurb */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
              A <span className="fire-text">Family Tradition</span> of BBQ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              For over two decades, Chapman's BBQ has been the heartbeat of
              Monticello's food scene. What started as a backyard passion for
              slow-smoked meats has grown into White County's most beloved BBQ
              destination.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We smoke our meats fresh every morning using real hickory wood,
              crafting each dish with the same love and patience that's defined
              our family for generations. Every plate tells that story.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Our Story <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Featured Dishes */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Pit Favorites
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-2">
              What's Off the Smoker
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredDishes.map((dish) => (
              <motion.div
                key={dish.name}
                variants={fadeUp}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <span className="absolute bottom-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    {dish.price}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-accent/40 text-accent hover:bg-accent/10"
            >
              <Link to="/menu">
                View Full Menu <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              What People Say
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-2">
              Our Regulars Love It
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div
                  className="flex gap-0.5 mb-4 text-accent text-lg"
                  aria-label={`${t.rating} stars`}
                >
                  {STAR.repeat(t.rating)}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/20 via-card to-accent/10 border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Ready to taste the <span className="fire-text">real deal?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Come visit us at 1430 N Main St, Monticello, IN or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold ember-glow"
            >
              <a href="tel:+18309985031">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
            >
              <Link to="/menu">
                <UtensilsCrossed className="w-5 h-5 mr-2" />
                Order Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent/10 font-bold"
            >
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
