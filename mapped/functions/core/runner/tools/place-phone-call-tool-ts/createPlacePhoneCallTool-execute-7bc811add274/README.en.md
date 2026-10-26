# `createPlacePhoneCallTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/place-phone-call-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/place-phone-call-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763674-763674](../../../../../../../reference/runtime/host-main.cjs#L763674-L763674) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:556716-556716](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556716-L556716) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763674-763674](../../../../../../../reference/runtime/host-main.cjs#L763674-L763674) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:763674 uses an implicit arrow-function return.
| [evaluation:556716-556716](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556716-L556716) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:556716 uses an implicit arrow-function return.

### host:763674

Calls written directly in this body: `placePhoneCall`.

SHA-256 of the source span: `5d5aa59865c97ca339fbf87dd3c81016ba0aeaf384fb2cbe455fc59605e29ec6`.

### evaluation:556716

Calls written directly in this body: `placePhoneCall`.

SHA-256 of the source span: `5d5aa59865c97ca339fbf87dd3c81016ba0aeaf384fb2cbe455fc59605e29ec6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
