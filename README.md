# ChIP-DB
A web application that visualizes and displays ChIP-seq QC metrics for assessing and validating sample quality for
[the Reddy Lab](http://reddylab.org/). You can view the deployed web application [here](chipdb.reddylab.org).

## Uploading Your Experiments
Data uploads are connected to the [Reddy Lab's own Jupyter notebook pipeline](https://github.com/alexbarrera/ggr-cwl-ipynb-gen) developed by Alex Barrera.
With correct configurations and permissions (user + password), users can run the `Data Upload` cell in the Jupyter notebook that can be found at the very end of the cell. The results will upload directly to ChIP-DB once available.
To ensure successful upload, is important that users run the `Data Upload` step after all previous Jupyter notebook steps have been successfully completed.

## Viewing Your Data
Sequencing data and results can be publicly viewed on the [ChIP-DB website](http://chipdb.reddylab.org/). 
Samples and flowcells can be found via the search bar on the top of the page. A feature to search through all
existing flowcells is in progress and will be released in the newest deployment (V1.1) of the app.

## Built With
* [MongoDB](https://www.mongodb.com/) - A document-oriented NoSQL database
* [ExpressJS](https://expressjs.com/) - A minimal web-application framework for Node.js
* [Angular](https://angular.io/) - A front-end Typescript framework for dynamic web apps.
* [Node.js](https://nodejs.org/en/) - A Javascript runtime.
* [plotFingerprint](http://deeptools.readthedocs.io/en/latest/content/tools/plotFingerprint.html) - A Python tool
created by [deepTools](http://deeptools.readthedocs.io/en/latest/index.html) for analysis of ChIP-seq data.
* [Docker](https://www.docker.com/) - A software container platform that makes shipping and using software easier by containerizing system libraries and dependencies.

# FAQs

## My internet is working, and I cannot view the website.
The website is deployed on Duke's RAPID machines. If these machines somehow manage to go down, you will not be able to view the website. Once the machines come back on, ChIP-DB will automatically start once again. If this problem persists or the website is down for a long period of time, please consult Alex Barrera regarding the Duke RAPID machines. 

## I would like to restart or deploy changes to the application.
Restarting the website should not be necessary, as the application implements a restart policy in Docker.
If this is not the case, you can reboot the application by entering the `/home/djy3/chip-seq-qc-app` directory
and run:
```
docker-compose up -d
``` 

To deploy changes in the application, you must change the source code in the application, test it locally, and then
follow these deployment steps:

1) Rebuild the server and client images (should take a few minutes).
The key here is that you have tags matching the `express-server` or `angular-cli` images specified in `docker-compose.yml`:
```
cd <PATH TO SERVER OR CLIENT DIRECTORY>
docker build . -t <IMAGE NAME>
```
2) Once the new images have completed building, run `docker-compose up -d` and your changes will be deployed.

## I ran the Data Upload cell, but my data is not on the website.
Everything that has been successfully uploaded can be viewed on the website. If your data is not viewable, there was an issue with the upload. Check for logs or error messages in the Jupyter notebook.

## How do I get the credentials for data upload?
Please refer to Alex about what the credentials are and how you can use them.

## Author
Darryl Yan
