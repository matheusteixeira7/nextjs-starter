import {
  AcademicCapIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  CubeIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export const navigation = [
  {
    name: 'BI - Dashboard',
    href: '/dashboard',
    icon: ChartPieIcon,
  },
  {
    name: 'Prestadores de serviços',
    href: '/dashboard/prestadores-de-servicos',
    icon: HomeIcon,
  },
  {
    name: 'Meus serviços',
    href: '/dashboard/meus-servicos',
    icon: FolderIcon,
  },
  {
    name: 'Homologação',
    href: '/dashboard/homologacao',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Minha empresa',
    href: '/dashboard/minha-empresa',
    icon: CubeIcon,
  },
  {
    name: 'Controle de isenções',
    href: '/dashboard/controle-de-isencoes',
    icon: ChartPieIcon,
  },
  {
    name: 'EAD',
    href: '/dashboard/ead',
    icon: AcademicCapIcon,
  },
  {
    name: 'Calendário',
    href: '/dashboard/calendario',
    icon: CalendarIcon,
  },
  {
    name: 'Acessos',
    href: '/dashboard/acessos',
    icon: UsersIcon,
  },
  {
    name: 'Portaria',
    href: '/dashboard/portaria',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Validações',
    href: '/dashboard/validacoes',
    icon: BookOpenIcon,
  },
]
