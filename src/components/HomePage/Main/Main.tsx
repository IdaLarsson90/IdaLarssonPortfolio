import './Main.scss'
import rewind from '../../../assets/rewind.png'
import bonzai from '../../../assets/bonzai.png'
import rescueRabbits from '../../../assets/rescue-rabbits.png'

const Main = () =>{

    return (
        <main className='main'>
            <article className="about">
                <h2 className='heading'>About me</h2>
                <p>Jag heter Ida och är 32 år gammal. Jag studerar för närvarande frontendutveckling med inriktning mot UX/UI. Tidigare arbetade jag som fritidspedagog i Karlstad. I mitt arbete som fritidspedagog har jag ansvarat för fritidshemmens IT-utveckling och utformning och innehåll på fritidshemmens bloggsidor i wordpress och skolans sociala medier.</p>
                <p>Jag är varken en datanörd eller någon typ av mattegeni. För ett par år sedan trodde jag att C# hette 'si hashtag'. Nu kan jag bygga hemsidor i React! </p> 
                <p> Mitt intresse för kod väcktes efter att ha startat en programmeringsklubb för eleverna på fritidshemmet som jag arbetade på. ScratcJr och beeBot fick mig förälskad i problemlösning och det datalogiska tänkandet.</p>
                <p> Min kreativa sida syns både på jobbet och på fritiden. Hemma målar och pysslar jag gärna och jag går 'all in' när det kommer till att pynta till kalas och bjudningar. Jag har också designat en lekstuga som jag tillsammans med familjen byggt endast med ritningar från mitt egna huvud samt skrivit och formgett en bok helt själv.</p>
            </article>
            <article className="skills">
                <h2 className='heading'>Färdigheter</h2>
                <ul>
                    <li>HTML5/CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Figma</li>
                    <li>Node.js</li>
                    <li>Typescript</li>
                    <li>SCSS/SASS</li>
                    <li>Docker</li>
                    <li>Git</li>
                </ul>
            </article>
            <article className="projects">
                <h2 className='heading'>Projects</h2>
                <section className='projectCard'>
                    <img src={rescueRabbits} alt="thumbnail" className='thumbnail' />
                    <h3 className='heading'>Rescue Rabbits</h3>
                    <div className="description">
                        <p>Med hjälp av Rescue Rabbits hjälper man hemlösa djur att hitta ett hem. Man kan söka på ort och djurtyp för att hitta ett djur som passar en själv. </p>
                        <p>Ett grupparbete i react där vi använde oss av .json för att hantera all djurdata. </p>
                    </div>
                    <div className="links">
                        <a href="https://github.com/KarlEmilArvid/Rescue-Rabbits">Länk till GitHub</a>
                
                    </div>
                </section>
                <section className='projectCard'>
                    <img src={rewind} alt="thumbnail" className='thumbnail' />
                    <h3 className='heading'>Rewind</h3>
                    <div className="description">
                        <p>En hemsida där man kan registrera spel, deltagare och resultat. Man kan se vem som vunnit flest antal gånger i ett specifikt spel och se hur många av de tio senaste matcherna en spelare har vunnit.</p>
                        <p>Ett skolprojekt där kravet var att använda teknikerna react, typescript, scss och docker</p>
                    </div>
                    <div className="links">
                        <a href="https://github.com/IdaLarsson90/IdaLarssonPortfolio">Länk till GitHub</a>
                        <a href="https://rewind-3e9p.onrender.com">Länk till hemsidan</a>
                    </div>
                </section>
                <section className='projectCard'>
                    <img src={bonzai} alt="thumbnail" className='thumbnail' />
                    <h3 className='heading'>Bonz.AI</h3>
                    <div className="description">
                        <p>Bonz.ai är ett hotell som drivs med AI med robotar till personal. </p>
                        <p>Ett av de tidigaste skolprojekten där kravet var att utvecka 'mobile first' och man hade eget ansvar från design till produkt</p>
                    </div>
                    <div className="links">
                        <a href="https://github.com/IdaLarsson90/hotel-bonzai">Länk till GitHub</a>
                
                    </div>
                </section>
            </article>
            
        </main>
    )
}

export default Main;