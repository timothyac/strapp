const stripe = Stripe("pk_test_B5sJrURqTEMFyyZUMHjuH3qq00AKN6tYCp");

const checkoutButton = document.getElementById(
  "checkout-button-sku_FO6OhlYrLbLeqn"
);
checkoutButton.addEventListener("click", function() {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe
    .redirectToCheckout({
      items: [{ sku: "sku_FO6OhlYrLbLeqn", quantity: 1 }],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment

      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled"
    })
    .then(function(result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        let displayError = document.getElementById("error-message");
        displayError.textContent = result.error.message;
      }
    });
});
