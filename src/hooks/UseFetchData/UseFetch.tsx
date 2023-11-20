import { useEffect, useState } from 'react';


const useFetch = (url: string) => {
    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    try
    {
        const response = await fetch(url);
        if (response.ok)
        {
            const result = await response.json();
            console.log(result);
            setData(result);
        }
    }
    catch(err)
    {
        console.log(err);
    }
    finally
    {
        setLoading(false);
    }
  }

  useEffect( () => {
    fetchData();
  },[url])


  return {data, loading};

} 

export default useFetch;

