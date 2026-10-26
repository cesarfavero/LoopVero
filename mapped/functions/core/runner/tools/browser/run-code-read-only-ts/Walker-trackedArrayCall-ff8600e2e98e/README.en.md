# `Walker.trackedArrayCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750219-750249](../../../../../../../../reference/runtime/host-main.cjs#L750219-L750249) | `method` | no | `objKind, element, name18, args, scope` |
| [evaluation:523070-523100](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523070-L523100) | `method` | no | `objKind, element, name18, args, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750219-750249](../../../../../../../../reference/runtime/host-main.cjs#L750219-L750249) | 9 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:523070-523100](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523070-L523100) | 9 | 0 | 0 | 7 | 0 | 0 |

### host:750219

Calls written directly in this body: `args.forEach`, `arrayOf`, `fail2`, `isDataLike`, `isObjectKind`, `own2`.

SHA-256 of the source span: `8e5d2e3275e0d9b42d65ec9e6d201046600b18f2a618fd175a7ac8bc2a0c5565`.

### evaluation:523070

Calls written directly in this body: `args.forEach`, `arrayOf2`, `fail`, `isDataLike`, `isObjectKind`, `own2`.

SHA-256 of the source span: `75ff3da07f1085664cb72c911d18519d16252bbfe4e8b9e388386cb4eec71544`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
