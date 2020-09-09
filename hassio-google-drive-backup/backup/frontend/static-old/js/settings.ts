// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'all_folder_slugs'.
all_folder_slugs = ['ssl', "addons/local", "homeassistant", "share"];
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'settingsChanged'.
settingsChanged = false;
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'name_keys'.
name_keys = {}
function idToSlug(id: any) {
  if (id == "folder_addons") {
    return "addons/local";
  } else if (id == "folder_homeassistant") {
    return "homeassistant";
  } else if (id == 'folder_share') {
    return "share";
  } else if (id == "folder_ssl") {
    return "ssl";
  } else {
    return id;
  }
}

function exampleSnapshotName(snapshot_type: any, template: any) {
  if (template.length == 0) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'last_data'.
    template = last_data.snapshot_name_template;
  }
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'key'.
  for (key in name_keys) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'key'.
    template = template.replace(key, name_keys[key]);
  }
  return template;
}

function showPallette(element: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  let target = $(element);
  target.colpick({
    'layout': 'rgbhex',
    'color': target.html(),
    'onSubmit': colorSubmit,
    'onChange': function(hsb: any,hex: any,rgb: any,el: any,bySetColor: any){
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'settingsChanged'.
      settingsChanged = true;
      let color = new Color(rgb['r'], rgb['g'], rgb['b']);
      updateColorSelector(target, color);
      setStyles();
    }
  });
}

function updateColorSelector(target: any, color: any) {
  target.html(color.toHex());
  target.css("background-color", color.toCss());
  target.css("color", color.textColor().toCss());
  target.css("border", "2px");
  target.css("border-color", color.textColor().toCss());
  target.css("border-style", 'solid');
}

function colorSubmit(hsb: any,hex: any,rgb: any,el: any,bySetColor: any){
  setStyles();
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $(el).colpickHide();
}

function setStyles() {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
  background = Color.parse($("#background_color").html());
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'accent'.
  accent = Color.parse($("#accent_color").html());
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
  window.setColors(background, accent);
}

function revertColors() {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
  background = Color.parse(defaults.background_color);
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  updateColorSelector($("#background_color"), background);
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'accent'.
  accent = Color.parse(defaults.accent_color);
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  updateColorSelector($("#accent_color"), accent);

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
  window.setColors(background, accent);
}

function snapshotNameExample() {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#snapshot_example").html(exampleSnapshotName("Full", $("#snapshot_name").val()));
}

function snapshotNameOneOffExample() {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#snapshot_name_example_one_off").html(exampleSnapshotName("Full", $("#snapshot_name_one_off").val()));
}

function checkForSecret() {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var password = $("#snapshot_password");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var password2 = $("#snapshot_password_reenter");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var block = $("#password_renter_block");
  var new_password = password.val();
  var old_password = password.data('old_password');
  if (password.val().startsWith("!secret ")) {
    password.attr('type', 'text');
    block.fadeOut();
    return true;
  } else {
    password.attr('type', 'password');
    if (new_password.length > 0 && old_password != new_password) {
      block.fadeIn();
      if (new_password == password2.val()) {
        password2.removeClass("invalid");
        return true;
      } else {
        password2.addClass("invalid");
        return false;
      }
    } else {
      block.fadeOut();
      return true;
    }
  }
}

function slugToId(id: any) {
  if (id == "addons/local") {
    return "folder_addons";
  } else if (id == "homeassistant") {
    return "folder_homeassistant";
  } else if (id == 'share') {
    return "folder_share";
  } else if (id == "ssl") {
    return "folder_ssl";
  } else {
    return id;
  }
}


// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
$(document).ready(function () {
  // handle "escape" when settings dialog is presented
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $(document).keyup(function (e: any) {
    if (e.keyCode === 27) { // 27==escape
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
      if (M.Modal.getInstance(document.querySelector('#settings_modal')).isOpen) {
        handleCloseSettings();
      }
    }
  });

  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var settingsDialog = $("#settings_modal");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $('#settings_modal :input').change(function () {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'settingsChanged'.
    settingsChanged = true;
  });
});

function handleCloseSettings() {
  // determine is the settings hanve changed.
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'settingsChanged'.
  if (settingsChanged) {
    if (confirm("Discard changes?")) {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
      background = Color.parse(config.background_color);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'accent'.
      accent = Color.parse(config.accent_color);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
      window.setColors(background, accent);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
      M.Modal.getInstance(document.getElementById("settings_modal")).close();
    }
  } else {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
    background = Color.parse(config.background_color);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'accent'.
    accent = Color.parse(config.accent_color);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
    window.setColors(background, accent);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
    M.Modal.getInstance(document.getElementById("settings_modal")).close();
  }
}


function loadSettings() {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"Loading settings..."' is not as... Remove this comment to see the full error message
  postJson("getconfig", {}, handleSettingsDialog, null, "Loading settings...")
}

function handleSettingsDialog(data: any) {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config_data'.
  config_data = data
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'name_keys'.
  name_keys = data.name_keys;
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
  config = data.config;
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addons'.
  addons = data.addons;
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'defaults'.
  defaults = data.defaults
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'key'.
  for (key in config) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
    if (config.hasOwnProperty(key)) {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'key'.
      setInputValue(key, config[key]);
    }
  }

  setInputValue("generational_enabled",
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
    config.generational_days > 0 || config.generational_weeks > 0 || config.generational_months > 0 || config.generational_years > 0);

  // Set the state of excluded folders.
  var excluded_folders = [];
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
  if (config.hasOwnProperty('exclude_folders') && config.exclude_folders.length > 0) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
    excluded_folders = config.exclude_folders.split(",");
  }
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'all_folder_slugs'.
  for (var i = 0; i < all_folder_slugs.length; i++) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'all_folder_slugs'.
    setInputValue(slugToId(all_folder_slugs[i]), !excluded_folders.includes(all_folder_slugs[i]));
  }

  var exclude_addons = [];
  var stop_addons = []
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
  if (config.hasOwnProperty('exclude_addons') && config.exclude_addons.length > 0) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
    exclude_addons = config.exclude_addons.split(",");
  }
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
  if (config.hasOwnProperty('stop_addons') && config.stop_addons.length > 0) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
    stop_addons = config.stop_addons.split(",");
  }

  setInputValue("partial_snapshots", excluded_folders.length > 0 || exclude_addons.length > 0);
  setInputValue("stop_addons", stop_addons.length > 0);

  // Set the state of excluded and stopped addons.
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#settings_addons").html("");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#stopped_addons").html("");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
  for (addon in addons) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
    addon = addons[addon];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'template'.
    template = `<li class="indented-li">
                    <label>
                      <input class="filled-in {selector}" type="checkbox" name="{id}" id="{id}" settings_ignore='true' {checked} />
                      <span>{name} <span class="helper-text">(v{version})</span></span>
                      <br />
                      <span class="helper-text">{description}</span>
                    </label>
                  </li>`;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'template'.
    template = template
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
      .replace("{id}", slugToId(addon.slug))
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
      .replace("{id}", slugToId(addon.slug))
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
      .replace("{description}", addon.description)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
      .replace("{name}", addon.name)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
      .replace("{version}", addon.installed);

    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#settings_addons").append(template.replace("{checked}", exclude_addons.includes(addon.slug) ? "" : "checked").replace("{selector}", "settings_addon_checkbox"));
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#stopped_addons").append(template.replace("{checked}", stop_addons.includes(addon.slug) ? "checked" : "").replace("{selector}", "settings_stop_addon_checkbox"));
  }

  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#settings_error_div").hide();
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
  M.updateTextFields();
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#use_ssl").trigger("change");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#generational_enabled").trigger("change");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#partial_snapshots").trigger("change");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#expose_extra_server").trigger("change");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'settingsChanged'.
  settingsChanged = false;
  snapshotNameExample();

  // Configure the visibility/link of the "current snapshot folder" help text and button.
  if (data.snapshot_folder && data.snapshot_folder.length > 0) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#current_folder_span").show()
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#current_folder_link').attr("href", "https://drive.google.com/drive/u/0/folders/" + data.snapshot_folder);
  } else {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#current_folder_span").hide();
  }

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
  if (config.specify_snapshot_folder && last_data && last_data.drive_enabled) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#choose_folder_controls").show();
  } else {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#choose_folder_controls").hide();
  }

  setInputValue("settings_specify_folder_id", data.snapshot_folder);

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'config'.
  if (config.hasOwnProperty("snapshot_password")) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#snapshot_password").data("old_password", config.snapshot_password);
  } else {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#snapshot_password").data("old_password", "");
  }
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#snapshot_password_reenter").val("");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  updateColorSelector($("#background_color"), Color.parse(config.background_color));
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  updateColorSelector($("#accent_color"), Color.parse(config.accent_color));
  checkForSecret();
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
  M.Modal.getInstance(document.querySelector('#settings_modal')).open();
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  showPallette($("#background_color"));
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  showPallette($("#accent_color"));
}

function chooseFolderChanged() {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  if ($("#specify_snapshot_folder").is(':checked') && (config.specify_snapshot_folder || config_data.is_custom_creds) && last_data && last_data.drive_enabled) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#choose_folder_controls").show();
  } else {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#choose_folder_controls").hide();
  }
}

function saveSettings() {
  // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
  if (!document.getElementById('settings_form').checkValidity()) {
    showSettingError({message: "Some configuration is invalid, check for red errors up above."})
    return;
  }

  if (!checkForSecret()) {
    showSettingError({message: "New snapshots passwords don't match"})
    return;
  }
  toast("Saving...")
  var config = {}
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("select", $("#settings_form")).each(function () {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    var target = $(this)
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    config[target.attr("id")] = target.val();
  });
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("input", $("#settings_form")).each(function () {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    var target = $(this)
    if (target.attr("settings_ignore") == "true") {
      return;
    }
    var value = target.val()
    if (target.attr("type") == "checkbox") {
      value = target.prop('checked')
    } else {
      if (value.length == 0) {
        return;
      } else if (target.attr("type") == "number") {
        value = parseInt(value)
      }
    }
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    config[target.attr("id")] = value;
  });
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'excluded_addons'.
  excluded_addons = ""
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'excluded_folders'.
  excluded_folders = ""
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'stop_addons'.
  stop_addons = ""
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  if ($("#partial_snapshots").prop('checked')) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $(".settings_folder_checkbox").each(function () {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      if (!$(this).is(":checked")) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'excluded_folders'.
        excluded_folders = excluded_folders + idToSlug($(this).attr('id')) + ",";
      }
    });
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $(".settings_addon_checkbox").each(function () {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      if (!$(this).is(":checked")) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'excluded_addons'.
        excluded_addons = excluded_addons + idToSlug($(this).attr('id')) + ",";
      }
    });
  }
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  if ($("#stop_addons").prop('checked')) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $(".settings_stop_addon_checkbox").each(function () {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      if ($(this).is(":checked")) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'stop_addons'.
        stop_addons = stop_addons + idToSlug($(this).attr('id')) + ",";
      }
    });
  }
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'exclude_folders' does not exist on type ... Remove this comment to see the full error message
  config.exclude_folders = excluded_folders.replace(/(^,)|(,$)/g, "");
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'exclude_addons' does not exist on type '... Remove this comment to see the full error message
  config.exclude_addons = excluded_addons.replace(/(^,)|(,$)/g, "");
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'stop_addons' does not exist on type '{}'... Remove this comment to see the full error message
  config.stop_addons = stop_addons.replace(/(^,)|(,$)/g, "");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  if (!$("#generational_enabled").prop('checked')) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'generational_delete'.
    generational_delete = ["generational_days", "generational_weeks", "generational_months", "generational_years"] 
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'prop'.
    for (prop in generational_delete) {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'generational_delete'.
      if (config.hasOwnProperty(generational_delete[prop])) {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        delete config[generational_delete[prop]];
      }
    }
  }
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'background_color' does not exist on type... Remove this comment to see the full error message
  config.background_color = $("#background_color").html();
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'accent_color' does not exist on type '{}... Remove this comment to see the full error message
  config.accent_color = $("#accent_color").html();

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'modal'.
  modal = M.Modal.getInstance(document.getElementById("settings_modal"))
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  postJson("saveconfig", {"config": config, "snapshot_folder": $("#settings_specify_folder_id").val()}, closeSettings, showSettingError); 
}

function closeSettings(){
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
  M.Modal.getInstance(document.getElementById("settings_modal")).close()
}

function showSettingError(e: any){
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var element = $("#settings_error");
  element.html(e.message);
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#settings_error_div").fadeIn(400);
}
