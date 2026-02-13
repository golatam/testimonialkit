import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSignupSchema, type InsertSignup } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Check, Loader2, Mail } from "lucide-react";

export function SignupForm({ plan = "starter" }: { plan?: string }) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertSignup>({
    resolver: zodResolver(insertSignupSchema),
    defaultValues: {
      email: "",
      plan: plan as "free" | "starter" | "pro",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertSignup) => {
      await apiRequest("POST", "/api/signups", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "You're on the list!",
        description: "We'll notify you when TestimonialKit launches.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertSignup) => {
    mutation.mutate(data);
  };

  if (submitted) {
    return (
      <div
        className="flex items-center gap-3 p-4 rounded-md bg-primary/10 dark:bg-primary/15 border border-primary/20"
        data-testid="signup-success"
      >
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
          <Check className="w-4 h-4 text-primary-foreground" />
        </div>
        <div>
          <p className="font-medium text-sm" data-testid="text-signup-success-title">You're on the list!</p>
          <p className="text-xs text-muted-foreground" data-testid="text-signup-success-desc">
            We'll email you when we launch in March 2026.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
        data-testid="signup-form"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="pl-9"
                    disabled={mutation.isPending}
                    data-testid="input-email"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={mutation.isPending}
          data-testid="button-signup-submit"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            "Get Early Access"
          )}
        </Button>
      </form>
    </Form>
  );
}
