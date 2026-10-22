param([string]$InputPath, [string]$OutputPath)
$ErrorActionPreference = 'Stop'
$wordReview = $null
$documentReview = $null
try {
    $wordReview = New-Object -ComObject Word.Application
    $wordReview.Visible = $false
    $wordReview.DisplayAlerts = 0
    $documentReview = $wordReview.Documents.Open($InputPath, $false, $true)
    $documentReview.Repaginate()
    $documentReview.Fields.Update() | Out-Null
    $documentReview.ExportAsFixedFormat($OutputPath, 17)
} finally {
    if ($null -ne $documentReview) { $documentReview.Close(0) }
    if ($null -ne $wordReview) { $wordReview.Quit() }
}
