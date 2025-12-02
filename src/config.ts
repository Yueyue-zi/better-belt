export const SITE = {
  website: "https://blog.luckycat.ink/", // replace this with your deployed domain
  author: "Yueyuezi",
  profile: "",
  desc: "",
  title: "YYZ的小仓库",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  showFriends: true,
} as const;

export const  FRIENDS = [
  {
    name: "Astro 官网",
    description: "Astro 官方文档网站",
    url: "https://astro.build",
    avatar: "https://astro.build/assets/press/astro-icon-dark.png",
    tags: ["技术", "文档"],
  },
  {
    name: "AstroPaper 仓库",
    description: "本主题的 GitHub 仓库",
    url: "https://github.com/satnaing/astro-paper",
    avatar: "https://avatars.githubusercontent.com/u/53779459?v=4",
    tags: ["开源", "主题"],
  },
]
