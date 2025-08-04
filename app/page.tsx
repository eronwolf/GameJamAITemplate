'use client'

import { useCallback, useState, useEffect } from "react"
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
import Image from "next/image"
import { getAssetPath } from '../lib/utils'

export default () => {
  const png = getAssetPath('/cat.png')
  const jpg = getAssetPath('/cat.jpg')

  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
      <h1>Fast Refresh Demo</h1>
      <p>
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <hr className={styles.hr} />
      <Image
        height={50}
        width={50}
        src={png}
        alt="cat png"
      />
      <Image
        height={50}
        width={50}
        alt="cat jpg"
        src={jpg}
      />
      <div style={{
        width: 50,
        height: 50,
        backgroundSize: 'cover',
        backgroundImage: `url(${getAssetPath('/cat.png')})`
      }} />
      <div>
        <p>
          Auto incrementing value. The counter won't reset after edits or if
          there are errors.
        </p>
        <p>Current value: {count}</p>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>Component with state.</p>
        <ClickCount />
      </div>
      <hr className={styles.hr} />
    </main>
  );
}
