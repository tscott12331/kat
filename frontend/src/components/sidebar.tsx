import { useState } from 'react';
import { ITab } from './tab';
import TabList from './tab-list';
import SidebarTopControls from './sidebar-top-controls';

export default function Sidebar() {
    const [tabs, setTabs] = useState<ITab[]>([
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: true,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
        {
            channelName: "xqc",
            isSelected: false,
        },
        {
            channelName: "trainwreckstv",
            isSelected: false,
        },
    ]);

    
    return (
        <div 
            className={`absolute flex flex-col gap-1.5 bg-tertiary inset-0 w-2.5 hover:w-40 p-1.5 opacity-0 hover:opacity-100 border-r-2 border-r-accent-4`}
        >
            <SidebarTopControls />
            <TabList tabs={tabs}></TabList>
        </div>
    );
}
