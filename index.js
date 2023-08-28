$(document).on('click', '.edit', function() {  
    $(this).parent().siblings('td.data').each(function() {  
      var content = $(this).html();  
      $(this).html('<input value="' + content + '" />');  
    });  
    $(this).siblings('.save').show();  
    $(this).siblings('.delete').hide();  
    $(this).hide();  
  });  
  $(document).on('click', '.save', function() {  
    $('input').each(function() {  
      var content = $(this).val();  
      $(this).html(content);  
      $(this).contents().unwrap();  
    });  
    $(this).siblings('.edit').show();  
    $(this).siblings('.delete').show();  
    $(this).hide();  
  });  
  $(document).on('click', '.delete', function() {  
    $(this).parents('tr').remove();  
  });  
  $('.add').click(function() {  
    $(this).parents('table').append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="save">Save</button><button class="edit">Edit</button> <button class="delete">Delete</button></td></tr>');  
  });