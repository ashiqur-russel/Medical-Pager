import React from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie/es6';


import { ChannelContainer,ChannelListContainer,ChannelSearch } from './components';

import './App.css';


const apikey='5zff7q8dd3p6';
const client = StreamChat.getInstance(apikey);


const App = () => {
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="light">
                <ChannelListContainer 
                
                />

                <ChannelContainer 

                />
            </Chat>
        </div>
    )
}

export default App
