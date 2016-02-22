
//bio JSON
var bio = {
  name : 'Malcolm Robertson',
  role : 'Software Overlord',
  contacts : {
  	mobile : '+27 82 333 2021',
  	email : 'malcolmarobertson@gmail.com',
  	github : 'https://github.com/malcolmarobertson',  	
  	location : 'Lonehill, JNB, ZA'  	
  },
  welcomeMessage : 'Eat, Sleep, Automate, Repeat',
  
  skills : [
  	'Software Development', 
  	'Software Management', 
  	'Business Analysis', 
  	'ITIL Governance', 
  	'Supply Chain Management',
  	'ITIL Governance', 
  	'C#', 
  	'JavaScript', 
  	'jQuery',
  	'SQL'
  ],
  bioPic : 'images/me.png',
     
  display : function () {
  	//build BIO in header
    
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').prepend(formattedWelcomeMsg);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    formattedRole = formattedRole.replace('span', 'h2');
    $('#header').prepend(formattedRole);    
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName);   
     var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    $('#header').prepend(formattedBioPic);
        
    function displayContacts(htmlID) {
    	
      var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
      $(htmlID).append(formattedMobile);
      var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
      $(htmlID).append(formattedEmail);
      var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
      $(htmlID).append(formattedGithub);
      var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
      $(htmlID).append(formattedLocation);
    }
    displayContacts('#topContacts');
    
    //build Skills
    if (bio.skills.length > 0) {
    	$('#skills-row').append(HTMLskillsStart);  
      for (var skill in bio.skills) {
      	var formattedSkills = HTMLskills.replace('%data%', bio.skills[skill]);	  
    	  $('#skills').append(formattedSkills);
      }
    }
    
    displayContacts('#footerContacts');
  }   
};

var education = {
	schools: [
	  {
	  	name : 'UNISA',
	  	location : 'Pretoria, South Africa',	  	
	  	degree : 'B.Sc.',
	  	majors : [	  	
  			'Software Engineering'  			
  		],
	  	dates : '2010',
	  	url : 'http://www.unisa.ac.za/'
	  },
	  {
	  	name : 'Bytes',
	  	location : 'Midrand, South Africa',	  	
	  	degree : 'Programming Certificate',
	  	majors : [	  	
  			'C#'  			
  		],
	  	dates : '2006',
	  	url : 'http://www.bytes.co.za/'
	  },	  
	  {
	  	name : 'Luso',
	  	location : 'Randburg, South Africa',	  	
	  	degree : 'Programming Certificate',
	  	majors : [	  	
  			'COBOL'  			
  		],
	  	dates : '1999',
	  	url : 'http://www.luso.co.za/'
	  },
	  { 
	  	name : 'Sandringham',
	  	location : 'Sandringham, South Africa',	  	
	  	degree : 'Matric',
	  	majors : [	  	
  			'Computer Science', 
  			'Mathematics', 
  			'Physical Science', 
  			'Accounts', 
  			'English', 
  			'Afrikaans'
  		],
	  	dates : '1996',
	  	url : 'http://www.sandringhamhigh.org.za/'
	  }
	],
  onlineCourses: [
	  {     
	  	title : 'Front-End Web Developer Nanodegree',
	  	school : 'Udacity',	  		  	
	  	dates : '2016',
	  	url : 'https://www.udacity.com'
	  },
	  {     
	  	title : 'Business Systems Analysis',
	  	school : 'UCT',	  		  	
	  	dates : '2016',
	  	url : 'http://www.getsmarter.co.za/'
	  }
	],

	display : function () {
		if (education.schools.length > 0) {
    	$('#education').append(HTMLschoolStart);  
      for (var school in education.schools) {
      	
      	var formattedSchoolName	
      		= HTMLschoolName.replace('%data%', education.schools[school].name);
        formattedSchoolName = formattedSchoolName.replace('#', education.schools[school].url);
      	var formattedSchoolDegree 
      		= HTMLschoolDegree.replace('%data%', education.schools[school].degree);	        	
    	  $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
    	  var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);	  
    	  $('.education-entry:last').append(formattedSchoolDates);
    	  var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);	  
    	  $('.education-entry:last').append(formattedLocation);
    	  
    	  var majorsString = '';
    	  for (var major in education.schools[school].majors) {
    	  	majorsString = majorsString + education.schools[school].majors[major] + ', ';	
    	  	
    	  }
    	  majorsString = majorsString.substring(0, majorsString.length - 2);
    	  var formattedMajors 
      		= HTMLschoolMajor.replace('%data%', majorsString);	   
    	  $('.education-entry:last').append(formattedMajors);
      }
    }		
	}	
};

var work = {
	jobs : [
	  {
	   	employer : 'UTi ',
	 	  title : 'Software Development Manager',
	 	  location : 'Johannesburg, South Africa',
	 	  dates : '2002 - Present',	 	  
	 	  description : 'New development on Global Tracking and Order Management system'		
	  },
	  {
  	 	employer : 'BCX',
	   	title : 'Software Developer',
	   	location : 'Johannesburg, South Africa',	 	
	 	  dates : '1999-2002',	 	  
	 	  description : 'HR/Payroll COBOL Developer'		
	  }	 
  ],
  
  display : function ()
  {
    for (var job in work.jobs) {
    	
    	$('#workExperience').append(HTMLworkStart);
    	
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $('.work-entry:last').append(formattedEmployerTitle);	  
     
      var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
      $('.work-entry:last').append(formattedDates);	
      
      var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
      $('.work-entry:last').append(formattedLocation);	
        
      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);  
      $('.work-entry:last').append(formattedDescription);	
    }
  }
};
	
var projects = {
	project : [
	 {	 	
	 	 title : 'UniQue',
	 	 dates : '1999-2002',	 	
	 	 description : 'HR/Payroll solution development',		
	 	 images : null  			
	 },
	 {	 	
	 	 title : 'Bill of Entry',
	 	 dates : '2002-2005',	 	
	 	 description : 'South African Customs Brokerage application',		
	 	 images : null	  	
	 },
	 {
	 	 title : 'ESF',
	 	 dates : '2005-2008',	 	
	 	 description : 'Develop system to make available electronic shipping documents, to all global branches',			 	
	 	 images : [	  	
  			'images/ESF.png'
  	]
	 },
	 {
	  	title : 'eMpower',
	  	dates : '2008-present',	 	
	  	description : 'Global Shipment Tracking Website for Clients and Internal users',		
	  	images : [	  	
  	   	'images/eMpower.png'
  	]
	 },
	 {
	 	 title : 'uOrder',
	 	 dates : '2008-present',	 	
	 	 description : 'Order Management and Tracking Portal',		
	 	 images : [	  	
  			'images/uOrderCP.png',
  			'images/uOrderOM.png',
  			'images/uTrac.png'
  	]
	 }
  ],
  
  display : function(){
	  for (var project in projects.project) {
  	  $('#projects').append(HTMLprojectStart);  	  
  		
  	  var formattedTitle = HTMLprojectTitle.replace('%data%', projects.project[project].title);
  	  $('.project-detail:last').append(formattedTitle);	
  	
  	  var formattedDates = HTMLprojectDates.replace('%data%', projects.project[project].dates);
  	  $('.project-detail:last').append(formattedDates);	
  	
  	  var formattedDescription = HTMLprojectDescription.replace('%data%', projects.project[project].description);
    	$('.project-detail:last').append(formattedDescription);
  	
  	  if (projects.project[project].images !== null) {
  	    if (projects.project[project].images.length > 0) {
  	    	console.log(projects.project[project].images[0]);
  	      var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.project[project].images[0]);	  
  	      $('.project-entry:last').append(formattedProjectImage);
  	    }
  	  }
      //  	  
    	//      
  		//images
  		//if (projects.project[project].images != null)
  		//{
      //  if (projects.project[project].images.length > 0) {
    	//    for (image in projects.project[project].images) {          	
      //  	  var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.project[project].images[image]);	  
      //  	  
    	//      $('#project-entry:last').append(formattedProjectImage);
      //    }
      //  }
      //}
    }
  } 
};

bio.display();
education.display();
work.display();
projects.display();

//$('#main').append(internationalizeButton);	

$(document).click(function(loc) { 	
	logClicks(loc.pageX, loc.pageY);
});

$('#mapDiv').append(googleMap);




                         


	





