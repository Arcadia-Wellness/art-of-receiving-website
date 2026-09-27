export type GalleryWork = {
  id: string;
  image: string;
  artistIds: string[];
  title: { zh: string; en: string };
  year?: string;
  blurb: { zh: string; en: string };
};

export type GalleryArtist = {
  id: string;
  photo: string;
  name: { zh: string; en: string };
  role: { zh: string; en: string };
  bio: { zh: string; en: string };
};

export const artists: GalleryArtist[] = [
  {
    id: "hu",
    photo: "gallery/artists/hu-1.jpg",
    name: { zh: "胡不哭", en: "Hu Xiao" },
    role: { zh: "疗愈艺术、蓝晒与策展", en: "Healing arts, cyanotype, curation" },
    bio: {
      zh: "疗愈艺术家、纪录片导演与身心艺术引导师，生活于多伦多。HerArt Studio 创始人，Roots & Flow 身心艺术共创社区发起人。",
      en: "Healing artist, documentary director, and somatic-art facilitator based in Toronto. Founder of HerArt Studio and initiator of the Roots & Flow co-creation community.",
    },
  },
  {
    id: "wenyang",
    photo: "gallery/artists/wenyang.jpg",
    name: { zh: "温阳", en: "Wen Yang" },
    role: { zh: "写作疗愈与关系场域", en: "Writing healing and relational practice" },
    bio: {
      zh: "疗愈艺术家与心理咨询师，长期以创意性表达陪伴亲密关系与自我觉察。",
      en: "Healing artist and counsellor whose long practice centres creative expression in intimate relationship and self-awareness.",
    },
  },
  {
    id: "sujun",
    photo: "gallery/artists/sujun.jpg",
    name: { zh: "素君", en: "Sujun" },
    role: { zh: "正念摄影与观呼吸", en: "Mindful photography and breath awareness" },
    bio: {
      zh: "以正念为心法、摄影为行径，探索在注意力被挟持的生活中如何重启感官觉知。",
      en: "Works with mindfulness as method and photography as path, restoring sensory awareness in attention-captured daily life.",
    },
  },
  {
    id: "mengmeng",
    photo: "gallery/artists/mengmeng-1.jpg",
    name: { zh: "梦梦", en: "Mengmeng" },
    role: { zh: "森林浴与正念摄影", en: "Forest bathing and mindful photography" },
    bio: {
      zh: "森林浴引导师与正念摄影实践者，探索人与森林、镜头之间的无声共振。",
      en: "Forest-bathing guide and mindful photographer exploring quiet resonance among person, forest, and camera.",
    },
  },
  {
    id: "meng",
    photo: "gallery/artists/meng.jpg",
    name: { zh: "Meng / 曹梦雯", en: "Meng / Cao Mengwen" },
    role: { zh: "感官摄影与告别仪式", en: "Sensory photography and farewell rituals" },
    bio: {
      zh: "跨界艺术家与身心实践者，以影像、声音与文字把艺术作为爱的实践。",
      en: "Cross-disciplinary artist and somatic practitioner treating image, sound, and text as practices of love.",
    },
  },
];

export const works: GalleryWork[] = [
  {
    id: "anapana",
    image: "gallery/works/sujun-anapana.jpg",
    artistIds: ["sujun"],
    title: { zh: "《AnaPana 观呼吸》", en: "AnaPana / Observing Breath" },
    year: "2021–2026",
    blurb: {
      zh: "以呼吸为锚，在观呼吸的当下记录现场与意向。",
      en: "Breath as anchor; photographs made in the shared act of observing inhale and exhale.",
    },
  },
  {
    id: "cyanotype",
    image: "gallery/works/hu-cyanotype.jpg",
    artistIds: ["hu"],
    title: { zh: "《水系传讯》", en: "Water Messages" },
    year: "2026",
    blurb: {
      zh: "蓝晒与自然材料：接收即创造。",
      en: "Cyanotype with natural materials: receiving as creating.",
    },
  },
  {
    id: "forest-relation",
    image: "gallery/works/mengmeng-7.jpg",
    artistIds: ["mengmeng"],
    title: { zh: "《接纳之境与关系》", en: "Acceptance in Relation" },
    year: "2026",
    blurb: {
      zh: "森林浴与正念摄影，照见人与万物的共鸣。",
      en: "Forest bathing and mindful photography in resonance with the living field.",
    },
  },
  {
    id: "farewell",
    image: "gallery/works/meng-radio.jpg",
    artistIds: ["meng"],
    title: { zh: "《我爱你，但我要走了》", en: "I Love You, But I Must Go" },
    year: "2024",
    blurb: {
      zh: "共同创作肖像，完成温柔的告别仪式。",
      en: "Co-created portraits as a gentle farewell ritual.",
    },
  },
  {
    id: "focus",
    image: "gallery/works/focus-diverge.jpg",
    artistIds: ["sujun", "meng", "mengmeng", "hu"],
    title: { zh: "《之间》相关作品", en: "From Between" },
    year: "2026",
    blurb: {
      zh: "以身体感受观看，用关系回应“接收”。",
      en: "Viewing through the body; responding to receiving through relation.",
    },
  },
  {
    id: "sujun-still",
    image: "gallery/works/sujun-8.jpg",
    artistIds: ["sujun"],
    title: { zh: "正念摄影静帧", en: "Mindful photography still" },
    blurb: {
      zh: "感官打开时留下的片刻。",
      en: "A moment held when the senses open.",
    },
  },
];

/** Homepage scroll stages → featured work preview */
export const scrollWorkByStage: Record<string, string> = {
  hero: "forest-relation",
  arrive: "anapana",
  receive: "cyanotype",
  walk: "sujun-still",
  respond: "focus",
  visiting: "farewell",
  place: "forest-relation",
};

export function artistById(id: string) {
  return artists.find((a) => a.id === id);
}

export function workById(id: string) {
  return works.find((w) => w.id === id);
}
