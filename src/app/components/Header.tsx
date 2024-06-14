import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Header() {
  return (
    <nav className="flex h-20 w-full items-center justify-between border-b p-4 text-2xl font-semibold">
      <div>Tasks App</div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
