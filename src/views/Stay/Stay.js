import './Stay.css';



function Stay(){
    return(
        <div>
         <div className="backgroung-image" >
            <h1 className='heading-1'>-</h1>
            <h1 className='heading'>Howzat for a perfect stay</h1>
            <p className='text'>Search hotels, homes and much more</p>
            <button className='btn'>Discover More</button>

          </div>  

             <div>
               <input type='checkbox' id='travel-1' className='checkbox' />
               <label for='travel-1' className='checkbox-label'>I'm travelling for work</label> &nbsp; &nbsp; &nbsp; 

               <input type='checkbox' id='flight' />
               <label for='flight' className='checkbox-label'>I'm looking for flights</label>
              </div>

              <h2 className='sub-heading'> Offers</h2>
              <p className='sub-text'>Promotions, deals and special offers for you</p>
               
               <div className='sub-container'>
                <div className='fly-away-content'>
                  <div className='info-img'>
                  <h2 className='heading-flight'>Fly away to your dream holiday</h2>
                  <p className='flight-text'>Get inspired, compare and book flights with more flexibility</p>
                  <button className='flight-btn'>search for flight</button>

                  </div>
                  <div className='flight-img-section'>
                    <img src='https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=' alt='' className='flight-img'/>
                  </div>
                  
                </div>
                <div className='fly-away-content'>
                  <div>
                  <h2 className='heading-flight'>Take your longest holiday yet</h2>
                  <p className='flight-text'>Browse properties offering long-term stays, many at reduced monthly rates.</p>
                  <button className='flight-btn'>Find a stay</button>
                  </div>
                  <div>
                    <img src='https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o=' alt='' className='family-img'/>

                  </div>
                </div>
               </div>

               <h2 className='sub-heading'>Off to the cricket?</h2>
               <p className='sub-text'>Hit a six with your match-day accommodation</p>




              
        </div>    
        

           

    )
}

export default Stay