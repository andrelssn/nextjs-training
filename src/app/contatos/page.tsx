
interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[]
}

export default async function Contatos() {

    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json()

    async function testClick() {
        'use server' // para poder utilizar em server

        console.log("click test")
    }

    return (
        <div>
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