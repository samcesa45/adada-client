export const Spinner = () => {
  return (
    <div className="max-w-[1920] mx-auto">
      <img
        src="/assets/logo/adada_logo.png"
        alt="Loading..."
        width={100}
        height={100}
        className="animate-bounce"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
