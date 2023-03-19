import './App.css'


export default function Home() {
  return(
    <div className='container_main'>
       <div className='container_sub'>

          <div className="container-fluid">
            <header className="sticky-top">
              <nav className="navbar navbar-expand-lg navbar-dark py-3">
                <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Live Action</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Community</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                              </li>
                            </ul>
                                  <form className="form-inline my-2 my-lg-0">
                                    <button className="btn btn-outline-light px-3 my-2 my-sm-0" type="submit">Sign in</button>
                                    <button className="btnsignup1 px-3 my-2 my-sm-0" type="submit">Sign up</button>
                                  </form>
                        </div>
            </nav>
            </header>
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6" id="first">

                        <div className="col">

                          <p className="h1">Discover, and Collect extraoradinary <br/> <span>Monster</span> NFTs</p>
                          <p className="h6 py-2">Buy, Sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.</p>
                          <div>
                          <form className="form-inline my-4 py-3 my-lg-0">
                            <button className="btn btn-outline-light px-4 my-2 my-sm-0" type="submit">Sign in</button>
                              <button className="btnsignup px-4 my-2 my-sm-0" type="submit">Sign up</button>
                          </form>
                          </div>
                          <div className="container" id="second">
                          <div className="row">
                          <div className="col-sm">

                            <div className="secound_sub"><h2>35K+</h2><p>Artworks</p></div>
                          </div>
                          </div>
                          <div className="row">
                          <div className="col-sm">
                            <div className="secound_sub"><h2>15K+</h2><p>Auctions</p></div>
                          </div>
                          </div>
                          <div className="row">
                          <div className="col-sm">
                            <div className="secound_sub"><h2>25K+</h2><p>Artists</p></div>
                          </div>
                          </div>
                          </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center"> 
                        <img class="images" id="animation" src="img/nft_images.png" alt=".." width={"350px"}/>
                        <div className="ball"></div>
                        <div className="ball2"></div>
                        <div className="ball1"></div>

                    </div>
                  </div>
                        <div className="container" id="footermain">
                          <div className="row">
                            <div className="col">
                              <div className="footer">
                                <img class="images" src="img/icons8-coin-wallet-64.png" alt=".." width={"50px"}/>
                                  <h3>Set Up Your Wallet</h3>
                                    <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                              </div>
                            </div>
                            <div className="col">
                              <div className="footer" >
                                <img class="images" src="img/icons8-photo-album-48.png" alt=".." width={"50px"}/>
                                  <h3>Create Your Collection</h3>
                                    <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                              </div>
                            </div>
                            <div className="col">
                              <div className="footer">
                                <img class="images" src="img/icons8-add-64.png" alt=".." width={"50px"}/>    
                                  <h3>Add Your NFTs</h3>
                                    <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                              </div>
                            </div>
                            <div className="col">
                              <div className="footer">
                                <img class="images" src="img/icons8-todo-list-50.png" alt=".." width={"50px"}/>    
                                  <h3>List Them For Sale</h3>
                                    <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                              </div>
                            </div>
                            
                          </div>
                        </div>
          </div>
      </div>
    </div>
  )
}