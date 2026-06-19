// Small floating notification used to confirm actions to the user
// (e.g. "New Book Added!"). It disappears on its own after `duration` ms,
// but can also be dismissed early with the close button.
import { useEffect } from "react";

function Toast({ message, type = "success", duration = 2500, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const icon = type === "success" ? "✅" : "⚠️";

  return (
    <div className={`toast toast-${type}`} role="status">
      <span className="toast-icon">{icon}</span>
      <span className="toast-message">{message}</span>
      <button
        type="button"
        className="toast-close"
        onClick={onClose}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;
