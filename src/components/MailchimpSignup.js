import React from 'react'

function MailchimpSignup () {
  return (
    <div className="border border-gray-100 p-5 rounded mx-3 shadow-lg">
      <form action="https://eventphonenumber.us20.list-manage.com/subscribe/post?u=4bbc748f17f7570fe0d04d20b&amp;id=a6336d907f&SIGNUP=Blog" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <h2 className="text-xl font-semibold">
            Join the Newsletter
          </h2>
          <div className="mt-3">
            <label htmlFor="mce-EMAIL" className="inline-block mb-1 text-sm">
              Email
            </label>
            <input
              type="email"
              name="EMAIL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mce-EMAIL"
              placeholder="jane@acme.com"
            />
          </div>
          <div id="mce-responses" className="clear">
            <div className="response hidden" id="mce-error-response" />
            <div className="response hidden" id="mce-success-response"  />
          </div>
          <div style={{position: 'absolute', left: -5000}} aria-hidden="true">
            <input type="text" name="b_4bbc748f17f7570fe0d04d20b_a6336d907f" tabIndex="-1" value="" />
          </div>
          <div className="mt-3">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="mc-subscribe btn btn-teal cursor-pointer" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default MailchimpSignup
