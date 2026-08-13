# Start local preview for giselelarose portfolio v5 (static site)
$ErrorActionPreference = "Stop"
$Port = 8081
$SiteRoot = $PSScriptRoot

function Stop-StaleServerOnPort([int]$TargetPort) {
  Get-NetTCPConnection -LocalPort $TargetPort -State Listen -ErrorAction SilentlyContinue |
    ForEach-Object {
      $proc = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
      if ($proc -and $proc.ProcessName -eq "python") {
        Stop-Process -Id $_.OwningProcess -Force
        Write-Host "Stopped stale Python server on port $TargetPort (PID $($_.OwningProcess))"
      }
    }
}

Stop-StaleServerOnPort -TargetPort $Port
Set-Location $SiteRoot

Write-Host ""
Write-Host "Local site: http://localhost:$Port/"
Write-Host "Folder:     $SiteRoot"
Write-Host "Stop with Ctrl+C"
Write-Host ""

Start-Process "http://localhost:$Port/"
py -m http.server $Port
