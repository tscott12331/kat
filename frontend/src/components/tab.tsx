import { useState } from "react";

export interface ITab {
    channelName: string;
    isSelected: boolean;
}

interface ITabProps {
    tab: ITab;
    onTabEdited?: (newChannel: string) => void;
    onTabRemoved?: () => void;
}

export default function Tab({
    tab,
    onTabEdited,
    onTabRemoved,
}: ITabProps) {
    const [isEditing, setIsEditing] = useState<boolean>(tab.channelName === "");


    const handleTabRemoved = () => {
        onTabRemoved?.();
    }

    const handleEditFinished = (newChannel: string) => {
        setIsEditing(false);
        onTabEdited?.(newChannel);
    }

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        handleEditFinished(e.currentTarget.value);
    }

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleEditFinished(e.currentTarget.value);
        }
    }

    return (
        <div 
            className={`${tab.isSelected ? 'bg-highlight-2/10 ring ring-accent-1 ring-inset' : 'bg-primary/30'} hover:bg-highlight-2/20 flex gap-0.5 p-2.5 rounded-xl`}
            onAuxClick={handleTabRemoved}
        >
        <input 
            onBlur={handleInputBlur}
            className={`${!isEditing ? 'invisible w-0 -mr-0.5' : ''} max-w-4/5`}
            onKeyDown={handleInputKeyDown}
            defaultValue={tab.channelName}
            disabled={!isEditing}
            ref={(input) => input && input.focus()}
        />
        <p className={`${isEditing ? 'hidden!' : ''} max-w-4/5 text-ellipsis overflow-hidden whitespace-nowrap`} >{tab.channelName}</p>
        <button
            className="ml-auto"
            onMouseDownCapture={() => isEditing && handleTabRemoved()}
            onClickCapture={() => setIsEditing(true)}
        >
        {isEditing ? 'x' : 'e'}
        </button>
        </div>
    )
}
