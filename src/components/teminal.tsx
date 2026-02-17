import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/registry/magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      {/* <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation> */}
      {/* <div>
        <span className="text-[#00aa00]">$ </span>
        <span className="text-[#00ffff]">cat To-Dos</span>
      </div> */}
      <TypingAnimation>&gt; cat:/ To-Dos</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ "Simple, direct, instantly clear."
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ "Action-focused, conversion-oriented.",
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ "Digital products that convert.",
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ "Build. Launch. Convert.",
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ "Websites that sell.",
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ "Websites that sell.",
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ "Apps that turn clicks into sales.",
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ "Apps that turn clicks into sales."
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ "From code to customers — I make it happen.",
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ "Web and mobile solutions that convert traffic.",
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ "Websites and apps that grow your customer base.",
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        {/* <span className="pl-2">- lib/utils.ts</span> */}
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Let's discuss your
        project requirements.
      </TypingAnimation>

      {/* <TypingAnimation className="text-muted-foreground">
        You may now add components.
      </TypingAnimation> */}
    </Terminal>
  );
}
