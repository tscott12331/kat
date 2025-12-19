import { useState } from 'react';
import Tab, { ITab } from './tab';
import TabList from './tab-list';
import SidebarTopControls from './sidebar-top-controls';

export default function Sidebar() {
    const [tabs, setTabs] = useState<ITab[]>([]);

    const handleTabEdited = (channelIndex: number, newChannel: string) => {
        setTabs((cur) => {
            if(newChannel === "") {
                // invalid channel name
                cur = [...cur.splice(0, channelIndex), ...cur.splice(channelIndex + 1)];
            } else {
                cur[channelIndex].channelName = newChannel;
            }
            return cur;
        })
    }

    const handleAddTab = () => {
        setTabs((cur) => {
            const newTab: ITab = {
                channelName: "",
                isSelected: false,
            }
            return [...cur, newTab];
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
                ></TabList>
            </div>
        </div>
    );
}
