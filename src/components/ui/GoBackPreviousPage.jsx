'use client';

const GoBackPreviousPage = () => {
    return (
        <button
            type="button"
            onClick={() => window.history.back()}
            className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
        >
            Or go back to the previous page
        </button>
    );
};

export default GoBackPreviousPage;