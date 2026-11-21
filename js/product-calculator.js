(() => {
  const locales = { ca: 'ca-ES', es: 'es-ES', en: 'en-GB' };

  document.querySelectorAll('[data-price-calculator]').forEach((root) => {
    const language = root.dataset.language in locales ? root.dataset.language : 'es';
    const currency = new Intl.NumberFormat(locales[language], { style: 'currency', currency: 'EUR' });
    const quantities = [...root.querySelectorAll('[data-quantity]')];
    const itemCount = root.querySelector('[data-item-count]');
    const subtotal = root.querySelector('[data-subtotal]');
    const discount = root.querySelector('[data-discount]');
    const total = root.querySelector('[data-total]');

    function update() {
      let units = 0;
      let amount = 0;
      let savings = 0;
      quantities.forEach((input) => {
        const requested = Number(input.value);
        const quantity = Number.isFinite(requested) && requested > 0 ? Math.floor(requested) : 0;
        const unitPrice = Number(input.dataset.unitPrice);
        const minimumPrice = Number(input.dataset.minimumPrice);
        const minimumQuantity = Number(input.dataset.minimumQuantity);
        let discountRate = 0;
        if (quantity >= 2) {
          const maximumDiscountRate = 1 - minimumPrice / unitPrice;
          const progress = Math.min(1, (quantity - 2) / (minimumQuantity - 2));
          discountRate = 0.05 + progress * (maximumDiscountRate - 0.05);
        }
        const currentUnitPrice = Math.max(minimumPrice, unitPrice * (1 - discountRate));
        const lineAmount = quantity * unitPrice;
        units += quantity;
        amount += lineAmount;
        savings += quantity * (unitPrice - currentUnitPrice);
        const currentPriceOutput = input.closest('.calculator-product')?.querySelector('[data-current-unit-price]');
        if (currentPriceOutput) currentPriceOutput.textContent = currency.format(currentUnitPrice);
      });

      itemCount.textContent = String(units);
      subtotal.textContent = currency.format(amount);
      discount.textContent = currency.format(savings);
      total.textContent = currency.format(amount - savings);
    }

    quantities.forEach((input) => {
      input.addEventListener('input', update);
      input.addEventListener('change', () => {
        const value = Number(input.value);
        input.value = String(Number.isFinite(value) && value > 0 ? Math.floor(value) : 0);
        update();
      });
    });

    update();
  });
})();
