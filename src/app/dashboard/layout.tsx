import { SidebarLayout } from '@/components/sidebar-layout'

export default async function SidebarLayoutManager({
  children,
}: {
  children: React.ReactNode
}) {
  return <SidebarLayout>{children}</SidebarLayout>
}
