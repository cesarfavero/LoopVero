# `LoopbackSandBox.listBoundForkWindows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679280-679296](../../../../../../reference/runtime/host-main.cjs#L679280-L679296) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679280-679296](../../../../../../reference/runtime/host-main.cjs#L679280-L679296) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:679280

Calls written directly in this body: `.filter`, `.map`, `.sort`, `entries.filter`, `errorLogTag`, `isMissingPathError`, `reportHostDiagnosticOrStderr`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `92c8a61b14721815ad2e9f8408054d18ed64270fc7d1dcf9ce64074fe3295fdb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
