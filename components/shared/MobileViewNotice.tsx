const MobileViewNotice = () => {
  return (
    <div className="md:hidden">
      <input id="mobile-view-dismiss" type="checkbox" className="peer sr-only" />
      <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 px-4 peer-checked:hidden">
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile view notice"
          className="w-full max-w-sm rounded-2xl border border-white/20 bg-[#090612] p-5 text-white shadow-2xl"
        >
          <h2 className="text-lg font-semibold">Best on Desktop</h2>
          <p className="mt-3 text-sm text-gray-300">
            For the proper view, try opening this website on a desktop screen.
          </p>
          <label
            htmlFor="mobile-view-dismiss"
            className="button-primary mt-5 block w-full cursor-pointer rounded-lg px-4 py-2 text-center text-sm text-white"
          >
            Continue on Mobile
          </label>
        </div>
      </div>
    </div>
  );
};

export default MobileViewNotice;
