---
Task ID: 1
Agent: Main Agent
Task: Fix website deployment and make Edit/Delete/Partisipan buttons always visible

Work Log:
- Investigated server crash - standalone mode was causing issues, switched to `npx next start`
- Server was dying due to orphan process management; fixed by using detached child process
- Removed `output: "standalone"` from next.config.ts
- Fixed build script in package.json (removed standalone cp commands)
- Changed Event card buttons (Partisipan, Edit, Hapus) from admin-only to always visible
- Changed Team card buttons (Profil, Edit, Hapus) from admin-only to always visible
- Changed Event Detail dialog buttons from admin-only to always visible
- Changed Team Profile dialog buttons from admin-only to always visible
- When not logged in as Admin, buttons redirect to login dialog
- Renamed "Peserta" to "Partisipan" throughout the UI
- Verified player positions already use Goalkeeper, Anchor, Flank, Pivot
- Rebuilt project and started server - confirmed working and stable

Stage Summary:
- Website is running on port 3000
- All buttons (Edit, Delete, Partisipan) are now visible regardless of admin status
- Login is required to perform actual CRUD operations (prompts login dialog if not authenticated)
- Player positions: Goalkeeper, Anchor, Flank, Pivot (already correct)
