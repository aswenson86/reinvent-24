Explore how generative AI capabilities with AWS Mainframe Modernization Automated Refactor with AWS Blu Age accelerate mainframe modernization while seamlessly integrating with your current tools, processes, and team's expertise. In this workshop, learn how to use generative AI to discover code summaries, explanations, and user screen design previews; analyze assisted classification; and transform both supported and unsupported legacy source code to build and deploy new Java applications to the AWS Mainframe Modernization service. You must bring your laptop to participate.
, Mainframe Consultant, AWS

, Principal Solution Architect, AWS

Thu, December 5
3:00 PM - 5:00 PM PST
MGM Grand | Level 1 | Grand 113
Session types: Workshop
Topic: Migration & Modernization
Industry : Cross-Industry Solutions, Financial Services
Area of interest: Generative AI
Level: 300 – Advanced
Role: Developer / Engineer, DevOps Engineer, Solution / Systems Architect
Services: AWS Mainframe Modernization

# Notes
Some tools to use:
* Amazon Q developer to refactor mainframe.
* AWS Blu Age to transform legacy monoliths into distributed apps.
    * ZOS code is used but can also be cobol from other mainframe systems as well

Blu Age will use spring boot to containerize and will use EKS/ECS. Will migrate the DB to a managed or non-managed DB.

[!Blu Age](image1.png)
[!Blu Age Arch](image2.png)
[!Blu Age Descriptions](image3.png)

## Blu Age
The mainframe application is an AWS open-source mainframe application named CardDemo.

AWS Blu Age powers the automated refactoring pattern within AWS Mainframe Modernization service to accelerate the modernization of the mainframe applications complete software stack including application code, dependencies and infrastructure.

AWS Blu Insights simplifies managing complex large projects, allowing you to focus on execution and customer satisfaction

The workshop focuses on the different modernization project phases starting with AWS Blu Insights to understand and transform languages supported by AWS Blu Age Transformation Engine and unsupported source code with generative AI, before deploying the modernized application to AWS.

The acronyms used across the workshop are:

COBOL : Common Business Oriented Language
JCL : Job Control Language
WE : Workshop Event
If you are interested to learn more about the AWS Mainframe Modernization Refactor with AWS Blu Age service, click here https://aws.amazon.com/mainframe-modernization/capabilities/refactor/

If you are interested to learn more about the Generative AI built-in AWS Blu Insights, click here https://bluinsights.aws/genai

If you are looking for more information about the migration patterns, approach, best practices and customer examples, then please send us an e-mail mainframe@amazon.com

## Context
The customer ABC is running a critical application on the mainframe platform called CardDemo. It is a credit card management application built primarily using COBOL programming language. The application has various functions that allow users to manage accounts, credit cards, transactions and bill payments.

[!context](image4.png)

The customer ABC wants to migrate and modernize the on-premises mainframe applications (CardDemo) to a cloud native fully-managed runtime environment on AWS. AWS Mainframe Modernization Refactor with AWS Blu Age has been identified for the migration pattern. The customer wants to achieve these goals:

Migrate and modernize applications to remove the hardware and staffing costs of traditional mainframes.

Break up and manage complete migration with infrastructure, software, and tools to refactor and transform legacy applications.

Accelerate modernization and regression testing at scale, with a cloud-native service.

The customer asked you to migrate the CardDemo application to Java using AWS Mainframe Modernization, a service that refactors legacy applications to run on AWS.

This hands-on workshop focuses on the source code analysis and the transformation of CardDemo source code using AWS Blu Insights. Generative AI is used to enhance the source code analysis productivity.

AWS Blu Insights automates the code transformation process using the Transformation Center which handles the critical programming languages like Cobol, PLI, RPG. Some codebases may contain a limited number of source code files written in other languages (e.g. REXX, C, Easytrieve).

Generative AI powered code transformation extends the capabilities of AWS Blu Age transformation engines from languages such as REXX, C, and Easytrieve to Java. Then, explore how validate generated source code and apply fine-tuning to achieve your needs.

After modernizing the full application stack to Java Spring Boot, AngularJS, and Amazon Aurora PostgreSQL, you will deploy the transformed application to the AWS Mainframe Modernization managed runtime.

By completing this workshop, you will:

Gain insights into how generative AI can support the analysis of the source code, enabling quicker understanding of complex, legacy systems.

Explore how generative AI can accelerate the transformation of programming languages by AWS Blu Age as part of automated refactoring (such as Easytrieve).

Gain experience to how to deploy and test a refactored Java application in AWS Mainframe Modernization service.

## Business Functions
There are two types of users defined in CardDemo application:

[!Regular User](image5.png)
[!Admin User](image6.png)

## Components
[!Online Components](image7.png)
[!Batch Components](image8.png)
* Report Component: The application consists of one Easytrieve program called CBACT01C-RPT.EZT. The program reads data from an input file containing account details, calculates a "Net Balance" for each account, and generates a report with these details.
* Sign-on Screens: The application consists of 17 CICS screens. Each screen has its own set of COBOL programs defined in the CICS system definition tables. These screens are used to maintain the customer information and associated accounts. The following are the application sign-on, user and admin screens.
[!sign-on screens](image9.png)
[!main-menu user](image10.png)
[!admin-menu user](image11.png)

## Create the AWS Blu Insights Environment
1. Select Quickstart from the top right
2. Fill out the details [!details](image12.png)
3. Select create project and wait for the project to be completed
[!completed](image13.png)
4. Then select Assets -> Statistics once complexity analysis is done to get an overview of the code base complexity.

[!complexity](image14.png)
[!dependency-map](image15.png)

5. Under dependencies select the AI icon to use natural language to say something like "select all the bms" and then do extract subgraph to extract all of the indiviudal components. 
[!extraction](image16.png)

## Transform the code to java

In this section, you will go to the Transformation Center project to transform the application into a Java application.

This project will be based on the Card-Demo Codebase project you have previously created. You will execute the transformation of the supported legacy source code to Java. It will leverage the AWS Blu Age transformation engine.
[!transform-code-dashboard](image17.png)

1. Go to Inputs
2. Go to files
3. Select the workpackage we just created by using the AI assistant and type in "select the OnLine workpackage"
4. Look at the generated AWS Blu Insights Query Language (BQL) query.
5. Click on the main (top) check-box to select all the elements.
6. Click on the Launch run button at the bottom of the screen.
[!run-details](image18.png)

*** Note the three actions are: ***

Transform: Generate an intermediate model from the legacy code (no java code is generated). As part of the model, this step generates the modern database schemas from the VSAM files that will be transformed into database tables.

Refactor: Apply rules on the model to refine its content. Common use cases are renaming elements in the code (such as data structures or methods) in bulk, or recomposing common processes such as ABEND to use some modern implementations. The output of this step is a new improved intermediate model.

Generate: Generate a maintainable Java project from the intermediate model. The result of this phase will be the Java projects decomposed into a service layer, an entity layer and a front-end layer.

Note the Only Weather Report button: The weather report give you an overview of the efforts needed to modernize the related codebase. The weather report is an excel spreadsheet which contains several sheets with:

* Details transformation statuses for each input
* Pivot tables to represent meaningful metrics
* Effort evaluation to decide who can fix the issue (project/product)
* Weather representation of the run

Wait until the status is completed as shown below
[!completed-status](image19.png)

## Perform AI Analysis to help better understand the code base

### AI Summary
[!ai-image-summary](image20.png)

You can then highlight over the i symbol next to the file name which will generate a summary like such:

* AI-generated summary
This file is a COBOL program that accepts and processes account updates. It has the following key functionality: - Receives input from the user to update account and customer details - Validates the input data and performs various edits such as checking for valid account number, credit limit, expiry date, etc. - Retrieves the existing account and customer data from the respective master files - Compares the new input data with the existing data and identifies any changes - Prompts the user to confirm the changes before updating the master files - Updates the account and customer records in the master files if the changes are confirmed - Handles various error scenarios such as record locking, data changes by other users, etc. - Provides a user-friendly screen interface to display the account and customer details and guide the user through the update process

### AI Explanation
[!select-the-file](image21.png)
[!explain-the-code](image22.png)
It will then generate an explanation as such:
* AI-generated explanation
```
This code snippet is part of a COBOL program that reads and processes an account data file. Here's a breakdown of what the code does:

The 1000-ACCTFILE-GET-NEXT paragraph reads the next record from the ACCTFILE-FILE and stores it in the ACCOUNT-RECORD variable.
It then checks the status of the file operation by examining the ACCTFILE-STATUS variable:
If the status is '00' (successful read), it sets the APPL-RESULT variable to 0 (indicating success) and calls the 1100-DISPLAY-ACCT-RECORD paragraph to display the account record.
If the status is '10' (end of file), it sets the APPL-RESULT variable to 16 (indicating end of file).
If the status is anything else, it sets the APPL-RESULT variable to 12 (indicating an error).
It then checks the APPL-RESULT variable:
If APPL-AOK (i.e., APPL-RESULT is 0), it continues processing.
If APPL-EOF (i.e., APPL-RESULT is 16), it sets the END-OF-FILE variable to 'Y' to indicate that the end of the file has been reached.
If neither of the above conditions is true, it displays an error message, moves the ACCTFILE-STATUS to the IO-STATUS variable, calls the 9910-DISPLAY-IO-STATUS paragraph to display the file status, and then calls the 9999-ABEND-PROGRAM paragraph to terminate the program.
Finally, it exits the paragraph.
```