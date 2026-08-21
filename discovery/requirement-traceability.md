# Requirement Traceability Matrix

Mọi thông tin trong ma trận này chỉ được truy xuất từ `SRC-HRM-01` đến `SRC-HRM-08` trong [source-requirement.md](source-requirement.md). Các phần thiếu được giữ là câu hỏi mở, không phải yêu cầu đã xác nhận.

| Requirement ID | Source ID | Domain | Description | Confirmed Information | Missing Information |
|---|---|---|---|---|---|
| REQ-HRM-01 | SRC-HRM-01 | Employee Management | Quản lý hồ sơ nhân sự. | Hồ sơ gồm thông tin cá nhân, vị trí công việc và thời gian làm việc. | Thành phần cụ thể của từng nhóm thông tin; vòng đời nhân sự; trạng thái việc làm; người tạo/cập nhật/xem hồ sơ; lưu lịch sử; cách xử lý hồ sơ khi nhân sự rời công ty. |
| REQ-HRM-02 | SRC-HRM-02 | Leave Management | Xử lý đơn nghỉ phép của nhân viên. | Nhân viên xin nghỉ; HR và quản lý trực tiếp phải phê duyệt trước khi nghỉ. | Dữ liệu đơn nghỉ; loại nghỉ; quan hệ/thứ tự phê duyệt; xử lý từ chối; sửa/hủy đơn; điều kiện cả hai phê duyệt; trạng thái đơn; liên hệ với chấm công và lương. |
| REQ-HRM-03 | SRC-HRM-03 | Attendance Management | Nhập dữ liệu chấm công từ file Excel. | Dữ liệu chấm công được nhập từ file Excel. | Nguồn file; người nhập; tần suất; cấu trúc file; định danh nhân sự; xử lý dữ liệu sai/trùng; cách cập nhật; liên hệ với nghỉ phép và lương. |
| REQ-HRM-04 | SRC-HRM-04 | Payroll Management | Lập bảng lương theo mô tả công thức nguồn. | Công thức được mô tả là “ngày công - ngày nghỉ phép + lương tăng ca”. | Đây là công thức thực tế hay mô tả khái niệm; ý nghĩa và đơn vị của từng thành phần; cách quy đổi ra tiền; kỳ lương; mức/quy tắc tăng ca; điều chỉnh; người tính/phê duyệt/xem bảng lương. |
| REQ-HRM-05 | SRC-HRM-05 | Probation Management | Nhắc khi nhân sự sắp hết thời gian thử việc. | Có nhắc khi nhân sự sắp hết thời gian thử việc. | Đối tượng áp dụng; nguồn/nguyên tắc xác định ngày kết thúc; thời điểm/tần suất nhắc; người nhận; kênh nhắc; hành động sau nhắc; kết quả thử việc. |
| REQ-HRM-06 | SRC-HRM-06 | Event Reminder | Nhắc sinh nhật và ngày lễ. | Có nhắc sinh nhật và ngày lễ. | Đối tượng sinh nhật; người nhận; thời điểm/kênh nhắc; nguồn lịch ngày lễ; phạm vi địa điểm/quốc gia; ngày lễ công ty. |
| REQ-HRM-07 | SRC-HRM-07 | Onboarding / Offboarding | Thực hiện cấp/thu hồi tài khoản, thiết bị và chấm công khi nhân sự vào hoặc rời công ty. | Onboarding/offboarding gồm cấp tài khoản, thu hồi tài khoản, cấp thiết bị, thu hồi thiết bị và chấm công khi nhân sự vào/rời công ty. | Sự kiện kích hoạt; thời điểm hiệu lực; chủ thể chịu trách nhiệm; loại tài khoản/thiết bị; thứ tự công việc; xác nhận hoàn thành; xử lý trễ; lưu vết lịch sử. |
| REQ-HRM-08 | SRC-HRM-08 | Reporting | Báo cáo thống kê biến động nhân sự. | Có báo cáo thống kê tình hình biến động nhân sự. | Định nghĩa “biến động nhân sự”; chỉ số; kỳ báo cáo; chiều phân tích/lọc; người dùng; mục đích; định dạng/xuất báo cáo; nhu cầu so sánh lịch sử. |

## Kiểm tra truy xuất

- Mỗi requirement trong bảng có đúng một Source ID thuộc `SRC-HRM-01` đến `SRC-HRM-08`.
- Không có thông tin ngoài nguồn được ghi là đã xác nhận.
