# `frameClassification`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-fill-policy.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766682-766688](../../../../../../../../reference/runtime/host-main.cjs#L766682-L766688) | `FunctionDeclaration` | no | `target, frame, top` |
| [evaluation:562195-562201](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562195-L562201) | `FunctionDeclaration` | no | `target, frame, top` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766682-766688](../../../../../../../../reference/runtime/host-main.cjs#L766682-L766688) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:562195-562201](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562195-L562201) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:766682

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `98b3256173ce4042ed0b63a3da00fd5492532e2d75ad155825cba8c3ff60eac6`.

### evaluation:562195

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `98b3256173ce4042ed0b63a3da00fd5492532e2d75ad155825cba8c3ff60eac6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
