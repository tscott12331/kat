interface ISidebarTopControlsProps {
    onAddTab?: () => void;
}

export default function SidebarTopControls({
    onAddTab,
}: ISidebarTopControlsProps) {
    return (
        <div className="flex">
            <div className="w-8 h-8 rounded-full border"></div>
            <div 
                className="flex items-center justify-center w-8 h-8 ml-auto text-char-3 text-4xl hover:brightness-70 hover:cursor-pointer"
                onClick={() => onAddTab?.()}
            >+</div>
        </div>
    );
}
