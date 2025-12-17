interface IButtonProps extends React.ComponentProps<'button'> {
    variant: 'primary' | 'secondary' | 'tertiary';
}

export default function Button({
    variant = 'primary',
    children,
    ...rest
}: IButtonProps) {

    return (
        <button {...rest}>{children}</button>
    )
}
