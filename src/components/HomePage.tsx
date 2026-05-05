"use client";

import React from "react";
import { Product } from "@/lib/products";
import { useLang } from "@/lib/lang";
import { products, getAllCategories } from "@/lib/products";
import { Shield, Gamepad2, Users, BadgeCheck, ArrowRight, Zap, Clock, HeadphonesIcon } from "lucide-react";
import Link from "next/link";

const categoryIcons: Record<string, string> = {
  Steam: "🎮",
  EPIC: "🟣",
  Riot: "⚔️",
  Ubisoft: "🔵",
  Xbox: "🟢",
  Blizzard: "❄️",
  Nintendo: "🍄",
  PlayStation: "🔷",
};

export default function HomePage() {
  const { t, lang } = useLang();
  const categories = getAllCategories();

  return (
    <>
      <HeroSection />

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("How It Works", "购买流程")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: t("1. Choose", "1. 选择"), desc: t("Browse and select your account", "浏览并选择你的账号") },
              { icon: Shield, title: t("2. Pay with USDT", "2. USDT 支付"), desc: t("Send USDT (TRC20) to our wallet", "发送 USDT (TRC20) 到我们的钱包") },
              { icon: Clock, title: t("3. Instant Delivery", "3. 即时发货"), desc: t("Receive credentials within 5 minutes", "5分钟内收到账号信息") },
              { icon: HeadphonesIcon, title: t("4. 24/7 Support", "4. 全天候支持"), desc: t("We're here if you need help", "有任何问题随时联系我们") },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t("Game Platforms", "游戏平台")}
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            {t(
              "Accounts from all major gaming platforms, fully verified and ready to use.",
              "来自所有主要游戏平台的账号，已全面验证，即买即用。"
            )}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div
                key={cat}
                className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition text-center cursor-pointer"
              >
                <span className="text-3xl block mb-2">{categoryIcons[cat] || "🎮"}</span>
                <h3 className="font-semibold text-gray-900">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t("Featured Products", "精选产品")}
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            {t(
              "Premium game accounts from trusted sources. All prices in USD. Pay with USDT (TRC20).",
              "来自可靠渠道的优质游戏账号。价格以美元计。支持 USDT (TRC20) 支付。"
            )}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t("Why Google Game?", "为什么选择 Google Game？")}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {t(
              "We are a premium game account marketplace trusted by thousands of gamers worldwide. Every account is verified for authenticity, and we offer lifetime warranty on all our products. Pay securely with USDT (TRC20) and receive your account credentials instantly.",
              "我们是全球数千名玩家信赖的优质游戏账号交易平台。每个账号均经过真实性验证，所有产品提供终身质保。使用 USDT (TRC20) 安全支付，即时接收账号信息。"
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: t("Accounts Sold", "已售账号"), value: "5,000+" },
              { label: t("Happy Clients", "满意客户"), value: "3,000+" },
              { label: t("Platforms", "支持平台"), value: "8+" },
              { label: t("Warranty", "质保"), value: t("Lifetime", "终身") },
            ].map((stat, i) => (
              <div key={i} className="px-6 py-4 bg-white rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("Ready to Start Playing?", "准备开始游戏了吗？")}
          </h2>
          <p className="text-blue-100 mb-8">
            {t(
              "Browse our collection and find your next account. Instant delivery with USDT payment.",
              "浏览我们的合集，找到你的下一个账号。USDT 支付，即时发货。"
            )}
          </p>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition"
          >
            {t("Shop Now", "立即选购")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              <span className="font-bold text-gray-900">
                Google<span className="text-blue-600">Game</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              {t("© 2026 Google Game. All rights reserved. Not affiliated with Google LLC.", "© 2026 Google Game. 保留所有权利。与 Google LLC 无关。")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function HeroSection() {
  const { t } = useLang();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-8">
          <Shield className="w-4 h-4" />
          {t("100% Verified Accounts", "100% 验证账号")}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {t("Premium Game Accounts", "优质游戏账号")}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {t("At The Best Prices", "最优价格")}
          </span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          {t(
            "Browse our collection of verified game accounts from all major platforms. Secure payment via cryptocurrency. Instant delivery.",
            "浏览我们来自各大平台的已验证游戏账号合集。加密货币安全支付。即时发货。"
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition"
          >
            {t("Browse Products", "浏览产品")}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition"
          >
            {t("How It Works", "购买流程")}
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Gamepad2 className="w-5 h-5 text-blue-500" />
            <span>{t("All Platforms", "全平台覆盖")}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <BadgeCheck className="w-5 h-5 text-blue-500" />
            <span>{t("Verified Sellers", "已验证卖家")}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users className="w-5 h-5 text-blue-500" />
            <span>{t("1000+ Happy Clients", "1000+ 满意客户")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const categoryGradients: Record<string, string> = {
  Steam: "from-blue-600 to-blue-800",
  EPIC: "from-purple-600 to-purple-800",
  Riot: "from-red-500 to-red-700",
  Ubisoft: "from-yellow-500 to-orange-600",
  Xbox: "from-green-600 to-emerald-800",
  Blizzard: "from-cyan-500 to-blue-600",
  Nintendo: "from-red-500 to-rose-600",
  PlayStation: "from-indigo-500 to-blue-700",
};

const categoryEmojis: Record<string, string> = {
  Steam: "🎮",
  EPIC: "🟣",
  Riot: "⚔️",
  Ubisoft: "🔵",
  Xbox: "🟢",
  Blizzard: "❄️",
  Nintendo: "🍄",
  PlayStation: "🔷",
};

function ProductCard({ product }: { product: Product }) {
  const { lang } = useLang();
  const name = lang === "en" ? product.name : product.nameZh;
  const desc = lang === "en" ? product.description : product.descriptionZh;
  const highlights = lang === "en" ? product.highlights : product.highlightsZh;

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-blue-200 transition group h-full flex flex-col overflow-hidden">
        {/* Image Placeholder */}
        <div className={`h-36 bg-gradient-to-br ${categoryGradients[product.category] || "from-gray-600 to-gray-800"} flex items-center justify-center relative`}>
          <span className="text-6xl opacity-90">{categoryEmojis[product.category] || "🎮"}</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
              {product.category}
            </span>
            {product.stock <= 10 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 font-medium">
                {lang === "en" ? "Low Stock" : "库存紧张"}
              </span>
            )}
          </div>

          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
            {name}
          </h3>

          <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">{desc}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {highlights.map((h, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-600">
                {h}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <div>
              <span className="text-xs text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
              <span className="text-xl font-bold text-gray-900 ml-2">${product.price}</span>
            </div>
            <span className="text-xs text-gray-400">USDT: ${product.priceUsdt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}


