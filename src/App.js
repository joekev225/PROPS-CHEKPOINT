
import Profile from './Profile'
// import photo from './photo.jpg'
import PropTypes from 'prop-types';

function App() {
  let fullName= 'Ouraga kevin'
  let bio ='je suis passionnée d\'informatique'
  let profession='ingenieurie'
  return (
    <div className="App">
       <Profile fullName={fullName} bio={bio} profession={profession} handleName={() => alert(`Le nom de l'utilisateur est ${fullName}`)}>
        <img src='/logo192.png' alt="" />
        </Profile>
    </div>
  );
}


export default App;
