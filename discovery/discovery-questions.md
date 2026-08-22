# Supporting Discovery Questions (Former DOC-03)

## 1. Document Information

| Field | Value |
|---|---|
| Document ID | Supporting Discovery Questions (Former DOC-03) |
| Version | — |
| Status | Draft |
| Created From | `discovery/requirement-traceability.md`; `discovery/hrm-domain-breakdown.md`; `discovery/assumption-audit.md`; `requirements/DOC-01-business-vision.md`; `supporting/functional-requirements-working-document.md` |

## 2. Discovery Question List

Các câu hỏi dưới đây là câu hỏi cần xác nhận với stakeholder, không phải requirement hoặc business rule mới.

## Business Discovery

### Q-BUS-001
**Category:** Business  
**Question:** Vấn đề nghiệp vụ hiện tại mà dự án HRM cần giải quyết là gì?  
**Why This Matters:** Nguồn hiện chỉ xác nhận capability, không xác nhận business problem.  
**Related Source:** DOC-01 §2; `SRC-HRM-01` đến `SRC-HRM-08`.  
**Impact:** Business context và phạm vi ưu tiên của toàn bộ tài liệu.  
**Priority:** High

### Q-BUS-002
**Category:** Business  
**Question:** Business objective chính của dự án HRM là gì?  
**Why This Matters:** Không thể coi tám capability là business objective nếu chưa được xác nhận.  
**Related Source:** DOC-01 §4; `SRC-HRM-01` đến `SRC-HRM-08`.
**Impact:** Business Vision, scope prioritisation và các quyết định sau Discovery.  
**Priority:** High

### Q-BUS-003
**Category:** Business  
**Question:** Ai là sponsor hoặc business owner có quyền quyết định các yêu cầu nghiệp vụ?  
**Why This Matters:** Chưa có owner có evidence để xác nhận hoặc giải quyết các câu hỏi mở.  
**Related Source:** DOC-01 §10; `SRC-HRM-01` đến `SRC-HRM-08`.
**Impact:** Governance, phê duyệt requirement và xử lý mâu thuẫn.  
**Priority:** High

### Q-BUS-004
**Category:** Business  
**Question:** Success criteria hoặc cách đánh giá dự án thành công là gì?  
**Why This Matters:** Không có KPI hay tiêu chí thành công được nguồn xác nhận.  
**Related Source:** DOC-01 §9; `SRC-HRM-01` đến `SRC-HRM-08`.
**Impact:** Xác nhận outcome và đánh giá kết quả dự án.  
**Priority:** High

### Q-BUS-005
**Category:** Scope  
**Question:** Hệ thống áp dụng cho tổ chức, pháp nhân, chi nhánh hoặc địa điểm nào?  
**Why This Matters:** Ranh giới tổ chức chưa được xác nhận.  
**Related Source:** DOC-01 §3 và §6; `SRC-HRM-01` đến `SRC-HRM-08`.
**Impact:** Scope, dữ liệu và các quy tắc vận hành có thể áp dụng.  
**Priority:** Medium

### Q-BUS-006
**Category:** Scope  
**Question:** Có capability, quy trình hoặc quyết định nào được xác nhận là ngoài phạm vi dự án không?  
**Why This Matters:** DOC-01 chỉ ghi các nội dung không có source là chưa được xác nhận, không phải quyết định loại trừ vĩnh viễn.  
**Related Source:** DOC-01 §6 Out of Scope; `SRC-HRM-01` đến `SRC-HRM-08`.
**Impact:** Tránh scope creep và phân biệt “chưa xác nhận” với “ngoài phạm vi”.  
**Priority:** Medium

## Employee Management

### Q-EMP-001
**Category:** Employee Management  
**Question:** Hồ sơ nhân sự cần gồm những thành phần chi tiết nào trong nhóm thông tin cá nhân, vị trí công việc và thời gian làm việc?  
**Why This Matters:** Nguồn chỉ xác nhận ba nhóm thông tin, không xác nhận trường dữ liệu.  
**Related Source:** `SRC-HRM-01`; EMP-FR-001.  
**Impact:** Nội dung hồ sơ và acceptance criteria của Employee Management.  
**Priority:** High

### Q-EMP-002
**Category:** Employee Management  
**Question:** Actor nào được tạo, cập nhật, xem hoặc quản lý hồ sơ nhân sự?  
**Why This Matters:** Actor của Employee Management chưa được xác nhận.  
**Related Source:** EMP-FR-001; DOC-01 §8.
**Impact:** Process flow và trách nhiệm nghiệp vụ của hồ sơ nhân sự.  
**Priority:** High

### Q-EMP-003
**Category:** Employee Management  
**Question:** Có trạng thái nhân sự hoặc quy tắc chuyển trạng thái nào cần quản lý không?  
**Why This Matters:** Vòng đời và trạng thái nhân sự chưa được nguồn đề cập.  
**Related Source:** `SRC-HRM-01`; EMP-FR-001.  
**Impact:** Employee lifecycle và các quan hệ với capability khác.  
**Priority:** Medium

### Q-EMP-004
**Category:** Employee Management  
**Question:** “Thời gian làm việc” trong hồ sơ nhân sự có nghĩa nghiệp vụ gì?  
**Why This Matters:** Thuật ngữ này chưa được định nghĩa và không được suy diễn là ca làm, ngày vào làm hay lịch sử làm việc.  
**Related Source:** `SRC-HRM-01`; EMP-FR-001.  
**Impact:** Data definition của hồ sơ và các dependency tiềm năng.  
**Priority:** High

## Leave Management

### Q-LEV-001
**Category:** Leave Management  
**Question:** Đơn nghỉ phép cần có những dữ liệu nào?  
**Why This Matters:** Nguồn xác nhận nhân viên xin nghỉ nhưng không xác nhận nội dung đơn.  
**Related Source:** `SRC-HRM-02`; LEV-FR-001.  
**Impact:** Submit request flow và acceptance criteria của đơn nghỉ.  
**Priority:** High

### Q-LEV-002
**Category:** Leave Management  
**Question:** Approval workflow của đơn nghỉ phép vận hành như thế nào ngoài việc có HR và Direct Manager?  
**Why This Matters:** Chỉ có participants và điều kiện phê duyệt trước khi nghỉ được xác nhận.  
**Related Source:** `SRC-HRM-02`; LEV-FR-002.  
**Impact:** Process flow và business rule của Leave Management.  
**Priority:** High

### Q-LEV-003
**Category:** Leave Management  
**Question:** HR và Direct Manager phê duyệt theo thứ tự nào?  
**Why This Matters:** Nguồn không xác nhận manager-first, HR-first hoặc quan hệ khác.  
**Related Source:** `SRC-HRM-02`; LEV-FR-002.  
**Impact:** Approval process flow và trách nhiệm từng participant.  
**Priority:** High

### Q-LEV-004
**Category:** Leave Management  
**Question:** Hai phê duyệt diễn ra song song, tuần tự, hay theo một quy tắc khác?  
**Why This Matters:** Không được suy diễn cách phối hợp giữa hai approval participants.  
**Related Source:** `SRC-HRM-02`; LEV-FR-002.  
**Impact:** Approval workflow và acceptance criteria.  
**Priority:** High

### Q-LEV-005
**Category:** Leave Management  
**Question:** Đơn nghỉ phép có các trạng thái hoặc approval result nào, và ý nghĩa của từng trạng thái là gì?  
**Why This Matters:** Source không xác nhận trạng thái, từ chối hoặc kết quả sau phê duyệt.  
**Related Source:** LEV-FR-001; LEV-FR-002.  
**Impact:** Approval result, process flow và cách xử lý ngoại lệ.  
**Priority:** High

### Q-LEV-006
**Category:** Leave Management  
**Question:** Quy tắc sửa hoặc hủy đơn nghỉ phép là gì?  
**Why This Matters:** Sửa/hủy đơn chưa được nguồn đề cập.  
**Related Source:** LEV-FR-001.  
**Impact:** Lifecycle của đơn nghỉ và handling sau submit.  
**Priority:** Medium

### Q-LEV-007
**Category:** Leave Management  
**Question:** Đơn nghỉ phép hoặc ngày nghỉ phép có liên hệ nghiệp vụ nào với chấm công hoặc payroll không?  
**Why This Matters:** Các cross-module relationship này chưa được xác nhận.  
**Related Source:** LEV-FR-001; LEV-FR-002; DOC-02 Functional Requirements §4.  
**Impact:** Scope liên module, attendance và payroll requirements.  
**Priority:** High

## Attendance

### Q-ATT-001
**Category:** Attendance  
**Question:** File Excel chấm công có format, cấu trúc hoặc cột dữ liệu nào?  
**Why This Matters:** Nguồn chỉ xác nhận Excel là nguồn nhập.  
**Related Source:** `SRC-HRM-03`; ATT-FR-001.  
**Impact:** Import process và acceptance criteria của Attendance Management.  
**Priority:** High

### Q-ATT-002
**Category:** Attendance  
**Question:** Ai upload hoặc thực hiện nhập file Excel chấm công?  
**Why This Matters:** Actor thực hiện import chưa được xác nhận.  
**Related Source:** ATT-FR-001.  
**Impact:** Process flow và ownership của attendance import.  
**Priority:** High

### Q-ATT-003
**Category:** Attendance  
**Question:** Tần suất nhập dữ liệu chấm công là gì?  
**Why This Matters:** Tần suất không có evidence.  
**Related Source:** ATT-FR-001.  
**Impact:** Quy trình vận hành attendance.  
**Priority:** Medium

### Q-ATT-004
**Category:** Attendance  
**Question:** Dữ liệu Excel cần được kiểm tra theo quy tắc nào; dữ liệu không hợp lệ hoặc trùng được xử lý ra sao?  
**Why This Matters:** Validation và xử lý lỗi/trùng chưa được nguồn đề cập.  
**Related Source:** ATT-FR-001.  
**Impact:** Import flow, data quality và acceptance criteria.  
**Priority:** High

### Q-ATT-005
**Category:** Attendance  
**Question:** Dữ liệu trong file Excel được mapping tới nhân sự bằng thông tin nào?  
**Why This Matters:** Cách nhận diện nhân sự khi import chưa được xác nhận.  
**Related Source:** `SRC-HRM-03`; ATT-FR-001.  
**Impact:** Mapping dữ liệu chấm công và xử lý lỗi import.  
**Priority:** High

## Payroll

### Q-PAY-001
**Category:** Payroll  
**Question:** “Ngày công - ngày nghỉ phép + lương tăng ca” có phải là công thức payroll chính thức không?  
**Why This Matters:** Nguồn chỉ mô tả công thức; không xác nhận cách diễn giải.  
**Related Source:** `SRC-HRM-04`; PAY-FR-001.  
**Impact:** Business rule và acceptance criteria của Payroll Management.  
**Priority:** High

### Q-PAY-002
**Category:** Payroll  
**Question:** Nguồn dữ liệu của “ngày công” là gì?  
**Why This Matters:** Không có evidence cho quan hệ Attendance Management → Payroll Management.  
**Related Source:** `SRC-HRM-04`; PAY-FR-001.  
**Impact:** Payroll input và cross-module dependency.  
**Priority:** High

### Q-PAY-003
**Category:** Payroll  
**Question:** Nguồn dữ liệu và ý nghĩa của “ngày nghỉ phép” trong mô tả payroll là gì?  
**Why This Matters:** Không có evidence cho quan hệ Leave Management → Payroll Management.  
**Related Source:** `SRC-HRM-02`; `SRC-HRM-04`; PAY-FR-001.  
**Impact:** Payroll input và cross-module dependency.  
**Priority:** High

### Q-PAY-004
**Category:** Payroll  
**Question:** Quy tắc hoặc cách xác định lương tăng ca là gì?  
**Why This Matters:** Nguồn chỉ nêu “lương tăng ca”, không xác nhận quy tắc hay đơn vị.  
**Related Source:** `SRC-HRM-04`; PAY-FR-001.  
**Impact:** Payroll business rule và calculation scope.  
**Priority:** High

### Q-PAY-005
**Category:** Payroll  
**Question:** Payroll được thực hiện theo kỳ nào?  
**Why This Matters:** Kỳ lương chưa được nguồn xác nhận.  
**Related Source:** PAY-FR-001.  
**Impact:** Payroll process flow và reporting period liên quan.  
**Priority:** Medium

## Probation Reminder

### Q-PRO-001
**Category:** Probation Reminder  
**Question:** Những nhân sự nào thuộc diện thử việc và ngày kết thúc thử việc được xác định từ đâu?  
**Why This Matters:** Đối tượng áp dụng và nguồn xác định thời điểm kết thúc chưa rõ.  
**Related Source:** `SRC-HRM-05`; PRO-FR-001.  
**Impact:** Điều kiện kích hoạt reminder.  
**Priority:** High

### Q-PRO-002
**Category:** Probation Reminder  
**Question:** “Sắp hết thời gian thử việc” được xác định như thế nào?  
**Why This Matters:** Không có lead time hoặc điều kiện kích hoạt được xác nhận.  
**Related Source:** `SRC-HRM-05`; PRO-FR-001.  
**Impact:** Reminder rule và acceptance criteria.  
**Priority:** High

### Q-PRO-003
**Category:** Probation Reminder  
**Question:** Ai nhận nhắc và qua kênh nào?  
**Why This Matters:** Recipient và notification channel chưa được đề cập.  
**Related Source:** PRO-FR-001.  
**Impact:** Reminder process flow.  
**Priority:** Medium

### Q-PRO-004
**Category:** Probation Reminder  
**Question:** Sau khi nhận nhắc, có hành động hoặc kết quả thử việc nào cần được ghi nhận không?  
**Why This Matters:** Hành động sau reminder chưa được xác nhận.  
**Related Source:** PRO-FR-001.  
**Impact:** Giới hạn capability Probation Reminder.  
**Priority:** Medium

## Event Reminder

### Q-EVT-001
**Category:** Event Reminder  
**Question:** Reminder sinh nhật áp dụng cho sinh nhật của ai?  
**Why This Matters:** Đối tượng sinh nhật chưa được nguồn xác nhận.  
**Related Source:** `SRC-HRM-06`; EVT-FR-001.  
**Impact:** Phạm vi Event Reminder.  
**Priority:** Medium

### Q-EVT-002
**Category:** Event Reminder  
**Question:** Ai nhận reminder sinh nhật và ngày lễ, vào thời điểm nào, qua kênh nào?  
**Why This Matters:** Recipient, timing và channel chưa được xác nhận.  
**Related Source:** `SRC-HRM-06`; EVT-FR-001.  
**Impact:** Event reminder process flow và acceptance criteria.  
**Priority:** Medium

### Q-EVT-003
**Category:** Event Reminder  
**Question:** Nguồn lịch ngày lễ là gì?  
**Why This Matters:** Nguồn không xác nhận lịch hoặc cơ quan quản lý ngày lễ.  
**Related Source:** `SRC-HRM-06`; EVT-FR-001.  
**Impact:** Dữ liệu và quy tắc Event Reminder.  
**Priority:** Medium

### Q-EVT-004
**Category:** Event Reminder  
**Question:** Phạm vi ngày lễ theo quốc gia, địa điểm hoặc ngày lễ công ty được xác định như thế nào?  
**Why This Matters:** Không được tự suy diễn phạm vi lịch ngày lễ.  
**Related Source:** EVT-FR-001.  
**Impact:** Scope và data definition của Event Reminder.  
**Priority:** Low

## Onboarding / Offboarding

### Q-ONB-001
**Category:** Onboarding / Offboarding  
**Question:** Trigger nào bắt đầu onboarding và offboarding?  
**Why This Matters:** Nguồn chỉ nêu bối cảnh nhân sự vào/rời công ty, chưa xác nhận sự kiện hoặc thời điểm kích hoạt.  
**Related Source:** `SRC-HRM-07`; ONB-FR-001.  
**Impact:** Process flow và thời điểm thực hiện các hoạt động.  
**Priority:** High

### Q-ONB-002
**Category:** Onboarding / Offboarding  
**Question:** Ai chịu trách nhiệm cho từng hoạt động cấp/thu hồi tài khoản, cấp/thu hồi thiết bị và chấm công?  
**Why This Matters:** Ownership chưa được xác nhận.  
**Related Source:** `SRC-HRM-07`; ONB-FR-001.  
**Impact:** Actor, workflow và trách nhiệm nghiệp vụ.  
**Priority:** High

### Q-ONB-003
**Category:** Onboarding / Offboarding  
**Question:** Những loại tài khoản nào thuộc phạm vi cấp hoặc thu hồi?  
**Why This Matters:** Nguồn chỉ nêu khái niệm tài khoản.  
**Related Source:** `SRC-HRM-07`; ONB-FR-001.  
**Impact:** Scope của onboarding/offboarding activities.  
**Priority:** Medium

### Q-ONB-004
**Category:** Onboarding / Offboarding  
**Question:** Những loại thiết bị nào thuộc phạm vi cấp hoặc thu hồi?  
**Why This Matters:** Nguồn chỉ nêu khái niệm thiết bị.  
**Related Source:** `SRC-HRM-07`; ONB-FR-001.  
**Impact:** Scope của onboarding/offboarding activities.  
**Priority:** Medium

### Q-ONB-005
**Category:** Onboarding / Offboarding  
**Question:** Khi nào một onboarding hoặc offboarding được xem là hoàn thành?  
**Why This Matters:** Tiêu chí hoàn thành, thứ tự và xác nhận hoàn thành chưa rõ.  
**Related Source:** ONB-FR-001.  
**Impact:** Process completion và acceptance criteria.  
**Priority:** High

## Reporting

### Q-RPT-001
**Category:** Reporting  
**Question:** “Biến động nhân sự” có nghĩa là những sự kiện hoặc thay đổi nào?  
**Why This Matters:** Thuật ngữ cốt lõi của báo cáo chưa được định nghĩa.  
**Related Source:** `SRC-HRM-08`; RPT-FR-001.  
**Impact:** Scope, data definition và nội dung báo cáo.  
**Priority:** High

### Q-RPT-002
**Category:** Reporting  
**Question:** Báo cáo biến động nhân sự được cung cấp cho ai và phục vụ mục đích nào?  
**Why This Matters:** Người dùng và mục đích sử dụng chưa được xác nhận.  
**Related Source:** RPT-FR-001.  
**Impact:** Actor, scope và output của Reporting.  
**Priority:** High

### Q-RPT-003
**Category:** Reporting  
**Question:** Báo cáo cần có những chỉ số nào?  
**Why This Matters:** Không có metric được nguồn xác nhận.  
**Related Source:** `SRC-HRM-08`; RPT-FR-001.  
**Impact:** Nội dung báo cáo và acceptance criteria.  
**Priority:** High

### Q-RPT-004
**Category:** Reporting  
**Question:** Báo cáo được lập theo kỳ hoặc khoảng thời gian nào?  
**Why This Matters:** Reporting period chưa được xác nhận.  
**Related Source:** RPT-FR-001.  
**Impact:** Process flow và định nghĩa output báo cáo.  
**Priority:** Medium

## 3. Review Constraints

- Mỗi câu hỏi trace tới một khoảng trống được ghi trong DOC-01 hoặc `DOC-02 Functional Requirements`, đồng thời có `SRC-HRM` hoặc FR reference liên quan.
- Không có câu nào là requirement: các mục đều yêu cầu stakeholder xác nhận thông tin chưa có evidence.
- Không có assumption hoặc feature HRM phổ biến được đưa vào như fact.
