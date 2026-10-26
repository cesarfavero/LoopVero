# `reportCoercion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724947-724949](../../../../../../../../reference/runtime/host-main.cjs#L724947-L724949) | `FunctionDeclaration` | no | `value, coerced` |
| [evaluation:479910-479912](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479910-L479912) | `FunctionDeclaration` | no | `value, coerced` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724947-724949](../../../../../../../../reference/runtime/host-main.cjs#L724947-L724949) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479910-479912](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479910-L479912) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724947

Calls written directly in this body: `reportShim`, `schemaArgCoercion.applied`.

SHA-256 of the source span: `ea115d5718741d40e20349f869d639cd0f119fb92f286bcb7aee2a8ff5cc52fe`.

### evaluation:479910

Calls written directly in this body: `reportShim`, `schemaArgCoercion.applied`.

SHA-256 of the source span: `ea115d5718741d40e20349f869d639cd0f119fb92f286bcb7aee2a8ff5cc52fe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
