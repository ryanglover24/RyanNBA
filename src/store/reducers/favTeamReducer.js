const initState = {
    authorFirstName: '',
    authorId: '',
    authorLastName: '',
    favTeam: ''
}


const favTeamReducer = (state= initState, action) => {
    switch (action.type) {
       case 'CREATE_FAVTEAM':
           return state;

        case 'CREATE_FAVTEAM_ERROR':
        return state;

        default: return state;   
    }

}


export default favTeamReducer
