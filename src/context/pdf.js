const handleGeneratePDF = (id) => {
  fetch(`https://snapbuy-backend.onrender.com/payment/orderitem/${id}/`)
    .then((res) => res.json())
    .then((info) => {
      const parent = document.getElementById("pdf-container");

      if (!parent) {
        console.error("Error: 'pdf-container' element not found in the DOM.");
        return;
      }

      parent.innerHTML = `
        <div class="d-flex justify-content-around">
          <div class="mb-4">
            <h5 class="text-uppercase">Shipping Information</h5>
            <table class="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>${info.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>${info.email}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>${info.address}</td>
                </tr>
                <tr>
                  <th>Delivered By</th>
                  <td>Pathao Courier</td>
                </tr>
                <tr>
                  <th>Transaction Id#</th>
                  <td>${info.tran_id}</td>
                </tr>
                <tr>
                  <th>Order Date</th>
                  <td>${info.buying_time}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mb-4">
            <h5 class="text-uppercase">Billing Information</h5>
            <table class="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th>Payment Method</th>
                  <td>SSLCOMMERZ</td>
                </tr>
                <tr>
                  <th>Payment Status</th>
                  <td>${info.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mb-4">
          <h5 class="text-uppercase">Order Summary</h5>
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Name</th>
                <th>Warranty</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTC AT-538 Hair & Beard Trimmer For Men</td>
                <td>1 Year Brand Warranty</td>
                <td>BDT ${info.price}</td>
                <td>${info.quantity}</td>
                <td>BDT ${info.price}</td>
              </tr>
              <tr>
                <th colspan="4" class="text-end">Sub-total</th>
                <td>BDT ${info.price}</td>
              </tr>
              <tr>
                <th colspan="4" class="text-end">Shipping</th>
                <td>BDT 50</td>
              </tr>
              <tr>
                <th colspan="4" class="text-end">Total Payments</th>
                <td>BDT <strong>${info.price + 50}</strong></td>
              </tr>
            </tbody>
          </table>
          <p class="text-muted">Vat & Tax are included on MRP.</p>
        </div>`;

      downloadPdf();
    })
    .catch((error) => {
      console.error("Error fetching data or generating PDF:", error);
    });
};

const downloadPdf = () => {
  const element = document.getElementById("pdf-container");

  if (!element) {
    console.error(
      "Error: 'pdf-container' element not found for PDF generation."
    );
    return;
  }

  const options = {
    margin: 10,
    filename: "invoice.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  html2pdf().from(element).set(options).save();
};

export { handleGeneratePDF };