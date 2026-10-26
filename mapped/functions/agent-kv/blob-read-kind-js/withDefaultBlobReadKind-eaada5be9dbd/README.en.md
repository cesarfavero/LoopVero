# `withDefaultBlobReadKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-read-kind.js` · [Module README](../../../../modules/agent-kv/blob-read-kind-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616339-616341](../../../../../reference/runtime/host-main.cjs#L616339-L616341) | `FunctionDeclaration` | no | `ctx, kind` |
| [evaluation:284879-284881](../../../../../reference/runtime/sand-eval-runner.cjs#L284879-L284881) | `FunctionDeclaration` | no | `ctx, kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616339-616341](../../../../../reference/runtime/host-main.cjs#L616339-L616341) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284879-284881](../../../../../reference/runtime/sand-eval-runner.cjs#L284879-L284881) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:616339

Calls written directly in this body: `ctx.get`, `ctx.with`.

SHA-256 of the source span: `331f13e55c55865a8cb47a663de5baf668d5e9f9cd22cd15e5665af306207200`.

### evaluation:284879

Calls written directly in this body: `ctx.get`, `ctx.with`.

SHA-256 of the source span: `331f13e55c55865a8cb47a663de5baf668d5e9f9cd22cd15e5665af306207200`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
