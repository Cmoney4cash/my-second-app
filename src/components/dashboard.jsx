import React from 'react';
import DashboardCard from './dashboardCard';

function Dashboard(){
    const styles = {
        dashboard: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
        }
    }


    return(
        <main style={styles.dashboard}>
            <DashboardCard title={"Total Users"} value="$1,200"/>
            <DashboardCard title={"Revenue"} value="$50,200"/>
            <DashboardCard title={"New Orders"} value="$450"/>
            <DashboardCard title={"Active Users"} value="$300"/>
        </main>
    )
}

export default Dashboard;