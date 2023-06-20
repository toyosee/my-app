// Perform a Map reduce operation
// Defining two functions in the Map Reduce Method
// The map reduce outputs results inline rather than create a separate collection

db.customers.mapReduce(
    // Map function
    function() {
      customerId = this._id;
      zipCode = this.address.zip;
  
      // looking up orders for the current customer. to perform the join
      orders = db.orders.find({ customer: customerId });
  
      // Next we will iterate through orders collection to emit zipcode and item quantity
      orders.forEach(function(order) {
        // setting total quantity to 0
        totalQuantity = 0;
        order.items.forEach(function(item) {
          // appending quantity to total quantity
          totalQuantity += item.qty;
        });
        emit(zipCode, totalQuantity);
      });
    },
  
    // Reduce function
    function(key, values) {
      return Array.sum(values);
    },
  
    // Output collection
    {
      out: "zipCodeReport"
    }
  );
  
  // Retrieve and Print the zip codes
  zipCodeReportCursor = db.getCollection("zipCodeReport").find();
  // initializing count to count the occurrence of zip codes
  count = 0;
  
  // Loop through the collection and save result in variable doc
  while (zipCodeReportCursor.hasNext()) {
    doc = zipCodeReportCursor.next();
    print("Zip Code: " + doc._id + ', Items Sold: ' + doc.value);
    count++;
  }
  
  // print out total number of zip codes which will equal 51
  print("Total Count: " + count);
  