// ---------------------------------------------------------------------
// Policy content for the legal / company policy pages.
// Edit text here for quick content changes — no need to touch the page.
//
// Each policy has:
//   id           unique slug used by the route/page
//   path         route URL
//   title        heading shown on the page
//   lastUpdated  "LAST UPDATED" line
//   intro        short lead paragraph (optional)
//   sections     array of blocks rendered in order. Supported block types:
//     "A paragraph of text..."          → <p>
//     { h: "Section heading" }          → <h2>
//     { ul: ["item", "item"] }          → bulleted list
// ---------------------------------------------------------------------

export const POLICIES = [
  {
    id: 'terms',
    path: '/terms',
    title: 'Terms & Conditions',
    lastUpdated: '01 November, 2025',
    intro:
      'Please read these Terms & Conditions carefully before using our website or purchasing from us. By accessing this website and/or agreeing to purchase from us, you accept and agree to be bound by the terms below.',
    sections: [
      'For the purpose of these Terms and Conditions, the terms "we", "us", "our" used anywhere on this page shall mean RAGAPI IMPEX PRIVATE LIMITED, whose registered/operational office is 10, Khasra No 708 709, Near St. Hotel, Basai Railway Road, Gurugram, Haryana, India — 122006. "you", "your", "user", "visitor" shall mean any natural or legal person visiting our website and/or agreed to purchase from us.',
      'Your use of the website and/or purchase from us are governed by the following Terms & Conditions:',
      'The content of the pages of this website is subject to change without notice.',
      'Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.',
      'Your use of any information, materials, or product pages on our website is entirely at your own risk, for which we shall not be liable. It is your responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.',
      'Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.',
      'All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.',
      'Unauthorized use of information provided by us shall give rise to a claim for damages and/or constitute a criminal offence.',
      'From time to time, our website may include links to other websites. These links are provided for your convenience to provide further information.',
      'You may not create a link to our website from another website or document without RAGAPI IMPEX PRIVATE LIMITED prior written consent.',
      'Any dispute arising out of the use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.',
      'We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any transaction, on account of the cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.',
    ],
  },

  {
    id: 'privacy',
    path: '/privacy',
    title: 'Privacy Policy',
    lastUpdated: '01 November, 2025',
    intro:
      'We respect your privacy. This policy explains what information we collect, how we use it, and the choices you can make.',
    sections: [
      'This privacy policy sets out how RAGAPI IMPEX PRIVATE LIMITED uses and protects any information that you give us when you visit our website and/or agree to purchase from us.',
      'RAGAPI IMPEX PRIVATE LIMITED is committed to ensuring that your privacy is always protected. Should we ask you to provide certain information by which your identity can be established when using this website, you can be assured that it will only be used in accordance with this privacy statement.',
      'We may change this policy from time to time by updating this page. You should check this page periodically to ensure you adhere to these changes.',
      { h: 'Information we may collect' },
      {
        ul: [
          'Name',
          'Contact information, including e-mail address',
          'Demographic information such as postcode, preferences and interests, if required',
          'Other information relevant to customer surveys and/or offers',
        ],
      },
      { h: 'What we do with the information we gather' },
      'We require this information to understand your needs and provide you with a better service, in particular for the following reasons:',
      {
        ul: [
          'Internal record keeping.',
          'We may use the information to improve our products and services.',
          'We may periodically send promotional e-mails about new products, special offers or other information we think you may find interesting, using the e-mail address you have provided.',
          'From time to time, we may also use your information to contact you for market research purposes — by e-mail, phone, fax or mail — and to customise the website according to your interests.',
        ],
      },
      'We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have put suitable measures in place.',
      { h: 'How we use cookies' },
      'A cookie is a small file which asks permission to be placed on your device. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual and to tailor operations to your needs, likes and dislikes by gathering and remembering information about your preferences.',
      'We use traffic and remarketing cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website to suit customer needs. We only use this information for statistical analysis purposes, after which the data is removed from the system.',
      'Overall, cookies help us provide you with a better website, enabling us to monitor the pages you find useful and the ones you do not. A cookie in no way gives us access to your computer or any information other than the data you choose to share with us.',
      'You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser setting to decline if you prefer. Doing so may prevent you from taking full advantage of the website.',
      { h: 'Controlling your personal information' },
      'You may choose to restrict the collection or use of your personal information in the following ways:',
      {
        ul: [
          'Whenever you are asked to fill in a form on the website, you may decline consent for your information to be used for direct marketing purposes.',
          'If you have previously agreed to us using your personal information for direct marketing, you may change your mind at any time by writing to or e-mailing us.',
        ],
      },
      'We will not sell, rent or share your personal information with third parties unless we have your permission or are required by law to do so. We may share personal information with trusted partners only for the purpose of providing you the services you have requested.',
      'If you believe that any information we hold about you is incorrect or incomplete, please write to our registered office or contact us via the details on the Contact page and we will promptly update any information found to be incorrect.',
    ],
  },

  {
    id: 'shipping-policy',
    path: '/shipping-policy',
    title: 'Shipping & Delivery Policy',
    lastUpdated: '01 November, 2025',
    intro:
      'We aim to deliver every order confidently and on time. Below are our shipping, delivery and handling timelines.',
    sections: [
      'For international and custom orders, orders are shipped and delivered through registered courier companies and/or International Speed Post only. For domestic buyers, orders are shipped through registered domestic courier companies and/or Speed Post only.',
      'Orders are shipped within a reasonable lead time or as per the delivery date agreed at the time of order confirmation, subject to courier company / postal norms. RAGAPI IMPEX PRIVATE LIMITED is not liable for any delay in delivery caused by the courier company or postal authorities, and only guarantees to hand over the consignment to the courier company or postal authorities within the agreed timeline from the date of order and payment.',
      'Delivery of all orders (and of our services) will be confirmed on the e-mail address provided at registration or checkout. For any issues with the order or services, you may contact our helpdesk — details are available on our Contact page.',
    ],
  },

  {
    id: 'refund-policy',
    path: '/refund-policy',
    title: 'Cancellation & Refund Policy',
    lastUpdated: '01 November, 2025',
    intro:
      'Ragapi Impex believes in helping its customers as far as possible. Please review our cancellation and refund policy below.',
    sections: [
      'RAGAPI IMPEX PRIVATE LIMITED believes in helping its customers as far as possible and therefore has a liberal cancellation policy. Under this policy:',
      {
        ul: [
          'Cancellations will be considered only if the request is made within 15 days of placing the order. However, the request may not be entertained if the order has already been communicated to the vendors/merchants and they have initiated the process of shipping.',
          'We do not accept cancellation requests for perishable items like flowers, eatables, etc. Refund or replacement can be made if the customer establishes that the quality of the product delivered is not acceptable.',
          'For damaged or defective items, please report the same to our Customer Service team within 15 days of receiving the product. The request will be verified by the merchant before being entertained.',
          'If you feel the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 15 days of receiving the product so the team can review and take an appropriate decision.',
          'For any product that carries a manufacturer warranty, please refer the issue to the authorised manufacturer service channel.',
          'Once a refund is approved by RAGAPI IMPEX PRIVATE LIMITED, it takes 6–8 days for the refund to be processed and credited to the end customer.',
        ],
      },
    ],
  },
]

// Convenience lookup for routes/pages, e.g. POLICIES_BY_ID.terms
export const POLICIES_BY_ID = Object.fromEntries(
  POLICIES.map((policy) => [policy.id, policy])
)