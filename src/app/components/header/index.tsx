import Link from "next/link";

export function Header() {
    return (
        <header
            style={{
                display: "flex",
                backgroundColor: "#ffffffff",
                color: "#1976d2",
                padding: 15,
                justifyContent: "space-between",
                borderBottom: "1px solid #cecece"
            }}
        >
            <h1 className="font-bold">
                Pet Gallery
            </h1>

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