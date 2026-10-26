# `availableDesktopExecutor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/desktop-executor.ts` · [Module README](../../../../../modules/core/ports/desktop-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752094-752096](../../../../../../reference/runtime/host-main.cjs#L752094-L752096) | `FunctionDeclaration` | no | `port` |
| [evaluation:528831-528833](../../../../../../reference/runtime/sand-eval-runner.cjs#L528831-L528833) | `FunctionDeclaration` | no | `port` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752094-752096](../../../../../../reference/runtime/host-main.cjs#L752094-L752096) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:528831-528833](../../../../../../reference/runtime/sand-eval-runner.cjs#L528831-L528833) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:752094

Calls written directly in this body: `port.isAvailable`.

SHA-256 of the source span: `98a25e5cfa11dfcf418052a86021f97be4c3444d566c1b09c173c2c75b21f242`.

### evaluation:528831

Calls written directly in this body: `port.isAvailable`.

SHA-256 of the source span: `98a25e5cfa11dfcf418052a86021f97be4c3444d566c1b09c173c2c75b21f242`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
