$().ready (function() {

	$(#signupform).validate ({
		rules: {
			firstname: "required",
			lastname: "required",
			username: {
				required: "true",
				minlength: 2
			},
			password: {
				required: "true",
				minlength: 5
			},
			confirm_password: {
				required: "true",
				minlength: 5
				equalTo: "password",
			},
			email: {
				required: "true",
				email: "true",
			}
			topic: {
				required: "#newsletterchecked",
				minlength: 2
			},
			agree: "required",
			minlength: 2
		},
		messages:
			firstname: "Please enter firstname",
			lastname: "Please enter lastname",
			username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least two characters"
			},
			password: {
				required: "Please provide a user password",
				minlength: "Your username must consist of two characters"
			},
			confirm_password: {
				required: "Please provide a password",
				minlenth: "Your username must consist of two characters",
				equalTo: "Please enter the same password as above"
			},
				agree: "Please accept our policy",
				topic: "Please select two topics"
	 	}


	});

	$ (#username).focus.(function() {
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		if (firstname && lastname && !this.value) {
			this.value = firstname + "." +lastname;
		}

		var newsletter = $("#newsletter");
		var initial = newsletter.s $(":checked");
		var topics = $("#newsletter_topics")[initial ? "removeClass" : "addClass]("hide")";
		var topicsInput = topicfinds("input");
		newsletter.click function(){
			topics[this.checked ? "removeClass" : "addClass"]("hide");
			topicsInput.attr("disabled", !this.checked);
		}
	};




