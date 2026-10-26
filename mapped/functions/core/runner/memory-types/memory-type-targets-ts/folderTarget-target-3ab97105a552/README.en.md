# `folderTarget/target`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-type-targets.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-type-targets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771570-771576](../../../../../../../reference/runtime/host-main.cjs#L771570-L771576) | `ArrowFunctionExpression` | no | `scope, folder` |
| [evaluation:570803-570809](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570803-L570809) | `ArrowFunctionExpression` | no | `scope, folder` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771570-771576](../../../../../../../reference/runtime/host-main.cjs#L771570-L771576) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:771570 uses an implicit arrow-function return.
| [evaluation:570803-570809](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570803-L570809) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:570803 uses an implicit arrow-function return.

### host:771570

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8cb47f08880c02f3e307c78ab340eeae6b397a688ce9d146abf10171144f513f`.

### evaluation:570803

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8cb47f08880c02f3e307c78ab340eeae6b397a688ce9d146abf10171144f513f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
