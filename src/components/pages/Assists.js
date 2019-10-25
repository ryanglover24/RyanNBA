import React from 'react'


const assists = () => {




    return (

    <div className="assists-wrapper"> 
    <section className="modals-sir">     
        <div className="modal" id="mymodal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Game scores:</h2>
                        <button className="close" type="button" data-dismiss="modal">x</button>
                    </div>
                    <div className="modal-body">
                        <p>Such and such scores blah blah blah</p>
                        <p>So and so score this that and the other</p>
                        <p>The game overall had a score of bing bong.</p>
                    </div>

                </div>
            </div>
        </div>
        
        <div className="modal" id="mymodal-2">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Game scores:</h2>
                        <button type="button" className="close" data-dismiss="modal">x</button>
                    </div>
                    <div className="modal-body">
                        <p>SucSUCK MEah blah blah</p>
                        <p>So and so score this that and the other</p>
                        <p>The game overall had a score of bing bong.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="modal" id="mymodal-3">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Game scores yo</h2>
                        <button type="button" data-dismiss="modal" className="close">x</button>
                    </div>
                    <div className="modal-body">
                        <p>Such and YURRR blah blah blah</p>
                        <p>So and so score this that and the other</p>
                        <p>The game overall had a score of bing bong.</p> 
                    </div>
                </div>
            </div>
        </div>
        
        <div className="modal" id="mymodal-4">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Title goes here</h2>
                        <button className="close" type="button" data-dismiss="modal">x</button>
                    </div>
                    <div className="modal-body">
                        <p>Things go here all day long fam</p>
                        <p>So and so score this that and the other</p>
                        <p>The game overall had a score of bing bong.</p> 
                    </div>
                </div>
            </div>
        </div>
        
        <div className="modal" id="mymodal-5">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">HIYA FAM</h2>
                        <button className="close" type="button" data-dismiss="modal">x</button>
                    </div>
                    <div className="modal-body">
                        <p>Things go here all day long fam</p>
                        <p>So and HELLO EVERYONEhat and the other</p>
                        <p>The game overall had a score of bing bong.</p> 
                    </div>
                </div>
            </div>    
        </div>
    
    </section>

    <section className="random-images">
        
        <img src="/img/image1.jpg" data-target="#mymodal-2" data-toggle="modal" />
            
        <img src="/img/image2.jpg" data-target="#mymodal-3" data-toggle="modal" /> 
            
        <img src="/img/image3.jpg" data-target="#mymodal-4" data-toggle="modal" />
            
        <img src="/img/image4.jpg" data-target="#mymodal-5" data-toggle="modal" />
    </section>
    </div>   

    )
}

export default assists