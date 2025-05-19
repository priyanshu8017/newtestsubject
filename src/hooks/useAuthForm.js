import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const useAuthForm = (initialIsLogin = true) => {
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const toggleView = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({ email: "", password: "", name: "", rememberMe: false });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!isLogin && !formData.name) newErrors.name = "Name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTimeout(() => {
        toast({
          title: isLogin ? "Login Successful" : "Registration Successful",
          description: isLogin
            ? "Welcome back! You've been logged in successfully."
            : "Your account has been created successfully.",
          duration: 5000,
        });
        const userData = isLogin ? { email: formData.email } : { email: formData.email, name: formData.name };
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", "true");
        console.log("Form submitted:", formData);
      }, 1500);
    }
  };
  
  const handleRememberMeChange = (checked) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }));
  };

  return {
    isLogin,
    showPassword,
    formData,
    errors,
    toggleView,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    handleRememberMeChange,
    toast
  };
};