import stocksPic from '../img/stocks.png'
import forexPic from '../img/forex.png'
import metalsPic from '../img/metals.png'
import cryptoPic from '../img/crypto.png'
import energiesPic from '../img/energies.png'
import indicesPic from '../img/indices.png'

const OurBots = () => {
    return (
        <div className="ourBots-container">
            <h2 className>Our Bots</h2>
            <p>What kind of bot are you looking for</p>
            <ul className="bot-categories">
                <li className="botCategory">
                    <img src={stocksPic} alt="stocks" className="botCategory-pic"/>
                    <p className="botCategory-name">Stocks</p>
                </li>
                <li className="botCategory">
                    <img src={ forexPic } alt="forex" className="botCategory-pic"/>
                    <p className="botCategory-name">Forex</p>
                </li>
                <li className="botCategory">
                    <img src={ metalsPic } alt="metals" className="botCategory-pic"/>
                    <p className="botCategory-name">Metals</p>
                </li>
                <li className="botCategory">
                    <img src={ cryptoPic } alt="crypto" className="botCategory-pic"/>
                    <p className="botCategory-name">Crypto</p>
                </li>
                <li className="botCategory">
                    <img src={ energiesPic } alt="energies" className="botCategory-pic"/>
                    <p className="botCategory-name">Energies</p>
                </li>
                <li className="botCategory">
                    <img src={ indicesPic} alt="Indices" className="botCategory-pic"/>
                    <p className="botCategory-name">Indices</p>
                </li>
            </ul>
        </div>
    )
}

export default OurBots