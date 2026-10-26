# `createDeleteOwnSlackMessageTool/describeActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/slack/sand-slack-message-delete-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/slack/sand-slack-message-delete-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768245-768245](../../../../../../../../reference/runtime/host-main.cjs#L768245-L768245) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:563761-563761](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563761-L563761) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768245-768245](../../../../../../../../reference/runtime/host-main.cjs#L768245-L768245) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:768245 uses an implicit arrow-function return.
| [evaluation:563761-563761](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563761-L563761) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:563761 uses an implicit arrow-function return.

### host:768245

Calls written directly in this body: `args.channel.trim`, `args.message_ts.trim`.

SHA-256 of the source span: `7f32ae17929d260d4691da392b947f865bc213d1dc848c2972d41cd2ce06aa32`.

### evaluation:563761

Calls written directly in this body: `args.channel.trim`, `args.message_ts.trim`.

SHA-256 of the source span: `7f32ae17929d260d4691da392b947f865bc213d1dc848c2972d41cd2ce06aa32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
