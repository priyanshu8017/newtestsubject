import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, User } from "lucide-react";
import FormField from "@/components/login/FormField";
import SocialLoginButtons from "@/components/login/SocialLoginButtons";
import { useAuthForm } from "@/hooks/useAuthForm";

const LoginForm = () => {
  const {
    isLogin,
    showPassword,
    formData,
    errors,
    toggleView,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    handleRememberMeChange,
    toast,
  } = useAuthForm(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <Card className="glass-card shadow-xl form-shine">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-foreground">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            {isLogin
              ? "Enter your credentials to access your account"
              : "Fill in the information to create your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <FormField
                id="name"
                name="name"
                label="Full Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                icon={User}
              />
            )}
            <FormField
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              icon={Mail}
            />
            <FormField
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              icon={Lock}
              showPasswordToggle={true}
              showPassword={showPassword}
              onTogglePassword={togglePasswordVisibility}
            />
            {isLogin && (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={handleRememberMeChange}
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                >
                  Remember me
                </label>
                <div className="flex-1 text-right">
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      toast({
                        title: "Password Reset",
                        description: "If your email is registered, you'll receive a reset link shortly.",
                      });
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            )}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full">
                {isLogin ? "Sign In" : "Sign Up"}
              </Button>
            </motion.div>
          </form>
          <SocialLoginButtons />
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-center text-sm text-muted-foreground mt-2">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <a
              href="#"
              className="text-primary underline-offset-4 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                toggleView();
              }}
            >
              {isLogin ? "Sign up" : "Sign in"}
            </a>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LoginForm;