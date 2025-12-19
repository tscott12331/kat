import { useState } from 'react';
import { ITab } from './tab';
import TabList from './tab-list';
import SidebarTopControls from './sidebar-top-controls';

export default function Sidebar() {
    const [tabs, setTabs] = useState<ITab[]>([]);


    const handleTabEdited = (tabIndex: number, newChannel: string) => {
        setTabs((cur) => {
            if(newChannel === "") {
                // invalid channel name
                return [...cur.slice(0, tabIndex), ...cur.slice(tabIndex + 1)];
            } 
            const newTabs = [...cur];

            // look for tab that already references this channel
            const existingIndex = newTabs.findIndex((t) => t.channelName === newChannel);
            if(existingIndex !== -1 && existingIndex != tabIndex) {
                // remove tab
                return [...cur.slice(0, tabIndex), ...cur.slice(tabIndex + 1)];
            } else {
                // tab has not been added, add it
                
                // copy values of prev tab to avoid mutation
                const newTabObj = Object.assign({}, newTabs[tabIndex]);
                newTabObj.channelName = newChannel;
                newTabs[tabIndex] = newTabObj;
                return newTabs;
            }
        })
    }

    const handleAddTab = () => {
        setTabs((cur) => {
            const newTab: ITab = {
                channelName: "",
                isSelected: false,
            };
            return [...cur, newTab];
        })
    }

    const handleTabRemoved = (tabIndex: number) => {
        setTabs((cur) => {
            return [...cur.slice(0, tabIndex), ...cur.slice(tabIndex + 1)];
        })
    }
    
    return (
        <div className="absolute flex items-center inset-0 w-2.5 hover:w-40 transition-[width] hover:*:w-full hover:*:p-1.5 hover:*:border-y-0 hover:*:h-full hover:**:visible">
            <div 
                className={`flex flex-col gap-1.5 bg-tertiary w-1.5 h-1/2 rounded-r-sm border-y-2 border-r-2 border-accent-4 transition-[width,height] *:invisible`}
            >
                <SidebarTopControls 
                    onAddTab={handleAddTab}
                />
                <TabList 
                    tabs={tabs}
                    onTabEdited={handleTabEdited}
                    onTabRemoved={handleTabRemoved}
                ></TabList>
            </div>
        </div>
    );
}
