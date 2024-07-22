import { DashboardLayout } from '@/components/dashboard-layout'

export default function DashboardLayoutManager({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}
