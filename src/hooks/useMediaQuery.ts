import { useEffect, useMemo, useState } from 'react'

export function useMediaQuery(mediaQueryString: string) {
    const queryString = removeReservedMediaKeyWord(mediaQueryString)
    const query = useMemo(() => window.matchMedia(queryString), [queryString])
    const [matches, setMatches] = useState(query.matches)

    useEffect(() => {
        const listener = (e: any) => setMatches(e.matches)
        query.addEventListener('change', listener)
        return () => query.removeEventListener('change', listener)
    }, [query])

    return matches
}

function removeReservedMediaKeyWord(mediaQueryString: string) {
    return mediaQueryString.replace('@media', '').trim()
}
