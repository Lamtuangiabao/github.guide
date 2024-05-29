# Bước 1. Download git tại:

https://git-scm.com/download/win

https://git-scm.com/download/mac

Install xong kiểm tra đã cài đặt thành công bằng cách mở terminal và gõ lệnh:

`git -v`

# Bước 2. đăng ký tài khoản tại:

https://github.com/

# Bước 3. Config git https:

Mở terminal và gõ:

`git config --global user.name <username>`

`git config --global user.email <mailaddress>`

ex:
`git config --global user.name hoangnm.fpt`

Config xong kiểm tra lại đã thành công chưa bằng lệnh:

`git config --list`

hoặc:

`git config user.name`

`git config user.email`

# Bước 4. Cấu hình SSH Key:

Cấu hình SSH key cho Git là một phương pháp xác thực bảo mật để bạn có thể truy cập vào kho lưu trữ Git từ xa mà không cần phải nhập mật khẩu mỗi lần thực hiện các hoạt động Git như push, pull, clone, hoặc commit.

4.1. Mở terminal
4.2. Kiểm tra xem máy của bạn đã có ssh key chưa bằng cách:

```
cd ~/.ssh
ls
```

4.3. Nếu tồn tại id_dsa và id_dsa.pub thì bạn đã có ssh key. Nếu chưa có, bạn tạo ssh key mới bằng lệnh:

`ssh-keygen -o`

Sau đó có thể vào thư mục .ssh/id_dsa.pub để lấy mã hoặc dùng lệnh:

`cat ~/.ssh/id_rsa.pub`

Copy đoạn mã hiển thị ra và paste vào kho cấu hình ssh-key của máy chủ git (trong tài khoản github hoặc gitlab của bạn.)

# Bước 5. Những câu lệnh git cơ bản:

Đứng tại thư mục gốc của dự án, mở terminal và thực hành một số lệnh cơ bản:

- Khởi tạo dự án và theo dõi những thay đổi của dự án với git:

  `git init`

- Thêm các thay đổi vaò khu vực staging:

  `git add .`

- Chuyển những thay đổi sang khu vực directory:

  `git commit -m "new message"`

- Đưa những thay đổi lên repo online:

  `git push`

- Đổi tên nhánh hiện tại thành "main":

  `git branch -M main`

- Kiểm tra trạng thái hiện tại của những thay đổi:

  `git status`

- Liệt kê ra các commit, thời gian và tác giả của những commit đó:

  `git log`

<!-- GIT -->
<!-- handling request commit when pull code to the changed sourrce code -->
<!-- git add shopping_web_test/app.js -->
<!-- git add shopping_web_test/index.html -->
<!-- git add shopping_web_test/utils.js -->
<!-- git commit -m "Fixed bugs in shopping web test files" -->
<!-- git pull -->

<!-- git push issues: -->
<!-- The error message "fatal: remote origin already exists" means you're trying to add a remote named "origin" that already exists in your local Git repository. Here's how to fix it:
Verify Existing Remote:

1.Use the command git remote -v to list all configured remotes and their URLs. This will help you confirm if there's an existing "origin" and see where it points to.

Remove Existing Remote (if necessary):

2.If the existing "origin" points to the wrong repository or you want to use the new URL, remove it with:
git remote rm origin
then:
3.Add the New Remote:
After removing the old "origin" (if needed), use the original command to add the new remote:

setup lại:
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Lamtuangiabao/khoa1-mentorThang.git
git push -u origin main
Nếu đã setup trước khi remove rồi thì dùng lệnh:
git remote add origin https://github.com/Lamtuangiabao/Minmain-Long.git -->
