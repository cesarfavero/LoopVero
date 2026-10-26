# `nonnegativeNumberField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-driver-client.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-driver-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724184-724188](../../../../../../../../reference/runtime/host-main.cjs#L724184-L724188) | `FunctionDeclaration` | no | `fields3, key` |
| [evaluation:560078-560082](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560078-L560082) | `FunctionDeclaration` | no | `fields3, key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724184-724188](../../../../../../../../reference/runtime/host-main.cjs#L724184-L724188) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560078-560082](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560078-L560082) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:724184

Calls written directly in this body: `Number.isFinite`, `fields3.get`.

SHA-256 of the source span: `a126cd6073655987f263d62711cedfbf1c8383c57010eb0c1bae680a7b090a2a`.

### evaluation:560078

Calls written directly in this body: `Number.isFinite`, `fields3.get`.

SHA-256 of the source span: `a126cd6073655987f263d62711cedfbf1c8383c57010eb0c1bae680a7b090a2a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
