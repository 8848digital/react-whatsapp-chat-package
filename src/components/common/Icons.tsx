import React from "react";
import {
  User as PhUser,
  Paperclip as PhPaperclip,
  PaperPlaneTilt as PhPaperPlaneTilt,
  X as PhX,
  Eye as PhEye,
  MagnifyingGlass as PhMagnifyingGlass,
  Checks as PhChecks,
  Check as PhCheck,
  ArrowSquareOut as PhArrowSquareOut,
  FileText as PhFileText,
  Clock as PhClock,
  Warning as PhWarning,
  WhatsappLogo as PhWhatsappLogo,
} from "@phosphor-icons/react";

export interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}

export const User = (props: IconProps) => <PhUser {...props} />;
export const Paperclip = (props: IconProps) => <PhPaperclip {...props} />;
export const PaperPlaneTilt = (props: IconProps) => <PhPaperPlaneTilt {...props} />;
export const X = (props: IconProps) => <PhX {...props} />;
export const Eye = (props: IconProps) => <PhEye {...props} />;
export const MagnifyingGlass = (props: IconProps) => <PhMagnifyingGlass {...props} />;
export const Checks = (props: IconProps) => <PhChecks {...props} />;
export const Check = (props: IconProps) => <PhCheck {...props} />;
export const ArrowSquareOut = (props: IconProps) => <PhArrowSquareOut {...props} />;
export const FileText = (props: IconProps) => <PhFileText {...props} />;
export const Clock = (props: IconProps) => <PhClock {...props} />;
export const Warning = (props: IconProps) => <PhWarning {...props} />;
export const WhatsAppLogo = (props: IconProps) => <PhWhatsappLogo {...props} />;
