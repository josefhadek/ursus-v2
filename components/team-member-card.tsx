'use client'

import Image from 'next/image'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { TeamMember } from '@/lib/team'

function Bio({ text }: { text: string }) {
  const parts = text.split(/<br\s*\/?>/i).map((p) => p.trim()).filter(Boolean)
  return (
    <>
      {parts.map((line, i) => (
        <React.Fragment key={i}>
          {line.trim()}
          {i < parts.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      ))}
    </>
  )
}

export function TeamMemberCard({ name, nickname, role, description, image }: TeamMember) {
  const card = (
    <div className="card overflow-hidden h-full flex flex-col text-left">
      <div className="relative aspect-square w-full bg-pisek overflow-hidden">
        <Image
          src={image}
          alt={`${nickname} – ${name}`}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-1 flex-grow">
        <span className="text-xl font-bold text-kakao leading-tight">{nickname}</span>
        <span className="text-sm text-kakao-muted">{name}</span>
        {role && (
          <span className="mt-2 self-start rounded-full bg-serik px-2.5 py-0.5 text-xs  text-kakao">
            {role}
          </span>
        )}
      </div>
    </div>
  )

  if (!description) return card

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="h-full w-full cursor-pointer rounded-2xl"
          aria-label={`Víc o: ${nickname}`}
          data-member={JSON.stringify({ name, nickname, role, description, image })}
        >
          {card}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[720px] max-h-[85vh] overflow-y-auto rounded-2xl bg-krem border-pisek">
        <div className="flex flex-col gap-6 py-2">
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-okr shrink-0">
              <Image src={image} alt={nickname} fill className="object-cover" />
            </div>
            <DialogHeader className="text-center sm:text-left flex-1 gap-1">
              <DialogTitle className="font-heading text-3xl font-bold text-kakao">{nickname}</DialogTitle>
              <div className="text-kakao-muted">{name}</div>
              {role && (
                <DialogDescription className="mt-1 self-center sm:self-start rounded-full bg-serik px-3 py-0.5 text-sm  text-kakao">
                  {role}
                </DialogDescription>
              )}
            </DialogHeader>
          </div>
          <div className="text-kakao leading-relaxed border-t border-pisek pt-5">
            <Bio text={description} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
