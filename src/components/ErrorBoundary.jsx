import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6 text-slate-800 dark:text-slate-100 font-sans">
          <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-950/50 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mb-6 animate-pulse">
              <AlertTriangle size={32} />
            </div>

            {/* English Section */}
            <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-700 w-full">
              <h1 className="text-xl font-bold mb-2">Something went wrong</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                We apologize for the inconvenience. An unexpected error occurred. Please try reloading the page.
              </p>
            </div>

            {/* Arabic Section */}
            <div className="mb-8 w-full dir-rtl" style={{ direction: 'rtl' }}>
              <h1 className="text-xl font-bold font-cairo mb-2">عذراً، حدث خطأ ما</h1>
              <p className="text-sm font-cairo text-slate-500 dark:text-slate-400 leading-relaxed">
                نعتذر عن هذا الخلل. حدث خطأ غير متوقع في النظام. يرجى محاولة إعادة تحميل الصفحة.
              </p>
            </div>

            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-medical-600 hover:bg-medical-700 active:scale-95 transition-transform text-white font-medium rounded-xl shadow-lg shadow-medical-600/20 text-sm focus:outline-none focus:ring-2 focus:ring-medical-500 font-cairo"
            >
              <RefreshCw size={16} />
              <span>إعادة التحميل / Reload</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
