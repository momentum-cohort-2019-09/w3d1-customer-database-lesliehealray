// const capitalize = str => str[0].toUpperCase() + str.slice(1)


function customersToHtml (customer){
    let registration_date = moment(customer.registered).format('MMMM Do YYYY');
    let dob_date = moment(customer.dob).format('MMMM Do YYYY');
return `
<div class="customers">
    <img src=${customer.picture.large}>
    <div class="customer-name">${customer.name.first} ${customer.name.last}</div>
    <div class="email">${customer.email}</div>
    <div class="customer-locations">
        <span class="customer-location">${customer.location.street}</span>
        <span class="customer-location"> ${customer.location.city}</span>
        <span class="customer-location"> ${nameToAbbr(customer.location.state)}</span>
        <span class="customer-location"> ${customer.location.postcode}</span>
    </div>
    <div class="dob">DOB: ${dob_date}</div>
    <div class="customer-registered">Registered: ${registration_date}</div>
    
</div>`

}
document.querySelector('.container').innerHTML = customers.map(customersToHtml).join('\n');

