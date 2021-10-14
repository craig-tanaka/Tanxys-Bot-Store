import banner from '../img/banner.jpg';

const Header = () => {
    return (
        <header>
            <img src={ banner } alt="trading" className="banner-img"/>
            <div className="">
                <h2>Get Yourself The Best Bots in The Bizz</h2>
                <p>With our bots you don't have to spend every waking hour watching your charts
                    and countless more analysing the same charts over and over again.
                    Our bots anaylse everything for you, set your take profits and stop losses.
                    All you have to do is sit back and reap the proits.
                    It's trading like it was meant to be.
                </p>
            </div>
        </header>
    )
}

export default Header
