# Original reference

[English](README.en.md) · [Português (Brasil)](README.md)

The files below are the study's primary evidence. Paths were reorganized using our own names; the contents and Git modes of the 1,070 files recorded in the [manifest](../mapped/inventory/original-files.json) remain identical to those in the reference snapshot.

| Path | Responsibility |
| --- | --- |
| [runtime/host-main.cjs](runtime/host-main.cjs) | Host, gateway, extensions, remote proxy, stores, and compiled shared code |
| [runtime/sand-eval-runner.cjs](runtime/sand-eval-runner.cjs) | Evaluation runner with the loop, session and tool composition, subagents, and shutdown |
| [runtime/workers/state/agent-store-worker.cjs](runtime/workers/state/agent-store-worker.cjs) | Persistence worker per agent |
| `runtime/workers/services/` | Auxiliary workers for synchronization, search, and telemetry |
| `runtime/scripts/` | Auxiliary environment and tool scripts |
| `runtime/launchers/` | Launchers supplied in the snapshot |
| `runtime/node_modules/` | Vendored runtime dependencies, retained as evidence |
| `dependencies/` | Dependencies and native components supplied in the snapshot |
| `documents/native/` | Native document support |
| `documents/typescript/` | Compiled TypeScript document support |

## Preservation

The manifest records the current path, size, Git mode, and SHA-1 of the original blob. Here SHA-1 identifies the Git object, calculated over `blob <size>\0<bytes>`, rather than a bare content hash. The index of the three core bundles also records SHA-256.

Binaries, dependencies, license notices, and internal names remain in the collection. Finder metadata and an empty placeholder were excluded because they are not part of the harness's operation.

This organization is intended for study. Directory changes may invalidate relative paths that a runtime would use to locate workers and scripts. No original file was adapted to turn the new layout into an executable product.

[Complete guide](../guide/README.en.md) · [Method](../guide/methodology/README.en.md) · [Map](../mapped/README.en.md)
