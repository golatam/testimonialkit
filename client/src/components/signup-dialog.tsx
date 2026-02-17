import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SignupForm } from "@/components/signup-form";
import { Button } from "@/components/ui/button";

interface SignupDialogProps {
  plan?: string;
  children: React.ReactNode;
}

export function SignupDialog({ plan = "starter", children }: SignupDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        asChild
        onClick={() => {
          setOpen(true);
          (window as any).gtag_report_conversion?.();
        }}
      >
        {children}
      </Button>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get Early Access</DialogTitle>
          <DialogDescription>
            Enter your email to join the waitlist. Free for the first 50 signups.
          </DialogDescription>
        </DialogHeader>
        <SignupForm plan={plan} />
      </DialogContent>
    </Dialog>
  );
}
