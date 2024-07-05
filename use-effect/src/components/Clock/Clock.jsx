import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [locale, setLocale] = useState("EN-us");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick");
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleButtonClick = () => {
    if (locale === "EN-us") {
      setLocale("EN-uk");
      return;
    }
    setLocale("EN-us");
  };

  return (
    <>
      <h3>{time.toLocaleTimeString(locale)}</h3>
      <button onClick={handleButtonClick}>
        {locale === "EN-us" ? "24 Hour" : "12 Hour"}
      </button>
    </>
  );
};
export default Clock;
