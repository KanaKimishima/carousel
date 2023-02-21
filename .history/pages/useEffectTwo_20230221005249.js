import Link from "next/link";
import { useEffect, useState } from "react";
import style from '@/styles/UseEffectTwo.module.css'

export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return(
        <main >
            <Link href="/">Home</Link>
            <div className={style.heading}>
                UseEffect Two
            </div>
            <div>
                {number}
            </div>
        </main>
    )
}