import styles from '../styles/Downloader.module.css'
import Layout from '../layout/Layout'
import { useEffect, useState, useRef } from 'react'

import { useRouter } from 'next/router'

import dynamic from "next/dynamic";

const InvoicePDF = dynamic(() => import("../components/pdf"), {
  ssr: false,
});

function UuidController() {
  const router = useRouter()




  return (
    <Layout>
      <div className={styles.container}>
        <div>
          😍 Tu PDF se genero EXITOSAMENTE 😍
          <br />
          <br />
          {router.query.dataUrl && <InvoicePDF img={JSON.parse(router.query.image.replaceAll('%22', '"')).image} dbUrl={router.query.dataUrl && router.query.dataUrl.replaceAll(' ', '+')} />}
        </div>
      </div>
    </Layout>

  )
}

export default UuidController
