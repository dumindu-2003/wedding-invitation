/**
 * Eternal Moments — editable wedding invitation
 * ---------------------------------------------
 * Change the couple's details here. Components read this file only.
 *
 * dateTime must include a timezone offset. Sri Lanka is +05:30.
 * The date below is a sample. Replace it with the real wedding date.
 *
 * Photographs live in public/images/. The cover clip lives in public/video/.
 * Music lives in public/audio/.
 * The included audio file is a quiet placeholder tone.
 *
 * venue.mapEmbedUrl is the map shown on the invitation.
 * venue.mapsUrl opens the same hotel pin in Google Maps. No API key is required.
 */

const weddingConfig = {
  couple: {
    bride: {
      firstName: "Punshashini",
      lastName: "",
      fullName: "Punshashini",
    },
    groom: {
      firstName: "Thushan",
      lastName: "",
      fullName: "Thushan",
    },
  },

  dateTime: "2027-07-20T09:30:00+05:30",
  weekday: "Tuesday",
  dateLine: "20 July 2027",
  year: "2027",
  shortDate: "20 July 2027",

  ceremonyTime: "9:30 in the morning",
  ceremonyTimeShort: "9:30 AM",

  reception: {
    time: "11:00 in the morning",
    timeShort: "11:00 AM",
    detail: "Lunch and celebration follow the ceremony.",
  },

  dressCode: "Traditional or formal attire",

  venue: {
    name: "Kashyapa Hotel",
    address: "Gatahaththa, Diwurumpitiya, Avissawella 10700, Sri Lanka",
    mapsQuery: "Hotel Kashyapa, Diwurumpitiya, Avissawella, Sri Lanka",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6787.860245505968!2d80.21974796536942!3d6.920952110886591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a9427f1a7ce3%3A0xa5e6a5944d8182de!2sHotel%20Kashyapa!5e1!3m2!1sen!2slk!4v1770119639034!5m2!1sen!2slk",
    mapsUrl:
      "https://www.google.com/maps/place/Hotel+Kashyapa/@6.920952,80.219748,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae3a9427f1a7ce3:0xa5e6a5944d8182de!8m2!3d6.9209521!4d80.219748",
    note: "We would be honoured to welcome you to Kashyapa Hotel, Avissawella.",
    image: "/images/venue.jpg",
    imageAlt: "A wedding reception set with flowers and soft light",
  },

  invitation: {
    kicker: "Together with our families",
    message: "Joyfully invite you to celebrate our wedding",
    note: "With love, we ask you to share the beginning of our life together.",
    marriedLine: "We are getting married",
    closing: "Two hearts, one promise, and a day made brighter because you are in it.",
    thankYou: "Thank you for being part of our story.",
  },

  opening: {
    hint: "A beautiful beginning awaits",
    button: "Open Invitation",
    coupleVideo: "/video/couple.mp4",
    couplePoster: "/video/couple-poster.jpg",
    coupleLabel: "Punshashini and Thushan embracing",
  },

  countdown: {
    heading: "Wait for the magic",
    passedMessage: "The day has arrived. Thank you for celebrating with us.",
  },

  story: {
    eyebrow: "Our Story",
    heading: "How we found each other",
    intro: "A few small moments that quietly became a life.",
    chapters: [
      {
        title: "The First Meeting",
        text: "A family gathering, an easy conversation, and the feeling that the evening should have lasted a little longer.",
        image: "/images/story-meeting.jpg",
        alt: "Two ceremony chairs dressed with flowers on a lawn",
      },
      {
        title: "The Journey",
        text: "Ordinary days, long calls, and the gentle certainty that home had become a person.",
        image: "/images/story-journey.jpg",
        alt: "A couple's hands, wearing their wedding rings",
      },
      {
        title: "The Promise",
        text: "A question asked with a full heart, and an answer that felt like the start of everything.",
        image: "/images/story-promise.jpg",
        alt: "A bride and groom standing together beside a lake",
      },
    ],
  },

  schedule: {
    eyebrow: "The Wedding Day",
    heading: "A gentle order of events",
    events: [
      {
        time: "8:30 AM",
        title: "Guest Arrival",
        description: "Welcome at the hotel as families and friends gather.",
      },
      {
        time: "9:30 AM",
        title: "Wedding Ceremony",
        description: "Vows and blessings to begin the celebration.",
      },
      {
        time: "10:30 AM",
        title: "Couple Photography",
        description: "A quiet pause for portraits together.",
      },
      {
        time: "11:00 AM",
        title: "Reception",
        description: "Lunch, toasts, and time with everyone we love.",
      },
      {
        time: "1:00 PM",
        title: "Celebration",
        description: "Music, laughter, and the rest of a happy day.",
      },
    ],
  },

  gallery: {
    eyebrow: "Gallery",
    heading: "Moments we love",
    images: [
      {
        src: "/images/gallery-1.jpg",
        alt: "A bride and groom in golden light, the bride holding a bouquet",
        frame: "aspect-[3/4] sm:col-span-2 sm:aspect-[16/10]",
      },
      {
        src: "/images/gallery-2.jpg",
        alt: "A couple's hands resting together, with wedding rings and roses",
        frame: "aspect-[4/5]",
      },
      {
        src: "/images/gallery-3.jpg",
        alt: "The couple kissing as guests celebrate with flower petals",
        frame: "aspect-[3/4]",
      },
      {
        src: "/images/gallery-5.jpg",
        alt: "A black and white portrait of the couple beneath a blowing veil",
        frame: "aspect-[4/5] sm:aspect-[3/4]",
      },
      {
        src: "/images/gallery-4.jpg",
        alt: "The couple releasing balloons as their guests applaud",
        frame: "aspect-[16/10] sm:col-span-2",
      },
      {
        src: "/images/gallery-6.jpg",
        alt: "A long reception table set with flowers and glassware",
        frame: "aspect-[4/5] sm:col-span-2 sm:aspect-[16/9]",
      },
    ],
  },

  wishes: {
    eyebrow: "Best Wishes",
    heading: "Celebrate with us",
    message: "Leave a wish for Punshashini and Thushan, and let us know if you can join the day.",
    demoNote: "This is a preview on your device. Wishes are not saved or sent to the couple.",
  },

  music: {
    src: "/audio/background.wav",
    label: "Background music",
  },
};

export default weddingConfig;
