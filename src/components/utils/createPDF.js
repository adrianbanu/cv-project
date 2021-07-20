import jsPDF from 'jspdf';
import {format} from 'date-fns';

const rowHeight = 10;
const smallHeight = 5;
const verySmallHeight = 2;
const colorAccent = "#3D85C6";
const colorDefault = "#444444";
const colorDarkGrey = "#666666";
const colorLightGrey = "#999999";
const fontType = 'Courier';

const createPDF = () =>{
    const doc = new jsPDF();

    let xPosition = 20;
    let yPosition = 20;
    let pageHeight = 280

    const updateHeight = (row) => {
        yPosition = yPosition + row;
        if(yPosition >= pageHeight){
            doc.addPage();
            yPosition = 20;
        }
    }

    return {
        addPersInfo : (personalInfo) => {

            // section name
            doc.setFont(fontType, 'bold');
            doc.setFontSize(18);
            doc.setTextColor(colorAccent);
            doc.setFont(fontType, 'bold');
            doc.text(xPosition, yPosition, `${personalInfo[0].firstName} ${personalInfo[0].lastName}`);
            updateHeight(smallHeight);

            // Telephone and Email
            doc.setTextColor(colorDarkGrey);
            doc.setFontSize(10);
            doc.text(xPosition, yPosition, `Telephone:`);
            doc.setFont(fontType, 'normal');
            doc.setTextColor(colorLightGrey);
            doc.text(xPosition + 22 , yPosition, `${personalInfo[0].telephone}`)
            updateHeight(smallHeight);
            doc.setFont(fontType, 'bold');
            doc.setTextColor(colorDarkGrey);
            doc.text(xPosition, yPosition, `Email:`);
            doc.setFont(fontType, 'normal');
            doc.setTextColor(colorLightGrey);
            doc.text(xPosition + 14 , yPosition, `${personalInfo[0].email}`);
            updateHeight(verySmallHeight);

            // line
            doc.setDrawColor(colorLightGrey);
            doc.line(xPosition, yPosition, 200, yPosition, 'FD');
            updateHeight(rowHeight);
            updateHeight(smallHeight);
        },
        addEducation : (educationInfo) => {

            // section education title
            doc.setFont(fontType, 'bold');
            doc.setTextColor(colorAccent);
            doc.setFontSize(14);
            doc.text(xPosition, yPosition,'Education and training');
            updateHeight(rowHeight);

            // section education content
            doc.setTextColor(colorDefault);
            doc.setFontSize(12);
            doc.setFont(fontType, 'normal');
            for (let i = 0; i < educationInfo.length; i++){

                // education title
                doc.setFont(fontType, 'bold');
                doc.setFontSize(12); 
                doc.text(xPosition, yPosition, `${educationInfo[i].titleAwarded}`);
                doc.setFont(fontType, 'normal');
                updateHeight(smallHeight);

                // organization education name
                doc.setFontSize(11);
                doc.text(xPosition, yPosition, `${educationInfo[i].nameOrganization}`);
                updateHeight(smallHeight);

                // education period
                doc.text(xPosition, yPosition, `${format(new Date (educationInfo[i].startDate), 'MMMM yyyy')} - ${format(new Date(educationInfo[i].endDate), 'MMMM yyyy')}`);
                updateHeight(rowHeight);
            }
            updateHeight(smallHeight);
        },
        addWorkExperience : (workExpInfo) => {

            // section work experience title
            doc.setFont(fontType, 'bold');
            doc.setTextColor(colorAccent);
            doc.setFontSize(14);
            doc.text(xPosition, yPosition,'Work experience');
            updateHeight(rowHeight);

            // work experience content
            doc.setTextColor(colorDefault);
            doc.setFontSize(12);
            doc.setFont(fontType, 'normal');
            for (let i = 0; i < workExpInfo.length; i++){

                // job title
                doc.setFont(fontType, 'bold');
                doc.setFontSize(12); 
                doc.text(xPosition, yPosition, `${workExpInfo[i].titleOcupation},`)
                updateHeight(smallHeight);

                // organization name
                doc.text(xPosition, yPosition, `${workExpInfo[i].nameOrganization}`)
                updateHeight(smallHeight); 

                // job period
                doc.text(xPosition, yPosition, `${format(new Date(workExpInfo[i].startDate), 'MMMM yyyy')} - ${format(new Date(workExpInfo[i].endDate), 'MMMM yyyy')}`);
                doc.setFont(fontType, 'normal');
                doc.setFontSize(11);
                updateHeight(smallHeight); 

                // job responsibilities
                let jobResponsibilities = workExpInfo[i].mainActivities.split('\n');
                for (let i = 0; i < jobResponsibilities.length; i++){
                    let numberOfRows = Math.floor(jobResponsibilities[i].length/74);
                    doc.text(`- ${jobResponsibilities[i]}`, xPosition + 10, yPosition, {maxWidth: 170}); 
                    if(numberOfRows > 0){
                        updateHeight(smallHeight * (numberOfRows + 1));
                    }else{
                      updateHeight(smallHeight);  
                    }
                }
                updateHeight(rowHeight);
            }  
        },
        savePDF : (title) =>{
            doc.save(title);
        }
    }
}

export default createPDF;
