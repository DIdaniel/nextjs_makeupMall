import Axios from 'axios'
import Head from 'next/head';
import Item from '../../src/component/Item';

const Post = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
     )}
    </>
  )
}

export default Post

export async function getStaticProps(context) {
  return {
    paths: [
      { params: { id: '740' } }, // See the "paths" section below
      { params: { id: '730' } }, // See the "paths" section below
      { params: { id: '729' } }, // See the "paths" section below
    ],
    fallback: false
  };
};
