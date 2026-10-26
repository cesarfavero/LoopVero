# `coerceToolArgsToJsonSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724953-724955](../../../../../../../../reference/runtime/host-main.cjs#L724953-L724955) | `FunctionDeclaration` | no | `jsonSchema3, value` |
| [evaluation:479916-479918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479916-L479918) | `FunctionDeclaration` | no | `jsonSchema3, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724953-724955](../../../../../../../../reference/runtime/host-main.cjs#L724953-L724955) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479916-479918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479916-L479918) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724953

Calls written directly in this body: `coerceArgsToJsonSchema`, `isUnknownRecord2`, `reportCoercion`.

SHA-256 of the source span: `89cb2723fb0a1bab889ec132d39d74fa44860e810c25d66eb4a2bd4ced63c8e9`.

### evaluation:479916

Calls written directly in this body: `coerceArgsToJsonSchema`, `isUnknownRecord2`, `reportCoercion`.

SHA-256 of the source span: `89cb2723fb0a1bab889ec132d39d74fa44860e810c25d66eb4a2bd4ced63c8e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
