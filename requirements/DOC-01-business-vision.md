# DOC-01 Business Vision & Scope

## 1. Document Information

| Field | Value |
|---|---|
| Document ID | DOC-01 |
| Version | — |
| Status | Draft |
| Created From | `SRC-HRM-01` đến `SRC-HRM-08`; `discovery/requirement-traceability.md`; `discovery/hrm-domain-breakdown.md`; `discovery/assumption-audit.md` |

## 2. Business Context

### Bối cảnh nghiệp vụ đã được xác nhận

Nguồn xác nhận nhu cầu về tám nhóm capability HRM được liệt kê dưới đây. Nguồn không cung cấp business problem, quy trình hiện tại, tổ chức áp dụng, sponsor, hoặc lý do triển khai.

**TBD — Requires confirmation:** Business problem và bối cảnh vận hành hiện tại. Không có bằng chứng trong `SRC-HRM-01` đến `SRC-HRM-08`.

### Các capability hệ thống cần hỗ trợ

| Capability | Nội dung đã xác nhận | Source Reference |
|---|---|---|
| Employee Management | Quản lý hồ sơ nhân sự gồm thông tin cá nhân, vị trí công việc và thời gian làm việc. | `SRC-HRM-01` |
| Leave Management | Nhân viên xin nghỉ phải được HR và quản lý trực tiếp phê duyệt trước khi nghỉ. | `SRC-HRM-02` |
| Attendance Management | Dữ liệu chấm công được nhập từ file Excel. | `SRC-HRM-03` |
| Payroll Management | Bảng lương được mô tả: ngày công - ngày nghỉ phép + lương tăng ca. | `SRC-HRM-04` |
| Probation Reminder | Có nhắc khi nhân sự sắp hết thời gian thử việc. | `SRC-HRM-05` |
| Event Reminder | Có nhắc sinh nhật và ngày lễ. | `SRC-HRM-06` |
| Onboarding / Offboarding | Bao gồm cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công khi nhân sự vào/rời công ty. | `SRC-HRM-07` |
| HR Reporting | Có báo cáo thống kê tình hình biến động nhân sự. | `SRC-HRM-08` |

### Thông tin cần đánh dấu TBD

- **TBD — Requires confirmation:** Bất kỳ business problem hoặc lợi ích mong đợi nào ngoài danh sách capability.
- **TBD — Requires confirmation:** Các quy tắc chi tiết, actor bổ sung, dữ liệu, quy trình và tiêu chí vận hành của từng capability.
- **TBD — Requires confirmation:** Ranh giới tổ chức/pháp nhân/chi nhánh áp dụng.

## 3. Business Objectives

### Confirmed Objectives

Không có business objective được diễn đạt rõ ràng trong nguồn được phép sử dụng. Các `SRC-HRM` xác nhận capability, không xác nhận mục tiêu kinh doanh hoặc kết quả mong đợi.

### Objectives Pending Confirmation

- **TBD — Requires confirmation:** Mục tiêu kinh doanh của dự án HRM.
- **TBD — Requires confirmation:** Vấn đề nghiệp vụ cần giải quyết.
- **TBD — Requires confirmation:** Kết quả mong đợi và mức ưu tiên giữa các capability.

## 4. Scope

### In Scope

| # | Scope Item | Description | Source Reference | Known Limitations |
|---|---|---|---|---|
| 1 | Employee Management | Quản lý hồ sơ nhân sự gồm thông tin cá nhân, vị trí công việc và thời gian làm việc. | `SRC-HRM-01` | Chưa xác định trường dữ liệu, vòng đời nhân sự, trạng thái việc làm, quyền quản lý/xem, lịch sử thay đổi hoặc xử lý khi nhân sự rời công ty. |
| 2 | Leave Management | Nhân viên xin nghỉ phải được HR và quản lý trực tiếp phê duyệt trước khi nghỉ. | `SRC-HRM-02` | Chưa xác định dữ liệu đơn, loại nghỉ, thứ tự/quan hệ phê duyệt, trạng thái, từ chối, sửa/hủy hoặc liên hệ với chấm công và lương. |
| 3 | Attendance Management | Nhập dữ liệu chấm công từ file Excel. | `SRC-HRM-03` | Chưa xác định nguồn/người nhập, cấu trúc file, tần suất, định danh nhân sự, xử lý lỗi/trùng hoặc quy tắc cập nhật dữ liệu. |
| 4 | Payroll Management | Bảng lương được mô tả: ngày công - ngày nghỉ phép + lương tăng ca. | `SRC-HRM-04` | Chưa xác định đây có phải công thức thực tế, ý nghĩa/đơn vị các thành phần, cách quy đổi, kỳ lương, quy tắc tăng ca, phê duyệt hoặc đầu ra. |
| 5 | Probation Reminder | Nhắc khi nhân sự sắp hết thời gian thử việc. | `SRC-HRM-05` | Chưa xác định đối tượng, cách xác định ngày kết thúc, thời điểm/tần suất/kênh nhắc, người nhận hoặc hành động sau nhắc. |
| 6 | Event Reminder | Nhắc sinh nhật và ngày lễ. | `SRC-HRM-06` | Chưa xác định đối tượng, người nhận, thời điểm/kênh nhắc, nguồn lịch ngày lễ hoặc phạm vi ngày lễ. |
| 7 | Onboarding / Offboarding | Cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công khi nhân sự vào/rời công ty. | `SRC-HRM-07` | Chưa xác định trigger, trách nhiệm, thời điểm, loại tài khoản/thiết bị, thứ tự, tiêu chí hoàn thành hay ý nghĩa nghiệp vụ của chấm công khi vào/rời công ty. |
| 8 | HR Reporting | Báo cáo thống kê tình hình biến động nhân sự. | `SRC-HRM-08` | Chưa xác định khái niệm biến động nhân sự, chỉ số, kỳ, bộ lọc, người dùng, mục đích hoặc định dạng đầu ra. |

### Out of Scope

Các mục dưới đây không được xác nhận trong nguồn được phép sử dụng, nên không thuộc phạm vi đã xác nhận của DOC-01 này. Chúng không phải quyết định loại bỏ vĩnh viễn khỏi dự án; cần xác nhận khách hàng trước khi có thể đưa vào scope.

- Các chức năng HRM phổ biến không có source, bao gồm nhưng không giới hạn: quản lý loại/hạn mức nghỉ, tuyển dụng, đào tạo, đánh giá hiệu suất, thuế/bảo hiểm, quản lý ca làm, tích hợp, phân quyền, bảo mật/audit và lưu trữ dữ liệu.
- Mọi quyết định chưa được khách hàng xác nhận, gồm business goal, success criteria, stakeholder ngoài các actor có nguồn, ranh giới tổ chức, và các quy tắc chi tiết của tám capability.

## 5. Stakeholders

| Stakeholder | Evidence | Vai trò đã được xác nhận |
|---|---|---|
| Employee | `SRC-HRM-02` | Là người xin nghỉ phép. |
| HR | `SRC-HRM-02` | Phê duyệt đơn nghỉ phép trước khi nhân viên nghỉ. |
| Direct Manager | `SRC-HRM-02` | Phê duyệt đơn nghỉ phép trước khi nhân viên nghỉ. |

**TBD — Requires confirmation:** Các stakeholder khác, sponsor/project owner, người ký duyệt tài liệu và RACI.

## 6. Success Criteria

**TBD — Requires confirmation:** Không có KPI, chỉ số thành công, hoặc tiêu chí nghiệm thu được xác nhận trong các nguồn được phép sử dụng.

## 7. Open Issues

Các vấn đề chưa xác nhận được quản lý trong **DOC-03 Discovery Questions**.

| Open Issue | Reference |
|---|---|
| Business problem, business objective, sponsor/project owner, phạm vi tổ chức và success criteria. | TBD — DOC-03 Discovery Questions |
| Thành phần hồ sơ, vòng đời và trạng thái nhân sự. | `SRC-HRM-01`; TBD — DOC-03 Discovery Questions |
| Quy tắc tạo đơn, quan hệ phê duyệt, trạng thái và ngoại lệ nghỉ phép. | `SRC-HRM-02`; TBD — DOC-03 Discovery Questions |
| Cấu trúc, quản trị và xử lý dữ liệu nhập Excel chấm công. | `SRC-HRM-03`; TBD — DOC-03 Discovery Questions |
| Ý nghĩa và cách vận hành công thức bảng lương. | `SRC-HRM-04`; TBD — DOC-03 Discovery Questions |
| Quy tắc, người nhận và kênh nhắc thử việc/sự kiện. | `SRC-HRM-05`, `SRC-HRM-06`; TBD — DOC-03 Discovery Questions |
| Trigger, trách nhiệm và quy tắc hoàn thành onboarding/offboarding. | `SRC-HRM-07`; TBD — DOC-03 Discovery Questions |
| Định nghĩa, chỉ số và nhu cầu sử dụng báo cáo biến động nhân sự. | `SRC-HRM-08`; TBD — DOC-03 Discovery Questions |

## 8. Traceability and Assumption Control

- Mọi capability in-scope đều có `Source Reference` trỏ tới một `SRC-HRM`.
- Không có assumption được đưa vào như fact; xem `discovery/assumption-audit.md`.
- Các thông tin không có evidence được thể hiện là **TBD — Requires confirmation** hoặc giới hạn đã biết.
