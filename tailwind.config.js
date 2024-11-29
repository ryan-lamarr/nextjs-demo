/** @type {import('tailwindcss').Config} */
/** tailwind.config.js 文件，启用 JIT（Just-in-Time）模式*/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // 扫描 app 目录中的文件
    "./pages/**/*.{js,ts,jsx,tsx}", // 如果你使用了 pages 目录，也可以包含
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

