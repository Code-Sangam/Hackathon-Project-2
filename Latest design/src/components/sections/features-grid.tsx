"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, ChevronUp, Clock, Calendar, Percent, Users, RefreshCw, TrendingUp } from 'lucide-react';

const FeaturesGrid = () => {
    const [isGrowthDropdownOpen, setGrowthDropdownOpen] = useState(false);

    const categories = [
        { name: "Web Business" },
        { name: "E-commerce Brands" },
        { name: "SAAS Startup’s" },
        { name: "Tech Innovators" },
        { name: "Marketing Agencies" },
        { name: "Creative Studios" },
    ];
    
    const metricTags = [
        { icon: Calendar, text: "Monthly Visits" },
        { icon: Clock, text: "Last 24hrs" },
        { icon: Percent, text: "Retention" },
        { icon: Users, text: "Top Referrals" },
        { icon: RefreshCw, text: "Conversion" },
        { icon: TrendingUp, text: "Grow Income" },
    ];

    return (
        <section id="features" className="py-[120px] px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Card 1: Distinguish yourself */}
                    <div className="bg-card border border-white/10 rounded-xl p-8 flex flex-col justify-between min-h-[450px] overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 group">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold text-white">Distinguish yourself</h3>
                            <p className="text-muted-foreground mt-2 max-w-sm">Elevate your brand with a golden tick and connect with top-tier associates.</p>
                        </div>
                        <div className="relative h-56 mt-8">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                                <div className="absolute top-8 left-[calc(50%-130px)] transform-gpu transition-all duration-500 group-hover:top-4 group-hover:scale-105">
                                    <div className="w-44 p-2.5 bg-secondary/50 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-sm shadow-lg">
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/hB5bi4QrUW6ADBo4x4YHYj1FyyY-6.svg?" width={36} height={36} alt="LanderX logo" />
                                        <span className="font-semibold text-white text-sm">LanderX</span>
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/pJ14Zm6fSChKb3riNPqdMYdzpDM-7.svg?" width={20} height={20} alt="Verified badge" />
                                    </div>
                                </div>
                                <div className="absolute top-24 left-[calc(50%-200px)] z-10 transform-gpu transition-all duration-500 group-hover:top-20 group-hover:scale-105">
                                    <div className="w-52 p-2.5 bg-secondary/50 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-sm shadow-lg">
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/images/PQuVtaPx0bm7On63y46yxJIM-2.png?" width={36} height={36} alt="Robinson jr" className="rounded-full" />
                                        <span className="font-semibold text-white text-sm">Robinson jr</span>
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/ghYW0cvnyQmg7VaLEOLaZUQOhFk-9.svg?" width={20} height={20} alt="Gold verified badge" />
                                    </div>
                                </div>
                                <div className="absolute top-[160px] left-[calc(50%-80px)] transform-gpu transition-all duration-500 group-hover:top-[150px] group-hover:scale-105">
                                    <div className="w-44 p-2.5 bg-secondary/50 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-sm shadow-lg">
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/AtXPNff5LTVvIV6wxVjP76Wnvc-8.svg?" width={36} height={36} alt="Crystalio logo" />
                                        <span className="font-semibold text-white text-sm">Crystalio</span>
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/pJ14Zm6fSChKb3riNPqdMYdzpDM-7.svg?" width={20} height={20} alt="Verified badge" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Enterprise Insights */}
                    <div className="bg-card border border-white/10 rounded-xl p-8 flex flex-col justify-between min-h-[450px] overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1">
                        <div>
                            <h3 className="text-2xl font-semibold text-white">Enterprise Insights</h3>
                            <p className="text-muted-foreground mt-2 max-w-sm">Automate everything from workflow optimization to real-time sentiment analysis and market monitoring.</p>
                        </div>
                        <div className="mt-8">
                            <div className="relative border border-white/10 rounded-xl p-4 bg-secondary/30">
                                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/1IaFtL4zGely9VkSxFrTkS3EEu0-11.svg?" layout="fill" objectFit="cover" alt="background chart" className="opacity-10 z-0 rounded-xl" />
                                <div className="relative z-10 flex flex-col gap-3">
                                    <div className="w-fit p-2 bg-secondary/70 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-sm shadow-lg">
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/0yM6cBXNvZODiQkuDOtWDmSLT88-10.svg?" width={32} height={32} alt="Your Brand logo" />
                                        <span className="font-semibold text-white text-sm">Your Brand</span>
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/pJ14Zm6fSChKb3riNPqdMYdzpDM-7.svg?" width={18} height={18} alt="Verified badge" />
                                    </div>
                                    <div className="w-fit p-2 self-start ml-8 bg-secondary/70 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-sm shadow-lg">
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/images/04HQrYBnxisyNool48jtnDpfw-3.png?" width={32} height={32} alt="Robinson jr" className="rounded-full" />
                                        <span className="font-semibold text-white text-sm">Robinson jr</span>
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/ghYW0cvnyQmg7VaLEOLaZUQOhFk-9.svg?" width={18} height={18} alt="Gold verified badge" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-3">
                                {categories.map((category) => (
                                    <div key={category.name} className="bg-secondary p-3 rounded-lg border border-white/10 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                                        <span className="text-sm font-medium text-white">{category.name}</span>
                                        <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Business Data Solutions */}
                    <div className="bg-card border border-white/10 rounded-xl p-8 flex flex-col justify-between min-h-[450px] overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1">
                        <div>
                            <h3 className="text-2xl font-semibold text-white">Business Data Solutions</h3>
                            <p className="text-muted-foreground mt-2 max-w-sm">Your data-driven guide to making informed business decisions.</p>
                        </div>
                        <div className="relative mt-8">
                             <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/59JXCuAmk7YjjfSwloE2pwaxzDA-12.svg?" width={500} height={250} alt="Data chart" className="w-full h-auto" />
                             <div className="absolute top-4 left-4 flex items-center gap-4 text-sm">
                                <span className="text-white font-medium">Monthly Visits</span>
                                <span className="text-muted-foreground">Last 24hrs</span>
                            </div>
                            <div className="absolute top-2 right-4">
                                <button onClick={() => setGrowthDropdownOpen(!isGrowthDropdownOpen)} className="flex items-center gap-1 text-sm text-white font-medium">
                                    See Growth
                                    <ChevronUp className={`w-4 h-4 transition-transform ${isGrowthDropdownOpen ? 'rotate-0' : 'rotate-180'}`} />
                                </button>
                                {isGrowthDropdownOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-64 bg-secondary border border-white/10 rounded-lg p-3 shadow-xl z-20">
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> <span className="text-white">100% score anytime</span></li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> <span className="text-white">Watch Stats & Growth like master</span></li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> <span className="text-white">Start Growing Now</span></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="absolute bottom-4 left-4 p-2 bg-secondary/70 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-sm shadow-lg">
                                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/hB5bi4QrUW6ADBo4x4YHYj1FyyY-6.svg?" width={32} height={32} alt="LanderX logo" />
                                <span className="font-semibold text-white text-sm">LanderX</span>
                                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/pJ14Zm6fSChKb3riNPqdMYdzpDM-7.svg?" width={18} height={18} alt="Verified badge" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Card 4: Boost Sales */}
                    <div className="bg-card border border-white/10 rounded-xl p-8 flex flex-col justify-between min-h-[450px] overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1">
                        <div>
                            <h3 className="text-2xl font-semibold text-white">Boost Sales</h3>
                            <p className="text-muted-foreground mt-2 max-w-sm">Convert more leads with targeted strategies and smarter tools.</p>
                        </div>
                        <div className="relative mt-6 h-64">
                            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/eVPQSYBoVqwchmpN78sjyYtovY-13.svg?" layout="fill" objectFit="contain" objectPosition="center" alt="Grid background" className="opacity-40" />
                            <div className="absolute inset-0 p-2">
                                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
                                    {metricTags.map((tag, i) => {
                                        const Icon = tag.icon;
                                        return (
                                            <div key={i} className="bg-secondary/50 border border-white/10 rounded-md p-2 flex items-center gap-1.5 backdrop-blur-sm">
                                                <Icon className="w-4 h-4 text-muted-foreground" />
                                                <span className="text-xs text-white whitespace-nowrap">{tag.text}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="absolute bottom-2 right-2 flex flex-col items-end gap-2">
                                     <div className="p-2 bg-secondary/70 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-sm shadow-lg">
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/hB5bi4QrUW6ADBo4x4YHYj1FyyY-6.svg?" width={32} height={32} alt="LanderX logo" />
                                        <span className="font-semibold text-white text-sm">LanderX</span>
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/pJ14Zm6fSChKb3riNPqdMYdzpDM-7.svg?" width={18} height={18} alt="Verified badge" />
                                    </div>
                                    <div className="p-2 bg-secondary/70 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-sm shadow-lg">
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/AtXPNff5LTVvIV6wxVjP76Wnvc-8.svg?" width={32} height={32} alt="Crystal logo" />
                                        <span className="font-semibold text-white text-sm">Crystal</span>
                                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/pJ14Zm6fSChKb3riNPqdMYdzpDM-7.svg?" width={18} height={18} alt="Verified badge" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;