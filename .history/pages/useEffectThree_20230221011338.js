import Link from "next/link";
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectThree.module.css'


export default function UseEffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }), [number]

    return(
        <main className={styles.main}>
            <Link href="/">Home</Link>
            <div>
                <button className={styles.} onClick={() => setNumber(number + 1)}>Click me</button>
            </div>
            <div>
                useEffectThree
            </div>
            <div>
                {value}
            </div>
        </main>
    )
}