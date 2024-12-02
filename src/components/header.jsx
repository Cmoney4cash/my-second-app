import React from 'react';   

function Header(){
    const styles = {
        header: {
            backgroundColor: "Blue",
            color: '#fff',
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingLeft: '25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0',
        },
        search: {
            padding: '5px 10px',
            borderRadius: '5px',
            border: 'none',
        }
    }
    return(
        <header style={styles.header}>
         <h1 style={styles.title}>Dashboard</h1>
         <input style={styles.search} type="text" placeholder="Search" />
        </header>
    )
}

export default Header;