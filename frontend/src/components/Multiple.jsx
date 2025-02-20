import React, { useEffect } from "react";

const Multiple = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(window.location.href, "_blank", "width=800,height=600");
    }, 500); // Delay to bypass popup blockers

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return <div>Multiple</div>;
};

export default Multiple;
