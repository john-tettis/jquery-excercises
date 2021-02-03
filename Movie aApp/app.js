$('#add').on('click',()=>{
    let input = $('input')
    if(input[0].value===''||input[1].value===''){
        alert('please fill in the form!')
    }
    else{
        $('table').append($(`<tr>
        <td>${input[0].value}</td>
        <td>${input[1].value}</td>
        <td><button class="delete">X</button></td>
    </tr>`))
    input.val('');
    $('.delete').on('click',function(){
        console.log('delete');
    $(this).parent().parent().remove();
    })
    }
   
})
