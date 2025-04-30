class Discount {
    calculate(customer) {
      if (customer.type === 'regular') {
        return 0.05;
      } else if (customer.type === 'premium') {
        return 0.1;
      } else if (customer.type === 'vip') {
        return 0.2;
      }
      return 0;
    }
  }
  
  const discount = new Discount();
  console.log(discount.calculate({ type: 'vip' }));
  