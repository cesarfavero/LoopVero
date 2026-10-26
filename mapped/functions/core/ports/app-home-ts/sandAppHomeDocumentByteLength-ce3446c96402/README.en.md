# `sandAppHomeDocumentByteLength`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/app-home.ts` · [Module README](../../../../../modules/core/ports/app-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770995-770997](../../../../../../reference/runtime/host-main.cjs#L770995-L770997) | `FunctionDeclaration` | no | `document2` |
| [evaluation:570101-570103](../../../../../../reference/runtime/sand-eval-runner.cjs#L570101-L570103) | `FunctionDeclaration` | no | `document2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770995-770997](../../../../../../reference/runtime/host-main.cjs#L770995-L770997) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570101-570103](../../../../../../reference/runtime/sand-eval-runner.cjs#L570101-L570103) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770995

Calls written directly in this body: `.encode`, `JSON.stringify`, `new TextEncoder`.

SHA-256 of the source span: `4f1de4d4ae3e483731cfb164bed9599419b083eb760b5642a4691409370cf8a2`.

### evaluation:570101

Calls written directly in this body: `.encode`, `JSON.stringify`, `new TextEncoder`.

SHA-256 of the source span: `4f1de4d4ae3e483731cfb164bed9599419b083eb760b5642a4691409370cf8a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
