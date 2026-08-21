# DOC-02 Functional Requirements

## 1. Document Information

| Field | Value |
|---|---|
| Document ID | DOC-02 Functional Requirements |
| Version | — |
| Status | Draft — not ready for baseline |
| Created From | `SRC-HRM-01` đến `SRC-HRM-08`; `discovery/requirement-traceability.md`; `discovery/hrm-domain-breakdown.md`; `requirements/DOC-01-business-vision.md`; `requirements/DOC-02-business-capability-domain-model.md` |

## Terminology

| Term | Meaning |
|---|---|
| Employee | Nhân viên |
| HR | HR |
| Direct Manager | Quản lý trực tiếp |

## 2. Readiness and Scope Constraint

`DOC-03 Discovery Questions` đã được tạo; tuy nhiên các câu hỏi mở vẫn cần stakeholder xác nhận trước khi baseline. Vì vậy, tài liệu này chỉ ghi các functional requirement tối thiểu có bằng chứng nguồn và giữ mọi nội dung chưa rõ ở trạng thái **TBD — Requires confirmation**. Tài liệu không được dùng làm baseline cho đến khi các vấn đề chặn được xác nhận.

## 3. Functional Requirements

### 3.1 Employee Management

#### EMP-FR-001 — Manage employee profile

| Field | Content |
|---|---|
| Requirement ID | EMP-FR-001 |
| Capability | Employee Management |
| Source Reference | `SRC-HRM-01` |
| Actor | TBD — Requires confirmation. |
| Description | Hệ thống phải hỗ trợ quản lý hồ sơ nhân sự gồm thông tin cá nhân, vị trí công việc và thời gian làm việc. |
| Business Rule | Hồ sơ nhân sự gồm ba nhóm thông tin được nêu trong nguồn. |
| Process Flow | 1. Quản lý hồ sơ nhân sự. Chi tiết tạo, cập nhật, xem hoặc xử lý hồ sơ chưa được xác nhận. |
| Acceptance Criteria | AC-EMP-001: Hồ sơ nhân sự hỗ trợ ba nhóm thông tin: thông tin cá nhân, vị trí công việc và thời gian làm việc. |
| Open Questions | Thành phần dữ liệu của mỗi nhóm; vòng đời/trạng thái nhân sự; actor quản lý/xem; lịch sử thay đổi; xử lý hồ sơ khi nhân sự rời công ty. |

### 3.2 Leave Management

#### LEV-FR-001 — Submit leave request

| Field | Content |
|---|---|
| Requirement ID | LEV-FR-001 |
| Capability | Leave Management |
| Source Reference | `SRC-HRM-02` |
| Actor | Employee |
| Description | Hệ thống phải hỗ trợ Employee xin nghỉ phép. |
| Business Rule | Không có rule nào ngoài yêu cầu phê duyệt của HR và Direct Manager trước khi nghỉ. |
| Process Flow | 1. Employee xin nghỉ phép. 2. Phần dữ liệu của đơn và các bước khác: TBD — Requires confirmation. |
| Acceptance Criteria | AC-LEV-001: Có thể xác định Employee là người xin nghỉ phép. Nội dung/dữ liệu bắt buộc của đơn: TBD — Requires confirmation. |
| Open Questions | Dữ liệu đơn; loại phép; số ngày phép; sửa/hủy đơn; trạng thái đơn; điều kiện Employee được xin nghỉ. |

#### LEV-FR-002 — Require approvals before leave

| Field | Content |
|---|---|
| Requirement ID | LEV-FR-002 |
| Capability | Leave Management |
| Source Reference | `SRC-HRM-02` |
| Actor | HR; Direct Manager |
| Description | Đơn nghỉ phép của Employee phải được HR và Direct Manager phê duyệt trước khi Employee nghỉ. |
| Business Rule | Cả HR và Direct Manager là participants phê duyệt bắt buộc trước khi Employee nghỉ. Thứ tự, song song hay tuần tự không được xác nhận. |
| Process Flow | 1. Employee xin nghỉ phép. 2. HR và Direct Manager phê duyệt trước khi nghỉ. 3. Quan hệ/thứ tự giữa hai phê duyệt: TBD — Requires confirmation. |
| Acceptance Criteria | AC-LEV-002: Một đơn nghỉ chỉ đáp ứng rule đã xác nhận khi có phê duyệt của cả HR và Direct Manager trước khi Employee nghỉ. |
| Open Questions | Approval result/states; xử lý khi một bên không phê duyệt; approval sequence chưa được xác nhận; không được suy diễn loại phép, hạn mức phép, từ chối hoặc hủy đơn; uỷ quyền; quyền override; Employee có được nghỉ trước khi đủ phê duyệt không. |

### 3.3 Attendance Management

#### ATT-FR-001 — Import attendance data from Excel

| Field | Content |
|---|---|
| Requirement ID | ATT-FR-001 |
| Capability | Attendance Management |
| Source Reference | `SRC-HRM-03` |
| Actor | TBD — Requires confirmation. |
| Description | Hệ thống phải hỗ trợ nhập dữ liệu chấm công từ file Excel. |
| Business Rule | File Excel là nguồn nhập dữ liệu chấm công được xác nhận. |
| Process Flow | 1. Nhập dữ liệu chấm công từ file Excel. Các bước kiểm tra và xử lý sau nhập: TBD — Requires confirmation. |
| Acceptance Criteria | AC-ATT-001: Dữ liệu chấm công được nhập từ file Excel. Cấu trúc file và tiêu chí dữ liệu hợp lệ: TBD — Requires confirmation. |
| Open Questions | Nguồn file; người nhập; tần suất; cấu trúc/cột file; định danh nhân sự; lỗi/dòng trùng; replace/merge/append; liên hệ với nghỉ phép và lương. |

### 3.4 Payroll Management

#### PAY-FR-001 — Support payroll according to source description

| Field | Content |
|---|---|
| Requirement ID | PAY-FR-001 |
| Capability | Payroll Management |
| Source Reference | `SRC-HRM-04` |
| Actor | TBD — Requires confirmation. |
| Description | Hệ thống phải hỗ trợ bảng lương theo mô tả nguồn: ngày công - ngày nghỉ phép + lương tăng ca. |
| Business Rule | Chỉ xác nhận nguyên văn mô tả nguồn. Đây có phải công thức tính lương thực tế và cách diễn giải các thành phần hay không: TBD — Requires confirmation. |
| Process Flow | 1. Hỗ trợ bảng lương theo mô tả nguồn. Quy trình tính, duyệt, chốt hoặc xem bảng lương: TBD — Requires confirmation. |
| Acceptance Criteria | AC-PAY-001: TBD — Requires confirmation. Cần xác nhận cách diễn giải và áp dụng mô tả “ngày công - ngày nghỉ phép + lương tăng ca” trong nghiệp vụ tính lương. |
| Open Questions | Ý nghĩa/đơn vị thành phần; tính chất công thức; nguồn ngày công/ngày nghỉ phép; kỳ lương; mức tăng ca; lương cơ bản; điều chỉnh; phê duyệt; chốt; đầu ra và quyền xem. |

### 3.5 Probation Reminder

#### PRO-FR-001 — Remind nearing probation end

| Field | Content |
|---|---|
| Requirement ID | PRO-FR-001 |
| Capability | Probation Reminder |
| Source Reference | `SRC-HRM-05` |
| Actor | TBD — Requires confirmation. |
| Description | Hệ thống phải hỗ trợ nhắc khi nhân sự sắp hết thời gian thử việc. |
| Business Rule | Việc nhắc liên quan tới nhân sự sắp hết thời gian thử việc. |
| Process Flow | 1. Nhân sự sắp hết thời gian thử việc. 2. Có nhắc. Thời điểm, người nhận và hành động sau nhắc: TBD — Requires confirmation. |
| Acceptance Criteria | AC-PRO-001: Có nhắc đối với trường hợp nhân sự sắp hết thời gian thử việc. Tiêu chí xác định “sắp hết”: TBD — Requires confirmation. |
| Open Questions | Đối tượng áp dụng; nguồn/cách xác định ngày kết thúc; lead time; tần suất; người nhận; kênh; kết quả thử việc. |

### 3.6 Event Reminder

#### EVT-FR-001 — Remind birthdays and holidays

| Field | Content |
|---|---|
| Requirement ID | EVT-FR-001 |
| Capability | Event Reminder |
| Source Reference | `SRC-HRM-06` |
| Actor | TBD — Requires confirmation. |
| Description | Hệ thống phải hỗ trợ nhắc sinh nhật và ngày lễ. |
| Business Rule | Sinh nhật và ngày lễ là hai nội dung nhắc được xác nhận. |
| Process Flow | 1. Có sự kiện sinh nhật hoặc ngày lễ. 2. Có nhắc. Điều kiện, thời điểm và người nhận: TBD — Requires confirmation. |
| Acceptance Criteria | AC-EVT-001: Capability nhắc bao gồm cả sinh nhật và ngày lễ. Nguồn lịch, phạm vi và cách gửi nhắc: TBD — Requires confirmation. |
| Open Questions | Sinh nhật của ai; người nhận; thời điểm/kênh; nguồn lịch ngày lễ; quốc gia/địa điểm; ngày lễ công ty. |

### 3.7 Onboarding / Offboarding

#### ONB-FR-001 — Support onboarding and offboarding activities

| Field | Content |
|---|---|
| Requirement ID | ONB-FR-001 |
| Capability | Onboarding / Offboarding |
| Source Reference | `SRC-HRM-07` |
| Actor | TBD — Requires confirmation. |
| Description | Hệ thống phải hỗ trợ cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công khi nhân sự vào/rời công ty. |
| Business Rule | Các hoạt động nêu trong nguồn thuộc onboarding/offboarding và xảy ra trong bối cảnh nhân sự vào/rời công ty. |
| Process Flow | 1. Nhân sự vào hoặc rời công ty. 2. Thực hiện các hoạt động được nêu: cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công. Trigger, thứ tự và ownership: TBD — Requires confirmation. |
| Acceptance Criteria | AC-ONB-001: Capability bao gồm cấp tài khoản, thu hồi tài khoản, cấp thiết bị, thu hồi thiết bị và chấm công khi nhân sự vào/rời công ty. Loại tài khoản/thiết bị, thời điểm và tiêu chí hoàn thành: TBD — Requires confirmation. |
| Open Questions | Trigger/effective date; trách nhiệm; loại tài khoản/thiết bị; thứ tự; due date; xác nhận hoàn thành; xử lý trễ; ý nghĩa nghiệp vụ của chấm công khi vào/rời công ty. |

### 3.8 HR Reporting

#### RPT-FR-001 — Report workforce movement

| Field | Content |
|---|---|
| Requirement ID | RPT-FR-001 |
| Capability | HR Reporting |
| Source Reference | `SRC-HRM-08` |
| Actor | TBD — Requires confirmation. |
| Description | Hệ thống phải hỗ trợ báo cáo thống kê tình hình biến động nhân sự. |
| Business Rule | Báo cáo thống kê biến động nhân sự là capability được xác nhận; định nghĩa biến động chưa được xác nhận. |
| Process Flow | 1. Tạo/xem báo cáo thống kê biến động nhân sự: TBD — Requires confirmation. Nguồn không xác định actor, kỳ hay đầu ra. |
| Acceptance Criteria | AC-RPT-001: Có báo cáo thống kê tình hình biến động nhân sự. Chỉ số, định nghĩa biến động, bộ lọc, kỳ và định dạng đầu ra: TBD — Requires confirmation. |
| Open Questions | Biến động gồm những sự kiện nào; chỉ số; kỳ; chiều phân tích/bộ lọc; người dùng; mục đích; export; so sánh lịch sử; dữ liệu nguồn. |

## 4. Cross-Module Constraints

- Không có evidence xác nhận Leave Management cung cấp dữ liệu cho Attendance Management hoặc Payroll Management.
- Không có evidence xác nhận Attendance Management cung cấp dữ liệu cho Payroll Management.
- Không có evidence xác nhận Employee Management là nguồn dữ liệu cho các capability còn lại.
- Các quan hệ trên đều **TBD — Requires confirmation** và không được xem là business rule.

## 5. Assumption Audit

No assumption introduced.

- Không xác định thứ tự/quan hệ approval, loại phép, số ngày phép hoặc approval result cho Leave Management.
- Không diễn giải mô tả payroll thành công thức tiền tệ hoặc quy tắc tính chi tiết.
- Không thêm actor, quyền hạn, loại dữ liệu, notification channel, lịch ngày lễ hoặc feature HRM phổ biến không có nguồn.

## 6. Baseline Blockers

- **BLOCKER:** DOC-03 Discovery Questions đã được tạo; tuy nhiên các câu hỏi mở trong từng FR vẫn cần stakeholder xác nhận trước khi baseline.
- **BLOCKER:** Acceptance criteria chi tiết không thể hoàn chỉnh cho các trường hợp thiếu rule, dữ liệu, actor hoặc process flow.
- **BLOCKER:** Document ID `DOC-02 Functional Requirements` có thể trùng numbering với `DOC-02 Business Capability / Domain Model`; cần xác nhận quy ước đánh số trước baseline.
