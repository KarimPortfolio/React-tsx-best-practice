
interface UseFetchResult{
    data: any,
    loading: boolean
}

declare function useFetch(url: string): UseFetchResult;

export default useFetch;

