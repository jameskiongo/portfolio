function Modal1({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed z-[1] inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl mb-4">Modal Title</h2>
          <p className="mb-4">This is the modal content.</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal1;
