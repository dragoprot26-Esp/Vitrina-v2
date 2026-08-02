export type AppCategory =
  | 'barberia'
  | 'estetica'
  | 'moda'
  | 'gastronomia'
  | 'petshop'
  | 'masajes'
  | 'salud'
  | 'almacen'
  | 'fitness'
  | 'entretenimiento';

export type PageModel = 'cyber-dark' | 'clean-editorial' | 'bento-hub';

export interface AppScreenshot {
  id: string;
  title: string;
  type: 'public' | 'admin';
  url: string;
  description: string;
  highlights: string[];
}

export interface AppShowcase {
  id: string;
  name: string;
  tagline: string;
  category: AppCategory;
  categoryLabel: string;
  iconName: string;
  monthlyPrice: number;
  currency: string;
  badgeText: string;
  publicViewTitle: string;
  publicViewDescription: string;
  adminViewTitle: string;
  adminViewDescription: string;
  keyFeatures: string[];
  screenshots: AppScreenshot[];
  bannerUrl: string;
  demoData: {
    businessName: string;
    phone: string;
    location: string;
    servicesOrProductsName: string;
    items: Array<{
      id: string;
      title: string;
      subtitle: string;
      price: string;
      durationOrStock?: string;
      imageUrl: string;
      badge?: string;
      category?: string;
    }>;
    collaborators?: Array<{
      id: string;
      name: string;
      role: string;
      email: string;
      isAdmin: boolean;
      avatarUrl: string;
      activeHours: string;
    }>;
    sampleOrdersOrTurns?: Array<{
      id: string;
      code: string;
      customer: string;
      phone: string;
      detail: string;
      status: 'Pendiente' | 'Atendido' | 'En Espera' | 'Entregado';
      total: string;
      time: string;
    }>;
  };
  isActive: boolean;
  featured: boolean;
}

export interface SupportTicket {
  id: string;
  appName: string;
  clientName: string;
  issue: string;
  status: 'Abierto' | 'En Proceso' | 'Resuelto';
  priority: 'Alta' | 'Media' | 'Baja';
  createdAt: string;
}

export interface AppRentalLead {
  id: string;
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  rubro: AppCategory;
  preferredPlan: 'micro' | 'pyme' | 'franquicia';
  status: 'Nuevo' | 'Contactado' | 'Activo' | 'Desde Demo';
  createdAt: string;
  notes?: string;
}

export interface DemoTenant {
  id: string;
  tenantName: string;
  businessName: string;
  email: string;
  phone: string;
  appId: string;
  appName: string;
  plan: 'micro' | 'pyme' | 'franquicia';
  status: 'En Prueba' | 'Demo Vencida' | 'En Configuración' | 'Trasladado a Solicitud';
  trialDaysLeft: number;
  notes: string;
  createdAt: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  description: string;
  badge: string;
  priceNote?: string;
  features: string[];
  highlight?: boolean;
  isActive: boolean;
}

