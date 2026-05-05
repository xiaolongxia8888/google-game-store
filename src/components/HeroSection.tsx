"use client";

import React from "react";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { Product } from "@/lib/products";
import { Shield, Gamepad2, Users, BadgeCheck, ArrowRight } from "lucide-react";

export default function HeroSection() {
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

        {/* Trust Badges */}
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
