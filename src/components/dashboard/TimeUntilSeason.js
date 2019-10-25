import React from 'react'




const TimeUntilSeason = ({FavTeam, auth}) => {

    // console.log(props);
  
     
    // const imgSource = '/img/teams/' + '.jpg';

    return(
        <div className="time-to-wrapper">
            <section>
                <div className="side-bar align-items-stretch">
                    <h2>NBA season begins in:</h2>
                    <p className="Nba-time" id="nbaTime">TIME UNTIL SEASON BEGINS GOES HERE</p>
                </div>

            </section>       


            <section>
            { FavTeam && FavTeam.map(FavTeam => {
                if (auth.uid == FavTeam.authorId) {
                    return (
                        <div key={FavTeam.id} >
                            <div className="fav-team-image">
                                <img src={'img/teams/' +FavTeam.favTeam + '.jpg'} className='img-fluid'  />
                            </div>
                        </div>
                    )
                }        
            })
            }
            
            </section>
        </div>
        )
    }






export default TimeUntilSeason