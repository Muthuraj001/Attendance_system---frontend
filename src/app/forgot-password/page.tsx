"use client";

import { useState } from "react";

import axios from "axios";

import { motion } from "framer-motion";

import {
  Mail,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  const [email, setEmail] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/password/forgot-password",
        {
          email,
        }
      );

      setMessage(
        res.data.message
      );
    } catch (error: any) {
      setMessage(
        error.response.data.message
      );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-6">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="w-full max-w-md bg-white/10 border border-white/10 backdrop-blur-2xl rounded-3xl p-10"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-blue-500/20 p-5 rounded-3xl">
            <ShieldCheck className="w-14 h-14 text-blue-400" />
          </div>
        </div>

        <h1 className="text-4xl font-black text-white text-center">
          Forgot Password
        </h1>

        <p className="text-slate-400 text-center mt-3">
          Enter your email to
          receive reset link
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />

            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="pl-12 h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-slate-400"
            />
          </div>

          <Button className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700">
            Send Reset Link
          </Button>
        </form>

        {message && (
          <p className="mt-5 text-center text-green-400">
            {message}
          </p>
        )}
      </motion.div>
    </main>
  );
}