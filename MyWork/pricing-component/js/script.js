let pricing = 16.00;
let pricingInterval = "month";

function getPriceInterval(price, int) {
    if (int === "month") {
        pricing = price;
    } else {
        pricing = (price * 12) * 0.75;
    }
}

function handleSliderChange(value) {
    let pageViews = document.getElementById("pageview");
    let price = document.getElementById("price");
    switch (value) {
        case "2":
            pricing = 36;
            getPriceInterval(pricing, pricingInterval);
            document.getElementById("price-slider").setAttribute("aria-valuenow", 2);
            pageViews.innerHTML = "1M Pageviews";
            price.innerHTML = "$" + pricing.toFixed(2) + "<span class='price-span' id='price-span'> / " + pricingInterval + "</span>";
            break;
        case "1":
            pricing = 24;
            getPriceInterval(pricing, pricingInterval);
            document.getElementById("price-slider").setAttribute("aria-valuenow", 1);
            pageViews.innerHTML = "500K Pageviews";
            price.innerHTML = "$" + pricing.toFixed(2) + "<span class='price-span' id='price-span'> / " + pricingInterval + "</span>";
            break;
        case "0":
            pricing = 16;
            getPriceInterval(pricing, pricingInterval);
            document.getElementById("price-slider").setAttribute("aria-valuenow", 0);
            pageViews.innerHTML = "100K Pageviews";
            price.innerHTML = "$" + pricing.toFixed(2) + "<span class='price-span' id='price-span'> / " + pricingInterval + "</span>";
            break;
        case "-1":
            pricing = 12;
            getPriceInterval(pricing, pricingInterval);
            document.getElementById("price-slider").setAttribute("aria-valuenow", -1);
            pageViews.innerHTML = "50K Pageviews";
            price.innerHTML = "$" + pricing.toFixed(2) + "<span class='price-span' id='price-span'> / " + pricingInterval + "</span>";
            break;
        case "-2":
            pricing = 8;
            getPriceInterval(pricing, pricingInterval);
            document.getElementById("price-slider").setAttribute("aria-valuenow", -2);
            pageViews.innerHTML = "10K Pageviews";
            price.innerHTML = "$" + pricing.toFixed(2) + "<span class='price-span' id='price-span'> / " + pricingInterval + "</span>";
            break;
        default:
            break;
    }
}

function handleBillingToggle(value) {
    if (value === true) {
        pricingInterval = "year";
        document.getElementById("interval-switch").setAttribute("aria-checked", true);
        handleSliderChange(document.getElementById("price-slider").value);
    } else {
        pricingInterval = "month";
        document.getElementById("interval-switch").setAttribute("aria-checked", false);
        handleSliderChange(document.getElementById("price-slider").value);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("price-slider").addEventListener("mousedown", function () {
        this.style.outlineWidth = "0";
    });
    document.getElementById("price-slider").addEventListener("mouseup", function () {
        this.blur();
        this.style.outlineWidth = "initial";
    });
    document.getElementById("price-slider").addEventListener("mouseleave", function () {
        this.blur();
        this.style.outlineWidth = "initial";
    });
    document.getElementById("price-slider").oninput = function () {
        handleSliderChange(this.value);
        var fillTrackPct = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " + fillTrackPct + "%, hsl(224, 65%, 95%) " + fillTrackPct + "%, hsl(224, 65%, 95%) 100%)";
    };
    document.getElementById("interval-switch").oninput = function () {
        handleBillingToggle(this.checked);
    };
});