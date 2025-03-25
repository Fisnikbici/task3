import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/style.css";

const domainData = [
  { name: ".COM", price: "$5.99/yr" },
  { name: ".AI", price: "$55.99/yr" },
  { name: ".NET", price: "$7.99/yr" },
  { name: ".HEALTH", price: "$7.99/yr" },
  { name: ".CO.UK", price: "$3.99/yr" },
  { name: ".ORG", price: "$15.99/yr" },
  { name: ".CO", price: "$26.33/yr" },
  { name: ".SEA", price: "$26.33/yr" },
];

const DomainList = () => {
  return (
    <div className="domain-list-container">
      <Tabs>
        <TabList>
          <Tab>Domains</Tab>
          <Tab>Web Hosting</Tab>
          <Tab>Dedicated Servers</Tab>
          <Tab>Virtual Cloud Servers</Tab>
          <Tab>WordPress Hosting</Tab>
          <Tab>Email Hosting</Tab>
          <Tab>VPS Hosting Servers</Tab>
          <Tab>Free Hosting</Tab>
        </TabList>

        <TabPanel>
          <div className="card-container">
            {domainData.map((domain, index) => (
              <div key={index} className="card">
                <h3>{domain.name}</h3>
                <p className="price">{domain.price}</p>
                <p className="discounted-price">Instead of $10.99/yr</p>
                <button className="buy-now">Buy Now</button>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <p><div className="card-container">
            {domainData.map((domain, index) => (
              <div key={index} className="card">
                <h3>{domain.name}</h3>
                <p className="price">{domain.price}</p>
                <p className="discounted-price">Instead of $10.99/yr</p>
                <button className="buy-now">Buy Now</button>
              </div>
            ))}
          </div></p>
        </TabPanel>
        <TabPanel>
        <p><div className="card-container">
            {domainData.map((domain, index) => (
              <div key={index} className="card">
                <h3>{domain.name}</h3>
                <p className="price">{domain.price}</p>
                <p className="discounted-price">Instead of $10.99/yr</p>
                <button className="buy-now">Buy Now</button>
              </div>
            ))}
          </div></p>
        </TabPanel>
        <TabPanel>
        <p><div className="card-container">
            {domainData.map((domain, index) => (
              <div key={index} className="card">
                <h3>{domain.name}</h3>
                <p className="price">{domain.price}</p>
                <p className="discounted-price">Instead of $10.99/yr</p>
                <button className="buy-now">Buy Now</button>
              </div>
            ))}
          </div></p>
        </TabPanel>
        <TabPanel>
        <p><div className="card-container">
            {domainData.map((domain, index) => (
              <div key={index} className="card">
                <h3>{domain.name}</h3>
                <p className="price">{domain.price}</p>
                <p className="discounted-price">Instead of $10.99/yr</p>
                <button className="buy-now">Buy Now</button>
              </div>
            ))}
          </div></p>
        </TabPanel>
        <TabPanel>
        <p><div className="card-container">
            {domainData.map((domain, index) => (
              <div key={index} className="card">
                <h3>{domain.name}</h3>
                <p className="price">{domain.price}</p>
                <p className="discounted-price">Instead of $10.99/yr</p>
                <button className="buy-now">Buy Now</button>
              </div>
            ))}
          </div></p>
        </TabPanel>
        <TabPanel>
        <p><div className="card-container">
            {domainData.map((domain, index) => (
              <div key={index} className="card">
                <h3>{domain.name}</h3>
                <p className="price">{domain.price}</p>
                <p className="discounted-price">Instead of $10.99/yr</p>
                <button className="buy-now">Buy Now</button>
              </div>
            ))}
          </div></p>
        </TabPanel>
        <TabPanel>
        <p><div className="card-container">
            {domainData.map((domain, index) => (
              <div key={index} className="card">
                <h3>{domain.name}</h3>
                <p className="price">{domain.price}</p>
                <p className="discounted-price">Instead of $10.99/yr</p>
                <button className="buy-now">Buy Now</button>
              </div>
            ))}
          </div></p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DomainList;