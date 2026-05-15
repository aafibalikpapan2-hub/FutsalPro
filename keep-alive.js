const { spawn } = require('child_process');

function startServer() {
  console.log('[keep-alive] Starting Next.js dev server...');
  const child = spawn('npx', ['next', 'dev', '-p', '3000'], {
    cwd: '/home/z/my-project',
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  });

  child.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  child.stderr.on('data', (data) => {
    process.stderr.write(data);
  });

  child.on('exit', (code, signal) => {
    console.log(`[keep-alive] Server exited with code ${code}, signal ${signal}. Restarting in 3s...`);
    setTimeout(startServer, 3000);
  });
}

startServer();

// Keep this process alive
process.on('SIGTERM', () => {
  console.log('[keep-alive] Received SIGTERM, ignoring...');
});

process.on('SIGINT', () => {
  console.log('[keep-alive] Received SIGINT, ignoring...');
});
