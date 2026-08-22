# DOC-03 Business Requirement Document

## Document Information

| Field | Value |
|---|---|
| Document ID | DOC-03 |
| Version | — |
| Status | Draft — not ready for baseline |
| Created From | `discovery/source-requirement.md`; `discovery/requirement-traceability.md`; `supporting/functional-requirements-working-document.md`; `requirements/DOC-01-business-vision.md`; `requirements/DOC-02-stakeholder-analysis.md` |

## 2. Business Objectives

Business objectives chưa được nguồn xác nhận. Tham chiếu `requirements/DOC-01-business-vision.md` §4, mục tiêu `G-001`: **TBD — Requires confirmation**.

## 3. Scope

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

### Out of Scope

Các feature HRM không có source evidence và mọi quyết định chưa được stakeholder xác nhận không thuộc phạm vi đã xác nhận của BRD này. Chúng chỉ có thể được đưa vào scope sau khi có xác nhận.

## 4. Business Requirements

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

## 5. Functional Requirements

Các FR dưới đây giữ nguyên nội dung nghiệp vụ đã có, gồm Acceptance Criteria và Open Questions. Bản working document đầy đủ vẫn được lưu tại `supporting/functional-requirements-working-document.md`.

| Requirement ID | Capability | Source Reference | Actor | Description | Business Rule | Process Flow | Acceptance Criteria | Open Questions |
|---|---|---|---|---|---|---|---|---|
| EMP-FR-001 | Employee Management | `SRC-HRM-01` | TBD — Requires confirmation. | Hệ thống phải hỗ trợ quản lý hồ sơ nhân sự gồm thông tin cá nhân, vị trí công việc và thời gian làm việc. | Hồ sơ nhân sự gồm ba nhóm thông tin được nêu trong nguồn. | 1. Quản lý hồ sơ nhân sự. Chi tiết tạo, cập nhật, xem hoặc xử lý hồ sơ: TBD — Requires confirmation. | AC-EMP-001: Hồ sơ nhân sự hỗ trợ ba nhóm thông tin: thông tin cá nhân, vị trí công việc và thời gian làm việc. | Thành phần dữ liệu; vòng đời/trạng thái; actor; lịch sử thay đổi; xử lý khi rời công ty. |
| LEV-FR-001 | Leave Management | `SRC-HRM-02` | Employee | Hệ thống phải hỗ trợ Employee xin nghỉ phép. | Không có rule nào ngoài yêu cầu phê duyệt của HR và Direct Manager trước khi nghỉ. | 1. Employee xin nghỉ phép. 2. Dữ liệu đơn và các bước khác: TBD — Requires confirmation. | AC-LEV-001: Có thể xác định Employee là người xin nghỉ phép. Nội dung/dữ liệu bắt buộc của đơn: TBD — Requires confirmation. | Dữ liệu đơn; loại/số ngày phép; sửa/hủy; trạng thái; điều kiện xin nghỉ. |
| LEV-FR-002 | Leave Management | `SRC-HRM-02` | HR; Direct Manager | Đơn nghỉ phép của Employee phải được HR và Direct Manager phê duyệt trước khi Employee nghỉ. | Cả HR và Direct Manager là participants phê duyệt bắt buộc trước khi Employee nghỉ. Thứ tự, song song hay tuần tự chưa xác nhận. | 1. Employee xin nghỉ phép. 2. HR và Direct Manager phê duyệt trước khi nghỉ. 3. Quan hệ/thứ tự: TBD — Requires confirmation. | AC-LEV-002: Một đơn nghỉ chỉ đáp ứng rule đã xác nhận khi có phê duyệt của cả HR và Direct Manager trước khi Employee nghỉ. | Approval result/states; xử lý không phê duyệt; sequence; không suy diễn loại/hạn mức/từ chối/hủy; uỷ quyền; override; nghỉ trước phê duyệt. |
| ATT-FR-001 | Attendance Management | `SRC-HRM-03` | TBD — Requires confirmation. | Hệ thống phải hỗ trợ nhập dữ liệu chấm công từ file Excel. | File Excel là nguồn nhập dữ liệu chấm công được xác nhận. | 1. Nhập dữ liệu chấm công từ file Excel. Kiểm tra và xử lý sau nhập: TBD — Requires confirmation. | AC-ATT-001: Dữ liệu chấm công được nhập từ file Excel. Cấu trúc file và tiêu chí dữ liệu hợp lệ: TBD — Requires confirmation. | Nguồn file; người nhập; tần suất; cấu trúc/cột; định danh nhân sự; lỗi/trùng; replace/merge/append; liên hệ với nghỉ phép và lương. |
| PAY-FR-001 | Payroll Management | `SRC-HRM-04` | TBD — Requires confirmation. | Hệ thống phải hỗ trợ bảng lương theo mô tả nguồn: ngày công - ngày nghỉ phép + lương tăng ca. | Chỉ xác nhận nguyên văn mô tả nguồn. Đây có phải công thức thực tế và cách diễn giải thành phần: TBD — Requires confirmation. | 1. Hỗ trợ bảng lương theo mô tả nguồn. Quy trình tính, duyệt, chốt hoặc xem: TBD — Requires confirmation. | AC-PAY-001: TBD — Requires confirmation. Cần xác nhận cách diễn giải và áp dụng mô tả “ngày công - ngày nghỉ phép + lương tăng ca” trong nghiệp vụ tính lương. | Ý nghĩa/đơn vị; tính chất công thức; nguồn dữ liệu; kỳ lương; tăng ca; lương cơ bản; điều chỉnh; phê duyệt; chốt; đầu ra; quyền xem. |
| PRO-FR-001 | Probation Reminder | `SRC-HRM-05` | TBD — Requires confirmation. | Hệ thống phải hỗ trợ nhắc khi nhân sự sắp hết thời gian thử việc. | Việc nhắc liên quan tới nhân sự sắp hết thời gian thử việc. | 1. Nhân sự sắp hết thời gian thử việc. 2. Có nhắc. Thời điểm, người nhận, hành động: TBD — Requires confirmation. | AC-PRO-001: Có nhắc đối với trường hợp nhân sự sắp hết thời gian thử việc. Tiêu chí xác định “sắp hết”: TBD — Requires confirmation. | Đối tượng; ngày kết thúc; lead time; tần suất; người nhận; kênh; kết quả thử việc. |
| EVT-FR-001 | Event Reminder | `SRC-HRM-06` | TBD — Requires confirmation. | Hệ thống phải hỗ trợ nhắc sinh nhật và ngày lễ. | Sinh nhật và ngày lễ là hai nội dung nhắc được xác nhận. | 1. Có sự kiện sinh nhật hoặc ngày lễ. 2. Có nhắc. Điều kiện, thời điểm, người nhận: TBD — Requires confirmation. | AC-EVT-001: Capability nhắc bao gồm cả sinh nhật và ngày lễ. Nguồn lịch, phạm vi và cách gửi nhắc: TBD — Requires confirmation. | Sinh nhật của ai; người nhận; thời điểm/kênh; nguồn lịch; quốc gia/địa điểm; ngày lễ công ty. |
| ONB-FR-001 | Onboarding / Offboarding | `SRC-HRM-07` | TBD — Requires confirmation. | Hệ thống phải hỗ trợ cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công khi nhân sự vào/rời công ty. | Các hoạt động nêu trong nguồn thuộc onboarding/offboarding và xảy ra khi nhân sự vào/rời công ty. | 1. Nhân sự vào hoặc rời công ty. 2. Thực hiện các hoạt động nêu. Trigger, thứ tự, ownership: TBD — Requires confirmation. | AC-ONB-001: Capability bao gồm cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công khi nhân sự vào/rời công ty. Loại, thời điểm, tiêu chí hoàn thành: TBD — Requires confirmation. | Trigger/effective date; trách nhiệm; loại tài khoản/thiết bị; thứ tự; due date; completion; xử lý trễ; ý nghĩa chấm công. |
| RPT-FR-001 | HR Reporting | `SRC-HRM-08` | TBD — Requires confirmation. | Hệ thống phải hỗ trợ báo cáo thống kê tình hình biến động nhân sự. | Báo cáo thống kê biến động nhân sự là capability được xác nhận; định nghĩa biến động chưa xác nhận. | 1. Tạo/xem báo cáo thống kê biến động nhân sự: TBD — Requires confirmation. Nguồn không xác định actor, kỳ, đầu ra. | AC-RPT-001: Có báo cáo thống kê tình hình biến động nhân sự. Chỉ số, định nghĩa, bộ lọc, kỳ, định dạng: TBD — Requires confirmation. | Sự kiện biến động; chỉ số; kỳ; chiều/bộ lọc; người dùng; mục đích; export; so sánh lịch sử; dữ liệu nguồn. |

## 6. Business Rules

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

## 7. Constraints

**TBD — Requires confirmation:** Không có constraints nghiệp vụ hoặc kỹ thuật nào được source xác nhận ngoài phạm vi và các business rules đã liệt kê.

## 8. Open Questions

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

## 9. Traceability and Assumption Control

- Mỗi business requirement, functional requirement và business rule có `SRC-HRM` reference.
- Không có assumption được đưa vào như fact.
- Các nội dung chưa có evidence được giữ là TBD hoặc Open Questions.
