var houses = new Object();
houses["Adams"] = "5-7:15pm <br /> Sun-W, 6-7pm. 1 interhouse guest with resident only. <br /> No interhouse on Thurs for community dinner.";
houses["Cabot"] = "5-7:30pm <br /> No interhouse on Thurs for community dinner.";
houses["Currier"] = "5-8pm <br /> None";
houses["Dunster"] = "5-7:15pm <br /> Sun-W, 6-7pm, 1 interhouse guest with dunster resident only; 7:15-8pm, Dunster residents and athlets in season. <br /> No interhouse on Thurs for community dinner; 7:15-8pm, Dunster residents and athletes in season";
houses["Eliot"] = "5-7:15pm <br /> M-W, 6-7:15pm, 1 interhouse guest with resident only. <br /> No interhouse on Thurs for community dinner.";
houses["Kirkland"] = "5-7:15pm <br /> M-W 6-7:15pm, 1 interhouse guest with resident only. <br /> No interhouse on Thurs for community dinner.";
houses["Leverett"] = "5-7:15pm <br />Sun-W, 5:30-7pm, 1 interhouse guest with resident only. <br /> No interhouse on Thurs for community dinner.";
houses["Lowell"] = "5-7:15pm <br />Sun-W, 6-7[m, 1 interhouse guest with resident only. <br /> No interhouse on Thurs for community dinner.";
houses["Mather"] = "5-7:15pm <br /> No interhouse on Thurs for community dinner.";
houses["Pforzheimer"] = "5-7:15pm No interhouse on Thurs for community dinner. ";
houses["Quincy"] = "5-7:15pm <br /> No interhouse on Thurs for community dinner. <br /> No first-year students.";
houses["Winthrop"] = "5-7:15pm <br /> Sa-Th, 5-7pm, Winthrop only; 1 interhouse guest with Wintrop resident only after 7pm. <br /> Fri, No interhouse restrictions; Freshmen only as invited guests.";

function format_tooltip(header, body)
{
    return "<b>" + header + "</b> <br />" + body;
}
var font_size = 72;