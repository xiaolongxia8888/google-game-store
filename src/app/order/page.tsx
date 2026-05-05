"use client";

import React from "react";
import { useLang } from "@/lib/lang";
import Link from "next/link";

export default function OrderPage() {
  const { t } = useLang();

  const orders = [
    { id: "#ORDER-001", product: "Steam Premium Account", date: "2026-05-04", status: "Delivered" },
    { id: "#ORDER-002", product: "EPIC Games Mega Account", date: "2026-05-03", status: "Processing" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t("My Orders", "我的订单")}
        </h1>
        <p className="text-gray-500 mb-8">
          {t(
            "Contact us on Telegram with your transaction hash to check order status.",
            "请通过 Telegram 联系我们并提供交易哈希以查询订单状态。"
          )}
        </p>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">
              {t("Recent Orders", "最近订单")}
            </h2>
          </div>
          {orders.map((order) => (
            <div key={order.id} className="p-6 border-b border-gray-50 flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">{order.product}</div>
                <div className="text-sm text-gray-500 mt-1">
                  {order.id} · {order.date}
                </div>
              </div>
              <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                order.status === "Delivered"
                  ? "bg-green-50 text-green-600"
                  : "bg-yellow-50 text-yellow-600"
              }`}>
                {order.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            {t("Back to Home", "返回首页")}
          </Link>
        </div>
      </div>
    </div>
  );
}
