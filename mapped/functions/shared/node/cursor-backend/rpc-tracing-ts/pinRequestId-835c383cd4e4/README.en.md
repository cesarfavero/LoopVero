# `pinRequestId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/rpc-tracing.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/rpc-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224818-224824](../../../../../../../reference/runtime/host-main.cjs#L224818-L224824) | `FunctionDeclaration` | no | `header` |
| [evaluation:511851-511857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511851-L511857) | `FunctionDeclaration` | no | `header` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224818-224824](../../../../../../../reference/runtime/host-main.cjs#L224818-L224824) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511851-511857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511851-L511857) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:224818

Calls written directly in this body: `globalThis.crypto.randomUUID`, `header.get`, `header.set`.

SHA-256 of the source span: `7ffe72bd9114991850001dfe395db059097e77f5a60abd8433d5da818db662d2`.

### evaluation:511851

Calls written directly in this body: `globalThis.crypto.randomUUID`, `header.get`, `header.set`.

SHA-256 of the source span: `7ffe72bd9114991850001dfe395db059097e77f5a60abd8433d5da818db662d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
