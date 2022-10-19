# Gulia Isaeva
## Junior Front End Web Developer 

Located in Kayseri, Turkey

### CONTACTS:

**Email:** <gulia.isaeva.pls@gmail.com>    
**Github:** <https://github.com/guliaisaeva>    

***

  Creative detail-oriented junior Front End Web Developer.
  Skilled in designing,developing,troubleshooting responsive websites.  
  Proficient in HTML5,CSS3,JAVASCRIPT(ES6),user interface and user experience (UI/UX) and in learning process of modern libraries and frameworks.
  Experienced with Trello,Miro,Notion.
  Well self-organized,team player,self-motivated and passionate to learn new skills and solve problems. 
  
 ***  

### TECHNICAL SKILLS:
 
- HTML/CSS
- JS/ES6
- Bootstrap
- Git/Github
- Figma
- Adobe Photoshop
- Adobe Illustrator
- VSCode

### CODE EXAMPLE:  

 _Task: Implement the function which takes an array containing the names of people that like an item._  
 _It must return the display text as shown in the examples:_ 

   _[]                               -->  "no one likes this"  
   ["Gulia"]                         -->  "Gulia likes this"   
   ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"   
   ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"   
   ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"_

   ```Javascript
   function likes(arr){
   
      switch(true){ 
        case arr.length==0:
         return arr + "no one likes this";
         case arr.length==1 :
         return arr + " likes this";
         case arr.length==2 :
         return `${arr[0]} and ${arr[1]} like this`;
         case arr.length==3 :
         return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
         case arr.length>=4 :
         return `${arr[0]}, ${arr[1]} and ${arr.length-2} others + like this`;
    }
   }


console.log(likes(["Gulia","Alex","Aysal","Teo","Cairo"]));

```
