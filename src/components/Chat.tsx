'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";


export function Chat() {
    const { messages, handleInputChange, handleSubmit, input } = useChat({
        api: '/api/chat',
    })

    return (
        <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
            <CardHeader>
            <CardTitle>Chat AI</CardTitle>
            <CardDescription>Using Vercel SKD to create a chat bot.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                { messages.map(message => {
                    return (
                        <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                            {message.role === 'user' && (
                                <Avatar>
                                <AvatarFallback>PV</AvatarFallback>
                                <AvatarImage src="https://github.com/pvillor.png"/>
                                </Avatar>
                            )}
                            {message.role === 'assistant' && (
                                <Avatar>
                                <AvatarFallback>PV</AvatarFallback>
                                <AvatarImage src="https://github.com/rocketseat.png"/>
                                </Avatar>
                            )}
                            <p>
                                <span className="block font-bold text-slate-700">
                                    {message.role === 'user' ? 'Usuário' : 'AI'}:
                                    </span>
                                {message.content}
                            </p>
                        </div>
                    )
                })}
            </CardContent>
            <CardFooter>
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder="How can I help you?" value={input} onChange={handleInputChange}/>
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}
