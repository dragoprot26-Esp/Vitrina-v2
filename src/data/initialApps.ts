import { AppShowcase, PricingPlan } from '../types';

export const INITIAL_APPS: AppShowcase[] = [

  {
    id: 'tapper',
    name: 'Tapper',
    tagline: 'Tienda de tapers y envases con catálogo por capacidad y material, carrito y código de retiro. Retiro o envío, y el cobro en tu negocio.',
    category: 'almacen',
    categoryLabel: 'Bazar & Envases',
    iconName: 'Package',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'NUEVA',
    publicViewTitle: 'Tapper — Tienda Oficial',
    publicViewDescription: 'Catálogo de tapers y envases con foto, capacidad, material y stock. El cliente arma su pedido desde el celular y elige retiro o envío.',
    adminViewTitle: 'Panel de Tapper (Dueño / Colaboradores)',
    adminViewDescription: 'Cargá productos con stock y features, gestioná los encargos con código de retiro, moderá reseñas y consultas, y configurá envío, temas y música.',
    keyFeatures: [
      'Catálogo por capacidad, material y features',
      'Carrito y encargo con código de retiro',
      'Retiro o envío configurable',
      'Reseñas y consultas moderadas',
      'Instalable como App (PWA) y música de fondo'
    ],
    bannerUrl: '/screenshots/tapper/banner.jpg',
    isActive: true,
    featured: true,
    comingSoon: true,
    // Página pública REAL de un inquilino de prueba (demo interactiva).
    demoUrl: 'https://tapper-store.vercel.app/?codigo=TAPP-PREM-2026-JI74',
    screenshots: [
      { id: 'tapp-1', title: 'Página Pública — Catálogo', type: 'public', url: '/screenshots/tapper/pub1.jpg', description: 'Tapers y envases con foto, capacidad y precio. El cliente suma al carrito desde el celular.', highlights: ['Por categorías', 'Capacidad y material', 'Sin comisiones'] },
      { id: 'tapp-2', title: 'Impecable en el Celular (PWA)', type: 'public', url: '/screenshots/tapper/pub2.jpg', description: 'Se ve perfecto en el móvil y se instala como app. Entran escaneando tu QR.', highlights: ['Instalable', 'QR del local', 'Rápida'] },
      { id: 'tapp-3', title: 'Panel — Encargos', type: 'admin', url: '/screenshots/tapper/admin1.jpg', description: 'Cada encargo entra con los datos del cliente y su código de retiro, con estados.', highlights: ['Datos del cliente', 'Código de retiro', 'Estados'] }
    ],
    demoData: {
      businessName: 'Tapper Store',
      phone: '+54 9 11 5829-4010',
      location: 'CABA, Buenos Aires',
      servicesOrProductsName: 'Productos',
      items: [
        { id: 'tapp-p1', title: 'Set de Tapers Herméticos x3', subtitle: 'Plástico libre de BPA. Apto microondas y freezer.', price: '$8.900', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1584990347449-a2d4c2c9fd9c?auto=format&fit=crop&w=400&q=80', badge: 'Más vendido', category: 'Tapers' },
        { id: 'tapp-p2', title: 'Botella de Vidrio Templado 1L', subtitle: 'Con tapa hermética y funda de silicona.', price: '$6.500', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80', category: 'Botellas' },
        { id: 'tapp-p3', title: 'Contenedor Organizador 2.5L', subtitle: 'Cierre a presión, apilable.', price: '$4.200', durationOrStock: 'Últimas unidades', imageUrl: 'https://images.unsplash.com/photo-1631733515809-8ed3e0d0c3a7?auto=format&fit=crop&w=400&q=80', badge: 'Oferta', category: 'Organización' }
      ],
      collaborators: [
        { id: 'tapp-c1', name: 'Vale', role: 'Ventas', email: 'ventas.tapper@gmail.com', isAdmin: false, avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80', activeHours: '8 hrs' }
      ],
      sampleOrdersOrTurns: [
        { id: 'tapp-o1', code: 'TPR-4471', customer: 'Rocío', phone: '1133445566', detail: 'Set de Tapers Herméticos x3', status: 'Pendiente', total: '$8.900', time: '10:30 AM' },
        { id: 'tapp-o2', code: 'TPR-2210', customer: 'Diego', phone: '1122334455', detail: 'Botella de Vidrio Templado 1L', status: 'Entregado', total: '$6.500', time: '12:15 PM' }
      ]
    }
  },

  {
    id: 'aromazen',
    name: 'AromaZen',
    tagline: 'Tienda de saumerios, aromatizantes y bienestar holístico. Catálogo místico, música de fondo, reseñas y consultas — con retiro y cobro en tu negocio.',
    category: 'masajes',
    categoryLabel: 'Aromaterapia & Bienestar',
    iconName: 'Flame',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'NUEVA',
    publicViewTitle: 'AromaZen — Tienda Oficial',
    publicViewDescription: 'Vidriera elegante de saumerios, resinas y aromatizantes. El cliente explora por categoría, lee tus métodos de limpieza espiritual, escucha música de fondo y arma su pedido desde el celular.',
    adminViewTitle: 'Panel de AromaZen (Dueño / Colaboradores)',
    adminViewDescription: 'Cargá tu catálogo con fotos y stock, recibí los encargos en vivo con código de retiro, moderá reseñas y respondé consultas — todo configurable desde tu panel.',
    keyFeatures: [
      'Catálogo por categorías (saumerios, resinas, aromatizantes)',
      'Métodos de limpieza espiritual para el cliente',
      'Encargos en vivo con código de retiro',
      'Reseñas y consultas moderadas',
      'Música de fondo e instalable como App (PWA)'
    ],
    bannerUrl: '/screenshots/aromazen/banner.jpg',
    isActive: true,
    featured: true,
    comingSoon: true,
    // Demo interactiva: la página por defecto ya viene con catálogo cargado (se ve de 10).
    demoUrl: 'https://aromazen-pwa-multitenant.vercel.app/',
    screenshots: [
      { id: 'aroma-1', title: 'Página Pública — Vidriera Mística', type: 'public', url: '/screenshots/aromazen/pub1.jpg', description: 'Catálogo de saumerios y aromatizantes con foto, precio y detalle. El cliente arma su pedido desde el celular.', highlights: ['Estilo místico', 'Por categorías', 'Sin comisiones'] },
      { id: 'aroma-2', title: 'Impecable en el Celular (PWA)', type: 'public', url: '/screenshots/aromazen/pub2.jpg', description: 'Se ve perfecto en el móvil y se instala como app. Entran escaneando tu QR.', highlights: ['Instalable', 'QR del local', 'Rápida'] },
      { id: 'aroma-3', title: 'Panel — Gestión de Productos', type: 'admin', url: '/screenshots/aromazen/admin1.jpg', description: 'Cargá y editá productos con fotos, precio y stock en un clic. Cambios al instante.', highlights: ['Fotos y stock', 'Precio', 'Cambios al instante'] }
    ],
    demoData: {
      businessName: 'AromaZen Store',
      phone: '+54 9 11 5829-4010',
      location: 'CABA, Buenos Aires',
      servicesOrProductsName: 'Productos',
      items: [
        { id: 'aroma-p1', title: 'Saumerio Palo Santo & Lavanda', subtitle: 'Varillas gruesas enrolladas a mano con madera sagrada de Palo Santo orgánico.', price: '$1.850', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=400&q=80', badge: 'Destacado', category: 'Saumerios' },
        { id: 'aroma-p2', title: 'Aromatizante Ambiental Sándalo Hindú', subtitle: 'Fragancia concentrada para textiles y ambientes con aceite esencial puro.', price: '$3.400', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80', category: 'Aromatizantes' },
        { id: 'aroma-p3', title: 'Resina Copal Blanco en Lágrimas', subtitle: 'Resina pura para sahumar con carbón. 100g.', price: '$2.200', durationOrStock: 'Últimas unidades', imageUrl: 'https://images.unsplash.com/photo-1611072172377-0cabc3addb30?auto=format&fit=crop&w=400&q=80', badge: 'Promo', category: 'Resinas & Carbones' }
      ],
      collaborators: [
        { id: 'aroma-c1', name: 'Luna', role: 'Atención', email: 'ventas.aromazen@gmail.com', isAdmin: false, avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80', activeHours: '6 hrs' }
      ],
      sampleOrdersOrTurns: [
        { id: 'aroma-o1', code: 'AZ-4471', customer: 'Camila', phone: '1133445566', detail: 'Saumerio Palo Santo & Lavanda x3', status: 'Pendiente', total: '$5.550', time: '10:30 AM' },
        { id: 'aroma-o2', code: 'AZ-2210', customer: 'Tomás', phone: '1122334455', detail: 'Aromatizante Sándalo Hindú', status: 'Entregado', total: '$3.400', time: '12:15 PM' }
      ]
    }
  },

  {
    id: 'brillos',
    name: 'Brillos Store Neón',
    tagline: 'Tienda de moda, indumentaria y calzados con vidriera neón. Catálogo con talles, carrito y código de retiro.',
    category: 'moda',
    categoryLabel: 'Moda & Calzado',
    iconName: 'Gem',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'APP PWA',
    publicViewTitle: 'Brillos Store Neón — Tienda Oficial',
    publicViewDescription: 'Vidriera neón que impacta apenas entrar. El cliente ve productos por categoría con talles, fotos y precio, y suma al canasto desde el celular.',
    adminViewTitle: 'Panel de Brillos (Dueño / Colaboradores)',
    adminViewDescription: 'Carga de productos con fotos y talles, encargos en vivo con código de retiro, reseñas moderadas y página pública configurable.',
    keyFeatures: [
      'Catálogo por categorías con talles y fotos',
      'Carrito y encargo con código de retiro',
      'Pedidos en vivo en el panel',
      'Reseñas y opiniones moderadas',
      'Instalable como App (PWA) en el celular'
    ],
    bannerUrl: '/screenshots/brillos/banner.jpg',
    isActive: true,
    featured: true,
    // Demo interactiva: página pública con catálogo cargado.
    demoUrl: 'https://brillos-neon.vercel.app/',
    screenshots: [
      { id: 'bril-1', title: 'Página Pública — Vidriera Neón', type: 'public', url: '/screenshots/brillos/pub1.jpg', description: 'Catálogo con talles, fotos y precio. El cliente suma al canasto desde el celular.', highlights: ['Estilo neón', 'Talles y fotos', 'Sin comisiones'] },
      { id: 'bril-2', title: 'Categorías y Productos', type: 'public', url: '/screenshots/brillos/pub2.jpg', description: 'Remeras, buzos, calzados y accesorios ordenados por categoría.', highlights: ['Por categorías', 'Carrito', 'QR del local'] },
      { id: 'bril-3', title: 'Panel — Carga de Productos', type: 'admin', url: '/screenshots/brillos/admin1.jpg', description: 'Cargá y editá productos con fotos, talles, precio y stock en un clic.', highlights: ['Fotos y talles', 'Precio y stock', 'Cambios al instante'] },
      { id: 'bril-4', title: 'Panel — Encargos en Vivo', type: 'admin', url: '/screenshots/brillos/admin2.jpg', description: 'Cada encargo entra con los datos del cliente y su código de retiro.', highlights: ['Datos del cliente', 'Código de retiro', 'Estados'] }
    ],
    demoData: {
      businessName: 'Brillos Store Neón',
      phone: '+54 9 11 5829-4010',
      location: 'CABA, Buenos Aires',
      servicesOrProductsName: 'Productos',
      items: [
        { id: 'bril-p1', title: 'Remera Cyber Neon Oversized', subtitle: 'Talles S al XXL. Algodón premium con estampa neón.', price: '$18.500', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80', badge: 'Destacado', category: 'Remeras' },
        { id: 'bril-p2', title: 'Buzo Hoodie Glow Violeta', subtitle: 'Talles M, L, XL. Frisa con capucha.', price: '$38.900', durationOrStock: 'Últimas unidades', imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80', category: 'Buzos' },
        { id: 'bril-p3', title: 'Zapatillas Urban Neon', subtitle: 'Del 36 al 44. Suela liviana.', price: '$54.000', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80', badge: 'Promo', category: 'Calzados' }
      ],
      collaborators: [
        { id: 'bril-c1', name: 'Sol', role: 'Vendedora', email: 'ventas.brillos@gmail.com', isAdmin: false, avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80', activeHours: '8 hrs' }
      ],
      sampleOrdersOrTurns: [
        { id: 'bril-o1', code: 'RET-BR-4471', customer: 'Melina', phone: '1133445566', detail: 'Buzo Hoodie Glow (L)', status: 'Pendiente', total: '$38.900', time: '10:30 AM' },
        { id: 'bril-o2', code: 'RET-BR-2210', customer: 'Nahuel', phone: '1122334455', detail: 'Zapatillas Urban Neon (42)', status: 'Entregado', total: '$54.000', time: '12:15 PM' }
      ]
    }
  },
  
  {
    id: 'boutique',
    name: 'Boutique NY',
    tagline: 'Boutique de indumentaria con onda de vidriera de Nueva York. Catálogo, carrito y retiro en tienda.',
    category: 'moda',
    categoryLabel: 'Moda & Calzado',
    iconName: 'ShoppingBag',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'MÁS ALQUILADO',
    publicViewTitle: 'Boutique NY — Página Pública',
    publicViewDescription: 'Vidriera editorial estilo Nueva York. Catálogo con variantes de talle y color, carrito y pedidos con código de retiro en tienda.',
    adminViewTitle: 'Panel de Boutique (Dueño / Vendedores)',
    adminViewDescription: 'Inventario, vendedores con acceso propio, estado de pedidos, métricas de ventas y página pública 100% configurable.',
    keyFeatures: [
      'Catálogo con talles y colores',
      'Carrito y código de retiro en tienda',
      'Vendedores con acceso propio',
      'Estado de pedidos y métricas',
      'Compartir en redes con un clic'
    ],
    bannerUrl: '/screenshots/boutique/banner.jpg',
    isActive: true,
    featured: true,
    // Demo interactiva: página pública con catálogo cargado.
    demoUrl: 'https://boutique-multi-tenant-platform.vercel.app/',
    screenshots: [
      { id: 'bout-1', title: 'Página Pública — Vidriera NY', type: 'public', url: '/screenshots/boutique/pub1.jpg', description: 'Colección con foto, precio y talles. Estilo outlet premium neoyorquino.', highlights: ['Estilo NY', 'Talles y colores', 'Retiro en tienda'] },
      { id: 'bout-2', title: 'Canasto del Cliente', type: 'public', url: '/screenshots/boutique/pub2.jpg', description: 'El cliente arma su pedido y confirma con código de retiro.', highlights: ['Carrito', 'Código de retiro', 'Sin comisiones'] },
      { id: 'bout-3', title: 'Panel — Inventario', type: 'admin', url: '/screenshots/boutique/admin1.jpg', description: 'Control de stock, precios y variantes desde el panel.', highlights: ['Stock', 'Precios', 'Variantes'] },
      { id: 'bout-4', title: 'Panel — Pedidos', type: 'admin', url: '/screenshots/boutique/admin2.jpg', description: 'Pedidos en vivo con datos del cliente y estado.', highlights: ['Pedidos en vivo', 'Estados', 'Vendedores'] }
    ],
    demoData: {
      businessName: 'Boutique NY (Prueba)',
      phone: '+54 9 11 3503-7000',
      location: 'Manhattan Showroom · CABA',
      servicesOrProductsName: 'Productos',
      items: [
        { id: 'bout-p1', title: 'Vestido Editorial Negro', subtitle: 'Talles 1 al 4. Corte premium.', price: '$62.000', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80', badge: 'Lo Nuevo', category: 'Lo Nuevo' },
        { id: 'bout-p2', title: 'Blazer Sastre Camel', subtitle: 'Talles S, M, L. Paño italiano.', price: '$78.000', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80', category: 'Clásicos' },
        { id: 'bout-p3', title: 'Botinetas de Cuero', subtitle: 'Del 35 al 41. Hechas a mano.', price: '$95.000', durationOrStock: 'Últimas', imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80', badge: 'Promo', category: 'Calzado' }
      ],
      collaborators: [
        { id: 'bout-c1', name: 'Carla', role: 'Vendedora (Co-Admin)', email: 'carla.boutique@gmail.com', isAdmin: true, avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80', activeHours: '9 hrs' }
      ],
      sampleOrdersOrTurns: [
        { id: 'bout-o1', code: 'RET-NY-8812', customer: 'Julieta Z.', phone: '1144556677', detail: 'Blazer Sastre Camel (M)', status: 'Pendiente', total: '$78.000', time: '11:00 AM' },
        { id: 'bout-o2', code: 'RET-NY-3390', customer: 'Rocío', phone: '1155667788', detail: 'Botinetas de Cuero (38)', status: 'Atendido', total: '$95.000', time: '16:20 PM' }
      ]
    }
  },
  
  {
    id: 'clothes',
    name: 'Clothes — Claris Boutique',
    tagline: 'Moda premium online. Catálogo con talles y colores, carrito y encargos con retiro en tienda.',
    category: 'moda',
    categoryLabel: 'Moda & Calzado',
    iconName: 'Shirt',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'APP PWA',
    publicViewTitle: 'Claris Boutique Glamour — Página Pública',
    publicViewDescription: 'Moda sofisticada y de alta costura. Catálogo por categorías con foto, talle y precio, y carrito para encargar.',
    adminViewTitle: 'Panel de Clothes (Dueño / Colaboradores)',
    adminViewDescription: 'Carga de prendas, colaboradores con acceso propio, encargos en vivo y comentarios moderados.',
    keyFeatures: [
      'Catálogo por categorías con talles',
      'Carrito y encargo con retiro',
      'Colaboradores con acceso propio',
      'Encargos en vivo y comentarios',
      'Instalable como App (PWA)'
    ],
    bannerUrl: '/screenshots/clothes/banner.jpg',
    isActive: true,
    featured: false,
    screenshots: [
      { id: 'clot-1', title: 'Página Pública — Vidriera', type: 'public', url: '/screenshots/clothes/pub1.jpg', description: 'Portada elegante con colección destacada por categorías.', highlights: ['Moda premium', 'Por categorías', 'Retiro en tienda'] },
      { id: 'clot-2', title: 'Colección', type: 'public', url: '/screenshots/clothes/pub2.jpg', description: 'Prendas con foto, talle y precio, listas para sumar al carrito.', highlights: ['Talles', 'Carrito', 'Reseñas'] },
      { id: 'clot-3', title: 'Panel — Productos', type: 'admin', url: '/screenshots/clothes/admin1.jpg', description: 'Cargá prendas con fotos, talles y precio.', highlights: ['Fotos y talles', 'Precio', 'Stock'] },
      { id: 'clot-4', title: 'Panel — Encargos', type: 'admin', url: '/screenshots/clothes/admin2.jpg', description: 'Encargos en vivo con datos del cliente y estado.', highlights: ['Encargos en vivo', 'Estados', 'Colaboradores'] }
    ],
    demoData: {
      businessName: 'Claris Boutique Glamour',
      phone: '+54 9 11 4000-1234',
      location: 'CABA, Buenos Aires',
      servicesOrProductsName: 'Prendas',
      items: [
        { id: 'clot-p1', title: 'Remera Premium Algodón', subtitle: 'Talles S al XL. Confección de calidad.', price: '$16.900', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=400&q=80', badge: 'Nuevo', category: 'Remeras' },
        { id: 'clot-p2', title: 'Buzo Oversize Beige', subtitle: 'Talles M, L, XL. Frisa premium.', price: '$34.500', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&q=80', category: 'Buzos' },
        { id: 'clot-p3', title: 'Pantalón Sastrero', subtitle: 'Talles 38 al 46. Caída perfecta.', price: '$41.000', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80', badge: 'Promo', category: 'Pantalones' }
      ],
      collaborators: [
        { id: 'clot-c1', name: 'Belén', role: 'Vendedora', email: 'ventas.claris@gmail.com', isAdmin: false, avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80', activeHours: '7 hrs' }
      ],
      sampleOrdersOrTurns: [
        { id: 'clot-o1', code: 'RET-CL-5521', customer: 'Aldana', phone: '1166778899', detail: 'Buzo Oversize Beige (L)', status: 'Pendiente', total: '$34.500', time: '09:45 AM' },
        { id: 'clot-o2', code: 'RET-CL-1180', customer: 'Tomás', phone: '1177889900', detail: 'Pantalón Sastrero (42)', status: 'Entregado', total: '$41.000', time: '13:00 PM' }
      ]
    }
  },
  
  {
    id: 'calzadofemenino',
    name: 'Calzados Femeninos',
    tagline: 'Calzado femenino con portada elegante. Zapatos, zapatillas, botas y sandalias con carrito y retiro.',
    category: 'moda',
    categoryLabel: 'Moda & Calzado',
    iconName: 'Footprints',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'NUEVO',
    demoUrl: 'https://calzados-femeninos-ivory.vercel.app/',
    publicViewTitle: 'Sofía Calzados — Página Pública',
    publicViewDescription: 'Calzado exclusivo para damas modernas. Diseños con foto, talle y precio, listos para sumar al carrito desde el celular.',
    adminViewTitle: 'Panel de Calzados (Dueño / Colaboradores)',
    adminViewDescription: 'Carga de modelos con fotos y talles, encargos en vivo con código de retiro y reseñas moderadas.',
    keyFeatures: [
      'Zapatos, zapatillas, botas y sandalias',
      'Catálogo con talles y fotos',
      'Carrito y código de retiro',
      'Encargos en vivo en el panel',
      'Página pública a tu marca'
    ],
    bannerUrl: '/screenshots/calzadofemenino/banner.jpg',
    isActive: true,
    featured: false,
    screenshots: [
      { id: 'calf-1', title: 'Página Pública — Portada Elegante', type: 'public', url: '/screenshots/calzadofemenino/pub1.jpg', description: 'Portada que enamora, con colección por categorías.', highlights: ['Elegante', 'Por categorías', 'Retiro en local'] },
      { id: 'calf-2', title: 'Panel — Carga de Productos', type: 'admin', url: '/screenshots/calzadofemenino/admin1.jpg', description: 'Cargá modelos con fotos, talles y precio en un clic.', highlights: ['Fotos y talles', 'Precio', 'Categorías'] },
      { id: 'calf-3', title: 'Panel — Encargos', type: 'admin', url: '/screenshots/calzadofemenino/admin2.jpg', description: 'Encargos en vivo con datos de la clienta y código de retiro.', highlights: ['Encargos en vivo', 'Código de retiro', 'Estados'] }
    ],
    demoData: {
      businessName: 'Sofía Calzados',
      phone: '+54 9 11 4200-5566',
      location: 'CABA, Buenos Aires',
      servicesOrProductsName: 'Calzados',
      items: [
        { id: 'calf-p1', title: 'Stiletto Floral', subtitle: 'Del 35 al 40. Estampa exclusiva.', price: '$48.000', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80', badge: 'Destacado', category: 'Zapatos' },
        { id: 'calf-p2', title: 'Zapatilla Urbana Camel', subtitle: 'Del 35 al 41. Suela liviana.', price: '$52.000', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80', category: 'Zapatillas' },
        { id: 'calf-p3', title: 'Bota Caña Alta', subtitle: 'Del 35 al 40. Cuero ecológico.', price: '$67.000', durationOrStock: 'Últimas', imageUrl: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=400&q=80', badge: 'Promo', category: 'Botas' }
      ],
      collaborators: [
        { id: 'calf-c1', name: 'Sofía', role: 'Dueña', email: 'sofia.calzados@gmail.com', isAdmin: true, avatarUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80', activeHours: '9 hrs' }
      ],
      sampleOrdersOrTurns: [
        { id: 'calf-o1', code: 'RET-CF-7742', customer: 'Daniela', phone: '1188990011', detail: 'Bota Caña Alta (37)', status: 'Pendiente', total: '$67.000', time: '10:10 AM' },
        { id: 'calf-o2', code: 'RET-CF-3315', customer: 'Paula', phone: '1199001122', detail: 'Stiletto Floral (38)', status: 'Entregado', total: '$48.000', time: '15:40 PM' }
      ]
    }
  },
  
  {
    id: 'auraglam',
    name: 'Aura Glam — Salón & Spa',
    tagline: 'Reserva de turnos online, catálogo de servicios, tienda de productos y reseñas moderadas.',
    category: 'estetica',
    categoryLabel: 'Uñas, Estética & Belleza',
    iconName: 'Sparkles',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'MÁS ALQUILADO',
    demoUrl: 'https://sal-n-de-belleza-reservas-y-gesti-n.vercel.app/',
    publicViewTitle: 'Aura Glam — Página Pública',
    publicViewDescription: 'Salón & spa con estética premium. La clienta ve tus servicios, reserva su cita en segundos y suma productos desde el celular.',
    adminViewTitle: 'Panel de Aura Glam (Dueña / Colaboradoras)',
    adminViewDescription: 'Agenda de reservas y pedidos en vivo, catálogo de servicios y productos editable, colaboradoras con acceso propio y reseñas moderadas.',
    keyFeatures: [
      'Reserva de turnos online 24 hs',
      'Catálogo de servicios con precio y duración',
      'Tienda de productos integrada',
      'Colaboradoras con acceso propio',
      'Reseñas moderadas + QR del local'
    ],
    bannerUrl: '/screenshots/auraglam/banner.jpg',
    isActive: true,
    featured: true,
    screenshots: [
      { id: 'aura-1', title: 'Página Pública — Reservá tu cita', type: 'public', url: '/screenshots/auraglam/pub1.jpg', description: 'Estética premium. La clienta elige servicio, día y horario en 3 clics.', highlights: ['Reserva 24 hs', 'Estilo premium', 'Sin comisiones'] },
      { id: 'aura-2', title: 'Catálogo de Servicios', type: 'public', url: '/screenshots/auraglam/pub2.jpg', description: 'Servicios con precio y duración, siempre al día.', highlights: ['Precio y duración', 'Categorías', 'Productos'] },
      { id: 'aura-3', title: 'Panel — Agenda', type: 'admin', url: '/screenshots/auraglam/admin1.jpg', description: 'Métricas del día, agenda y accesos a cada sección.', highlights: ['Agenda del día', 'Métricas', 'Secciones'] },
      { id: 'aura-4', title: 'Panel — Reservas y Pedidos', type: 'admin', url: '/screenshots/auraglam/admin2.jpg', description: 'Cada cita y pedido entra en vivo con datos de la clienta.', highlights: ['En vivo', 'Datos de la clienta', 'Estados'] }
    ],
    demoData: {
      businessName: 'Aura Glam Salón & Spa',
      phone: '+54 9 11 4700-8080',
      location: 'CABA, Buenos Aires',
      servicesOrProductsName: 'Servicios',
      items: [
        { id: 'aura-s1', title: 'Manicuría Semipermanente', subtitle: 'Esmaltado premium de larga duración.', price: '$12.000', durationOrStock: '60 min', imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=400&q=80', badge: 'Destacado', category: 'Uñas' },
        { id: 'aura-s2', title: 'Limpieza Facial Profunda', subtitle: 'Hidratación y puntos negros.', price: '$18.000', durationOrStock: '50 min', imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80', category: 'Facial' },
        { id: 'aura-s3', title: 'Masaje Descontracturante', subtitle: 'Relajación de espalda y cervical.', price: '$22.000', durationOrStock: '45 min', imageUrl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=400&q=80', badge: 'Promo', category: 'Spa' }
      ],
      collaborators: [
        { id: 'aura-c1', name: 'Elena', role: 'Esteticista (Co-Admin)', email: 'elena.auraglam@gmail.com', isAdmin: true, avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80', activeHours: '8 hrs' },
        { id: 'aura-c2', name: 'Rocío', role: 'Manicura', email: 'rocio.auraglam@gmail.com', isAdmin: false, avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80', activeHours: '6 hrs' }
      ],
      sampleOrdersOrTurns: [
        { id: 'aura-t1', code: 'TRN-AG-4471', customer: 'Valeria', phone: '1133445566', detail: 'Manicuría Semi con Rocío', status: 'En Espera', total: '$12.000', time: '10:00 AM' },
        { id: 'aura-t2', code: 'TRN-AG-2210', customer: 'Sofía', phone: '1122334455', detail: 'Limpieza Facial con Elena', status: 'Atendido', total: '$18.000', time: '12:30 PM' }
      ]
    }
  },
  
  {
    id: 'bellasunias',
    name: 'Bellas Uñas',
    tagline: 'Turnos de manicuría y estética, catálogo de servicios y productos, fichas de clientas y reportes.',
    category: 'estetica',
    categoryLabel: 'Uñas, Estética & Belleza',
    iconName: 'Star',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'APP PWA',
    demoUrl: 'https://bellas-u-as-2.vercel.app/',
    publicViewTitle: 'Bellas Uñas — Página Pública',
    publicViewDescription: 'La clienta reserva su turno de manicuría o estética, ve servicios y suma productos desde el celular.',
    adminViewTitle: 'Panel de Bellas Uñas (Dueña / Colaboradoras)',
    adminViewDescription: 'Administrador de turnos, catálogo de servicios y productos, fichas de clientas, colaboradoras y reportes.',
    keyFeatures: [
      'Turnos de manicuría y estética online',
      'Catálogo de servicios y productos',
      'Fichas de clientas',
      'Colaboradoras con acceso propio',
      'Reportes de la actividad'
    ],
    bannerUrl: '/screenshots/bellasunias/banner.jpg',
    isActive: true,
    featured: false,
    screenshots: [
      { id: 'bell-1', title: 'Página Pública — Reservá tu turno', type: 'public', url: '/screenshots/bellasunias/pub1.jpg', description: 'Servicios de uñas y estética listos para reservar.', highlights: ['Reserva online', 'Servicios', 'Productos'] },
      { id: 'bell-2', title: 'Catálogo de Servicios', type: 'public', url: '/screenshots/bellasunias/pub2.jpg', description: 'Servicios con precio y duración, siempre al día.', highlights: ['Precio y duración', 'Categorías', 'Reseñas'] },
      { id: 'bell-3', title: 'Panel — Administrador de Turnos', type: 'admin', url: '/screenshots/bellasunias/admin1.jpg', description: 'Turnos agendados con estado y datos de la clienta.', highlights: ['Agenda', 'Estados', 'Contacto directo'] },
      { id: 'bell-4', title: 'Panel Principal', type: 'admin', url: '/screenshots/bellasunias/admin2.jpg', description: 'Control general con accesos a cada sección.', highlights: ['Resumen', 'Secciones', 'Reportes'] }
    ],
    demoData: {
      businessName: 'Bellas Uñas',
      phone: '+54 9 11 4800-3030',
      location: 'CABA, Buenos Aires',
      servicesOrProductsName: 'Servicios',
      items: [
        { id: 'bell-s1', title: 'Kapping Gel', subtitle: 'Refuerzo y esmaltado semipermanente.', price: '$11.000', durationOrStock: '70 min', imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80', badge: 'Destacado', category: 'Uñas' },
        { id: 'bell-s2', title: 'Soft Gel Esculpidas', subtitle: 'Extensión con diseño a elección.', price: '$15.000', durationOrStock: '90 min', imageUrl: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=400&q=80', category: 'Uñas' },
        { id: 'bell-s3', title: 'Perfilado de Cejas', subtitle: 'Diseño y perfilado con henna.', price: '$8.000', durationOrStock: '30 min', imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=80', badge: 'Promo', category: 'Estética' }
      ],
      collaborators: [
        { id: 'bell-c1', name: 'Sofía Ruiz', role: 'Manicura (Co-Admin)', email: 'sofia.bellasunias@gmail.com', isAdmin: true, avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80', activeHours: '8 hrs' }
      ],
      sampleOrdersOrTurns: [
        { id: 'bell-t1', code: 'TRN-BU-5521', customer: 'Camila', phone: '1166778899', detail: 'Soft Gel Esculpidas', status: 'Pendiente', total: '$15.000', time: '09:30 AM' },
        { id: 'bell-t2', code: 'TRN-BU-1180', customer: 'Lucía', phone: '1177889900', detail: 'Kapping Gel', status: 'Atendido', total: '$11.000', time: '14:00 PM' }
      ]
    }
  },
  
  {
    id: 'bellavita',
    name: 'BellaVista Estética',
    tagline: 'Reserva de turnos online, catálogo de servicios, galería de trabajos y opiniones de clientas.',
    category: 'estetica',
    categoryLabel: 'Uñas, Estética & Belleza',
    iconName: 'Heart',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'NUEVO',
    demoUrl: 'https://sal-n-de-est-tica.vercel.app/',
    publicViewTitle: 'BellaVista Estética — Página Pública',
    publicViewDescription: 'La imagen premium que tu estética merece: reserva de turnos 24 hs, catálogo de servicios y opiniones que generan confianza.',
    adminViewTitle: 'Panel de BellaVista (Dueña / Profesionales)',
    adminViewDescription: 'Reservas en vivo, catálogo de servicios y productos, apartados y galería de trabajos, y comentarios moderados.',
    keyFeatures: [
      'Reserva de turnos online 24 hs',
      'Catálogo de servicios editable',
      'Galería de trabajos',
      'Profesionales con acceso propio',
      'Opiniones moderadas'
    ],
    bannerUrl: '/screenshots/bellavita/banner.jpg',
    isActive: true,
    featured: false,
    screenshots: [
      { id: 'bvita-1', title: 'Página Pública — Reservá tu turno', type: 'public', url: '/screenshots/bellavita/pub1.jpg', description: 'Estética elegante con reserva de turnos y catálogo.', highlights: ['Reserva 24 hs', 'Elegante', 'Opiniones'] },
      { id: 'bvita-2', title: 'Catálogo de Servicios', type: 'public', url: '/screenshots/bellavita/pub2.jpg', description: 'Servicios con precio y duración, siempre al día.', highlights: ['Precio y duración', 'Galería', 'Categorías'] },
      { id: 'bvita-3', title: 'Panel — Página Configurable', type: 'admin', url: '/screenshots/bellavita/admin1.jpg', description: 'Personalizá textos, secciones y apartados a tu marca.', highlights: ['Textos editables', 'Apartados', 'Tu marca'] },
      { id: 'bvita-4', title: 'Panel — Comentarios', type: 'admin', url: '/screenshots/bellavita/admin2.jpg', description: 'Aprobás las opiniones antes de publicarlas.', highlights: ['Moderación', 'Prueba social', 'Reputación'] }
    ],
    demoData: {
      businessName: 'BellaVista Estética',
      phone: '+54 9 11 4900-7070',
      location: 'CABA, Buenos Aires',
      servicesOrProductsName: 'Servicios',
      items: [
        { id: 'bvita-s1', title: 'Depilación Definitiva', subtitle: 'Sesión con equipo de última generación.', price: '$20.000', durationOrStock: '40 min', imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=400&q=80', badge: 'Destacado', category: 'Estética' },
        { id: 'bvita-s2', title: 'Lifting de Pestañas', subtitle: 'Curvado y nutrición.', price: '$14.000', durationOrStock: '60 min', imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=400&q=80', category: 'Mirada' },
        { id: 'bvita-s3', title: 'Masaje Relajante', subtitle: 'Cuerpo completo con aromaterapia.', price: '$24.000', durationOrStock: '55 min', imageUrl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=400&q=80', badge: 'Promo', category: 'Spa' }
      ],
      collaborators: [
        { id: 'bvita-c1', name: 'Florencia', role: 'Cosmetóloga (Co-Admin)', email: 'flor.bellavista@gmail.com', isAdmin: true, avatarUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80', activeHours: '9 hrs' }
      ],
      sampleOrdersOrTurns: [
        { id: 'bvita-t1', code: 'TRN-BV-7742', customer: 'Daniela', phone: '1188990011', detail: 'Lifting de Pestañas', status: 'Pendiente', total: '$14.000', time: '11:15 AM' },
        { id: 'bvita-t2', code: 'TRN-BV-3315', customer: 'Agostina', phone: '1199001122', detail: 'Depilación Definitiva', status: 'Atendido', total: '$20.000', time: '16:00 PM' }
      ]
    }
  },
  {
      "id": "pizza",
      "name": "Pizza NYC",
      "tagline": "Menú digital con pedidos al instante, seguimiento en tiempo real, retiro y delivery. Sin comisiones.",
      "category": "gastronomia",
      "categoryLabel": "Gastronomía & Fast Food",
      "iconName": "Pizza",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "MÁS ALQUILADO",
      "publicViewTitle": "Pizza NYC — Página Pública",
      "publicViewDescription": "Menú digital con fotos y precios. El cliente arma su pedido y sigue el estado en vivo desde el celular.",
      "adminViewTitle": "Panel de Pizza NYC (Dueño / Equipo)",
      "adminViewDescription": "Dashboard con pedidos en vivo, productos, seguimiento en tiempo real y página pública configurable.",
      "keyFeatures": [
            "Menú digital con fotos y precios",
            "Pedidos en vivo con sonido",
            "Seguimiento en tiempo real",
            "Retiro y delivery propio",
            "Sin comisiones de apps"
      ],
      "bannerUrl": "/screenshots/pizza/banner.jpg",
      "isActive": true,
      "featured": true,
      "screenshots": [
            {
                  "id": "pz-1",
                  "title": "Página Pública — Menú",
                  "type": "public",
                  "url": "/screenshots/pizza/pub1.jpg",
                  "description": "Menú con fotos, precios y arma tu pedido.",
                  "highlights": [
                        "Menú digital",
                        "Pedido al instante",
                        "Sin comisiones"
                  ]
            },
            {
                  "id": "pz-2",
                  "title": "Seguimiento en Vivo",
                  "type": "public",
                  "url": "/screenshots/pizza/pub2.jpg",
                  "description": "El cliente ve el estado de su pedido en tiempo real.",
                  "highlights": [
                        "Tiempo real",
                        "Estados",
                        "Delivery/retiro"
                  ]
            },
            {
                  "id": "pz-3",
                  "title": "Panel — Dashboard",
                  "type": "admin",
                  "url": "/screenshots/pizza/admin1.jpg",
                  "description": "Métricas del día y accesos rápidos.",
                  "highlights": [
                        "Métricas",
                        "Accesos",
                        "Equipo"
                  ]
            },
            {
                  "id": "pz-4",
                  "title": "Panel — Encargos",
                  "type": "admin",
                  "url": "/screenshots/pizza/admin2.jpg",
                  "description": "Pedidos en vivo con datos del cliente y estado.",
                  "highlights": [
                        "En vivo",
                        "Estados",
                        "Datos del cliente"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Pizza NYC",
            "phone": "+54 9 11 4600-9090",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "pz-p1",
                        "title": "Muzzarella Grande",
                        "subtitle": "8 porciones. Masa madre 24 hs.",
                        "price": "$9.500",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Pizzas"
                  },
                  {
                        "id": "pz-p2",
                        "title": "Napolitana",
                        "subtitle": "Con tomate, ajo y albahaca.",
                        "price": "$11.200",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&fit=crop&w=400&q=80",
                        "category": "Pizzas"
                  },
                  {
                        "id": "pz-p3",
                        "title": "Empanadas x12",
                        "subtitle": "Docena surtida.",
                        "price": "$8.000",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Combos"
                  }
            ],
            "collaborators": [
                  {
                        "id": "pz-c1",
                        "name": "Marco",
                        "role": "Cocina",
                        "email": "marco.pizzeria@gmail.com",
                        "isAdmin": false,
                        "avatarUrl": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "8 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "pz-o1",
                        "code": "PED-PZ-9812",
                        "customer": "Franco",
                        "phone": "1133445566",
                        "detail": "2 Muzzarella + Empanadas",
                        "status": "Pendiente",
                        "total": "$27.000",
                        "time": "20:15 PM"
                  },
                  {
                        "id": "pz-o2",
                        "code": "PED-PZ-4411",
                        "customer": "Belu",
                        "phone": "1122334455",
                        "detail": "Napolitana grande",
                        "status": "Entregado",
                        "total": "$11.200",
                        "time": "21:00 PM"
                  }
            ]
      }
},
  
  {
      "id": "pancheria",
      "name": "La Panchería del Jefe",
      "tagline": "Menú digital de panchos y comidas rápidas, pedidos al instante con retiro y envío. Sin comisiones.",
      "category": "gastronomia",
      "categoryLabel": "Gastronomía & Fast Food",
      "iconName": "Sandwich",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "APP PWA",
      "publicViewTitle": "La Panchería del Jefe — Página Pública",
      "publicViewDescription": "Menú con fotos y precios. El cliente pide en segundos y elige retiro o envío.",
      "adminViewTitle": "Panel de la Panchería (Dueño / Equipo)",
      "adminViewDescription": "Pedidos en vivo con sonido en cocina, control de ventas, retiros y envíos, y diseño configurable.",
      "keyFeatures": [
            "Menú digital con promos y ofertas",
            "Pedidos en vivo con sonido",
            "Retiro y envío propio",
            "Control de ventas diario",
            "Sin comisiones de apps"
      ],
      "bannerUrl": "/screenshots/pancheria/banner.jpg",
      "isActive": true,
      "featured": false,
      "screenshots": [
            {
                  "id": "pa-1",
                  "title": "Página Pública — Menú",
                  "type": "public",
                  "url": "/screenshots/pancheria/pub1.jpg",
                  "description": "Panchos y comidas con foto y precio.",
                  "highlights": [
                        "Menú digital",
                        "Promos",
                        "Sin comisiones"
                  ]
            },
            {
                  "id": "pa-2",
                  "title": "Categorías y Ofertas",
                  "type": "public",
                  "url": "/screenshots/pancheria/pub2.jpg",
                  "description": "Productos, promos y ofertas ordenados.",
                  "highlights": [
                        "Ofertas",
                        "Categorías",
                        "Pedido rápido"
                  ]
            },
            {
                  "id": "pa-3",
                  "title": "Panel — Pedidos",
                  "type": "admin",
                  "url": "/screenshots/pancheria/admin1.jpg",
                  "description": "Pedidos en vivo con datos y estado.",
                  "highlights": [
                        "En vivo",
                        "Estados",
                        "Cocina"
                  ]
            },
            {
                  "id": "pa-4",
                  "title": "Panel — Control de Ventas",
                  "type": "admin",
                  "url": "/screenshots/pancheria/admin2.jpg",
                  "description": "Resumen de ventas del día.",
                  "highlights": [
                        "Ventas del día",
                        "Reportes",
                        "Caja"
                  ]
            }
      ],
      "demoData": {
            "businessName": "La Panchería del Jefe",
            "phone": "+54 9 11 4550-1212",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "pa-p1",
                        "title": "Súper Pancho Completo",
                        "subtitle": "Con todos los aderezos y papas.",
                        "price": "$3.500",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1612392062422-ef19b42f74df?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Panchos"
                  },
                  {
                        "id": "pa-p2",
                        "title": "Hamburguesa Doble",
                        "subtitle": "Doble carne, cheddar y bacon.",
                        "price": "$6.800",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
                        "category": "Burgers"
                  },
                  {
                        "id": "pa-p3",
                        "title": "Papas con Cheddar",
                        "subtitle": "Porción grande.",
                        "price": "$4.200",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Acompañamientos"
                  }
            ],
            "collaborators": [
                  {
                        "id": "pa-c1",
                        "name": "Marta",
                        "role": "Atención (Co-Admin)",
                        "email": "marta.pancheria@gmail.com",
                        "isAdmin": true,
                        "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "9 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "pa-o1",
                        "code": "PED-PA-5521",
                        "customer": "Nico",
                        "phone": "1166778899",
                        "detail": "2 Súper Pancho + Papas",
                        "status": "Pendiente",
                        "total": "$11.200",
                        "time": "19:45 PM"
                  },
                  {
                        "id": "pa-o2",
                        "code": "PED-PA-1180",
                        "customer": "Sofi",
                        "phone": "1177889900",
                        "detail": "Hamburguesa Doble",
                        "status": "Entregado",
                        "total": "$6.800",
                        "time": "20:30 PM"
                  }
            ]
      }
},
  
  {
      "id": "comidarapida",
      "name": "Comida Rápida",
      "tagline": "Menú digital configurable para fast food: pedidos al instante, promos, retiro y envío. Sin comisiones.",
      "category": "gastronomia",
      "categoryLabel": "Gastronomía & Fast Food",
      "iconName": "UtensilsCrossed",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "NUEVO",
      "publicViewTitle": "Comida Rápida — Página Pública",
      "publicViewDescription": "Menú con portada configurable, fotos y precios. Pedidos en segundos desde el celular.",
      "adminViewTitle": "Panel de Comida Rápida (Dueño / Equipo)",
      "adminViewDescription": "Carga de productos y promos, pedidos en vivo, equipos y página pública 100% configurable.",
      "keyFeatures": [
            "Portada y menú configurables",
            "Pedidos en vivo",
            "Promociones destacadas",
            "Retiro y envío",
            "Sin comisiones de apps"
      ],
      "bannerUrl": "/screenshots/comidarapida/banner.jpg",
      "isActive": true,
      "featured": false,
      "screenshots": [
            {
                  "id": "cr-1",
                  "title": "Página Pública — Portada",
                  "type": "public",
                  "url": "/screenshots/comidarapida/pub1.jpg",
                  "description": "Portada configurable con tu marca.",
                  "highlights": [
                        "Configurable",
                        "Tu marca",
                        "Menú"
                  ]
            },
            {
                  "id": "cr-2",
                  "title": "Menú de Portada",
                  "type": "public",
                  "url": "/screenshots/comidarapida/pub2.jpg",
                  "description": "Menú destacado con fotos y precios.",
                  "highlights": [
                        "Fotos",
                        "Precios",
                        "Promos"
                  ]
            },
            {
                  "id": "cr-3",
                  "title": "Panel — Pedidos",
                  "type": "admin",
                  "url": "/screenshots/comidarapida/admin1.jpg",
                  "description": "Pedidos en vivo con datos y estado.",
                  "highlights": [
                        "En vivo",
                        "Estados",
                        "Cocina"
                  ]
            },
            {
                  "id": "cr-4",
                  "title": "Panel — Productos",
                  "type": "admin",
                  "url": "/screenshots/comidarapida/admin2.jpg",
                  "description": "Cargá productos, promos y precios.",
                  "highlights": [
                        "Productos",
                        "Promos",
                        "Precios"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Comida Rápida (Prueba)",
            "phone": "+54 9 11 4570-3434",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "cr-p1",
                        "title": "Combo Doble",
                        "subtitle": "Burger doble + papas + gaseosa.",
                        "price": "$8.900",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Combos"
                  },
                  {
                        "id": "cr-p2",
                        "title": "Wrap de Pollo",
                        "subtitle": "Con vegetales frescos.",
                        "price": "$5.500",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80",
                        "category": "Wraps"
                  },
                  {
                        "id": "cr-p3",
                        "title": "Nuggets x10",
                        "subtitle": "Con salsa a elección.",
                        "price": "$4.800",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Pollo"
                  }
            ],
            "collaborators": [
                  {
                        "id": "cr-c1",
                        "name": "Diego",
                        "role": "Cajero",
                        "email": "diego.comida@gmail.com",
                        "isAdmin": false,
                        "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "7 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "cr-o1",
                        "code": "PED-CR-7742",
                        "customer": "Lucas",
                        "phone": "1188990011",
                        "detail": "Combo Doble x2",
                        "status": "Pendiente",
                        "total": "$17.800",
                        "time": "13:20 PM"
                  },
                  {
                        "id": "cr-o2",
                        "code": "PED-CR-3315",
                        "customer": "Aye",
                        "phone": "1199001122",
                        "detail": "Wrap de Pollo",
                        "status": "Entregado",
                        "total": "$5.500",
                        "time": "14:05 PM"
                  }
            ]
      }
},
  
  {
      "id": "dulzura",
      "name": "Dulzura del Hogar",
      "tagline": "Repostería y comida casera por encargo: catálogo con fotos, pedidos y entregas. Sin comisiones.",
      "category": "gastronomia",
      "categoryLabel": "Gastronomía & Fast Food",
      "iconName": "Cake",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "APP PWA",
      "publicViewTitle": "Dulzura del Hogar — Página Pública",
      "publicViewDescription": "Catálogo dulce con fotos y precios. El cliente encarga tortas y viandas desde el celular.",
      "adminViewTitle": "Panel de Dulzura (Dueño / Ayudantes)",
      "adminViewDescription": "Carga de productos, encargos y entregas, apariencia configurable y guía rápida.",
      "keyFeatures": [
            "Catálogo con fotos y precios",
            "Encargos y entregas",
            "Apariencia configurable",
            "Ayudantes con acceso",
            "Sin comisiones de apps"
      ],
      "bannerUrl": "/screenshots/dulzura/banner.jpg",
      "isActive": true,
      "featured": false,
      "screenshots": [
            {
                  "id": "du-1",
                  "title": "Página Pública — Portada",
                  "type": "public",
                  "url": "/screenshots/dulzura/pub1.jpg",
                  "description": "Portada dulce con tu marca.",
                  "highlights": [
                        "Tu marca",
                        "Catálogo",
                        "Encargos"
                  ]
            },
            {
                  "id": "du-2",
                  "title": "Vista Previa",
                  "type": "public",
                  "url": "/screenshots/dulzura/pub2.jpg",
                  "description": "Cómo lo ve el cliente antes de publicar.",
                  "highlights": [
                        "Vista previa",
                        "Fotos",
                        "Precios"
                  ]
            },
            {
                  "id": "du-3",
                  "title": "Panel — Pedidos",
                  "type": "admin",
                  "url": "/screenshots/dulzura/admin1.jpg",
                  "description": "Encargos en vivo con datos del cliente.",
                  "highlights": [
                        "En vivo",
                        "Estados",
                        "Entregas"
                  ]
            },
            {
                  "id": "du-4",
                  "title": "Panel — Productos",
                  "type": "admin",
                  "url": "/screenshots/dulzura/admin2.jpg",
                  "description": "Cargá productos con fotos y precios.",
                  "highlights": [
                        "Productos",
                        "Fotos",
                        "Precios"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Dulzura del Hogar",
            "phone": "+54 9 11 4530-5656",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "du-p1",
                        "title": "Torta Chocotorta",
                        "subtitle": "Porción o entera por encargo.",
                        "price": "$14.000",
                        "durationOrStock": "Por encargo",
                        "imageUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Tortas"
                  },
                  {
                        "id": "du-p2",
                        "title": "Docena de Alfajores",
                        "subtitle": "De maicena rellenos.",
                        "price": "$6.500",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
                        "category": "Dulces"
                  },
                  {
                        "id": "du-p3",
                        "title": "Vianda Casera",
                        "subtitle": "Comida del día, lista para retirar.",
                        "price": "$5.200",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Viandas"
                  }
            ],
            "collaborators": [
                  {
                        "id": "du-c1",
                        "name": "Ana",
                        "role": "Repostería (Co-Admin)",
                        "email": "ana.dulzura@gmail.com",
                        "isAdmin": true,
                        "avatarUrl": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "6 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "du-o1",
                        "code": "PED-DU-5521",
                        "customer": "Caro",
                        "phone": "1166770099",
                        "detail": "Chocotorta entera",
                        "status": "Pendiente",
                        "total": "$14.000",
                        "time": "10:00 AM"
                  },
                  {
                        "id": "du-o2",
                        "code": "PED-DU-1180",
                        "customer": "Vale",
                        "phone": "1177880011",
                        "detail": "Docena de Alfajores",
                        "status": "Entregado",
                        "total": "$6.500",
                        "time": "12:30 PM"
                  }
            ]
      }
},
  
  {
      "id": "barberia",
      "name": "Empire Barber Club",
      "tagline": "Reserva de turnos online, barbero preferido, galería de cortes y notificaciones. Sin comisiones.",
      "category": "barberia",
      "categoryLabel": "Barberías & Peluquerías",
      "iconName": "Scissors",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "MÁS ALQUILADO",
      "publicViewTitle": "Empire Barber Club — Página Pública",
      "publicViewDescription": "Estilo tradicional. El cliente elige barbero, servicio y horario en 3 clics.",
      "adminViewTitle": "Panel de Empire Barber (Dueño / Barberos)",
      "adminViewDescription": "Agenda de turnos en vivo, barberos con acceso propio, historial de trabajos y galería.",
      "keyFeatures": [
            "Reserva de turnos por barbero",
            "Galería de cortes",
            "Barberos con acceso propio",
            "Notificaciones de turnos",
            "Sin comisiones de apps"
      ],
      "bannerUrl": "/screenshots/barberia/banner.jpg",
      "isActive": true,
      "featured": true,
      "screenshots": [
            {
                  "id": "ba-1",
                  "title": "Página Pública — Reservá",
                  "type": "public",
                  "url": "/screenshots/barberia/pub1.jpg",
                  "description": "Elegí barbero, servicio y horario.",
                  "highlights": [
                        "Reserva online",
                        "Selector de barbero",
                        "Sin comisiones"
                  ]
            },
            {
                  "id": "ba-2",
                  "title": "Turnos y Galería",
                  "type": "public",
                  "url": "/screenshots/barberia/pub2.jpg",
                  "description": "Galería de estilos y disponibilidad.",
                  "highlights": [
                        "Galería",
                        "Estilos",
                        "Horarios"
                  ]
            },
            {
                  "id": "ba-3",
                  "title": "Panel Principal",
                  "type": "admin",
                  "url": "/screenshots/barberia/admin1.jpg",
                  "description": "Resumen del día y accesos.",
                  "highlights": [
                        "Resumen",
                        "Métricas",
                        "Accesos"
                  ]
            },
            {
                  "id": "ba-4",
                  "title": "Panel — Turnos",
                  "type": "admin",
                  "url": "/screenshots/barberia/admin2.jpg",
                  "description": "Turnos agendados con estado y contacto.",
                  "highlights": [
                        "Agenda",
                        "Estados",
                        "WhatsApp"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Empire Barber Club",
            "phone": "+54 9 11 4650-7788",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Servicios",
            "items": [
                  {
                        "id": "ba-s1",
                        "title": "Corte + Barba",
                        "subtitle": "Corte a máquina/tijera y perfilado.",
                        "price": "$9.000",
                        "durationOrStock": "45 min",
                        "imageUrl": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Combos"
                  },
                  {
                        "id": "ba-s2",
                        "title": "Afeitado Navaja",
                        "subtitle": "Toallas calientes y aceites.",
                        "price": "$6.000",
                        "durationOrStock": "30 min",
                        "imageUrl": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&q=80",
                        "category": "Barba"
                  },
                  {
                        "id": "ba-s3",
                        "title": "Corte Niño",
                        "subtitle": "Estilo a elección.",
                        "price": "$5.000",
                        "durationOrStock": "30 min",
                        "imageUrl": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Cortes"
                  }
            ],
            "collaborators": [
                  {
                        "id": "ba-c1",
                        "name": "Jacki",
                        "role": "Barbero Master (Co-Admin)",
                        "email": "jacki.empire@gmail.com",
                        "isAdmin": true,
                        "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "9 hrs"
                  },
                  {
                        "id": "ba-c2",
                        "name": "Pedro",
                        "role": "Barbero",
                        "email": "pedro.empire@gmail.com",
                        "isAdmin": false,
                        "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "7 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "ba-o1",
                        "code": "TRN-EB-9812",
                        "customer": "Claros",
                        "phone": "1122445588",
                        "detail": "Corte + Barba con Pedro",
                        "status": "En Espera",
                        "total": "$9.000",
                        "time": "09:00 AM"
                  },
                  {
                        "id": "ba-o2",
                        "code": "TRN-EB-4411",
                        "customer": "Pancho",
                        "phone": "1133221100",
                        "detail": "Corte con Jacki",
                        "status": "Atendido",
                        "total": "$7.000",
                        "time": "11:00 AM"
                  }
            ]
      }
},
  
  {
      "id": "tudietetica",
      "name": "Tu Dietética",
      "tagline": "Dietética y alimentos saludables online: catálogo con promos, canasto y encargos con retiro. Sin comisiones.",
      "category": "salud",
      "categoryLabel": "Dietética & Salud",
      "iconName": "Leaf",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "APP PWA",
      "publicViewTitle": "Tu Dietética — Página Pública",
      "publicViewDescription": "Vidriera cálida de alimentos saludables. El cliente arma su canasto desde el celular.",
      "adminViewTitle": "Panel de Tu Dietética (Dueño / Colaboradores)",
      "adminViewDescription": "Carga de productos, pedidos en vivo, opiniones moderadas y QR para difundir.",
      "keyFeatures": [
            "Catálogo con Promo y Oferta",
            "Canasto y encargos con retiro",
            "Pedidos en vivo",
            "Opiniones moderadas",
            "QR para difundir"
      ],
      "bannerUrl": "/screenshots/tudietetica/banner.jpg",
      "isActive": true,
      "featured": false,
      "screenshots": [
            {
                  "id": "td-1",
                  "title": "Página Pública — Vidriera",
                  "type": "public",
                  "url": "/screenshots/tudietetica/pub1.jpg",
                  "description": "Alimentos con foto, descripción y precio.",
                  "highlights": [
                        "Saludable",
                        "Canasto",
                        "Sin comisiones"
                  ]
            },
            {
                  "id": "td-2",
                  "title": "Catálogo por Categorías",
                  "type": "public",
                  "url": "/screenshots/tudietetica/pub2.jpg",
                  "description": "Frutos secos, harinas, superalimentos y más.",
                  "highlights": [
                        "Categorías",
                        "Promo/Oferta",
                        "Precios"
                  ]
            },
            {
                  "id": "td-3",
                  "title": "Panel — Encargos",
                  "type": "admin",
                  "url": "/screenshots/tudietetica/admin1.jpg",
                  "description": "Pedidos en vivo con datos del cliente.",
                  "highlights": [
                        "En vivo",
                        "Estados",
                        "Retiro"
                  ]
            },
            {
                  "id": "td-4",
                  "title": "Panel — Opiniones",
                  "type": "admin",
                  "url": "/screenshots/tudietetica/admin2.jpg",
                  "description": "Reseñas y consultas moderadas.",
                  "highlights": [
                        "Moderación",
                        "Consultas",
                        "Reputación"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Tu Dietética",
            "phone": "+54 9 11 4210-8080",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "td-p1",
                        "title": "Almendras Premium",
                        "subtitle": "500g. Tostadas sin sal.",
                        "price": "$4.800",
                        "durationOrStock": "500g",
                        "imageUrl": "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=400&q=80",
                        "badge": "Oferta",
                        "category": "Frutos Secos"
                  },
                  {
                        "id": "td-p2",
                        "title": "Harina de Almendras",
                        "subtitle": "1kg. Apta keto.",
                        "price": "$6.200",
                        "durationOrStock": "1kg",
                        "imageUrl": "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=400&q=80",
                        "category": "Harinas"
                  },
                  {
                        "id": "td-p3",
                        "title": "Miel Orgánica",
                        "subtitle": "Pura, no pasteurizada.",
                        "price": "$3.900",
                        "durationOrStock": "500g",
                        "imageUrl": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Orgánicos"
                  }
            ],
            "collaborators": [
                  {
                        "id": "td-c1",
                        "name": "Lucía",
                        "role": "Atención",
                        "email": "lucia.dietetica@gmail.com",
                        "isAdmin": false,
                        "avatarUrl": "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "6 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "td-o1",
                        "code": "RET-TD-5521",
                        "customer": "Marina",
                        "phone": "1166778899",
                        "detail": "Almendras + Miel",
                        "status": "Pendiente",
                        "total": "$8.700",
                        "time": "10:30 AM"
                  },
                  {
                        "id": "td-o2",
                        "code": "RET-TD-1180",
                        "customer": "José",
                        "phone": "1177889900",
                        "detail": "Harina de Almendras",
                        "status": "Entregado",
                        "total": "$6.200",
                        "time": "12:00 PM"
                  }
            ]
      }
},
  
  {
      "id": "vidagenuina",
      "name": "Dietética Vida Sana",
      "tagline": "Alimentos saludables con dietario y planes: catálogo, canasto y pedidos con retiro. Sin comisiones.",
      "category": "salud",
      "categoryLabel": "Dietética & Salud",
      "iconName": "Salad",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "NUEVO",
      "publicViewTitle": "Dietética Vida Sana — Página Pública",
      "publicViewDescription": "Catálogo de alimentos con dietario y guías, y canasto para encargar.",
      "adminViewTitle": "Panel de Vida Sana (Dueño / Colaboradores)",
      "adminViewDescription": "Ingreso de productos, control de stock, pedidos en vivo y dietario del local.",
      "keyFeatures": [
            "Catálogo con dietario y planes",
            "Canasto y pedidos con retiro",
            "Control de stock",
            "Pedidos en vivo",
            "Página pública a tu marca"
      ],
      "bannerUrl": "/screenshots/vidagenuina/banner.jpg",
      "isActive": true,
      "featured": false,
      "screenshots": [
            {
                  "id": "vs-1",
                  "title": "Página Pública — Catálogo",
                  "type": "public",
                  "url": "/screenshots/vidagenuina/pub1.jpg",
                  "description": "Alimentos con foto, precio y dietario.",
                  "highlights": [
                        "Saludable",
                        "Dietario",
                        "Canasto"
                  ]
            },
            {
                  "id": "vs-2",
                  "title": "Portada",
                  "type": "public",
                  "url": "/screenshots/vidagenuina/pub2.jpg",
                  "description": "Vidriera de la dietética.",
                  "highlights": [
                        "Tu marca",
                        "Categorías",
                        "Precios"
                  ]
            },
            {
                  "id": "vs-3",
                  "title": "Panel — Ingreso de Productos",
                  "type": "admin",
                  "url": "/screenshots/vidagenuina/admin1.jpg",
                  "description": "Cargá productos con fotos y stock.",
                  "highlights": [
                        "Productos",
                        "Stock",
                        "Precios"
                  ]
            },
            {
                  "id": "vs-4",
                  "title": "Panel — Pedidos",
                  "type": "admin",
                  "url": "/screenshots/vidagenuina/admin2.jpg",
                  "description": "Pedidos en vivo con datos del cliente.",
                  "highlights": [
                        "En vivo",
                        "Estados",
                        "Retiro"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Dietética Vida Sana",
            "phone": "+54 9 11 6543-2101",
            "location": "Palermo, CABA",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "vs-p1",
                        "title": "Maní Pelado",
                        "subtitle": "300g. Directo de origen.",
                        "price": "$1.200",
                        "durationOrStock": "300g",
                        "imageUrl": "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Semillas"
                  },
                  {
                        "id": "vs-p2",
                        "title": "Granola Premium",
                        "subtitle": "1kg. Con miel y castañas.",
                        "price": "$850",
                        "durationOrStock": "1kg",
                        "imageUrl": "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=400&q=80",
                        "category": "Cereales"
                  },
                  {
                        "id": "vs-p3",
                        "title": "Semillas de Chía",
                        "subtitle": "250g. Orgánicas.",
                        "price": "$480",
                        "durationOrStock": "250g",
                        "imageUrl": "https://images.unsplash.com/photo-1541990206-52fdf65437c8?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Semillas"
                  }
            ],
            "collaborators": [
                  {
                        "id": "vs-c1",
                        "name": "Pau",
                        "role": "Atención",
                        "email": "pau.vidasana@gmail.com",
                        "isAdmin": false,
                        "avatarUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "5 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "vs-o1",
                        "code": "RET-VS-5521",
                        "customer": "Ramiro",
                        "phone": "1166778899",
                        "detail": "Granola + Chía",
                        "status": "Pendiente",
                        "total": "$1.330",
                        "time": "09:30 AM"
                  },
                  {
                        "id": "vs-o2",
                        "code": "RET-VS-1180",
                        "customer": "Flor",
                        "phone": "1177889900",
                        "detail": "Maní Pelado",
                        "status": "Entregado",
                        "total": "$1.200",
                        "time": "11:15 AM"
                  }
            ]
      }
},
  
  {
      "id": "mascotas",
      "name": "Mascotas Vida Genuina",
      "tagline": "Pet shop online con planes nutricionales: catálogo, canasto y pedidos con retiro. Sin comisiones.",
      "category": "petshop",
      "categoryLabel": "Pet Shop & Veterinaria",
      "iconName": "PawPrint",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "MÁS ALQUILADO",
      "publicViewTitle": "Mascotas Vida Genuina — Página Pública",
      "publicViewDescription": "Catálogo de productos para mascotas con plan nutricional y canasto.",
      "adminViewTitle": "Panel de Mascotas (Dueño / Colaboradores)",
      "adminViewDescription": "Ingreso de productos por categoría, control de stock, pedidos en vivo y plan nutricional.",
      "keyFeatures": [
            "Catálogo por categorías",
            "Plan nutricional",
            "Canasto y pedidos con retiro",
            "Control de stock",
            "Pedidos en vivo"
      ],
      "bannerUrl": "/screenshots/mascotas/banner.jpg",
      "isActive": true,
      "featured": true,
      "screenshots": [
            {
                  "id": "ma-1",
                  "title": "Página Pública — Portada",
                  "type": "public",
                  "url": "/screenshots/mascotas/pub1.jpg",
                  "description": "Productos para mascotas con foto y precio.",
                  "highlights": [
                        "Pet shop",
                        "Canasto",
                        "Sin comisiones"
                  ]
            },
            {
                  "id": "ma-2",
                  "title": "Vista Previa Pública",
                  "type": "public",
                  "url": "/screenshots/mascotas/pub2.jpg",
                  "description": "Cómo lo ve el cliente.",
                  "highlights": [
                        "Vista previa",
                        "Categorías",
                        "Precios"
                  ]
            },
            {
                  "id": "ma-3",
                  "title": "Panel — Ingreso de Productos",
                  "type": "admin",
                  "url": "/screenshots/mascotas/admin1.jpg",
                  "description": "Cargá productos con fotos y stock.",
                  "highlights": [
                        "Productos",
                        "Stock",
                        "Categorías"
                  ]
            },
            {
                  "id": "ma-4",
                  "title": "Panel — Pedidos",
                  "type": "admin",
                  "url": "/screenshots/mascotas/admin2.jpg",
                  "description": "Pedidos en vivo con datos del cliente.",
                  "highlights": [
                        "En vivo",
                        "Estados",
                        "Retiro"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Mascotas Vida Genuina",
            "phone": "+54 9 11 4620-3311",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "ma-p1",
                        "title": "Alimento Premium 15kg",
                        "subtitle": "Perro adulto todas las razas.",
                        "price": "$28.000",
                        "durationOrStock": "15kg",
                        "imageUrl": "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Alimentos"
                  },
                  {
                        "id": "ma-p2",
                        "title": "Arena Sanitaria 10kg",
                        "subtitle": "Aglutinante, control de olor.",
                        "price": "$7.500",
                        "durationOrStock": "10kg",
                        "imageUrl": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80",
                        "category": "Gatos"
                  },
                  {
                        "id": "ma-p3",
                        "title": "Juguete Mordillo",
                        "subtitle": "Caucho resistente.",
                        "price": "$3.200",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Accesorios"
                  }
            ],
            "collaborators": [
                  {
                        "id": "ma-c1",
                        "name": "Cyc",
                        "role": "Atención",
                        "email": "atencion.mascotas@gmail.com",
                        "isAdmin": false,
                        "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "7 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "ma-o1",
                        "code": "RET-MA-5521",
                        "customer": "Sole",
                        "phone": "1166778899",
                        "detail": "Alimento 15kg",
                        "status": "Pendiente",
                        "total": "$28.000",
                        "time": "10:00 AM"
                  },
                  {
                        "id": "ma-o2",
                        "code": "RET-MA-1180",
                        "customer": "Juan",
                        "phone": "1177889900",
                        "detail": "Arena + Juguete",
                        "status": "Entregado",
                        "total": "$10.700",
                        "time": "12:20 PM"
                  }
            ]
      }
},
  
  {
      "id": "fashionspets",
      "name": "Fashion Pets",
      "tagline": "Indumentaria y accesorios para mascotas: catálogo con fotos, canasto y entregas. Sin comisiones.",
      "category": "petshop",
      "categoryLabel": "Pet Shop & Veterinaria",
      "iconName": "Dog",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "APP PWA",
      "publicViewTitle": "Fashion Pets — Página Pública",
      "publicViewDescription": "Ropa y accesorios para mascotas con foto y precio, listos para el canasto.",
      "adminViewTitle": "Panel de Fashion Pets (Dueño / Colaboradores)",
      "adminViewDescription": "Carga de productos, pedidos de clientes en vivo, control de entregas y sugerencias.",
      "keyFeatures": [
            "Catálogo de indumentaria pet",
            "Canasto y entregas",
            "Pedidos en vivo",
            "Sugerencias de clientes",
            "Página pública a tu marca"
      ],
      "bannerUrl": "/screenshots/fashionspets/banner.jpg",
      "isActive": true,
      "featured": false,
      "screenshots": [
            {
                  "id": "fp-1",
                  "title": "Página Pública — Vidriera",
                  "type": "public",
                  "url": "/screenshots/fashionspets/pub1.jpg",
                  "description": "Ropa y accesorios con foto y precio.",
                  "highlights": [
                        "Indumentaria pet",
                        "Canasto",
                        "Sin comisiones"
                  ]
            },
            {
                  "id": "fp-2",
                  "title": "Colección",
                  "type": "public",
                  "url": "/screenshots/fashionspets/pub2.jpg",
                  "description": "Productos ordenados por categoría.",
                  "highlights": [
                        "Categorías",
                        "Precios",
                        "Novedades"
                  ]
            },
            {
                  "id": "fp-3",
                  "title": "Panel — Productos",
                  "type": "admin",
                  "url": "/screenshots/fashionspets/admin1.jpg",
                  "description": "Cargá productos con fotos y precios.",
                  "highlights": [
                        "Productos",
                        "Fotos",
                        "Precios"
                  ]
            },
            {
                  "id": "fp-4",
                  "title": "Panel — Pedidos",
                  "type": "admin",
                  "url": "/screenshots/fashionspets/admin2.jpg",
                  "description": "Pedidos de clientes en vivo.",
                  "highlights": [
                        "En vivo",
                        "Estados",
                        "Entregas"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Fashion Pets",
            "phone": "+54 9 11 4640-5522",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "fp-p1",
                        "title": "Buzo para Perro",
                        "subtitle": "Talles S a XL. Abrigo polar.",
                        "price": "$8.900",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Ropa"
                  },
                  {
                        "id": "fp-p2",
                        "title": "Collar con Moño",
                        "subtitle": "Ajustable, varios colores.",
                        "price": "$3.500",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=400&q=80",
                        "category": "Accesorios"
                  },
                  {
                        "id": "fp-p3",
                        "title": "Cama Redonda",
                        "subtitle": "Suave y lavable.",
                        "price": "$14.500",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Descanso"
                  }
            ],
            "collaborators": [
                  {
                        "id": "fp-c1",
                        "name": "Meli",
                        "role": "Atención",
                        "email": "meli.fashionpets@gmail.com",
                        "isAdmin": false,
                        "avatarUrl": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "6 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "fp-o1",
                        "code": "RET-FP-5521",
                        "customer": "Dani",
                        "phone": "1166778899",
                        "detail": "Buzo para Perro (M)",
                        "status": "Pendiente",
                        "total": "$8.900",
                        "time": "11:00 AM"
                  },
                  {
                        "id": "fp-o2",
                        "code": "RET-FP-1180",
                        "customer": "Leo",
                        "phone": "1177889900",
                        "detail": "Cama Redonda",
                        "status": "Entregado",
                        "total": "$14.500",
                        "time": "13:30 PM"
                  }
            ]
      }
},
  
  {
      "id": "tiendalibre",
      "name": "Tienda Libre",
      "tagline": "Almacén y autoservicio online: catálogo con promos, encargos con retiro y control de ventas. Sin comisiones.",
      "category": "almacen",
      "categoryLabel": "Almacén & Tienda",
      "iconName": "Store",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "MÁS ALQUILADO",
      "publicViewTitle": "Tienda Libre — Página Pública",
      "publicViewDescription": "Catálogo de almacén con promos, precios y encargo con retiro en el local.",
      "adminViewTitle": "Panel de Tienda Libre (Dueño / Colaboradores)",
      "adminViewDescription": "Panel de administrador con productos, promos, colaboradores, control y ventas.",
      "keyFeatures": [
            "Catálogo con promos",
            "Encargos con retiro",
            "Colaboradores con acceso",
            "Control de ventas",
            "Página pública a tu marca"
      ],
      "bannerUrl": "/screenshots/tiendalibre/banner.jpg",
      "isActive": true,
      "featured": true,
      "screenshots": [
            {
                  "id": "tl-1",
                  "title": "Página Pública — Portada",
                  "type": "public",
                  "url": "/screenshots/tiendalibre/pub1.jpg",
                  "description": "Productos del almacén con foto y precio.",
                  "highlights": [
                        "Almacén",
                        "Encargo",
                        "Sin comisiones"
                  ]
            },
            {
                  "id": "tl-2",
                  "title": "Promos",
                  "type": "public",
                  "url": "/screenshots/tiendalibre/pub2.jpg",
                  "description": "Ofertas y promos destacadas.",
                  "highlights": [
                        "Promos",
                        "Ofertas",
                        "Precios"
                  ]
            },
            {
                  "id": "tl-3",
                  "title": "Panel — Productos",
                  "type": "admin",
                  "url": "/screenshots/tiendalibre/admin1.jpg",
                  "description": "Cargá productos y precios.",
                  "highlights": [
                        "Productos",
                        "Precios",
                        "Stock"
                  ]
            },
            {
                  "id": "tl-4",
                  "title": "Panel — Ventas",
                  "type": "admin",
                  "url": "/screenshots/tiendalibre/admin2.jpg",
                  "description": "Resumen de ventas y control.",
                  "highlights": [
                        "Ventas",
                        "Reportes",
                        "Caja"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Tienda Libre",
            "phone": "+54 9 11 4510-9988",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "tl-p1",
                        "title": "Gaseosa 2,25L",
                        "subtitle": "Línea cola.",
                        "price": "$2.200",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Bebidas"
                  },
                  {
                        "id": "tl-p2",
                        "title": "Yerba 1kg",
                        "subtitle": "Suave, con palo.",
                        "price": "$3.800",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=400&q=80",
                        "category": "Almacén"
                  },
                  {
                        "id": "tl-p3",
                        "title": "Fideos x500g",
                        "subtitle": "Guiseros.",
                        "price": "$1.100",
                        "durationOrStock": "Disponible",
                        "imageUrl": "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=400&q=80",
                        "category": "Almacén"
                  }
            ],
            "collaborators": [
                  {
                        "id": "tl-c1",
                        "name": "Rubén",
                        "role": "Cajero (Co-Admin)",
                        "email": "ruben.tiendalibre@gmail.com",
                        "isAdmin": true,
                        "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "8 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "tl-o1",
                        "code": "RET-TL-5521",
                        "customer": "Vero",
                        "phone": "1166778899",
                        "detail": "Yerba + Fideos x3",
                        "status": "Pendiente",
                        "total": "$7.100",
                        "time": "10:15 AM"
                  },
                  {
                        "id": "tl-o2",
                        "code": "RET-TL-1180",
                        "customer": "Emi",
                        "phone": "1177889900",
                        "detail": "Gaseosa 2,25L x2",
                        "status": "Entregado",
                        "total": "$4.400",
                        "time": "12:40 PM"
                  }
            ]
      }
},
  
  {
      "id": "quimicos",
      "name": "Productos Químicos & Limpieza",
      "tagline": "Venta de artículos de limpieza por mayor y menor: catálogo, encargos con envío y control de ventas.",
      "category": "almacen",
      "categoryLabel": "Almacén & Tienda",
      "iconName": "SprayCan",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "NUEVO",
      "publicViewTitle": "Productos Químicos — Página Pública",
      "publicViewDescription": "Catálogo de limpieza con precios por mayor y menor, y encargo con envío.",
      "adminViewTitle": "Panel de Químicos (Dueño / Colaboradores)",
      "adminViewDescription": "Administrador de productos, configuración de envíos e historial de ventas.",
      "keyFeatures": [
            "Catálogo mayor y menor",
            "Encargos con envío",
            "Configuración de envíos",
            "Historial de ventas",
            "Página pública a tu marca"
      ],
      "bannerUrl": "/screenshots/quimicos/banner.jpg",
      "isActive": true,
      "featured": false,
      "screenshots": [
            {
                  "id": "qu-1",
                  "title": "Página Pública — Catálogo",
                  "type": "public",
                  "url": "/screenshots/quimicos/pub1.jpg",
                  "description": "Artículos de limpieza con foto y precio.",
                  "highlights": [
                        "Mayor y menor",
                        "Encargo",
                        "Envíos"
                  ]
            },
            {
                  "id": "qu-2",
                  "title": "Panel — Productos",
                  "type": "admin",
                  "url": "/screenshots/quimicos/admin1.jpg",
                  "description": "Cargá productos y precios.",
                  "highlights": [
                        "Productos",
                        "Precios",
                        "Stock"
                  ]
            },
            {
                  "id": "qu-3",
                  "title": "Panel — Ventas",
                  "type": "admin",
                  "url": "/screenshots/quimicos/admin2.jpg",
                  "description": "Historial de ventas y control.",
                  "highlights": [
                        "Ventas",
                        "Reportes",
                        "Caja"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Productos Químicos & Limpieza",
            "phone": "+54 9 11 4505-2211",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "qu-p1",
                        "title": "Lavandina 5L",
                        "subtitle": "Concentrada.",
                        "price": "$2.900",
                        "durationOrStock": "5L",
                        "imageUrl": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Limpieza"
                  },
                  {
                        "id": "qu-p2",
                        "title": "Detergente 5L",
                        "subtitle": "Alto rinde.",
                        "price": "$4.200",
                        "durationOrStock": "5L",
                        "imageUrl": "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80",
                        "category": "Limpieza"
                  },
                  {
                        "id": "qu-p3",
                        "title": "Perfumina 5L",
                        "subtitle": "Varios aromas.",
                        "price": "$3.500",
                        "durationOrStock": "5L",
                        "imageUrl": "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Aromas"
                  }
            ],
            "collaborators": [
                  {
                        "id": "qu-c1",
                        "name": "Sergio",
                        "role": "Reparto",
                        "email": "sergio.quimicos@gmail.com",
                        "isAdmin": false,
                        "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "8 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "qu-o1",
                        "code": "PED-QU-5521",
                        "customer": "Mónica",
                        "phone": "1166778899",
                        "detail": "Lavandina + Detergente x4",
                        "status": "Pendiente",
                        "total": "$28.400",
                        "time": "09:00 AM"
                  },
                  {
                        "id": "qu-o2",
                        "code": "PED-QU-1180",
                        "customer": "Hugo",
                        "phone": "1177889900",
                        "detail": "Perfumina 5L x2",
                        "status": "Entregado",
                        "total": "$7.000",
                        "time": "11:45 AM"
                  }
            ]
      }
},
  
  {
      "id": "fitness",
      "name": "Fitness & Zumba",
      "tagline": "Gimnasio y clases online: servicios, galería, prueba gratis y panel de alumnos. Sin comisiones.",
      "category": "fitness",
      "categoryLabel": "Fitness & Bienestar",
      "iconName": "Dumbbell",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "APP PWA",
      "publicViewTitle": "Fitness & Zumba — Página Pública",
      "publicViewDescription": "Servicios y clases con foto y precio. El cliente ve horarios y pide su prueba gratis.",
      "adminViewTitle": "Panel de Fitness (Dueño / Profes)",
      "adminViewDescription": "Panel de alumnos, servicios, galería, prueba gratis y sugerencias.",
      "keyFeatures": [
            "Servicios y clases con horarios",
            "Prueba gratis para captar alumnos",
            "Galería de la sala",
            "Panel de alumnos",
            "Sin comisiones de apps"
      ],
      "bannerUrl": "/screenshots/fitness/banner.jpg",
      "isActive": true,
      "featured": false,
      "screenshots": [
            {
                  "id": "fi-1",
                  "title": "Página Pública — Servicios",
                  "type": "public",
                  "url": "/screenshots/fitness/pub1.jpg",
                  "description": "Clases y planes con foto y precio.",
                  "highlights": [
                        "Clases",
                        "Horarios",
                        "Prueba gratis"
                  ]
            },
            {
                  "id": "fi-2",
                  "title": "Galería y Novedades",
                  "type": "public",
                  "url": "/screenshots/fitness/pub2.jpg",
                  "description": "La sala y los servicios nuevos.",
                  "highlights": [
                        "Galería",
                        "Novedades",
                        "Precios"
                  ]
            },
            {
                  "id": "fi-3",
                  "title": "Panel Principal",
                  "type": "admin",
                  "url": "/screenshots/fitness/admin1.jpg",
                  "description": "Resumen y accesos a cada sección.",
                  "highlights": [
                        "Resumen",
                        "Alumnos",
                        "Accesos"
                  ]
            },
            {
                  "id": "fi-4",
                  "title": "Panel — Servicios",
                  "type": "admin",
                  "url": "/screenshots/fitness/admin2.jpg",
                  "description": "Cargá y editá clases y planes.",
                  "highlights": [
                        "Servicios",
                        "Planes",
                        "Precios"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Fitness & Zumba",
            "phone": "+54 9 11 4680-4433",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Servicios",
            "items": [
                  {
                        "id": "fi-s1",
                        "title": "Pase Libre Mensual",
                        "subtitle": "Acceso a todas las clases.",
                        "price": "$18.000",
                        "durationOrStock": "Mensual",
                        "imageUrl": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Planes"
                  },
                  {
                        "id": "fi-s2",
                        "title": "Clase de Zumba",
                        "subtitle": "Ritmos y cardio.",
                        "price": "$4.000",
                        "durationOrStock": "60 min",
                        "imageUrl": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80",
                        "category": "Clases"
                  },
                  {
                        "id": "fi-s3",
                        "title": "Funcional",
                        "subtitle": "Entrenamiento por circuitos.",
                        "price": "$4.500",
                        "durationOrStock": "55 min",
                        "imageUrl": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Clases"
                  }
            ],
            "collaborators": [
                  {
                        "id": "fi-c1",
                        "name": "Caro",
                        "role": "Profe (Co-Admin)",
                        "email": "caro.fitness@gmail.com",
                        "isAdmin": true,
                        "avatarUrl": "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "8 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "fi-o1",
                        "code": "TRN-FI-5521",
                        "customer": "Naza",
                        "phone": "1166778899",
                        "detail": "Prueba gratis Zumba",
                        "status": "En Espera",
                        "total": "$0",
                        "time": "18:00 PM"
                  },
                  {
                        "id": "fi-o2",
                        "code": "TRN-FI-1180",
                        "customer": "Ludmila",
                        "phone": "1177889900",
                        "detail": "Pase Libre Mensual",
                        "status": "Atendido",
                        "total": "$18.000",
                        "time": "19:30 PM"
                  }
            ]
      }
},
  
  {
      "id": "tudiversion",
      "name": "Tu Diversión — Alquileres",
      "tagline": "Alquiler de juegos, inflables y equipos para eventos: catálogo, reservas y seguimiento. Sin comisiones.",
      "category": "entretenimiento",
      "categoryLabel": "Entretenimiento & Alquiler",
      "iconName": "PartyPopper",
      "monthlyPrice": 5000,
      "currency": "ARS",
      "badgeText": "NUEVO",
      "publicViewTitle": "Tu Diversión — Página Pública",
      "publicViewDescription": "Catálogo de productos para alquilar con foto y precio. El cliente reserva desde el celular.",
      "adminViewTitle": "Panel de Tu Diversión (Dueño / Colaboradores)",
      "adminViewDescription": "Productos libres para alquiler, categorías, reservas y seguimiento de alquileres.",
      "keyFeatures": [
            "Catálogo de alquiler con fotos",
            "Reservas online",
            "Seguimiento de alquileres",
            "Categorías configurables",
            "Página pública a tu marca"
      ],
      "bannerUrl": "/screenshots/tudiversion/banner.jpg",
      "isActive": true,
      "featured": false,
      "screenshots": [
            {
                  "id": "tv-1",
                  "title": "Página Pública — Catálogo",
                  "type": "public",
                  "url": "/screenshots/tudiversion/pub1.jpg",
                  "description": "Productos para alquilar con foto y precio.",
                  "highlights": [
                        "Alquiler",
                        "Reserva",
                        "Sin comisiones"
                  ]
            },
            {
                  "id": "tv-2",
                  "title": "Categorías",
                  "type": "public",
                  "url": "/screenshots/tudiversion/pub2.jpg",
                  "description": "Juegos, inflables y equipos por categoría.",
                  "highlights": [
                        "Categorías",
                        "Precios",
                        "Disponibilidad"
                  ]
            },
            {
                  "id": "tv-3",
                  "title": "Panel Principal",
                  "type": "admin",
                  "url": "/screenshots/tudiversion/admin1.jpg",
                  "description": "Resumen y accesos a cada sección.",
                  "highlights": [
                        "Resumen",
                        "Accesos",
                        "Reservas"
                  ]
            },
            {
                  "id": "tv-4",
                  "title": "Panel — Seguimiento",
                  "type": "admin",
                  "url": "/screenshots/tudiversion/admin2.jpg",
                  "description": "Seguimiento de alquileres y estados.",
                  "highlights": [
                        "Seguimiento",
                        "Estados",
                        "Entregas"
                  ]
            }
      ],
      "demoData": {
            "businessName": "Tu Diversión Alquileres",
            "phone": "+54 9 11 4690-7766",
            "location": "CABA, Buenos Aires",
            "servicesOrProductsName": "Productos",
            "items": [
                  {
                        "id": "tv-p1",
                        "title": "Metegol",
                        "subtitle": "Por día. Retiro o envío.",
                        "price": "$12.000",
                        "durationOrStock": "Por día",
                        "imageUrl": "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?auto=format&fit=crop&w=400&q=80",
                        "badge": "Destacado",
                        "category": "Juegos"
                  },
                  {
                        "id": "tv-p2",
                        "title": "Inflable Castillo",
                        "subtitle": "Ideal cumpleaños.",
                        "price": "$25.000",
                        "durationOrStock": "Por día",
                        "imageUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400&q=80",
                        "category": "Inflables"
                  },
                  {
                        "id": "tv-p3",
                        "title": "Combo Livings x10",
                        "subtitle": "Sillones y mesas.",
                        "price": "$18.000",
                        "durationOrStock": "Por evento",
                        "imageUrl": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=400&q=80",
                        "badge": "Promo",
                        "category": "Equipos"
                  }
            ],
            "collaborators": [
                  {
                        "id": "tv-c1",
                        "name": "Gastón",
                        "role": "Logística",
                        "email": "gaston.diversion@gmail.com",
                        "isAdmin": false,
                        "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
                        "activeHours": "8 hrs"
                  }
            ],
            "sampleOrdersOrTurns": [
                  {
                        "id": "tv-o1",
                        "code": "RES-TV-5521",
                        "customer": "Flia. Pérez",
                        "phone": "1166778899",
                        "detail": "Inflable Castillo (sábado)",
                        "status": "Pendiente",
                        "total": "$25.000",
                        "time": "—"
                  },
                  {
                        "id": "tv-o2",
                        "code": "RES-TV-1180",
                        "customer": "Club Norte",
                        "phone": "1177889900",
                        "detail": "Combo Livings x10",
                        "status": "Atendido",
                        "total": "$18.000",
                        "time": "—"
                  }
            ]
      }
},

  {
    id: 'teleeleccion',
    name: 'Tienda Elección',
    tagline: 'Tienda multiuso adaptable a cualquier rubro: catálogo con fotos, talles y variantes, carrito y pedidos con código de retiro. 3 temas de diseño, música y el cobro siempre en tu negocio.',
    category: 'almacen',
    categoryLabel: 'Multirubro & Tienda',
    iconName: 'ShoppingBag',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'NUEVA',
    demoUrl: 'https://tele-tienda-eleccion.vercel.app/',
    publicViewTitle: 'Tienda Elección — Tienda Oficial',
    publicViewDescription: 'Catálogo multiuso con fotos, categorías y buscador. El cliente arma su pedido desde el celular, elige retiro o envío y recibe su código de retiro. Sin registrarse ni instalar nada.',
    adminViewTitle: 'Panel de Tienda Elección (Dueño / Colaboradores)',
    adminViewDescription: 'Cargá productos con fotos, precio, categoría y talles en segundos. Gestioná encargos con código de retiro y estados, moderá reseñas y consultas, mirá métricas en el dashboard y personalizá tema, música y datos del local.',
    keyFeatures: [
      'Se adapta a cualquier rubro (ropa, bazar, accesorios, regalería y más)',
      'Catálogo con fotos, talles/variantes, categorías y buscador',
      'Carrito y encargo con código de retiro · retiro o envío',
      'Reseñas y consultas de clientes moderadas desde el panel',
      '3 temas de diseño, música de fondo, PWA instalable e ingreso con huella/Face ID'
    ],
    bannerUrl: '/screenshots/teleeleccion/banner.jpg',
    isActive: true,
    featured: true,
    comingSoon: false,
    screenshots: [
      { id: 'tele-1', title: 'Página Pública — Catálogo', type: 'public', url: '/screenshots/teleeleccion/pub1.jpg', description: 'Productos con fotos, talles y precio, ordenados por categorías. El cliente suma al carrito desde el celular.', highlights: ['Por categorías', 'Talles y variantes', 'Sin comisiones'] },
      { id: 'tele-2', title: 'Canasto y Código de Retiro', type: 'public', url: '/screenshots/teleeleccion/pub2.jpg', description: 'El cliente confirma su pedido y recibe un código de retiro para pasar por el local. Impecable en el móvil e instalable como app.', highlights: ['Código de retiro', 'Retiro o envío', 'Instalable (PWA)'] },
      { id: 'tele-3', title: 'Panel — Encargos', type: 'admin', url: '/screenshots/teleeleccion/admin1.jpg', description: 'Cada encargo entra al panel con los datos del cliente, el código de retiro y su estado (pendiente / entregado).', highlights: ['Datos del cliente', 'Código de retiro', 'Estados'] },
      { id: 'tele-4', title: 'Panel — Dashboard', type: 'admin', url: '/screenshots/teleeleccion/admin2.jpg', description: 'Métricas de ventas, productos y pedidos de un vistazo para tomar decisiones.', highlights: ['Ventas', 'Productos', 'Pedidos'] }
    ],
    demoData: {
      businessName: 'Tienda Multiuso Libre Elección',
      phone: '+54 9 11 4567-8899',
      location: 'CABA, Buenos Aires',
      servicesOrProductsName: 'Productos',
      items: [
        { id: 'tele-p1', title: 'Chaqueta Urbana Premium', subtitle: 'Diseño moderno, abrigo ligero. Talles S a XL.', price: '$45.000', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80', badge: 'Más vendido', category: 'Ropa & Moda' },
        { id: 'tele-p2', title: 'Zapatillas Deportivas Fit-Lite', subtitle: 'Ultra livianas, suela antideslizante. Talles 38 a 42.', price: '$38.900', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80', category: 'Calzados' },
        { id: 'tele-p3', title: 'Reloj Cronógrafo Elegante', subtitle: 'Correa de malla metálica, resistente a salpicaduras.', price: '$29.500', durationOrStock: 'Últimas unidades', imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80', badge: 'Oferta', category: 'Accesorios' },
        { id: 'tele-p4', title: 'Juego de Vasos de Cristal x6', subtitle: 'Cristal labrado de alta resistencia.', price: '$18.200', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80', category: 'Bazar & Hogar' }
      ],
      collaborators: [
        { id: 'tele-c1', name: 'Belén', role: 'Ventas', email: 'ventas.eleccion@gmail.com', isAdmin: false, avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', activeHours: '6 hrs' }
      ],
      sampleOrdersOrTurns: [
        { id: 'tele-o1', code: 'RET-7468', customer: 'Juan', phone: '1133225544', detail: 'Zapatillas Deportivas Fit-Lite (T. 40)', status: 'Pendiente', total: '$38.900', time: '10:30 AM' },
        { id: 'tele-o2', code: 'RET-8821', customer: 'Carla', phone: '1144332211', detail: 'Chaqueta Urbana Premium (T. M)', status: 'Entregado', total: '$45.000', time: '12:15 PM' }
      ]
    }
  },

  {
    id: 'nightclub',
    name: 'Tragos Night Club',
    tagline: 'Bar de tragos y cócteles nocturnos con carta digital estilo neón: el cliente arma su pedido desde el celular y retira en barra. El cobro, siempre en tu negocio.',
    category: 'gastronomia',
    categoryLabel: 'Bar & Cócteles',
    iconName: 'Flame',
    monthlyPrice: 5000,
    currency: 'ARS',
    badgeText: 'NUEVA',
    demoUrl: 'https://tragos-night-club-1.vercel.app/',
    publicViewTitle: 'Tragos Night Club — Carta Oficial',
    publicViewDescription: 'Carta de tragos y cócteles con fotos y efectos neón láser, categorías (cócteles, tragos de autor, cervezas, promos) y buscador. El cliente pide desde el celular con retiro en barra o delivery.',
    adminViewTitle: 'Panel de Tragos Night Club (Dueño / Colaboradores)',
    adminViewDescription: 'Cargá tragos con fotos, precio, categoría y campos (volumen, graduación). Gestioná los pedidos con código de retiro y estados, moderá reseñas y consultas, música de fondo y temas neón. Ingreso con huella/Face ID.',
    keyFeatures: [
      'Carta digital con fotos y efectos neón láser',
      'Carrito y pedidos con código de retiro en barra',
      'Retiro o delivery configurable',
      'Reseñas y consultas de clientes moderadas',
      'Música de fondo, temas de diseño, PWA instalable e ingreso con huella',
    ],
    bannerUrl: '/screenshots/nightclub/banner.jpg',
    isActive: true,
    featured: true,
    comingSoon: false,
    screenshots: [
      { id: 'night-1', title: 'Página Pública — Carta Neón', type: 'public', url: '/screenshots/nightclub/banner.jpg', description: 'Carta de tragos con fotos, precio y categorías, sobre un fondo neón láser. El cliente suma al carrito desde el celular.', highlights: ['Estilo neón', 'Por categorías', 'Sin comisiones'] },
      { id: 'night-2', title: 'Catálogo e Instalable (PWA)', type: 'public', url: '/screenshots/nightclub/pub1.jpg', description: 'Se ve impecable en el móvil y se instala como app. Los clientes entran escaneando el QR del local.', highlights: ['Instalable', 'QR del bar', 'Buscador'] },
      { id: 'night-3', title: 'Panel — Carga de Tragos', type: 'admin', url: '/screenshots/nightclub/admin1.jpg', description: 'Cargás tragos con fotos, precio, categoría y campos como volumen o graduación, en segundos.', highlights: ['Fotos', 'Campos personalizados', 'Sync al instante'] },
      { id: 'night-4', title: 'Panel — Pedidos', type: 'admin', url: '/screenshots/nightclub/admin2.jpg', description: 'Cada pedido entra con los datos del cliente, su código de retiro y estado (pendiente / en preparación / completado).', highlights: ['Datos del cliente', 'Código de retiro', 'Estados'] },
    ],
    demoData: {
      businessName: 'Night Tragos Bar & Lounge',
      phone: '+54 9 11 5544-3322',
      location: 'CABA, Buenos Aires',
      servicesOrProductsName: 'Tragos',
      items: [
        { id: 'night-p1', title: 'Mojito Neon Electric', subtitle: 'Ron blanco, menta, lima y soda con toque neón.', price: '$4.500', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80', badge: 'Más pedido', category: 'Cócteles' },
        { id: 'night-p2', title: 'Cyber Gin Tonic', subtitle: 'Gin artesanal, tónica premium, pepino y humo de romero.', price: '$5.200', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=400&q=80', category: 'Tragos de Autor' },
        { id: 'night-p3', title: 'Fernet Branca XL (1 Litro)', subtitle: 'Clásico Fernet con Coca bien fría y hielo de roca.', price: '$6.500', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?auto=format&fit=crop&w=400&q=80', badge: 'Promo', category: 'Promociones' },
        { id: 'night-p4', title: 'Cerveza Patagonia IPA', subtitle: 'Notas a lúpulo y cítricos, amargor equilibrado.', price: '$3.200', durationOrStock: 'Disponible', imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80', category: 'Cervezas' },
      ],
      collaborators: [
        { id: 'night-c1', name: 'Nico', role: 'Barra', email: 'barra.nightclub@gmail.com', isAdmin: false, avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', activeHours: '8 hrs' },
      ],
      sampleOrdersOrTurns: [
        { id: 'night-o1', code: '#TRAGO-8492', customer: 'Lucas', phone: '1133445566', detail: 'Mojito Neon Electric x2', status: 'Pendiente', total: '$9.000', time: '11:30 PM' },
        { id: 'night-o2', code: '#TRAGO-2210', customer: 'Vale', phone: '1122334455', detail: 'Cyber Gin Tonic', status: 'Entregado', total: '$5.200', time: '12:05 AM' },
      ],
    },
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'micro-a',
    name: 'Plan Micro-Emprendedor A',
    price: 5000,
    currency: 'ARS',
    period: '/mes',
    description: 'Ideal para arrancar: un profesional o local que gestiona todo con un solo administrador.',
    badge: 'INICIAL',
    priceNote: '* Llave en mano. Cancelás cuando quieras.',
    features: [
      '1 App Web personalizada con tu marca',
      'Página Pública + Panel de Administración',
      '1 Administrador (el dueño)',
      'Catálogo / Turnero + Carrito de encargos',
      'Botón directo a WhatsApp',
      'Código de retiro para tus clientes',
      'Sin comisiones por venta ni turno'
    ],
    highlight: false,
    isActive: true
  },
  {
    id: 'micro-b',
    name: 'Plan Micro-Emprendedor B',
    price: 10000,
    currency: 'ARS',
    period: '/mes',
    description: 'Para locales con equipo: sumás hasta 2 colaboradores que atienden en vivo.',
    badge: 'RECOMENDADO',
    priceNote: '* Llave en mano. Cancelás cuando quieras.',
    features: [
      'Todo lo del Plan A',
      '1 Administrador (el dueño)',
      '2 Colaboradores / ayudantes con acceso propio',
      'Notificaciones de pedidos y turnos en vivo',
      'Reseñas y opiniones moderadas',
      'Instalable como App (PWA) en el celular',
      'Soporte directo por WhatsApp'
    ],
    highlight: true,
    isActive: true
  },
  {
    id: 'micro-c',
    name: 'Plan Micro-Emprendedor C',
    price: 15000,
    currency: 'ARS',
    period: '/mes',
    description: 'Para negocios con más movimiento: dos administradores y hasta cuatro colaboradores.',
    badge: 'COMPLETO',
    priceNote: '* Llave en mano. Cancelás cuando quieras.',
    features: [
      'Todo lo del Plan B',
      '2 Administradores',
      '4 Colaboradores / ayudantes',
      'Estadísticas y reportes de ventas',
      'Catálogo extendido con imágenes HD',
      'Soporte preferente por WhatsApp'
    ],
    highlight: false,
    isActive: true
  },
  {
    id: 'pyme',
    name: 'Plan Negocio & Pyme',
    price: 22000,
    currency: 'ARS',
    period: '/mes',
    description: 'Perfecto para negocios con equipo de trabajo.',
    badge: 'PRÓXIMAMENTE',
    priceNote: '* Próximamente disponible.',
    features: [
      'Colaboradores ilimitados por App',
      'Estadísticas avanzadas'
    ],
    highlight: false,
    isActive: false
  },
  {
    id: 'franquicia',
    name: 'Plan Franquicia & Multi-Local',
    price: 45000,
    currency: 'ARS',
    period: '/mes',
    description: 'Para marcas con múltiples sucursales.',
    badge: 'PRÓXIMAMENTE',
    priceNote: '* Próximamente disponible.',
    features: [
      'Varias Apps para distintas sucursales',
      'Panel central de super-administrador'
    ],
    highlight: false,
    isActive: false
  }
];
