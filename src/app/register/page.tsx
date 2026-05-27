"use client";

import { motion } from "framer-motion";

import {
  GraduationCap,
  ShieldCheck,
  Smartphone,
  Mail,
  Lock,
  User,
  Hash,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const params = useSearchParams();

  const role =
    params.get("role") || "student";

  const isStudent =
    role === "student";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden flex items-center justify-center p-6">
      {/* BACKGROUND BLUR */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20 ${
            isStudent
              ? "bg-blue-500"
              : "bg-green-500"
          }`}
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
        />
      </div>

      {/* CARD */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl border border-white/10 backdrop-blur-2xl bg-white/10">
          {/* LEFT SIDE */}
          <div
            className={`hidden lg:flex flex-col justify-center p-14 text-white relative overflow-hidden ${
              isStudent
                ? "bg-blue-600/20"
                : "bg-green-600/20"
            }`}
          >
            <motion.div
              animate={{
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute top-10 right-10 opacity-10"
            >
              <GraduationCap size={220} />
            </motion.div>

            <div className="relative z-10">
              <div
                className={`inline-flex p-5 rounded-3xl mb-8 ${
                  isStudent
                    ? "bg-blue-500/20"
                    : "bg-green-500/20"
                }`}
              >
                <GraduationCap className="w-16 h-16" />
              </div>

              <h1 className="text-5xl font-black leading-tight">
                {isStudent
                  ? "Student"
                  : "Staff"}
                <br />
                Registration
              </h1>

              <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                Create your secure
                account with mobile OTP
                verification and access
                the attendance
                management system.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl">
                  <ShieldCheck className="w-7 h-7 mb-3 text-green-400" />

                  <p className="font-semibold">
                    Secure Access
                  </p>
                </div>

                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl">
                  <Smartphone className="w-7 h-7 mb-3 text-blue-400" />

                  <p className="font-semibold">
                    OTP Verification
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-slate-950/40 backdrop-blur-xl p-8 lg:p-14">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-white">
                Create Account
              </h2>

              <p className="text-slate-400 mt-3">
                Fill your details below
              </p>
            </div>

            <form className="space-y-5">
              {/* NAME */}
              <div>
                <Label className="text-slate-200 mb-2 block">
                  Full Name
                </Label>

                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />

                  <Input
                    type="text"
                    placeholder="Enter full name"
                    className="pl-12 h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* ROLL NO */}
              <div>
                <Label className="text-slate-200 mb-2 block">
                  Roll Number
                </Label>

                <div className="relative">
                  <Hash className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />

                  <Input
                    type="text"
                    placeholder="Enter roll number"
                    className="pl-12 h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* MOBILE */}
              <div>
                <Label className="text-slate-200 mb-2 block">
                  Mobile Number
                </Label>

                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Smartphone className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />

                    <Input
                      type="tel"
                      placeholder="+91 9876543210"
                      className="pl-12 h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <Button
                    type="button"
                    className={`h-12 px-5 rounded-xl ${
                      isStudent
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    Send OTP
                  </Button>
                </div>
              </div>

              {/* OTP */}
              <div>
                <Label className="text-slate-200 mb-2 block">
                  OTP Verification
                </Label>

                <Input
                  type="text"
                  placeholder="Enter OTP"
                  className="h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-slate-400"
                />
              </div>

              {/* EMAIL */}
              <div>
                <Label className="text-slate-200 mb-2 block">
                  Email Address
                </Label>

                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />

                  <Input
                    type="email"
                    placeholder="Enter email"
                    className="pl-12 h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <Label className="text-slate-200 mb-2 block">
                  Password
                </Label>

                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />

                  <Input
                    type="password"
                    placeholder="Create password"
                    className="pl-12 h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* BUTTON */}
              <Button
                className={`w-full h-12 rounded-xl text-lg font-semibold mt-5 ${
                  isStudent
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                Register Account
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </main>
  );
}