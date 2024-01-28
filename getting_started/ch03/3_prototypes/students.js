/*
Exercise:
1. We created a bootcamp about web development and start it with three students: Mike, Anna and Caroline.
2. We will use JS and protoypes to control some attributes of our new students:
- name (you already know them)
- id (generated with crypto.randomUUID)
- current_subjects: ["html", "css", "javascript", "react", "redux", "cypress", "mondodb", "postgresql", "nodejs", "expressjs", "playwright", "aws", "azure", "jenkins", "grafana", "docker", "kubernetes"]
- scope_preference: ["frontend", "backend", "devops", "fullstack"]
- payment method: ["paypal", "debit card", "credit card", "cash"]
3. Apart from these attributes, take into account that:
- a new student always starts as fullstack in scope_preference, and html, css, javascript, react and node as current_subjects.
- a new student always starts with cash as its default payment method.
- a student cannot perform any action in their properties if they don't have name and id. If blocked, we must print the reason for being blocked.
- a student can add/remove subjects to their current subjects property. Adding subjects should conform to the available options.
- a student should be able to print which subjects he/she is currently studying.
- a student can change its scope preference, but can only have one.
- a student should be able to print which is his/her scope preference.
- a student can change their current payment method for one of the available options.
- a student cannot have methods like toString() or valueOf()

Implementation:
1. We decided to use objects to admin our students.
2. We won't use classes, just a students object.
3. All students should have a prototypal link to the students object.
4. We should be able to create new students usign the students object.
*/
