//Khởi tạo danh sách học viên
var listStudent = [
	['Nguyễn Văn A', '23', 'aaa@gmail.com', 'Đà Nẵng'],
	['Nguyễn Văn B', '20', 'bbb@yahoo.com', 'Huế'],
	['Nguyễn Văn C', '25', 'ccc@yahoo.com', 'Đà Nẵng'],
	['Nguyễn Văn D', '27', 'ddd@gmail.com', 'Sài Gòn'],
];

//In ra danh sách học viên
document.write('<h2>Danh sách học viên ban đầu:</h2>');

for (var i = 0; i < listStudent.length; i++) {
	document.write(i + 1);
	for (var j = 0; j < listStudent[i].length; j++) {
		document.write(' - ' + listStudent[i][j]);
	}
	document.write('<br>');
}

//Thêm 2 sv và in ra danh sách lớp
document.write('<h2>Danh sách học viên sau khi thêm:</h2>');
var addStudent = [
	['Nguyễn Văn E', '21', 'eee@yahoo.com', 'Hà Nội'],
	['Nguyễn Văn F', '24', 'fff@gmail.com', 'Nghệ An'],
];
listStudent = listStudent.concat(addStudent);
for (var i = 0; i < listStudent.length; i++) {
	document.write(i + 1);
	for (var j = 0; j < listStudent[i].length; j++) {
		document.write(' - ' + listStudent[i][j]);
	}
	document.write('<br>');
}

//Đổi tên A thành AAA và in ra danh sách học viên
document.write('<h2>Danh sách học viên sau khi đổi tên:</h2>');

// for (var i = 0; i < listStudent.length; i++) {
// 	var change = listStudent.splice(0, 1, 'Nguyễn Văn AAA - 23 - aaa@gmail.com - Đà Nẵng');
// }

// for (var i = 0; i < listStudent.length; i++) {
// 	document.write(i + 1);
// 	for (var j = 0; j < listStudent[i].length; j++) {
// 		document.write(' - ' + listStudent[i][j]);
// 	}
// 	document.write('<br>');
// }

for (var i = 0; i < listStudent.length; i++) {
        if (listStudent[i][0].includes('Nguyễn Văn A')) {
            listStudent[i][0] = listStudent[i][0].replace('Nguyễn Văn A', 'Nguyễn Văn AAA');
        }
    }
for (var i = 0; i < listStudent.length; i++) {
	document.write(i + 1);
	for (var j = 0; j < listStudent[i].length; j++) {
		document.write(' - ' + listStudent[i][j]);
	}
	document.write('<br>');
}    