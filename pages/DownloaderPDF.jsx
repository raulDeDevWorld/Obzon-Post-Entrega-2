import { getImageData } from '../firebase/utils'
import { useUser } from "../context/Context.js"

import styles from '../styles/Uuid.module.css'
import Layout from '../layout/Layout'
import { useEffect, useState, useRef } from 'react'

import { useRouter } from 'next/router'

import dynamic from "next/dynamic";

const InvoicePDF = dynamic(() => import("../components/pdf"), {
  ssr: false,
});

function UuidController() {


  const { userImage, setUserImage } = useUser()

  const router = useRouter()
  const [mode, setMode] = useState({})



  useEffect(() => {
    getImageData(setUserImage)
  }, []);
  return (
    <Layout>

      <div className={styles.container}>
        <div style={{ color: 'white' }}>

          😍 El PDF se genero EXITOSAMENTE 😍
          <br />
          <br />

          {userImage && <InvoicePDF img={userImage} dbUrl={router.query.dataUrl && router.query.dataUrl.replaceAll(' ', '+')} />}
        </div>
      </div>
    </Layout>

  )
}

export default UuidController
