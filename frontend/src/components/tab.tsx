import { useEffect, useRef, useState } from "react";

export interface ITab {
    channelName: string;
    isSelected: boolean;
}

interface ITabProps {
    tab: ITab;
    onTabEdited?: (newChannel: string) => void;
}

export default function Tab({
    tab,
    onTabEdited,
}: ITabProps) {
    const [isEditing, setIsEditing] = useState<boolean>(false);


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
        >
        <input 
            onBlur={handleInputBlur}
            className={`${!isEditing ? 'invisible w-0 -mr-0.5' : ''} max-w-full`}
            onKeyDown={handleInputKeyDown}
            defaultValue={tab.channelName}
            ref={(input) => input && input.focus()}
        />
        <p className={`${isEditing ? 'hidden!' : ''} max-w-4/5 text-ellipsis overflow-hidden whitespace-nowrap`} >{tab.channelName}</p>
        <button
            className="ml-auto"
            onClick={() => setIsEditing((cur) => !cur)}
        >
        {!isEditing && 'e'}
        </button>
        </div>
    )
}
