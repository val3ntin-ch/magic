import { describe } from "riteway";
import match from "riteway/match";
import render from "riteway/render-component";
import SignIn from "./signIn";

describe("sign in component", async (assert) => {
  const label = "Sign in to your account";
  const $ = render(<SignIn />);
  const contains = match($.html());
  assert({
    given: "no props",
    should: "render the sign in email label",
    expected: label,
    actual: contains(label),
  });
});
