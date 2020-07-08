$(document).ready(function () {
    // Populate the dropdown
    var optionItems;
    Object.keys(data).forEach((key) => {
        optionItems += `<option value=${key}>${data[key]["location"]}</option>`;
    });
    $("#selLocation").html(optionItems);

    // Initial plot with World data
    var defaultSel = 'OWID_WRL';
    $('select#selLocation').val(defaultSel);
    drawPlots([defaultSel]);

    // Redraw plot with selected countries
    $('#selLocation').change(function () {
        selected = $('select#selLocation').val();
        console.log(`Options Selected: ${selected}`);
        drawPlots(selected);
    });
});