import React from 'react';
import profileImage from '../assets/favicon.png';




function ProfileCard({name, role, bio, image}) {
    name = name || 'John Doe';
    role = role || 'Manager';
    bio = bio || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    image = `${profileImage}`;





    const styles = {
        profileCard: {
            textAlign: 'center',
            width: '300px',
            borderRadius: '10px',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            transition: 'transform 0.2s ease-in-out',
            margin: '50px auto',
        },
        image: {
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '4px solid #4ca54',
            marginBottom: '20px',
        },
        name: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: 'blue',  
        },
        role: {
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '10px',
            fontWeight: 'bold',
        },
        bio: {
            fontSize: '1rem',
            color: '#333',
            marginBottom: '10px',
        },
        cardHover: {
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
        }

    }




    return (
        
            <div style={styles.profileCard}>
            <img  style={styles.image}       src={image} alt={'${name}'} />
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.role}>{role}</p>
            <p style={styles.bio}>{bio}</p>

        </div>
    );
}

export default ProfileCard;