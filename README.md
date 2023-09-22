# Foot and Ball Academy
Welcome to Foot and Ball Academy backend server. If you want to see our football skills go to the website: [footandball.com.au](https://footandball.com.au).
If you want to see how back-end web skills, stick around!.

*index.html* is the main page. All the other *\*.html* files are the (hopefully self-explanatory) sub-pages and components. 

The *css* folder contains the folder with most of the default colors and styles.

The *img* folder contains all the assets/pictures/etc.

## Deployment
A GitHub pages site is automatically deployed and our custom domain with HTTPS is configured following [these instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

Previously, we were on CPanel hosting too.  

<pre><del>
## Auto deploy
Pushing/making changes will automatically update the github pages site.
There is a github action that pushes to the ftp webserver to automatically update footandball.com.au also.

## SSL Cert

On a linux machine with certbot, get an ssl certificate with:
```
sudo certbot certonly --manual --preferred-challenges dns -d autodiscover.footandball.com.au -d cpanel.footandball.com.au -d cpcalendars.footandball.com.au -d cpcontacts.footandball.com.au -d  footandball.com.au -d mail.footandball.com.au -d webdisk.footandball.com.au -d webmail.footandball.com.au -d www.footandball.com.au
```
Put in each of the acme challenges in the CPanel Zone Editor. Then Add the certificates to WHM. 
</del></pre>

