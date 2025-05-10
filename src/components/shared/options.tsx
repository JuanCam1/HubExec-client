import Github from "../svg/github";
import ModeToggle from "./modeToggle";

const Options = () => {
  return (
    <div className="flex gap-4">
      <ModeToggle />
      <a
        href="https://github.com/JuanCam1/CodeCraft.git"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center border-gray-200 bg-white hover:dark:bg-zinc-900 dark:bg-zinc-800 border dark:border-none rounded-md w-9"
      >
        <Github className="text-black dark:text-white" />
      </a>
    </div>
  );
};
export default Options;
