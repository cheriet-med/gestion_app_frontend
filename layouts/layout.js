import Head from 'next/head';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {


const row = useRouter();
const { locale } = row;

    return (

        <div>
        <Head>
        <title>Gestion</title>
        <meta name="title" content="Gestion" />
        <meta name="robots" content="index, follow"/>
        </Head> 

       <main>
        {children}
        </main>


        </div>
    )
}
export default Layout;