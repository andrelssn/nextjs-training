
export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[]
}

export default async function Posts() {

    const response = await fetch('https://dummyjson.com/posts', {
        cache: 'force-cache',
        next: {
            revalidate: 60 // tempo que fará revalidação dos dados, reinicia a requisição
        }
    })
    const data: ResponseProps = await response.json()

    async function handleFetchPosts() {
        'use server'

        const response = await fetch('https://dummyjson.com/posts')
        const data: ResponseProps = await response.json()

        console.log(data.posts)
    }

    async function handleSearchUsers(formData: FormData) {
        'use server'

        const userId = formData.get('userId')

        const response = await fetch(`https://dummyjson.com/posts/${userId}`)
        const data: ResponseProps = await response.json()

        console.log(data.posts)
    }

    async function testClick() {
        'use server' // para poder utilizar em server

        console.log("click test")
    }

    return (
        <div>
            <h1>Posts Page</h1>

            <button onClick={testClick}>
                click test
            </button>

            <div>
                {data.posts.map((data => {
                    return (
                        <span key={data.id}>{data.title}<br/></span>
                    )
                }))}
            </div>
        </div>
    )
}