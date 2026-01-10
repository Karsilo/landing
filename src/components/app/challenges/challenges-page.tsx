'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Lock } from 'lucide-react';
import Link from 'next/link';
import { events } from '@/lib/analytics';

const ChallengesPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Track page visit on mount
    useEffect(() => {
        events.pageVisit('challenges');
    }, []);

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        return { daysInMonth, startingDayOfWeek, year, month };
    };

    const formatDateForFile = (year: number, month: number, day: number) => {
        const monthStr = String(month + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        return `${dayStr}-${monthStr}-${year}`;
    };

    const isDateInFuture = (year: number, month: number, day: number) => {
        const checkDate = new Date(year, month, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return checkDate > today;
    };

    const previousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentDate);
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const today = new Date();
    const isToday = (day: number) => {
        return today.getDate() === day &&
               today.getMonth() === month &&
               today.getFullYear() === year;
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-background to-secondary/20">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Calendar className="w-10 h-10 text-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Daily Challenges
                        </h1>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Practice makes perfect. Complete daily challenges to sharpen your physics skills.
                    </p>
                </div>

                {/* Calendar */}
                <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                    {/* Calendar Header */}
                    <div className="bg-primary/10 px-6 py-4 flex items-center justify-between border-b border-border">
                        <button
                            onClick={previousMonth}
                            className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
                            aria-label="Previous month"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold">
                            {monthNames[month]} {year}
                        </h2>
                        <button
                            onClick={nextMonth}
                            className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
                            aria-label="Next month"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Day Names */}
                    <div className="grid grid-cols-7 gap-px bg-border p-4">
                        {dayNames.map((day) => (
                            <div
                                key={day}
                                className="text-center font-semibold text-sm text-muted-foreground py-2"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-px bg-border p-4">
                        {/* Empty cells for days before month starts */}
                        {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                            <div
                                key={`empty-${index}`}
                                className="bg-card aspect-square"
                            />
                        ))}

                        {/* Days of the month */}
                        {Array.from({ length: daysInMonth }).map((_, index) => {
                            const day = index + 1;
                            const dateStr = formatDateForFile(year, month, day);
                            const isFuture = isDateInFuture(year, month, day);
                            const isTodayDate = isToday(day);

                            if (isFuture) {
                                return (
                                    <div
                                        key={day}
                                        className="bg-card aspect-square flex flex-col items-center justify-center p-2 relative"
                                    >
                                        <span className="text-2xl font-semibold text-muted-foreground/40 mb-1">
                                            {day}
                                        </span>
                                        <Lock className="w-4 h-4 text-muted-foreground/40" />
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={day}
                                    href={`/challenges/${dateStr}`}
                                    className={`bg-card aspect-square flex flex-col items-center justify-center p-2 hover:bg-primary/10 transition-all relative group cursor-pointer border-2 ${
                                        isTodayDate
                                            ? 'border-primary bg-primary/5'
                                            : 'border-transparent'
                                    }`}
                                >
                                    <span className={`text-2xl font-semibold mb-1 group-hover:scale-110 transition-transform ${
                                        isTodayDate ? 'text-primary' : ''
                                    }`}>
                                        {day}
                                    </span>
                                    <div className="w-2 h-2 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {isTodayDate && (
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Legend */}
                <div className="max-w-4xl mx-auto mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary rounded"></div>
                        <span className="text-muted-foreground">Today</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Locked (Future)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary/10 rounded"></div>
                        <span className="text-muted-foreground">Available</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengesPage;
