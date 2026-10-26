# `shoppingText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741260-741260](../../../../../../../reference/runtime/host-main.cjs#L741260-L741260) | `ArrowFunctionExpression` | no | `max` |
| [evaluation:482207-482207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482207-L482207) | `ArrowFunctionExpression` | no | `max` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741260-741260](../../../../../../../reference/runtime/host-main.cjs#L741260-L741260) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:741260 uses an implicit arrow-function return.
| [evaluation:482207-482207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482207-L482207) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:482207 uses an implicit arrow-function return.

### host:741260

Calls written directly in this body: `.max`, `external_exports2.string`.

SHA-256 of the source span: `bc3406c64af093452f2a1225909cd8866fd510aa9cc1b6d2a5db370e2ad6fd7a`.

### evaluation:482207

Calls written directly in this body: `.max`, `external_exports3.string`.

SHA-256 of the source span: `95dbe3a9a12436d83b20a537869ab1e28c8fe62b6211c7f39ffebde62c4a121d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
