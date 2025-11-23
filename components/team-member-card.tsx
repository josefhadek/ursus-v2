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

interface TeamMemberProps {
    name: string
    nickname: string
    role: string
    description: string
    image: string
}

export function TeamMemberCard({
    name,
    nickname,
    role,
    description,
    image,
}: TeamMemberProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full hover:-translate-y-1 hover:border-primary/30">
            <div className="relative w-full aspect-square bg-stone-200">
                <Image src={image} alt={nickname} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4 text-center">
                    <h2 className="text-2xl font-bold font-sans text-forest leading-tight">
                        {name}
                    </h2>
                    <span className="text-lg text-stone-500 font-bold block mt-1">{nickname}</span>
                </div>
                <h3 className="text-primary font-semibold mb-4 text-center">{role}</h3>
                <p className="text-stone-600 text-sm leading-relaxed text-center line-clamp-3 mb-4">
                    {description}
                </p>
                <div className="mt-auto text-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="rounded-full px-6">
                                Více o mně
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                            <div className="flex flex-col items-center gap-6 py-6">
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-stone-100 shadow-md shrink-0">
                                    <Image
                                        src={image}
                                        alt={nickname}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <DialogHeader className="text-center sm:text-center w-full">
                                    <DialogTitle className="text-3xl font-bold font-skaut text-forest mb-2">
                                        {name}
                                    </DialogTitle>
                                    <div className="text-xl font-bold text-stone-500 mb-2">
                                        {nickname}
                                    </div>
                                    <DialogDescription className="text-primary font-semibold text-lg">
                                        {role}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="text-stone-700 leading-relaxed text-center px-4">
                                    {description}
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
