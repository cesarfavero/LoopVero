# `coerceToolArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724950-724952](../../../../../../../../reference/runtime/host-main.cjs#L724950-L724952) | `FunctionDeclaration` | no | `schema3, value` |
| [evaluation:479913-479915](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479913-L479915) | `FunctionDeclaration` | no | `schema3, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724950-724952](../../../../../../../../reference/runtime/host-main.cjs#L724950-L724952) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479913-479915](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479913-L479915) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724950

Calls written directly in this body: `coerceValue`, `reportCoercion`.

SHA-256 of the source span: `5837e43bc993c0deebc99ced4bb04d0290327e54718a876cd19c0accb5c0e982`.

### evaluation:479913

Calls written directly in this body: `coerceValue`, `reportCoercion`.

SHA-256 of the source span: `5837e43bc993c0deebc99ced4bb04d0290327e54718a876cd19c0accb5c0e982`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
