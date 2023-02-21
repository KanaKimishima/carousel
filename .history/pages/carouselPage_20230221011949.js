import Carousel from "@/components/carousel"
import Link from "next/link"

export default function CarouselPage() {
    return(
        <main className={styles.main}>
            <Link className={style} href="/">Home</Link>
            <Carousel/>
        </main>
    )
}