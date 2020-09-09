function restoreSnapshot(target: any) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    var data = $(target).data('snapshot').details;
    var slug = data.slug;
    var name = data.name;
    // @ts-expect-error ts-migrate(1212) FIXME: Identifier expected. 'protected' is a reserved wor... Remove this comment to see the full error message
    var protected = $(target).data('snapshot').protected;
    // @ts-expect-error ts-migrate(1212) FIXME: Identifier expected. 'protected' is a reserved wor... Remove this comment to see the full error message
    if (protected) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#restore_password_div").show();
    } else {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#restore_password_div").hide();
    }
    // @ts-expect-error ts-migrate(1212) FIXME: Identifier expected. 'protected' is a reserved wor... Remove this comment to see the full error message
    $("#do_restore_button").attr("onClick", "doRestore('" + slug + "', '" + name + "', " + protected + ")");
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#restore_homeassistant_version").html("(" + data.homeassistant + ")")
     // Set the state of excluded addons.
     // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
     $("#restore_addons").html("");
     // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
     for (addon in data.addons) {
       // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
       addon = data.addons[addon];
       // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'template'.
       template = `<li class="indented-li">
                     <label>
                       <input class="restore_addon_checkbox" type="checkbox" name="{id}" id="{id}" class="filled-in" checked />
                       <span>{name} <span class="helper-text">(v{version})</span></span>
                       <br />
                     </label>
                   </li>`;
       // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'template'.
       template = template
         // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
         .replace("{id}", slugToId(addon.slug))
         // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
         .replace("{id}", slugToId(addon.slug))
         // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
         .replace("{name}", addon.name)
         // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
         .replace("{version}", addon.version);
       // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
       $("#restore_addons").append(template);
     }
  }
  
  // @ts-expect-error ts-migrate(1212) FIXME: Identifier expected. 'protected' is a reserved wor... Remove this comment to see the full error message
  function doRestore(slug: any, name: any, protected: any) {
    var password = ""
    // @ts-expect-error ts-migrate(1212) FIXME: Identifier expected. 'protected' is a reserved wor... Remove this comment to see the full error message
    if (protected) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      password = $("#restore_password").val();
      if (password.length == 0) {
        return;
      }
    }
    toast("Restoring '" + name + "'");
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'url'.
    url = "restore?slug=" + encodeURIComponent(slug);
    if (password.length > 0) {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'url'.
      url = url + "&password=" + encodeURIComponent(password)
    }
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'message'.
    message = "Restoring '" + name + "'";
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'url'.
    postJson(url, {}, refreshstats, null, message);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
    M.Modal.getInstance(document.getElementById("restoremodal")).close();
  }