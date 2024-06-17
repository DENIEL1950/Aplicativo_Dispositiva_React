import React from 'react';
import Navbar from './Navbar.tsx/Navbar';
import styled from 'styled-components'
import { Search, shoppingCartOutlined } from '@mui/icons-material'

const Home: React.FC = ()=>{
    return(
        <div>
            <Navbar />
            <div style={styles.container}>
                <h1>Hola mundo</h1>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
};

export default Home;
