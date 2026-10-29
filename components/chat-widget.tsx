"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bot, ChevronDown, SendHorizontal, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock only: the assistant is still being built, so every question gets the
// same "in development" reply. Swap `reply` for a real API call later.
const suggestions = [
  "What tech does Akrawin use?",
  "What has Akrawin built?",
  "Is Akrawin more frontend or backend?",
];

const reply =
  "I'm still in development, so I can't answer yet. For now, the resume and the sections on this page have everything.";

type Message = { role: "user" | "bot"; text: string };

// `visible` shows or hides the whole widget (navbar button);
// `open` expands or collapses its panel (widget header).
const ChatContext = createContext<{
  visible: boolean;
  setVisible: (visible: boolean) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used inside ChatProvider");
  return context;
};

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <ChatContext.Provider value={{ visible, setVisible, open, setOpen }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatToggle = () => {
  const { visible, setVisible, setOpen } = useChat();

  // Showing the widget from the navbar opens it straight to the chat.
  const toggle = () => {
    setVisible(!visible);
    setOpen(!visible);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={visible ? "Hide chat" : "Show chat"}
      aria-pressed={visible}
      onClick={toggle}
      className={cn(
        "hover:text-foreground cursor-pointer hover:bg-transparent dark:hover:bg-transparent",
        visible && "text-foreground",
      )}
    >
      <Bot className="size-[1.2rem]" />
    </Button>
  );
};

const StatusDot = () => (
  <span aria-hidden className="relative flex size-2">
    <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-500 opacity-75 motion-reduce:animate-none" />
    <span className="relative inline-flex size-2 rounded-full bg-amber-500" />
  </span>
);

export const ChatWidget = () => {
  const { visible, open, setOpen } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const ask = (question: string) => {
    if (typing) return;
    setMessages((current) => [...current, { role: "user", text: question }]);
    setTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { role: "bot", text: reply }]);
      setTyping(false);
    }, 900);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="fixed right-4 bottom-4 z-50 w-[calc(100%-2rem)] max-w-sm origin-bottom-right"
        >
          <div className="bg-background/95 overflow-hidden rounded-xl border shadow-[0_16px_40px_-12px_rgb(0_0_0/0.35)] backdrop-blur-md">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="chat-panel"
              className="flex w-full cursor-pointer items-center justify-between px-5 py-3.5 text-left"
            >
              <span>
                <span className="text-muted-foreground block text-xs">
                  Chat with
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <StatusDot />
                  Akrawin Assistant
                  <span className="text-muted-foreground border px-1.5 py-px font-mono text-[10px] uppercase">
                    In development
                  </span>
                </span>
              </span>
              <ChevronDown
                className={cn(
                  "text-muted-foreground size-4 transition-transform duration-300",
                  !open && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id="chat-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="border-t"
                >
                  <div
                    ref={scrollRef}
                    className="h-[23rem] max-h-[55svh] overflow-y-auto px-5 py-6"
                  >
                    {messages.length === 0 ? (
                      <div className="flex flex-col items-center gap-3 text-center">
                        <Bot className="size-8" />
                        <p className="font-semibold">Coming soon</p>
                        <p className="text-muted-foreground text-sm">
                          An assistant that answers questions about my work. It
                          is still being built, but you can try the preview
                          below.
                        </p>
                        <p className="text-muted-foreground mt-2 text-xs">
                          Try asking:
                        </p>
                        <div className="flex w-full flex-col gap-2">
                          {suggestions.map((suggestion) => (
                            <button
                              key={suggestion}
                              type="button"
                              onClick={() => ask(suggestion)}
                              className="hover:bg-muted cursor-pointer rounded-md border px-3 py-2 text-left text-sm transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <ul className="flex flex-col gap-3 text-sm">
                        {messages.map((message, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn(
                              "max-w-[85%] rounded-lg px-3 py-2",
                              message.role === "user"
                                ? "bg-foreground text-background self-end"
                                : "bg-muted self-start",
                            )}
                          >
                            {message.text}
                          </motion.li>
                        ))}
                        {typing && (
                          <li className="bg-muted text-muted-foreground flex gap-1 self-start rounded-lg px-3 py-3">
                            {[0, 1, 2].map((dot) => (
                              <span
                                key={dot}
                                className="size-1.5 animate-bounce rounded-full bg-current"
                                style={{ animationDelay: `${dot * 120}ms` }}
                              />
                            ))}
                          </li>
                        )}
                      </ul>
                    )}
                  </div>

                  <form
                    onSubmit={(event) => event.preventDefault()}
                    className="flex items-center gap-2 border-t p-3"
                  >
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label="Clear chat"
                      disabled={messages.length === 0}
                      onClick={() => setMessages([])}
                    >
                      <Trash2 />
                    </Button>
                    <input
                      disabled
                      placeholder="Typing opens when it launches..."
                      aria-label="Message"
                      className="bg-muted/50 placeholder:text-muted-foreground h-9 flex-1 rounded-md border px-3 text-sm disabled:cursor-not-allowed"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      aria-label="Send"
                      disabled
                    >
                      <SendHorizontal />
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
