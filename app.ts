let guest_list: string[] = ['Babar','Saim' ,'Rizwan', 'Shaheen Afridi',];
for(let i=0; i<guest_list.length;i++){
    console.log('Respected sir'+ guest_list[i] +' ,\n we invited you on dinner tomorrow.\n Thankyou\n')
}
let not_present: string = 'Riwzan';
let new_guest: string = 'Hania Amir';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir/madam' + guest_list[i] + ',\n We invited you on dinner tomorrow.\n Thankyou\n')
}
console.log(`Mr. ${not_present} will not coming to dinner tomorrow.`);
guest_list.unshift('Mahira khan' , 'Kinza', 'maya');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir/madam ' + guest_list[i] + ',\n We invited you on dinner tomorrow,Because we have a bigger table now.\n Thankyou\n')
}