import React from 'react';

function DashboardCard({title, value}){
    const styles = {
        card: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0px',
        },
        value: {
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '10px 0 0',
        }
    }




    return(
        <div style={styles.card}>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.value}>{value}</p>
            </div>
    )
}

export default DashboardCard;