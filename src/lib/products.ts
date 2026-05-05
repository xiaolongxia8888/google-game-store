export interface Product {
  id: string;
  name: string;
  nameZh: string;
  category: string;
  categoryZh: string;
  description: string;
  descriptionZh: string;
  price: number;
  priceUsdt: number;
  image: string;
  stock: number;
  features: string[];
  featuresZh: string[];
  highlights: string[];
  highlightsZh: string[];
}

export const products: Product[] = [
  {
    id: "steam-001",
    name: "Steam Premium Account - 200+ Games",
    nameZh: "Steam 高级账号 - 200+ 游戏",
    category: "Steam",
    categoryZh: "Steam",
    description: "Full access Steam account with 200+ premium games. Includes AAA titles, indie games, and classic collections. Verified by seller with purchase history.",
    descriptionZh: "完整访问权限的 Steam 账号，包含 200+ 高级游戏。涵盖 3A 大作、独立游戏和经典合集。卖家已验证购买记录。",
    price: 89.99,
    priceUsdt: 90,
    image: "/steam-account.jpg",
    stock: 15,
    features: [
      "200+ premium games installed",
      "Full library access",
      "No region lock",
      "Original email included",
      "Lifetime warranty on bans"
    ],
    featuresZh: [
      "已安装 200+ 高级游戏",
      "完整库访问权限",
      "无区域限制",
      "包含原始邮箱",
      "封禁终身质保"
    ],
    highlights: [
      "AAA Titles",
      "Indie Collection",
      "Classic Games"
    ],
    highlightsZh: [
      "3A 大作",
      "独立游戏合集",
      "经典游戏"
    ]
  },
  {
    id: "epic-001",
    name: "EPIC Games Mega Account - 150+ Games",
    nameZh: "EPIC Games 超级账号 - 150+ 游戏",
    category: "EPIC",
    categoryZh: "EPIC",
    description: "Premium EPIC Games account with 150+ titles including weekly free games collection. Regular contributor with exclusive skins.",
    descriptionZh: "高级 EPIC Games 账号，包含 150+ 款游戏，含每周免费游戏合集。定期贡献者，含独家皮肤。",
    price: 69.99,
    priceUsdt: 70,
    image: "/epic-account.jpg",
    stock: 20,
    features: [
      "150+ games in library",
      "Weekly free games claimed",
      "Exclusive skins included",
      "Full email access",
      "No VPN required"
    ],
    featuresZh: [
      "库中包含 150+ 游戏",
      "已领取每周免费游戏",
      "包含独家皮肤",
      "完整邮箱访问权限",
      "无需 VPN"
    ],
    highlights: [
      "Mega Library",
      "Exclusive Content",
      "Free Games History"
    ],
    highlightsZh: [
      "超级库",
      "独家内容",
      "免费游戏记录"
    ]
  },
  {
    id: "riot-001",
    name: "Riot Games Full Account - LoL + Valorant",
    nameZh: "Riot Games 完整账号 - 英雄联盟 + 无畏契约",
    category: "Riot",
    categoryZh: "Riot",
    description: "High-rank Riot account with rare skins in League of Legends and Valorant. Ranked Diamond+. Multiple season rewards.",
    descriptionZh: "高段位 Riot 账号，英雄联盟和无畏契约含稀有皮肤。段位钻石+。多个赛季奖励。",
    price: 149.99,
    priceUsdt: 150,
    image: "/riot-account.jpg",
    stock: 8,
    features: [
      "Diamond+ ranked in LoL",
      "Diamond+ ranked in Valorant",
      "20+ rare skins",
      "Multiple season rewards",
      "Name change available"
    ],
    featuresZh: [
      "英雄联盟钻石+段位",
      "无畏契约钻石+段位",
      "20+ 稀有皮肤",
      "多个赛季奖励",
      "可改名"
    ],
    highlights: [
      "Diamond Rank",
      "Rare Skins",
      "Season Rewards"
    ],
    highlightsZh: [
      "钻石段位",
      "稀有皮肤",
      "赛季奖励"
    ]
  },
  {
    id: "ubisoft-001",
    name: "Ubisoft Connect Premium - 80+ Games",
    nameZh: "Ubisoft Connect 高级版 - 80+ 游戏",
    category: "Ubisoft",
    categoryZh: "Ubisoft",
    description: "Ubisoft account loaded with Assassin's Creed, Far Cry, Rainbow Six, and more. All DLCs included for major titles.",
    descriptionZh: "Ubisoft 账号，包含刺客信条、孤岛惊魂、彩虹六号等系列。主要游戏含全部 DLC。",
    price: 59.99,
    priceUsdt: 60,
    image: "/ubisoft-account.jpg",
    stock: 12,
    features: [
      "80+ Ubisoft games",
      "All major DLCs included",
      "Assassin's Creed full series",
      "Far Cry complete collection",
      "Rainbow Six operator unlocks"
    ],
    featuresZh: [
      "80+ Ubisoft 游戏",
      "含全部主要 DLC",
      "刺客信条全系列",
      "孤岛惊魂完整合集",
      "彩虹六号干员解锁"
    ],
    highlights: [
      "Full Series",
      "All DLCs",
      "Complete Collection"
    ],
    highlightsZh: [
      "全系列",
      "全部 DLC",
      "完整合集"
    ]
  },
  {
    id: "xbox-001",
    name: "Xbox Game Pass Ultimate - 24 Months",
    nameZh: "Xbox Game Pass 终极版 - 24个月",
    category: "Xbox",
    categoryZh: "Xbox",
    description: "Xbox Game Pass Ultimate account with 24 months subscription. Access to 400+ games, EA Play, and Xbox Cloud Gaming.",
    descriptionZh: "Xbox Game Pass Ultimate 账号，含 24 个月订阅。畅玩 400+ 游戏、EA Play 和云游戏。",
    price: 199.99,
    priceUsdt: 200,
    image: "/xbox-account.jpg",
    stock: 5,
    features: [
      "24 months Game Pass Ultimate",
      "400+ games library",
      "EA Play included",
      "Xbox Cloud Gaming",
      "Online multiplayer"
    ],
    featuresZh: [
      "24个月 Game Pass Ultimate",
      "400+ 游戏库",
      "包含 EA Play",
      "Xbox 云游戏",
      "在线多人游戏"
    ],
    highlights: [
      "24 Months",
      "Cloud Gaming",
      "EA Play"
    ],
    highlightsZh: [
      "24个月",
      "云游戏",
      "EA Play"
    ]
  },
  {
    id: "blizzard-001",
    name: "Blizzard Battle.net Ultimate - WoW + OW2 + Diablo",
    nameZh: "Blizzard Battle.net 终极版 - 魔兽+守望+暗黑",
    category: "Blizzard",
    categoryZh: "Blizzard",
    description: "Full Blizzard account with World of Warcraft subscription, Overwatch 2 cosmetics, Diablo IV, and StarCraft collection.",
    descriptionZh: "完整 Blizzard 账号，含魔兽世界订阅、守望先锋 2 装饰品、暗黑破坏神 IV 和星际争霸合集。",
    price: 179.99,
    priceUsdt: 180,
    image: "/blizzard-account.jpg",
    stock: 6,
    features: [
      "WoW subscription active",
      "OW2 premium battle pass",
      "Diablo IV full game",
      "StarCraft complete collection",
      "Hearthstone card packs"
    ],
    featuresZh: [
      "魔兽世界活跃订阅",
      "OW2 高级战斗通行证",
      "暗黑破坏神 IV 完整版",
      "星际争霸完整合集",
      "炉石传说卡包"
    ],
    highlights: [
      "All Blizzard Games",
      "WoW Subscription",
      "Premium Cosmetics"
    ],
    highlightsZh: [
      "全部暴雪游戏",
      "魔兽订阅",
      "高级装饰品"
    ]
  },
  {
    id: "nintendo-001",
    name: "Nintendo Switch Account - 50+ Digital Games",
    nameZh: "Nintendo Switch 账号 - 50+ 数字版游戏",
    category: "Nintendo",
    categoryZh: "Nintendo",
    description: "Nintendo account with 50+ digital Switch games including Zelda, Mario, Pokemon, and exclusive titles.",
    descriptionZh: "Nintendo 账号，含 50+ 款 Switch 数字版游戏，包括塞尔达、马里奥、宝可梦和独占游戏。",
    price: 129.99,
    priceUsdt: 130,
    image: "/nintendo-account.jpg",
    stock: 10,
    features: [
      "50+ digital Switch games",
      "Nintendo Online subscription",
      "Exclusive Nintendo titles",
      "Gold points available",
      "Region-free access"
    ],
    featuresZh: [
      "50+ Switch 数字版游戏",
      "Nintendo Online 订阅",
      "任天堂独占游戏",
      "含金币",
      "无区域限制"
    ],
    highlights: [
      "Nintendo Exclusives",
      "Digital Library",
      "Online Access"
    ],
    highlightsZh: [
      "任天堂独占",
      "数字库",
      "在线访问"
    ]
  },
  {
    id: "psn-001",
    name: "PlayStation Network - 100+ Games Collection",
    nameZh: "PlayStation Network - 100+ 游戏合集",
    category: "PlayStation",
    categoryZh: "PlayStation",
    description: "PSN account with 100+ digital games for PS4/PS5. Includes PS Plus subscription and exclusive titles.",
    descriptionZh: "PSN 账号，含 100+ PS4/PS5 数字版游戏。包含 PS Plus 订阅和独占游戏。",
    price: 159.99,
    priceUsdt: 160,
    image: "/psn-account.jpg",
    stock: 7,
    features: [
      "100+ PS4/PS5 games",
      "PS Plus Extra subscription",
      "PS5 exclusives included",
      "Cloud save storage",
      "Monthly games claimed"
    ],
    featuresZh: [
      "100+ PS4/PS5 游戏",
      "PS Plus Extra 订阅",
      "含 PS5 独占游戏",
      "云存档存储",
      "已领取每月免费游戏"
    ],
    highlights: [
      "PS5 Ready",
      "PS Plus Extra",
      "Exclusive Titles"
    ],
    highlightsZh: [
      "PS5 可用",
      "PS Plus Extra",
      "独占游戏"
    ]
  }
];

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export function getAllCategories(): string[] {
  return [...new Set(products.map(p => p.category))];
}
