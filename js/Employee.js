const rowsPerPage = 10;
let currentPage = 1;

function displayEmployees(page) {

    currentPage = page;

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    const pageEmployees = employees.slice(start, end);

    let rows = "";

    pageEmployees.forEach(emp => {

        rows += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.first}</td>
            <td>${emp.middle}</td>
            <td>${emp.last}</td>
            <td>${emp.department}</td>
            <td>${emp.location}</td>
            <td>${emp.joiningDate}</td>
        </tr>
        `;

    });

    document.getElementById("employeeTable").innerHTML = rows;

    renderPagination();
}

function renderPagination() {

    const totalPages = Math.ceil(employees.length / rowsPerPage);

    let buttons = "";

    // Previous button
    buttons += `
        <button
            onclick="displayEmployees(${currentPage - 1})"
            ${currentPage === 1 ? "disabled" : ""}>
            Previous
        </button>
    `;

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {

        buttons += `
            <button
                onclick="displayEmployees(${i})"
                style="${i === currentPage ? 'background:#4f46e5;color:white;' : ''}">
                ${i}
            </button>
        `;
    }

    // Next button
    buttons += `
        <button
            onclick="displayEmployees(${currentPage + 1})"
            ${currentPage === totalPages ? "disabled" : ""}>
            Next
        </button>
    `;

    document.getElementById("pagination").innerHTML = buttons;
}

if(localStorage.getItem("loggedIn")!="true"){

window.location.href="index.html";

}

const employees = [
{"id":1001,"first":"Anthony","middle":"SAM","last":"Gonsalvis","department":"IT","location":"Delhi","joiningDate":"2020-01-15"},
{"id":1002,"first":"Rahul","middle":"Singh","last":"Verma","department":"HR","location":"Noida","joiningDate":"2019-03-22"},
{"id":1003,"first":"Priya","middle":"Rani","last":"Gupta","department":"Finance","location":"Pune","joiningDate":"2021-07-10"},
{"id":1004,"first":"Neha","middle":"Kumari","last":"Yadav","department":"Sales","location":"Hyderabad","joiningDate":"2018-09-14"},
{"id":1005,"first":"Ankit","middle":"Raj","last":"Mishra","department":"Support","location":"Bengaluru","joiningDate":"2022-02-05"},
{"id":1006,"first":"Pooja","middle":"Devi","last":"Agarwal","department":"Marketing","location":"Delhi","joiningDate":"2020-05-18"},
{"id":1007,"first":"Vikas","middle":"Kumar","last":"Jain","department":"IT","location":"Noida","joiningDate":"2017-11-11"},
{"id":1008,"first":"Sneha","middle":"R","last":"Kapoor","department":"Finance","location":"Gurugram","joiningDate":"2019-08-29"},
{"id":1009,"first":"Sandeep","middle":"Kumar","last":"Patel","department":"Sales","location":"Pune","joiningDate":"2021-04-12"},
{"id":1010,"first":"Kavita","middle":"L","last":"Mehta","department":"HR","location":"Delhi","joiningDate":"2018-06-21"},
{"id":1011,"first":"Rohit","middle":"S","last":"Chauhan","department":"IT","location":"Hyderabad","joiningDate":"2023-01-09"},
{"id":1012,"first":"Deepak","middle":"K","last":"Saxena","department":"Support","location":"Bengaluru","joiningDate":"2022-08-17"},
{"id":1013,"first":"Manish","middle":"K","last":"Pandey","department":"Marketing","location":"Delhi","joiningDate":"2020-12-11"},
{"id":1014,"first":"Nidhi","middle":"A","last":"Malhotra","department":"Finance","location":"Noida","joiningDate":"2019-04-08"},
{"id":1015,"first":"Ajay","middle":"K","last":"Bansal","department":"Sales","location":"Pune","joiningDate":"2018-10-19"},
{"id":1016,"first":"Komal","middle":"P","last":"Joshi","department":"HR","location":"Gurugram","joiningDate":"2021-01-25"},
{"id":1017,"first":"Arvind","middle":"K","last":"Reddy","department":"IT","location":"Hyderabad","joiningDate":"2020-03-16"},
{"id":1018,"first":"Meena","middle":"D","last":"Nair","department":"Support","location":"Delhi","joiningDate":"2019-07-27"},
{"id":1019,"first":"Sachin","middle":"R","last":"Kulkarni","department":"Marketing","location":"Pune","joiningDate":"2022-09-09"},
{"id":1020,"first":"Ritu","middle":"S","last":"Arora","department":"Finance","location":"Noida","joiningDate":"2018-02-13"},
{"id":1021,"first":"Mohit","middle":"K","last":"Soni","department":"IT","location":"Bengaluru","joiningDate":"2021-06-30"},
{"id":1022,"first":"Shweta","middle":"P","last":"Bhatt","department":"HR","location":"Delhi","joiningDate":"2020-04-04"},
{"id":1023,"first":"Nitin","middle":"R","last":"Dubey","department":"Sales","location":"Hyderabad","joiningDate":"2017-12-20"},
{"id":1024,"first":"Payal","middle":"A","last":"Thakur","department":"Marketing","location":"Gurugram","joiningDate":"2019-11-15"},
{"id":1025,"first":"Harish","middle":"K","last":"Tiwari","department":"Support","location":"Noida","joiningDate":"2022-05-24"},
{"id":1026,"first":"Anjali","middle":"R","last":"Desai","department":"Finance","location":"Pune","joiningDate":"2021-08-06"},
{"id":1027,"first":"Karan","middle":"Jauhar","last":"Gill","department":"IT","location":"Delhi","joiningDate":"2018-03-17"},
{"id":1028,"first":"Divya","middle":"Sakshi","last":"Iyer","department":"HR","location":"Hyderabad","joiningDate":"2020-10-12"},
{"id":1029,"first":"Ashish","middle":"K","last":"Chopra","department":"Marketing","location":"Bengaluru","joiningDate":"2023-02-18"},
{"id":1030,"first":"Bhavna","middle":"R","last":"Khanna","department":"Sales","location":"Noida","joiningDate":"2019-01-07"},
{"id":1031,"first":"Saurabh","middle":"K","last":"Pillai","department":"Support","location":"Delhi","joiningDate":"2022-04-15"},
{"id":1032,"first":"Rekha","middle":"M","last":"Naidu","department":"Finance","location":"Pune","joiningDate":"2021-09-28"},
{"id":1033,"first":"Gaurav","middle":"R","last":"Shetty","department":"IT","location":"Gurugram","joiningDate":"2020-11-05"},
{"id":1034,"first":"Monika","middle":"K","last":"Bora","department":"HR","location":"Hyderabad","joiningDate":"2018-05-09"},
{"id":1035,"first":"Tarun","middle":"S","last":"Rawat","department":"Marketing","location":"Delhi","joiningDate":"2019-06-26"},
{"id":1036,"first":"Jyoti","middle":"Kumari","last":"Bhardwaj","department":"Support","location":"Noida","joiningDate":"2021-12-03"},
{"id":1037,"first":"Rakesh","middle":"K","last":"Ghosh","department":"Finance","location":"Bengaluru","joiningDate":"2022-07-14"},
{"id":1038,"first":"Preeti","middle":"A","last":"Das","department":"Sales","location":"Pune","joiningDate":"2020-08-22"},
{"id":1039,"first":"Hemant","middle":"R","last":"Lal","department":"IT","location":"Delhi","joiningDate":"2019-02-11"},
{"id":1040,"first":"Sunita","middle":"K","last":"Bose","department":"HR","location":"Hyderabad","joiningDate":"2023-03-01"},
{"id":1041,"first":"Abhishek","middle":"M","last":"Roy","department":"Marketing","location":"Noida","joiningDate":"2022-01-18"},
{"id":1042,"first":"Rashmi","middle":"S","last":"Kohli","department":"Support","location":"Delhi","joiningDate":"2018-07-29"},
{"id":1043,"first":"Naveen","middle":"Kumar","last":"Purohit","department":"Finance","location":"Pune","joiningDate":"2021-05-20"},
{"id":1044,"first":"Swati","middle":"Ratan","last":"Bedi","department":"Sales","location":"Gurugram","joiningDate":"2020-09-13"},
{"id":1045,"first":"Vivek","middle":"Anant","last":"Menon","department":"IT","location":"Bengaluru","joiningDate":"2019-10-30"}
];



function logout(){

localStorage.clear();

window.location.href="index.html";

}
displayEmployees(1);
