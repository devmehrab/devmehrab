import { Mail, ArrowUpRight } from "lucide-react";

export default function DirectRoute() {
  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/[0.08]">
      <div>
        <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6">
          <Mail className="w-4 h-4 text-[#f5f5f7]" />
        </div>
        <p className="text-xs font-medium text-[#86868b] uppercase tracking-wider mb-2">
          Direct
        </p>
        <h3 className="text-xl font-semibold text-[#f5f5f7] mb-2">Email</h3>
        <p className="text-sm text-[#86868b] leading-relaxed mb-6">
          Prefer writing directly? Send an email anytime.
        </p>
      </div>

      <a
        href="mailto:dev.mehrabhossain@gmail.com"
        className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-colors"
      >
        <span className="text-sm font-medium text-[#f5f5f7] truncate">
          dev.mehrabhossain@gmail.com
        </span>
        <ArrowUpRight className="w-4 h-4 text-[#86868b] group-hover:text-white transition-colors flex-shrink-0" />
      </a>
    </div>
  );
}
