# `WatchedDirectory.armDirectory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684418-684434](../../../../../reference/runtime/host-main.cjs#L684418-L684434) | `method` | no | `directory, identity` |
| [evaluation:627742-627758](../../../../../reference/runtime/sand-eval-runner.cjs#L627742-L627758) | `method` | no | `directory, identity2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684418-684434](../../../../../reference/runtime/host-main.cjs#L684418-L684434) | 1 | 0 | 0 | 1 | 0 | 1 |
| [evaluation:627742-627758](../../../../../reference/runtime/sand-eval-runner.cjs#L627742-L627758) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:684418

Calls written directly in this body: `isMissingPathError`, `this.reportWatchUnavailable`, `this.watchDirectory`, `this.watchSubdirectoriesOf`, `this.watchers.set`, `watcher.on`.

Assignment or increment targets: `watcher`.

SHA-256 of the source span: `c4a3ef57d861f306f420c9c04c728f224d26165e90e9fd28d094d32d86d12c20`.

### evaluation:627742

Calls written directly in this body: `isMissingPathError`, `this.reportWatchUnavailable`, `this.watchDirectory`, `this.watchSubdirectoriesOf`, `this.watchers.set`, `watcher.on`.

Assignment or increment targets: `watcher`.

SHA-256 of the source span: `0a7e8838eb7ba9ac8b3ffe08d4264abf8c1196e2cdd58485610c2c3f6c12f79f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
