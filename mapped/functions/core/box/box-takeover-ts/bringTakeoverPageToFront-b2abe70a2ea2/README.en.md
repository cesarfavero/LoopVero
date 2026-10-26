# `bringTakeoverPageToFront`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-takeover.ts` · [Module README](../../../../../modules/core/box/box-takeover-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775983-776075](../../../../../../reference/runtime/host-main.cjs#L775983-L776075) | `FunctionDeclaration` | yes | `ctx, deps, request5` |
| [evaluation:575640-575732](../../../../../../reference/runtime/sand-eval-runner.cjs#L575640-L575732) | `FunctionDeclaration` | yes | `ctx, deps, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775983-776075](../../../../../../reference/runtime/host-main.cjs#L775983-L776075) | 10 | 0 | 7 | 4 | 0 | 0 |
| [evaluation:575640-575732](../../../../../../reference/runtime/sand-eval-runner.cjs#L575640-L575732) | 10 | 0 | 7 | 4 | 0 | 0 |

### host:775983

Calls written directly in this body: `.flatMap`, `boundUrlOf`, `classifyNavigationProbeResult`, `deps.accessor.get`, `firstPageOn`, `pagesOf`, `removeStagedUrl`, `reportTakeoverFailure`, `run`, `shellQuote`, `siteOf`, `succeeded`, `untilCanceled`.

Assignment or increment targets: `opened`.

SHA-256 of the source span: `bc89f02d889311726bc25322de2b4829a9d09b3b674d59a8cc6626b372c4fa87`.

### evaluation:575640

Calls written directly in this body: `.flatMap`, `boundUrlOf`, `classifyNavigationProbeResult`, `deps.accessor.get`, `firstPageOn`, `pagesOf`, `removeStagedUrl`, `reportTakeoverFailure`, `run`, `shellQuote`, `siteOf`, `succeeded`, `untilCanceled`.

Assignment or increment targets: `opened`.

SHA-256 of the source span: `57cde736ed422e7b8163eb62c7dd5f11a5f95901d44cb938acb2a01cc74bcd61`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
