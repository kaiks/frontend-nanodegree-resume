var bio = {
	"name" : name,
	"role" : "Web Dev",
	"contacts" : {
		"mobile": "censored",
		"email": "censored@gmail.com",
		"github": "kaiks"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMessage" : "lol hi",
	"skills" : ["Ruby", "Ruby on Rails", "RSpec", "JS"]
};

var work = {
	"jobs": [ 
	{
		"title" : "Uno developer",
		"employer" : "self",
		"dates" : "2010 - current",
		"city" : "Interwebs",
		"description": "Bla bla bla"
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Uniwersytet Wrocławski",
		"dates": 2016,
		"city": "Wrocław",
		"majors": ["Economics"]
	}, 
	{
		"name": "Uniwersytet Wrocławski",
		"dates": 2014,
		"degree": "BSc",
		"city": "Wrocław",
		"majors": ["Computer Science"]
	}],
	"onlineCourses": [
	{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://classroom.udacity.com/courses/ud804"
	}
	]
};

var project = {
	"projects": [ 
	{
		"title" : "Uno",
		"dates" : 2016,
		"description" : "dae epic project"
	}
	]
};

/*
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contactInfo).replace("%contact%", "Email");
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPreskills = HTMLskillsStart;
var formattedskills = HTMLskills.replace("%data%", bio.skills);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



$("#header").append(formattedContact);
$("#header").append(formattedPictureURL);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedPreskills);
$("#header").append(formattedskills);

$("#header").append(work["position"]);
$("#header").append(education.name);
*/