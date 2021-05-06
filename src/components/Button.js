const ICONS = {
  add: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  ),
  clear: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  code: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
};

const COLORS = {
  red: "bg-red-400 active:bg-red-500 text-white ",
  gray: "bg-gray-600 hover:bg-red-400 active:bg-red-500 text-white ",
};

export const Button = ({ icon, color, onClick, children, ...props }) => {
  let defaultClass =
    "focus:outline-none p-4 m-2 rounded-md w-screen font-bold transition-colors";
  let className = [COLORS[color], defaultClass].join(" ");
  return (
    <button class={className} onClick={onClick}>
      <div class="flex justify-center items-center">
        <span class="m-1">{ICONS[icon]}</span>
        <span class="m-1">{children}</span>
      </div>
    </button>
  );
};
