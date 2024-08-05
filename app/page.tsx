import Home from '@/components/Home'
import MainPage from '@/components/MainPage'
import { Navigation } from '@/components/navigation/Navigation'
import SkipToContent from '@/components/SkipToContent'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
    <SkipToContent />
    <Navigation />
    <MainPage />
    </>
  )
}

export default Page