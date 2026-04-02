import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent, type AnalyticsEvent } from '../../lib/analytics';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost' | 'telegram';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  analyticsEvent?: AnalyticsEvent;
  analyticsData?: Record<string, unknown>;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  disabled = false,
  analyticsEvent,
  analyticsData,
  ariaLabel,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (analyticsEvent) {
      trackEvent(analyticsEvent, analyticsData);
    }
    if (onClick) {
      onClick();
    }
  };

  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#3157D5] focus-visible:outline-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[34px]',
    md: 'text-sm px-4.5 py-2.5 gap-2 min-h-[42px]',
    lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[50px] font-semibold',
  };

  const variantStyles = {
