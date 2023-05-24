import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey("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")
//(process.env.SENDGRID_API_KEY);
// yFCkVX6JSoODqt4qUlzg5A.BpssxLC_Kb2E7sywxGtbrF6UGjUTsUojbUGyWC1luc0
// SG.yFCkVX6JSoODqt4qUlzg5A.

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: "fullstackcodex@gmail.com", // where email will be received
            from: "fullstackcodex@gmail.com", // where the email will originate from. Could be website/domain email
            subject: `[Lead from Portfolio Website]: ${req.body.subject}`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="en">
            <head>
              <meta charset="utf-8">
            
              <title>The HTML5 Herald</title>
              <meta name="description" content="The HTML5 Herald">
              <meta name="author" content="SitePoint">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            
              <link rel="stylesheet" href="css/styles.css?v=1.0">
            
            </head>
            
            <body>
              <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                    </div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} and their phone number is ${req.body.phonenumber}. </h3>
                    <div style="font-size: 16px;">
                    <p>Message: ${req.body.subject}</p>
                    <p>${req.body.message}</p>
                    <br>
                    </div>
                    <img src="https://cmong-nextjs-portfolio-site.vercel.app/images/logo-bg-dark.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
                    <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Charles Mong<br>Front-End Web Developer<br>+44 (0)7485 106 355</p>
                    <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                      <a href="https://cmong-nextjs-portfolio-site.vercel.app/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                      <a href="https://cmong-nextjs-portfolio-site.vercel.app/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                      <a href="https://github.com/CcMong/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                      <a href="https://linkedin.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                      <a href="https://twitter.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
                      
                    </div>
                    </div>
            </body>
            </html>`,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({error: error.message})
    }

    return res.status(200).json({error: "" });
} 

export default sendEmail;
