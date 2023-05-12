
import { useState, useEffect } from 'react'
import { generateUUID } from '../utils/UIDgenerator'
import { writeUserData } from '../firebase/utils'
import Button from '../components/Button'
import styles from '../styles/Uuid.module.css'
import Image from 'next/image'
import Layout from '../layout/Layout'
import { useUser } from '../context/Context.js'
import { WithAuth } from '../HOCs/WithAuth'

import { useRouter } from 'next/router'

import dynamic from "next/dynamic";

const InvoicePDF = dynamic(() => import("../components/pdfDoc"), {
  ssr: false,
});

function UuidController() {
  const router = useRouter()


  return (
    <Layout>

      <div className={styles.container}>
        <div style={{ color: 'white' }}>

          Completa tu Descarga
          <br />
          <br />

          {router.query.uuid &&  <InvoicePDF uuid={router.query.uuid.split(',')} />}
        </div>
      </div>
    </Layout>

  )
}

export default UuidController

















