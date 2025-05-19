import React from "react";
import { motion } from "framer-motion";
import LoginForm from "@/components/LoginForm";
import { ShieldCheck, Zap, DollarSign } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen login-gradient flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 dark:bg-black">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-1/4 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-1/3 right-1/4"></div>
        <div className="absolute w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-1/4 left-1/3"></div>
      </div>
      
      <div className="z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md text-white dark:text-orange-100"
        >
          <motion.div 
            className="floating"
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Platform</h1>
          </motion.div>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Secure, fast, and reliable. Join thousands of users who trust our service.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center">
              <div className="bg-white/20 dark:bg-orange-500/30 p-2 rounded-full mr-3">
                <ShieldCheck className="h-5 w-5 text-white dark:text-orange-200" />
              </div>
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 dark:bg-orange-500/30 p-2 rounded-full mr-3">
                <Zap className="h-5 w-5 text-white dark:text-orange-200" />
              </div>
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 dark:bg-orange-500/30 p-2 rounded-full mr-3">
                 <DollarSign className="h-5 w-5 text-white dark:text-orange-200" />
              </div>
              <span>Cost Effective</span>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm opacity-80">
              "This platform has transformed how we manage our business. The security features are top-notch and the interface is intuitive."
            </p>
            <div className="flex items-center mt-4">
              <div className="w-10 h-10 rounded-full bg-white/30 dark:bg-orange-500/40 flex items-center justify-center mr-3">
                <span className="font-bold text-white dark:text-orange-100">JD</span>
              </div>
              <div>
                <p className="font-medium">Jane Doe</p>
                <p className="text-sm opacity-80">CEO, TechCorp</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <LoginForm />
      </div>
      
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="z-10 mt-12 text-center text-white/80 dark:text-orange-200/80 text-sm"
      >
        <p>© 2025 Your Company. All rights reserved.</p>
        <p className="mt-1">
          <span className="mx-2">Privacy Policy</span>
          <span className="mx-2">Terms of Service</span>
          <span className="mx-2">Contact Us</span>
        </p>
      </motion.footer>
    </div>
  );
};

export default Login;