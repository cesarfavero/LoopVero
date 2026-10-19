# GrokBotResearch full harness snapshot

`GrokBotResearch/` is an operator-supplied extraction of the Grok Bot Linux Sand Host runtime, not an independently built source repository. By explicit user authorization, the private repository tracks the complete extracted tree from `GrokBotResearch/`, including compiled host bundles, scripts, vendored dependency trees, OfficeKit material, native modules, WASM, and opaque files. At the 2026-10-19 inventory, it contained 1,073 files and 159,723,110 bytes.

The extracted host/evaluation bundles, workers, isolation worker, extensions, launch and maintenance scripts, package metadata, dependency files and version marker are retained. The local reference tree is not modified by this Git operation.

The user authorized retaining licensed materials in this private repository for testing and later manual removal. No files are published outside the private repository by this change.

Before staging, the 1,073-file tree was checked for symlinks, oversized files, common private-key/token/JWT signatures, SQLite/key file signatures, and credential/session-named artifacts. No such signatures or data files were found; two generic `PASSWORD = "..."` pattern matches were confirmed by surrounding source to be the non-secret sentinel `CODE_NOT_IN_ONEPASSWORD`. This is a best-effort scan, not proof that arbitrary embedded sensitive data cannot exist. Continue to exclude real credentials, tokens, cookies, sessions, and personal data if the extraction is refreshed.
