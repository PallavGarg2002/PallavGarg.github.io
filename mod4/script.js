var names=new Array();
names[0]="Yaakov";
names[1]="Junaid";
names[2]="jen";
names[3]="jameson";
names[4]="palak";
names[5]="frank";
names[6]="larry";
names[7]="jerry";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}