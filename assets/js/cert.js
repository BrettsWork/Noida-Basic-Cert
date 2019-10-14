var questions = [
{
    question:'1. Which tool is used to bring in subtemplates?',
    answers:['Image Tool','Text Tool','Frame Tool','Merge Target Tool'],
    correctAnswer:'Merge Target Tool'
},
{
    question:'2. What is the standard bleed size when processing artwork?',
    answers:['.25in','.125in','.5in','.375in'],
    correctAnswer:'.125in'
},
{
    question:'3. Which text tag allows user to choose predetermined text options?',
    answers:['DB Tag','Input Tag','Discrete Tag','Meta Tag'],
    correctAnswer:'Discrete Tag'
},
{
    question:'4. When adjusting letter-spacing you would use which field?',
    answers:['Baseshift','Leading','Tracking'],
    correctAnswer:'Tracking'
},
{
    question:'5. Why is it important for regions/tags to have unique naming?',
    answers:['So regions don\'t inherit from other regions'],
    correctAnswer:'So regions don\'t inherit from other regions'
},
{
    question:'6. Fonts are loaded directly into Toolkit',
    answers:['True', 'False'],
    correctAnswer:'False'
},
{
    question:'7. Which is not a Datasource type?',
    answers:['Text','Image','Shape','Color'],
    correctAnswer:'Shape'
},
{
    question:'8. You can only have one condition per datasourc?',
    answers:['True', 'False'],
    correctAnswer:'False'
},
{
    question:'9. An input tag is the most commonly used text tag.',
    answers:['True', 'False'],
    correctAnswer:'True'
},
{
    question:'10. What does the merge target need to be name in order for locations module to work?',
    answers:['Select Number of Addresses'],
    correctAnswer:'Select Number of Addresses'
},
{
    question:'11. Where would you go to apply ALL CAPS to a tag with the Text Tool',
    answers:['Tags','Colors','Rules','Style Groups'],
    correctAnswer:'Rules'
},
{
    question:'12. To allow input of more than a single line what needs to be selected',
    answers:['User Editable','Allow Multi-line input','Wrap','All of the Above'],
    correctAnswer:'All of the Above'
},
{
    question:'13. Text tags allow for numbered and bullet list?',
    answers:['True','False'],
    correctAnswer:'True'
},
{
    question:'14. If an Indesign file shows a font-size of 30 and leading of 36; what would you set the leading to in Toolkit?',
    answers:['36','6','30','-6'],
    correctAnswer:'6'
},
{
    question:'15. When processing artwork you need to make sure that all images and fonts are included?',
    answers:['True','False'],
    correctAnswer:'True'
},
{
    question:'16. All page regions need to placed within the artboard.',
    answers:['True', 'False'],
    correctAnswer:'False'
},
{
    question:'17. In order for a template to be live, you need to do which of the following?',
    answers:['Apply workflow','Publish template','Apply asset to Category','All of the Above'],
    correctAnswer:'All of the Above'
},
{
    question:'18. When launching a template and certain assets aren\'t available what should you check for?',
    answers:['Are all assets published'],
    correctAnswer:'Are all assets published'
},
{
    question:'19. What is the most common file format when exporting for template creation?',
    answers:['pdf','svg','png','jpg'],
    correctAnswer:'pdf'
},
{
    question:'20. What is the typical color space for a print template?',
    answers:['CMYK','RGB'],
    correctAnswer:'CMYK'
},
];

$(document).ready(function(){
    for(var i = 0; i < questions.length;i++){
        var questionDiv = $('<div class="question">');
        var questionPara = $(`<h3>${questions[i].question}</h3>`);
        questionDiv.append(questionPara);
        console.log(questions[i].answers)
        for(var j = 0; j < questions[i].answers.length;j++){
            console.log(questions[i].answers[j])
            var answersPara = $(`<p> – ${questions[i].answers[j]}</p>`);
            questionDiv.append(answersPara);
            $('#questions').append(questionDiv);
            if(questions[i].answers[j] === questions[i].correctAnswer){
                answersPara.addClass('correct-answer');
            }
        }
    }
})