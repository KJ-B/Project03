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
		}
	}


}