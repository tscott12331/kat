import Tab, { ITab } from "./tab";

interface ITabListProps {
    tabs: ITab[];
    onTabEdited?: (tabIndex: number, newChannel: string) => void;
    onTabRemoved?: (tabIndex: number) => void;
    onTabSelected?: (tabIndex: number) => void;
}

export default function TabList({
    tabs,
    onTabEdited,
    onTabRemoved,
    onTabSelected,
}: ITabListProps) {
    return (
        <div className="grow flex flex-col gap-1 py-1.5 border-y border-y-accent-4 overflow-auto">
            {tabs.map((t, i) =>
                <Tab 
                tab={t} 
                key={t.channelName + i} 
                onTabEdited={(newChannel) => onTabEdited?.(i, newChannel)}
                onTabRemoved={() => onTabRemoved?.(i)}
                onTabSelected={() => onTabSelected?.(i)}
                />
            )}
        </div>
    );
}
