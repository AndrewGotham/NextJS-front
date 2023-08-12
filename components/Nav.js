import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul>
                <Link href="/">Home</Link>
                <Link href="about">About</Link>
                <Link href="articles">Articles</Link>
                <Link href="services">Services</Link>
            </ul>
        </nav>
    );
}
