import { useRef } from "react";

function Modal(props) {
  const dialogRef = useRef(null);

  if (!props.isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={(e) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target)) {
          props.onCloseRequested();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="bg-white p-6 rounded shadow-lg w-96"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">
            {props.headerLabel}
          </h2>

          <button
            aria-label="Close"
            onClick={props.onCloseRequested}
          >
            X
          </button>
        </div>

        {props.children}
      </div>
    </div>
  );
}

export default Modal;
