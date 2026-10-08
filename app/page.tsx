"use client";

import TextEditor from "@/components/text-editor";
import { useState } from "react";

export default function Home() {
  const [post, setPost] = useState("");

  return (
    <main className="min-h-screen bg-[#0b1014] text-white">
      <div className="mx-auto w-full max-w-[1570px] px-6 py-10 lg:px-10">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">
              Notes<span className="text-blue-500">.</span>
            </h1>

            <p className="mt-2 text-lg text-zinc-400">
              Write, format and organize your thoughts.
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl border border-blue-500 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-blue-500/10"
          >
            + New Note
          </button>
        </div>

        <TextEditor
          content={post}
          onChange={setPost}
        />
      </div>
    </main>
  );
}