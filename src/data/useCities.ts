import { cityPreviewList } from './cities'

export function useCities(cityName: string, category: string | null) {
  console.log({ cityName, category })
  return { cityPreviewList }
}
