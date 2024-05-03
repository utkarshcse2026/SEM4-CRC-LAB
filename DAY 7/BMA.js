
        let weight=prompt("enter your weight")
        let height=prompt("enter your height")
        bmi=weight/(height*height);
        if(bmi<18.5) alert ("underweight");
        if(bmi<24.9) alert("normal weight");
        if (bmi<29.9) alert ("overweight");
        else alert ("obese");
  