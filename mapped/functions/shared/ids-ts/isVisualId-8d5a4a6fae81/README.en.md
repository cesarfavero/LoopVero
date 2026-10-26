# `isVisualId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/ids.ts` · [Module README](../../../../modules/shared/ids-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476779-476781](../../../../../reference/runtime/host-main.cjs#L476779-L476781) | `FunctionDeclaration` | no | `raw` |
| [evaluation:475391-475393](../../../../../reference/runtime/sand-eval-runner.cjs#L475391-L475393) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476779-476781](../../../../../reference/runtime/host-main.cjs#L476779-L476781) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475391-475393](../../../../../reference/runtime/sand-eval-runner.cjs#L475391-L475393) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476779

Calls written directly in this body: `/^viz-[0-9a-f]{1,64}$/.test`.

SHA-256 of the source span: `b28ff62c496b291e97e94dfb099bd814a332d6c29ca2378c0731c6d8becc2f1c`.

### evaluation:475391

Calls written directly in this body: `/^viz-[0-9a-f]{1,64}$/.test`.

SHA-256 of the source span: `b28ff62c496b291e97e94dfb099bd814a332d6c29ca2378c0731c6d8becc2f1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
