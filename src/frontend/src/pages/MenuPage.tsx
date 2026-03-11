import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { useState } from "react";
import { useMetaTags } from "../hooks/useMetaTags";

const menuCategories = [
  {
    id: "smoked-meats",
    label: "Smoked Meats",
    emoji: "🔥",
    items: [
      {
        name: "Baby Back Ribs — Half Rack",
        description:
          "Slow-smoked pork ribs with signature dry rub and hickory smoke.",
        price: "$16.99",
      },
      {
        name: "Baby Back Ribs — Full Rack",
        description: "Full slab of our famous slow-smoked ribs with two sides.",
        price: "$28.99",
      },
      {
        name: "Beef Brisket",
        description:
          "Texas-style smoked brisket, sold by the pound with bark and all.",
        price: "$18.99/lb",
      },
      {
        name: "Smoked Chicken",
        description: "Whole half chicken rubbed and smoked until golden.",
        price: "$12.99",
      },
      {
        name: "Pulled Pork",
        description:
          "Hand-pulled pork shoulder smoked for 10+ hours, sold by the pound.",
        price: "$14.99/lb",
      },
      {
        name: "Smoked Sausage Link",
        description: "Juicy hardwood-smoked sausage link with snappy skin.",
        price: "$7.99",
      },
    ],
  },
  {
    id: "bbq-plates",
    label: "BBQ Plates",
    emoji: "🍽️",
    items: [
      {
        name: "Rib Plate",
        description: "Half rack of ribs served with your choice of two sides.",
        price: "$19.99",
      },
      {
        name: "Brisket Plate",
        description: "½ lb sliced brisket with pickles, onions, and two sides.",
        price: "$17.99",
      },
      {
        name: "Chicken Plate",
        description: "Half smoked chicken with two sides and cornbread.",
        price: "$14.99",
      },
      {
        name: "Mixed Meat Plate",
        description: "Rib, brisket, and pulled pork combo with two sides.",
        price: "$22.99",
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    emoji: "🥪",
    items: [
      {
        name: "Pulled Pork Sandwich",
        description: "Slow-pulled pork piled high on a brioche bun with slaw.",
        price: "$9.99",
      },
      {
        name: "Brisket Sandwich",
        description: "Sliced brisket on a toasted bun with pickles and onions.",
        price: "$11.99",
      },
      {
        name: "Chicken Sandwich",
        description:
          "Smoked chicken on a brioche bun with house sauce and slaw.",
        price: "$9.99",
      },
      {
        name: "Sausage Sandwich",
        description:
          "Smoked sausage link on a hoagie roll with mustard and onions.",
        price: "$8.99",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    emoji: "🫘",
    items: [
      {
        name: "Mac & Cheese",
        description: "Creamy house-made mac and cheese, loaded with cheddar.",
        price: "$3.99",
      },
      {
        name: "Coleslaw",
        description: "Classic creamy coleslaw with a tangy vinegar finish.",
        price: "$2.99",
      },
      {
        name: "Baked Beans",
        description: "Smoky slow-cooked beans with bits of brisket throughout.",
        price: "$2.99",
      },
      {
        name: "Cornbread",
        description: "Sweet southern-style cornbread baked fresh daily.",
        price: "$1.99",
      },
      {
        name: "Potato Salad",
        description: "Southern-style potato salad with mustard and dill.",
        price: "$3.49",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    emoji: "🥤",
    items: [
      {
        name: "Lemonade",
        description: "Fresh-squeezed house lemonade.",
        price: "$2.99",
      },
      {
        name: "Sweet Tea",
        description: "Southern-style sweet iced tea, brewed fresh.",
        price: "$2.49",
      },
      {
        name: "Soda",
        description: "Pepsi, Diet Pepsi, Mountain Dew, Dr Pepper.",
        price: "$2.49",
      },
      { name: "Water", description: "Bottled water.", price: "$1.49" },
    ],
  },
];

export default function MenuPage() {
  useMetaTags({
    title: "Menu | Chapman's BBQ Monticello Indiana",
    description:
      "Browse Chapman's BBQ full menu — smoked meats, BBQ plates, sandwiches, sides, and drinks. BBQ restaurant in Monticello, Indiana.",
    ogImage: "/assets/generated/sides.dim_800x600.jpg",
  });

  const [activeTab, setActiveTab] = useState("smoked-meats");

  return (
    <div className="pt-16">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/assets/generated/sides.dim_800x600.jpg"
          alt="BBQ Sides"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Chapman's BBQ
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mt-1">
              Our Menu
            </h1>
            <p className="text-muted-foreground mt-2">
              Smoked fresh every morning in Monticello, Indiana
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap gap-1 h-auto bg-muted p-1 rounded-xl mb-10 w-full justify-start">
            {menuCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                data-ocid="menu.tab"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg font-semibold"
              >
                {cat.emoji} {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-card rounded-xl p-5 border border-border hover:border-accent/30 transition-colors flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg leading-tight mb-1">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-accent font-bold text-lg font-display">
                      {item.price}
                    </span>
                  </div>
                ))}
              </motion.div>
              <p className="text-muted-foreground text-xs text-center mt-8">
                * Prices subject to change. BBQ plates include your choice of 2
                sides.
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
