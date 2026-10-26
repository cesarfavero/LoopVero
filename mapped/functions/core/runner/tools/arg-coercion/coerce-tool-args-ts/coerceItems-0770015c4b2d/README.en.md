# `coerceItems`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724891-724897](../../../../../../../../reference/runtime/host-main.cjs#L724891-L724897) | `FunctionDeclaration` | no | `value, schemaAt` |
| [evaluation:479854-479860](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479854-L479860) | `FunctionDeclaration` | no | `value, schemaAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724891-724897](../../../../../../../../reference/runtime/host-main.cjs#L724891-L724897) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479854-479860](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479854-L479860) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724891

Calls written directly in this body: `next.some`, `value.map`.

SHA-256 of the source span: `a98f5c6a640fc4ab1cc5034d2e73171f68da203549b8d5ffd18ba9555a024f97`.

### evaluation:479854

Calls written directly in this body: `next.some`, `value.map`.

SHA-256 of the source span: `a98f5c6a640fc4ab1cc5034d2e73171f68da203549b8d5ffd18ba9555a024f97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
