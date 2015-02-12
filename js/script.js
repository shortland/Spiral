/*
* Ilan Kleiman
* February 10th 2015
* Spiral - script.js
* http://ilankleiman.com
*/

$(document).ready(function()
{

	function rand_color()
	{
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '';
	    for (var i = 0; i < 6; i++ )
	    {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

	function animation(num)
	{
		if(num == 1000)
		{
			return false;
		}
		var numq = $(window).height() - parseInt(num);
		//var numq = num;
		var numz = num;
		var r_bg = rand_color();
		var r_br = rand_color();

		var fixed_i = parseInt(numq) + 25;
		if(fixed_i < 1)
		{
			return false;
		}
		var fixed_i2 = parseInt(fixed_i) / 2;

		var f_top = (numq / 2) - 20;
		$('#e_' + num).animate(
			{
				'width' : fixed_i + 'px',
				'height' : fixed_i + 'px',
				'background-color' : '#' + r_bg,
				'border-radius' : fixed_i2 + 'px',
				'top' : '-=' + f_top + 'px',
				'left' : '-=' + f_top + 'px',
				'border-color' : '#' + r_br,
				'z-index' : numz
			},
			50,
			function()
			{
				var ennum = parseInt(num) + 1;
				animation(ennum);
			}
		);
	}

	for (i = 0; i < 1000; i++)
	{
		$('#writer').append("<div class='spiral' id='e_" + i + "'></div>");
		if(i == 999)
		{
			animation('0');
		}
	}

});
