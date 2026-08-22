# Tổng hợp session Discovery — HRM Homework

**Ngày:** 2026-08-22  
**Phase:** Discovery  
**Phạm vi:** Tổng hợp các prompt và output đã trao đổi trước prompt yêu cầu tổng hợp session. File này không bao gồm prompt tổng hợp và output tạo bản tổng hợp trước đó.

## 1. Prompt: kiểm tra phase và DOC đã có

### Prompt

`Phase: discovery — @docs/ — dự án đang ở phase nào? Liệt kê DOC đã có và trạng thái.`

### Output

- Dự án được xác định ở **Discovery — pre-DOC / chưa bắt đầu tạo artifact Minipower**.
- `docs/` chỉ có `docs/project-context.md`.
- `project-context.md` là context dự án, không phải DOC-01/02/03.
- Chưa có `memory/profile.json`, `memory/`, `docs/01-project/`, `doc-registry.md` hoặc baseline.
- DOC-01 đến DOC-18 chưa có trong `docs/`.
- Kết luận: chưa có business goal, success metrics, stakeholder register hoặc in/out scope đủ để hoàn thành DOC-01–03.

## 2. Prompt: review BRD tại đường dẫn `docs/01-project`

### Prompt

`Phase: discovery — @docs/01-project/DOC-03-brd.md — BRD đã đủ chưa? Thiếu mục nào?`

### Output

- File `docs/01-project/DOC-03-brd.md` không tồn tại.
- Không có nội dung mục 3 hoặc mục 7 để review.
- Theo template DOC-03, các phần cần có:
  1. Kiểm soát phiên bản.
  2. Tóm tắt điều hành.
  3. Mục tiêu nghiệp vụ và success metrics.
  4. In-scope, out-of-scope, biên giới/giao diện.
  5. AS-IS và pain points.
  6. TO-BE và lợi ích.
  7. Business requirements.
  8. Business rules tham chiếu DOC-04.
  9. Constraints.
  10. Assumptions.
  11. Dependencies.
  12. Glossary.
  13. Phê duyệt Business Owner/Sponsor.
- Kết luận lúc đó: DOC-03 **Not started / chưa có bản Draft**.

## 3. Prompt: trace BRQ ở mục 7 về BO ở mục 3

### Prompt

`Phase: discovery — @docs/01-project/DOC-03-brd.md — với mỗi BRQ ở mục 7, cho biết nó phục vụ mục tiêu BO nào ở mục 3. Trình bày thành bảng.`

### Output

- Không thể lập bảng vì file `docs/01-project/DOC-03-brd.md` chưa tồn tại.
- Chưa có dữ liệu `BO-*` ở mục 3 hoặc `BRQ-*` ở mục 7.

## 4. Prompt: kiểm tra BO không có BRQ và BRQ không có BO

### Prompt

`@…DOC-03-brd.md — có mục tiêu BO nào ở mục 3 mà chưa có BRQ nào phục vụ không? Có BRQ nào ở mục 7 không phục vụ mục tiêu BO nào không?`

### Output

- File tại đường dẫn `docs/01-project/DOC-03-brd.md` vẫn không tồn tại.
- Không thể kết luận hai chiều vì chưa có dữ liệu BO/BRQ.
- Cả hai danh sách ở trạng thái **chưa có dữ liệu**, không phải đã trace đầy đủ.

## 5. Prompt: review BRD tại đường dẫn thực tế

### Prompt

`[DOC-03-brd.md](/Users/tuanminh/Desktop/hrm-homework/requirements/DOC-03-brd.md) — có mục tiêu BO nào ở mục 3 mà chưa có BRQ nào phục vụ không?`

### Output và phát hiện

File thực tế tồn tại tại `requirements/DOC-03-brd.md`, với cấu trúc khác template:

- Business Objectives ở **§2**, không phải mục 3.
- Business Requirements ở **§4**, không phải mục 7.
- Requirement dùng mã `BR-HRM-*`, không phải `BRQ-*`.
- Mục tiêu duy nhất là `G-001`, nội dung `TBD — Requires confirmation`.
- Không có `BR-HRM-*` nào trace tới `G-001`.

| BO | BR phục vụ | Kết luận |
|---|---|---|
| `G-001` | Không có | Chưa xác nhận và chưa trace |

## 6. Prompt: kiểm tra BRQ không phục vụ BO

### Prompt

`[DOC-03-brd.md](/Users/tuanminh/Desktop/hrm-homework/requirements/DOC-03-brd.md) — có BRQ nào ở mục 7 không phục vụ mục tiêu BO nào không?`

### Output

Tất cả 8 business requirements hiện chưa trace tới BO:

| Business requirement | BO phục vụ | Trạng thái |
|---|---|---|
| `BR-HRM-01` | Không có | Chưa trace |
| `BR-HRM-02` | Không có | Chưa trace |
| `BR-HRM-03` | Không có | Chưa trace |
| `BR-HRM-04` | Không có | Chưa trace |
| `BR-HRM-05` | Không có | Chưa trace |
| `BR-HRM-06` | Không có | Chưa trace |
| `BR-HRM-07` | Không có | Chưa trace |
| `BR-HRM-08` | Không có | Chưa trace |

Các requirement hiện chỉ trace về source `SRC-HRM-*`, chưa trace về BO.

## 7. Prompt: kiểm tra BRQ → FR trong DOC-06

### Prompt

`Phase: discovery — [docs](/Users/tuanminh/Desktop/hrm-homework/docs/) — mỗi BRQ trong BRD đã có FR nào ở DOC-06 giải quyết chưa?`

### Output

- Không tìm thấy DOC-06 trong `docs/` hoặc `requirements/`.
- BRD có bảng FR tạm thời ở §5, nhưng đây chưa phải DOC-06 độc lập.
- Vì DOC-06 chưa tồn tại, chưa có trace chính thức `BRQ → FR`.
- Không thể kết luận nghiệp vụ đã được giải quyết đầy đủ; hiện chỉ có thể nói **chưa có dữ liệu DOC-06 để trace**.

## 8. Prompt: bước tiếp theo

### Prompt

`Phase: discovery — [docs] — tiếp theo tôi cần làm gì? Trả lời ngắn, theo ưu tiên.`

### Output

1. Xác nhận mục tiêu nghiệp vụ `G-001` hoặc thay bằng các `BO-*` cụ thể, kèm success metrics.
2. Lập trace `BR-HRM-* → BO-*` và xử lý requirement không phục vụ objective nào.
3. Hoàn thiện in-scope, out-of-scope, module list và boundary.
4. Hoàn thiện stakeholder/decision maker và assumption log.
5. Review/sign-off DOC-01–03 ở mức Draft được chấp nhận.
6. Sau khi BO và scope được chốt, mới chuyển sang requirements và tạo DOC-06 để trace `BRQ → FR → AC`.

## 9. Prompt: rút gọn discovery cho dự án một người

### Prompt

`Phase: discovery — [docs] — dự án nhỏ, một người làm. Bước nào rút gọn được? Bỏ thì mất gì?`

### Output

Có thể rút gọn artifact, nhưng không nên bỏ các quyết định cốt lõi.

### Nên giữ

- Business problem và `BO-*`.
- Success metrics.
- In-scope/out-of-scope.
- Module list.
- Assumptions và open questions.
- Trace `BRQ → BO`.
- Người xác nhận và ngày xác nhận.

### Có thể rút gọn

- Gộp DOC-01–03 thành một Discovery Brief 1–2 trang.
- RACI thành Owner / Decision maker / User.
- ROI chi tiết thành 1–2 success metrics.
- Workshop/interview log nếu không có cuộc họp.
- Glossary chỉ giữ thuật ngữ dễ gây hiểu nhầm.
- Formal sign-off thành `Confirmed by / Date`.

### Không nên bỏ

- Scope boundary: bỏ sẽ mất kiểm soát scope.
- Success metrics: bỏ sẽ không đo được kết quả.
- Assumptions: bỏ sẽ biến giả định thành fact không kiểm soát.
- Decision maker: bỏ sẽ không biết ai xác nhận nghiệp vụ.

## 10. Tổng kết trạng thái sau session

### Phase

**Discovery — chưa đạt exit criteria.**

### Đã có

- `docs/project-context.md`.
- `requirements/DOC-01-business-vision.md`.
- `requirements/DOC-02-stakeholder-analysis.md`.
- `requirements/DOC-03-brd.md` ở trạng thái Draft.
- BRD có 8 capability và 8 business requirements `BR-HRM-01` đến `BR-HRM-08`.
- BRD có source references, business rules, constraints và open questions.

### Chưa có/chưa đạt

- BO được stakeholder xác nhận.
- Success metrics được xác nhận.
- Trace `BR-HRM-* → BO-*`.
- DOC-06 độc lập và trace `BRQ → FR → AC`.
- Scope review/module list được xác nhận.
- Assumption log rõ ràng.
- Stakeholder/decision maker sign-off.
- Baseline.

### Kết luận

Dự án chưa sẵn sàng chuyển sang DOC-06. Việc ưu tiên là xác nhận mục tiêu nghiệp vụ, hoàn thiện scope và trace `BR-HRM-* → BO-*`, sau đó review DOC-01–03 trước khi viết FR chi tiết.

**File này là session transcript/summary trong `brainstorm/`; không phải baseline và không thay thế DOC-01–03.**

