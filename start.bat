@echo off
echo ========================================
echo   SWANIX BRAND DEVELOPMENT - Starting
echo ========================================
echo.

cd /d "%~dp0"

echo Starting backend server...
start "Swanix Backend" cmd /c "cd server && node index.js"

timeout /t 2 /nobreak >nul

echo Starting frontend dev server...
start "Swanix Frontend" cmd /c "npm run dev"

echo.
echo ========================================
echo   Website is starting!
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:5000
echo ========================================
pause
