# `sandClientBaseVersionOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/sand-client-metadata.ts` · [Module README](../../../../../modules/shared/node/sand-client-metadata-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175797-175801](../../../../../../reference/runtime/host-main.cjs#L175797-L175801) | `FunctionDeclaration` | no | `clientAppVersion` |
| [evaluation:511743-511747](../../../../../../reference/runtime/sand-eval-runner.cjs#L511743-L511747) | `FunctionDeclaration` | no | `clientAppVersion` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175797-175801](../../../../../../reference/runtime/host-main.cjs#L175797-L175801) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511743-511747](../../../../../../reference/runtime/sand-eval-runner.cjs#L511743-L511747) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:175797

Calls written directly in this body: `stampedVersionBaseOf`.

SHA-256 of the source span: `cde7d4dfc471715ffe8d5b637bd2228de598249332efee53f6aa8f336b8ca405`.

### evaluation:511743

Calls written directly in this body: `stampedVersionBaseOf`.

SHA-256 of the source span: `cde7d4dfc471715ffe8d5b637bd2228de598249332efee53f6aa8f336b8ca405`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
