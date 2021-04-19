function checkContent() {
	var fullname = document.getElementById('fullname').value;
	var soDauKy = document.getElementById('sodauky').value;
	var soCuoiKy = document.getElementById('socuoiky').value;
	var dayOfBirth = document.getElementById('dob').value;
	var ngayDauKy = document.getElementById('ngaydauky').value;
	var ngayCuoiKy = document.getElementById('ngaycuoiky').value;
	var maleCheck = document.getElementById('male').checked;
	var femaleCheck = document.getElementById('female').checked;
	if (fullname == "") {
		document.getElementById('error-fullname').innerHTML = "Vui lòng nhập họ và tên!";
	} else{
		document.getElementById('error-fullname').innerHTML = " ";
	}
	if (soDauKy == "") {
		document.getElementById('error-sodauky').innerHTML = "Vui lòng nhập số đầu kỳ!";
	} else{
		document.getElementById('error-sodauky').innerHTML = " ";
	}
	if (soCuoiKy == "") {
		document.getElementById('error-socuoiky').innerHTML = "Vui lòng nhập số cuối kỳ!";
	} else{
		document.getElementById('error-socuoiky').innerHTML = " ";
	}
	if (dayOfBirth == "") {
		document.getElementById('error-dob').innerHTML = "Vui lòng nhập ngày sinh!";
	} else{
		document.getElementById('error-dob').innerHTML = " ";
	}
	if (ngayDauKy == "") {
		document.getElementById('error-ngaydauky').innerHTML = "Vui lòng nhập ngày đầu kỳ!";
	} else{
		document.getElementById('error-ngaydauky').innerHTML = " ";
	}
	if (ngayCuoiKy == "") {
		document.getElementById('error-ngaycuoiky').innerHTML = "Vui lòng nhập ngày cuối kỳ!";
	} else{
		document.getElementById('error-ngaycuoiky').innerHTML = " ";
	}
	if (maleCheck == false && femaleCheck == false) {
		document.getElementById('error-gender').innerHTML = "Vui lòng chọn giới tính!";
	} else{
		document.getElementById('error-gender').innerHTML = " ";
	}
}
function checkNumberAndDate() {
	var soDauKy = document.getElementById('sodauky').value;
	var soCuoiKy = document.getElementById('socuoiky').value;
	var ngayDauKy = document.getElementById('ngaydauky').value;
	var ngayCuoiKy = document.getElementById('ngaycuoiky').value;
	if (soDauKy > soCuoiKy) {
		alert('Số đầu kỳ không được lớn hơn số cuối kỳ!');
	}
	if (ngayDauKy > ngayCuoiKy) {
		alert('Ngày đầu kỳ không được sau ngày cuối kỳ!');
	}
}