# `WatchedDirectory.reportWatchUnavailable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684490-684495](../../../../../reference/runtime/host-main.cjs#L684490-L684495) | `method` | no | `error64` |
| [evaluation:627814-627819](../../../../../reference/runtime/sand-eval-runner.cjs#L627814-L627819) | `method` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684490-684495](../../../../../reference/runtime/host-main.cjs#L684490-L684495) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627814-627819](../../../../../reference/runtime/sand-eval-runner.cjs#L627814-L627819) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684490

Calls written directly in this body: `errorLogTag`, `reportHostDiagnostic`.

SHA-256 of the source span: `f889bb2e5313ea15bb60fcb8a4457fd050e0347e14c45bc0d1d644b0a8984cf5`.

### evaluation:627814

Calls written directly in this body: `errorLogTag`, `reportHostDiagnostic`.

SHA-256 of the source span: `a08d3c0a75284ba063cefd89629ec9b2c965bbbcce38659397705a3c8f3838a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
