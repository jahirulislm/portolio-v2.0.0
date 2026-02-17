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
      <TypingAnimation className="font-bold">&gt; cat:/ To-Dos</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Nail the "WHAT" before the "HOW",
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Clarity before execution ,Understanding before building,
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Simple, direct, instantly clear,
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Action-focused, conversion-oriented,
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ From code to Websites — I make it happen,
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Websites and apps that grow your customer base,
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Web and mobile solutions that convert traffic,
      </AnimatedSpan>

      <AnimatedSpan className="text[#00ffff] font-semibold mt-1.5">
        <span>Last Project Shipped Successfully!</span>
        {/* <span className="pl-2">- lib/utils.ts</span> */}
      </AnimatedSpan>

      <TypingAnimation className=" text[#00ffff] font-semibold">
        {/* Let's find out, how to bring your business online. */}
        {/* Let's discuss your project requirements. */}
        {/* Let's talk about your project. */}
        {/* Let's build your digital presence together. */}
        {/* Let's create your online success story. */}
        Let's discuss your online business solution.
        {/* Let's bring your vision to life online. */}
        {/* Let's turn your ideas into reality. */}
      </TypingAnimation>
    </Terminal>
  );
}
