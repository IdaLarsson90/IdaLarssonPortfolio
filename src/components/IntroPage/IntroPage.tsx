import './IntroPage.scss'

interface Props {
    setIsIntroShow:(boolean:boolean)=>void
}

const IntroPage = ({setIsIntroShow}: Props) =>{

    return (
        <article className='introPage'>
            <div onClick={()=>setIsIntroShow(false)} className='headings'>
                <h1>Ida Larsson</h1>
                <h2> {`< FrontendDeveloper />`} </h2>
            </div>
        </article>
    )
}

export default IntroPage;