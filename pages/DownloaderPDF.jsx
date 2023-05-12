
import styles from '../styles/Uuid.module.css'
import Layout from '../layout/Layout'

import { useRouter } from 'next/router'

import dynamic from "next/dynamic";

const InvoicePDF = dynamic(() => import("../components/pdf"), {
  ssr: false,
});

function UuidController() {
  const router = useRouter()


  console.log(JSON.parse(router.query.image))


  return (
    <Layout>

      <div className={styles.container}>
            <div style={{color: 'white'}}>

                Completa tu Descarga
                <br />
                <br />

            {/* <InvoicePDF image={JSON.parse(router.query.image)} dataUrl={router.query.dataUrl}  /> */}
            </div>      
       </div>
    </Layout>

  )
}

export default UuidController