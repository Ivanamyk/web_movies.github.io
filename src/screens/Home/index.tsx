import React, { FC } from 'react'
import { Layout } from '../../components/Layout'
import { Slider, List } from './components'

const Home: FC = () => {
    return (
        <>
            <Layout>
                <Slider />
                <List />
            </ Layout>
        </>
    )
}
export { Home }