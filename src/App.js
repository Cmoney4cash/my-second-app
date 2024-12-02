import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
import ProfileCard from './components/ProfileCard';
import profileImage from './assets/favicon.png';




function App() {
  const styles = {
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
    },
    app: {
      display: 'flex',
    }
  }

  return (
   
    // <div style={styles.app}>
    //   <Sidebar/>

    //   <div style={styles.mainContent}>
    //     <Header/>
    //     <Dashboard/>
    //   </div>
    // </div>

    <div>
      <ProfileCard 
      name={"John D"}
      role={"Manager"}
      bio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      image={profileImage}/>


<ProfileCard 
      name={"John Doe"}
      role={"Manager"}
      bio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      image={profileImage}/>

<ProfileCard 
      name={"John Doe"}
      role={"Manager"}
      bio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      image={profileImage}/>
    </div>
  );
}

export default App;
