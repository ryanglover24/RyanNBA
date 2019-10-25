const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});


exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});


exports.userJoined = functions.auth.user()
 .onCreate(user => {

    return admin.firestore().collection('users')
    .doc(user.uid).get().then((doc) => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }
        
        return createNotification(notification);
    })
    
})

exports.favTeamCreated = functions.firestore
  .document('FavTeam/{FavTeam}')
  .onCreate(doc => {

    const FavTeam = doc.data();
    const notification = {
      user: `${FavTeam.authorFirstName} ${FavTeam.authorLastName}'s favorite team is the ${FavTeam.favTeam}!'`,
      team: FavTeam.favTeam,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});

