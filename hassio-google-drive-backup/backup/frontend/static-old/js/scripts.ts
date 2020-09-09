
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tooltipBackedUp'.
tooltipBackedUp = "This snapshot has been backed up to Google Drive."
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tooltipDriveOnly'.
tooltipDriveOnly = "This snapshot is only in Google Drive. Select \"Upload\" from the actions menu to Upload it to Home Assistant."
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tooltipHassio'.
tooltipHassio = "This snapshot is only in Home Assistant. Change the number of snapshots you keep in Drive to get it to upload."
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tooltipWaiting'.
tooltipWaiting = "This snapshot is waiting to upload to Google Drive."
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tooltipLoading'.
tooltipLoading = "This snapshot is being downloaded from Google Drive to Home Assistant.  Soon it will be available to restore."
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tooltipPending'.
tooltipPending = "This snapshot is being created.  If it takes a long time, see the addon's FAQ on GitHub"
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tooltipUploading'.
tooltipUploading = "This snapshot is being uploaded to Google Drive."

var github_bug_desc = `
Please add some information about your configuration and the problem you ran into here. 
More info really helps speed up debugging, if you don't even read this and help me understand what happened, I probably won't help you.  
Remember that its just one guy back here doing all of this.  
If english isn't your first language, don't sweat it.  Just try to be clear and I'll do the same for you.  Some things you might consider including:
 * What were you doing when the problem happened?
 * A screenshot if its something visual.
 * What configuration options are you using with the add-on?
 * What logs is the add-on printing out?  You can see the detailed logs by clicking "Logs" at the right of the web-UI.
 * Are there any problematic looking logs from the supervisor?  You can get to them from the Home Assistant Interface from "Supervisor" > "System" > "System Log"
 \n\n`;

function toggleSlide(checkbox: any, target: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  if ($(checkbox).is(':checked')) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#' + target).slideDown(400);
  } else {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#' + target).slideUp(400);
  }
}

function toggleLinkSlide(checkbox: any, target: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  target = $('#' + target);
  if (target.is(":visible")) {
    target.slideUp(400);
  } else {
    target.slideDown(400);
  }
}

function restoreClick(target: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $('#restore_help_card').fadeIn(500);
  //window.top.location.replace($(target).data('url'))
}

function setInputValue(id: any, value: any) {
  if (value == null) {
    // Leave at default
    return;
  }
  if (typeof (value) == 'boolean') {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#' + id).prop('checked', value);
  } else {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#' + id).val(value);
  }
}

function test(target: any) {
  console.log(target);
}

function downloadSnapshot(target: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  window.location.assign('download?slug=' + encodeURIComponent($(target).data('snapshot').slug));
}

function uploadSnapshot(target: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var slug = $(target).data('snapshot').slug;
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var name = $(target).data('snapshot').name;
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#do_upload_button").attr("onClick", "doUpload('" + slug + "', '" + name + "')");
}

function doUpload(slug: any, name: any) {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'message'.
  message = "Uploading '" + name + "'";
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'url'.
  url = "upload?slug=" + encodeURIComponent(slug);
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'url'.
  postJson(url, {}, refreshstats, null, message);
}

function retainSnapshot(target: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var slug = $(target).data('snapshot').slug;

  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  setInputValue("retain_drive", $(target).data('snapshot').driveRetain);
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  setInputValue("retain_ha", $(target).data('snapshot').haRetain);
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#do_retain_button").attr("onClick", "doRetain('" + slug + "')");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
  M.Modal.getInstance(document.querySelector('#retainmodal')).open();
}

function doRetain(slug: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var drive = $("#retain_drive").prop('checked');
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var ha = $("#retain_ha").prop('checked');
  var url = "retain?slug=" + encodeURIComponent(slug) + "&drive=" + drive + "&ha=" + ha;
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"Updating snapshot... "' is not ... Remove this comment to see the full error message
  postJson(url, {}, refreshstats, null, "Updating snapshot... ");
}

function showDetails(target: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var snapshot = $(target).data('snapshot');
  var details = snapshot.details;
  console.log(details)
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#details_name").html(snapshot.name);
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#details_date").html(snapshot.date);
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#details_type").html(snapshot.type);
  if (snapshot.protected) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#details_password").html("yes");
  } else {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#details_password").html("no");
  }
  if (details) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#details_ha_version").html(details.homeassistant);
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#details_folders").html("")
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'folder'.
    for (folder in details.folders) {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'folder'.
      folder = details.folders[folder];
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'folder'.
      if (folder == "share") {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'folder'.
        folder = "Share";
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'folder'.
      } else if (folder == "ssl") {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'folder'.
        folder = "SSL";
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'folder'.
      } else if (folder == "addons/local") {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'folder'.
        folder = "Local add-ons";
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'folder'.
      } else if (folder == "homeassistant") {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'folder'.
        folder = "Home Assistant Configuration"
      }
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#details_folders").append("<li>" + folder + "</li>");
    }

    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#details_addons").html("")
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
    for (addon in details.addons) {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'addon'.
      addon = details.addons[addon];
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#details_addons").append("<li>" + addon.name + " <span class='grey-text text-darken-2'>(v" + addon.version + ") " + addon.size + "MB</span></li>")
    }
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#details_folders_and_addons").show();
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#details_upload_reminder").hide();
  } else {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#details_ha_version").html("?");
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#details_folders_and_addons").hide();
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#details_upload_reminder").show();
  }

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
  M.Modal.getInstance(document.querySelector('#details_modal')).open();
}

function errorReports(send: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var jqxhr = $.get("errorreports?send=" + send)
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $('#error_reports_card').fadeOut(500)
}
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'hideIngress'.
hideIngress = false;
function exposeServer(expose: any) {
  var url = "exposeserver?expose=" + expose;
  postJson(url, {}, function (data: any) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#ingress_upgrade_card').fadeOut(500);
    if (expose == "true") {
      refreshstats();
    } else {
      if (data.hasOwnProperty("redirect")) {
        // Reqirect to the url
        window.location.assign(data.redirect.replace("{host}", window.location.hostname))
      }
    }
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"Saving setting..."' is not assi... Remove this comment to see the full error message
  }, null, "Saving setting...");
}

function resolvefolder(use_existing: any) {
  var url = "resolvefolder?use_existing=" + use_existing;
  postJson(url, {}, refreshstats, null, null);
  setErrorWatermark();
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $('#existing_backup_folder').hide();
  refreshstats();
}

function sync(dialog_class: any) {
  postJsonCloseErrorDialog("startSync", dialog_class);
}

function postJsonCloseErrorDialog(url: any, dialog_class: any) {
  postJson(url, {},
    function (data: any) {
      if (dialog_class) {
        // Hide the error dialog
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("." + dialog_class).hide();
        setErrorWatermark();
      }
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
      refreshstats(data);
    }, null)
}

function toast(text: any) {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
  M.toast({ html: text });
}

// Triggers showing a modal confirmation dialog to delete a snapshot
function confirmDeleteSnapshot(target: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var snapshot = $(target).data('snapshot');
  var slug = snapshot['slug'];
  var inDrive = snapshot['inDrive'];
  var inHA = snapshot['inHA'];
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#delete_drive").attr("onClick", "deleteSnapshot('" + slug + "'," + inDrive + ",false)");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#delete_ha").attr("onClick", "deleteSnapshot('" + slug + "',false," + inHA + ")");
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#delete_both").attr("onClick", "deleteSnapshot('" + slug + "'," + inDrive + "," + inHA + ")");
  if (inDrive && inHA) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_text").text("Are you sure you want to delete this snapshot?  You can delete it in Drive, Home assistant, or both.");
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_drive").show();
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_ha").show();
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_both").show();
  } else if (inDrive && !inHA) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_text").text("Are you sure you want to delete this snapshot from Google Drive?  It isn't stored in Home Assistant, so it will be gone forever.");
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_drive").show();
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_ha").hide();
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_both").hide();
  } else if (!inDrive && inHA) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_text").text("Are you sure you want to delete this snapshot?  It isn't backed up, so it will be gone forever.");
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_drive").hide();
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_ha").show();
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#delete_both").hide();
  }
}

function deleteSnapshot(slug: any, drive: any, ha: any) {
  //console.log("Delete: " + slug + " Drive: " + drive + " HA: " + ha)
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'message'.
  message = "Deleting snapshot from ";
  if (drive && ha) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'message'.
    message += "Home Assistant and Google Drive"
  } else if (drive) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'message'.
    message += "Google Drive"
  } else if (ha) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'message'.
    message += "Home Assistant"
  } else {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'message'.
    message += "<i>...nowhere?</i>"
  }
  // Send the delete request
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'url'.
  url = "deleteSnapshot?slug=" + slug + "&drive=" + drive + "&ha=" + ha;
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'url'.
  postJson(url, {}, refreshstats, null, message);
}

function htmlEntities(str: any) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace("'", "&#39;");
}

function postJson(path: any, json: any, onSuccess: any, onFail = null, toastWhile = null) {
  var notification: any = null
  var returned = false
  if (toastWhile) {
    setTimeout(function () {
      if (!returned) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
        notification = M.toast({ html: toastWhile, displayLength: 99999999 });
      }
    }, 1000);
  }
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $.post({
    url: path,
    data: JSON.stringify(json),
    success: function (data: any) {
      returned = true;
      if (notification != null) {
        notification.dismiss();
      }
      if (data.hasOwnProperty("message")) {
        toast(data.message);
      }
      if (onSuccess) {
        onSuccess(data);
      }
    },
    dataType: "json",
    contentType: 'application/json'
  }).fail(
    function (e: any) {
      returned = true;
      if (notification != null) {
        notification.dismiss();
      }
      var info = parseErrorInfo(e);
      if (onFail) {
        // @ts-expect-error ts-migrate(2721) FIXME: Cannot invoke an object which is possibly 'null'.
        onFail(info);
      } else {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'button_text'.
        button_text = "&nbsp;&nbsp;<a class='waves-effect waves-light btn' target='_blank' onClick=\"$('#error_details_card').fadeIn(400);return false;\">Details</a>"
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $('#error_details_paragraph').text(info.details);

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
        M.toast({ html: info.message + button_text, displayLength: 10000 });
      }
    }
  )
}


function parseErrorInfo(e: any) {
  if (e.hasOwnProperty("message") && e.hasOwnProperty("details")) {
    return {
      message: e.message,
      details: e.details
    }
  }

  if (e.hasOwnProperty("responseText")) {
    try {
      return JSON.parse(e.responseText)
    } catch (err) {
      // Try something else
    }
  }

  if (e.hasOwnProperty("status") && e.hasOwnProperty("statusText") && e.hasOwnProperty("responseText")) {
    // Its an HTTP error, so format appropriately
    return {
      message: "Got unexpected HTTP error " + e.status + ": " + e.statusText,
      details: e.responseText
    }
  }
  return {
    message: "Got an unexpected error",
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error'.
    details: JSON.stringify(error, undefined, 2)
  }
}

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'last_cred_version'.
last_cred_version = -1;
function reloadForNewCreds() {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var jqxhr = $.get("getstatus", function (data: any) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'last_data'.
    last_data = data;
    if (data.is_custom_creds) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".hide-for-custom-creds").hide();
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".hide-for-default-creds").show();
    } else {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".hide-for-custom-creds").show();
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".hide-for-default-creds").hide();
    }

    if (data.is_specify_folder) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#flavor_auto_folder").hide();
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#flavor_specific_folder").show();
    } else {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#flavor_auto_folder").show();
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#flavor_specific_folder").hide();
    }

    if (data.hasOwnProperty("cred_version")) {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'last_cred_version'.
      if (last_cred_version == -1) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'last_cred_version'.
        last_cred_version = data.cred_version;
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'last_cred_version'.
      } else if (last_cred_version != data.cred_version) {
        //reload
        window.location.assign(getWindowRootUri())
      } else {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'last_cred_version'.
        last_cred_version = data.cred_version;
      }
    }
    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    document.getElementById("authenticate-button").href = data.authenticate_url + "?redirectbacktoken=" + encodeURIComponent(getWindowRootUri() + "token");

    if (!data.firstSync) {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshots'.
      snapshots = data.sources.HomeAssistant.snapshots;
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'hasSnapshots'.
      hasSnapshots = snapshots > 0;
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'maxConfigured'.
      maxConfigured = data.maxSnapshotsInHasssio
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'toDelete'.
      toDelete = Math.max(0, hasSnapshots - data.maxSnapshotsInHasssio);
      if (data.maxSnapshotsInHasssio == 0) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'toDelete'.
        toDelete = 0;
      }
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'willSnapshot'.
      willSnapshot = data.next_snapshot != "Disabled";
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'willUpload'.
      willUpload = data.maxSnapshotsInDrive > 0;
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'toUpload'.
      toUpload = Math.min(data.maxSnapshotsInDrive, snapshots - toDelete);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
      text = "";
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'hasSnapshots'.
      if (!hasSnapshots && !willSnapshot) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
        text = "You have no snapshots in Home Assistant and you've configured this add-on not to create any."
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'hasSnapshots'.
      } else if (hasSnapshots && toDelete > 0) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
        text = "You have <b>" + snapshots + " snapshot(s)</b> in Home Assistant already. Once you authenticate with Google Drive the <b>" + toDelete + " oldest snapshots(s) will be deleted</b>";
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'toUpload'.
        if (toUpload > 0) {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
          text += " and the <b>" + toUpload + " newest snapshot(s) will get backed up</b>."
        } else {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
          text += "."
        }
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'hasSnapshots'.
      } else if (hasSnapshots && toUpload > 0) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
        text = "You have <b>" + snapshots + " snapshot(s)</b> in Home Assistant already. Once you authenticate with Google Drive the <b>" + toUpload + " newest snapshot(s) will get backed up</b>."
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'hasSnapshots'.
      } else if (!hasSnapshots) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
        text = "You have <b>no snapshots in Home Assistant</b>";
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'willUpload'.
        if (willUpload) {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
          text += ", authenticate with Google Drive to start automatically creating and backing them up."
        } else {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
          text += ", authenticate with Google Drive to start automatically creating them."
        }
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'willSnapshot'.
      } else if (willSnapshot) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
        text = "You have <b>" + snapshots + " snapshot(s)</b> in Home Assistant already, Authenticate with Google Drive to start creating new ones on a schedule."
      } else {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'text'.
        text = "You have <b>" + snapshots + " snapshot(s)</b> in Home Assistant already but you haven't configured this add-on to do anything with them or create new ones."
      }
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#what_do_next_now_please_text").html(text);
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#what_do_next_now_please").show();
    }
  })
}

function getWindowRootUri() {
  var loc = window.location;
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
  path = loc.pathname.replace("\\", "/");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
  path = path.replace("/reauthenticate", "/");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
  path = path.replace("/reauthenticate/", "/");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
  path = path.replace("/index.html", "/");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
  path = path + "/";
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
  path = path.replace("//", "/");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
  return loc.protocol + "//" + loc.hostname + ":" + loc.port + path;
}

function cancelSync() {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"Canceling..."' is not assignabl... Remove this comment to see the full error message
  postJson("cancelSync", {}, refreshstats, null, "Canceling...")
}

function setErrorWatermark() {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error_minimum'.
  error_minimum = last_data.last_error_count
}

function bugReport() {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"Generating Bug Info..."' is not... Remove this comment to see the full error message
  postJson("makeanissue", {}, openBugDialog, null, "Generating Bug Info...")
}

function openBugDialog(resp: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#bug_markdown_display").val(resp.markdown);
  renderMarkdown();
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tabs'.
  tabs = M.Tabs.getInstance(document.querySelector("#bug_report_tabs"));
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
  M.Modal.getInstance(document.querySelector('#bug_modal')).open();
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tabs'.
  tabs.select("bug_markdown");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tabs'.
  tabs.select("bug_preview");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tabs'.
  tabs.updateTabIndicator();
}

function doBugDetailCopy() {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tabs'.
  tabs.select("bug_markdown");
  var copyText = document.getElementById("bug_markdown_display");
  // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
  copyText.select();
  document.execCommand("copy");
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
  M.toast({ html: "Copied! Now go to GitHub" });
}

function renderMarkdown() {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $("#bug_preview_display").html(window.markdownit().render($("#bug_markdown_display").val()));
}

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sync_toast'.
sync_toast = null;
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error_toast'.
error_toast = null
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'last_data'.
last_data = null;
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error_minimum'.
error_minimum = 0
// Refreshes the display with stats from the server.
function refreshstats() {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var jqxhr = $.get("getstatus", function (data: any) {
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#ha_snapshots').empty().append(data.sources.HomeAssistant.snapshots + " (" + data.sources.HomeAssistant.size + ")");
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#drive_snapshots').empty().append(data.sources.GoogleDrive.snapshots + " (" + data.sources.GoogleDrive.size + ")");
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#space_left').empty().append("x GB remaining");
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#last_snapshot').empty().append(data.last_snapshot_text);
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#last_snapshot').attr("datetime", data.last_snapshot_machine);
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#last_snapshot').attr("title", data.last_snapshot_detail);

    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#next_snapshot').empty().append(data.next_snapshot_text);
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#next_snapshot').attr("datetime", data.next_snapshot_machine);
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#next_snapshot').attr("title", data.next_snapshot_detail);
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('#free_space').empty().append(data.free_space + " remaining");
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('.open_drive_link').attr("href", "https://drive.google.com/drive/u/0/folders/" + data.folder_id);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot_div'.
    snapshot_div = $('#snapshots')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'slugs'.
    slugs = []
    var count = 0;
    for (var key in data.snapshots) {
      if (data.snapshots.hasOwnProperty(key)) {
        count++;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        snapshot = data.snapshots[key];
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'slugs'.
        slugs.push(snapshot.slug);
        // try to find the item
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        var template = $(".slug" + snapshot.slug)
        var isNew = false;
        if (template.length == 0) {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          var template = $('#snapshot-template').find(".snapshot-ui").clone();
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
          template.addClass("slug" + snapshot.slug);
          template.addClass("active-snapshot");
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
          template.data("slug", snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          var dropdown = $("#action_dropdown", template);
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
          dropdown.attr("id", "action_dropdown" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#action_dropdown_button", template).attr("data-target", "action_dropdown" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#action_dropdown_button", template).attr('id', "action_dropdown_button" + snapshot.slug);

          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#delete_link", template).attr('id', "delete_link" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#restore_link", template).attr('id', "restore_link" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#upload_link", template).attr('id', "upload_link" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#download_link", template).attr('id', "download_link" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#retain_link", template).attr('id', "retain_link" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#delete_option", template).attr('id', "delete_option" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#restore_option", template).attr('id', "restore_option" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#upload_option", template).attr('id', "upload_option" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#download_option", template).attr('id', "download_option" + snapshot.slug);
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#retain_option", template).attr('id', "retain_option" + snapshot.slug);
          isNew = true;
        }

        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#size", template).html(snapshot['size']);
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#name", template).html(snapshot['name']);
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#status", template).html(snapshot['status']);

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        template.data("inDrive", snapshot.inDrive);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        template.data("inHa", snapshot.inHA);

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        if (snapshot.protected) {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-protected", template).show();
        } else {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-protected", template).hide();
        }

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        if (snapshot.deleteNextDrive && snapshot.deleteNextHa) {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-warn-delete", template).show();
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-warn-delete", template).attr("data-tooltip", "This snapshot will be deleted next from Google Drive and Home Assistant when a new snapshot is created.");
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        } else if (snapshot.deleteNextDrive) {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-warn-delete", template).show();
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-warn-delete", template).attr("data-tooltip", "This snapshot will be deleted next from Google Drive when a new snapshot is created.");
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        } else if (snapshot.deleteNextHa) {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-warn-delete", template).show();
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-warn-delete", template).attr("data-tooltip", "This snapshot will be deleted next from Home Assistant when a new snapshot is created.");
        } else {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-warn-delete", template).hide();
        }

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        if (snapshot.driveRetain || snapshot.haRetain) {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-retain", template).show();
        } else {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $(".icon-retain", template).hide();
        }

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tip'.
        tip = "Help unavailable";

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        if (snapshot.status.includes("Drive")) {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tip'.
          tip = tooltipDriveOnly;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        } else if (snapshot.status.includes("Backed Up")) {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tip'.
          tip = tooltipBackedUp;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        } else if (snapshot.status.includes("Loading")) {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tip'.
          tip = tooltipLoading;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        } else if (snapshot.status.includes("HA Only")) {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tip'.
          tip = tooltipHassio;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        } else if (snapshot.status.includes("Pending")) {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tip'.
          tip = tooltipPending;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        } else if (snapshot.status.includes("Upload")) {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tip'.
          tip = tooltipUploading;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        } else if (snapshot.status.includes("aiting")) {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tip'.
          tip = tooltipWaiting;
        }
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#status-help", template).attr("data-tooltip", tip);

        if (isNew) {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot_div'.
          snapshot_div.prepend(template);
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
          var elems = document.querySelectorAll("#action_dropdown_button" + snapshot.slug)
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
          var instances = M.Dropdown.init(elems, { 'constrainWidth': false });
        }

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        if (snapshot.inHA || snapshot.inDrive) {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#action_dropdown_button" + snapshot.slug).show();
        } else {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#action_dropdown_button" + snapshot.slug).hide();
        }

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'snapshot'.
        if (snapshot.inHA) {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#upload_option" + snapshot.slug).hide();
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#restore_option" + snapshot.slug).show();
        } else {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#upload_option" + snapshot.slug).show();
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          $("#restore_option" + snapshot.slug).hide();
        }

        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#status-details", template).data('snapshot', snapshot)

        // Set up context menu
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#delete_link" + snapshot.slug).data('snapshot', snapshot);
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#restore_link" + snapshot.slug).data('url', data.restore_link.replace("{host}", window.location.hostname));
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#upload_link" + snapshot.slug).data('snapshot', snapshot);
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#download_link" + snapshot.slug).data('snapshot', snapshot);
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#retain_link" + snapshot.slug).data('snapshot', snapshot);
      }
    }

    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $(".active-snapshot").each(function () {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      var snapshot = $(this)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'slugs'.
      if (!slugs.includes(snapshot.data('slug'))) {
        snapshot.remove();
      }
    });

    // Update the "syncing" toast message
    if (data.syncing) {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sync_toast'.
      if (sync_toast == null) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sync_toast'.
        sync_toast = M.toast({ html: '<span>Syncing...</span><button class="btn-flat toast-action" onclick="cancelSync()">Cancel</button>', displayLength: 999999999 })
      }
    } else {
      // Make sure the toast isn't up
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sync_toast'.
      if (sync_toast != null) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sync_toast'.
        sync_toast.dismiss();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sync_toast'.
        sync_toast = null
      }
    }


    if (count == 0) {
      if (!data.firstSync) {
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#no_snapshots_block").show();
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#snapshots_loading").hide();
      } else {
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#snapshots_loading").show();
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $("#no_snapshots_block").hide();
      }
    } else {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#no_snapshots_block").hide();
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#snapshots_loading").hide();
    }

    var found = false;
    var error = data.last_error;
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('.error_card').each(function (i: any) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      var item = $(this);
      if (data.last_error == null) {
        if (item.is(":visible")) {
          item.hide();
        }
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error_minimum'.
      } else if (item.hasClass(error.error_type) && data.last_error_count != error_minimum && !data.ignore_errors_for_now && !data.ignore_sync_error) {
        found = true;
        if (data.hasOwnProperty('dns_info')) {
          // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
          var dns_div = $('.dns_info', item)
          if (dns_div.length > 0) {
            populateDnsInfo(dns_div, data.dns_info)
          }
        }
        if (error.data != null) {
          for (key in error.data) {
            if (!error.data.hasOwnProperty(key)) {
              continue;
            }
            var value = error.data[key];
            var index = key.lastIndexOf("#");
            if (index > 0) {
              var attr = key.slice(index + 1);
              key = key.slice(0, index);
              // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
              $("#data_" + key, item).attr(attr, value);
            } else {
              // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
              $("#data_" + key, item).html(value);
            }
          }
        }
        if (item.is(":hidden")) {
          item.show()
        }
      } else {
        item.hide();
      }
    });

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error_minimum'.
    if (data.last_error != null && !found && data.last_error_count != error_minimum && !data.ignore_errors_for_now && !data.ignore_sync_error) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      var card = $("#error_card")
      populateGitHubInfo(card, data.last_error);
      card.fadeIn();
    } else {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#error_card").hide();
    }

    if (data.ask_error_reports && !found) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $('#error_reports_card').fadeIn(500);
    } else {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $('#error_reports_card').hide();
    }

    if (data.is_custom_creds) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".hide-for-custom-creds").hide();
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".hide-for-default-creds").show();
    } else {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".hide-for-custom-creds").show();
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".hide-for-default-creds").hide();
    }

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'hideIngress'.
    if (data.warn_ingress_upgrade && !hideIngress) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $('#ingress_upgrade_card').fadeIn(500);
    } else {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $('#ingress_upgrade_card').hide();
    }

    if (data.sources.GoogleDrive.retained > 0) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".drive_retain_count").html(data.sources.GoogleDrive.retained)
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".drive_retain_label").show()
    } else {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".drive_retain_label").hide()
    }

    if (data.sources.HomeAssistant.retained > 0) {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".ha_retain_count").html(data.sources.HomeAssistant.retained)
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".ha_retain_label").show()
    } else {
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $(".ha_retain_label").hide()
    }

    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $("#restore_hard_link").attr("href", data.restore_link.replace("{host}", window.location.hostname));

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'last_data'.
    last_data = data;

    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $('.tooltipped').tooltip({ "exitDelay": 1000 });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error_toast'.
    if (error_toast != null) {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error_toast'.
      error_toast.dismiss();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error_toast'.
      error_toast = null;
    }
  }, "json").fail(
    function (e: any) {
      console.log("Status update failed: ");
      console.log(e);
      // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
      $("#snapshots_loading").show();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error_toast'.
      if (error_toast == null) {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
        M.Toast.dismissAll();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sync_toast'.
        sync_toast = null;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'error_toast'.
        error_toast = M.toast({ html: 'Lost connection to add-on, will keep trying to connect...', displayLength: 9999999 })
      }
    }
  )
}

function populateDnsInfo(target: any, data: any) {
  if (data == null) {
    target.html("No DNS info is available")
  } else if (data.hasOwnProperty('error')) {
    target.html(JSON.stringify(data.error))
  } else {
    var html = "";
    for (var host in data) {
      if (data.hasOwnProperty(host)) {
        html += "<div class='col s12 m6 row'> <h6>Host: " + host + "</h6>";
        var ips = data[host];
        for (var ip in ips) {
          if (ips.hasOwnProperty(ip)) {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'result'.
            result = ips[ip];
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'result'.
            html += "<div class='col s7'>" + ip + "</div><div class='col s5'>" + result + "</div>";
          }
        }
        html += "</div>";
      }
    }
    target.html(html);
  }
}

function populateGitHubInfo(target: any, error: any) {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $('#generic_error_title', target).text(error.message);
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $('#generic_error_details', target).text(error.details);
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $('#error_github_search', target).attr("href", "https://github.com/sabeechen/hassio-google-drive-backup/issues?q=" + encodeURIComponent("\"" + error.message.replace("\"", "\\\"") + "\""));
}

function simulateError() {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $.get("simerror?error=This%20is%20a%20fake%20error.%20Select%20'Stop%20Simulated%20Error'%20from%20the%20menu%20to%20stop%20it.",
    function (data: any) {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
      sync()
    })
}

function stopSimulateError() {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $.get("simerror?error=",
    function (data: any) {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
      sync()
    })
}

function newSnapshotClick() {
  setInputValue("retain_drive_one_off", false);
  setInputValue("retain_ha_one_off", false);
  setInputValue("snapshot_name_one_off", "");
  snapshotNameOneOffExample();
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
  M.Modal.getInstance(document.querySelector('#snapshotmodal')).open();
}

function doNewSnapshot() {
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var drive = $("#retain_drive_one_off").prop('checked');
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var ha = $("#retain_ha_one_off").prop('checked');
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  var name = $("#snapshot_name_one_off").val()
  var url = "snapshot?custom_name=" + encodeURIComponent(name) + "&retain_drive=" + drive + "&retain_ha=" + ha;
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"Requesting snapshot (takes a fe... Remove this comment to see the full error message
  postJson(url, {}, refreshstats, null, "Requesting snapshot (takes a few seconds)...");
  return false;
}


function allowDeletion(always: any) {
  var url = "confirmdelete?always=" + always;
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"Allowing deletion and syncing..... Remove this comment to see the full error message
  postJson(url, {}, refreshstats, null, "Allowing deletion and syncing...");
}

function chooseSnapshotFolder() {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'last_data'.
  window.open(last_data.choose_folder_url + "&returnto=" + encodeURIComponent(getWindowRootUri() + "changefolder"));
}

function skipLowSpaceWarning() {
  postJsonCloseErrorDialog("skipspacecheck", "low_space");
}



// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
$(document).ready(function () {
  if (window.top.location == window.location) {
    // We're in a standard webpage, only show the header
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $(".ingress-only").hide();
  } else {
    // We're in an ingress iframe.
    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $(".non-ingress").hide();
  }
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'M'.
  var instance = M.Tabs.init(document.querySelector("#bug_report_tabs"), { "onShow": renderMarkdown });
});

var pickerApiLoaded = false;
var oauthToken: any;

function loadPicker() {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gapi'.
  gapi.load('auth', { 'callback': onAuthApiLoad });
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gapi'.
  gapi.load('picker', { 'callback': onPickerApiLoad });
}

function onAuthApiLoad() {
  var scope = ['https://www.googleapis.com/auth/drive.file'];
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'gapi' does not exist on type 'Window & t... Remove this comment to see the full error message
  window.gapi.auth.authorize({
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'clientId'.
    'client_id': clientId,
    'scope': scope,
    'immediate': false
  }, handleAuthResult);
}

function onPickerApiLoad() {
  pickerApiLoaded = true;
  createPicker();
}

function handleAuthResult(authResult: any) {
  if (authResult && !authResult.error) {
    oauthToken = authResult.access_token;
    createPicker();
  }
}

// Create and render a Picker object for searching images.
function createPicker() {
  if (pickerApiLoaded && oauthToken) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
    var mydrive = new google.picker.DocsView(google.picker.ViewId.DOCS)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
      .setMode(google.picker.DocsViewMode.LIST)
      .setIncludeFolders(true)
      .setSelectFolderEnabled(true)
      .setParent('root')
      .setLabel("My Drive");
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
    var sharedWithMe = new google.picker.DocsView(google.picker.FOLDERS)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
      .setMode(google.picker.DocsViewMode.LIST)
      //.setIncludeFolders(true)
      .setSelectFolderEnabled(true)
      .setOwnedByMe(true)
      .setQuery("*")
      .setLabel("Shared With Me");
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
    var sharedDrives = new google.picker.DocsView(google.picker.ViewId.DOCS)
      .setEnableDrives(true)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
      .setMode(google.picker.DocsViewMode.LIST)
      .setIncludeFolders(true)
      .setSelectFolderEnabled(true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
    var recent = new google.picker.DocsView(google.picker.ViewId.RECENTLY_PICKED)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
      .setMode(google.picker.DocsViewMode.LIST)
      .setIncludeFolders(true)
      .setSelectFolderEnabled(true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
    var picker = new google.picker.PickerBuilder()
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
      .disableFeature(google.picker.Feature.NAV_HIDDEN)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
      .disableFeature(google.picker.Feature.MINE_ONLY)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
      .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'appId'.
      .setAppId(appId)
      .setOAuthToken(oauthToken)
      .addView(mydrive)
      //.addView(sharedWithMe)
      .addView(sharedDrives)
      .addView(recent)
      .setTitle("Choose a backup folder")
      .setCallback(pickerCallback)
      .build();
    picker.setVisible(true);
  }
}

function getQueryParams(params: any) {
  let href = window.location;
  //this expression is to get the query strings
  let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Location' is not assignable to p... Remove this comment to see the full error message
  let queryString = reg.exec(href);
  return queryString ? queryString[1] : null;
};

// A simple callback implementation.
function pickerCallback(data: any) {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'google'.
  if (data.action == google.picker.Action.PICKED) {
    var message = "";
    if (data.docs.length == 0) {
      message = "No document was selected.  Please try selecting a folder again."
    } else if (data.docs[0].mimeType != "application/vnd.google-apps.folder") {
      // Has to be a folder.  Doesn't make sense otherwise.
      message = "You can only backup snapshots to a folder.  Please select a folder instead."
    }

    if (message.length > 0) {
      alert(message);
    } else {
      // Redirect back to the uer's home assistant with the now authorized folder id.
      // @ts-expect-error ts-migrate(2345) FIXME: Type 'null' is not assignable to type 'string'.
      window.location.href = decodeURIComponent(getQueryParams("returnto")) + "?id=" + data.docs[0].id
    }
  }
}