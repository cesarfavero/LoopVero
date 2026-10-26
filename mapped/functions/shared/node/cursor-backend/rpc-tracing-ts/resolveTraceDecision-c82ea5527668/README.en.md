# `resolveTraceDecision`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/rpc-tracing.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/rpc-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224801-224817](../../../../../../../reference/runtime/host-main.cjs#L224801-L224817) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:511834-511850](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511834-L511850) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224801-224817](../../../../../../../reference/runtime/host-main.cjs#L224801-L224817) | 5 | 0 | 0 | 7 | 0 | 1 |
| [evaluation:511834-511850](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511834-L511850) | 5 | 0 | 0 | 7 | 0 | 1 |

### host:224801

Calls written directly in this body: `Math.random`, `configured.getPolicy`, `configured.getTracer`.

SHA-256 of the source span: `7737c49cde218ccf93b892d9092700625bebbcb50e6c18de6afb15904e2b2480`.

### evaluation:511834

Calls written directly in this body: `Math.random`, `configured.getPolicy`, `configured.getTracer`.

SHA-256 of the source span: `7737c49cde218ccf93b892d9092700625bebbcb50e6c18de6afb15904e2b2480`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
