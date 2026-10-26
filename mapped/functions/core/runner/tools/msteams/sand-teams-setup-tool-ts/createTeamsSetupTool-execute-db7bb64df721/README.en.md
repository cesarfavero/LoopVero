# `createTeamsSetupTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/msteams/sand-teams-setup-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/msteams/sand-teams-setup-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781277-781277](../../../../../../../../reference/runtime/host-main.cjs#L781277-L781277) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:581624-581624](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581624-L581624) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781277-781277](../../../../../../../../reference/runtime/host-main.cjs#L781277-L781277) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781277 uses an implicit arrow-function return.
| [evaluation:581624-581624](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581624-L581624) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581624 uses an implicit arrow-function return.

### host:781277

Calls written directly in this body: `executeTeamsSetup`.

SHA-256 of the source span: `c962786e3bb3f2b3d87096429e4af4a57dfe0e3276c5f4169ee8f87d773eee92`.

### evaluation:581624

Calls written directly in this body: `executeTeamsSetup`.

SHA-256 of the source span: `c962786e3bb3f2b3d87096429e4af4a57dfe0e3276c5f4169ee8f87d773eee92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
