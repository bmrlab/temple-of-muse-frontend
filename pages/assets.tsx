import type { NextLayoutPage } from 'next'
import { useState } from 'react'
import clsx from 'clsx'
import Layout from '../components/layout'

const Assets: NextLayoutPage = () => {
  return (
    <>
      {/**/}
    </>
  )
}

Assets.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Assets
