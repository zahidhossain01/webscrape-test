// Scrape Receipt from Ikea

javascript:(() => {

let receipt = document.getElementById("product-list");
let elements = Array.from(receipt.children);

let extract = (e) => {
    let details = e.children[0].children;
    let subDetails = details[0].children[1].children;

    let name = subDetails[0].textContent + " - " + subDetails[1].textContent;

    let price = subDetails[2].textContent;
    price = price.substring(1);
    price = parseFloat(price);
    
    let qty = details[1].textContent;
    qty = qty.substring("Qty: ".length);
    qty = parseInt(qty);

    price *= qty;
    
    return {name: name, price: price}
}

let extracted_list = elements.map((e) => extract(e));

let output_tsv = "";

extracted_list.forEach((e) => {
    output_tsv += e.name + "\t" + e.price + "\n";
});

console.log(output_tsv);
// navigator.clipboard.writeText(output_tsv);

})();