// Shows the error the API sent back (?error=<code>) and refills the form.
(function () {
  var MESSAGES = {
    missing: "Enter your email and password.",
    invalid: "Email or password is incorrect.",
    "no-password":
      "You haven't set a password yet. Use “Set your password” below.",
    "not-listed": "Error. Please contact the admins.",
    "already-set":
      "A password is already set for this email. Sign in, or ask the organisers to reset it.",
    short: "Use at least 10 characters.",
    mismatch: "The two passwords don't match.",
    unavailable: "Couldn't reach the access list. Try again in a minute.",
    config: "Sign-in isn't set up on this server yet.",
  };

  var params = new URLSearchParams(location.search);
  var error = params.get("error");
  var box = document.getElementById("error");
  if (error && box) {
    box.textContent = MESSAGES[error] || "Something went wrong. Try again.";
    box.hidden = false;
  }

  var email = document.querySelector('input[name="email"]');
  if (email && params.get("email")) email.value = params.get("email");

  // Signed out, every page shows this one at its own address; after
  // signing in, return to that address.
  var next = document.querySelector('input[name="next"]');
  if (next) {
    next.value =
      params.get("next") ||
      (location.pathname === "/login"
        ? "/"
        : location.pathname + location.search);
  }

  var focus =
    email && email.value
      ? document.querySelector('input[type="password"]')
      : email;
  if (focus) focus.focus();
})();
