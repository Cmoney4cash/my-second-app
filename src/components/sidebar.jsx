import React from 'react';

function Sidebar(){
    const styles = {
        sidebar: {
            width: '250px',
            backgroundColor: '#333',
            color: '#fff',
            padding: '20px',
            height: '100vh',
            boxSizing: 'border-box',
        },
        menuItem: {
            display: 'block',
            color: '#fff',
            textDecoration: 'none',
            padding: '10px',
            margin: '10px 0',
        }
    }
    return(
        <aside style={styles.sidebar}>
            <nav>
                <a style={styles.menuItem} href="#">Overview</a>
                <a style={styles.menuItem} href="#">Analytics</a>
                <a style={styles.menuItem} href="#">Reports</a>
                <a style={styles.menuItem} href="#">Settings</a>
            </nav>
        </aside>
    ) 
}

export default Sidebar;