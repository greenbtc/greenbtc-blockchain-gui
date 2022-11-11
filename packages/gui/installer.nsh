!include "nsDialogs.nsh"

; Add our customizations to the finish page
!macro customFinishPage
XPStyle on

Var DetectDlg
Var FinishDlg
Var GreenBTCSquirrelInstallLocation
Var GreenBTCSquirrelInstallVersion
Var GreenBTCSquirrelUninstaller
Var CheckboxUninstall
Var UninstallGreenBTCSquirrelInstall
Var BackButton
Var NextButton

Page custom detectOldGreenBTCVersion detectOldGreenBTCVersionPageLeave
Page custom finish finishLeave

; Add a page offering to uninstall an older build installed into the greenbtc-blockchain dir
Function detectOldGreenBTCVersion
  ; Check the registry for old greenbtc-blockchain installer keys
  ReadRegStr $GreenBTCSquirrelInstallLocation HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\greenbtc-blockchain" "InstallLocation"
  ReadRegStr $GreenBTCSquirrelInstallVersion HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\greenbtc-blockchain" "DisplayVersion"
  ReadRegStr $GreenBTCSquirrelUninstaller HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\greenbtc-blockchain" "QuietUninstallString"

  StrCpy $UninstallGreenBTCSquirrelInstall ${BST_UNCHECKED} ; Initialize to unchecked so that a silent install skips uninstalling

  ; If registry keys aren't found, skip (Abort) this page and move forward
  ${If} GreenBTCSquirrelInstallVersion == error
  ${OrIf} GreenBTCSquirrelInstallLocation == error
  ${OrIf} $GreenBTCSquirrelUninstaller == error
  ${OrIf} $GreenBTCSquirrelInstallVersion == ""
  ${OrIf} $GreenBTCSquirrelInstallLocation == ""
  ${OrIf} $GreenBTCSquirrelUninstaller == ""
  ${OrIf} ${Silent}
    Abort
  ${EndIf}

  ; Check the uninstall checkbox by default
  StrCpy $UninstallGreenBTCSquirrelInstall ${BST_CHECKED}

  ; Magic create dialog incantation
  nsDialogs::Create 1018
  Pop $DetectDlg

  ${If} $DetectDlg == error
    Abort
  ${EndIf}

  !insertmacro MUI_HEADER_TEXT "Uninstall Old Version" "Would you like to uninstall the old version of GreenBTC Blockchain?"

  ${NSD_CreateLabel} 0 35 100% 12u "Found GreenBTC Blockchain $GreenBTCSquirrelInstallVersion installed in an old location:"
  ${NSD_CreateLabel} 12 57 100% 12u "$GreenBTCSquirrelInstallLocation"

  ${NSD_CreateCheckBox} 12 81 100% 12u "Uninstall GreenBTC Blockchain $GreenBTCSquirrelInstallVersion"
  Pop $CheckboxUninstall
  ${NSD_SetState} $CheckboxUninstall $UninstallGreenBTCSquirrelInstall
  ${NSD_OnClick} $CheckboxUninstall SetUninstall

  nsDialogs::Show

FunctionEnd

Function SetUninstall
  ; Set UninstallGreenBTCSquirrelInstall accordingly
  ${NSD_GetState} $CheckboxUninstall $UninstallGreenBTCSquirrelInstall
FunctionEnd

Function detectOldGreenBTCVersionPageLeave
  ${If} $UninstallGreenBTCSquirrelInstall == 1
    ; This could be improved... Experiments with adding an indeterminate progress bar (PBM_SETMARQUEE)
    ; were unsatisfactory.
    ExecWait $GreenBTCSquirrelUninstaller ; Blocks until complete (doesn't take long though)
  ${EndIf}
FunctionEnd

Function finish

  ; Magic create dialog incantation
  nsDialogs::Create 1018
  Pop $FinishDlg

  ${If} $FinishDlg == error
    Abort
  ${EndIf}

  GetDlgItem $NextButton $HWNDPARENT 1 ; 1 = Next button
  GetDlgItem $BackButton $HWNDPARENT 3 ; 3 = Back button

  ${NSD_CreateLabel} 0 35 100% 12u "GreenBTC has been installed successfully!"
  EnableWindow $BackButton 0 ; Disable the Back button
  SendMessage $NextButton ${WM_SETTEXT} 0 "STR:Let's Farm!" ; Button title is "Close" by default. Update it here.

  nsDialogs::Show

FunctionEnd

; Copied from electron-builder NSIS templates
Function StartApp
  ${if} ${isUpdated}
    StrCpy $1 "--updated"
  ${else}
    StrCpy $1 ""
  ${endif}
  ${StdUtils.ExecShellAsUser} $0 "$launchLink" "open" "$1"
FunctionEnd

Function finishLeave
  ; Launch the app at exit
  Call StartApp
FunctionEnd

; Section
; SectionEnd
!macroend
