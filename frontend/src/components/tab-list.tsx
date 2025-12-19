import Tab, { ITab } from "./tab";

interface ITabListProps {
    tabs: ITab[];
    onTabEdited?: (channelIndex: number, newChannel: string) => void;
}

export default function TabList({
    tabs,
    onTabEdited,
}: ITabListProps) {
    return (
        <div className="grow flex flex-col gap-1 py-1.5 border-y border-y-accent-4 overflow-auto">
            {tabs.map((t, i) =>
                <Tab 
                tab={t} 
                key={i} 
                onTabEdited={(newChannel) => onTabEdited?.(i, newChannel)}
                />
            )}
        </div>
    );
}
