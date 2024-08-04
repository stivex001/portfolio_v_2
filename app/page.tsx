import { Navigation } from '@/components/navigation/Navigation'
import SkipToContent from '@/components/SkipToContent'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
    <SkipToContent />
    <Navigation />
    </>
  )
}

export default Page