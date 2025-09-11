import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-primary/70" />
            <span className="font-extrabold tracking-tight">TecNext</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Building delightful, production‑ready web apps with a focus on speed, reliability, and polish.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/p/solutions" className="hover:underline">Solutions</Link></li>
              <li><Link to="/p/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link to="/p/changelog" className="hover:underline">Changelog</Link></li>
              <li><Link to="/p/status" className="hover:underline">Status</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/p/about" className="hover:underline">About</Link></li>
              <li><Link to="/p/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/p/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/p/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Resources</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/p/docs" className="hover:underline">Docs</Link></li>
              <li><Link to="/p/help" className="hover:underline">Help Center</Link></li>
              <li><Link to="/p/sitemap" className="hover:underline">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/p/terms" className="hover:underline">Terms</Link></li>
              <li><Link to="/p/privacy" className="hover:underline">Privacy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} TecNext, Inc. All rights reserved.</div>
    </footer>
  );
}
