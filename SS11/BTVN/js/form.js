function send() {
	let fullname = document.getElementById('fullname').value;
	let email = document.getElementById('email').value;
	let title = document.getElementById('title').value;
	let content = document.getElementById('content').value;
}
if (_.isEmty(fullname)) {
	document.getElementById('fullname-error').innerHTML = 'Vui lòng nhập tên của bạn';
}
if (_.isEmty(email)) {
	document.getElementById('email-error').innerHTML = 'Vui lòng nhập email của bạn';
}
if (_.isEmty(title)) {
	document.getElementById('title-error').innerHTML = 'Vui lòng nhập tiêu đề';
}
if (_.isEmty(content)) {
	document.getElementById('content-error').innerHTML = 'Vui lòng nhập nội dung';
}