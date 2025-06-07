import Android from "../svg/android";

const ButtonDownload = () => {
  return (
    <button className="cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="flex max-w-48 h-12 px-3 py-4 gap-2 rounded-xl items-center justify-center bg-black text-white dark:text-black dark:bg-white sm:h-14">
        <Android className="size-7" />
        <div>
          <div className="text-[.5rem] sm:text-xs text-left">Descargar</div>
          <div className="text-sm font-semibold font-sans -mt-1 sm:text-sm">
            Android APK
          </div>
        </div>
      </div>
    </button>
  );
};
export default ButtonDownload;
