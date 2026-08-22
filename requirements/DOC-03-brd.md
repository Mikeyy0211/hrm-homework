# DOC-03 Business Requirement Document

## Document Information

| Field | Value |
|---|---|
| Document ID | DOC-03 |
| Version | — |
| Status | Draft — not ready for baseline |
| Created From | `discovery/source-requirement.md`; `discovery/requirement-traceability.md`; `supporting/functional-requirements-working-document.md`; `requirements/DOC-01-business-vision.md`; `requirements/DOC-02-stakeholder-analysis.md` |

## Business Requirements

| Business Requirement ID | Description | Source Reference | Known Limitation |
|---|---|---|---|
| BR-HRM-01 | Quản lý hồ sơ nhân sự gồm thông tin cá nhân, vị trí công việc và thời gian làm việc. | `SRC-HRM-01` | Chi tiết dữ liệu, actor, lifecycle và trạng thái chưa rõ. |
| BR-HRM-02 | Employee xin nghỉ phải được HR và Direct Manager phê duyệt trước khi nghỉ. | `SRC-HRM-02` | Dữ liệu đơn, approval flow, thứ tự, status và ngoại lệ chưa rõ. |
| BR-HRM-03 | Dữ liệu chấm công được nhập từ file Excel. | `SRC-HRM-03` | Format, actor, validation, mapping và tần suất chưa rõ. |
| BR-HRM-04 | Bảng lương được mô tả: ngày công - ngày nghỉ phép + lương tăng ca. | `SRC-HRM-04` | Cách diễn giải và áp dụng mô tả chưa rõ. |
| BR-HRM-05 | Có nhắc khi nhân sự sắp hết thời gian thử việc. | `SRC-HRM-05` | Điều kiện “sắp hết”, recipient và kênh nhắc chưa rõ. |
| BR-HRM-06 | Có nhắc sinh nhật và ngày lễ. | `SRC-HRM-06` | Đối tượng, recipient, lịch nguồn và kênh nhắc chưa rõ. |
| BR-HRM-07 | Onboarding/offboarding gồm cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công khi nhân sự vào/rời công ty. | `SRC-HRM-07` | Trigger, owner, loại tài khoản/thiết bị, thứ tự và completion chưa rõ. |
| BR-HRM-08 | Có báo cáo thống kê biến động nhân sự. | `SRC-HRM-08` | Định nghĩa biến động, chỉ số, kỳ và người dùng chưa rõ. |

## Functional Requirements Summary

Các FR dưới đây được tái sử dụng nguyên ý nghĩa từ working document; các mục TBD vẫn là TBD.

| Requirement ID | Capability | Source Reference | Actor | Description | Business Rule | Acceptance Criteria | Open Questions |
|---|---|---|---|---|---|---|---|
| EMP-FR-001 | Employee Management | `SRC-HRM-01` | TBD — Requires confirmation. | Hỗ trợ quản lý hồ sơ nhân sự gồm thông tin cá nhân, vị trí công việc và thời gian làm việc. | Hồ sơ gồm ba nhóm thông tin được nêu trong nguồn. | Hỗ trợ ba nhóm thông tin đã nêu. | Thành phần dữ liệu, lifecycle/trạng thái, actor, lịch sử và xử lý khi rời công ty. |
| LEV-FR-001 | Leave Management | `SRC-HRM-02` | Employee | Hỗ trợ Employee xin nghỉ phép. | Ngoài yêu cầu phê duyệt của HR và Direct Manager trước khi nghỉ, rule khác chưa rõ. | Có thể xác định Employee là người xin nghỉ phép; dữ liệu bắt buộc: TBD. | Dữ liệu đơn, loại/số ngày phép, sửa/hủy, trạng thái và điều kiện xin nghỉ. |
| LEV-FR-002 | Leave Management | `SRC-HRM-02` | HR; Direct Manager | Đơn nghỉ của Employee phải được HR và Direct Manager phê duyệt trước khi Employee nghỉ. | Cả hai là participants bắt buộc; thứ tự và quan hệ approval chưa xác nhận. | Có phê duyệt của cả HR và Direct Manager trước khi Employee nghỉ. | Approval result, xử lý không phê duyệt, approval sequence, uỷ quyền, override và nghỉ trước phê duyệt. |
| ATT-FR-001 | Attendance Management | `SRC-HRM-03` | TBD — Requires confirmation. | Hỗ trợ nhập dữ liệu chấm công từ file Excel. | File Excel là nguồn nhập dữ liệu chấm công. | Dữ liệu chấm công được nhập từ file Excel; format và tiêu chí hợp lệ: TBD. | Nguồn/người nhập, tần suất, cấu trúc, mapping, lỗi/trùng, cập nhật và dependency. |
| PAY-FR-001 | Payroll Management | `SRC-HRM-04` | TBD — Requires confirmation. | Hỗ trợ bảng lương theo mô tả nguồn. | Cách diễn giải hoặc áp dụng mô tả payroll: TBD. | TBD — Requires confirmation cách diễn giải và áp dụng mô tả payroll. | Ý nghĩa/nguồn thành phần, kỳ, tăng ca, phê duyệt, chốt, đầu ra và quyền xem. |
| PRO-FR-001 | Probation Reminder | `SRC-HRM-05` | TBD — Requires confirmation. | Hỗ trợ nhắc khi nhân sự sắp hết thời gian thử việc. | Nhắc liên quan tới nhân sự sắp hết thời gian thử việc. | Có nhắc cho trường hợp nêu trên; tiêu chí “sắp hết”: TBD. | Đối tượng, ngày kết thúc, lead time, recipient, kênh và kết quả thử việc. |
| EVT-FR-001 | Event Reminder | `SRC-HRM-06` | TBD — Requires confirmation. | Hỗ trợ nhắc sinh nhật và ngày lễ. | Sinh nhật và ngày lễ là hai nội dung nhắc được xác nhận. | Capability nhắc bao gồm sinh nhật và ngày lễ; lịch nguồn/phạm vi/cách gửi: TBD. | Đối tượng, recipient, thời điểm, kênh, nguồn lịch và phạm vi ngày lễ. |
| ONB-FR-001 | Onboarding / Offboarding | `SRC-HRM-07` | TBD — Requires confirmation. | Hỗ trợ cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công khi nhân sự vào/rời công ty. | Các hoạt động nêu trong nguồn thuộc onboarding/offboarding. | Capability bao gồm các hoạt động nêu; loại, thời điểm và completion: TBD. | Trigger, trách nhiệm, loại tài khoản/thiết bị, thứ tự, due date, completion và xử lý trễ. |
| RPT-FR-001 | HR Reporting | `SRC-HRM-08` | TBD — Requires confirmation. | Hỗ trợ báo cáo thống kê tình hình biến động nhân sự. | Định nghĩa biến động nhân sự chưa xác nhận. | Có báo cáo thống kê biến động nhân sự; chỉ số, kỳ và output: TBD. | Định nghĩa biến động, chỉ số, kỳ, filter, user, mục đích, export và dữ liệu nguồn. |

## Scope

### In Scope

| Capability | Source Reference |
|---|---|
| Employee Management | `SRC-HRM-01` |
| Leave Management | `SRC-HRM-02` |
| Attendance Management | `SRC-HRM-03` |
| Payroll Management | `SRC-HRM-04` |
| Probation Reminder | `SRC-HRM-05` |
| Event Reminder | `SRC-HRM-06` |
| Onboarding / Offboarding | `SRC-HRM-07` |
| HR Reporting | `SRC-HRM-08` |

### Scope Boundary

Các feature HRM không có source evidence và mọi quyết định chưa được xác nhận không thuộc phạm vi đã xác nhận của BRD này. Chúng cần stakeholder xác nhận trước khi được đưa vào scope.

## Business Rules

| Rule ID | Business Rule | Source Reference |
|---|---|---|
| BR-HRM-01 | Hồ sơ nhân sự gồm thông tin cá nhân, vị trí công việc và thời gian làm việc. | `SRC-HRM-01` |
| BR-HRM-02 | Employee xin nghỉ phải được HR và Direct Manager phê duyệt trước khi nghỉ. | `SRC-HRM-02` |
| BR-HRM-03 | Dữ liệu chấm công được nhập từ file Excel. | `SRC-HRM-03` |
| BR-HRM-04 | Bảng lương được mô tả: ngày công - ngày nghỉ phép + lương tăng ca. | `SRC-HRM-04` |
| BR-HRM-05 | Có nhắc khi nhân sự sắp hết thời gian thử việc. | `SRC-HRM-05` |
| BR-HRM-06 | Có nhắc sinh nhật và ngày lễ. | `SRC-HRM-06` |
| BR-HRM-07 | Onboarding/offboarding gồm cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công khi nhân sự vào/rời công ty. | `SRC-HRM-07` |
| BR-HRM-08 | Có báo cáo thống kê biến động nhân sự. | `SRC-HRM-08` |

## Open Questions

Các câu hỏi chưa xác nhận được lưu đầy đủ tại `discovery/discovery-questions.md`.

| Area | Open Question Reference |
|---|---|
| Business and Scope | `Q-BUS-001` đến `Q-BUS-006` |
| Employee Management | `Q-EMP-001` đến `Q-EMP-004` |
| Leave Management | `Q-LEV-001` đến `Q-LEV-007` |
| Attendance | `Q-ATT-001` đến `Q-ATT-005` |
| Payroll | `Q-PAY-001` đến `Q-PAY-005` |
| Probation Reminder | `Q-PRO-001` đến `Q-PRO-004` |
| Event Reminder | `Q-EVT-001` đến `Q-EVT-004` |
| Onboarding / Offboarding | `Q-ONB-001` đến `Q-ONB-005` |
| Reporting | `Q-RPT-001` đến `Q-RPT-004` |

## Traceability and Assumption Control

- Mỗi business requirement, functional requirement và business rule có `SRC-HRM` reference.
- Không có assumption được đưa vào như fact.
- Các nội dung chưa có evidence được giữ là TBD hoặc Open Questions.
