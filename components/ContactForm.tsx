"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const sendMessage = async (values: z.infer<typeof formSchema>) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  email: z.email(),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters" })
    .max(500, { message: "Message must be at most 500 characters" }),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const data = await sendMessage(values);

      toast.success("Message sent successfully");
      return data;
    } catch {
      toast.error("Failed to send message");
      throw new Error("Failed to send message");
    } finally {
      setIsLoading(false);
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex w-full flex-col gap-8 md:flex-row md:gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Name"
                    className="placeholder:text-muted-foreground/70"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="placeholder:text-muted-foreground/70"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Leave a message here, career opportunity or just say hi"
                  className="placeholder:text-muted-foreground/70 h-32 resize-none"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <Button
            type="submit"
            className="text-background/90 h-10 w-full cursor-not-allowed"
            disabled
          >
            <Loader2 className="animate-spin" />
            <span>Sending...</span>
          </Button>
        ) : (
          <Button
            type="submit"
            className="text-background/90 h-10 w-full cursor-pointer"
            disabled={isLoading}
          >
            <span>Send message</span>
            <SendHorizontal />
          </Button>
        )}
      </form>
    </Form>
  );
};
export default ContactForm;
