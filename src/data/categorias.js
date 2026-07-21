// Categorías del sitio. El "slug" es lo que aparece en la URL: /categoria/tecnologia
export const categorias = [
  { slug: 'tecnologia', nombre: 'Tecnología', emoji: '💻' },
  { slug: 'salud', nombre: 'Salud', emoji: '🩺' },
  { slug: 'belleza', nombre: 'Belleza', emoji: '💄' },
  { slug: 'hogar', nombre: 'Hogar', emoji: '🏠' },
  { slug: 'herramientas', nombre: 'Herramientas', emoji: '🔧' },
  { slug: 'automotor', nombre: 'Automotor', emoji: '🚗' },
];

export function nombreCategoria(slug) {
  return categorias.find((c) => c.slug === slug)?.nombre ?? slug;
}
