import {H2} from '../../components/portifolio/Titles'
import MainPortifolio from '../../components/portifolio/MainPortifolio'
import Link from '../../components/portifolio/Link'
import {experiencies, projects} from '../../apis/portifolio.js'
import Head from 'next/head'

const Portifolio = ()=>{
    return(
        <>
        <Head>
            <title>portifófio</title>
        </Head>
        <MainPortifolio>
            <H2>Experiência</H2>
            {experiencies.map((exp)=>{
                return <li><strong> - {exp.title}: </strong> {exp.descricao}</li>
            })}
            <H2>Projetos</H2>
            {projects.map((proj)=>{
                return <li><strong>- {proj.title}</strong> {proj.descricao} <Link href={proj.href}>Acesse</Link></li>
            })}

        </MainPortifolio>
        </>
    )
}

export default Portifolio;