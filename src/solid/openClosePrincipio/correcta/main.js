const customers = [
    new RegularCustomer('Juan'),
    new VipCustomer('Ana'),
    new StudentCustomer('Luis')
  ];
  
  customers.forEach(c => {
    console.log(`${c.name} tiene descuento de ${c.getDiscount() * 100}%`);
  });