# `createSandRpcTracingInterceptor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/rpc-tracing.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/rpc-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224836-224884](../../../../../../../reference/runtime/host-main.cjs#L224836-L224884) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:511869-511917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511869-L511917) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224836-224884](../../../../../../../reference/runtime/host-main.cjs#L224836-L224884) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511869-511917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511869-L511917) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:224836

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7843f059cb12a7260acb5593bfa99fc45f52f90fbf6571155151242df1112d8c`.

### evaluation:511869

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `56424ac88c0776d6e4150a06c9973f6a57bb6f9ffddde1a510a2bbd6c4421b97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
