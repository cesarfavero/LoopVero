# `createReactToMicrosoftTeamsMessageTool/describeActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/teams/sand-teams-reaction-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/teams/sand-teams-reaction-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768333-768336](../../../../../../../../reference/runtime/host-main.cjs#L768333-L768336) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:563849-563852](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563849-L563852) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768333-768336](../../../../../../../../reference/runtime/host-main.cjs#L768333-L768336) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:768333 uses an implicit arrow-function return.
| [evaluation:563849-563852](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563849-L563852) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:563849 uses an implicit arrow-function return.

### host:768333

Calls written directly in this body: `args.conversation.trim`, `args.reaction.trim`.

SHA-256 of the source span: `9d81fc9028846da872ec242a076f992e2cb5563443be9ba50fcdf8ba6fbb1364`.

### evaluation:563849

Calls written directly in this body: `args.conversation.trim`, `args.reaction.trim`.

SHA-256 of the source span: `9d81fc9028846da872ec242a076f992e2cb5563443be9ba50fcdf8ba6fbb1364`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
