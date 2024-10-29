const username = localStorage.getItem("username");
const translations = {
  en: {
    general: "General",
    "back-office": "Back Office",
    "accounting-numbers": "Accounting Numbers",
    "accounting-options": "Accounting Options",
    language: "Language",
    English:"English",
    Arabic:"Arabic",
    "pos-options": "PoS Options",
    "export-files": "Export Files",
    // Add translations for GeneralA fields
    EndTime: "End Time",
    Phone: "Phone",
    Rate: "Rate",
    VAT: "VAT",
    Currency: "Currency",
    Name: "Name",
    Name2: "Name 2",
    Street: "Street",
    Branch: "Branch",
    userControl: "User Control",
    accounting: "Accounting",
    stockInventory: "Stock Inventory",
    invoices: "Invoices & Types Conditions",
    sales: "Sales Conditions",
    tables: "Tables-Dine In & Beauty",
    other: "Other",
    username: "Username",
    successMessage: "Changes saved successfully!",
    confirm: "Are you sure you want to close without saving?",
    save: "Save",
    Cancel: "Cancel",
    purshase_return: "Purchase Return",
    purshase: "Purchase",
    sales_return: "Sales Return",
    statement: "Statement",
    chart: "Chart",
    orders: "Orders",
    user_control: "User Control",
    email: "Email",
    items: "Items",
    SAType: "SA Type",
    password: "Password",
    Yes: "Yes",
    No: "No",
    Confirmation: "Confirmation",
    Add: "Add",
    stationSettings: "Station Settings",
    save: "Save",
    AllowPrintInv: "Allow Print Invoice",
    AllowPrintKT: "Allow Print Kitchen",
    ReceiptName: "Receipt Name",
    onlyNumbers: "Only Numbers",
    changesSaved: "Changes saved successfully!",
    manage_team_members: "Manage Team Members",
    unsavedChanges: "You have unsaved changes.",
    QtyPrintInv: "Qty Print Invoice",
    QtyPrintKT: "Qty Print Kitchen",
    A4Name: "A4Name",
    pcname: "PC Name",
    DefaultPrinter: "Default Printer",
    ItemName: "Item Name",
    UPrice: "Unit Price",
    Disc: "Discount",
    Tax: "Tax",
    Ingredients: "Ingredients",
    ItemNo: "Item Number",
    Active: "Active",
    Image: "Image",
    GroupName: "Group Name",
    errorMessage: {
      number: "must be a number",
      maxLength: "must be at most 2 characters long",
    },
    manage_items: "Manage Items",
    EOD: "End of Day",
    COH: "Cash on Hand",
    EndOfDayAccessUsers:"End Of Day Access Users",
    GroupNo: "Group No",
    GroupName: "Group Name",
    manage_item_group: "Manage Group Item",
    RealDate: "Real Date",
    Date: "Date",
    Time: "Time",
    Total: "Total",
    InvNo: "Inv No",
    InvType: "Inv Type",
    Qty: "Qty",
    InvKind: "InvKind",
    "Invoices History": "Inv History",
    Delivery: "Delivery",
    TakeAway: "Takeaway",
    Tables: "Tables",
    Sections: "Section",
    Edit: "Edit",
    Update: "Update",
    "Add Table": "Add Table",
    "Update Table": "Update Table",
    Create: "Create",
    "Add Section": "Add Section",
    "Update Section": "Add Section",
    "Section No": "Section No",
    "Table No": "Table No",
    "Section Name": "Section Name",
    "Table Waiter": "Waiter",
    Active: "Active",
    Description: "Description :",
    User: "User",
    EndShift: "Do you want to end your shift",
    EndDay: "Do you want to end your day?",
    "POS Screen": "POS Screen",
    "Manage Items": "Manage Items",
    "Manage Group Item": "Manage Group Item",
    "Invoices History": "Inv History",
    "Daily Sales": "Daily Sales",
    "Cash On Hands": "Cash On Hands",
    "End Of Day": "End Of Day",
    "Company Settings": "Company Settings",
    "Company Management": "Company Management",
    "Station Settings": "Station Settings",
    "User Settings": "User Settings",
    Kitchen: "Kitchen",
    Currency: "Currency",
    CurrencySettings: "Currency Settings",
    Logout: "Logout",
    AddCurrencyNumber: "AddCurrencyNumber",
    ID:"id",
    Code: "Code",
    BranchSettings: "Branch Settings",
    AddBranchNumber : "Add Branch Number",
    KitchenSettings : "Kitchen Settings",
    AddKitchenNumber : "Add Kitchen Number",
    AddUser: "Add User",
    AccountNo : "AccountNo",
    ItemName : "Item Name",
    Qty :"Qty",
    Total : "Total",
    DailySales : "Daily Sales",
    Branches: "Branches",
    Users : "Users",
    Print :"Print",
    AddGroupNumber : "Add Group Number",
    Search : "Search",
    AddItemNumber : "Add Item Number",
    PlaceOrder : "Place Order",
    New : "New",
    GrossTotal : "Gross Total:" ,
    Service : "Service",
    Choose: "Choose",
    Unchoose: "Unchoose",
    Discount :"Discount",
    TotalInvoices:"Total Invoices",
    CloseTable : " Close Table",
    Select:" Select",
    Profile: "Profile",
    AccountName: "Account Name",
    Tel:"Tel",
    Address: "Address",
    Building:"Building",
    Clear:"Clear",
    AddClient:"AddClient",
    Client:"Client",
    SelectPaymentMethod:"Select Payment Method",
    Cash:"Cash",
    VISACard: "VISA Card",
    PayIn: "Pay In",
    PayOut:"Pay Out",
    PaidUSD: " Paid USD:",
    PaidLBP:"Paid LBP:",
    USDOut : "USD Out :",
    LBPOut: "LBP Out :",
    BalanceUSD:"Balance USD:",
    BalanceLBP: "Balance LBP:",
    SubmitPayment:"Submit Payment",
    SelectCardType:"Select Card Type",
    AlertMessage:"Do you want to send changes to kitchen before exit or stay in the invoice table?",
    Send :"Send",
    Stay:"Stay",
    Close: " Close",
    Submit :"Submit",
    EmailValidationError:"Invalid email format",
    Callaninvoice:" Call an invoice",
    Recall:"Recall",
    Messagecannotupdate:" You can't update this when printed",
    WelcomeScreen:`Welcome, ${username}!`

    
  },
  ar: {
    general: "عام",
    "back-office": "المكتب الخلفي",
    "accounting-numbers": "أرقام المحاسبة",
    "accounting-options": "خيارات المحاسبة",
    language: "اللغة",
    English:"الإنجليزية",
    Arabic:"العربية",
    "pos-options": "خيارات نقاط البيع",
    "export-files": "تصدير الملفات",
    EndTime: "وقت النهاية",
    Phone: "الهاتف",
    Rate: "معدل",
    VAT: "ضريبة القيمة المضافة",
    Currency: "عملة",
    City: "مدينة",
    Name: "اسم",
    Name2: "اسم 2",
    Street: "شارع",
    Branch: "فرع",
    userControl: "التحكم بالمستخدم",
    accounting: "المحاسبة",
    stockInventory: "المخزون",
    invoices: "الفواتير وأنواع الشروط",
    sales: "شروط فواتير المبيعات",
    tables: "طاولات - تناول الطعام والجمال",
    other: "أخرى",
    username: "اسم المستخدم",
    successMessage: "تم حفظ التغييرات بنجاح!",
    confirm: "هل أنت متأكد أنك تريد الإغلاق دون حفظ؟",
    save: "حفظ",
    Cancel: "إلغاء",
    purshase_return: "إرجاع المشتريات",
    purshase: "شراء",
    sales_return: "إرجاع المبيعات",
    statement: "بيان",
    chart: "مخطط",
    orders: "طلبات",
    user_control: "التحكم في المستخدم",
    email: "البريد الإلكتروني",
    items: "العناصر",
    SAType: "نوع SA",
    password: "كلمة المرور",
    username: "اسم المستخدم",
    accessLevel: "مستوى الوصول",
    manage_team_members: "إدارة أعضاء الفريق",
    Add: "إضافة",
    Yes: "نعم",
    No: "لا",
    Confirmation: "تأكيد",
    stationSettings: "إعدادات المحطة",
    AllowPrintInv: "السماح بطباعة الفاتورة",
    AllowPrintKT: "السماح بطباعة تذكرة المطبخ",
    ReceiptName: "اسم الإيصال",
    onlyNumbers: "أرقام فقط",
    changesSaved: "تم حفظ التغييرات بنجاح!",
    manage_team_members: "إدارة أعضاء الفريق",
    unsavedChanges: "لديك تغييرات غير محفوظة.",
    QtyPrintInv: "كمية طباعة الفاتورة",
    QtyPrintKT: "كمية طباعة المطبخ",
    A4Name: "اسم A4",
    pcname: "اسم الكمبيوتر",
    DefaultPrinter: "الطابعة الافتراضية",
    ItemName: "اسم العنصر",
    UPrice: "سعر الوحدة",
    Disc: "خصم",
    Tax: "ضريبة",
    Ingredients: "مكونات",
    ItemNo: "رقم العنصر",
    Active: "نشط",
    Image: "صورة",
    GroupName: "اسم المجموعة",
    errorMessage: {
      number: "يجب أن يكون رقماً",
      maxLength: "يجب ألا يتجاوز حرفين",
    },
    manage_items: "إدارة العناصر",
    EOD: "نهاية اليوم",
    COH: "النقد في اليد",
    GroupNo: "رقم المجموعة",
    GroupName: "اسم المجموعة",
    manage_item_group: "إدارة عنصر المجموعة",
    RealDate: "التاريخ الفعلي",
    Date: "التاريخ",
    Time: "الوقت",
    Total: "المجموع",
    InvNo: "رقم الفاتورة",
    InvType: "نوع الفاتورة",
    Qty: "الكمية",
    InvKind: "نوع الفاتورة",
    "Invoices History": "تاريخ الفواتير",
    Delivery: "توصيل",
    TakeAway: "تيك أواي",
    Tables: "طاولات",
    "POS Screen": "نقطة البيع",
    "Manage Items": "إدارة نقطة البيع",
    "Manage Group Item": "إدارة المجموعات",
    "Invoices History": "تاريخ الفواتير",
    "Daily Sales": "المبيعات اليومية",
    "Cash On Hands": "النقد في اليد",
    "End Of Day": "نهاية اليوم",
    "Company Settings": "إعدادات الشركة",
    "Company Management": "إدارة الشركة",
    "Station Settings": "إعدادات المحطة",
    "User Settings": "إعدادات المستخدم",
    Kitchen: "المطبخ",
    Currency: "العملة",
    CurrencySettings: "إعدادات العملة",
    Logout: "تسجيل الخروج",
    Sections: "قسم",
    Edit: "تعديل",
    Update: "تحديث",
    "Add Table": "إضافة طاولة",
    "Update Table": "تحديث الطاولة",
    Create: "إنشاء",
    "Add Section": "إضافة قسم",
    "Update Section": "تحديث القسم",
    "Section No": "رقم القسم",
    "Table No": "رقم الطاولة",
    "Section Name": "اسم القسم",
    "Table Waiter": "النادل",
    Active: "نشط",
    Description: ": الوصف",
    User: "مستخدم",
    EndShift: "هل ترغب في إنهاء وقت عملك؟",
    EndDay: "هل ترغب في إنهاء يومك؟",
    AddCurrencyNumber: "أضف رقم العملة",
    ID:"بطاقة تعريف",
    Code: "الكود",
    BranchSettings: "إعدادات الفرع",
    AddBranchNumber : "إضافة رقم الفرع",
    KitchenSettings : "إعدادات المطبخ",
    AddKitchenNumber :  "أضف رقم المطبخ",
    AddUser: "إضافة مستخدم",
    AccountNo:"رقم الحساب",
    ItemName : "اسم العنصر",
    Discount : "خصم",
    Qty :"الكمية",
    Total : "المجموع",
    DailySales : "المبيعات اليومية",
    Branches :"الفروع",
    Users :"المستخدمين",
    Print : "الطباعة",
    AddGroupNumber : "إضافة رقم المجموعة",
    Search: "بحث",
    AddItemNumber : "أضف رقم الصنف",
    PlaceOrder : "تثبيت الطلب",
    New :"جديد",
    GrossTotal : " : المجموع الإجمالي",
    Service : "خدمة",
    Choose: "اختيار",
    TotalInvoices: "إجمالي الفواتير",
    CloseTable :  "إغلاق الطاولة",
    Select:"اختر",
    Profile:"الملف الشخصي",
    AccountName :"إسم الحساب",
    Tel: "هاتف",
    Address: "العنوان",
    Building:"البناء",
    Clear:"مسح ",
    AddClient: "إضافة عميل",
    Client:"العميل",
    SelectPaymentMethod:"حدد طريقة الدفع",
    Cash:"نقدي",
    VISACard: "بطاقة فيزا",
    PayIn: "Pay In",
    PayOut:"Pay Out",
    PaidUSD:"الدولار المدفوع:",
    PaidLBP:"الليرة اللبنانية المدفوعة:",
    USDOut : " USD Out :",
    LBPOut: "LBP Out :",
    BalanceUSD:"الرصيد بالدولار الأمريكي:",
    BalanceLBP: "الرصيد بالليرة اللبنانية:",
    SubmitPayment:"إرسال الدفع",
    SelectCardType:"حدد نوع البطاقة",
    AlertMessage:"هل تريد إرسال التغييرات إلى المطبخ قبل الخروج أو البقاء في جدول الفاتورة؟",
    Send :"إرسال",
    Stay :"البقاء",
    Unchoose: "قم بإلغاء الاختيار",
    Close :  "إغلاق ",
    Submit :"إرسال",
    EmailValidationError:"تنسيق البريد الإلكتروني غير صالح",
    Callaninvoice:" اتصل بفاتورة",
    Recall:"إستدعاء",
    Messagecannotupdate:"لا يمكنك تحديث هذا عند طباعته",
    WelcomeScreen:`مرحبًا, ${username}!`
  },
};

export default translations;
