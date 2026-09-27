export type Locale = "zh" | "en";

export type Strings = {
  locale: Locale;
  brandZh: string;
  brandEn: string;
  tagline: string;
  nav: {
    home: string;
    exhibition: string;
    artists: string;
    visiting: string;
  };
  langSwitch: string;
  home: {
    headline: string;
    support: string;
    scrollHint: string;
    artistsCta: string;
    galleryCta: string;
  };
  beats: {
    arrive: { title: string; body: string };
    receive: { title: string; body: string };
    walk: { title: string; body: string };
    respond: { title: string; body: string };
    visiting: { title: string; lead: string; points: string[]; legalNote: string };
    place: { title: string; body: string };
  };
  gallery: {
    title: string;
    lead: string;
    worksHeading: string;
    artistsHeading: string;
  };
  artists: {
    title: string;
    lead: string;
  };
  footer: string;
};

export const zh: Strings = {
  locale: "zh",
  brandZh: "身接体受",
  brandEn: "Art of Receiving",
  tagline: "在艺术与自然中，重新学会接收。",
  nav: {
    home: "首页",
    exhibition: "展览",
    artists: "艺术家",
    visiting: "观展",
  },
  langSwitch: "EN",
  home: {
    headline: "在艺术与自然中，重新学会接收",
    support: "以“接收”为内核的户外疗愈艺术展。向外看作品，也向内看自己。",
    scrollHint: "向下滑动，走进接收",
    artistsCta: "认识艺术家",
    galleryCta: "进入展览画廊",
  },
  beats: {
    arrive: {
      title: "先停一停",
      body: "在进入森林之前，先在树下静坐片刻。打开感官，听一听、看一看，准备好接收来自作品、自然和自己的讯息。",
    },
    receive: {
      title: "不勉强疗愈，只邀请联结",
      body: "身接体受是一场以接收为内核的户外疗愈艺术展。艺术家、策展人与观展者共同完成这场共创。生命的意义从不被强行塑造，只在接纳与联结中自然生发。",
    },
    walk: {
      title: "沿小路慢慢走",
      body: "用眼睛观看的同时，感受脚下的土地与穿行的风。遇到让你停下的作品，先用直觉感受，再慢慢留意身体、情绪与念头。",
    },
    respond: {
      title: "让回应成为展览的一部分",
      body: "在悬挂的卷轴前，你可以用红线连接你看见的关系。离开前，留下书写或照片卡回应。你的接收，也进入这场共创。",
    },
    visiting: {
      title: "观展须知",
      lead: "跟随直觉与好奇心。没有必须完成的环节。",
      points: [
        "穿着防滑户外鞋履，准备防晒、防蚊与防雨。",
        "沿既定林径行走，不要攀爬树木或拉扯展品绳索。",
        "所有互动自愿；感到不适可随时暂停或离开。",
        "未成年人须由监护人全程陪同。",
      ],
      legalNote: "报名与免责声明文本仍为草案，须经安大略省律师审核后方可正式使用。展览为艺术体验，非医疗或心理治疗。",
    },
    place: {
      title: "多伦多森林场",
      body: "地点参考：里士满山 Hillsview Dr 天文台林地。\n请以当日报名通知与现场指引为准。",
    },
  },
  gallery: {
    title: "展览画廊",
    lead: "多伦多森林场代表性作品预览，非现场完整清单。艺术家介绍见艺术家页。",
    worksHeading: "代表作品",
    artistsHeading: "艺术家",
  },
  artists: {
    title: "艺术家",
    lead: "本系列是共创场域。以下创作者出现在多伦多森林场次材料中。",
  },
  footer: "身接体受 / Art of Receiving · 共享展览系列",
};

export const en: Strings = {
  locale: "en",
  brandZh: "身接体受",
  brandEn: "Art of Receiving",
  tagline: "An outdoor art exhibition that invites you to reconnect with body, others, and nature.",
  nav: {
    home: "Home",
    exhibition: "Exhibition",
    artists: "Artists",
    visiting: "Visiting",
  },
  langSwitch: "中文",
  home: {
    headline: "Receive what is already here",
    support: "An outdoor art exhibition centred on receiving, not performing wellness. Look at the work, and notice what happens in you.",
    scrollHint: "Scroll to enter receiving",
    artistsCta: "Meet the artists",
    galleryCta: "Enter the gallery",
  },
  beats: {
    arrive: {
      title: "Pause first",
      body: "Before the forest path, sit under the trees. Open your senses. Prepare to receive from the work, the land, and yourself.",
    },
    receive: {
      title: "Receiving, not performing wellness",
      body: "Art of Receiving is a shared outdoor healing-art series. Artists, hosts, and visitors co-complete the field. Meaning arises through acceptance and connection, not forced outcomes.",
    },
    walk: {
      title: "Walk slowly",
      body: "Feel the ground and the wind while you look. When a work stops you, sense first. Give time to body, emotion, and thought before interpretation.",
    },
    respond: {
      title: "Let your response enter the work",
      body: "At the hanging scrolls, you may mark a relation with a red thread. Before leaving, leave a written or card response. Your receiving becomes part of the exhibition.",
    },
    visiting: {
      title: "Visiting notes",
      lead: "Follow curiosity. Nothing is mandatory.",
      points: [
        "Wear sturdy outdoor shoes and bring sun, insect, and rain protection.",
        "Stay on designated paths. Do not climb trees or pull hanging cords.",
        "All interactions are voluntary. Pause or leave if you need to.",
        "Minors must be accompanied by a guardian at all times.",
      ],
      legalNote: "Registration and waiver language remains draft until reviewed by an Ontario lawyer. This is an artistic experience, not medical care, counselling, or psychotherapy.",
    },
    place: {
      title: "Toronto Forest Edition",
      body: "Location reference: forest grounds near the observatory on Hillsview Dr, Richmond Hill.\nFollow registration updates and on-site guidance for the active edition.",
    },
  },
  gallery: {
    title: "Exhibition gallery",
    lead: "Representative work previews from the Toronto Forest Edition, not a complete inventory. Artist bios live on the Artists page.",
    worksHeading: "Works",
    artistsHeading: "Artists",
  },
  artists: {
    title: "Artists",
    lead: "A collaborative field. These creators appear in the Toronto Forest Edition materials.",
  },
  footer: "身接体受 / Art of Receiving · a shared exhibition series",
};

export function getStrings(locale: Locale): Strings {
  return locale === "en" ? en : zh;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}
