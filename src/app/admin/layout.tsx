import SideNav from "@/components/SideNav";

export default function AdminLayout({ children, }: {children: React.ReactNode}) {
  return (
    <main>
      <SideNav/>
      {children}
    </main>
  )
}