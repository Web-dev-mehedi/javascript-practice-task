//code block in js {} দিয়ে  কোড ব্লক  করা হয় js এ কোড ব্লক করে লিখলে একই ভ্যারিয়েবল name diye ভিন্ন ভিন্ন জায়গায় অ্যাড করা যাই 
 {
  let x =5;
  console.log(x);

 }

 {
    let x= "mehedi"
    console.log(x)

 }

//object in js অবজেক্ট হলো অনেক গুলো key and value দিয়ে একটি ভ্যারিয়েবল গঠন করা যাই ভ্যারিয়েবল এর ভিতর বাম দিকের টা key and ডান দিকের টা  value 
const educationForms= {
       name : "mehedi hasan",
       details: "A student profile is a profile of a student involved in a school or program.",
       isTemplateUse : false ,
       roll:3030,
}

// অবজেক্ট  এর  ভ্যারিয়েবল থেকে কোনো একটি  নির্দিষ্ট  ডাটা কে একসেস  করতে হলে  
 console.log(educationForms.roll)//or //it can prefer to use
 console.log(educationForms["roll"])//এই দুই নিয়মে অবজেক্ট এর স্পেসিফিক ডাটা এক্সেস করা  যাই //but dont thinks its a strings 
 educationForms["roll"] + 1; //অবজেক্ট এর ভিতর কোনো ভ্যারিয়েবল এর key এর value আপগ্রেড করা যায় এক্স..... নিচে ba komanu jai:
 educationForms["name"] = "javed hasan"//অবজেক্ট এর ভিতর কোনো ভ্যারিয়েবল এর key এর value পরিবর্তন  করা যায়  ex:
 console.log(educationForms["roll"] + "100")//output
