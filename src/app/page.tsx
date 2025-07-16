import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Home - Aula Next JS',
    description: "Aprendendo Next",
    openGraph: {
        title: 'Aprendendo Nextjs',
        description: "Aprendendo Next",
        // images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fpt-br%2Fs%2Ffotografias%2Fimagem&psig=AOvVaw27mNrKOo0IoKK17knL74rp&ust=1752691346137000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiYypnCv44DFQAAAAAdAAAAABAE']
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true
        }
    }
} // EXEMPLO DE METADATA

export const revalidate = 60;

export default function Home() {

    const randomNumber = Math.random() * 10;

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Num gerado: {randomNumber}</h2>
        </div>
    )
}