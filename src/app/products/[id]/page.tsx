"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { getProduct } from "@/lib/products";
import { ArrowLeft, Copy, Check, Clock, Shield, Zap } from "lucide-react";

const USDT_WALLET = "你的USDT_TRC20钱包地址"; // ⚠️ 把这里改成你的 USDT TRC20 钱包地址

export default function ProductDetail() {
  const { id } = useParams();
  const { t, lang } = useLang();
  const product = getProduct(id as string);
  const [copied, setCopied] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("Product Not Found", "产品未找到")}
          </h1>
          <Link href="/" className="text-blue-600 hover:underline">
            {t("Back to Home", "返回首页")}
          </Link>
        </div>
      </div>
    );
  }

  const name = lang === "en" ? product.name : product.nameZh;
  const desc = lang === "en" ? product.description : product.descriptionZh;
  const features = lang === "en" ? product.features : product.featuresZh;
  const highlights = lang === "en" ? product.highlights : product.highlightsZh;

  const copyAddress = () => {
    navigator.clipboard.writeText(USDT_WALLET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-8 transition">
          <ArrowLeft className="w-4 h-4" />
          {t("Back", "返回")}
        </Link>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Product Info */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                  {product.category}
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-green-50 text-green-600 font-medium">
                  {product.stock > 0
                    ? lang === "en"
                      ? `In Stock (${product.stock})`
                      : `有货 (${product.stock})`
                    : lang === "en"
                    ? "Out of Stock"
                    : "缺货"}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>
              <p className="text-gray-600 mb-8 leading-relaxed">{desc}</p>

              {/* Features */}
              <h3 className="font-semibold text-gray-900 mb-3">
                {t("What's Included", "包含内容")}
              </h3>
              <ul className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {highlights.map((h, i) => (
                  <span key={i} className="text-sm px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-medium">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Order Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 mb-1">
                  {t("Price", "价格")}
                </div>
                <div className="text-4xl font-bold text-gray-900">${product.price}</div>
                <div className="text-sm text-gray-400 mt-1">
                  {t("or", "或")} {product.priceUsdt} USDT (TRC20)
                </div>
              </div>

              {/* Payment Steps */}
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-900 text-sm">
                  {t("How to Purchase:", "如何购买：")}
                </h4>

                <div className="p-4 rounded-xl bg-gray-50">
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    {t("Step 1: Send USDT", "第一步：发送 USDT")}
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    {t(
                      `Send exactly ${product.priceUsdt} USDT (TRC20 network only) to the address below:`,
                      `请发送准确的 ${product.priceUsdt} USDT（仅限 TRC20 网络）到以下地址：`
                    )}
                  </p>

                  <div className="bg-white rounded-lg p-3 border border-gray-200 mb-3">
                    <div className="text-xs text-gray-500 mb-1">
                      {t("Wallet Address (TRC20)", "钱包地址 (TRC20)")}
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="text-xs text-gray-800 flex-1 break-all font-mono">
                        {USDT_WALLET}
                      </code>
                      <button
                        onClick={copyAddress}
                        className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="text-xs text-red-500 font-medium mb-3">
                    ⚠️ {t("Send ONLY via TRC20 network!", "仅通过 TRC20 网络发送！")}
                  </div>

                  <div className="text-sm font-medium text-gray-900 mb-2">
                    {t("Step 2: Contact Us", "第二步：联系我们")}
                  </div>
                  <p className="text-xs text-gray-500">
                    {t(
                      "After sending, contact us on Telegram with your transaction hash and product ID. We will deliver the account within 5 minutes.",
                      "发送后，请通过 Telegram 联系我们并提供交易哈希和产品 ID。我们将在 5 分钟内交付账号。"
                    )}
                  </p>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-2">
                  <a
                    href="https://t.me/你的用户名" // ⚠️ 把这里改成你的 Telegram 链接
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition text-sm"
                  >
                    <Zap className="w-4 h-4" />
                    {t("Contact on Telegram", "联系 Telegram")}
                  </a>
                </div>
              </div>

              {/* Guarantee */}
              <div className="flex items-center gap-2 text-xs text-gray-400 justify-center">
                <Shield className="w-3.5 h-3.5" />
                {t("Lifetime warranty on all accounts", "所有账号终身质保")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
