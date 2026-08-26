"use client";

import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    try {
      await fetch("/api/logout", {
        method: "POST",
      });
    } finally {
      window.location.href = "/login";
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-red-300 hover:text-red-600 disabled:opacity-50"
    >
      {loading ? "Выход..." : "Выйти"}
    </button>
  );
}