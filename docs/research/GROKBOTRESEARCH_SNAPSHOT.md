# GrokBotResearch harness source snapshot

`GrokBotResearch/` is an operator-supplied extraction of the Grok Bot Linux Sand Host runtime, not an independently built or complete source repository. The tracked files in this directory are a text-only research snapshot taken from `GrokBotResearch/sand/` on 2026-10-19.

The snapshot includes the extracted host/evaluation bundles, workers, isolation worker, extension source, launch and maintenance scripts, package metadata, and version marker. It deliberately leaves the local reference tree unchanged.

The Git snapshot excludes `node_modules/`, `sand/deps/`, the packaged `officekit` and `officekit-ts` trees, native `.node` modules, the opaque `extensions/codebase-telemetry/csnaps` executable, and Finder metadata. These local files remain available under `GrokBotResearch/` for REA research. Consequently, this Git snapshot is not self-contained or directly runnable; it preserves the harness text used for analysis without copying its vendored dependency trees and opaque binaries into history.

The repository containing this snapshot is private. The extracted code and scripts are research material, not an authorization to publish or redistribute them. Secrets and session files are excluded; the submitted text snapshot was scanned for common private-key and token patterns before staging. That scan is a best-effort check, not a proof that arbitrary embedded sensitive data cannot exist.
