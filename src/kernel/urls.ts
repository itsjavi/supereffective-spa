import type { MultiFormatImage } from '../lib/utils/types'

export const APP_BASE_URL = import.meta.env.BASE_URL
export const LOCAL_IMAGES_CDN_URL = `${APP_BASE_URL}images`

export function getGameCoverImageUrls(gameId: string): MultiFormatImage {
  const avifSrc = `${LOCAL_IMAGES_CDN_URL}/avif/games/${gameId}.avif`
  const webpSrc = `${LOCAL_IMAGES_CDN_URL}/webp/games/${gameId}.webp`
  return { webpSrc, avifSrc, fallbackSrc: webpSrc }
}

export function getPokemonImageUrls(pokemonId: string, shiny: boolean): MultiFormatImage {
  const shinyPath = shiny ? 'shiny' : 'regular'
  const avifSrc = `${LOCAL_IMAGES_CDN_URL}/avif/pokemon/${shinyPath}/${pokemonId}.avif`
  const webpSrc = `${LOCAL_IMAGES_CDN_URL}/webp/pokemon/${shinyPath}/${pokemonId}.webp`
  return { webpSrc, avifSrc, fallbackSrc: webpSrc }
}

export function localUrl(path?: string): string {
  if (!path) {
    return APP_BASE_URL
  }
  const normalizedPath = path.replace(/^\//, '')
  return `${APP_BASE_URL}${normalizedPath}`
}

export function getDexSourceCodeUrl() {
  return 'https://github.com/itsjavi/supereffective-spa/blob/main/dataset/pokedexes.json'
}
