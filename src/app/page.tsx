import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex items-center flex-col">
        <Image
          src="/logo.png"
          alt="Next.js Logo"
          width={400}
          height={50}
          priority
        />
      </div>
    </main>
  );
}
