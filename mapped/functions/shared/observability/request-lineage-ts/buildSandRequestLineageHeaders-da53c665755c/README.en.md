# `buildSandRequestLineageHeaders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/request-lineage.ts` · [Module README](../../../../../modules/shared/observability/request-lineage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:216807-216821](../../../../../../reference/runtime/host-main.cjs#L216807-L216821) | `FunctionDeclaration` | no | `lineage` |
| [evaluation:511658-511672](../../../../../../reference/runtime/sand-eval-runner.cjs#L511658-L511672) | `FunctionDeclaration` | no | `lineage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:216807-216821](../../../../../../reference/runtime/host-main.cjs#L216807-L216821) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511658-511672](../../../../../../reference/runtime/sand-eval-runner.cjs#L511658-L511672) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:216807

Calls written directly in this body: `sanitizeHeaderValue`.

SHA-256 of the source span: `1692a2f766eaad9a9b0df1fbdaf86ec74e682d401543cd1323c836dffed5eb06`.

### evaluation:511658

Calls written directly in this body: `sanitizeHeaderValue`.

SHA-256 of the source span: `1692a2f766eaad9a9b0df1fbdaf86ec74e682d401543cd1323c836dffed5eb06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
