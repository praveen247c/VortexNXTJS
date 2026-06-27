// Auto-generated from the AIOS connector registry (compiled_at 2026-06-25T04:21:01+00:00).
// Source of truth: storage/app/vortex_mind/compiled/connector_registry.json
// 93 live, 15 planned. Regenerate when the catalogue grows.

export type Connector = { name: string; category: string; status: "live" | "planned"; url: string };

export const CONNECTOR_STATS = { live: 93, planned: 15, total: 108 };

export const CONNECTOR_CATEGORIES: string[] = [
  "Advertising",
  "Analytics",
  "CMS",
  "Databases & warehouses",
  "ERP",
  "Ecommerce platforms",
  "Email & marketing",
  "Marketplaces",
  "Monitoring",
  "Notifications",
  "Payments",
  "Performance",
  "Project management",
  "Shipping & fulfilment",
  "Social",
  "Support & helpdesk",
  "Wholesale & B2B"
];

export const CONNECTORS: Connector[] = [
  {
    "name": "AdRoll",
    "category": "Advertising",
    "status": "live",
    "url": "https://www.adroll.com"
  },
  {
    "name": "Amazon Ads",
    "category": "Advertising",
    "status": "live",
    "url": "https://advertising.amazon.com"
  },
  {
    "name": "Criteo",
    "category": "Advertising",
    "status": "live",
    "url": "https://www.criteo.com"
  },
  {
    "name": "Google Ads",
    "category": "Advertising",
    "status": "live",
    "url": "https://ads.google.com"
  },
  {
    "name": "LinkedIn Ads",
    "category": "Advertising",
    "status": "live",
    "url": "https://www.linkedin.com/campaignmanager"
  },
  {
    "name": "MediaMath (T1)",
    "category": "Advertising",
    "status": "live",
    "url": "https://www.mediamath.com"
  },
  {
    "name": "Meta Ads (Facebook)",
    "category": "Advertising",
    "status": "live",
    "url": "https://business.facebook.com"
  },
  {
    "name": "Microsoft Ads (Bing)",
    "category": "Advertising",
    "status": "live",
    "url": "https://ads.microsoft.com"
  },
  {
    "name": "Outbrain",
    "category": "Advertising",
    "status": "live",
    "url": "https://www.outbrain.com"
  },
  {
    "name": "Pinterest Ads",
    "category": "Advertising",
    "status": "live",
    "url": "https://business.pinterest.com"
  },
  {
    "name": "Quora Ads",
    "category": "Advertising",
    "status": "live",
    "url": "https://www.quora.com/business"
  },
  {
    "name": "Snapchat Ads",
    "category": "Advertising",
    "status": "live",
    "url": "https://ads.snapchat.com"
  },
  {
    "name": "StackAdapt",
    "category": "Advertising",
    "status": "live",
    "url": "https://www.stackadapt.com"
  },
  {
    "name": "Taboola",
    "category": "Advertising",
    "status": "live",
    "url": "https://www.taboola.com"
  },
  {
    "name": "The Trade Desk",
    "category": "Advertising",
    "status": "live",
    "url": "https://www.thetradedesk.com"
  },
  {
    "name": "TikTok Ads",
    "category": "Advertising",
    "status": "live",
    "url": "https://ads.tiktok.com"
  },
  {
    "name": "Amplitude",
    "category": "Analytics",
    "status": "live",
    "url": "https://amplitude.com"
  },
  {
    "name": "FullStory",
    "category": "Analytics",
    "status": "live",
    "url": "https://www.fullstory.com"
  },
  {
    "name": "Google Analytics 4",
    "category": "Analytics",
    "status": "live",
    "url": "https://analytics.google.com"
  },
  {
    "name": "Google Search Console",
    "category": "Analytics",
    "status": "live",
    "url": "https://search.google.com/search-console"
  },
  {
    "name": "Google Tag Manager",
    "category": "Analytics",
    "status": "live",
    "url": "https://tagmanager.google.com"
  },
  {
    "name": "Microsoft Clarity",
    "category": "Analytics",
    "status": "live",
    "url": "https://clarity.microsoft.com"
  },
  {
    "name": "Mixpanel",
    "category": "Analytics",
    "status": "live",
    "url": "https://mixpanel.com"
  },
  {
    "name": "PostHog",
    "category": "Analytics",
    "status": "live",
    "url": "https://posthog.com"
  },
  {
    "name": "WordPress",
    "category": "CMS",
    "status": "live",
    "url": "https://wordpress.org"
  },
  {
    "name": "ClickHouse",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://clickhouse.com"
  },
  {
    "name": "CockroachDB",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://www.cockroachlabs.com"
  },
  {
    "name": "Databricks",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://www.databricks.com"
  },
  {
    "name": "Elasticsearch",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://www.elastic.co/elasticsearch"
  },
  {
    "name": "MariaDB",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://mariadb.org"
  },
  {
    "name": "MongoDB",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://www.mongodb.com"
  },
  {
    "name": "MySQL",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://www.mysql.com"
  },
  {
    "name": "PostgreSQL",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://www.postgresql.org"
  },
  {
    "name": "Redis",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://redis.io"
  },
  {
    "name": "Snowflake",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://www.snowflake.com"
  },
  {
    "name": "Supabase",
    "category": "Databases & warehouses",
    "status": "live",
    "url": "https://supabase.com"
  },
  {
    "name": "Adobe Commerce",
    "category": "Ecommerce platforms",
    "status": "live",
    "url": "https://business.adobe.com/products/magento/magento-commerce.html"
  },
  {
    "name": "BigCommerce",
    "category": "Ecommerce platforms",
    "status": "live",
    "url": "https://www.bigcommerce.com"
  },
  {
    "name": "CloudHub Insights",
    "category": "Ecommerce platforms",
    "status": "live",
    "url": "https://www.247commerce.co.uk"
  },
  {
    "name": "Ecwid by Lightspeed",
    "category": "Ecommerce platforms",
    "status": "live",
    "url": "https://www.ecwid.com"
  },
  {
    "name": "OpenCart",
    "category": "Ecommerce platforms",
    "status": "live",
    "url": "https://www.opencart.com"
  },
  {
    "name": "Salesforce Commerce Cloud (B2C)",
    "category": "Ecommerce platforms",
    "status": "live",
    "url": "https://www.salesforce.com/products/commerce/"
  },
  {
    "name": "Shopify",
    "category": "Ecommerce platforms",
    "status": "live",
    "url": "https://www.shopify.com"
  },
  {
    "name": "Shopline",
    "category": "Ecommerce platforms",
    "status": "live",
    "url": "https://www.shopline.com"
  },
  {
    "name": "Square Online",
    "category": "Ecommerce platforms",
    "status": "live",
    "url": "https://squareup.com/us/en/online-store"
  },
  {
    "name": "WooCommerce",
    "category": "Ecommerce platforms",
    "status": "live",
    "url": "https://woocommerce.com"
  },
  {
    "name": "Dotdigital",
    "category": "Email & marketing",
    "status": "live",
    "url": "https://dotdigital.com"
  },
  {
    "name": "HubSpot",
    "category": "Email & marketing",
    "status": "live",
    "url": "https://www.hubspot.com"
  },
  {
    "name": "Klaviyo",
    "category": "Email & marketing",
    "status": "live",
    "url": "https://klaviyo.com"
  },
  {
    "name": "Mailchimp",
    "category": "Email & marketing",
    "status": "live",
    "url": "https://mailchimp.com"
  },
  {
    "name": "Microsoft Dynamics 365 Finance",
    "category": "ERP",
    "status": "live",
    "url": "https://dynamics.microsoft.com/en-us/finance/"
  },
  {
    "name": "NetSuite ERP",
    "category": "ERP",
    "status": "live",
    "url": "https://www.netsuite.com"
  },
  {
    "name": "Oracle ERP Cloud (Fusion)",
    "category": "ERP",
    "status": "live",
    "url": "https://www.oracle.com/erp/"
  },
  {
    "name": "Sage Intacct / Business Cloud",
    "category": "ERP",
    "status": "live",
    "url": "https://www.sage.com"
  },
  {
    "name": "SAP S/4HANA Cloud",
    "category": "ERP",
    "status": "live",
    "url": "https://www.sap.com/products/erp.html"
  },
  {
    "name": "AbeBooks",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://www.abebooks.com"
  },
  {
    "name": "Alibaba.com (B2B)",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://www.alibaba.com"
  },
  {
    "name": "Alibris",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://www.alibris.com"
  },
  {
    "name": "AliExpress",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://sell.aliexpress.com"
  },
  {
    "name": "Amazon (Selling Partner)",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://sellercentral.amazon.com"
  },
  {
    "name": "Bonanza",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://www.bonanza.com"
  },
  {
    "name": "Depop",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://www.depop.com"
  },
  {
    "name": "eBay",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://www.ebay.com"
  },
  {
    "name": "Etsy",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://www.etsy.com/sell"
  },
  {
    "name": "Fruugo",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://merchants.fruugo.com"
  },
  {
    "name": "JD.com",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://jos.jd.com"
  },
  {
    "name": "Mercari",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://www.mercari.com"
  },
  {
    "name": "Newegg",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://sellerportal.newegg.com"
  },
  {
    "name": "OnBuy",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://www.onbuy.com"
  },
  {
    "name": "Target Plus",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://plus.target.com"
  },
  {
    "name": "Vinted",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://www.vinted.com"
  },
  {
    "name": "Walmart Marketplace",
    "category": "Marketplaces",
    "status": "live",
    "url": "https://marketplace.walmart.com"
  },
  {
    "name": "Datadog",
    "category": "Monitoring",
    "status": "live",
    "url": "https://www.datadoghq.com"
  },
  {
    "name": "New Relic",
    "category": "Monitoring",
    "status": "live",
    "url": "https://newrelic.com"
  },
  {
    "name": "Email Notifications",
    "category": "Notifications",
    "status": "live",
    "url": "https://www.vortexiq.ai"
  },
  {
    "name": "Adyen",
    "category": "Payments",
    "status": "live",
    "url": "https://www.adyen.com"
  },
  {
    "name": "CyberSource",
    "category": "Payments",
    "status": "live",
    "url": "https://www.cybersource.com"
  },
  {
    "name": "PayPal",
    "category": "Payments",
    "status": "live",
    "url": "https://www.paypal.com"
  },
  {
    "name": "Stripe",
    "category": "Payments",
    "status": "live",
    "url": "https://stripe.com"
  },
  {
    "name": "Viva Payments",
    "category": "Payments",
    "status": "planned",
    "url": "https://www.vivapayments.com"
  },
  {
    "name": "Website Performance (PageSpeed + CrUX)",
    "category": "Performance",
    "status": "live",
    "url": "https://pagespeed.web.dev"
  },
  {
    "name": "Jira",
    "category": "Project management",
    "status": "live",
    "url": "https://www.atlassian.com/software/jira"
  },
  {
    "name": "Amazon Prime Shipping (SFP)",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://sellercentral.amazon.com"
  },
  {
    "name": "APC Overnight",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://www.apc-overnight.com"
  },
  {
    "name": "Australia Post",
    "category": "Shipping & fulfilment",
    "status": "live",
    "url": "https://developers.auspost.com.au"
  },
  {
    "name": "Bring (Posten Norge)",
    "category": "Shipping & fulfilment",
    "status": "live",
    "url": "https://developer.bring.com"
  },
  {
    "name": "Deutsche Post / DHL Parcel",
    "category": "Shipping & fulfilment",
    "status": "live",
    "url": "https://developer.dhl.com"
  },
  {
    "name": "DHL InExpress",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://developer.dhl.com"
  },
  {
    "name": "DPD",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://www.dpd.co.uk"
  },
  {
    "name": "DPDLocal",
    "category": "Shipping & fulfilment",
    "status": "live",
    "url": "https://www.dpdlocal.co.uk"
  },
  {
    "name": "EasyPost",
    "category": "Shipping & fulfilment",
    "status": "live",
    "url": "https://www.easypost.com"
  },
  {
    "name": "Evri (formerly Hermes UK)",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://www.evri.com"
  },
  {
    "name": "FedEx",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://www.fedex.com/en-us/developer.html"
  },
  {
    "name": "Interlink Express",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://www.interlinkexpress.com"
  },
  {
    "name": "Japan Post (EMS / Yu-Pack)",
    "category": "Shipping & fulfilment",
    "status": "live",
    "url": "https://www.post.japanpost.jp"
  },
  {
    "name": "NetDispatch",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://www.netdespatch.com"
  },
  {
    "name": "Parcelforce Worldwide",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://www.parcelforce.com"
  },
  {
    "name": "PostNord",
    "category": "Shipping & fulfilment",
    "status": "live",
    "url": "https://developer.postnord.com"
  },
  {
    "name": "Royal Mail",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://developer.royalmail.net"
  },
  {
    "name": "Sendle",
    "category": "Shipping & fulfilment",
    "status": "live",
    "url": "https://developers.sendle.com"
  },
  {
    "name": "ShipBob",
    "category": "Shipping & fulfilment",
    "status": "live",
    "url": "https://www.shipbob.com"
  },
  {
    "name": "Shippo",
    "category": "Shipping & fulfilment",
    "status": "live",
    "url": "https://goshippo.com"
  },
  {
    "name": "ShippyPro",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://www.shippypro.com"
  },
  {
    "name": "ShipTheory",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://www.shiptheory.com"
  },
  {
    "name": "USPS",
    "category": "Shipping & fulfilment",
    "status": "planned",
    "url": "https://www.usps.com/business/web-tools-apis"
  },
  {
    "name": "Instagram",
    "category": "Social",
    "status": "live",
    "url": "https://www.instagram.com"
  },
  {
    "name": "Intercom",
    "category": "Support & helpdesk",
    "status": "live",
    "url": "https://www.intercom.com"
  },
  {
    "name": "Costco SIP",
    "category": "Wholesale & B2B",
    "status": "planned",
    "url": "https://www.costco.com/supplier"
  }
];
