import CardsContainer from '../../components/cards/CardsContainer';
import { useFetch } from '../../hooks';

export default function Posts() {

    interface Post {
        userId: number,
        id: number,
        title: string,
        body: string
    }

    const {data, loading} = useFetch('https://jsonplaceholder.typicode.com/posts');
    // const GetUsers = (user_id: number) => {
    //     const {data} = useFetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    //     return data;

    // }
    // data.map( (value: Post, index: number) => {
    //     // const user = GetUsers(value.userId);
    //     const newPost = {
    //         id:index,
    //         userId: value.userId,
    //         title: value.title,
    //         body: value.body,
    //         //user: user
    //     };
    //     value = newPost
    // })
    // console.log(data);

  return (
    <div className='py-16'>
        <h2 className='text-center text-3xl text-violet-400'>All Our Users Posts</h2>
        <div className='py-10'>
        {
            loading ? (<p className='text-center'>Loading...</p>) : (
                <CardsContainer data={data} />
            )
        }
        </div>
    </div>
  )
}
