function CountDate (options){
    let FormElement = document.querySelector(options.SelectorForm)
    var StartdateElement = document.querySelector(options.SelectorStart)
    var EnddateElement = document.querySelector(options.SelectorEnd)
    let NotiElement = document.querySelector(options.SelectorNoti);
    function dayOfMonth (month,year){
        switch (month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
                break;
            case 2: 
                if(year%400==0 || year%4==0){
                    return 29;
                    break;
                }else{
                    return 28;
                    break;
                }
            default:
                return 30;
                break;
        }
    }
    function Maincountdate (valueStartdate,valueEnddate){
        let Startdate = {
            year: valueStartdate[0]*1,
            month: valueStartdate[1]*1,
            day: valueStartdate[2]*1,
        }
        let Enddate = {
            year: valueEnddate[0]*1,
            month: valueEnddate[1]*1,
            day: valueEnddate[2]*1,
        }
        let Numdate = 0;
        if(Startdate.year == Enddate.year){
            if(Startdate.month == Enddate.month ){
                Numdate = Enddate.day - Startdate.day
            }else{
                Numdate += dayOfMonth(Startdate.month,Startdate.year) - Startdate.day;
                for(let month = Startdate.month + 1 ; month < Enddate.month ; ++month ){
                    Numdate += dayOfMonth(month,Startdate.year)
                }
                Numdate += Enddate.day
            }
        }else{
            Numdate += dayOfMonth(Startdate.month,Startdate.year) - Startdate.day;
            for(let month = Startdate.month + 1 ; month <=12 ; ++month ){
                Numdate += dayOfMonth(month,Startdate.year)
            }
            for(let year = Startdate.year + 1 ; year < Enddate.year ; ++year ){
                for(let month = 1 ; month <=12 ; ++month ){
                    Numdate += dayOfMonth(month,year)
                }
            }
            for(let month = 1 ; month < Enddate.month ; ++ month ){
                Numdate += dayOfMonth ( month, Enddate.year)
            }
            Numdate += Enddate.day
        }
        return Numdate
    }
    FormElement.onsubmit = function (e) {
        e.preventDefault();
        var valueStartdate = StartdateElement.value.split('-')
        var valueEnddate = EnddateElement.value.split('-')
        let Numdate = Maincountdate(valueStartdate,valueEnddate)
        NotiElement.innerText = Numdate
    }
}




























