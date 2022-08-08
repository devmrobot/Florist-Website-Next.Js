import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>♥ Adriane M. Fleuriste Paris | Livraison fleurs en 2 heures à Paris</title>
        <meta name="description" content="Adriane M Fleuriste Paris, artisan de la fleurs ouvert du lundi au samedi de 9h00 à 20h00 - 01 42 22 22 46. Livraison de fleurs, Mariages, Evènements, Abonnements." />
        <link rel="canonical" href="https://www.adrianem.fr/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ADRIANE M</h1>
      <Link href="/livraison-fleurs-paris-bouquet-du-mois">Livraisons de fleurs</Link>
    </div>
  )
}
