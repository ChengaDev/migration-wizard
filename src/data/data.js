const data = {
  destination: {
    objects: [
      {
        fields: [
          "accountid",
          "name",
          "fax",
          "telephone1",
          "websiteurl",
          "parentaccountid",
          "Description",
          "address1_city",
          "address1_country",
        ],
        name: "accounts",
        display_name: "Account",
      },
      {
        fields: [
          "contactid",
          "firstname",
          "lastname",
          "jobtitle",
          "parentcostumerid",
          "emailaddress1",
          "mobilephone",
          "fax",
        ],
        name: "contacts",
        display_name: "Contact",
      },
    ],
  },
  source: {
    objects: [
      {
        fields: [
          "Id (accountid)",
          "Name (name)",
          "Fax (fax)",
          "Phone (telephone1)",
          "Website (websiteurl)",
          "ParentId (parentaccountid)",
          "BillingCity (address1_city)",
          "BillingCountry (address1_country)",
        ],
        name: "accounts",
        display_name: "Account",
      },
      {
        fields: [
          "Id (contactid)",
          "FirstName (firstname)",
          "LastName (lastname)",
          "Title (jobtitle)",
          "Email (emailaddress1)",
          "MobilePhone (mobilephone)",
          "Fax (fax)",
          "AccountId (parentcostumerid)",
        ],
        name: "contacts",
        display_name: "Contacts",
      },
    ],
  },
};

export default data;
