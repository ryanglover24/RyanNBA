import firebase from 'firebase'

export const favoriteTeam = (team) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
  
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const userId = getState().firebase.auth.uid;
  
  
         
        firestore.collection('FavTeam').doc(userId).set({
          favTeam: team,
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authorId: userId
          
        }).then(() => {
          dispatch({type: 'CREATE_FAVTEAM'})
        }).catch((err) => {
          dispatch({type: 'CREATE_FAVTEAM_ERROR'}, err)
          })
  
      }
    }