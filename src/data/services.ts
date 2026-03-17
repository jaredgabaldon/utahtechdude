export interface ServicePage {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  description: string;
  intro: string;
  benefits: string[];
  searchTerms: string[];
}

export interface LocationPage {
  slug: string;
  city: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  neighborhoods: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "smart-home-setup",
    title: "Smart Home Device Setup",
    shortTitle: "Smart Home Setup",
    metaTitle: "Smart Home Setup in Utah | Utah Tech Dude",
    description:
      "Setup help for smart lights, switches, fans, voice assistants, and connected devices in homes across Utah.",
    intro:
      "Bring smart home devices together so lights, switches, fans, speakers, and automations work cleanly with the apps and assistants you already use.",
    benefits: [
      "Set up smart lights, switches, fans, plugs, and routines",
      "Connect devices to Alexa and other apps",
      "Make smart home controls easier for everyone in the house",
    ],
    searchTerms: [
      "smart home setup in Utah",
      "smart lights and switches setup help",
      "home automation setup support",
    ],
  },
  {
    slug: "wifi-network-help",
    title: "Wi-Fi Setup and Troubleshooting",
    shortTitle: "Wi-Fi Help",
    metaTitle: "Wi-Fi Setup Help in Utah | Utah Tech Dude",
    description:
      "Utah home Wi-Fi help for reconnecting devices, improving setup, and getting phones, TVs, tablets, and smart devices back online.",
    intro:
      "When the Wi-Fi is spotty or devices will not connect, get practical help with setup, reconnecting, and basic home network troubleshooting.",
    benefits: [
      "Reconnect phones, tablets, TVs, printers, and smart devices",
      "Help identify common setup mistakes and signal issues",
      "Make it easier for the whole household to get online",
    ],
    searchTerms: [
      "Wi-Fi help in Utah",
      "home internet setup support",
      "reconnect devices to Wi-Fi",
    ],
  },
  {
    slug: "device-setup",
    title: "Device Setup and App Installation",
    shortTitle: "Device Setup",
    metaTitle: "Device Setup Help in Utah | Utah Tech Dude",
    description:
      "Get help setting up phones, tablets, smart watches, apps, and everyday home devices with local support across Utah.",
    intro:
      "New devices should feel exciting, not frustrating. Get help with setup screens, app installs, syncing, and account sign-ins so everything works together.",
    benefits: [
      "Set up phones, tablets, smart watches, and connected accessories",
      "Install apps, sign in to services, and sync devices",
      "Simplify the setup so the device is ready to use right away",
    ],
    searchTerms: [
      "device setup help in Utah",
      "app installation help",
      "smart watch and phone setup support",
    ],
  },
  {
    slug: "password-account-recovery",
    title: "Password Recovery and Account Help",
    shortTitle: "Password Recovery",
    metaTitle: "Password Recovery Help in Utah | Utah Tech Dude",
    description:
      "Friendly help with password management, password resets, account recovery, app sign-ins, and digital wallet access for common home tech services.",
    intro:
      "If you are locked out of an account or stuck in a reset loop, get calm guidance through password recovery, login cleanup, and account setup.",
    benefits: [
      "Recover access to common apps and services",
      "Set up password management and organize account sign-ins",
      "Reduce repeat lockouts with a simpler setup",
    ],
    searchTerms: [
      "password recovery help in Utah",
      "password management help",
      "account login support",
    ],
  },
  {
    slug: "smart-tv-printer-help",
    title: "Smart TV and Printer Help",
    shortTitle: "TV and Printer Help",
    metaTitle: "Smart TV and Printer Help in Utah | Utah Tech Dude",
    description:
      "Get help setting up smart TVs, streaming apps, remotes, printers, and device connections with in-home support across Utah.",
    intro:
      "Set up your smart TV, connect streaming apps, fix remote issues, or get a printer talking to your network without spending hours in menus.",
    benefits: [
      "Connect streaming services and sign in to favorite apps",
      "Pair TVs, printers, remotes, and Wi-Fi",
      "Reduce confusing setup steps and everyday connection issues",
    ],
    searchTerms: [
      "smart TV setup in Utah",
      "printer setup help",
      "TV and Wi-Fi connection support",
    ],
  },
  {
    slug: "tech-help-for-seniors",
    title: "Tech Help for Seniors",
    shortTitle: "Tech Help for Seniors",
    metaTitle: "Tech Help for Seniors in Utah | Utah Tech Dude",
    description:
      "Patient in-home technology help for seniors in Utah, including smartphones, tablets, smart TVs, Wi-Fi, accounts, and smart home devices.",
    intro:
      "Some of the best tech support is simply slowing down and explaining things clearly. This service is built for patient, practical help at home.",
    benefits: [
      "Friendly one-on-one help with phones, tablets, and TVs",
      "Clear support for passwords, apps, and everyday settings",
      "A calmer setup experience for seniors and their families",
    ],
    searchTerms: [
      "tech help for seniors in Utah",
      "phone and tablet help for seniors",
      "patient in-home technology assistance",
    ],
  },
  {
    slug: "alexa-setup-help",
    title: "Alexa and Echo Setup Help",
    shortTitle: "Alexa Setup",
    metaTitle: "Alexa Setup Help in Utah | Utah Tech Dude",
    description:
      "Set up Alexa, Echo devices, routines, and connected smart home controls with local help across Utah.",
    intro:
      "Get Alexa and Echo devices working with your Wi-Fi, music, reminders, and smart home devices without the usual setup frustration.",
    benefits: [
      "Set up Echo devices and connect them to Wi-Fi",
      "Link music, reminders, and smart home routines",
      "Pair Alexa with lights, switches, and other devices",
    ],
    searchTerms: [
      "Alexa setup help in Utah",
      "Echo device setup support",
      "connect Alexa to smart home devices",
    ],
  },
];

export const locationPages: LocationPage[] = [
  {
    slug: "salt-lake-city-tech-help",
    city: "Salt Lake City",
    title: "Tech Help in Salt Lake City, Utah",
    metaTitle: "Tech Help in Salt Lake City, Utah | Utah Tech Dude",
    description:
      "In-home tech support in Salt Lake City for smart home setup, Wi-Fi help, smart TVs, password recovery, and everyday device setup.",
    intro:
      "Utah Tech Dude provides in-home tech support in Salt Lake City for households that want smart devices, Wi-Fi, apps, and accounts working without the stress.",
    neighborhoods: ["Sugar House", "The Avenues", "Downtown", "Millcreek"],
  },
  {
    slug: "bountiful-tech-help",
    city: "Bountiful",
    title: "Tech Help in Bountiful, Utah",
    metaTitle: "Tech Help in Bountiful, Utah | Utah Tech Dude",
    description:
      "Home tech support in Bountiful for smart home setup, Wi-Fi troubleshooting, password help, smart TVs, and device setup.",
    intro:
      "Get practical in-home tech help in Bountiful for streaming devices, Wi-Fi issues, account setup, and smart home gear.",
    neighborhoods: [
      "Woods Cross",
      "North Salt Lake",
      "Centerville",
      "Val Verda",
    ],
  },
  {
    slug: "layton-tech-help",
    city: "Layton",
    title: "Tech Help in Layton, Utah",
    metaTitle: "Tech Help in Layton, Utah | Utah Tech Dude",
    description:
      "Layton home tech support for smart TVs, Alexa, Wi-Fi, app setup, password recovery, and connected home devices.",
    intro:
      "Utah Tech Dude helps Layton households get everyday technology set up and working, from smart TVs and Wi-Fi to apps and smart home devices.",
    neighborhoods: ["Kaysville", "Clearfield", "South Weber", "Syracuse"],
  },
  {
    slug: "ogden-tech-help",
    city: "Ogden",
    title: "Tech Help in Ogden, Utah",
    metaTitle: "Tech Help in Ogden, Utah | Utah Tech Dude",
    description:
      "In-home tech support in Ogden for Wi-Fi setup, smart home devices, streaming setup, device onboarding, and account help.",
    intro:
      "Ogden-area families can get straightforward in-home help for connected devices, Wi-Fi, account access, and smart home setup.",
    neighborhoods: [
      "South Ogden",
      "North Ogden",
      "Riverdale",
      "Washington Terrace",
    ],
  },
  {
    slug: "park-city-tech-help",
    city: "Park City",
    title: "Tech Help in Park City, Utah",
    metaTitle: "Tech Help in Park City, Utah | Utah Tech Dude",
    description:
      "Park City home tech support for smart device setup, Wi-Fi troubleshooting, TV streaming help, and account recovery.",
    intro:
      "From vacation homes to full-time residences, Park City households can get help setting up and managing home technology with less hassle.",
    neighborhoods: [
      "Kimball Junction",
      "Jeremy Ranch",
      "Prospector",
      "Silver Summit",
    ],
  },
];
