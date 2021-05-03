import { uselocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = uselocation;
  console.log(location);
  return (
    <div>
      <h1>Page1DetailAです。</h1>
    </div>
  );
};
