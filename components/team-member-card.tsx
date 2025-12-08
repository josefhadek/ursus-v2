"use client"

import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import React from 'react'

interface TeamMemberProps {
    name: string
    nickname: string
    role?: string
    description?: string
    image: string
}

export function TeamMemberCard({
    name,
    nickname,
    role,
    description,
    image,
}: TeamMemberProps) {
    const formatDescription = (text: string) => {
        return text.split(/<br\s*\/?>/i).map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index < text.split(/<br\s*\/?>/i).length - 1 && <br />}
            </React.Fragment>
        ))
    }

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
            {description ? (
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="relative w-full aspect-square bg-stone-200 cursor-pointer">
                            <Image src={image} alt={nickname} fill className="object-cover" />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] max-h-[85vh] overflow-y-auto rounded-2xl">
                        <div className="flex flex-col gap-6 py-6">
                            {/* Top section: Photo left, Info right */}
                            <div className="flex flex-col sm:flex-row gap-6 items-center">
                                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-stone-100 shadow-md shrink-0">
                                    <Image
                                        src={image}
                                        alt={nickname}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <DialogHeader className="text-center sm:text-left flex-1">
                                    <DialogTitle className="text-3xl font-bold font-skaut text-forest mb-2">
                                        {name}
                                    </DialogTitle>
                                    <div className="text-xl font-bold text-forest mb-2">
                                        {nickname}
                                    </div>
                                    {role && (
                                        <DialogDescription className="text-primary font-semibold text-lg">
                                            {role}
                                        </DialogDescription>
                                    )}
                                </DialogHeader>
                            </div>

                            {/* Bottom section: Full width description */}
                            <div className="text-stone-700 leading-relaxed text-justify px-4 border-t border-stone-200 pt-6">
                                {formatDescription(description)}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            ) : (
                <div className="relative w-full aspect-square bg-stone-200">
                    <Image src={image} alt={nickname} fill className="object-cover" />
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4 text-center">
                    <h2 className="text-xl font-bold font-sans text-forest leading-tight">
                        {name}
                    </h2>
                    <span className="text-base text-forest font-bold block mt-1">{nickname}</span>
                </div>
                {role && (
                    <h3 className="text-primary font-semibold mb-4 text-center">{role}</h3>
                )}
                {description && (
                    <p className="text-stone-600 text-sm leading-relaxed text-center line-clamp-3 mb-4">
                        {formatDescription(description)}
                    </p>
                )}
                <div className="mt-auto text-center">
                    {description && (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="rounded-full px-6 cursor-pointer">
                                    Více o mně
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[800px] max-h-[85vh] overflow-y-auto rounded-2xl">
                                <div className="flex flex-col gap-6 py-6">
                                    {/* Top section: Photo left, Info right */}
                                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-stone-100 shadow-md shrink-0">
                                            <Image
                                                src={image}
                                                alt={nickname}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <DialogHeader className="text-center sm:text-left flex-1">
                                            <DialogTitle className="text-3xl font-bold font-skaut text-forest mb-2">
                                                {name}
                                            </DialogTitle>
                                            <div className="text-xl font-bold text-forest mb-2">
                                                {nickname}
                                            </div>
                                            {role && (
                                                <DialogDescription className="text-primary font-semibold text-lg">
                                                    {role}
                                                </DialogDescription>
                                            )}
                                        </DialogHeader>
                                    </div>

                                    {/* Bottom section: Full width description */}
                                    <div className="text-stone-700 leading-relaxed text-justify px-4 border-t border-stone-200 pt-6">
                                        {formatDescription(description)}
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>
            </div>
        </div>
    )
}
