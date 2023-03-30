import PropTypes from 'prop-types';
function Profile ({fullName,bio,profession,handleName,monImage}){
    return(
        
        <div>
            <h2>je m'appelle {fullName}</h2>
            <h2>je suis {bio}</h2>
            <h3>je fais comme activité {profession}</h3>
            <button onClick={handleName}>veuillez cliquez</button>
            <div>{monImage}</div>
                    
        </div>
    )
    Profile.propTypes = {
        fullName: PropTypes.string,
        bio: PropTypes.string,
        profession: PropTypes.string,
      
      };
}
export default Profile