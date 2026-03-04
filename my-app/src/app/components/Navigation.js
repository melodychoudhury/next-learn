import Link from "next/link";

export default function Navigation() {
    return (
        <header style={{padding: "1rem", borderBottom: "1px solid red"}}>
          <nav>
            <ul className="flex gap-4 m-0 p-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/checkout">Checkout</Link>
              </li>
              <li>
                 <Link href="/about/team">team</Link>
              </li>
              <li>
                 <Link href="/contact">contact</Link>
              </li>
            </ul>
          </nav>
        </header>
    );
}