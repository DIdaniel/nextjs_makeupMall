import {useEffect,useState} from 'react';
import Axios from 'axios';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ItemList from '../src/component/ItemList';
import { Divider, Header, Loader } from 'semantic-ui-react';

export default function Home({list}) {
  return (
    <div>
      <Head>
        <title>HOME ㅣ 파우누스</title>
        <meta name="description" content="파우누스홈"></meta>
      </Head>
      <>
      <Header as="h3" style={{ paddingTop: '40px' }}>BEST ITEM</Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: '40px' }}>NEW ITEM</Header>
      <Divider />
      <ItemList list={list.slice(9)} />
      </>
    </div>    
  )
}

export async function getStaticProps() {
  const apiUrl =  process.env.NEXT_PUBLIC_API_URL;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props : {
      list : data,
      name: process.env.name,
    }
  }
}