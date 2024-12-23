import { FunctionComponent } from "preact";
import { useWindowWidth } from "../hooks/useWindowWidth.ts";

const Hero: FunctionComponent = ({ children }) => {
  const width = useWindowWidth();

  return (
    <div
      className={`bg-dark bg-cover bg-fixed pb-20 mb-20`}
      style={{
        backgroundImage: `url(/image/forest1?width=${
          typeof width === "number" ? width : "smallest"
        })`,
      }}
    >
      <div
        class="px-4 py-20 mx-auto text-white"
        style={{
          backgroundColor: "hsla(273.33, 9.89%, 17.84%, 0.6)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Hero;
