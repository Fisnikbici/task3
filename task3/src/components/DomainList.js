import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/style.css";

const tabContent = {
  "Domains": [
    { name: ".COM", price: "$5.99/yr" },
    { name: ".AI", price: "$55.99/yr" },
    { name: ".NET", price: "$7.99/yr" },
    { name: ".HEALTH", price: "$7.99/yr" },
    { name: ".CO.UK", price: "$3.99/yr" },
    { name: ".ORG", price: "$15.99/yr" },
    { name: ".CO", price: "$26.33/yr" },
    { name: ".SEA", price: "$26.33/yr" },
  ],
  "Web Hosting": [
    { name: "Starter Plan", price: "$2.99/mo" },
    { name: "Basic Plan", price: "$4.99/mo" },
    { name: "Business Plan", price: "$7.99/mo" },
    { name: "Pro Plan", price: "$12.99/mo" },
    { name: "Elite Plan", price: "$19.99/mo" },
    { name: "Enterprise Plan", price: "$29.99/mo" },
    { name: "Unlimited Plan", price: "$39.99/mo" },
    { name: "Custom Plan", price: "$49.99/mo" },
  ],
  "Dedicated Servers": [
    { name: "Entry Server", price: "$49.99/mo" },
    { name: "Basic Server", price: "$69.99/mo" },
    { name: "Advanced Server", price: "$89.99/mo" },
    { name: "Pro Server", price: "$109.99/mo" },
    { name: "Ultra Server", price: "$129.99/mo" },
    { name: "Enterprise Server", price: "$159.99/mo" },
    { name: "Ultimate Server", price: "$199.99/mo" },
    { name: "Custom Server", price: "$249.99/mo" },
  ],
  "Virtual Cloud Servers": [
    { name: "Cloud Basic", price: "$5.99/mo" },
    { name: "Cloud Standard", price: "$9.99/mo" },
    { name: "Cloud Pro", price: "$14.99/mo" },
    { name: "Cloud Business", price: "$19.99/mo" },
    { name: "Cloud Elite", price: "$24.99/mo" },
    { name: "Cloud Enterprise", price: "$29.99/mo" },
    { name: "Cloud Ultimate", price: "$39.99/mo" },
    { name: "Cloud Custom", price: "$49.99/mo" },
  ],
  "WordPress Hosting": [
    { name: "WP Starter", price: "$3.99/mo" },
    { name: "WP Basic", price: "$6.99/mo" },
    { name: "WP Business", price: "$9.99/mo" },
    { name: "WP Pro", price: "$12.99/mo" },
    { name: "WP Advanced", price: "$15.99/mo" },
    { name: "WP Ultimate", price: "$19.99/mo" },
    { name: "WP Agency", price: "$24.99/mo" },
    { name: "WP Enterprise", price: "$29.99/mo" },
  ],
  "Email Hosting": [
    { name: "Personal Email", price: "$1.99/mo" },
    { name: "Business Email", price: "$4.99/mo" },
    { name: "Enterprise Email", price: "$7.99/mo" },
    { name: "Advanced Email", price: "$9.99/mo" },
    { name: "Secure Email", price: "$12.99/mo" },
    { name: "Premium Email", price: "$14.99/mo" },
    { name: "Unlimited Email", price: "$19.99/mo" },
    { name: "Custom Email", price: "$24.99/mo" },
  ],
  "VPS Hosting Servers": [
    { name: "VPS Starter", price: "$9.99/mo" },
    { name: "VPS Basic", price: "$14.99/mo" },
    { name: "VPS Standard", price: "$19.99/mo" },
    { name: "VPS Business", price: "$24.99/mo" },
    { name: "VPS Pro", price: "$29.99/mo" },
    { name: "VPS Advanced", price: "$34.99/mo" },
    { name: "VPS Ultimate", price: "$39.99/mo" },
    { name: "VPS Custom", price: "$49.99/mo" },
  ],
  "Free Hosting": [
    { name: "Basic Free", price: "$0.00" },
    { name: "Starter Free", price: "$0.00" },
    { name: "Limited Free", price: "$0.00" },
    { name: "Basic Plus", price: "$0.00" },
    { name: "Freemium", price: "$0.00" },
    { name: "Open Hosting", price: "$0.00" },
    { name: "Beginner Plan", price: "$0.00" },
    { name: "Test Plan", price: "$0.00" },
  ],
};

const DomainList = () => {
  return (
    <div className="domain-list-container">
      <Tabs>
        <TabList>
          {Object.keys(tabContent).map((tab, index) => (
            <Tab key={index}>{tab}</Tab>
          ))}
        </TabList>

        {Object.entries(tabContent).map(([tab, items], index) => (
          <TabPanel key={index}>
            <div className="card-container">
              {items.map((item, idx) => (
                <div key={idx} className="card">
                  <h3>{item.name}</h3>
                  <p className="price">{item.price}</p>
                  <button className="buy-now">Buy Now</button>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default DomainList;
