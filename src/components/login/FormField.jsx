import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const FormField = ({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  icon: IconComponent,
  showPasswordToggle = false,
  showPassword,
  onTogglePassword,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        {IconComponent && (
          <IconComponent className="mr-2 h-4 w-4 text-muted-foreground" />
        )}
        <Label htmlFor={id}>{label}</Label>
      </div>
      <div className="relative">
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${error ? "border-destructive" : ""} ${showPasswordToggle ? "pr-10" : ""}`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
};

export default FormField;