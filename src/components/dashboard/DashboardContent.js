import React, { Component } from 'react'
import TimeUntilSeason from './TimeUntilSeason'


class DashboardContent extends Component {
    
 
    


render(){

    const { FavTeam, auth } = this.props;


    return (

    <div className="dashboard-content-wrapper">
            <section>
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
        </section>
        
        
        
    
    <section className="wrapper-1">
        


            <div className="container-fluid panel-body">

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 panel-body d-flex align-items-stretch">
                        <div className="card card-1">
                            <div className="card-header bg-danger text-white">
                                <h2>WIZ vs KINGS 10/9/2019</h2>
                            </div>
                            <div className="card-body">
                                <a href="#" data-toggle="modal" data-target="#mymodal">
                                    <img src="/img/image1.jpg" className="img-fluid" />
                                </a>
                                    <p>"[Coach Gregg Popovich] and the rest of staff said that they like my defensive versatility, how I can guard multiple positions," he explained. "With the Euro game, there's not too many people posting up. So, it's going to bring guys out who have to guard me. That will open penetration for our elite guards."</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 panel-body d-flex align-items-stretch">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <h2>GSW vs OKC 10/7/2019</h2>
                            </div>
                            <div className="card-body">
                                <a href="#" data-target="#mymodal" data-toggle="modal">
                                    <img src="/img/image4.jpg" className="img-fluid" />
                                </a>
                                    <p>Kuzma said afterward that he wasn't surprised when Middleton checked in for one of the Senior Team centers and told Kuzma that he was now playing the 5 and guarding Jarrett Allen (before Robinson checked in).</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 panel-body d-flex align-items-stretch">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <h2>LAL vs RAP 10/5/2019</h2>
                            </div>
                            <div className="card-body">
                                <a href="#" data-toggle="modal" data-target="#mymodal">
                                    <img src="/img/image3.jpg" className="img-fluid" />
                                </a>
                                    <p>The Senior Team had a solid lead midway through that last period, but they lost it when coach Steve Kerr went small with a lineup of De'Aaron Fox, Jaylen Brown, Jayson Tatum, Middleton and Kyle Kuzma. The Select Team, playing with a frontline of Jonathan Isaac, Marvin Bagley Jr. and Mitchell Robinson for the last few minutes, scored too easily inside against the smaller Senior lineup.</p>
                            </div>
                        </div>
                    </div>

                <div className="col-12 col-sm-6 col-md-5 col-lg-3 col-xl-3">
                    <TimeUntilSeason FavTeam={FavTeam} auth={auth} />
                </div>


                </div>  
            </div>
    </section>
        
        
  
</div>
    )
}
}


export default DashboardContent