import Image from "next/image";
import styles from "./page.module.css";
/**
 * 首页
 * @returns 
 */
export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-blue-600">
        Welcome to Next.js + TypeScript + Tailwind CSS
      </h2>
    </div>
  );
}
