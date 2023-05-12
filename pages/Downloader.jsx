import styles from '../styles/Uuid.module.css'
import Layout from '../layout/Layout'


import { useRouter } from 'next/router'

import dynamic from "next/dynamic";

const InvoicePDF = dynamic(() => import("../components/pdfDoc"), {
  ssr: false,
});

function UuidController() {
  const router = useRouter()

  // router.query.uuid && console.log(router.query.uuid.split(','))

  return (
    <Layout>

      <div className={styles.container}>
        <div style={{ color: 'white' }}>

          Completa tu Descarga
          <br />
          <br />

          {/* {router.query.uuid &&  <InvoicePDF uuid={router.query.uuid.split(',')} />} */}
        </div>
      </div>
    </Layout>

  )
}

export default UuidController

















