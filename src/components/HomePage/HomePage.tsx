import './HomePage.scss'
import Main from './Main/Main';

const HomePage = () =>{

    return (
        <article className='homePage'>
            <header>
                <div className='headings'>
                    <h1>Ida Larsson</h1>
                    <h2> {`< FrontendDeveloper />`} </h2>
                </div>
            </header>
            <Main/>
        </article>
    )
}

export default HomePage;