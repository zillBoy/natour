import React from 'react'
import './App.scss'
import Logo from './assets/images/logo-white.png'
import Nat1 from './assets/images/nat-1-large.jpg'
import Nat2 from './assets/images/nat-2-large.jpg'
import Nat3 from './assets/images/nat-3-large.jpg'

const App = () => {
  
  return (
    <div>
      <header class="header">
          <div class="header__logo-box">
              <img src={Logo} alt="Logo" class="header__logo" />
          </div>

          <div class="header__text-box">
              <h1 class="heading-primary">
                  <span class="heading-primary--main">Outdoors</span>
                  <span class="heading-primary--sub">is where life happens</span>
              </h1>

              <a href="#section-tours" class="btn btn--white btn--animated">Discover our tours</a>
          </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventurous people
            </h2>
          </div>

          <div className='row'>
            <div className='col-1-of-2'>
              <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
              <p className="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quasi aspernatur numquam voluptas voluptatem consequatur at officiis, quae, placeat consequuntur explicabo iure atque impedit tempore! Dignissimos unde cumque itaque nobis.
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">Live adventure like you have never have before</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laboriosam alias labore repellendus corrupti culpa cumque nobis veritatis tenetur accusamus ut quam sequi cupiditate est ea impedit quae ipsum aperiam?
              </p>

              <a href="#" className="btn-text">Learn more &rarr;</a>
            </div>
            <div className='col-1-of-2'>
              <div className="composition">
                <img src={Nat1} alt="Photo 1" className="composition__photo composition__photo--p1" />
                <img src={Nat2} alt="Photo 2" className="composition__photo composition__photo--p2" />
                <img src={Nat3} alt="Photo 3" className="composition__photo composition__photo--p3" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>
            Col 1 of 2
          </div>
          <div className='col-1-of-2'>
            Col 1 of 2
          </div>
        </div>
        
        <div className='row'>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
        </div>

        <div className='row'>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
          <div className='col-2-of-3'>
            Col 2 of 3
          </div>
        </div>

        <div className='row'>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
        </div>

        <div className='row'>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-3-of-4'>
            Col 3 of 4
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default App
