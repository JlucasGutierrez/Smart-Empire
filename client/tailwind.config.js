const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/components/filter/filterphone/filterjsx.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});