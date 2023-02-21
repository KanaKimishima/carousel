import Carousel from "@/components/carousel"
import Link from "next/link"
import style from '@/styles/CarouselPage.module.js'

export default function CarouselPage() {
    return(
        <main className={styles.main}>
            <Link className={styles.link} href="/">Home</Link>
            <Carousel className={styles.img}/>
        </main>
    )
}