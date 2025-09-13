import { localUrl } from '@/kernel/urls'
import { useQuery } from '@tanstack/react-query'

export function useLocalDatasetQuery<T>(filePath: string, enabled = true) {
  const fullUrl = localUrl(`/data/${filePath}.min.json`)

  return useQuery<T>({
    queryKey: [`local-cdn-${filePath}`],
    queryFn: () => fetch(fullUrl).then((res) => res.json()),
    enabled,
  })
}
