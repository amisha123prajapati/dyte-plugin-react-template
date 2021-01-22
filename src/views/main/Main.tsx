import React, { useEffect, useRef } from 'react';
import { DytePlugin, Events } from 'dyte-plugin-sdk';

const PLUGIN_ID = process.env.PLUGIN_ID;

export default function Main() {
    const plugin = useRef<DytePlugin>(new DytePlugin(PLUGIN_ID)).current;

    useEffect(() => {
        plugin.on(Events.initialized, async () => {
            console.log('Plugin initialized');
            console.log('JoinedPeers:', await plugin.getJoinedPeers())

            console.log('Sending chat message');
            await plugin.sendChatMessage("Hello, this message is from a plugin!");
        });
        plugin.on(Events.peerJoined, (peer) => {
            console.log('Peer joined: ', peer);
        });
        plugin.on(Events.peerClosed, (peer) => {
            console.log('Peer closed: ', peer);
        });
        plugin.on(Events.chatMessage, (message) => {
            console.log('Chat message received', message);
        })
    }, [plugin]);

    return (
        <div>

        </div>
    );
}
