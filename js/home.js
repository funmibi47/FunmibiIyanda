const sec = document.querySelectorAll(".sec")
const nav_default = document.querySelector(".nav_default")
const body = document.querySelector('.body')

function change(obj) {
    let id = obj.getAttribute('id');
    if (id) {
        sec.forEach(function (sub_section) {
            sub_section.classList.add("hidden")
        })
        let section = document.querySelector('.' + id)
        section.classList.remove("hidden")
        section.classList.add("fadeout")
        nav_default.classList.add("fadeout")
        setTimeout(function () {
            section.classList.remove("fadeout")
            nav_default.classList.remove("fadeout")
            section.style.opacity = "1"
            nav_default.style.opacity = "1"
        }, 2000)


    }
}

function change2(id){
    const btn = document.getElementById(id);
    btn.click()
}

function tab(obj){
    let nav_item = document.querySelectorAll('.nav-item')
    let nav_link = document.querySelectorAll('.nav-link')
    nav_item.forEach(function(item){
        item.classList.remove('active')
    })
    obj.classList.add('active')
}

// Select all columns inside divs with the class "column_"
const columns_= document.querySelectorAll('.column_')

// Add event listener to each image for hover (mouseover)
columns_.forEach(column_ => {
    column_.addEventListener('mouseover', function(){
        let id = this.getAttribute('id')
        let modal_body = document.querySelector('.modal-body')
        id = Number(id) - 1
        modal_body.innerHTML = '<b> <h5>' + contents[id].name + '</h5></b>'
         + contents[id].sub1 + '<br><small> ' + contents[id].sub2 + 
         '<br></small><a href="'+contents[id].sub3 +'"> Project Link</a><br> '
        this.setAttribute('data-bs-toggle', 'modal');
        this.setAttribute('data-bs-target', '#Popup');
      
    })
})


let contents = [
    { name: 'Workforce Attrition Dashboard', sub1: 'Power BI, SQL', sub2: 'Conducted a comprehensive analysis of employee attrition,'+ 
        'satisfaction, income, and performance across departments using Power BI. Developed interactive dashboards to visualize key'+
        ' metrics, uncovering trends such as high turnover in Operations linked to low satisfaction scores. '+
        'Delivered actionable insights to support HR decisions, including salary adjustment recommendations and strategies to improve'+
        ' retention for employees within the 3–5 year tenure range. Utilized advanced Power BI features like measures and calculated '+
        'columns to streamline reporting and enhance data driven decision making.', sub3: 'https://github.com/funmibi47/Workforce-Attrition-Dashboard'},
    { name: 'Product Sales & Customer Segmentation Dashboard', sub1: 'Power BI, Excel', sub2: 'I developed an interactive dashboard to'+
        'analyze product sales, customer behavior, and regional demand, providing a comprehensive'+
        'view of business performance. The analysis identified top-selling products and high-volume'+
        'customers, while visualizing production costs against prices to evaluate product profitability.'+
        'I also tracked purchasing trends over time and segmented product preferences by customer type,'+
        'delivering insights that informed inventory planning and targeted marketing strategies.', sub3: 'https://github.com/funmibi47/Product-Sales-Customer-Segmentation',},
    { name: 'Employee Turnover Analysis ', sub1: 'Tableau, SQL', sub2: 'I analyzed HR data from a mid-sized organization '+
        'to identify key patterns contributing to employee turnover. The analysis revealed that departments '+
        'with low management engagement experienced 22% higher attrition rates. I built interactive dashboards '+
        'to visualize retention metrics and turnover trends, providing actionable insights to support strategic '+
        'HR planning and improve employee retention efforts.', sub3: 'https://github.com/funmibi47/Employee-Turnover-Analysis',},
    { name: 'Industry Layoff Reporting ', sub1: 'SQL, Excel', sub2: 'I cleaned and standardized a large dataset '+
        'on tech layoffs by company and location, ensuring consistency and accuracy for analysis. Using SQL '+
        'joins and aggregation queries, I generated summary reports that highlighted key trends and totals. '+
        'This process enabled seamless integration into visualizations and created stakeholder-ready reports '+
        'for effective data-driven communication.', sub3: 'https://github.com/funmibi47/Industry-Layoff-Reporting',},
    { name: 'Video Game Sales Insights ', sub1: 'Tableau, Excel', sub2: 'I cleaned and prepared global video game sales data '+
        'to ensure accuracy and consistency for analysis. I then created interactive dashboards to '+
        'track sales trends by region and genre, delivering visual insights into top-performing platforms '+
        'and publishers. These insights supported strategic decision-making for market targeting and performance evaluation.', sub3: 'https://github.com/funmibi47/Video-Game-Sales-Insights',},
]