// ─────────────────────────────────────────────────────────────
//  ACÁ CARGÁS TUS PRODUCTOS (a mano)
// ─────────────────────────────────────────────────────────────
//  Para agregar un producto, copiá un bloque { ... } y cambiá los datos.
//
//  - categoria: tiene que coincidir con un "slug" de categorias.js
//  - link:      ⚠️ pegá acá TU link de afiliado de Mercado Libre
//  - destacado: true = aparece en la home. false = solo en su categoría.
//  - imagen:    URL de la foto (podés copiar la del producto en ML)
// ─────────────────────────────────────────────────────────────

export const productos = [
  {
    id: 1,
    titulo: 'Auriculares Inalámbricos Xiaomi Redmi Buds 6 Play Negro',
    categoria: 'tecnologia',
    precio: 23999,
    precioAnterior: null, // opcional: precio tachado si hay descuento
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_802305-MLA95679505222_102025-F.webp',
    link: 'https://www.mercadolibre.com.ar/auriculares-inalambricos-xiaomi-redmi-buds-6-play-negro/p/MLA39962085?pdp_filters=item_id%3AMLA2053493606&matt_tool=89488245&ua=JBsyYG55EI2Yq9X0WC6ldt2_nRdswyNr0sZoS8XR_KzSxeM8',
    destacado: true,
  },
  {
    id: 9,
    titulo: 'Tensiómetro Digital de Brazo Femmto - Recargable USB',
    categoria: 'salud',
    precio: 30457,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_928849-MLA112816423054_072026-F.webp',
    link: 'https://www.mercadolibre.com.ar/tensiometro-digital-brazo-presion-arterial-aparato-para-tomar-presion-bateria-recargable-usb-medidor-automatico-femmto/p/MLA24219646?pdp_filters=item_id%3AMLA1841123797&matt_tool=89488245&ua=V5t5GjszSmx8srahFRYPu1Mv9cvKq4XEzja-EbxDhgIJD7rN',
    destacado: true,
  },
  {
    id: 10,
    titulo: 'Mini Motosierra Eléctrica Inalámbrica Lusqtoff Garden Plus - 2 Baterías y Maletín',
    categoria: 'herramientas',
    precio: 76404,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_881434-MLA95933934699_102025-F.webp',
    link: 'https://www.mercadolibre.com.ar/mini-motosierra-electrosierra-inalambrica-2-bateria-garden-plus-gp-de-lusqtoff-2-cadenas-maletin-para-poda/p/MLA49090527?pdp_filters=item_id%3AMLA1564732475&matt_tool=89488245&ua=7nr0be_K1bDsgeACRC4PXRJC21cY-1WDk1JPsFFYtdxCWfpV',
    destacado: true,
  },
  {
    id: 11,
    titulo: "L'Oréal Paris Protector Solar Fluid FPS50 UV Defender Tono Medio 40ml",
    categoria: 'belleza',
    precio: 24293,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_901689-MLA99447256812_112025-F.webp',
    link: 'https://www.mercadolibre.com.ar/loreal-paris-protector-solar-fluid-fps50-uv-defender-tono-medio-40ml/p/MLA22039127?pdp_filters=item_id%3AMLA1432208431&matt_tool=89488245&ua=G1bv3JcnEmW9SxBVGIJXMnr-C0xGBr4YnB1FooFLaUlmBa1r',
    destacado: true,
  },
  {
    id: 12,
    titulo: 'Tiras Reactivas para Medidor de Glucosa Femmto - Caja x 100 Unidades',
    categoria: 'salud',
    precio: 20000,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_820116-MLA111015990342_052026-F.webp',
    link: 'https://www.mercadolibre.com.ar/tiras-reactivas-para-medidor-glucosa-glucometro-diabetes-caja-x-100-unidades-digital-femmto/p/MLA44960319?pdp_filters=item_id%3AMLA1983110114&matt_tool=89488245&ua=Z4LcM5Gn3Y3TKINB4jvt4HOA8fDANUb2_864B1jqiGiPKsuR',
    destacado: true,
  },
  {
    id: 13,
    titulo: 'Rollo de Cocina Clásico Sussex 3x50 unidades',
    categoria: 'hogar',
    precio: 4000,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_614390-MLA99818570289_112025-F.webp',
    link: 'https://www.mercadolibre.com.ar/rollo-cocina-clasico-3x50-un-sussex-rollos-de-cocina/p/MLA23517299?pdp_filters=item_id%3AMLA3325205424&matt_tool=89488245&ua=vSvK_yVL5ggdqobi7c0Ohe1gSwMrSivT8QC4LignEbY0t_20',
    destacado: false,
  },
  {
    id: 14,
    titulo: 'Neumático Onyx NY-806 175/65 R14 82H',
    categoria: 'automotor',
    precio: 73570,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_939771-MLA110555105519_042026-F.webp',
    link: 'https://www.mercadolibre.com.ar/neumatico-onyx-ny-806-175-65-r14-82h-tecnologia-de-punta-con-respaldo-internacional/p/MLA68225151?pdp_filters=item_id%3AMLA3223280236&matt_tool=89488245&ua=EkJ7zv7ssWbkBTGJQS8Xe0TZin3_I6NR_T50AIDMKvguIyd9',
    destacado: true,
  },
  {
    id: 15,
    titulo: 'Organizador Zapatero LBS Desarmable - Negro',
    categoria: 'hogar',
    precio: 6350,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_901558-MLA99613148300_122025-F.webp',
    link: 'https://www.mercadolibre.com.ar/organizador-zapatero-lbs-zapatillas-botinero-estantes-desarmable-color-negro/p/MLA46752744?pdp_filters=item_id%3AMLA3509336950&matt_tool=89488245&ua=S8DBRNlf7pKdLBNAZWY6UFWS6pNULB_upPGhRZy6786deAy8',
    destacado: false,
  },
  {
    id: 16,
    titulo: "L'Oréal Elvive Óleo Extraordinario - Reparación de Puntas 100ml",
    categoria: 'belleza',
    precio: 10994,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_721474-MLA110623108637_042026-F.webp',
    link: 'https://www.mercadolibre.com.ar/oleo-extraordinario-reparacion-de-puntas-loreal-elvive-100ml/p/MLA24750853?pdp_filters=item_id%3AMLA1480431745&matt_tool=89488245&ua=2EH_1e4dSqoBG1QJIRRpuzd6UUpLYgMe0SqMvA5EBbJ1zLkZ',
    destacado: true,
  },
  {
    id: 17,
    titulo: 'Bisglicinato de Magnesio Quelado 1000mg Dr. Skin - 60 Comprimidos',
    categoria: 'salud',
    precio: 14600,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_927724-MLA99948451777_112025-F.webp',
    link: 'https://www.mercadolibre.com.ar/bisglicinato-de-magnesio-quelado-1000-mg-60-comprimidos-dr-skin-dormi-mejor-baja-el-estres-y-la-ansiedad-y-frena-contracturas-y-calambres-alta-absorcion-energia-y-relajacion-glicinato/p/MLA49714963?pdp_filters=item_id%3AMLA1496835113&matt_tool=89488245&ua=SjMtHjkLMxWtHbzzz3oKOX2-Gdx-otEtfZB10KEC99dpVh8T',
    destacado: true,
  },
  {
    id: 18,
    titulo: 'Papel Higiénico Higienol Max Simple 80m - Pack x 4',
    categoria: 'hogar',
    precio: 5876,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_892599-MLA99932689701_112025-F.webp',
    link: 'https://www.mercadolibre.com.ar/papel-higienico-higienol-max-simple-80-m-pack-de-4/p/MLA16009102?pdp_filters=item_id%3AMLA1916868284&matt_tool=89488245&ua=wWfT3yxrP9txo888UCRj3Q5FY3KzIxT1no4Rtp2urHU0QOwW',
    destacado: false,
  },
  {
    id: 19,
    titulo: 'Kit de Internet vía Satélite Starlink Mini',
    categoria: 'tecnologia',
    precio: 299000,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_807657-MLA106594620491_022026-F.webp',
    link: 'https://www.mercadolibre.com.ar/kit-de-internet-via-satelite-starlink-mini-x/p/MLA65276331?pdp_filters=item_id%3AMLA2842747978&matt_tool=89488245&ua=utZO2NlqEClR9VtTNtv6iXJcWW2aSzu6Qa9VhfY0-_yT9j-s',
    destacado: true,
  },
  {
    id: 20,
    titulo: 'Balanza Digital con Bluetooth Femmto - Peso Corporal hasta 180kg',
    categoria: 'salud',
    precio: 12999,
    precioAnterior: null,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_845343-MLA114064454295_072026-F.webp',
    link: 'https://www.mercadolibre.com.ar/balanza-digital-con-bluetooth-personal-de-bano-peso-corporal-180-kg-diseno-minimalista-femmto/p/MLA15503957?pdp_filters=item_id%3AMLA1616447309&matt_tool=89488245&ua=i8mFvEQ1T6CCktE8OhDGQQA92TkTVoosA72tyLAsKonH1qVF',
    destacado: true,
  },
];

export function productosDestacados() {
  return productos.filter((p) => p.destacado);
}

export function productosPorCategoria(slug) {
  return productos.filter((p) => p.categoria === slug);
}

export function formatearPrecio(valor) {
  return valor.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  });
}
