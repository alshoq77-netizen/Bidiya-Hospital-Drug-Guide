// =========================
// Admin + Categories Cards
// Password (front-end only): radmin123
// =========================

const ADMIN_PASSWORD = "radmin123";
const LS_KEY = "bidhya_meds_v2";     // نسخة جديدة
const LS_ADMIN = "bidhya_admin_logged_in";

// =========================
// الأقسام الافتراضية
// =========================
const defaultCategories = [
  { id:"diabetes",  name:"أدوية السكري والإنسولين", icon:"🩸" },
  { id:"tablets",   name:"الحبوب",                 icon:"💊" },
  { id:"injections",name:"الحقن",                  icon:"💉" }
];

// =========================
// ✅ تحويل تلقائي: type -> categoryId
// (يعني قائمتك تظل كما هي فيها type)
// =========================
function normalizeMeds(meds){
  return meds.map(m => {
    const cat = m.categoryId || m.type || "diabetes";
    return { ...m, categoryId: cat };
  });
}

// =========================
// ✅✅ الصق قائمتك الكبيرة هنا (بدون تعديل)
// =========================

  const medicines = [
  { name:"METFORMIN 500 mg", img:"https://i.ibb.co/Gf0NsZJN/glucophage.jpg", type:"tablets", uses:"لعلاج السكري من النوع الثاني ",
  short: "يوخذ بعد الأكل-الجرعة القصوى: 2000–2550 mg في اليوم", 
   details:`💊 METFORMIN 500MG
<h4> 🕒 طريقة الاستخدام/ </h4>
<p>
1.	عادةً يبدأ العلاج بجرعة منخفضة (500 ملغ مرة أو مرتين يوميًا) بعد الأكل لتقليل اضطرابات المعدة.
2.	تُبلع الأقراص كاملة مع الماء، ولا تُكسر أو تُسحق.
	⚠️ الطبيب هو من يحدد الجرعة حسب الحالة الطبية وسكر الدم.
</p>

<h4> 🕒 💊 الاستخدامات الشائعة </h4>
<p>  
1.	داء السكري من النوع الثاني 
2.	متلازمة تكيس المبايض (في بعض الحالات)
3.	الوقاية من تطور السكري لدى الأشخاص ذوي الخطورة العالية. </p>

      <h4>⚠️ الآثار الجانبية الشائعة </h4>
<p> 
1.	اضطرابات في المعدة أو إسهال خفيف.
2.	غثيان أو فقدان شهية. 
3.	طعم معدني في الفم أحيانًا..</p> 

 <h4>️⚕️ تحذيرات </h4>
<p> 
1.	لا يُستخدم في مرضى الكلى الشديدة أو الفشل الكلوي.
2.	يُوقف مؤقتًا قبل إجراء فحوصات تحتوي على صبغة أو جراحة كبرى. 
3.	يُستخدم بحذر أثناء الحمل أو الرضاعة.
4.	يُجنب شرب الكحول لتفادي خطر الحماض اللبني.
.</p>
    <h4> 🚨 متى تراجع الطبيب؟ </h4>
<p>
	 إذا حدث غثيان شديد أو قيء متكرر.
	تعب أو دوخة شديدة أو تنفس سريع (قد تشير إلى الحماض اللبني). 
	اصفرار الجلد أو البول الداكن (قد يدل على مشكلة بالكبد)...</p>
      <h4>️ 📦 التخزين </h4>
<p> يُحفظ في درجة حرارة الغرفة (أقل من 30°C)، بعيدًا عن الرطوبة والضوء المباشر وأيدي الأطفال
.</p>
`},

  { name:"GLICLAZIDE MR 30 mg",          img:"https://i.ibb.co/fzXfYsK6/diamicron.jpg", 
   type:"tablets", 
   uses:"يخفض مستوى السكر / Lowers blood sugar",
   short:"يؤخذ مع وجبة الإفطار-الجرعة القصوى 120 ملجم في اليوم",
   details:`💊 GLICLAZIDE MR 30MG<h4> 🕒 طريقة الاستخدام/ </h4>
<p> 
1.	يُؤخذ عادة قرص واحد (30 ملغ) مرة واحدة يوميًا مع وجبة الإفطار
2.	يجب بلع القرص كاملاً دون كسر أو مضغ.</p>
      <h4>⚠️ الآثار الجانبية الشائعة </h4>
<p> 
•	انخفاض مستوى السكر في الدم (دوخة، تعرّق، جوع). 
•	صداع أو غثيان بسيط. 
•	زيادة طفيفة في الوزن أحيانًا.
.</p> 
      <h4>️⚕️ تحذيرات </h4>
<p> 
1.	لا يُستخدم في السكري من النوع الأول أو عند استخدام الإنسولين.
2.	 يُستخدم بحذر في أمراض الكبد أو الكلى. 
3.	تجنّب تخطي الوجبات أو الصيام الطويل لتفادي هبوط السكر.
4.	 لا يُنصح به أثناء الحمل أو الرضاعة إلا بتوجيه الطبيب..</p>
      <h4>️ 📦 التخزين </h4>
<p> يُحفظ في درجة حرارة الغرفة (أقل من 30°C)، بعيدًا عن الرطوبة والضوء المباشر وأيدي الأطفال
.</p>
`},

  { name:"SITAGLIPTIN 100 mg", img:"https://i.ibb.co/1fSrCMbD/januvia.jpg",
   type:"tablets", 
   uses:"ينظم السكر/ Controls sugar",
   short:"يمكن تناوله في أي وقت من اليوم (مع أو بدون طعام ) - الجرعة القصوى: 100 mg في اليوم.",
   details:`💊 SITAGLIPTIN 100MG
الاستخدام: تحسين سكر الدم<h4> 🕒 طريقة الاستخدام/ </h4>
<p>
	عادةً قرص واحد (100 ملغ) مرة واحدة يوميًا، مع أو بدون طعام.
	الطبيب هو من يحدد الجرعة المناسبة خاصة في حالات أمراض الكلى.
</p>
<h4> 🕒 💊 الاستخدامات الشائعة </h4>
<p>  
1.	داء السكري من النوع الثاني 
2.	يمكن استخدامه بمفرده أو مع أدوية أخرى خافضة للسكر.</p>
      <h4>⚠️ الآثار الجانبية الشائعة </h4>
<p> 
1.	صداع أو دوخة خفيفة..
2.	غثيان أو اضطرابات في المعدة..
3.	التهابات بسيطة في الجهاز التنفسي أو الحلق..</p> 
      <h4>️⚕️ تحذيرات </h4>
	<p> لا يُستخدم في السكري من النوع الأول أو عند استخدام الإنسولين كعلاج أساسي.
	يجب مراقبة وظائف الكلى بانتظام.
	يُستخدم بحذر أثناء الحمل أو الرضاعة.
	يُجنب الإفراط في تناول الكحول..</p>
     <h4> 🚨 متى تراجع الطبيب؟ </h4>
<p>
1.	 ألم شديد في البطن أو الغثيان المستمر (قد يدل على التهاب البنكرياس).
2.	تورم في الوجه أو اللسان أو صعوبة في التنفس (علامة تحسس).
3.	ألم في المفاصل أو العضلات.
.</p>
      <h4>️ 📦 التخزين </h4>
•	<p> يُحفظ في درجة حرارة الغرفة (أقل من 30°C)، بعيدًا عن الرطوبة والضوء المباشر وأيدي الأطفال
.</p>
`},

  { name:"DAPAGLIFLOZIN 10 mg", img:"https://i.ibb.co/rRjSDRz0/forxiga.jpg",
   type:"tablets", 
   uses:"يخفض السكر عن طريق الكلى", 
   short:"يوخذ صباحًا، مرة واحدة يوميًا، مع أو بدون طعام-الجرعة القصوى: 10 mg في اليوم",
   details:`💊 DAPAGLIFLOZIN 10MG
  <h4> 🕒 طريقة الاستخدام/ </h4>
<p>
1.	يُؤخذ قرص واحد (10 ملغ) مرة واحدة يوميًا، مع أو بدون طعام، ويفضل في نفس الوقت كل يوم.
	الطبيب هو من يحدد الجرعة المناسبة حسب الحالة.
</p>
<h4> 🕒 💊 الاستخدامات الشائعة </h4>
<p>  
1.	داء السكري من النوع الثاني – لتحسين التحكم في مستوى السكر.
2.	 قصور القلب – لتقليل خطر الدخول للمستشفى.
3.	 مرض الكلى المزمن – لحماية وظائف الكلى..</p>
      <h4>⚠️ الآثار الجانبية الشائعة </h4>
<p> 
1.	زيادة التبول. 
2.	عطش أو جفاف بسيط. 
3.	التهابات فطرية في المنطقة التناسلية.
4.	دوخة أو انخفاض بسيط في ضغط الدم...</p> 
      <h4>️⚕️ تحذيرات </h4>
<p> 
1.	لا يُستخدم لمرضى السكري من النوع الأول.
2.	يُستخدم بحذر في أمراض الكلى أو الكبد.
3.	لا يُنصح به أثناء الحمل أو الرضاعة إلا بأمر الطبيب.
4.	لا توقف الدواء فجأة دون استشارة الطبيب.
.</p>
      <h4> 🚨 متى تراجع الطبيب؟ </h4>
<p>
1.	 عطش شديد جدًا أو جفاف حاد.
2.	رائحة فم تشبه الفاكهة.
3.	ألم أو احمرار في المنطقة التناسلية. 
1.	تورم أو ضيق في التنفس..</p>
      <h4>️ 📦 التخزين </h4>
<p> يُحفظ في درجة حرارة الغرفة (أقل من 30°C)، بعيدًا عن الرطوبة والضوء المباشر وأيدي الأطفال
.</p>
`},

 {name: "GLIBENCLAMIDE 5 mg",
  img: "https://i.ibb.co/MqX7xfH/melix.jpg",
  type: "tablets",
  uses: "مضاد سكري فموي / Oral hypoglycemic",
  
  // ❗ معلومات بسيطة تظهر في النافذة الأولى
  short: `• يُؤخذ قبل الأكل بـ 30 دقيقة (الإفطار)
• الجرعة القصوى: 20 mg في اليوم`,

  // ❗ التفاصيل الكاملة تظهر عند الضغط على "اقرأ المزيد"
  details: `💊 GLIBENCLAMIDE 5MG
<h4> 🕒 طريقة الاستخدام/ </h4>
<p>
1.	يُؤخذ عادة مرة أو مرتين يومياً قبل الوجبات (خاصة قبل الفطور).
	يجب الالتزام بالجرعة التي يحددها الطبيب لتجنب انخفاض السكر.
</p>

<h4> 🕒 💊 الاستخدامات الشائعة </h4>
<p>  
1.	داء السكري من النوع الثاني / Type 2 Diabetes Mellitus
2.	غالباً ما يُستخدم مع الحمية الغذائية وممارسة الرياضة أو مع أدوية أخرى خافضة للسكر.
</p>
      <h4>⚠️ الآثار الجانبية الشائعة </h4>
<p> 
1.	انخفاض السكر في الدم (تعب، دوخة، تعرّق).
2.	غثيان أو اضطرابات في المعدة.
3.	زيادة خفيفة في الوزن.</p> 

<h4>️⚕️ تحذيرات </h4>
<p> 
1.	لا يُستخدم في مرضى السكري من النوع الأول أو مع الكيتواسيدوز السكري.
2.	يجب الحذر في كبار السن ومرضى الكبد والكلى.
3.	لا يُنصح بتناوله أثناء الحمل أو الرضاعة إلا بتوجيه الطبيب.
..</p>
<h4> 🚨 متى تراجع الطبيب؟ </h4>
<p> 
1.	أعراض انخفاض السكر الحادة (دوخة شديدة، فقدان وعي).
2.	اصفرار العينين أو الجلد.
3.	ألم في الصدر أو ضيق في التنفس.
.</p>
<h4>️ 📦 التخزين </h4>
<p> يُحفظ في درجة حرارة الغرفة (أقل من 30°C)، بعيدًا عن الرطوبة والضوء المباشر وأيدي الأطفال
.</p>
`
},
  { name:"GLIMEPIRIDE 2 mg", img:"https://i.ibb.co/V0T3BWPM/amaryl.jpg", 
   type:"tablets", 
   uses:"يزيد إفراز الإنسولين",
   short:" •	يوخذ قبل الإفطار مباشرة أو مع أول وجبة في اليوم  •	الجرعة القصوى: 8 mg في اليوم ",
   details:`💊 GLIMEPIRIDE 2MG
   <h4> 🕒 💊 الاستخدامات الشائعة </h4>
<p>  
	يُستخدم لعلاج داء السكري من النوع الثاني (Type 2 Diabetes Mellitus)، لتحسين التحكم في مستوى السكر في الدم عندما لا تكفي الحمية والرياضة وحدهما.
. </p>

      <h4>⚠️ الآثار الجانبية الشائعة </h4>
<p> 
1.	انخفاض السكر في الدم 
2.	دوخة أو صداع
3.	زيادة الوزن
4.	غثيان خفيف أو اضطراب بالمعدة..</p> 

  <h4>️⚕️ تحذيرات </h4>
<p> 
	يجب تجنب استخدامه في مرضى السكري من النوع الأول أو الحماض الكيتوني.
	يُستخدم بحذر في المرضى كبار السن أو الذين يعانون من أمراض الكبد أو الكلى.
	لا يُنصح بتناول الكحول أثناء استخدامه لأنه قد يزيد خطر انخفاض السكر.
.</p>
      <h4>️ 📦 التخزين </h4>
<p> يُحفظ في درجة حرارة الغرفة (أقل من 30°C)، بعيدًا عن الرطوبة والضوء المباشر وأيدي الأطفال
.</p>
      <h4> تصنيف الحمل </h4>
<p> 
الفئة C: لا توجد دراسات كافية على البشر؛ يُستخدم فقط إذا كانت الفائدة المرجوة تفوق الخطر المحتمل على الجنين.
.</p>
`},
  // الحقن
  { name:"LANTUS SoloStar", img:"https://i.ibb.co/xQB90Cr/lantus.jpg", type:"injections", uses:"إنسولين طويل المفعول",
   short:"إنسولين طويل المفعول - يُحقن مرة واحدة يوميًا في نفس الوقت كل يوم." ,
   details:`💉 LANTUS
   <h4> 🕒 ألية العمل </h4>
<p>
1.	يتبلور تحت الجلد ويُطلق ببطء وثبات خلال اليوم.
2.	يوفر Basal insulin مشابه للإفراز الطبيعي للبنكرياس طوال 24 ساعة.
3.	لا يستخدم لتغطية الوجبات لأنه ليس سريع المفعول.
. <p>
<h4> 🕒 💊 الاستخدامات الشائعة </h4>
<p>  
1.	السكري من النوع الأول (مع إنسولين سريع للوجبات).
2.	السكري من النوع الثاني كعلاج Basal.
3.	الحفاظ على مستوى السكر الصائم (Fasting glucose).
4.	البديل للـ NPH، لكنه أكثر ثباتًا وأقل تسببًا في الهبوط الليلي.

	بداية وتأثيره:
-البداية: 1–2 ساعة
-لا يوجد ذروة واضحة (ثابت ومستمر)
-المدة: حتى 24 ساعة

..</p>
      <h4>⚠️ الآثار الجانبية الشائعة </h4>
<p> 
	الشائعة:
10.	هبوط سكر الدم (Hypoglycemia)
11.	زيادة الوزن
12.	ألم أو احمرار في موضع الحقن

	الأقل شيوعًا:
10.	تورّم خفيف
11.	تكتلات دهنية (Lipodystrophy)
12.	حساسية نادرة جدًا للإنسولين
..</p> 
      <h4>️⚕️ تحذيرات </h4>
<p> 
	تغيير مواقع الحقن باستمرار لتجنب التكتلات.
	الحذر مع مرضى الكلى أو الكبد لضبط الجرعة.
	لا يُمزج مع أي إنسولين آخر في نفس السرنجة.
	يجب حقنه في نفس الوقت يوميًا.
	مراقبة السكر الصائم بانتظام لتعديل الجرعة.</p>
      <h4> طريقة استخدام الإنسولين </h4>
<p>
	التحضير قبل الحقن
1.اغسل يديك جيدًا.
2.تأكد أن الإنسولين ليس منتهي الصلاحية.
3.تأكد من شكله

	اختيار مكان الحقن
أفضل الأماكن: البطن (الأسرع امتصاصًا) / الفخذين / الذراع العلوي / الأرداف.

	ملاحظة مهمة:
بدّل  مكان الحقن كل مرة لتجنب تكتل الدهون تحت الجلد (Lipodystrophy).

	خطوات الحقن باستخدام القلم (Insulin Pen)
1. أزيل الغطاء.
2. ركّب الإبرة الجديدة.
3. قم بعمل priming:
4.اضغط وحدتين للتأكد من خروج نقطة من الإنسولين.
5. اضبط الجرعة المطلوبة باستخدام القرص.
6. امسك الجلد بيدك (إن كان الدهون قليلة).
7. أدخل الإبرة بزاوية 90° (أو 45° في الأشخاص النحيفين).
8. اضغط زر الجرعة بالكامل.
9. انتظر 10 ثوانٍ قبل سحب الإبرة لضمان دخول الجرعة كاملة.
10. تخلص من الإبرة في علبة التخلص من الإبر (Sharps container).
	بعد الحقن
لا تقوم بتدليك مكان الحقن..</p>
      <h4>️ 📦 التخزين </h4>
<p>
	قبل الفتح:
يُحفظ في الثلاجة 2–8°C، بعيدًا عن التجميد.
	بعد الفتح (قلم/قارورة):
يُحفظ في درجة الغرفة لمدة 28–30 يومًا كحد أقصى.
	يُبعد عن الحرارة المباشرة وأشعة الشمس.
	لا يُجمَّد أبدًا.
	تخلص من القلم بعد انتهاء المدة حتى لو بقي فيه إنسولين
.</p>
`},
  { name:"NovoRapid Penfill", img:"https://i.ibb.co/m5nGVZS3/novorapid.jpg", type:"injections", uses:"إنسولين سريع",
   short:"إنسولين سريع المفعول - يُحقن قبل الوجبة مباشرة (0–15 دقيقة)." ,
   details:`💉 NOVORAPID
   <h4> 🕒 ألية العمل </h4>
<p>
1.	يقلّد إفراز الإنسولين الطبيعي أثناء الوجبة.
2.	يساعد على دخول الجلوكوز إلى الخلايا وخفض سكر الدم بعد الطعام.
3.	يتم امتصاصه سريعًا بسبب تعديلات طفيفة في تركيبه الكيميائي.
. <p>

<h4> 🕒 💊 الاستخدامات الشائعة </h4>
<p>  
1.	علاج السكري النوع الأول (Type 1).
2.	علاج السكري النوع الثاني (Type 2) عند الحاجة للإنسولين.
3.	التحكم بسكر الوجبة (Prandial insulin).
4.	تعديل / تصحيح ارتفاع السكر (Correction doses).
5.	يستخدم مع إنسولين قاعدي (Basal insulin) في الأنظمة المكثفة.

	بداية وتأثيره:
-	يبدأ خلال 10–15 دقيقة
-	ذروة 1–2 ساعة
-	يستمر 3–5 ساعات
..</p>
      <h4>⚠️ الآثار الجانبية الشائعة </h4>
<p> 
	الشائعة:
4.	هبوط سكر الدم (Hypoglycemia)
5.	زيادة الوزن
6.	ألم أو احمرار في موضع الحقن

	الأقل شيوعًا:
4.	تورّم خفيف
5.	تكتلات دهنية (Lipodystrophy)
6.	حساسية نادرة جدًا للإنسولين
..</p> 

      <h4>️⚕️ تحذيرات </h4>
<p> 
	تغيير مواقع الحقن باستمرار لتجنب التكتلات.
	الحذر مع مرضى الكلى أو الكبد لضبط الجرعة.
	الانتباه لأعراض هبوط السكر:
رجفة – عرق – جوع – دوخة – نبض سريع
	يجب ضبط الجرعات عند: المرض/ النشاط البدني العالي/ تغيّر نمط الأكل

	لا يستخدم إلا إذا كان شفافًا وصافيًا (لا يجب أن يكون عكرًا).
.</p>
      <h4> طريقة استخدام الإنسولين </h4>
<p>
	التحضير قبل الحقن
1.اغسل يديك جيدًا.
     2.تأكد أن الإنسولين ليس منتهي الصلاحية.
3.تأكد من شكله

	اختيار مكان الحقن
أفضل الأماكن: البطن (الأسرع امتصاصًا) / الفخذين / الذراع العلوي / الأرداف.

	ملاحظة مهمة:
بدّل  مكان الحقن كل مرة لتجنب تكتل الدهون تحت الجلد (Lipodystrophy).

	خطوات الحقن باستخدام القلم (Insulin Pen)
1. أزيل الغطاء.
2. ركّب الإبرة الجديدة.
3. قم بعمل priming:
4.اضغط وحدتين للتأكد من خروج نقطة من الإنسولين.
5. اضبط الجرعة المطلوبة باستخدام القرص.
6. امسك الجلد بيدك (إن كان الدهون قليلة).
7. أدخل الإبرة بزاوية 90° (أو 45° في الأشخاص النحيفين).
8. اضغط زر الجرعة بالكامل.
9. انتظر 10 ثوانٍ قبل سحب الإبرة لضمان دخول الجرعة كاملة.
10. تخلص من الإبرة في علبة التخلص من الإبر (Sharps container).
	بعد الحقن
لا تقوم بتدليك مكان الحقن..</p>
     <h4>️ 📦 التخزين </h4>
<p>
	قبل الفتح:
يُحفظ في الثلاجة 2–8°C، بعيدًا عن التجميد.
	بعد الفتح (قلم/قارورة):
يُحفظ في درجة الغرفة لمدة 28–30 يومًا كحد أقصى.
	يُبعد عن الحرارة المباشرة وأشعة الشمس.
	لا يُجمَّد أبدًا..</p>
`},
  { name:"Mixtard 30/70 أو Insulin Human 30/70", img:"https://i.ibb.co/SXQZpp5v/mixtard.jpg",
   type:"injections", 
   uses:"إنسولين مخلوط", 
   short:"التركيبة: 30% Insulin Regular سريع المفعول + 70% NPH طويل المفعول - يُحقن قبل الوجبة بـ 30 دقيقة." ,
   details:`💉 MIXTARD
   <h4> 🕒 ألية العمل </h4>
<p>
	الجزء السريع (Regular 30%):
يخفض السكر بعد الوجبة عبر تسهيل دخول الجلوكوز للخلايا.
	الجزء المتوسط (NPH 70%):
يعطي تغطية ممتدة لعدة ساعات ويحافظ على سكر الدم بين الوجبات وخلال الليل. <p>
<h4> 🕒 💊 الاستخدامات الشائعة </h4>
<p>  
1.	علاج داء السكري النوع الأول.
2.	علاج داء السكري النوع الثاني عند عدم سيطرة السكر على الأقراص فقط.
3.	مناسب للمرضى الذين يحتاجون لمزيج يغطي وجبة الطعام والبازال (الأساس اليومي) بنفس الوقت...</p>
      <h4>⚠️ الآثار الجانبية الشائعة </h4>
<p> 
	الأكثر شيوعًا:
1.	هبوط سكر الدم (Hypoglycemia)
2.	زيادة الوزن
3.	احمرار أو ألم مكان الحقن

	أقل شيوعًا:
1.	تكتلات دهنية مكان الحقن (Lipodystrophy)
2.	تورم بسيط أو احتباس سوائل
3.	رد فعل تحسسي نادر..</p> 

      <h4>️⚕️ تحذيرات </h4>
<p> 
	الحذر الشديد عند: كبار السن / مرضى الكلى أو الكبد / من لديهم خطر هبوط السكر.
لا يُستخدم إذا لاحظتِ:
1.	تغيّر لون الإنسولين
2.	وجود تكتلات
3.	يجب تبديل أماكن الحقن لتجنب تكتل الدهون.
4.	تجنّب القيادة أو تشغيل الآلات عند الشعور بعلامات هبوط السكر.
.</p>
     <h4> طريقة استخدام الإنسولين </h4>
<p>
	التحضير قبل الحقن
1.	اغسل يديك جيدًا.
2.	تأكد أن الإنسولين ليس منتهي الصلاحية.
3.	تأكد من شكله

	اختيار مكان الحقن
أفضل الأماكن: البطن (الأسرع امتصاصًا) / الفخذين / الذراع العلوي / الأرداف.

	ملاحظة مهمة:
بدّل  مكان الحقن كل مرة لتجنب تكتل الدهون تحت الجلد (Lipodystrophy).

	خطوات الحقن باستخدام القلم (Insulin Pen)
1. أزيل الغطاء.
2. ركّب الإبرة الجديدة.
3. قم بعمل priming:
4.اضغط وحدتين للتأكد من خروج نقطة من الإنسولين.
5. اضبط الجرعة المطلوبة باستخدام القرص.
6. امسك الجلد بيدك (إن كان الدهون قليلة).
7. أدخل الإبرة بزاوية 90° (أو 45° في الأشخاص النحيفين).
8. اضغط زر الجرعة بالكامل.
9. انتظر 10 ثوانٍ قبل سحب الإبرة لضمان دخول الجرعة كاملة.
10. تخلص من الإبرة في علبة التخلص من الإبر (Sharps container).
	بعد الحقن
لا تقوم بتدليك مكان الحقن..</p>

      <h4>️ 📦 التخزين </h4>
<p>
	قبل الفتح:
يُحفظ في الثلاجة 2–8°C، بعيدًا عن التجميد.
	بعد الفتح (قلم/قارورة):
يُحفظ في درجة الغرفة لمدة 28–30 يومًا كحد أقصى.
	يُبعد عن الحرارة المباشرة وأشعة الشمس.
	لا يُجمَّد أبدًا..</p>
`},

];

// =========================
// الأدوية الافتراضية: من قائمتك
// =========================
const defaultMedicines = normalizeMeds(medicines);

// ---------- Helpers ----------
function loadData() {
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) {
    const initial = { categories: defaultCategories, medicines: defaultMedicines };
    localStorage.setItem(LS_KEY, JSON.stringify(initial));
    return initial;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!parsed.categories || !parsed.medicines) throw new Error("Bad schema");
    return parsed;
  } catch {
    const fallback = { categories: defaultCategories, medicines: defaultMedicines };
    localStorage.setItem(LS_KEY, JSON.stringify(fallback));
    return fallback;
  }
}
function saveData(data){ localStorage.setItem(LS_KEY, JSON.stringify(data)); }
function isAdmin(){ return sessionStorage.getItem(LS_ADMIN) === "1"; }
function slugify(str) {
  return (str || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || ("cat-" + Math.random().toString(16).slice(2, 8));
}

// ---------- State ----------
let data = loadData();
let currentCategoryId = data.categories[0]?.id || "diabetes";
let currentMedicine = null;

// ---------- DOM ----------
const categoriesWrap = document.getElementById("categories");
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const clearBtn = document.getElementById("clearSearch");
const currentCategoryTitle = document.getElementById("currentCategoryTitle");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalUses = document.getElementById("modal-uses");

const moreModal = document.getElementById("moreModal");
const moreText = document.getElementById("more-text");

// Admin DOM
const adminLoginBtn = document.getElementById("adminLoginBtn");
const adminPanelBtn = document.getElementById("adminPanelBtn");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");

const adminLoginModal = document.getElementById("adminLoginModal");
const adminLoginClose = document.getElementById("adminLoginClose");
const adminPassword = document.getElementById("adminPassword");
const adminLoginSubmit = document.getElementById("adminLoginSubmit");
const adminLoginMsg = document.getElementById("adminLoginMsg");

const adminPanelModal = document.getElementById("adminPanelModal");
const adminPanelClose = document.getElementById("adminPanelClose");
// Tabs
const tabBtns = Array.from(document.querySelectorAll(".tab-btn"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

// Inline new category when adding medicine
const existingCatBox = document.getElementById("existingCatBox");
const newCatBox = document.getElementById("newCatBox");
const inlineCatName = document.getElementById("inlineCatName");
const inlineCatIcon = document.getElementById("inlineCatIcon");
const catModeRadios = Array.from(document.querySelectorAll('input[name="catMode"]'));
function openAdminTab(tabId){
  tabBtns.forEach(b => b.classList.toggle("active", b.dataset.tab === tabId));
  tabPanels.forEach(p => p.classList.toggle("active", p.id === tabId));
}

tabBtns.forEach(btn=>{
  btn.addEventListener("click", ()=> openAdminTab(btn.dataset.tab));
}); 
function syncCatModeUI(){
  const mode = (catModeRadios.find(r => r.checked)?.value) || "existing";
  existingCatBox.style.display = (mode === "existing") ? "block" : "none";
  newCatBox.style.display = (mode === "new") ? "block" : "none";
}
catModeRadios.forEach(r => r.addEventListener("change", syncCatModeUI));

const newCatName = document.getElementById("newCatName");
const newCatIcon = document.getElementById("newCatIcon");
const addCategoryBtn = document.getElementById("addCategoryBtn");
const catMsg = document.getElementById("catMsg");

const medCategory = document.getElementById("medCategory");
const medName = document.getElementById("medName");
const medImg = document.getElementById("medImg");
const medUses = document.getElementById("medUses");
const medShort = document.getElementById("medShort");
const medDetails = document.getElementById("medDetails");
const addMedicineBtn = document.getElementById("addMedicineBtn");
const medMsg = document.getElementById("medMsg");

const exportBtn = document.getElementById("exportBtn");
const importBtn = document.getElementById("importBtn");
const resetBtn = document.getElementById("resetBtn");
const jsonArea = document.getElementById("jsonArea");
const dataMsg = document.getElementById("dataMsg");

// ---------- Rendering: Categories Cards ----------
function renderCategories(){
  categoriesWrap.innerHTML = "";
  data.categories.forEach(cat => {
    const card = document.createElement("div");
    card.className = "category-card" + (cat.id === currentCategoryId ? " active" : "");
    card.innerHTML = `
      <span class="icon">${cat.icon || "📁"}</span>
      <div class="name">${cat.name}</div>
    `;
    card.onclick = () => showCategory(cat.id);
    categoriesWrap.appendChild(card);
  });
}

function setCategoryTitle(){
  const cat = data.categories.find(c => c.id === currentCategoryId);
  currentCategoryTitle.textContent = cat ? `الأدوية – ${cat.name}` : "الأدوية";
}

// ---------- Rendering: Medicines ----------
function renderMedicines(list){
  gallery.innerHTML = "";
  if (!list.length){
    gallery.innerHTML = `<div class="empty">لا توجد أدوية في هذا القسم حالياً.</div>`;
    return;
  }
  list.forEach(med=>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${med.img}" alt="${med.name}">
      <h4>${med.name}</h4>
      <p>${med.uses || ""}</p>
    `;
    card.onclick = ()=> openModal(med);
    gallery.appendChild(card);
  });
}

function showCategory(categoryId){
  currentCategoryId = categoryId;
  searchInput.value = "";
  setCategoryTitle();
  renderCategories();

  const list = data.medicines.filter(m => m.categoryId === categoryId);
  renderMedicines(list);
}

// ---------- Modals ----------
function openModal(med){
  currentMedicine = med;
  modalImg.src = med.img;
  modalName.textContent = med.name;
  modalUses.innerHTML = (med.short || med.uses || "").replace(/\n/g,"<br>");
  modal.style.display = "flex";
}
function closeModal(){ modal.style.display = "none"; }
function openMore(){
  moreText.innerHTML = (currentMedicine?.details || "—");
  modal.style.display = "none";
  moreModal.style.display = "flex";
}
function closeMore(){ moreModal.style.display = "none"; }

// expose for inline onclick
window.closeModal = closeModal;
window.openMore = openMore;
window.closeMore = closeMore;

// ---------- Search داخل القسم الحالي ----------
searchInput.addEventListener("input", ()=>{
  const term = searchInput.value.toLowerCase().trim();
  const result = data.medicines.filter(m =>
    m.categoryId === currentCategoryId &&
    (
      (m.name || "").toLowerCase().includes(term) ||
      (m.uses || "").toLowerCase().includes(term)
    )
  );
  renderMedicines(result);
});
clearBtn.addEventListener("click", ()=>{
  searchInput.value = "";
  showCategory(currentCategoryId);
});

window.addEventListener("click", (e)=>{
  if (e.target === modal) closeModal();
  if (e.target === moreModal) closeMore();
  if (e.target === adminLoginModal) adminLoginModal.style.display = "none";
  if (e.target === adminPanelModal) adminPanelModal.style.display = "none";
});

// ---------- Admin ----------
function refreshAdminUI(){
  const ok = isAdmin();
  adminPanelBtn.style.display = ok ? "inline-flex" : "none";
  adminLogoutBtn.style.display = ok ? "inline-flex" : "none";
}

adminLoginBtn.addEventListener("click", ()=>{
  adminLoginMsg.textContent = "";
  adminPassword.value = "";
  adminLoginModal.style.display = "flex";
  adminPassword.focus();
});
adminLoginClose.addEventListener("click", ()=> adminLoginModal.style.display = "none");

adminLoginSubmit.addEventListener("click", ()=>{
  if (adminPassword.value === ADMIN_PASSWORD){
    sessionStorage.setItem(LS_ADMIN, "1");
    adminLoginModal.style.display = "none";
    refreshAdminUI();
  } else {
    adminLoginMsg.textContent = "❌ كلمة المرور غير صحيحة";
  }
});

adminLogoutBtn.addEventListener("click", ()=>{
  sessionStorage.removeItem(LS_ADMIN);
  refreshAdminUI();
  adminPanelModal.style.display = "none";
});

function fillCategorySelect(){
  medCategory.innerHTML = "";
  data.categories.forEach(c=>{
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = `${c.icon ? c.icon + " " : ""}${c.name}`;
    medCategory.appendChild(opt);
  });
}

adminPanelBtn.addEventListener("click", ()=>{
  if (!isAdmin()) return;

  catMsg.textContent = "";
  medMsg.textContent = "";
  dataMsg.textContent = "";

  fillCategorySelect();
  syncCatModeUI();

  // افتحي تبويب إضافة الدواء افتراضيًا
  openAdminTab("tab-meds");

  adminPanelModal.style.display = "flex";
});
adminPanelClose.addEventListener("click", ()=> adminPanelModal.style.display = "none");

// Add category
addCategoryBtn.addEventListener("click", ()=>{
  if (!isAdmin()) return;
  const name = newCatName.value.trim();
  const icon = newCatIcon.value.trim();
  if (!name){ catMsg.textContent = "❗ اكتب اسم القسم"; return; }

  const id = slugify(name);
  if (data.categories.some(c=> c.id === id)){
    catMsg.textContent = "❗ هذا القسم موجود بالفعل";
    return;
  }
  data.categories.push({ id, name, icon });
  saveData(data);

  newCatName.value = "";
  newCatIcon.value = "";
  catMsg.textContent = "✅ تم إضافة القسم";

  renderCategories();
  fillCategorySelect();
});

// Add medicine
addMedicineBtn.addEventListener("click", ()=>{
  if (!isAdmin()) return;

  const mode = (catModeRadios.find(r => r.checked)?.value) || "existing";

  // 1) تحديد القسم
  let categoryId = medCategory.value;

  // إذا المستخدم اختار "قسم جديد"
  if (mode === "new"){
    const name = inlineCatName.value.trim();
    const icon = inlineCatIcon.value.trim();

    if (!name){
      medMsg.textContent = "❗ اكتب اسم القسم الجديد أولاً";
      return;
    }

    const id = slugify(name);

    // إذا غير موجود: أضفه
    if (!data.categories.some(c => c.id === id)){
      data.categories.push({ id, name, icon });
    }

    categoryId = id;
  }

  // 2) بيانات الدواء
  const name = medName.value.trim();
  const img = medImg.value.trim();
  const uses = medUses.value.trim();
  const short = medShort.value.trim();
  const details = medDetails.value.trim();

  if (!categoryId || !name || !img){
    medMsg.textContent = "❗ مطلوب: القسم + اسم الدواء + رابط الصورة";
    return;
  }

  data.medicines.unshift({ categoryId, name, img, uses, short, details: details || "—" });
  saveData(data);

  // تنظيف الحقول
  medName.value = "";
  medImg.value = "";
  medUses.value = "";
  medShort.value = "";
  medDetails.value = "";

  // تنظيف حقول القسم الجديد إذا استخدمها
  if (mode === "new"){
    inlineCatName.value = "";
    inlineCatIcon.value = "";
  }

  medMsg.textContent = "✅ تم إضافة الدواء";

  // تحديث واجهة الأقسام + القائمة المنسدلة
  renderCategories();
  fillCategorySelect();

  // افتح القسم الذي أُضيف إليه الدواء
  showCategory(categoryId);
});
// Export/Import/Reset
exportBtn.addEventListener("click", ()=>{
  if (!isAdmin()) return;
  jsonArea.value = JSON.stringify(data, null, 2);
  dataMsg.textContent = "✅ تم تجهيز JSON للتصدير";
});
importBtn.addEventListener("click", ()=>{
  if (!isAdmin()) return;
  try{
    const parsed = JSON.parse(jsonArea.value);
    if (!parsed.categories || !parsed.medicines) throw new Error("schema");
    data = parsed;
    saveData(data);
    renderCategories();
    showCategory(data.categories[0]?.id || "diabetes");
    fillCategorySelect();
    dataMsg.textContent = "✅ تم الاستيراد بنجاح";
  } catch {
    dataMsg.textContent = "❌ JSON غير صالح";
  }
});
resetBtn.addEventListener("click", ()=>{
  if (!isAdmin()) return;
  data = { categories: defaultCategories, medicines: defaultMedicines };
  saveData(data);
  renderCategories();
  showCategory("diabetes");
  fillCategorySelect();
  dataMsg.textContent = "✅ تم إعادة الضبط";
});

// ---------- Init ----------
renderCategories();
setCategoryTitle();
showCategory(currentCategoryId);
refreshAdminUI();
