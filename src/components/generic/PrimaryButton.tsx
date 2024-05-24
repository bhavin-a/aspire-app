import { styled } from "styled-components";
import { colorTokens } from "../../designTokens";
import { ButtonVariant } from "../../constants/common";

const StyledButton = styled.button<{ variant: ButtonVariant }>`
    height: 35px;
    background: ${props => colorTokens.light.button[props.variant]};
    border-radius: 4px;
    color: white;
    padding: 8px 16px;
    border: none;
    font-size: 13px;
    font-weight: 600;
    align-self: end;
    cursor: pointer;
    min-width: 80px;
`;

interface PrimaryButtonProps {
    onClick: React.MouseEventHandler;
    text: string;
    icon?: React.ReactNode;
    variant: ButtonVariant;
}

const PrimaryButton = ({
    onClick,
    text,
    icon,
    variant
}: PrimaryButtonProps) => {
    return (
        <StyledButton onClick={onClick} variant={variant}>
            {text}
        </StyledButton>
    );
};

export default PrimaryButton;
