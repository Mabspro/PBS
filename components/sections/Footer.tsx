export function Footer() {
    return (
        <footer className="py-12 bg-white border-t border-slate-100 text-center">
            <div className="container-custom">
                <h3 className="text-navy-900 font-bold text-lg mb-4">PHOENIX BOOKKEEPING SOLUTIONS LLC</h3>
                <p className="text-slate-500 mb-6">hello@example.com <span className="mx-2">|</span> (555) 123-4567</p>
                <p className="text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} Phoenix Bookkeeping Solutions LLC. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
