import React from 'react';
import { CustomButtonProps } from './Button.d';



const CustomButton: React.FC<CustomButtonProps> = ({ children, type= 'button', classAtt,...rest }) => {
    return <button type={type} className={classAtt} {...rest}>{children}</button>;
};

export default CustomButton;