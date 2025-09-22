import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="relative w-full bg-[#0F0F23] min-h-screen overflow-hidden">
      {/* Background pattern matching home page */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '2.5rem 2.5rem' }}></div>
      <div className="absolute inset-x-0 top-0 z-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.25),transparent_60%)]"></div>
      
      <section className="relative z-10 container min-h-screen pt-[120px] pb-20 flex items-center justify-center">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white">Login</h1>
            <p className="text-muted-foreground">Welcome back to Sangam</p>
          </div>
          <LoginForm />
        </div>
      </section>
    </div>
  );
}