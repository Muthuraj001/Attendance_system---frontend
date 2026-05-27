"use client";

import { motion } from "framer-motion";

import {Card,CardContent,} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import {
  GraduationCap,
  Users,
  Lock,
  Mail,
} from "lucide-react";

import Link from "next/link";

import { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] =
    useState<"student" | "staff">(
      "student"
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-6 overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="w-full max-w-6xl"
      >
        <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-white/10 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="relative hidden lg:flex flex-col justify-center p-14 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute top-10 right-10 opacity-20"
              >
                <GraduationCap size={180} />
              </motion.div>

              <h1 className="text-5xl font-black leading-tight">
                Attendance
                <br />
                Management
                <br />
                System
              </h1>

              <p className="mt-6 text-lg text-blue-100 max-w-md">
                Smart student and staff
                attendance platform with
                secure authentication,
                mobile verification, and
                real-time attendance
                tracking.
              </p>

              <div className="mt-10 flex gap-4">
                <div className="bg-white/20 px-5 py-3 rounded-2xl backdrop-blur-md">
                  <p className="text-sm">
                    Secure Login
                  </p>
                </div>

                <div className="bg-white/20 px-5 py-3 rounded-2xl backdrop-blur-md">
                  <p className="text-sm">
                    Mobile OTP
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <CardContent className="p-8 lg:p-14 bg-white">
              <div className="flex justify-center mb-10">
                <div className="bg-slate-100 p-1 rounded-2xl flex gap-2">
                  <button onClick={() => setActiveTab(
                        "student"
                      )
                    }
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      activeTab ===
                      "student"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-600"
                    }`}
                  >
                    Student
                  </button>

                  <button
                    onClick={() =>
                      setActiveTab(
                        "staff"
                      )
                    }
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      activeTab ===
                      "staff"
                        ? "bg-green-600 text-white shadow-lg"
                        : "text-slate-600"
                    }`}
                  >
                    Staff
                  </button>
                </div>
              </div>

              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-4 rounded-2xl ${
                        activeTab ===
                        "student"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {activeTab ===
                      "student" ? (
                        <GraduationCap size={40} />
                      ) : (
                        <Users size={40} />
                      )}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900">
                    {activeTab ===
                    "student"
                      ? "Student Login"
                      : "Staff Login"}
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Login to continue
                    your dashboard
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="space-y-2">
                    <Label>
                      Email Address
                    </Label>

                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />

                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-12 h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Password</Label>

                    <div className="relative">
                      <Lock className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />

                      <Input
                        type="password"
                        placeholder="Enter password"
                        className="pl-12 h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-slate-600">
                      <input type="checkbox" />
                      Remember me
                    </label>

                    <Link href="/forgot-password">
                    <button type="button"className="text-blue-400 hover:underline">
                     Forgot Password?
                    </button>
                    </Link>
                  </div>

                  <Button
                    className={`w-full h-12 rounded-xl text-lg font-semibold ${
                      activeTab ===
                      "student"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    Login
                  </Button>

                  <div className="text-center pt-4">
                    <p className="text-slate-600">
                      Don&apos;t have an
                      account?
                    </p>

                    <Link
                      href={`/register?role=${activeTab}`}
                    >
                      <Button
                        variant="outline"
                        className="mt-3 rounded-xl"
                      >
                        Create Account
                      </Button>
                    </Link>
                  </div>
                </form>
              </motion.div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </main>
  );
}