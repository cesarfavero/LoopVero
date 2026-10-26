# `WatchedDirectory.startWatching`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684382-684395](../../../../../reference/runtime/host-main.cjs#L684382-L684395) | `method` | no | `(none)` |
| [evaluation:627706-627719](../../../../../reference/runtime/sand-eval-runner.cjs#L627706-L627719) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684382-684395](../../../../../reference/runtime/host-main.cjs#L684382-L684395) | 2 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:627706-627719](../../../../../reference/runtime/sand-eval-runner.cjs#L627706-L627719) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:684382

Calls written directly in this body: `ensureSandDataDirSync`, `isSandDataPath`, `this.reportWatchUnavailable`, `this.watchDirectoryTree`.

SHA-256 of the source span: `61286d67a629cd1b1deec2f9edfed3f2e9b3455a3fcd863921a9ca0cf05884ac`.

### evaluation:627706

Calls written directly in this body: `ensureSandDataDirSync`, `isSandDataPath`, `this.reportWatchUnavailable`, `this.watchDirectoryTree`.

SHA-256 of the source span: `1c9f062c10f89fe4d8ba2dd23e0592ddf3b4950d4faada9c58980df78e3959b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
