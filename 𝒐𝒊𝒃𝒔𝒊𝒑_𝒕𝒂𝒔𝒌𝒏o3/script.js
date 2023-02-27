var ul=document.getElementById("list")
var li



var addButton = document.getElementById("add")
addButton.addEventListener("click",addItem)

var removeButton = document.getElementById("remove")
removeButton.addEventListener("click",removeItem)



function addItem()
{
	
	var input=document.getElementById("input")
	var item = input.value;
	ul = document.getElementById("list")
	var textnode = document.createTextNode(item)

	if(item === " ")
	{	
		alert("Add a TODO")
		
	}
	else
	{	
		li = document.createElement("li")
		
		
		var checkbox = document.createElement("input")
		checkbox.type = "checkbox"
		checkbox.setAttribute("id","check")

		
		var label = document.createElement("label")
		label.setAttribute("for","item")

		
		ul.appendChild(label)
		li.appendChild(checkbox)
		label.appendChild(textnode)
		li.appendChild(label)
		ul.insertBefore(li,ul.childNodes[0])

		
		setTimeout(() => {
			li.className="visual";
		
		},5);
		
		
		input.value=" "
 	}
}

function removeItem()
{
	
	li=ul.children
	for(i=0;i<li.length;i++)
	{
	
		while(li[i] && li[i].children[0].checked)
		{
			ul.removeChild(li[i])
		}
	}
}