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

export const servicePages: ServicePage[] = [
  {
    slug: "smart-tv-setup",
    title: "Smart TV Setup Help",
    shortTitle: "Smart TV Setup",
    metaTitle: "Smart TV Setup Help in Utah | Utah Tech Dude",
    description:
      "Get help setting up smart TVs, streaming apps, remotes, and account logins with patient in-home support across Utah.",
    intro:
      "Set up your smart TV, connect streaming apps, fix remote issues, and make sure everything works the way it should before the visit is done.",
    benefits: [
      "Connect streaming services and sign in to your favorite apps",
      "Pair remotes, soundbars, and home Wi-Fi",
      "Reduce confusing menus and simplify the home screen"
    ],
    searchTerms: [
      "smart TV setup in Utah",
      "streaming app setup help",
      "TV and Wi-Fi connection support"
    ]
  },
  {
    slug: "wifi-help",
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
      "Make it easier for the whole household to get online"
    ],
    searchTerms: [
      "Wi-Fi help in Utah",
      "home internet setup support",
      "reconnect devices to Wi-Fi"
    ]
  },
  {
    slug: "password-recovery",
    title: "Password Recovery and Account Help",
    shortTitle: "Password Recovery",
    metaTitle: "Password Recovery Help in Utah | Utah Tech Dude",
    description:
      "Friendly help with password resets, account recovery, app sign-ins, and digital wallet access for common home tech services.",
    intro:
      "If you are locked out of an account or stuck in a reset loop, get calm guidance through password recovery, login cleanup, and account setup.",
    benefits: [
      "Recover access to common apps and services",
      "Reset passwords and organize account sign-ins",
      "Reduce repeat lockouts with a simpler setup"
    ],
    searchTerms: [
      "password recovery help in Utah",
      "help resetting app passwords",
      "account login support"
    ]
  },
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
      "Make smart home controls easier for everyone in the house"
    ],
    searchTerms: [
      "smart home setup in Utah",
      "smart lights and switches setup help",
      "home automation setup support"
    ]
  },
  {
    slug: "alexa-setup",
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
      "Pair Alexa with lights, switches, and other devices"
    ],
    searchTerms: [
      "Alexa setup help in Utah",
      "Echo device setup support",
      "connect Alexa to smart home devices"
    ]
  }
];
