    var now = new Date();
    var date = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();
    $("#date").text(date);

    function set_content_in_divs(paragraphs) {
        $.each(paragraphs, function (i, d) {
            p = $("#p-" + i)
            p.html("<p>" + d + "</p>")
        })
    }

    function get_data_from_JSON(){
        $.getJSON("http://sf-pyw.mosyag.in/m04/api/forecasts", function (data) { set_content_in_divs(data['prophecies']) });
    }
    
    $("#click_me").click(get_data_from_JSON)
    get_data_from_JSON()
