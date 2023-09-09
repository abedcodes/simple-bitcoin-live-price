import { useState } from "react";
import Bitcoin from "./Bitcoin";
import Swal from "sweetalert2";

export default function App() {
  const [showBitcoin, setShowBitcoin] = useState(true);

  function toggleBitcoin() {
    Swal.fire({
      title: showBitcoin ? "remove bitcoin?" : "add bitcoin?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      icon: "question",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(showBitcoin ? "removed" : "added", "", "success");
        setShowBitcoin(!showBitcoin);
      } else if (result.isDenied) {
        // Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-2 h-full">
        {showBitcoin && <Bitcoin />}
        <button
          onClick={toggleBitcoin}
          className="bg-blue-500 rounded-sm text-white px-8 py-1"
        >
          {showBitcoin ? "Remove Bitcoin" : "Display Bitcoin"}
        </button>
      </div>
    </>
  );
}
