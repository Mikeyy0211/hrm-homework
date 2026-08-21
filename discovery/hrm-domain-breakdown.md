# HRM Domain Breakdown

Phân tích này chỉ phân loại thông tin từ `SRC-HRM-01` đến `SRC-HRM-08`. “Chưa đề cập” và “Chưa rõ” không phải là nghiệp vụ đã xác nhận.

## Employee Management

- **Business Purpose:** Quản lý hồ sơ nhân sự. (Nguồn: `SRC-HRM-01`)
- **Actors:** Chưa đề cập.
- **Main Process:** Quản lý danh sách/hồ sơ nhân sự. (Nguồn: `SRC-HRM-01`)
- **Business Rules đã xác nhận:** Hồ sơ gồm thông tin cá nhân, vị trí công việc và thời gian làm việc. (Nguồn: `SRC-HRM-01`)
- **Data Objects:** Nhân sự; hồ sơ nhân sự; thông tin cá nhân; vị trí công việc; thời gian làm việc. (Nguồn: `SRC-HRM-01`)
- **Employee lifecycle:** Chưa rõ: nguồn không nêu các trạng thái hoặc chuyển đổi vòng đời nhân sự.
- **Employee information:** Đã xác nhận ba nhóm thông tin; chi tiết trường dữ liệu của mỗi nhóm chưa đề cập.
- **Employment status:** Chưa đề cập.
- **Open Questions:** Ai quản lý hồ sơ? “Thời gian làm việc” có nghĩa gì? Có cần lịch sử thay đổi không? Khi nhân sự rời công ty, hồ sơ được xử lý thế nào?

## Leave Management

- **Business Purpose:** Xử lý đơn nghỉ phép của nhân viên. (Nguồn: `SRC-HRM-02`)
- **Actors:** Nhân viên, HR, quản lý trực tiếp. (Nguồn: `SRC-HRM-02`)
- **Main Process:** Nhân viên xin nghỉ; HR và quản lý trực tiếp phê duyệt trước khi nghỉ. (Nguồn: `SRC-HRM-02`)
- **Business Rules đã xác nhận:** Cần có phê duyệt của HR và quản lý trực tiếp trước khi nghỉ. (Nguồn: `SRC-HRM-02`)
- **Data Objects:** Đơn nghỉ phép; nhân viên; HR; quản lý trực tiếp. (Nguồn: `SRC-HRM-02`)
- **Request creation:** Đã xác nhận nhân viên là người xin nghỉ; nội dung/dữ liệu cần có của đơn chưa đề cập.
- **Approval flow:** Đã xác nhận HR và quản lý trực tiếp phải phê duyệt trước khi nghỉ; thứ tự, song song hay tuần tự chưa rõ.
- **Approval actors:** HR và quản lý trực tiếp. (Nguồn: `SRC-HRM-02`)
- **Leave status:** Chưa đề cập.
- **Missing rules:** Loại nghỉ; điều kiện phê duyệt; xử lý từ chối; sửa/hủy; uỷ quyền; ngoại lệ; liên hệ với chấm công và bảng lương; ngày nghỉ có được tính như thế nào.
- **Open Questions:** Hai phê duyệt vận hành theo quan hệ nào? Khi một bên từ chối thì sao? Có thể nghỉ trước khi đủ phê duyệt không?

## Attendance Management

- **Business Purpose:** Nhập dữ liệu chấm công từ file Excel. (Nguồn: `SRC-HRM-03`)
- **Actors:** Chưa đề cập.
- **Main Process:** Nhập dữ liệu chấm công từ file Excel. (Nguồn: `SRC-HRM-03`)
- **Business Rules đã xác nhận:** File Excel là nguồn nhập dữ liệu chấm công. (Nguồn: `SRC-HRM-03`)
- **Data Objects:** Dữ liệu chấm công; file Excel. (Nguồn: `SRC-HRM-03`)
- **Open Questions:** File do ai cung cấp và ai nhập? Cấu trúc file là gì? Xử lý dòng lỗi/trùng như thế nào? Dữ liệu liên hệ với nghỉ phép và lương ra sao?

## Payroll Management

- **Business Purpose:** Lập bảng lương theo mô tả công thức nguồn. (Nguồn: `SRC-HRM-04`)
- **Actors:** Chưa đề cập.
- **Main Process:** Tính bảng lương theo mô tả “ngày công - ngày nghỉ phép + lương tăng ca”. (Nguồn: `SRC-HRM-04`)
- **Business Rules đã xác nhận:** Chỉ xác nhận nguyên văn mô tả công thức; chưa xác nhận cách diễn giải hay quy đổi công thức. (Nguồn: `SRC-HRM-04`)
- **Data Objects:** Bảng lương; ngày công; ngày nghỉ phép; lương tăng ca. (Nguồn: `SRC-HRM-04`)
- **Open Questions:** Công thức có phải công thức tính lương thực tế không? Các thành phần có đơn vị và ý nghĩa gì? Kỳ lương, lương cơ bản, tăng ca, phê duyệt và đầu ra bảng lương là gì?

## Probation Management

- **Business Purpose:** Nhắc khi nhân sự sắp hết thời gian thử việc. (Nguồn: `SRC-HRM-05`)
- **Actors:** Chưa đề cập.
- **Main Process:** Tạo nhắc khi nhân sự sắp hết thời gian thử việc. (Nguồn: `SRC-HRM-05`)
- **Business Rules đã xác nhận:** Có nhắc trước khi thời gian thử việc sắp kết thúc. (Nguồn: `SRC-HRM-05`)
- **Data Objects:** Nhân sự; thời gian thử việc; nhắc việc/cảnh báo. (Nguồn: `SRC-HRM-05`)
- **Open Questions:** Ai thuộc diện thử việc? “Sắp hết” là bao lâu? Ai nhận nhắc và qua kênh nào? Sau nhắc cần ghi nhận quyết định gì?

## Event Reminder

- **Business Purpose:** Nhắc sinh nhật và ngày lễ. (Nguồn: `SRC-HRM-06`)
- **Actors:** Chưa đề cập.
- **Main Process:** Tạo nhắc liên quan sinh nhật và ngày lễ. (Nguồn: `SRC-HRM-06`)
- **Business Rules đã xác nhận:** Có nhắc sinh nhật và ngày lễ. (Nguồn: `SRC-HRM-06`)
- **Data Objects:** Sinh nhật; ngày lễ; nhắc việc/cảnh báo. (Nguồn: `SRC-HRM-06`)
- **Open Questions:** Nhắc sinh nhật của ai, nhắc cho ai, vào lúc nào và qua kênh nào? Nguồn lịch ngày lễ và phạm vi ngày lễ là gì?

## Onboarding / Offboarding

- **Business Purpose:** Hỗ trợ các hoạt động được nêu khi nhân sự vào hoặc rời công ty. (Nguồn: `SRC-HRM-07`)
- **Actors:** Chưa đề cập.
- **Main Process:** Khi nhân sự vào/rời công ty: cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công. (Nguồn: `SRC-HRM-07`)
- **Business Rules đã xác nhận:** Các hoạt động được nêu thuộc onboarding/offboarding. (Nguồn: `SRC-HRM-07`)
- **Data Objects:** Nhân sự; tài khoản; thiết bị; chấm công; onboarding; offboarding. (Nguồn: `SRC-HRM-07`)
- **Open Questions:** Sự kiện nào kích hoạt, ai phụ trách, thời điểm thực hiện, loại tài khoản/thiết bị, thứ tự và tiêu chí hoàn thành là gì? “Chấm công khi nhân sự vào/rời công ty” có nghĩa nghiệp vụ nào?

## Reporting

- **Business Purpose:** Thống kê tình hình biến động nhân sự. (Nguồn: `SRC-HRM-08`)
- **Actors:** Chưa đề cập.
- **Main Process:** Lập báo cáo/thống kê tình hình biến động nhân sự. (Nguồn: `SRC-HRM-08`)
- **Business Rules đã xác nhận:** Có báo cáo thống kê biến động nhân sự. (Nguồn: `SRC-HRM-08`)
- **Data Objects:** Báo cáo; thống kê; biến động nhân sự. (Nguồn: `SRC-HRM-08`)
- **Open Questions:** “Biến động nhân sự” bao gồm những sự kiện nào? Chỉ số, kỳ, bộ lọc, người sử dụng, mục đích và đầu ra báo cáo là gì?
