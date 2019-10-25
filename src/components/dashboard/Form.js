import React, { Component } from 'react'
import { connect } from 'react-redux'
import { favoriteTeam } from '../../store/actions/favTeamActions'


class Form extends Component {
    state = {
        favoriteTeam: null
    }



    componentDidMount(){
        console.log('form component', this.props);
    }
    
    
   
    handleChange = (e) => {
       this.setState({
           favoriteTeam: e.target.value
       })
   }

   handleSubmit = (e) => {
       e.preventDefault();
       this.props.createFavoriteTeam(this.state.favoriteTeam);
       this.setState({
           favoriteTeam: null

       })
   }


    render() {
        



        return(
            
        <div className="d-flex side-bar ">
                <form onSubmit={this.handleSubmit}>
        
                
                    <h4 className="ft">Favourite Team:</h4>
                    <div className="form-group form-check-inline d-flex align-items-stretch custom-radio">
                   
                        <label htmlFor="rockets">
                            Houston Rockets
                            <input type="radio" className="form-control " id="rockets" name="team" value='rockets' checked={this.state.favoriteTeam === "rockets"} onChange={this.handleChange}/>
                        </label>
                    
                    <label htmlFor="warriors">
                        Golden State Warriors
                        <input type="radio" className="form-control " id="warriors" name="team" value='warriors' checked={this.state.favoriteTeam === "warriors"} onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="pelicans">
                        New Orleans Pelicans
                        <input type="radio" className="form-control " id="pelicans" name="team" value='pelicans' checked={this.state.favoriteTeam === "pelicans"} onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="lakers">
                        Los Angeles Lakers
                        <input type="radio" className="form-control " id="lakers" name="team" value='lakers' checked={this.state.favoriteTeam === "lakers"} onChange={this.handleChange}/>
                    </label>
                </div>
                    
                <div className="form-group">
                    <input type="submit" value="submit" className="btn btn-primary" id="submit-1" /> 
                    
                </div>
                    
                  
                    
                    
                </form>
                
                </div>  
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createFavoriteTeam: (favteam) => {dispatch(favoriteTeam(favteam))}
    }
}

export default connect(null, mapDispatchToProps)(Form)