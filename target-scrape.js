// Scrape Receipt from Target

javascript:(() => {

let receipt = document.querySelector('[data-test="package-card-item-row"]');
let elements = Array.from(receipt.children);

let extract = (e) => {
    let details = e.children[0].children[1].children;
    
    let name = details[0].textContent;
    let price = details[1].textContent;
    price = price.split(" ")[0];
    price = price.substring(1);
    price = parseFloat(price);
    let qty = details[2].textContent;
    qty = qty.substring("Qty ".length);
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