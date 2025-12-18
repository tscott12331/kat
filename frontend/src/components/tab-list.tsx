import Tab, { ITab } from "./tab";

interface ITabListProps {
    tabs: ITab[];
}

export default function TabList({
    tabs,
}: ITabListProps) {
    return (
        <div className="grow flex flex-col gap-1 py-1.5 border-y border-y-accent-4 overflow-auto">
            {tabs.map(t =>
                <Tab tab={t} />
            )}
        </div>
    );
}
