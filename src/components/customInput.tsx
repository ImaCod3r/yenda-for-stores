import type { InputHTMLAttributes } from "react";
import type { IconType } from "react-icons";
import { colors } from "../constants/colors";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: IconType;
}

export default function CustomInput({icon: Icon, ...props} : CustomInputProps) {
    return (
        <div className="custom-input">
            {Icon && <Icon size={25}  color={colors.primary} />}
            <input {...props} />
        </div>
    )
}