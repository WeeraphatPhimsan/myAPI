var request = new XMLHttpRequest();
var vocabObj = 
{
    "Vocabulary": [
        {
            "vocab": " absorbed cost ",
            "meaning": " ต้นทุนคิดเข้างาน "
        },
        {
            "vocab": " absorbed overhead ",
            "meaning": " ค่าใช้จ่ายในการผลิตคิดเข้างาน "
        },
        {
            "vocab": " absorption costing ",
            "meaning": " บัญชีต้นทุนรวม "
        },
        {
            "vocab": " accessary ",
            "meaning": " ชิ้นส่วนประกอบ "
        },
        {
            "vocab": " accelerated depreciation ",
            "meaning": " การคิดค่าเสื่อมราคาในอัตราเร่ง "
        },
        {
            "vocab": " accumulated income ",
            "meaning": " กำไรสะสม "
        },
        {
            "vocab": " account balance ",
            "meaning": " ยอดดุลในบัญชี "
        },
        {
            "vocab": " account current ",
            "meaning": " บัญชีเดินสะพัด "
        },
        {
            "vocab": " account analysis ",
            "meaning": " การวิเคราะห์รายการบัญชี "
        },
        {
            "vocab": " account payable ",
            "meaning": " เจ้าหนี้การค้า "
        },
        {
            "vocab": " account receivable ",
            "meaning": " ลูกหนี้การค้า "
        },
        {
            "vocab": " account receivable discounted ",
            "meaning": " ลูกหนี้จากการขายลด "
        },
        {
            "vocab": " account receivable turnover ",
            "meaning": " อัตราการการหมุนของลูกหนี้การค้า "
        },
        {
            "vocab": " account sales ",
            "meaning": " บัญชีรายละเอียดการขายสินค้า "
        },
        {
            "vocab": " account stated ",
            "meaning": " นำบัญชีหักกลบลบหนี้กัน "
        },
        {
            "vocab": " accountancy ",
            "meaning": " อาชีพบัญชี, งานบัญชี "
        },
        {
            "vocab": " accountant ",
            "meaning": " นักบัญชี "
        },
        {
            "vocab": " accounting ",
            "meaning": " การบัญชี "
        },
        {
            "vocab": " accounting change ",
            "meaning": " การปฏิบัติทางการบัญชี "
        },
        {
            "vocab": " accounting control ",
            "meaning": " การควบคุมทางการบัญชี "
        },
        {
            "vocab": " accounting cycle ",
            "meaning": " วงจรบัญชี "
        },
        {
            "vocab": " accounting entity ",
            "meaning": " หน่วยงานทางการบัญชี "
        },
        {
            "vocab": " accounting entry ",
            "meaning": " การบันทึกรายการในสมุดบัญชี "
        },
        {
            "vocab": " accounting equation ",
            "meaning": " สมการบัญชี "
        },
        {
            "vocab": " accounting evidence ",
            "meaning": " หลักฐานการบัญชี "
        },
        {
            "vocab": " accounting information ",
            "meaning": " ข้อสนเทศทางการบัญชี "
        },
        {
            "vocab": " Accounting Information System ",
            "meaning": " ระบบสารสนเทศทางการบัญชี "
        },
        {
            "vocab": " accounting manual ",
            "meaning": " คู่มืองานบัญชี "
        },
        {
            "vocab": " accounting period ",
            "meaning": " รอบระยะเวลาบัญชี "
        },
        {
            "vocab": " accounting policies ",
            "meaning": " นโยบายการบัญชี "
        },
        {
            "vocab": " accounting procedure ",
            "meaning": " วิธีการบัญชี "
        },
        {
            "vocab": " accounting records ",
            "meaning": " บันทึกทางการบัญชี "
        },
        {
            "vocab": " accounting standard ",
            "meaning": " มาตรฐานการบัญชี "
        },
        {
            "vocab": " accounting system ",
            "meaning": " ระบบบัญชี "
        },
        {
            "vocab": " accounting transaction ",
            "meaning": " รายการทางบัญชี "
        },
        {
            "vocab": " accounting unit ",
            "meaning": " หน่วยงานการบัญชี "
        },
        {
            "vocab": " accounting valuation ",
            "meaning": " การกำหนดมูลค่าทางการบัญชี "
        },
        {
            "vocab": " accrual ",
            "meaning": " ค้างรับค้างจ่าย "
        },
        {
            "vocab": " accrual basis ",
            "meaning": " เกณฑ์ค้างรับค้างจ่าย, เกณฑ์สิทธิ "
        },
        {
            "vocab": " accrued dividend ",
            "meaning": " เงินปันผลค้างจ่าย "
        },
        {
            "vocab": " accrued expense ",
            "meaning": " ค่าใช้จ่ายค้างจ่าย "
        },
        {
            "vocab": " accrued income ",
            "meaning": " รายได้ค้างรับ "
        },
        {
            "vocab": " accrued interest ",
            "meaning": " ดอกเบี้ยค้างจ่าย "
        },
        {
            "vocab": " accrued interest payable ",
            "meaning": " ดอกเบี้ยค้างจ่าย "
        },
        {
            "vocab": " accrued interest receivable ",
            "meaning": " ดอกเบี้ยค้างรับ "
        },
        {
            "vocab": " accumulate ",
            "meaning": " สะสม "
        },
        {
            "vocab": " accumulated depreciation ",
            "meaning": " ค่าเสื่อมราคาสะสม "
        },
        {
            "vocab": " accumulated dividend ",
            "meaning": " เงินปันผลสะสม "
        },
        {
            "vocab": " accrued liability ",
            "meaning": " หนี้สินค้างจ่าย "
        },
        {
            "vocab": " account receivable financing ",
            "meaning": " การจัดหาเงินโดยบัญชีลูกหนี้การค้า "
        },
        {
            "vocab": " activity ",
            "meaning": " กิจกรรม "
        },
        {
            "vocab": " actual cost ",
            "meaning": " ต้นทุนจริง "
        },
        {
            "vocab": " added value ",
            "meaning": " มูลค่าเพิ่ม "
        },
        {
            "vocab": " adjusted entry ",
            "meaning": " รายการปรับปรุง "
        },
        {
            "vocab": " adjusted trial balance ",
            "meaning": " งบทดลองหลังการปรับปรุง "
        },
        {
            "vocab": " adjustment ",
            "meaning": " การปรับปรุงรายการ "
        },
        {
            "vocab": " administrative accounting ",
            "meaning": " การบัญชีบริหาร "
        },
        {
            "vocab": " administrative audit ",
            "meaning": " การตรวจสอบด้านบริหาร "
        },
        {
            "vocab": " administrative expense ",
            "meaning": " ค่าใช้จ่ายในการบริหาร "
        },
        {
            "vocab": " advance ",
            "meaning": " เงินทดรอง "
        },
        {
            "vocab": " affiliated company ",
            "meaning": " บริษัทในเครือ "
        },
        {
            "vocab": " agenda ",
            "meaning": " วาระการประชุม "
        },
        {
            "vocab": " Agent ",
            "meaning": " ตัวแทน "
        },
        {
            "vocab": " aging schedule ",
            "meaning": " ตารางการจัดอายุหนี้ "
        },
        {
            "vocab": " allocate ",
            "meaning": " ปันส่วน, แบ่งส่วน "
        },
        {
            "vocab": " allocation ",
            "meaning": " การปันส่วน, การแบ่งส่วน "
        },
        {
            "vocab": " allowance ",
            "meaning": " ค่าเผื่อ "
        },
        {
            "vocab": " allowance for bad debts ",
            "meaning": " ค่าเผื่อหนี้สูญ "
        },
        {
            "vocab": " allowance for doubtful accounts ",
            "meaning": " ค่าเผื่อหนี้สงสัยจะสูญ "
        },
        {
            "vocab": " amortization ",
            "meaning": " การตัดบัญชี "
        },
        {
            "vocab": " analysis ",
            "meaning": " การวิเคราะห์ "
        },
        {
            "vocab": " analytical review ",
            "meaning": " การตรวจสอบโดยการวิเคราะห์ "
        },
        {
            "vocab": " annual audit ",
            "meaning": " การตรวจสอบบัญชีประจำปี "
        },
        {
            "vocab": " annual closing ",
            "meaning": " การปิดบัญชีประจำปี "
        },
        {
            "vocab": " annual financial statement ",
            "meaning": " งบการเงินประจำปี "
        },
        {
            "vocab": " annual report ",
            "meaning": " รายงานประจำปี "
        },
        {
            "vocab": " appraisal ",
            "meaning": " การประเมินราคา "
        },
        {
            "vocab": " appraisal surplus ",
            "meaning": " ส่วนเกินจากการประเมินราคา "
        },
        {
            "vocab": " appraised value ",
            "meaning": " มูลค่าราคาประเมิน "
        },
        {
            "vocab": " appropriated retained earnings, ",
            "meaning": " กำไรสะสมจัดสรร "
        },
        {
            "vocab": " appropriation ",
            "meaning": " การจัดสรร "
        },
        {
            "vocab": " appropriation account ",
            "meaning": " บัญชีจัดสรร "
        },
        {
            "vocab": " appropriation budget ",
            "meaning": " งบประมาณที่จัดสรร "
        },
        {
            "vocab": " appropriation of net income ",
            "meaning": " การจัดสรรกำไรสุทธิ "
        },
        {
            "vocab": " arbitrary ",
            "meaning": " กำหนดเอง "
        },
        {
            "vocab": " articles of association, ",
            "meaning": " ข้อบังคับของบริษัท "
        },
        {
            "vocab": " as at ",
            "meaning": " ณ วันที่ "
        },
        {
            "vocab": " asset ",
            "meaning": " ทรัพย์สิน "
        },
        {
            "vocab": " asset turnover ",
            "meaning": " อัตราการหมุนของสินทรัพย์ "
        },
        {
            "vocab": " assigned accounts receivable ",
            "meaning": " การใช้บัญชีลูกหนี้เป็นหลักประกัน "
        },
        {
            "vocab": " assignment ",
            "meaning": " การโอนสิทธิ "
        },
        {
            "vocab": " assumption ",
            "meaning": " สมมติฐาน "
        },
        {
            "vocab": " assumption ",
            "meaning": " ข้อสมมุติฐานทางการบัญชี "
        },
        {
            "vocab": " at par ",
            "meaning": " ราคาตามมูลค่า "
        },
        {
            "vocab": " audit ",
            "meaning": " การตรวจสอบบัญชี "
        },
        {
            "vocab": " audit adjustment ",
            "meaning": " รายการปรับปรุงจากการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit around the computer ",
            "meaning": " การตรวจสอบข้อมูลจากรายงานคอมพิวเตอร์ "
        },
        {
            "vocab": " audit evidence ",
            "meaning": " หลักฐานจากการสอบบัญชี "
        },
        {
            "vocab": " audit guide ",
            "meaning": " แนวทางการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit memorandum ",
            "meaning": " บันทึกงานตรวจสอบบัญชี "
        },
        {
            "vocab": " audit notebook ",
            "meaning": " สมุดบันทึกจากการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit opinion ",
            "meaning": " รายงานตรวจสอบบัญชี "
        },
        {
            "vocab": " audit period ",
            "meaning": " รอบระยะเวลาบัญชีที่ตรวจสอบ "
        },
        {
            "vocab": " audit plan ",
            "meaning": " แผนกการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit planning ",
            "meaning": " การวางแผนการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit program ",
            "meaning": " แนวการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit report ",
            "meaning": " รายงานการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit risk ",
            "meaning": " ความเสี่ยงในการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit technique ",
            "meaning": " เทคนิคการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit test ",
            "meaning": " การทดสอบในการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit through the computer ",
            "meaning": " การตรวจสอบการประมวลผลของคอมพิวเตอร์ "
        },
        {
            "vocab": " audit trail ",
            "meaning": " แนวทางการตรวจสอบ "
        },
        {
            "vocab": " audit working papers ",
            "meaning": " กระดาษทำการการตรวจสอบบัญชี "
        },
        {
            "vocab": " audit year ",
            "meaning": " ปีที่ทำการตรวจสอบบัญชี "
        },
        {
            "vocab": " auditability ",
            "meaning": " ความพร้อมที่จะให้ตรวจสอบบัญชี "
        },
        {
            "vocab": " auditing ",
            "meaning": " การตรวจสอบบัญชี "
        },
        {
            "vocab": " auditing procedure ",
            "meaning": " วิธีการตรวจสอบบัญชี "
        },
        {
            "vocab": " auditing standard ",
            "meaning": " มาตรฐานการตรวจสอบบัญชี "
        },
        {
            "vocab": " auditing standards ",
            "meaning": " มาตรฐานการตรวจสอบบัญชี "
        },
        {
            "vocab": " auditor ",
            "meaning": " ผู้ตรวจสอบบัญชี "
        },
        {
            "vocab": " auditor’s certificate ",
            "meaning": " คำรับรองของผู้สอบบัญชี "
        },
        {
            "vocab": " auditor’s opinion ",
            "meaning": " ความเห็นผู้สอบบัญชี "
        },
        {
            "vocab": " auditor’s report ",
            "meaning": " รายงานของผู้สอบบัญชี "
        },
        {
            "vocab": " authorized capital stock ",
            "meaning": " หุ้นทุนจดทะเบียน "
        },
        {
            "vocab": " authorized company ",
            "meaning": " บริษัทได้รับอนุญาต "
        },
        {
            "vocab": " authorized security ",
            "meaning": " หลักทรัพย์ได้รับอนุญาต "
        },
        {
            "vocab": " average ",
            "meaning": " ถัวเฉลี่ย "
        },
        {
            "vocab": " average collection period ",
            "meaning": " ระยะเวลาการรับชำระหนี้ถัวเฉลี่ย "
        },
        {
            "vocab": "  ",
            "meaning": "  "
        },
        {
            "vocab": " bad debt ",
            "meaning": " หนี้สูญ "
        },
        {
            "vocab": " balance ",
            "meaning": " ยอดคงเหลือ "
        },
        {
            "vocab": " balance sheet ",
            "meaning": " งบดุล "
        },
        {
            "vocab": " balance sheet account ",
            "meaning": " บัญชีงบดุล "
        },
        {
            "vocab": " bank ",
            "meaning": " บัญชี ฝากเงินธนาคาร "
        },
        {
            "vocab": " bank balance ",
            "meaning": " ยอดคงเหลือในบัญชีเงินฝากธนาคาร "
        },
        {
            "vocab": " bank charge ",
            "meaning": " ค่าธรรมเนียมธนาคาร "
        },
        {
            "vocab": " bank confirmation ",
            "meaning": " หนังสือยืนยันยอดจากธนาคาร "
        },
        {
            "vocab": " bank credit ",
            "meaning": " เครดิตธนาคาร "
        },
        {
            "vocab": " bank discount ",
            "meaning": " ส่วนลดธนาคาร "
        },
        {
            "vocab": " bank loan ",
            "meaning": " เงินกู้ธนาคาร "
        },
        {
            "vocab": " bank note ",
            "meaning": " ธนบัตร "
        },
        {
            "vocab": " bank overdraft ",
            "meaning": " เงินเบิกเกินบัญชีธนาคาร "
        },
        {
            "vocab": " bank reconciliation ",
            "meaning": " งบกระทบยอดเงินฝากธนาคาร "
        },
        {
            "vocab": " bank report ",
            "meaning": " รายงานเงินฝากธนาคาร "
        },
        {
            "vocab": " bank statement ",
            "meaning": " ใบแจ้งยอดเงินฝากจากธนาคาร "
        },
        {
            "vocab": " bank statement ",
            "meaning": " ใบแจ้งยอดเงินฝากธนาคาร "
        },
        {
            "vocab": " barter ",
            "meaning": " การแลกเปลี่ยน "
        },
        {
            "vocab": " base period, ",
            "meaning": " ปีที่ใช้เป็นปีฐาน "
        },
        {
            "vocab": " basic assumption of accounting ",
            "meaning": " ข้อสมมุติมูลฐานทางการบัญชี "
        },
        {
            "vocab": " basic concept ",
            "meaning": " แนวความคิดเบื้องต้น "
        },
        {
            "vocab": " basic principle of accounting ",
            "meaning": " หลักการบัญชีเบื้องต้น "
        },
        {
            "vocab": " basis of accounting ",
            "meaning": " เกณฑ์ทางการบัญชี "
        },
        {
            "vocab": " batch costing ",
            "meaning": " วิธีการคิดต้นทุนในการผลิตแต่ละครั้ง "
        },
        {
            "vocab": " bias ",
            "meaning": " ความลำเอียง "
        },
        {
            "vocab": " bill of exchange ",
            "meaning": " ตั๋วแลกเงิน "
        },
        {
            "vocab": " bill of lading ",
            "meaning": " ใบตราส่งสินค้า "
        },
        {
            "vocab": " bill payable ",
            "meaning": " เจ้าหนี้ตั๋วเงิน "
        },
        {
            "vocab": " bill receivable ",
            "meaning": " ลูกหนี้ตั๋วเงิน "
        },
        {
            "vocab": " black market ",
            "meaning": " ตลาดมืด "
        },
        {
            "vocab": " bond ",
            "meaning": " หุ้น "
        },
        {
            "vocab": " bond discount ",
            "meaning": " ส่วนต่ำกว่ามูลค่าหุ้นกู้ "
        },
        {
            "vocab": " bond premium ",
            "meaning": " ส่วนเกินมูลค่าหุ้นกู้ "
        },
        {
            "vocab": " bond, debenture ",
            "meaning": " พันธบัตร "
        },
        {
            "vocab": " book of account ",
            "meaning": " สมุดบัญชี "
        },
        {
            "vocab": " book of original entry, ",
            "meaning": " สมุดรายวันขั้นต้น "
        },
        {
            "vocab": " book value ",
            "meaning": " มูลค่าตามบัญชี "
        },
        {
            "vocab": " book value per share ",
            "meaning": " มูลค่าตามบัญชีต่อหุ้น "
        },
        {
            "vocab": " bookkeeper ",
            "meaning": " พนักงานบัญชี "
        },
        {
            "vocab": " bookkeeping ",
            "meaning": " การลงบัญชี "
        },
        {
            "vocab": " bound fund ",
            "meaning": " กองทุนพันธบัตร "
        },
        {
            "vocab": " bought day book ",
            "meaning": " สมุดรายวันซื้อ "
        },
        {
            "vocab": " branch ",
            "meaning": " สาขา "
        },
        {
            "vocab": " branch accounts ",
            "meaning": " บัญชีสาขา "
        },
        {
            "vocab": " break-even analysis ",
            "meaning": " การวิเคราะห์จุดคุ้มทุน "
        },
        {
            "vocab": " break-even chart ",
            "meaning": " ผังแสดงจุดคุ้มทุน "
        },
        {
            "vocab": " break-even point ",
            "meaning": " จุดคุ้มทุน "
        },
        {
            "vocab": " bring forward ",
            "meaning": " ยอดยกมา "
        },
        {
            "vocab": " broker ",
            "meaning": " นายหน้า "
        },
        {
            "vocab": " brokerage ",
            "meaning": " ค่านายหน้า "
        },
        {
            "vocab": " brought forward ",
            "meaning": " ยอดยกมา "
        },
        {
            "vocab": " budget ",
            "meaning": " งบประมาณ "
        },
        {
            "vocab": " budget document ",
            "meaning": " เอกสารการจัดทำงบประมาณ "
        },
        {
            "vocab": " budget manual ",
            "meaning": " คู่มือการจัดทำงบประมาณ "
        },
        {
            "vocab": " budget period ",
            "meaning": " รอบระยะเวลางบประมาณ "
        },
        {
            "vocab": " budget period ",
            "meaning": " ปีงบประมาณ "
        },
        {
            "vocab": " budget variance ",
            "meaning": " ผลที่ต่างจากงบประมาณ "
        },
        {
            "vocab": " budgetary control ",
            "meaning": " การควบคุมโดยใช้งบประมาณดำเนินงาน "
        },
        {
            "vocab": " building, plant ",
            "meaning": " อาคาร "
        },
        {
            "vocab": " business combination ",
            "meaning": " การควบกิจการ "
        },
        {
            "vocab": " business risks ",
            "meaning": " ความเสี่ยงทางธุรกิจ "
        },
        {
            "vocab": " business transaction ",
            "meaning": " รายการทางธุรกิจ "
        },
        {
            "vocab": " by product ",
            "meaning": " ผลิตผลพลอยได้ "
        },
        {
            "vocab": " basis swap ",
            "meaning": " การแลกเปลี่ยนอัตราดอกเบี้ยอ้างอิง "
        },
        {
            "vocab": " capacity ratio ",
            "meaning": " อัตราส่วนของกำลังการผลิต "
        },
        {
            "vocab": " capacity variance ",
            "meaning": " ผลต่างของกำลังการผลิต "
        },
        {
            "vocab": " capital ",
            "meaning": " ทุน "
        },
        {
            "vocab": " capital account ",
            "meaning": " บัญชีทุน "
        },
        {
            "vocab": " capital budget ",
            "meaning": " งบประมาณรายจ่ายการลงทุน "
        },
        {
            "vocab": " capital expenditure ",
            "meaning": " รายจ่ายการลงทุน "
        },
        {
            "vocab": " capital fund ",
            "meaning": " เงินกองทุนสะสม "
        },
        {
            "vocab": " capital gain ",
            "meaning": " กำไรส่วนทุน "
        },
        {
            "vocab": " capital reserve ",
            "meaning": " ทุนสำรอง "
        },
        {
            "vocab": " capital stock ",
            "meaning": " ทุนเรือนหุ้น "
        },
        {
            "vocab": " capital surplus ",
            "meaning": " ส่วนเกินทุน "
        },
        {
            "vocab": " carry forward ",
            "meaning": " ยอดยกไป "
        },
        {
            "vocab": " carrying cost ",
            "meaning": " ต้นทุนในการจัดเก็บสินค้า "
        },
        {
            "vocab": " cash ",
            "meaning": " เงินสด "
        },
        {
            "vocab": " cash on hand ",
            "meaning": " เงินสดในมือ "
        },
        {
            "vocab": " cash account ",
            "meaning": " บัญชีเงินสด "
        },
        {
            "vocab": " cash at bank ",
            "meaning": " เงินฝากธนาคาร "
        },
        {
            "vocab": " cash basis ",
            "meaning": " เกณฑ์เงินสด "
        },
        {
            "vocab": " cash book ",
            "meaning": " สมุดบัญชีเงินสด "
        },
        {
            "vocab": " cash book C.B. ",
            "meaning": " สมุดบัญชีเงินสด "
        },
        {
            "vocab": " cash budget ",
            "meaning": " งบประมาณเงินสด "
        },
        {
            "vocab": " cash disbursement journal ",
            "meaning": " สมุดรายวันเงินสดจ่าย "
        },
        {
            "vocab": " cash discount ",
            "meaning": " ส่วนลดเงินสด "
        },
        {
            "vocab": " cash dividend ",
            "meaning": " เงินสดปันผล "
        },
        {
            "vocab": " cash equivalent ",
            "meaning": " รายการเทียบเท่าเงินสด "
        },
        {
            "vocab": " cash flow ",
            "meaning": " กระแสเงินสด "
        },
        {
            "vocab": " cash flow statement ",
            "meaning": " งบบัญชีกระแสเงินสด "
        },
        {
            "vocab": " cash inflow ",
            "meaning": " กระแสเงินสดเข้า "
        },
        {
            "vocab": " cash journal ",
            "meaning": " สมุดเงินสด "
        },
        {
            "vocab": " cash outflow ",
            "meaning": " กระแสเงินสดออก "
        },
        {
            "vocab": " cash receipts journal ",
            "meaning": " สมุดรายวันเงินสดรับ "
        },
        {
            "vocab": " cash-flow budget ",
            "meaning": " งบประมาณกระแสเงินสด "
        },
        {
            "vocab": " cashier’s cheque ",
            "meaning": " เช็คของขวัญ "
        },
        {
            "vocab": " certificate of deposit ",
            "meaning": " บัตรเงินฝาก "
        },
        {
            "vocab": " certified check ",
            "meaning": " เช็คที่ธนาคารรับรองการจ่ายเงิน "
        },
        {
            "vocab": " certified internal auditor ",
            "meaning": " ผู้ตรวจสอบภายในรับอนุญาต "
        },
        {
            "vocab": " certified public accountant (CPA) ",
            "meaning": " ผู้สอบบัญชีรับอนุญาต "
        },
        {
            "vocab": " charity ",
            "meaning": " ค่าการกุศล "
        },
        {
            "vocab": " chart of accounts ",
            "meaning": " ผังบัญชี "
        },
        {
            "vocab": " check register ",
            "meaning": " ทะเบียนเช็ค "
        },
        {
            "vocab": " cheque ",
            "meaning": " เช็ค "
        },
        {
            "vocab": " clearing accounts ",
            "meaning": " บัญชีระหว่างโอน "
        },
        {
            "vocab": " closing entry ",
            "meaning": " รายการปิดบัญชี "
        },
        {
            "vocab": " closing trial balance ",
            "meaning": " งบทดลองหลังปิดบัญชี "
        },
        {
            "vocab": " collection period ",
            "meaning": " ระยะเวลารอรับชำระหนี้ "
        },
        {
            "vocab": " combined financial statement ",
            "meaning": " งบการเงินรวม "
        },
        {
            "vocab": " commission ",
            "meaning": " ค่านายหน้า "
        },
        {
            "vocab": " common stock ",
            "meaning": " หุ้นสามัญ "
        },
        {
            "vocab": " comparative financial statement ",
            "meaning": " งบการเงินเปรียบเทียบ "
        },
        {
            "vocab": " completed contract method ",
            "meaning": " วิธีเมื่องานเสร็จสิ้นตามสัญญา "
        },
        {
            "vocab": " completeness ",
            "meaning": " ความครบถ้วน "
        },
        {
            "vocab": " compliance audit ",
            "meaning": " การตรวจสอบการปฏิบัติตามข้อกำหนด "
        },
        {
            "vocab": " composite depreciation method ",
            "meaning": " การคิดค่าเสื่อมราคาโดยวิธีส่วนร่วม "
        },
        {
            "vocab": " composite depreciation rate ",
            "meaning": " อัตราค่าเสื่อมราคาโดยวิธีส่วนร่วม "
        },
        {
            "vocab": " compound interest depreciation method ",
            "meaning": " การคิดค่าเสื่อมราคาโดยวิธีดอกเบี้ยทบต้น "
        },
        {
            "vocab": " concept ",
            "meaning": " แนวความคิด "
        },
        {
            "vocab": " condensed financial statement ",
            "meaning": " งบการเงินอย่างย่อ "
        },
        {
            "vocab": " confirmation ",
            "meaning": " การยืนยันความถูกต้อง "
        },
        {
            "vocab": " conservatism ",
            "meaning": " หลักความระมัดระวัง "
        },
        {
            "vocab": " consignee ",
            "meaning": " ผู้รับฝากขาย "
        },
        {
            "vocab": " consignment ",
            "meaning": " การฝากขาย "
        },
        {
            "vocab": " consignor ",
            "meaning": " ผู้ฝากขาย "
        },
        {
            "vocab": " consignor ",
            "meaning": " ผู้ฝากขาย "
        },
        {
            "vocab": " consistency ",
            "meaning": " ความสม่ำเสมอ "
        },
        {
            "vocab": " consolidated financial statement ",
            "meaning": " งบการเงินรวม "
        },
        {
            "vocab": " consolidation ",
            "meaning": " การรวมกิจการ "
        },
        {
            "vocab": " contingence ",
            "meaning": " ค่าเสี่ยงภัย "
        },
        {
            "vocab": " contingent asset ",
            "meaning": " สินทรัพย์ที่อาจเกิดขึ้น "
        },
        {
            "vocab": " contingent charge ",
            "meaning": " ค่าใช้จ่ายที่อาจเกิดขึ้น "
        },
        {
            "vocab": " contingent cost ",
            "meaning": " ต้นทุนที่อาจเกิดขึ้น "
        },
        {
            "vocab": " contingent liability ",
            "meaning": " หนี้สินที่อาจเกิดขึ้น "
        },
        {
            "vocab": " contra accounts ",
            "meaning": " บัญชีตรงข้าม "
        },
        {
            "vocab": " contract ",
            "meaning": " สัญญา "
        },
        {
            "vocab": " contribution margin ",
            "meaning": " กำไรผันแปร "
        },
        {
            "vocab": " control account ",
            "meaning": " บัญชีคุมยอด "
        },
        {
            "vocab": " controllable cost ",
            "meaning": " ต้นทุนที่สามารถควบคุมได้ "
        },
        {
            "vocab": " controller, comptroller ",
            "meaning": " ผู้ควบคุมบัญชี "
        },
        {
            "vocab": " conversion ",
            "meaning": " การแปลงสภาพ "
        },
        {
            "vocab": " conversion cost ",
            "meaning": " ต้นทุนการแปลงสภาพ "
        },
        {
            "vocab": " convertible bond ",
            "meaning": " พันธบัตรแปลงสภาพ "
        },
        {
            "vocab": " copyright ",
            "meaning": " ลิขสิทธิ์ "
        },
        {
            "vocab": " corporation ",
            "meaning": " บริษัท จำกัด "
        },
        {
            "vocab": " cost ",
            "meaning": " ต้นทุน "
        },
        {
            "vocab": " cost accounting ",
            "meaning": " การบัญชีต้นทุน "
        },
        {
            "vocab": " cost allocation ",
            "meaning": " การปันส่วนต้นทุน "
        },
        {
            "vocab": " cost and freight ",
            "meaning": " ต้นทุนบวกค่าขนส่ง "
        },
        {
            "vocab": " cost and freight (C;F) ",
            "meaning": " ราคาสินค้ารวมค่าขนส่ง "
        },
        {
            "vocab": " cost and freight C;F ",
            "meaning": " ต้นทุนบวกค่าระวาง "
        },
        {
            "vocab": " cost method ",
            "meaning": " วิธีราคาทุน "
        },
        {
            "vocab": " cost of goods manufactured ",
            "meaning": " ต้นทุนสินค้าที่ผลิตสำเร็จ "
        },
        {
            "vocab": " cost of goods sold ",
            "meaning": " ต้นทุนสินค้าขาย "
        },
        {
            "vocab": " cost of production ",
            "meaning": " ต้นทุนการผลิต "
        },
        {
            "vocab": " cost of sales ",
            "meaning": " ต้นทุนขาย "
        },
        {
            "vocab": " cost unit ",
            "meaning": " ต้นทุนต่อหน่วย "
        },
        {
            "vocab": " cost, insurance and freight (C.I.F.) ",
            "meaning": " ราคาสินค้ารวมค่าประกันภัยและค่าขนส่ง "
        },
        {
            "vocab": " cost-benefit analysis ",
            "meaning": " การวิเคราะห์ต้นทุนและผลประโยชน์ "
        },
        {
            "vocab": " cost-plus pricing ",
            "meaning": " การตั้งราคาจากทุน "
        },
        {
            "vocab": " cost-volume-profit analysis ",
            "meaning": " การวิเคราะห์ต้นทุน-จำนวน-กำไร "
        },
        {
            "vocab": " cpital asset ",
            "meaning": " สินทรัพย์จากการลงทุน "
        },
        {
            "vocab": " credit ",
            "meaning": " เครดิต "
        },
        {
            "vocab": " credit balance ",
            "meaning": " ยอดดุลเครดิต "
        },
        {
            "vocab": " cross check ",
            "meaning": " การสอบยันความถูกต้อง "
        },
        {
            "vocab": " cross currency interest rate swap ",
            "meaning": " การแลกเปลี่ยนอัตราดอกเบี้ยต่างสกุลเงิน "
        },
        {
            "vocab": " cross-reference ",
            "meaning": " การอ้างอิงระหว่างกัน "
        },
        {
            "vocab": " currency futures ",
            "meaning": " ตราสารจากการซื้อขายเงินตราต่างประเทศล่วงหน้า "
        },
        {
            "vocab": " currency option ",
            "meaning": " สิทธิการซื้อหรือขายเงินตราต่างประเทศ "
        },
        {
            "vocab": " currency seap ",
            "meaning": " การแลกเปลี่ยนหนี้ต่างสกุลเงินกัน "
        },
        {
            "vocab": " current account ",
            "meaning": " บัญชีเดินสะพัด "
        },
        {
            "vocab": " current asset ",
            "meaning": " สินทรัพย์หมุนเวียน "
        },
        {
            "vocab": " current cost ",
            "meaning": " ราคาต้นทุนในปัจจุบัน "
        },
        {
            "vocab": " current file ",
            "meaning": " แฟ้มปัจจุบัน "
        },
        {
            "vocab": " current liability ",
            "meaning": " หนี้สินหมุนเวียน "
        },
        {
            "vocab": " current operating performance ",
            "meaning": " งบกำไรขาดทุน-วิธีแสดงผลการดำเนินงาน "
        },
        {
            "vocab": " current ratio ",
            "meaning": " อัตราส่วนเงินทุนหมุนเวียน "
        },
        {
            "vocab": " cut-off ",
            "meaning": " การตัดยอด "
        },
        {
            "vocab": "  ",
            "meaning": "  "
        },
        {
            "vocab": " day book ",
            "meaning": " สมุดรายวัน "
        },
        {
            "vocab": " day rate ",
            "meaning": " อัตราค่าแรงรายวัน "
        },
        {
            "vocab": " debenture stock ",
            "meaning": " หุ้นกู้ "
        },
        {
            "vocab": " debit ",
            "meaning": " เดบิต "
        },
        {
            "vocab": " debit balance ",
            "meaning": " ยอดดุลเดบิต "
        },
        {
            "vocab": " debit note ",
            "meaning": " ใบแจ้งว่าเป็นลูกหนี้ "
        },
        {
            "vocab": " debt ratio ",
            "meaning": " อัตราส่วนหนี้สินต่อส่วนของเจ้าของ "
        },
        {
            "vocab": " debtor ",
            "meaning": " ลูกหนี้ "
        },
        {
            "vocab": " declared dividend ",
            "meaning": " เงินปันผลที่ประกาศจ่าย "
        },
        {
            "vocab": " declining balance method ",
            "meaning": " วิธียอดลดลง "
        },
        {
            "vocab": " defective product ",
            "meaning": " ผลิตภัณฑ์มีตำหนิ "
        },
        {
            "vocab": " deferred charge ",
            "meaning": " รายจ่ายรอการตัดบัญชี "
        },
        {
            "vocab": " deferred debit ",
            "meaning": " ค่าใช้จ่ายรอตัดบัญชี "
        },
        {
            "vocab": " deferred debt ",
            "meaning": " ลูกหนี้รอตัดบัญชี "
        },
        {
            "vocab": " deferred expense ",
            "meaning": " ค่าใช้จ่ายรอดตัดบัญชี "
        },
        {
            "vocab": " deferred income ",
            "meaning": " รายได้รอการรับรู้รายได้ "
        },
        {
            "vocab": " deferred income tax ",
            "meaning": " ภาษีเงินได้รอการตัดบัญชี "
        },
        {
            "vocab": " deferred revenue ",
            "meaning": " รายได้รอดการตัดบัญชี "
        },
        {
            "vocab": " deficit ",
            "meaning": " ขาดทุนสะสม "
        },
        {
            "vocab": " depletion ",
            "meaning": " การตัดค่าสูญสิ้น "
        },
        {
            "vocab": " deposit ",
            "meaning": " เงินมัดจำ "
        },
        {
            "vocab": " deposit account ",
            "meaning": " บัญชีเงินฝากประจำ "
        },
        {
            "vocab": " deposit-taker ",
            "meaning": " ผู้รับฝากเงินประเภทเงินฝากประจำ "
        },
        {
            "vocab": " depreciation ",
            "meaning": " ค่าเสื่อมราคา "
        },
        {
            "vocab": " depreciation adjustment ",
            "meaning": " การปรับปรุงค่าเสื่อมราคา "
        },
        {
            "vocab": " detail account ",
            "meaning": " บัญชีสาขา "
        },
        {
            "vocab": " devaluation ",
            "meaning": " การลดค่าเงินตรา "
        },
        {
            "vocab": " differential cost ",
            "meaning": " ต้นทุนส่วนแตกต่าง "
        },
        {
            "vocab": " differential ",
            "meaning": " ส่วนเพิ่ม "
        },
        {
            "vocab": " direct costing ",
            "meaning": " การบัญชีต้นทุนทางตรง "
        },
        {
            "vocab": " direct labor ",
            "meaning": " ค่าแรงงานทางตรง "
        },
        {
            "vocab": " direct labor hour ",
            "meaning": " ชั่วโมงค่าแรงทางตรง "
        },
        {
            "vocab": " direct material ",
            "meaning": " วัตถุทางตรง "
        },
        {
            "vocab": " direct material cost ",
            "meaning": " ต้นทุนวัสดุทางตรง "
        },
        {
            "vocab": " direct overhead ",
            "meaning": " ค่าใช้จ่ายทางตรง "
        },
        {
            "vocab": " direct wages ",
            "meaning": " ค่าจ้างทางตรง "
        },
        {
            "vocab": " disclosure ",
            "meaning": " การเปิดเผยข้อมูล "
        },
        {
            "vocab": " discount ",
            "meaning": " ส่วนลด "
        },
        {
            "vocab": " discount received ",
            "meaning": " ส่วนลดรับ "
        },
        {
            "vocab": " distribution expense ",
            "meaning": " ค่าใช้จ่ายในการจัดจำหน่าย "
        },
        {
            "vocab": " dividend ",
            "meaning": " เงินปันผล "
        },
        {
            "vocab": " documentary credit ",
            "meaning": " เอกสารสำหรับสินเชื่อ "
        },
        {
            "vocab": " double-entry system ",
            "meaning": " ระบบบัญชีคู่ "
        },
        {
            "vocab": " doubtful accounts ",
            "meaning": " หนี้สงสัยจะสูญ "
        },
        {
            "vocab": " down payment ",
            "meaning": " เงินเริ่มแรก "
        },
        {
            "vocab": " drawing account ",
            "meaning": " บัญชีเบิกใช้ส่วนตัว "
        },
        {
            "vocab": " earned surplus ",
            "meaning": " กำไรสะสม "
        },
        {
            "vocab": " earnings ",
            "meaning": " กำไรสุทธิ "
        },
        {
            "vocab": " Earnings before Interest after Tax (EBIAT) ",
            "meaning": " กำไรสุทธิก่อนดอกเบี้ยและหลังภาษี "
        },
        {
            "vocab": " Earnings before per share (EBIT) ",
            "meaning": " กำไรสุทธิต่อหุ้น "
        },
        {
            "vocab": " earnings per share ",
            "meaning": " กำไรต่อหุ้น "
        },
        {
            "vocab": " earnings statement ",
            "meaning": " งบกำไรขาดทุน "
        },
        {
            "vocab": " effective rate (of interest) ",
            "meaning": " อัตรา (ดอกเบี้ย) ที่แท้จริง "
        },
        {
            "vocab": " employment ",
            "meaning": " การจ้างงาน "
        },
        {
            "vocab": " endorse ",
            "meaning": " สลักหลัง "
        },
        {
            "vocab": " enterprise accounting ",
            "meaning": " การบัญชีสำหรับองค์การ "
        },
        {
            "vocab": " entity accounting ",
            "meaning": " การบัญชีสำหรับหน่วยงาน "
        },
        {
            "vocab": " equipment ",
            "meaning": " อุปกรณ์ "
        },
        {
            "vocab": " error ",
            "meaning": " ข้อผิดพลาด "
        },
        {
            "vocab": " estate ",
            "meaning": " อสังหาริมทรัพย์, ที่ดิน "
        },
        {
            "vocab": " estimated liability ",
            "meaning": " หนี้สินโดยประมาณ "
        },
        {
            "vocab": " evidence ",
            "meaning": " หลักฐาน "
        },
        {
            "vocab": " exchange cheque ",
            "meaning": " การแลกเปลี่ยนเช็ค "
        },
        {
            "vocab": " exchange rate ",
            "meaning": " อัตราแลกเปลี่ยน "
        },
        {
            "vocab": " expenditure ",
            "meaning": " รายจ่าย "
        },
        {
            "vocab": " expense ",
            "meaning": " ค่าใช้จ่าย "
        },
        {
            "vocab": " external audit ",
            "meaning": " การสอบบัญชีโดยผู้ตรวจสอบภายนอก "
        },
        {
            "vocab": " external document ",
            "meaning": " เอกสารจากแหล่งภายนอก "
        },
        {
            "vocab": " factoring ",
            "meaning": " การซื้อขายบัญชีลูกหนี้ "
        },
        {
            "vocab": " factory agenda ",
            "meaning": " วัสดุโรงงาน "
        },
        {
            "vocab": " factory overhead variance ",
            "meaning": " ผลต่างค่าใช้จ่ายโรงงาน "
        },
        {
            "vocab": " factory overhead ",
            "meaning": " ค่าใช้จ่ายโรงงาน "
        },
        {
            "vocab": " factory overhead expense ",
            "meaning": " ค่าใช้จ่ายโรงงาน "
        },
        {
            "vocab": " fair market value ",
            "meaning": " ราคาตลาดยุติธรรม "
        },
        {
            "vocab": " fair price ",
            "meaning": " ราคายุติธรรม "
        },
        {
            "vocab": " fair value ",
            "meaning": " มูลค่ายุติธรรม "
        },
        {
            "vocab": " fairness ",
            "meaning": " ความถูกต้องตามที่ควร "
        },
        {
            "vocab": " favorable variance ",
            "meaning": " ผลต่างที่น่าพอใจ "
        },
        {
            "vocab": " feedback value ",
            "meaning": " ข้อมูลย้อนกลับ "
        },
        {
            "vocab": " financial statement ",
            "meaning": " งบการเงินคือ งบดุล งบกำไรขาดทุน , รายงานทางการเงิน "
        },
        {
            "vocab": " financial accounting ",
            "meaning": " งบกำไรสะสมและงบแสดงการเปลี่ยนแปลงฐานะการเงิน "
        },
        {
            "vocab": " financial document ",
            "meaning": " การบัญชีการเงิน "
        },
        {
            "vocab": " financial expense ",
            "meaning": " เอกสารทางการเงิน เช่น เช็คหรือตั๋วแลกเงิน "
        },
        {
            "vocab": " financial reporting ",
            "meaning": " ค่าใช้จ่ายทางการเงิน "
        },
        {
            "vocab": " financial statement ",
            "meaning": " งบการเงิน "
        },
        {
            "vocab": " financial audit ",
            "meaning": " การตรวจสอบงบการเงิน "
        },
        {
            "vocab": " financing activities ",
            "meaning": " กิจกรรมในการจัดหาเงิน "
        },
        {
            "vocab": " finished goods ",
            "meaning": " สินค้าสำเร็จรูป "
        },
        {
            "vocab": " first in, first out FIFO ",
            "meaning": " การตีราคาสินค้าคงเหลือตามวิธีเข้าก่อนออกก่อน "
        },
        {
            "vocab": " fiscal year ",
            "meaning": " รอบระยะเวลา 1 รอบปีบัญชี "
        },
        {
            "vocab": " fixed asset ",
            "meaning": " ทรัพย์สินถาวร "
        },
        {
            "vocab": " fixed budget ",
            "meaning": " งบประมาณคงที่ "
        },
        {
            "vocab": " fixed cost ",
            "meaning": " ต้นทุนคงที่ "
        },
        {
            "vocab": " fixed expense ",
            "meaning": " ค่าใช้จ่ายคงที่ "
        },
        {
            "vocab": " flexed budget ",
            "meaning": " งบประมาณที่สามารถยืดหยุ่นได้ "
        },
        {
            "vocab": " flexible exchange rate ",
            "meaning": " อัตราแลกเปลี่ยนลอยตัว "
        },
        {
            "vocab": " floating rate note (FRN) ",
            "meaning": " ตั๋วเงินที่อัตราดอกเบี้ยลอยตัว "
        },
        {
            "vocab": " flowchart ",
            "meaning": " แผนภูมิสายการทำงาน "
        },
        {
            "vocab": " folio ",
            "meaning": " หน้าบัญชี "
        },
        {
            "vocab": " footing ",
            "meaning": " การบวกแนวตั้ง "
        },
        {
            "vocab": " footnotes to financial statement ",
            "meaning": " หมายเหตุ ประกอบงบการเงิน "
        },
        {
            "vocab": " forecasting ",
            "meaning": " การประมาณการ "
        },
        {
            "vocab": " foreign exchange ",
            "meaning": " การปริวรรตเงินตรา "
        },
        {
            "vocab": " forward contract ",
            "meaning": " สัญญาการซื้อขายล่วงหน้า "
        },
        {
            "vocab": " forward exchange contract ",
            "meaning": " สัญญาการซื้อขายเงินตราต่างประเทศล่วงหน้า "
        },
        {
            "vocab": " forward rate ",
            "meaning": " อัตราการซื้อขายล่วงหน้า "
        },
        {
            "vocab": " forward rate agreement ",
            "meaning": " สัญญาอัตราดอกเบี้ยล่วงหน้า "
        },
        {
            "vocab": " franchise ",
            "meaning": " สัปทาน "
        },
        {
            "vocab": " franchisee ",
            "meaning": " ผู้รับสัมปทาน "
        },
        {
            "vocab": " free on board (F.O.B.) ",
            "meaning": " ราคาสินค้าที่ส่งถึงผู้รับขนสินค้า "
        },
        {
            "vocab": " Free on Board F.O.B. ",
            "meaning": " ราคาสินค้าตามใบอินวอยซ์ "
        },
        {
            "vocab": " freight ",
            "meaning": " ค่าระวาง, ค่าขนส่ง "
        },
        {
            "vocab": " freight in ",
            "meaning": " ค่าระวางขาเข้า "
        },
        {
            "vocab": " freight out ",
            "meaning": " ค่าระวางขาออก "
        },
        {
            "vocab": " full absorption costing ",
            "meaning": " การบัญชีต้นทุนร่วม "
        },
        {
            "vocab": " full costing ",
            "meaning": " การบัญชีต้นทุนรวม "
        },
        {
            "vocab": " functional accounting ",
            "meaning": " การบัญชีตามประเภทของกิจกรรม "
        },
        {
            "vocab": " fund ",
            "meaning": " กองทุน "
        },
        {
            "vocab": " fund accounting ",
            "meaning": " การบัญชีเงินกองทุน "
        },
        {
            "vocab": " funds flow statement ",
            "meaning": " งบกระแสเงินทุน "
        },
        {
            "vocab": " furniture and fixtures ",
            "meaning": " เครื่องตกแต่งและติดตั้ง "
        },
        {
            "vocab": " gains ",
            "meaning": " กำไร "
        },
        {
            "vocab": " general journal ",
            "meaning": " สมุดบัญชีรายวันทั่วไป "
        },
        {
            "vocab": " general ledger ",
            "meaning": " สมุดบัญชีแยกประเภททั่วไป "
        },
        {
            "vocab": " generally accepted accounting principles ",
            "meaning": " หลักการบัญชีที่รับรองทั่วไป "
        },
        {
            "vocab": " Generally Accepted Accounting Principles GAAP ",
            "meaning": " หลักการบัญชีที่ยอมรับทั่วไป "
        },
        {
            "vocab": " goods ",
            "meaning": " สินค้า "
        },
        {
            "vocab": " goods in process ",
            "meaning": " สินค้าระหว่างผลิต "
        },
        {
            "vocab": " goods on consignment ",
            "meaning": " สินค้าฝากขาย "
        },
        {
            "vocab": " goodwill ",
            "meaning": " ค่าความนิยม "
        },
        {
            "vocab": " governmental accounting ",
            "meaning": " การบัญชีรัฐบาล "
        },
        {
            "vocab": " gross ",
            "meaning": " ก่อนหักรายจ่าย "
        },
        {
            "vocab": " gross book value ",
            "meaning": " ราคาตามบัญชียกมา "
        },
        {
            "vocab": " gross earnings, gross income ",
            "meaning": " กำไรขั้นต้น "
        },
        {
            "vocab": " gross loss ",
            "meaning": " ขาดทุนขั้นต้น "
        },
        {
            "vocab": " gross profit ",
            "meaning": " กำไรขั้นต้น "
        },
        {
            "vocab": " gross profit method ",
            "meaning": " วิธีสินค้าตามอัตรากำไรขั้นต้น "
        },
        {
            "vocab": " group depreciation method ",
            "meaning": " การคิดค่าเสื่อมราคาโดยวิธีรวมกลุ่ม "
        },
        {
            "vocab": " guaranteed bond ",
            "meaning": " หุ้นกู้ที่มีประกัน "
        },
        {
            "vocab": " impress cash ",
            "meaning": " วงเงินสดย่อย "
        },
        {
            "vocab": " income ",
            "meaning": " รายได้ "
        },
        {
            "vocab": " income tax ",
            "meaning": " ภาษีเงินได้นิติบุคคล "
        },
        {
            "vocab": " incremental cost ",
            "meaning": " ต้นทุนส่วนที่เพิ่มขึ้น "
        },
        {
            "vocab": " incremental ",
            "meaning": " ส่วนเพิ่ม "
        },
        {
            "vocab": " incremental revenue ",
            "meaning": " รายได้ส่วนเพิ่ม "
        },
        {
            "vocab": " independent ",
            "meaning": " เป็นอิสระ "
        },
        {
            "vocab": " index ",
            "meaning": " ดัชนี "
        },
        {
            "vocab": " indirect cost ",
            "meaning": " ต้นทุนทางอ้อม "
        },
        {
            "vocab": " indirect cost center ",
            "meaning": " ศูนย์ต้นทุนทางอ้อม "
        },
        {
            "vocab": " indirect expense ",
            "meaning": " ค่าใช้จ่ายทางอ้อม "
        },
        {
            "vocab": " indirect labor ",
            "meaning": " ค่าแรงทางอ้อม "
        },
        {
            "vocab": " indirect material ",
            "meaning": " วัสดุทางอ้อม "
        },
        {
            "vocab": " indorse ",
            "meaning": " สลักหลัง "
        },
        {
            "vocab": " inflation ",
            "meaning": " เงินเฟ้อ, ค่าเงินลดลง "
        },
        {
            "vocab": " input tax ",
            "meaning": " ภาษีซื้อ "
        },
        {
            "vocab": " installment method of accounting ",
            "meaning": " วิธีการบัญชีขายผ่อนส่ง "
        },
        {
            "vocab": " installment sale ",
            "meaning": " การขายผ่อนส่ง "
        },
        {
            "vocab": " installment, instalment ",
            "meaning": " เงินค่างวด "
        },
        {
            "vocab": " instrument ",
            "meaning": " หลักฐาน "
        },
        {
            "vocab": " intangible asset ",
            "meaning": " สินทรัพย์ที่จับต้องไม่ได้ "
        },
        {
            "vocab": " intangible ",
            "meaning": " จับต้องไม่ได้ "
        },
        {
            "vocab": " intangible fixed asset ",
            "meaning": " ทรัพย์สินถาวรไม่มีตัวตน "
        },
        {
            "vocab": " interest ",
            "meaning": " ดอกเบี้ย "
        },
        {
            "vocab": " interest rate futures ",
            "meaning": " ตราสารอัตราดอกเบี้ยล่วงหน้า "
        },
        {
            "vocab": " interim dividend ",
            "meaning": " เงินปันผลระหว่างกาล "
        },
        {
            "vocab": " interim financial statement ",
            "meaning": " งบการเงินระหว่างกาล "
        },
        {
            "vocab": " internal audit ",
            "meaning": " การตรวจสอบบัญชีภายใน "
        },
        {
            "vocab": " internal control ",
            "meaning": " การควบคุมภายใน "
        },
        {
            "vocab": " internal control system ",
            "meaning": " ระบบการควบคุมภายใน "
        },
        {
            "vocab": " inventory ",
            "meaning": " สินค้าคงเหลือ "
        },
        {
            "vocab": " inventory control ",
            "meaning": " การควบคุมสินค้าคงเหลือ "
        },
        {
            "vocab": " inventory turnover ",
            "meaning": " อัตราการหมุนของสินค้า "
        },
        {
            "vocab": " investing activities ",
            "meaning": " กิจกรรมการลงทุน "
        },
        {
            "vocab": " investment ",
            "meaning": " เงินลงทุน "
        },
        {
            "vocab": " invoice ",
            "meaning": " ใบกำกับสินค้า "
        },
        {
            "vocab": " job ",
            "meaning": " งาน "
        },
        {
            "vocab": " job card ",
            "meaning": " ใบสั่งงาน "
        },
        {
            "vocab": " job cost ",
            "meaning": " ต้นทุนงานสั่งทำ "
        },
        {
            "vocab": " job costing ",
            "meaning": " วิธีต้นทุนงานสั่งทำ "
        },
        {
            "vocab": " job order costing ",
            "meaning": " การบัญชีต้นทุนงานสั่งทำ "
        },
        {
            "vocab": " job sheet ",
            "meaning": " ใบลงเวลาทำงาน "
        },
        {
            "vocab": " joint cost ",
            "meaning": " ต้นทุนร่วม "
        },
        {
            "vocab": " joint venture ",
            "meaning": " การร่วมค้า "
        },
        {
            "vocab": " journal ",
            "meaning": " สมุดบัญชีรายวัน "
        },
        {
            "vocab": " journal voucher ",
            "meaning": " ใบสำคัญรายวันทั่วไป "
        },
        {
            "vocab": " labor variance ",
            "meaning": " ผลต่างค่าแรง "
        },
        {
            "vocab": " land ",
            "meaning": " ที่ดิน "
        },
        {
            "vocab": " land mortgage ",
            "meaning": " หลักทรัพย์ที่เป็นที่ดิน "
        },
        {
            "vocab": " Last in, first out LIFO ",
            "meaning": " การตีราคาสินค้าคงเหลือวิธีเข้าหลังออกก่อน "
        },
        {
            "vocab": " leasehold ",
            "meaning": " สทธิการเช่า "
        },
        {
            "vocab": " leasing ",
            "meaning": " การเช่า "
        },
        {
            "vocab": " ledger account ",
            "meaning": " บัญชีแยกประเภท "
        },
        {
            "vocab": " legal mortgage ",
            "meaning": " หลักทรัพย์ทางกฎหมาย "
        },
        {
            "vocab": " letter of comfort ",
            "meaning": " หนังสือรับทราบภาระหนี้สิน "
        },
        {
            "vocab": " letter of credit L/C ",
            "meaning": " เล็ตเตอร์ออฟเครดิต "
        },
        {
            "vocab": " letter of undertaking ",
            "meaning": " หนังสือยินยอมชดใช้ค่าเสียหาย "
        },
        {
            "vocab": " liability ",
            "meaning": " หนี้สิน "
        },
        {
            "vocab": " liability dividend ",
            "meaning": " หนี้สินจากการจ่ายเงินปันผล "
        },
        {
            "vocab": " limited - life asset ",
            "meaning": " สินทรัพย์ที่มีอายุการใช้งานจำกัด "
        },
        {
            "vocab": " limited partnership ",
            "meaning": " ห้างหุ้นส่วนจำกัด "
        },
        {
            "vocab": " liquidation value ",
            "meaning": " มูลค่าการชำระบัญชี "
        },
        {
            "vocab": " liquidity ratio ",
            "meaning": " อัตราส่วนสภาพคล่อง "
        },
        {
            "vocab": " listed company ",
            "meaning": " บริษัทจดทะเบียน "
        },
        {
            "vocab": " listed security ",
            "meaning": " หลักทรัพย์จดทะเบียน "
        },
        {
            "vocab": " loan payable ",
            "meaning": " เจ้าหนี้เงินกู้ "
        },
        {
            "vocab": " loan receivable ",
            "meaning": " เงินให้กู้ "
        },
        {
            "vocab": " local area network LAN ",
            "meaning": " เชื่อมเข้าโดยตรงกับ "
        },
        {
            "vocab": " long-term contract ",
            "meaning": " สัญญาระยะยาว "
        },
        {
            "vocab": " long-term debt ",
            "meaning": " หนี้ระยะยาว (ที่เกิน 1 ปี) "
        },
        {
            "vocab": " long-term liability ",
            "meaning": " หนี้สินระยะยาว "
        },
        {
            "vocab": " loss ",
            "meaning": " ขาดทุน "
        },
        {
            "vocab": " loss per share ",
            "meaning": " ขาดทุนต่อหุ้น "
        },
        {
            "vocab": " lower of cost or market ",
            "meaning": " ราคาทุนหรือตลาดที่ต่ำกว่า "
        },
        {
            "vocab": " machinery ",
            "meaning": " เครื่องจักร "
        },
        {
            "vocab": " maintenance ",
            "meaning": " ค่าบำรุงรักษา "
        },
        {
            "vocab": " managed cost ",
            "meaning": " ต้นทุนที่ควบคุมได้ "
        },
        {
            "vocab": " management audit ",
            "meaning": " การตรวจสอบการจัดการ "
        },
        {
            "vocab": " Management Information System (MIS) ",
            "meaning": " ระบบสารสนเทศเพื่อการจัดการ "
        },
        {
            "vocab": " manufacturing cost ",
            "meaning": " ต้นทุนผลิตภัณฑ์ "
        },
        {
            "vocab": " manufacturing expense ",
            "meaning": " ค่าใช้จ่ายโรงงาน "
        },
        {
            "vocab": " manufacturing overhead, ",
            "meaning": " ค่าใช้จ่ายในการผลิต "
        },
        {
            "vocab": " marginal deposit ",
            "meaning": " เงินประกัน "
        },
        {
            "vocab": " markdown ",
            "meaning": " ส่วนที่ลดราคา "
        },
        {
            "vocab": " market price ",
            "meaning": " ราคาตลาด "
        },
        {
            "vocab": " market research ",
            "meaning": " การวิจัยทางการตลาด "
        },
        {
            "vocab": " market value ",
            "meaning": " มูลค่าราคาตลาด "
        },
        {
            "vocab": " marketable security ",
            "meaning": " หลักทรัพย์ในความต้องการของตลาด "
        },
        {
            "vocab": " marketing research ",
            "meaning": " การวิจัยตลาด "
        },
        {
            "vocab": " Mark on ",
            "meaning": " ส่วนเพิ่มจากต้นทุน "
        },
        {
            "vocab": " master budget ",
            "meaning": " งบประมาณใหญ่ "
        },
        {
            "vocab": " matching ",
            "meaning": " การจับคู่ระหว่างรายได้กับรายจ่าย "
        },
        {
            "vocab": " material ",
            "meaning": " วัตถุดิบ "
        },
        {
            "vocab": " material cost ",
            "meaning": " ต้นทุนวัสดุ "
        },
        {
            "vocab": " materiality ",
            "meaning": " สาระสำคัญ "
        },
        {
            "vocab": " memorandum of association ",
            "meaning": " หนังสือบริคณห์สนธิ "
        },
        {
            "vocab": " merger ",
            "meaning": " การรวมกิจการ "
        },
        {
            "vocab": " merger accounting ",
            "meaning": " การบัญชีสำหรับการรวมกิจการ "
        },
        {
            "vocab": " monthly statement ",
            "meaning": " ใบแจ้งยอดประจำเดือน "
        },
        {
            "vocab": " mortgage ",
            "meaning": " จำนอง "
        },
        {
            "vocab": " moving average ",
            "meaning": " ราคาถัวเฉลี่ยเคลื่อนที่ "
        },
        {
            "vocab": " multiple-step income statement ",
            "meaning": " งบกำไรขาดทุนแบบหลายชั้น "
        },
        {
            "vocab": " nature ",
            "meaning": " ถึงกำหนด "
        },
        {
            "vocab": " net book value ",
            "meaning": " ราคาตามบัญชีสุทธิ "
        },
        {
            "vocab": " net loss ",
            "meaning": " ขาดทุนสุทธิ "
        },
        {
            "vocab": " net present value ",
            "meaning": " มูลค่าปัจจุบันสุทธิ "
        },
        {
            "vocab": " net profit ",
            "meaning": " กำไรสุทธิ "
        },
        {
            "vocab": " net purchase ",
            "meaning": " ซื้อสุทธิ "
        },
        {
            "vocab": " net sales ",
            "meaning": " ขายสุทธิ "
        },
        {
            "vocab": " net working capital ",
            "meaning": " เงินทุนหมุนเวียนสุทธิ "
        },
        {
            "vocab": " net worth ",
            "meaning": " ค่าสุทธิ "
        },
        {
            "vocab": " network ",
            "meaning": " วงจร "
        },
        {
            "vocab": " nonmonetary items ",
            "meaning": " รายการที่ไม่เป็นตัวเงิน "
        },
        {
            "vocab": " note payable ",
            "meaning": " เจ้าหนี้ตั๋วเงินจ่าย "
        },
        {
            "vocab": " note receivable ",
            "meaning": " ลูกหนี้ตั๋วเงินรับ "
        },
        {
            "vocab": " obsolete ",
            "meaning": " ล้าสมัย "
        },
        {
            "vocab": " of depreciation ",
            "meaning": " วิธีคิดค่าเสื่อมราคาทรัพย์สิน "
        },
        {
            "vocab": " off-line ",
            "meaning": " เครื่องเสีย "
        },
        {
            "vocab": " office equipment ",
            "meaning": " เครื่องใช้สำนักงาน "
        },
        {
            "vocab": " offset account ",
            "meaning": " บัญชีปรับมูลค่า "
        },
        {
            "vocab": " operating activities ",
            "meaning": " กิจกรรมดำเนินงาน "
        },
        {
            "vocab": " operating cycle ",
            "meaning": " วัฏจักรวงจรการดำเนินงาน "
        },
        {
            "vocab": " operating expense ",
            "meaning": " ค่าใช้จ่ายในการดำเนินงาน "
        },
        {
            "vocab": " operational audit ",
            "meaning": " การตรวจสอบการดำเนินงาน "
        },
        {
            "vocab": " opportunity cost ",
            "meaning": " ต้นทุนค่าเสียโอกาส "
        },
        {
            "vocab": " other assets, ",
            "meaning": " สินทรัพย์อื่น "
        },
        {
            "vocab": " other expenses ",
            "meaning": " ค่าใช้จ่ายอื่น "
        },
        {
            "vocab": " other income ",
            "meaning": " รายได้อื่น "
        },
        {
            "vocab": " other liability ",
            "meaning": " หนี้สินอื่น "
        },
        {
            "vocab": " output tax ",
            "meaning": " ภาษีขาย "
        },
        {
            "vocab": " overhead ",
            "meaning": " ค่าใช้จ่าย "
        },
        {
            "vocab": " overhead cost ",
            "meaning": " ต้นทุนผลิตสินค้า "
        },
        {
            "vocab": " owners’ equity ",
            "meaning": " ส่วนของผู้ถือหุ้นส่วนของเจ้าของ "
        },
        {
            "vocab": " packing credit ",
            "meaning": " สินเชื่อเพื่อการส่งสินค้าออก "
        },
        {
            "vocab": " paid-in capital ",
            "meaning": " ทุนชำระแล้ว "
        },
        {
            "vocab": " par value ",
            "meaning": " ราคาที่ตราไว้ในหลักทรัพย์ "
        },
        {
            "vocab": " parent company ",
            "meaning": " บริษัทใหญ่จำกัด "
        },
        {
            "vocab": " partner ",
            "meaning": " หุ้นส่วน "
        },
        {
            "vocab": " partnership ",
            "meaning": " ห้างหุ้นส่วน "
        },
        {
            "vocab": " patent ",
            "meaning": " สิทธิบัตร "
        },
        {
            "vocab": " payback period ",
            "meaning": " ระยะเวลาคืนทุน "
        },
        {
            "vocab": " payroll ",
            "meaning": " เงินเดือน "
        },
        {
            "vocab": " petty cash book ",
            "meaning": " สมุดเงินสดย่อย "
        },
        {
            "vocab": " pension fund ",
            "meaning": " กองทุนบำเหน็จ บำนาญ "
        },
        {
            "vocab": " percentage of completion method ",
            "meaning": " วิธีอัตราส่วนของงานที่ทำเสร็จ "
        },
        {
            "vocab": " performance audit ",
            "meaning": " การตรวจสอบการปฏิบัติการ "
        },
        {
            "vocab": " period cost ",
            "meaning": " ต้นทุนตามงวดระยะเวลา "
        },
        {
            "vocab": " periodic inventory method ",
            "meaning": " วิธีการบัญชีสินค้าคงเหลือที่บันทึกเมื่อสิ้นรอบระยะเวลาบัญชี "
        },
        {
            "vocab": " permanent file ",
            "meaning": " แฟ้มถาวร "
        },
        {
            "vocab": " perpetual inventory method ",
            "meaning": " วิธีการบัญชีสินค้าคงเหลือที่บันทึกแบบต่อเนื่อง "
        },
        {
            "vocab": " personal account ",
            "meaning": " บัญชีส่วนบุคคล "
        },
        {
            "vocab": " petty cash ",
            "meaning": " เงินสดย่อย "
        },
        {
            "vocab": " petty cash ",
            "meaning": " เงินสดย่อย "
        },
        {
            "vocab": " physical check, ",
            "meaning": " การตรวจสอบจากของจริงที่มีอยู่ "
        },
        {
            "vocab": " pledging of accounts receivable ",
            "meaning": " การจำนำบัญชีลูกหนี้ "
        },
        {
            "vocab": " posting ",
            "meaning": " การผ่านรายการบัญชี "
        },
        {
            "vocab": " prelude ",
            "meaning": " การตรวจสอบก่อนการปฏิบัติการ "
        },
        {
            "vocab": " precluding trial balance ",
            "meaning": " งบทดลองก่อนปิดบัญชี "
        },
        {
            "vocab": " predetermined overhead rate ",
            "meaning": " อัตราค่าใช้จ่ายการผลิตกำหนดล่วงหน้า "
        },
        {
            "vocab": " preferred stock ",
            "meaning": " หุ้นบุริมสิทธิ "
        },
        {
            "vocab": " premium on share ",
            "meaning": " ส่วนเกินมูลค่าหุ้น "
        },
        {
            "vocab": " prepaid expense ",
            "meaning": " ค่าใช้จ่ายล่วงหน้า "
        },
        {
            "vocab": " present value ",
            "meaning": " มูลค่าราคาปัจจุบัน "
        },
        {
            "vocab": " Present value PV. ",
            "meaning": " มูลค่าปัจจุบัน "
        },
        {
            "vocab": " price variance ",
            "meaning": " ผลต่างจากราคา "
        },
        {
            "vocab": " primary earnings per share ",
            "meaning": " กำไรต่อหุ้นขั้นพื้นฐาน "
        },
        {
            "vocab": " prime cost ",
            "meaning": " ต้นทุนขั้นต่ำ "
        },
        {
            "vocab": " prime rate ",
            "meaning": " อัตราดอกเบี้ยขั้นต่ำสุด "
        },
        {
            "vocab": " prime rate ",
            "meaning": " อัตราดอกเบี้ยพิเศษ "
        },
        {
            "vocab": " principles of accounting ",
            "meaning": " หลักการบัญชี "
        },
        {
            "vocab": " private company ",
            "meaning": " บริษัทเอกชน "
        },
        {
            "vocab": " private offering, ",
            "meaning": " การเสนอขายหลักทรัพย์แบบเจาะจง "
        },
        {
            "vocab": " procedure ",
            "meaning": " ขบวนการ "
        },
        {
            "vocab": " process costing ",
            "meaning": " การบัญชีต้นทุนต่อเนื่อง "
        },
        {
            "vocab": " product ",
            "meaning": " ผลิตภัณฑ์ "
        },
        {
            "vocab": " product cost ",
            "meaning": " ต้นทุนผลิตภัณฑ์ "
        },
        {
            "vocab": " production control ",
            "meaning": " การควบคุมจำนวนการผลิต "
        },
        {
            "vocab": " productive output method ",
            "meaning": " วิธีจำนวนผลผลิตที่ได้ "
        },
        {
            "vocab": " Professional Ethics-Auditor ",
            "meaning": " มรรยาทของผู้สอบบัญชี "
        },
        {
            "vocab": " profit ",
            "meaning": " กำไร "
        },
        {
            "vocab": " profit and loss account ",
            "meaning": " บัญชีกำไรขาดทุน "
        },
        {
            "vocab": " profit and loss appropriation account ",
            "meaning": " บัญชีกำไรขาดทุนจัดสรร "
        },
        {
            "vocab": " profit and loss statement ",
            "meaning": " งบกำไรขาดทุน "
        },
        {
            "vocab": " promissory note ",
            "meaning": " ตั๋วสัญญาใช้เงิน "
        },
        {
            "vocab": " property ",
            "meaning": " ที่ดิน "
        },
        {
            "vocab": " property, plant and equipment ",
            "meaning": " ที่ดิน อาคาร และอุปกรณ์ "
        },
        {
            "vocab": " proprietor ",
            "meaning": " ผู้ประกอบการ "
        },
        {
            "vocab": " provident fund ",
            "meaning": " กองทุนสำรองเลี้ยงชีพ "
        },
        {
            "vocab": " public company ",
            "meaning": " บริษัทมหาชน จำกัด "
        },
        {
            "vocab": " public limited company ",
            "meaning": " บริษัทมหาชน จำกัด "
        },
        {
            "vocab": " public offering ",
            "meaning": " การเสนอขายหลักทรัพย์แบบทั่วไป "
        },
        {
            "vocab": " purchase ",
            "meaning": " ซื้อ "
        },
        {
            "vocab": " purchase discount ",
            "meaning": " ส่วนลดรับ "
        },
        {
            "vocab": " purchases day book ",
            "meaning": " สมุดรายวันซื้อเชื่อ "
        },
        {
            "vocab": " purchases ledger ",
            "meaning": " บัญชีแยกประเภทซื้อเชื่อ "
        },
        {
            "vocab": " purchases order ",
            "meaning": " คำสั่งซื้อ "
        },
        {
            "vocab": " purchases return ",
            "meaning": " สินค้าส่งคืน "
        },
        {
            "vocab": " purchases return book ",
            "meaning": " สมุดบันทึกรายวันส่งคืน "
        },
        {
            "vocab": " purchasing power ",
            "meaning": " อำนาจซื้อ "
        },
        {
            "vocab": " qualified ",
            "meaning": " มีเงื่อนไข "
        },
        {
            "vocab": " qualified auditor’s report ",
            "meaning": " รายงานผู้สอบบัญชีที่มีเงื่อนไข "
        },
        {
            "vocab": " qualified opinion ",
            "meaning": " ความเห็นแบบมีเงื่อนไข "
        },
        {
            "vocab": " quick asset ",
            "meaning": " สินทรัพย์หมุนเวียนที่เปลี่ยนเป็นเงินสดได้เร็ว "
        },
        {
            "vocab": " quick ratio ",
            "meaning": " อัตราส่วนเงินทุนหมุนเวียนเร็ว "
        },
        {
            "vocab": " quick ratio ",
            "meaning": " อัตราส่วนเงินทุนหมุนเร็ว "
        },
        {
            "vocab": " rate of return ",
            "meaning": " อัตราผลตอบแทน "
        },
        {
            "vocab": " ratio ",
            "meaning": " อัตราส่วน "
        },
        {
            "vocab": " raw material ",
            "meaning": " วัตถุดิบ "
        },
        {
            "vocab": " real account ",
            "meaning": " บัญชีจริง "
        },
        {
            "vocab": " realized gain (loss) ",
            "meaning": " กำไร (ขาดทุน) ที่เกิดขึ้นแล้ว "
        },
        {
            "vocab": " realized revenue ",
            "meaning": " รายได้ที่เกิดขึ้น "
        },
        {
            "vocab": " receivable ",
            "meaning": " ลูกหนี้ "
        },
        {
            "vocab": " receivable ",
            "meaning": " ลูกหนี้ "
        },
        {
            "vocab": " receipt ",
            "meaning": " ใบเสร็จรับเงิน "
        },
        {
            "vocab": " reconciliation ",
            "meaning": " การพิสูจน์ยอด "
        },
        {
            "vocab": " related company ",
            "meaning": " บริษัทที่เกี่ยวข้องกัน "
        },
        {
            "vocab": " reliability ",
            "meaning": " ความเชื่อถือได้ "
        },
        {
            "vocab": " rent ",
            "meaning": " ค่าเช่า "
        },
        {
            "vocab": " repair ",
            "meaning": " ค่าซ่อมแซม "
        },
        {
            "vocab": " performance ",
            "meaning": " การทดลองปฏิบัติ "
        },
        {
            "vocab": " replacement cost ",
            "meaning": " ต้นทุนจากการเปลี่ยนแทน "
        },
        {
            "vocab": " reserve ",
            "meaning": " สำรอง "
        },
        {
            "vocab": " residual value ",
            "meaning": " ราคาคงเหลือ "
        },
        {
            "vocab": " responsibility accounting ",
            "meaning": " การบัญชีตามความรับผิดชอบ "
        },
        {
            "vocab": " retail price ",
            "meaning": " ราคาขายปลีก "
        },
        {
            "vocab": " retained earnings ",
            "meaning": " กำไรสะสม "
        },
        {
            "vocab": " retained earnings statement ",
            "meaning": " งบกำไรสะสม "
        },
        {
            "vocab": " retention money ",
            "meaning": " เงินวางประกัน "
        },
        {
            "vocab": " return on common equity ",
            "meaning": " อัตราผลตอบแทนต่อส่วนของผู้ถือหุ้นสามัญ "
        },
        {
            "vocab": " revaluation ",
            "meaning": " การตีราคาใหม่ "
        },
        {
            "vocab": " revenue ",
            "meaning": " รายได้ "
        },
        {
            "vocab": " revenue account ",
            "meaning": " บัญชีกำไรขาดทุน "
        },
        {
            "vocab": " revenue expenditure ",
            "meaning": " รายจ่ายฝ่ายรายได้ "
        },
        {
            "vocab": " revenue income ",
            "meaning": " รายได้ "
        },
        {
            "vocab": " revenue realization principle ",
            "meaning": " หลักการเกิดขึ้นของรายได้ "
        },
        {
            "vocab": " revenue recognition ",
            "meaning": " การรับรู้รายได้ "
        },
        {
            "vocab": " review ",
            "meaning": " ทบทวน "
        },
        {
            "vocab": " royalty ",
            "meaning": " ค่าสิทธิ "
        },
        {
            "vocab": " safety stock ",
            "meaning": " ของคลังในระดับที่ปลอดภัย "
        },
        {
            "vocab": " salary ",
            "meaning": " เงินเดือน "
        },
        {
            "vocab": " sale ",
            "meaning": " ขาย "
        },
        {
            "vocab": " sales day book ",
            "meaning": " สมุดรายวันขาย "
        },
        {
            "vocab": " sales discount ",
            "meaning": " ส่วนลดจ่าย "
        },
        {
            "vocab": " sales invoice ",
            "meaning": " ใบกำกับสินค้า "
        },
        {
            "vocab": " sales journal ",
            "meaning": " สมุดรายวันขาย "
        },
        {
            "vocab": " sales ledger ",
            "meaning": " บัญชีแยกประเภทลูกหนี้ "
        },
        {
            "vocab": " sales return ",
            "meaning": " สินค้ารับคืน "
        },
        {
            "vocab": " sales value ",
            "meaning": " ราคาขาย "
        },
        {
            "vocab": " sample ",
            "meaning": " ตัวอย่าง "
        },
        {
            "vocab": " schedule ",
            "meaning": " ตารางเวลา "
        },
        {
            "vocab": " scrap ",
            "meaning": " เศษซาก "
        },
        {
            "vocab": " scrap value ",
            "meaning": " ราคามูลค่าซาก "
        },
        {
            "vocab": " scrap value ",
            "meaning": " มูลค่าเศษซาก "
        },
        {
            "vocab": " secured bond ",
            "meaning": " พันธบัตรที่มีหลักทรัพย์ค้ำประกัน "
        },
        {
            "vocab": " securities company ",
            "meaning": " บริษัทหลักทรัพย์ "
        },
        {
            "vocab": " security ",
            "meaning": " หลักทรัพย์ "
        },
        {
            "vocab": " security portfolio ",
            "meaning": " กลุ่มหลักทรัพย์ "
        },
        {
            "vocab": " sell ",
            "meaning": " ขาย "
        },
        {
            "vocab": " seller ",
            "meaning": " พ่อค้า "
        },
        {
            "vocab": " selling expense ",
            "meaning": " ค่าใช้จ่ายในการขาย "
        },
        {
            "vocab": " semi fixed cost ",
            "meaning": " ต้นทุนกึ่งคงที่ "
        },
        {
            "vocab": " service-hours method ",
            "meaning": " วิธีชั่วโมงทำงาน "
        },
        {
            "vocab": " share ",
            "meaning": " หุ้น "
        },
        {
            "vocab": " shareholder ",
            "meaning": " ผู้ถือหุ้น "
        },
        {
            "vocab": " shareholders’ equity ",
            "meaning": " ส่วนของผู้ถือหุ้น "
        },
        {
            "vocab": " short-term liability ",
            "meaning": " หนี้สินระยะสั้น "
        },
        {
            "vocab": " single currency interest rate swap ",
            "meaning": " การแลกเปลี่ยนอัตราดอกเบี้ย ของสกุลเงินเดียวกัน "
        },
        {
            "vocab": " single-entry system ",
            "meaning": " ระบบบัญชีเดี่ยว "
        },
        {
            "vocab": " single-step income statement ",
            "meaning": " งบกำไรขาดทุนแบบขั้นเดียว "
        },
        {
            "vocab": " sinking fund ",
            "meaning": " กองทุนจม "
        },
        {
            "vocab": " sinking fund method ",
            "meaning": " วิธีกองทุนจม "
        },
        {
            "vocab": " spoilage ",
            "meaning": " ของเสีย "
        },
        {
            "vocab": " stamp duty ",
            "meaning": " อากรแสตมป์ "
        },
        {
            "vocab": " standard ",
            "meaning": " มาตรฐาน "
        },
        {
            "vocab": " standard price ",
            "meaning": " ราคามาตรฐาน "
        },
        {
            "vocab": " standard cost ",
            "meaning": " ต้นทุนมาตรฐาน "
        },
        {
            "vocab": " standard costing ",
            "meaning": " การบัญชีต้นทุนมาตรฐาน "
        },
        {
            "vocab": " standby letter of credit ",
            "meaning": " เล็ตเตอร์ออฟเครดิตเพื่อการค้ำประกัน "
        },
        {
            "vocab": " state enterprise ",
            "meaning": " รัฐวิสาหกิจ "
        },
        {
            "vocab": " stated value ",
            "meaning": " มูลค่าที่กำหนด "
        },
        {
            "vocab": " statement ",
            "meaning": " งบ, ใบแจ้งยอด "
        },
        {
            "vocab": " statement of changes in financial position ",
            "meaning": " งบแสดงการเปลี่ยนแปลงฐานะการเงิน "
        },
        {
            "vocab": " statement of financial position ",
            "meaning": " งบแสดงฐานะการเงิน "
        },
        {
            "vocab": " statement of sources and applications of funds ",
            "meaning": " งบแสดงแหล่งที่มาและการใช้เงินทุน "
        },
        {
            "vocab": " stock ",
            "meaning": " หุ้นทุน "
        },
        {
            "vocab": " stock dividend ",
            "meaning": " หุ้นปันผล "
        },
        {
            "vocab": " stock split ",
            "meaning": " การแยกหุ้นทุน "
        },
        {
            "vocab": " straight-line method ",
            "meaning": " วิธีเส้นตรง "
        },
        {
            "vocab": " subsidiary ",
            "meaning": " สาขาย่อย "
        },
        {
            "vocab": " subsidiary accounts ",
            "meaning": " บัญชีย่อย "
        },
        {
            "vocab": " subsidiary company ",
            "meaning": " บริษัทย่อย "
        },
        {
            "vocab": " subsidiary ledger ",
            "meaning": " สมุดแยกประเภทย่อย "
        },
        {
            "vocab": " subsidize ",
            "meaning": " ลดลง "
        },
        {
            "vocab": " sum-of-the-years-digits-method ",
            "meaning": " วิธีนับผลรวมจำนวนปี "
        },
        {
            "vocab": " sunk cost ",
            "meaning": " ต้นทุนจม "
        },
        {
            "vocab": " supplementary statement ",
            "meaning": " รายละเอียดประกอบ "
        },
        {
            "vocab": " supply ",
            "meaning": " วัสดุ "
        },
        {
            "vocab": " surplus ",
            "meaning": " ส่วนเกิน "
        },
        {
            "vocab": " suspense account ",
            "meaning": " บัญชีพัก "
        },
        {
            "vocab": " T account ",
            "meaning": " บัญชีรูปตัว “ที” "
        },
        {
            "vocab": " takeover ",
            "meaning": " เข้าครอบครองกิจการ "
        },
        {
            "vocab": " tangible ",
            "meaning": " ทรัพย์สินถาวรที่มีตัวตน "
        },
        {
            "vocab": " tangible fixed asset ",
            "meaning": " สินทรัพย์ถาวรมีตัวตน "
        },
        {
            "vocab": " tax avoidance ",
            "meaning": " การวางแผนภาษีอากร "
        },
        {
            "vocab": " temporary account ",
            "meaning": " บัญชีกำไรขาดทุน "
        },
        {
            "vocab": " temporary investment ",
            "meaning": " เงินลงทุนชั่วคราว "
        },
        {
            "vocab": " test ",
            "meaning": " การทดสอบ "
        },
        {
            "vocab": " time-interest-earned ",
            "meaning": " อัตรากำไรต่อดอกเบี้ยจ่าย "
        },
        {
            "vocab": " tool ",
            "meaning": " เครื่องมือ "
        },
        {
            "vocab": " trace ",
            "meaning": " พิสูจน์ติดตาม "
        },
        {
            "vocab": " trade account payable ",
            "meaning": " เจ้าหนี้การค้า "
        },
        {
            "vocab": " trade discount ",
            "meaning": " ส่วนลดการค้า "
        },
        {
            "vocab": " transaction ",
            "meaning": " รายการ "
        },
        {
            "vocab": " transportation expense ",
            "meaning": " ค่าขนส่ง "
        },
        {
            "vocab": " travelling expense ",
            "meaning": " ค่าพาหนะเดินทาง "
        },
        {
            "vocab": " treasury shares ",
            "meaning": " หุ้นทุนที่ได้รับคืน "
        },
        {
            "vocab": " trial balance ",
            "meaning": " งบทดลอง "
        },
        {
            "vocab": " trust receipt ",
            "meaning": " ทรัสต์รีซีท "
        },
        {
            "vocab": " typewriter ",
            "meaning": " เครื่องพิมพ์ดีด "
        },
        {
            "vocab": " unadjusted trial balance ",
            "meaning": " งบทดลองก่อนปรับปรุง "
        },
        {
            "vocab": " unappropriated retained earnings ",
            "meaning": " กำไรสะสมที่ยังไม่ได้จัดสรร "
        },
        {
            "vocab": " uncontrollable cost ",
            "meaning": " ต้นทุนที่ไม่สามารถควบคุมไม่ได้ "
        },
        {
            "vocab": " unearned revenue ",
            "meaning": " รายได้รอการตัดบัญชี "
        },
        {
            "vocab": " unfavorable variance ",
            "meaning": " ผลต่างที่ไม่พอใจ "
        },
        {
            "vocab": " unissued capital shares ",
            "meaning": " หุ้นทุนที่ยังมิได้นำออกจำหน่าย "
        },
        {
            "vocab": " unit cost ",
            "meaning": " ต้นทุนต่อหน่วย "
        },
        {
            "vocab": " unit price ",
            "meaning": " ราคาต่อหน่วย "
        },
        {
            "vocab": " unrealized gain (loss) ",
            "meaning": " กำไร (ขาดทุน) ที่ยังไม่เกิดขึ้น "
        },
        {
            "vocab": " unrealized revenue ",
            "meaning": " รายได้ที่ยังไม่เกิดขึ้น "
        },
        {
            "vocab": " unused letter of credit ",
            "meaning": " เล็ตเตอร์ออฟเครดิตที่ยังใช้ไม่เต็มจำนวน "
        },
        {
            "vocab": " useful life ",
            "meaning": " อายุการใช้งาน "
        },
        {
            "vocab": " valuation account ",
            "meaning": " บัญชีปรับมูลค่า "
        },
        {
            "vocab": " value ",
            "meaning": " มูลค่า "
        },
        {
            "vocab": " value added ",
            "meaning": " มูลค่าเพิ่ม "
        },
        {
            "vocab": " value added tax ",
            "meaning": " ภาษีมูลค่าเพิ่ม "
        },
        {
            "vocab": " variable budget ",
            "meaning": " งบประมาณผันแปร "
        },
        {
            "vocab": " variable cost ",
            "meaning": " ต้นทุนผันแปร "
        },
        {
            "vocab": " variable costing ",
            "meaning": " การบัญชีต้นทุนผันแปร "
        },
        {
            "vocab": " variance ",
            "meaning": " ผลต่าง "
        },
        {
            "vocab": " vehicle ",
            "meaning": " ยานพาหนะ "
        },
        {
            "vocab": " vendor ",
            "meaning": " พ่อค้า "
        },
        {
            "vocab": " verify ",
            "meaning": " พิสูจน์ยืนยัน "
        },
        {
            "vocab": " volume variance ",
            "meaning": " ผลต่างในปริมาณการผลิต "
        },
        {
            "vocab": " voucher ",
            "meaning": " ใบสำคัญ "
        },
        {
            "vocab": " voucher register ",
            "meaning": " ทะเบียนใบสำคัญจ่าย "
        },
        {
            "vocab": " voucher system ",
            "meaning": " ระบบในสำคัญจ่าย "
        },
        {
            "vocab": " vouching ",
            "meaning": " การตรวจสอบใบสำคัญ "
        },
        {
            "vocab": " wage ",
            "meaning": " ค่าแรงงาน "
        },
        {
            "vocab": " wage ",
            "meaning": " ค่าจ้าง "
        },
        {
            "vocab": " wage rate variance ",
            "meaning": " ผลต่างอัตราค่าแรง "
        },
        {
            "vocab": " wages account ",
            "meaning": " บัญชีจ่ายค่าจ้าง "
        },
        {
            "vocab": " warrants ",
            "meaning": " ตราสารแสดงสิทธิในการซื้อหุ้น "
        },
        {
            "vocab": " waste ",
            "meaning": " ของสูญเสีย "
        },
        {
            "vocab": " weighted average ",
            "meaning": " ถัวเฉลี่ยถ่วงน้ำหนัก "
        },
        {
            "vocab": " withholding tax ",
            "meaning": " ภาษีหัก ณ ที่จ่าย "
        },
        {
            "vocab": " without rights ",
            "meaning": " ไม่มีสิทธิ์ "
        },
        {
            "vocab": " work in process ",
            "meaning": " งานระหว่างทำ "
        },
        {
            "vocab": " work in progress ",
            "meaning": " งานระหว่างผลิต "
        },
        {
            "vocab": " work order ",
            "meaning": " คำสั่งผลิต "
        },
        {
            "vocab": " working capital ",
            "meaning": " เงินทุนหมุนเวียน "
        },
        {
            "vocab": " write down ",
            "meaning": " ลดค่า "
        },
        {
            "vocab": " write off ",
            "meaning": " แก้ไขข้อผิดพลาดรายการบัญชี "
        },
        {
            "vocab": " write up ",
            "meaning": " เพิ่มค่า "
        },
        {
            "vocab": " write-off ",
            "meaning": " ตัดออก "
        },
        {
            "vocab": " year after year ",
            "meaning": " ทุกปี "
        },
        {
            "vocab": " year-around ",
            "meaning": " ตลอดปี "
        },
        {
            "vocab": " year-end ",
            "meaning": " ปลายปีปฏิทิน "
        },
        {
            "vocab": " yearly ",
            "meaning": " ตลอดปี "
        },
        {
            "vocab": " youngling ",
            "meaning": " ผู้หัดใหม่, มือใหม่ "
        }
    ]
};

   
var vocabJson = JSON.stringify(vocabObj);
var objectJ = JSON.parse(vocabJson);
function getJsonData(){
 
 return objectJ;

}
function addWord(word,meaning){
    var wtd = ' ' + word + ' ';
    var newMeaning = meaning; 
    var newVocab = { vocab: wtd , meaning: newMeaning};
    var length = objectJ.Vocabulary.length;     
     objectJ.Vocabulary.push( newVocab);
     
     return  objectJ;
 
 }
 function updateWord(word,meaning){
    var wtd = ' ' + word + ' ';
    var newMeaning = meaning; 
    var length = objectJ.Vocabulary.length;     
    for(var i = 0 ; i < length ; i++){
        if(objectJ.Vocabulary[i] != undefined){
        if(objectJ.Vocabulary[i].vocab == wtd){
             objectJ.Vocabulary[i].meaning = newMeaning; 
             console.log("Update finished.");
             return  objectJ;
        }
    }
    }  
    
 
 }
 function getWord(word){
    var wtd = ' ' + word + ' '; 
    var length = objectJ.Vocabulary.length;     
    for(var i = 0 ; i < length ; i++){
        if(objectJ.Vocabulary[i] != undefined){
        if(objectJ.Vocabulary[i].vocab == wtd){
            return objectJ.Vocabulary[i]; 
           
        }
    }
    }  
      
 
 }
 function deleteWord(word){
    var wtd = ' ' + word + ' '; 
    var length = objectJ.Vocabulary.length;     
    for(var i = 0 ; i < length ; i++){
    if(objectJ.Vocabulary[i] != undefined){
         if(objectJ.Vocabulary[i].vocab == wtd){
             objectJ.Vocabulary.splice(i,1); 
          return "Deletion finished."; 
        }
           
        }
    }
        
    
     return  objectJ;
 
 }
