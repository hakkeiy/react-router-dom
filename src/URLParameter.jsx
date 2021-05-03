import { useParams, useLocation } from "react-router-dom";

export const URLParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(search);
  return (
    <div>
      <h1>URLParameterです。</h1>
      <p>パラメーターは{id}です。</p>
      <p>パラメーターは{query.get("name")}です。</p>
    </div>
  );
};
