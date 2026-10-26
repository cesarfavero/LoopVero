# `createDeleteOwnMicrosoftTeamsMessageTool/describeActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/teams/sand-teams-message-delete-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/teams/sand-teams-message-delete-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768374-768377](../../../../../../../../reference/runtime/host-main.cjs#L768374-L768377) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:563890-563893](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563890-L563893) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768374-768377](../../../../../../../../reference/runtime/host-main.cjs#L768374-L768377) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:768374 uses an implicit arrow-function return.
| [evaluation:563890-563893](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563890-L563893) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:563890 uses an implicit arrow-function return.

### host:768374

Calls written directly in this body: `args.activity_id.trim`, `args.conversation.trim`.

SHA-256 of the source span: `0a7e0002ab957c2fbeb4077a52e2f388b1cf7ddb2eb95b983d6a4005e5548483`.

### evaluation:563890

Calls written directly in this body: `args.activity_id.trim`, `args.conversation.trim`.

SHA-256 of the source span: `0a7e0002ab957c2fbeb4077a52e2f388b1cf7ddb2eb95b983d6a4005e5548483`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
