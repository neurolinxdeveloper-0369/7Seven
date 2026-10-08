Write-Host "Starting Spring Boot Backend..."
Start-Process powershell -ArgumentList "-NoExit -Command `"cd backend; .\mvnw.cmd spring-boot:run`""

Write-Host "Starting Vite React Frontend..."
Start-Process powershell -ArgumentList "-NoExit -Command `"cd frontend; npm run dev`""

Write-Host "Both servers are starting!"
