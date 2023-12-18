import React from 'react';
import { variantType, variantTypeAs } from '../../../types';
import { typographyVariant } from '../../../constants/thems';

interface TypographyProps {
  variant: variantType;
  className?: string;
  children: React.ReactNode;
  as?: variantTypeAs;
}

const Typography: React.FC<TypographyProps> = ({ variant, className = '', children, as: Element = 'p' }) => {
  const classes = `${typographyVariant[variant]} ${className}`;

  return <Element className={`${classes} font-primary`}>{children}</Element>;
};

export default Typography;
