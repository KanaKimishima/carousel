import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '@/styles/UseEffectOne'

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })

    return(
        <>
            <Link href="/">Home</Link>
            <div>
                useEffectOne
            </div>
            <div>
                {number}
            </div>
        </>
    )
}