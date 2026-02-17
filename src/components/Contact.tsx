"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  Globe,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";
import { BorderWrapper } from "./BorderWrapper";

const Contact = () => {
  const [activeTab, setActiveTab] = useState<"book" | "message">("book");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // Booking State
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<
    "calendar" | "details" | "confirmation"
  >("calendar");
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    notes: "",
  });

  // Messaging State
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [messages, setMessages] = useState([
    { type: "system", text: "Contact System Initialized" },
    { type: "system", text: "Ready for your message..." },
  ]);

  // Config
  const AVAILABLE_DATES = [5, 7, 10, 12, 15, 18, 20, 22, 23, 24, 25, 28];
  const TIME_SLOTS = [
    "09:00 AM",
    "12:00 AM",
    "04:30 PM",
    "08:00 PM",
    "10:30 PM",
  ];

  const addMessage = (type: string, text: string) => {
    setMessages((prev) => [...prev.slice(-8), { type, text }]);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    addMessage("user", "Sending message...");

    try {
      const response = await fetch("https://formspree.io/f/xzddzpdp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.user_name,
          email: formData.user_email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        addMessage(
          "success",
          "✓ Message sent successfully. We'll be in touch soon!",
        );
        setFormData({ user_name: "", user_email: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send");
      }
    } catch (error: any) {
      setStatus("error");
      addMessage(
        "error",
        `⨯ Failed to send: ${error.message || "Network Error"}`,
      );
    }
  };

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setBookingStep("confirmation");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden  font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00ff00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00ffff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-none ">
            <span className="terminal-glow"> Let's build something </span>
            <span className="text-[#00ff00]">extraordinary</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to transform your vision into a digital masterpiece? Choose a
            way to connect below and let's start the journey.
          </p>
        </motion.div>

        <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)]">
          {/* Modern Tab Navigation */}
          <div className="flex p-3 bg-white/5 m-6 rounded-2xl gap-2 font-sans overflow-hidden">
            <button
              onClick={() => setActiveTab("book")}
              className={`flex-1 py-4 px-6 text-sm font-bold rounded-xl transition-all duration-500 transform active:scale-95 ${
                activeTab === "book"
                  ? "bg-[#00ff00] text-black shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <CalendarIcon size={18} />
                <span className="hidden sm:inline">Schedule a Session</span>
                <span className="sm:hidden">Book</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("message")}
              className={`flex-1 py-4 px-6 text-sm font-bold rounded-xl transition-all duration-500 transform active:scale-95 ${
                activeTab === "message"
                  ? "bg-[#00ff00] text-black shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <MessageSquare size={18} />
                <span className="hidden sm:inline">Direct Transmission</span>
                <span className="sm:hidden">Message</span>
              </div>
            </button>
          </div>

          <div className="px-6 pb-10 md:px-10 md:pb-12">
            <AnimatePresence mode="wait">
              {activeTab === "book" ? (
                <motion.div
                  key="book"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full font-sans"
                >
                  {bookingStep === "calendar" && (
                    <div className="grid lg:grid-cols-2 gap-16">
                      {/* Brand & Info Column */}
                      <div className="space-y-10">
                        <div className="flex items-center gap-5">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-[#00ff00] to-emerald-600 flex items-center justify-center font-black text-black text-2xl shadow-xl shadow-emerald-500/20">
                              JI
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#00ff00] border-4 border-[#0a0a0a] rounded-full shadow-lg pulse-green"></div>
                          </div>
                          <div>
                            <h3 className="text-white text-2xl font-black tracking-tight">
                              Jahirul Islam
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
                              <p className="text-[#00ff00] font-bold text-xs uppercase tracking-widest">
                                Online & Ready
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <span className="px-3 py-1 bg-[#00ff00]/10 text-[#00ff00] rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-[#00ff00]/20">
                            Best Choice for Startups
                          </span>
                          <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
                            Free Discovery Call
                          </h2>
                          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                            An intensive 30-minute session to analyze your
                            needs, discuss strategies, and visualize the future
                            of your project.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-5 bg-white/[0.03] rounded-2xl border border-white/5 flex items-center gap-4 group hover:bg-white/[0.06] transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00]">
                              <Clock size={20} />
                            </div>
                            <div>
                              <p className="text-[10px] text-gray-500 font-black uppercase tracking-wider mb-0.5">
                                Duration
                              </p>
                              <p className="text-white font-bold">30 Minutes</p>
                            </div>
                          </div>
                          <div className="p-5 bg-white/[0.03] rounded-2xl border border-white/5 flex items-center gap-4 group hover:bg-white/[0.06] transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00]">
                              <Video size={20} />
                            </div>
                            <div>
                              <p className="text-[10px] text-gray-500 font-black uppercase tracking-wider mb-0.5">
                                Platform
                              </p>
                              <p className="text-white font-bold">
                                Google Meet
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 text-sm text-gray-500 border-t border-white/5 pt-8">
                          <div className="flex items-center gap-3">
                            <CheckCircle2
                              size={16}
                              className="text-[#00ff00]"
                            />
                            <span>100% Guaranteed response</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Globe size={16} className="text-[#00ff00]" />
                            <span>Adjusted to your timezone (Asia/Dhaka)</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Calendar Selection (The "calend box") */}
                      <div className="relative">
                        <div className="bg-[#111]/25 rounded-[2.5rem] p-8 border border-white/10 shadow-3xl">
                          <div className="flex justify-between items-center mb-10">
                            <h4 className="text-white font-black text-xl tracking-tight">
                              January 2026
                            </h4>
                            <div className="flex gap-3">
                              <button className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5">
                                <ChevronLeft
                                  size={20}
                                  className="text-gray-600"
                                />
                              </button>
                              <button className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10">
                                <ChevronRight
                                  size={20}
                                  className="text-white"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-7 gap-y-4 gap-x-3 text-center mb-8">
                            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                              <div
                                key={`${d}-${i}`}
                                className="text-[10px] text-gray-600 font-black tracking-widest uppercase"
                              >
                                {d}
                              </div>
                            ))}
                            {[...Array(31)].map((_, i) => {
                              const day = i + 1;
                              const isAvailable = AVAILABLE_DATES.includes(day);
                              const isSelected = selectedDate === day;

                              return (
                                <button
                                  key={i}
                                  disabled={!isAvailable}
                                  onClick={() => {
                                    setSelectedDate(day);
                                    setSelectedTime(null);
                                  }}
                                  className={`aspect-square flex items-center justify-center rounded-2xl text-sm font-black transition-all transform active:scale-90 ${
                                    isSelected
                                      ? "bg-[#00ff00] text-black shadow-[0_0_25px_rgba(0,255,0,0.4)] scale-110 z-10 rotate-3"
                                      : isAvailable
                                        ? "text-white bg-white/5 hover:bg-[#00ff00]/10 hover:border-[#00ff00]/50 border border-white/5"
                                        : "text-gray-800 opacity-20"
                                  }`}
                                >
                                  {day}
                                </button>
                              );
                            })}
                          </div>

                          <AnimatePresence>
                            {selectedDate && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8 pt-8 border-t border-white/5"
                              >
                                <div className="space-y-4">
                                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
                                    Available Slots
                                  </p>
                                  <div className="grid grid-cols-2 gap-3">
                                    {TIME_SLOTS.map((time) => (
                                      <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-4 px-3 rounded-2xl text-[10px] font-black transition-all border tracking-wider ${
                                          selectedTime === time
                                            ? "bg-[#00ff00] border-[#00ff00] text-black shadow-[0_0_20px_rgba(0,255,0,0.25)]"
                                            : "bg-white/5 border-white/5 text-gray-400 hover:border-[#00ff00]/50"
                                        }`}
                                      >
                                        {time}
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                <button
                                  disabled={!selectedTime}
                                  onClick={() => setBookingStep("details")}
                                  className="group w-full py-5 bg-white text-black hover:bg-[#00ff00] disabled:opacity-20 disabled:hover:bg-white font-black rounded-[1.5rem] transition-all transform hover:translate-y-[-2px] hover:shadow-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                                >
                                  Continue to Details
                                  <ChevronRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform"
                                  />
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  )}

                  {bookingStep === "details" && (
                    <div className="max-w-4xl mx-auto font-sans">
                      <button
                        onClick={() => setBookingStep("calendar")}
                        className="text-gray-500 hover:text-[#00ff00] flex items-center gap-3 text-sm mb-10 transition-colors group font-bold tracking-tight"
                      >
                        <ChevronLeft
                          size={20}
                          className="group-hover:-translate-x-1 transition-transform"
                        />
                        Change date or time
                      </button>

                      <div className="grid md:grid-cols-[320px,1fr] gap-12 font-sans">
                        <div className="space-y-6">
                          <div className="p-8 bg-white/[0.03] rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff00]/5 blur-[60px]" />
                            <h4 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                              Meeting Summary
                            </h4>
                            <div className="space-y-6 text-white">
                              <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-[1rem] bg-white/5 flex items-center justify-center text-[#00ff00] border border-white/5">
                                  <CalendarIcon size={22} />
                                </div>
                                <div>
                                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight mb-0.5">
                                    Selected Date
                                  </p>
                                  <p className="font-black text-xl tracking-tight">
                                    Jan {selectedDate}, 2026
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-[1rem] bg-white/5 flex items-center justify-center text-[#00ff00] border border-white/5">
                                  <Clock size={22} />
                                </div>
                                <div>
                                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight mb-0.5">
                                    Time Slot
                                  </p>
                                  <p className="font-black text-xl tracking-tight">
                                    {selectedTime}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <form
                          onSubmit={handleBookingConfirm}
                          className="space-y-8"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <label className="text-[10px] font-black text-neutral-500 ml-1 uppercase tracking-widest">
                                Your Name
                              </label>
                              <div className="relative group">
                                <User
                                  className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-[#00ff00] transition-colors"
                                  size={20}
                                />
                                <input
                                  required
                                  name="name"
                                  value={bookingForm.name}
                                  onChange={handleBookingInputChange}
                                  placeholder="Jane Doe"
                                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white outline-none focus:border-[#00ff00]/50 focus:ring-8 focus:ring-[#00ff00]/5 transition-all text-sm font-bold"
                                />
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-[10px] font-black text-neutral-500 ml-1 uppercase tracking-widest">
                                Email Address
                              </label>
                              <div className="relative group">
                                <Mail
                                  className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-[#00ff00] transition-colors"
                                  size={20}
                                />
                                <input
                                  required
                                  type="email"
                                  name="email"
                                  value={bookingForm.email}
                                  onChange={handleBookingInputChange}
                                  placeholder="your@email.com"
                                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white outline-none focus:border-[#00ff00]/50 focus:ring-8 focus:ring-[#00ff00]/5 transition-all text-sm font-bold"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <label className="text-[10px] font-black text-neutral-500 ml-1 uppercase tracking-widest">
                              What should we talk about?
                            </label>
                            <div className="relative group">
                              <MessageSquare
                                className="absolute left-5 top-6 text-neutral-600 group-focus-within:text-[#00ff00] transition-colors"
                                size={20}
                              />
                              <textarea
                                name="notes"
                                value={bookingForm.notes}
                                onChange={handleBookingInputChange}
                                placeholder="Describe your project goals briefly..."
                                rows={5}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white outline-none focus:border-[#00ff00]/50 focus:ring-8 focus:ring-[#00ff00]/5 transition-all resize-none text-sm font-bold"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full py-6 bg-[#00ff00] hover:bg-emerald-400 disabled:opacity-50 text-black font-black uppercase tracking-widest rounded-[1.5rem] transition-all transform hover:translate-y-[-4px] shadow-2xl shadow-[#00ff00]/20 active:scale-[0.98]"
                          >
                            {status === "sending"
                              ? "Processing..."
                              : "Secure My Booking"}
                          </button>
                        </form>
                      </div>
                    </div>
                  )}

                  {bookingStep === "confirmation" && (
                    <div className="text-center py-24 bg-white/[0.02] rounded-[3rem] border border-white/5 backdrop-blur-xl relative overflow-hidden font-sans">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00ff00]/5" />
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-28 h-28 bg-[#00ff00]/10 text-[#00ff00] rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-[#00ff00]/20 shadow-[0_0_60px_rgba(0,255,0,0.15)] relative z-10"
                      >
                        <CheckCircle2 size={56} />
                      </motion.div>
                      <h2 className="text-5xl font-black text-white mb-6 tracking-tight relative z-10">
                        Mission Success!
                      </h2>
                      <p className="text-gray-400 max-w-lg mx-auto mb-12 text-xl leading-relaxed relative z-10 px-8">
                        Your discovery call for{" "}
                        <span className="text-white font-black underline decoration-[#00ff00]/30 underline-offset-8 uppercase tracking-widest text-sm">
                          Jan {selectedDate} at {selectedTime}
                        </span>{" "}
                        has been locked in.
                      </p>
                      <button
                        onClick={() => {
                          setBookingStep("calendar");
                          setSelectedDate(null);
                          setSelectedTime(null);
                          setStatus("idle");
                        }}
                        className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl border border-white/10 transition-all uppercase tracking-widest text-xs relative z-10 transform hover:scale-105"
                      >
                        Book New Session
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="message"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex gap-16 font-sans py-4 "
                >
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <span className="text-[#00ff00] font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                        Communication
                      </span>
                      <h2 className="text-5xl font-black text-white tracking-tight leading-tight">
                        Send a Direct Message
                      </h2>
                      <p className="text-gray-400 text-xl leading-relaxed max-w-lg">
                        Have a specific engineering challenge or a design dream?
                        Tell me everything and I'll get back to you with a
                        roadmap.
                      </p>
                    </div>

                    <div className="grid gap-8">
                      <div className="flex items-center gap-6 group">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#00ff00] group-hover:bg-[#00ff00] group-hover:text-black transition-all group-hover:scale-110 duration-500 shadow-lg shadow-black">
                          <Mail size={24} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">
                            Official Inquiry
                          </p>
                          <p className="text-white text-xl font-bold tracking-tight">
                            contact@jahirul.me
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 group">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#00ff00] group-hover:bg-[#00ff00] group-hover:text-black transition-all group-hover:scale-110 duration-500 shadow-lg shadow-black">
                          <Globe size={24} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">
                            Base of Operations
                          </p>
                          <p className="text-white text-xl font-bold tracking-tight">
                            Dhaka, Bangladesh
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-10 border-t border-white/5">
                      <p className="text-xs text-gray-600 font-bold uppercase tracking-widest flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-emerald-900" />
                        Guaranteed Response within 12 HOURS
                      </p>
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-8 bg-white/[0.03] p-10 rounded-[2.5rem] border border-white/10 shadow-3xl relative overflow-hidden font-sans"
                  >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00ff00]/5 blur-[80px] rounded-full" />

                    <div className="grid gap-8 relative z-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">
                          Identity
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          required
                          value={formData.user_name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full bg-[#111] border border-white/10 rounded-2xl py-5 px-8 text-white outline-none focus:border-[#00ff00]/50 transition-all font-bold placeholder:text-neutral-700"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">
                          Address
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          required
                          value={formData.user_email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full bg-[#111] border border-white/10 rounded-2xl py-5 px-8 text-white outline-none focus:border-[#00ff00]/50 transition-all font-bold placeholder:text-neutral-700"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">
                          Message Payload
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project or inquiry..."
                          className="w-full bg-[#111] border border-white/10 rounded-2xl py-5 px-8 text-white outline-none focus:border-[#00ff00]/50 resize-none transition-all font-bold placeholder:text-neutral-700"
                        />
                      </div>
                    </div>

                    <div className="pt-4 relative z-10">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full py-6 bg-[#00ff00] hover:bg-emerald-400 disabled:opacity-50 text-black font-black uppercase tracking-widest rounded-3xl transition-all transform hover:translate-y-[-4px] shadow-2xl shadow-[#00ff00]/30 active:scale-[0.98] text-sm"
                      >
                        {status === "sending" ? "Sending..." : "Send Message"}
                      </button>

                      <div className="mt-4 text-center">
                        <AnimatePresence>
                          {status === "success" && (
                            <motion.p
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-[#00ff00] text-xs font-black uppercase tracking-widest"
                            >
                              ✓ Transmission Successful
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll indicator */}

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex justify-center text-[#00ff00] mt-16"
        >
          ▼
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
