export interface ITab {
    channelName: string;
    isSelected: boolean;
}

interface ITabProps {
    tab: ITab;
}

export default function Tab({
    tab
}: ITabProps) {
    return (
        <p className={`${tab.isSelected ? 'bg-highlight-2/10 ring ring-accent-1 ring-inset' : 'bg-primary/30'} hover:bg-highlight-2/20 p-2.5 rounded-xl`}>{tab.channelName}</p>
    )
}
