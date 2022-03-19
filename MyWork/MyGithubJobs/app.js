// Dark mode start

let switcher = document.getElementById('switcher')
let darkMode = localStorage.getItem("darkMode");
localStorage.setItem('darkMode', 'dark-mode');

let trans = () => {
    document.documentElement.classList.add('transition')
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

function disableDarkMode() {
    trans();
    document.documentElement.setAttribute('data-theme', 'light');
    switcher.classList.remove('active');
    localStorage.setItem('darkMode', null);
}

function enableDarkModeNoTrans() {
    document.documentElement.setAttribute('data-theme', 'dark');
    switcher.classList.add('active');
    localStorage.setItem('darkMode', 'enabled');
}

function enableDarkMode() {
    trans();
    document.documentElement.setAttribute('data-theme', 'dark');
    switcher.classList.add('active');
    localStorage.setItem('darkMode', 'enabled');
}

if (darkMode == "enabled") {
    enableDarkModeNoTrans()
}

function togglingDarkMode() {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode != "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
} 

// Dark mode end

// Adjust filter component with screen size
/*
const searchBar = document.getElementById('search-bar');
const para = document.querySelector('.filter-fulltime > p');
const searchButton = document.querySelector('.search-button');
const filterLocation = document.querySelector('.filter-location')
const mobileSearchBtn = document.querySelector('.search-button-wrapper-mobile')
const filterFulltime = document.querySelector('.filter-fulltime')
const darkOverlay = document.querySelector('.dark-overlay');
const filterElement = document.querySelector('.filter');
const jobsContainer = document.getElementById('jobs');
const loader = document.getElementById('loader');
const loadMoreBtn = document.querySelector('.load-more-button');
const errorDisplay = document.querySelector('.error-display');
let companyButtonError = false;
let page = 1;

if ((window.matchMedia("(max-width: 1100px)").matches)) {
        searchBar.placeholder = "Filter by title…";
}
if ((window.matchMedia("(max-width: 1100px)").matches) &&
(window.matchMedia("(min-width: 768px)").matches)) {
    para.innerHTML = 'Full Time';
}
if ((window.matchMedia("(max-width: 768px)").matches) &&
(window.matchMedia("(min-width: 1px)").matches)) {
    searchButton.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#FFFFFF" fill-rule="nonzero"/></svg>'
}

function togglingFilterSearch() {
    filterLocation.classList.toggle('active');
    filterFulltime.classList.toggle('active');
    mobileSearchBtn.classList.toggle('active');
    darkOverlay.classList.toggle('active');
}

function checkCompanyLogo(logo) {
    if (logo == null) {
        logo = 'assets/desktop/no-logo-min.jpg'
        return logo
    } else {
        return logo
    }
    
}

function shortCompanyUrl (url) {
    if (!url || url == 'http:' || !(url.includes('.')) || url == 'http://http') {
        companyButtonError = true
        return '';
    } else {
        companyButtonError = false;
        let indexStartUrl = url.indexOf('//') + 2;
        if (url.includes('www')) {
            indexStartUrl = url.indexOf('w') + 4
        }
        let slash = '/';
        if ((url.length - 1) == url.lastIndexOf('/')) {
            url = url.substring(0, url.length - 1);
        } 
        url = url.slice(indexStartUrl);
        return url;
    }
} 

function checkCompanyUrl (url) {
    if (!url || url == 'http:' || !(url.includes('.')) || url == 'http://http') {
        companyButtonError = true
        return '';
    } else {
        return url;
    }
} 

function displayJobs(jobs, reset, inputObject) {
    if (reset) {
        jobsContainer.innerHTML = '';
    }
    jobs.forEach(job => {
        const newJob = document.createElement('div');
        newJob.classList.add('job');
        let newJobCreatedAt = job.created_at.slice(0, 16);
        newJob.setAttribute('onclick', 'onClickJob(this)');
        newJob.innerHTML = 
        `
        <div class="job-card">
                <img class="job-card-logo" src="${checkCompanyLogo(job.company_logo)}" alt="logo">
                <p class="dark-grey job-card-desc">${newJobCreatedAt}<span class="dark-grey job-circle">  .  </span>${job.type}</p>
                <p class="job-card-title header-color">${job.title}</p>
                <p class="dark-grey job-card-desc">${job.company}</p>
                <p class="violet job-card-location">${job.location}</p>
            </div>
        <div class="job-detail">
            <div class="job-detail-header">
                <img src="${checkCompanyLogo(job.company_logo)}" alt="detail-logo">
                <div class="job-detail-header-desc">
                    <div>
                        <p class="job-detail-header-title header-color">${job.company}</p>
                        <p class="job-card-desc dark-grey">${shortCompanyUrl(job.company_url)}</p>
                    </div>
                    <a href="${checkCompanyUrl(job.company_url)}" target="_blank" class="company-button">Company site</a>
                    <p class="error">No company site</p>
                </div>
            </div>
            <div class="job-detail-desc">
                <a href="${checkCompanyUrl(job.company_url)}" target="_blank" class="apply-button-desc apply-button button">Apply Now</a>
                <p class="dark-grey job-card-desc">${newJobCreatedAt} <span class="dark-grey job-circle">  .  </span> ${job.type}</p>
                <p class="job-detail-desc-title">${job.title}</p>
                <p class="violet job-card-location">${job.location}</p>
                ${job.description}
            </div>
            <div class="job-detail-apply">
                <p class="color-header px20">How to apply</p>
                ${job.how_to_apply}
            </div>
            <div class="job-detail-footer">
                <div class="job-detail-footer-wrap">
                    <p class="px20 color-header detail-footer-header">${job.title}</p>
                    <p class="dark-grey job-card-desc">${job.company}</p>
                    <a href="${job.url}" target="_blank" class="apply-button-footer apply-button button">Apply Now</a>
                </div>
            </div>
        </div>
        `

        // if no company url provided display error btn
        if (companyButtonError) {
            let companyButtonErrorPara = newJob.lastElementChild.firstElementChild.lastElementChild.lastElementChild;
            let companyButtonBtn = companyButtonErrorPara.previousElementSibling;
            companyButtonErrorPara.classList.add('active');
            companyButtonBtn.classList.add('error');
        }
        jobsContainer.appendChild(newJob)
    });
    loader.classList.remove('active');

    
    if(jobs.length == 0) {
        console.log('job = 0')
        errorDisplay.classList.add('active');
        
        let errorParagraph = errorDisplay.lastElementChild;
        if (inputObject.fulltime) {
            inputObject.fulltime = 'Fulltime';
        } else {
            inputObject.fulltime = '';
        }
        errorParagraph.innerHTML = `No <span class="header-color">${inputObject.fulltime}</span> <span class="header-color">${inputObject.search}</span> jobs found in <span class="header-color">${inputObject.location}</span>`

    } else {
        console.log('job = mult')
        errorDisplay.classList.remove('active');
        loadMoreBtn.classList.remove('displayNone');
    }
}

function getInputValues(button) {
    const search = document.querySelector('#search-bar').value;
    const location = document.querySelector('#search-location').value;
    const fulltime = document.querySelector('#check').checked;

    loader.classList.add('active');
    loadMoreBtn.classList.add('displayNone');
    errorDisplay.classList.remove('active')
    console.log(button)

    let inputObject = {
        search: search,
        location: location,
        fulltime: fulltime
    }

    if (button.classList.contains('load-more-button')) {
        page++;
    } else {
        page = 1;
    }
    getJobs(inputObject, page)
}

function getJobs(inputObject, page) {
    const proxy = "https://pacific-taiga-98536.herokuapp.com/";
    const url = `https://jobs.github.com/positions.json?description=${inputObject.search}&location=${inputObject.location}&full_time=${inputObject.fulltime}&page=${page}`; // site that doesn’t send Access-Control-*
    let reset;
    if (page != 1) {
        reset = false
    } else {
        reset = true
    }
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
                headers: myHeaders,
                mode: 'no-cors',
                cache: 'default' };
    fetch(proxy + url) 
    .then(response => response.text())
    .then(contents => displayJobs(JSON.parse(contents), reset, inputObject))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}

getInputValues(document.querySelector('.search-button'));


function onClickJob(job) {
    const allJob = document.querySelectorAll('.job')
    if (!(job.classList.contains('job-detail-on'))) {
        allJob.forEach(element => element.classList.toggle('job-detail-out'))
        job.classList.toggle('job-detail-on');
        job.classList.remove('job-detail-out');
        filterElement.classList.toggle('job-detail-out');
        jobsContainer.classList.toggle('detail-display');
        loadMoreBtn.classList.toggle('job-detail-out');
    }
}

function removeDetailDisplay() {
    const currentDetailJob = document.querySelector('.job.job-detail-on');
    const allJob = document.querySelectorAll('.job')
    allJob.forEach(element => element.classList.remove('job-detail-out'))
    currentDetailJob.classList.toggle('job-detail-on');
    filterElement.classList.remove('job-detail-out');
    jobsContainer.classList.remove('detail-display');
    loadMoreBtn.classList.toggle('job-detail-out');
}*/
function getJobs(inputObject, page) {
    //const proxy = "https://pacific-taiga-98536.herokuapp.com/";
    const url = `https://api.adzuna.com/v1/api`; // site that doesn’t send Access-Control-*
    let reset;
    if (page != 1) {
        reset = false
    } else {
        reset = true
    }
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
                headers: myHeaders,
                mode: 'no-cors',
                cache: 'default' };
    fetch(proxy + url) 
    .then(response => response.text())
    .then(contents => displayJobs(JSON.parse(contents), reset, inputObject))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}