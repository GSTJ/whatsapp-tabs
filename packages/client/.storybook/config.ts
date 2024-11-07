import { configure, addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

addParameters({
  backgrounds: [{ name: "whatsapp", value: "#E5DDD5", default: true }]
});
addDecorator(withKnobs);
const req = require.context("../src", true, /\.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
