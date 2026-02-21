"use client"

import { useState } from "react"
import ReactMarkdown from "react-markdown"

export default function Home() {
  const [markdown, setMarkdown] = useState<string>("")
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <main
      className={`min-h-screen p-10 transition-all duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-gray-100 to-blue-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              Portfolio Generator
            </h1>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          <textarea
            className={`w-full h-[500px] border p-4 rounded-xl shadow-md ${
              darkMode
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-gray-400"
            }`}
            placeholder="Paste your Markdown here..."
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`rounded-xl shadow-xl p-8 overflow-y-auto max-h-[600px] ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <ReactMarkdown>
            {markdown || "Your portfolio preview will appear here..."}
          </ReactMarkdown>
        </div>

      </div>
    </main>
  )
}