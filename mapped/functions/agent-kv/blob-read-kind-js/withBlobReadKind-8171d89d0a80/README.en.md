# `withBlobReadKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-read-kind.js` · [Module README](../../../../modules/agent-kv/blob-read-kind-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616336-616338](../../../../../reference/runtime/host-main.cjs#L616336-L616338) | `FunctionDeclaration` | no | `ctx, kind` |
| [evaluation:284876-284878](../../../../../reference/runtime/sand-eval-runner.cjs#L284876-L284878) | `FunctionDeclaration` | no | `ctx, kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616336-616338](../../../../../reference/runtime/host-main.cjs#L616336-L616338) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284876-284878](../../../../../reference/runtime/sand-eval-runner.cjs#L284876-L284878) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:616336

Calls written directly in this body: `ctx.get`, `ctx.with`.

SHA-256 of the source span: `9bb46a73c2d68dd193e67722f2aee00d35d6084a0934bc924bb9066abfd2ba74`.

### evaluation:284876

Calls written directly in this body: `ctx.get`, `ctx.with`.

SHA-256 of the source span: `9bb46a73c2d68dd193e67722f2aee00d35d6084a0934bc924bb9066abfd2ba74`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
