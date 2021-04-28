import { CSSProperties } from "react";

interface Props {
    label: number;
    completed: number;
}
const ProgressBar: React.FC<Props> = props => {
    const { label, completed } = props;

    const containerStyles: CSSProperties = {
        width: '90%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: '0 auto'
    }

    const fillerStyles: CSSProperties = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#00008b',
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
    }

    const labelStyles: CSSProperties = {
        padding: '50%',
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${label}`}</span>
            </div>
        </div>
    );
}

export default ProgressBar;