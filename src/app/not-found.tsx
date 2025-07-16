import Link from "next/link";


export default function NotFound() {
    return (
        <div>
            <h1 className="text-center font-bold">Página não encontrada</h1>
            <p>página não existe</p>

            <Link href={"/"}>
                Voltar Home
            </Link>
        </div>
    )
}