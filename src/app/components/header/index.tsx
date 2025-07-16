import Link from "next/link";

export function Header() {
    return (
        <header style={{ display: "flex", backgroundColor: "#000000", color: "#fff", padding: 15, justifyContent: "space-between" }}>
            <h1>Next</h1>

            <div>
                <Link href={'/'} style={{ marginRight: 10 }}>
                    Home
                </Link>

                <Link href={'/contatos'}>
                    contatos
                </Link>

                <Link href={'/posts'}>
                    posts
                </Link>
            </div>
        </header>
    )
}