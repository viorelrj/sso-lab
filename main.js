document.getElementById('google').addEventListener('click', authGoogle);
document.getElementById('github').addEventListener('click', authGithub);
document.getElementById('yahoo').addEventListener('click', authYahoo);


function authorizeAndLog(provider) {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result);
    }).catch(function(error) {
        console.error(error)
    });
}

function authGithub() {
    var provider = new firebase.auth.GithubAuthProvider();
    authorizeAndLog(provider);
}

function authGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    
    authorizeAndLog(provider);
}

function authYahoo() {
    var provider = new firebase.auth.OAuthProvider('yahoo.com');

    authorizeAndLog(provider);
}