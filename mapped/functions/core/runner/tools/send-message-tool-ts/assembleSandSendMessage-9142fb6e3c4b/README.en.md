# `assembleSandSendMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760780-760783](../../../../../../../reference/runtime/host-main.cjs#L760780-L760783) | `FunctionDeclaration` | yes | `ctx, rawArgs, deps, threadTask, cards` |
| [evaluation:551595-551598](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551595-L551598) | `FunctionDeclaration` | yes | `ctx, rawArgs, deps, threadTask, cards` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760780-760783](../../../../../../../reference/runtime/host-main.cjs#L760780-L760783) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:551595-551598](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551595-L551598) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:760780

Calls written directly in this body: `assembleMessageBody`.

SHA-256 of the source span: `c8db85a264e4fc3a3a29c88528d82aa59aedc51017aa322d4e405e85306bfa75`.

### evaluation:551595

Calls written directly in this body: `assembleMessageBody`.

SHA-256 of the source span: `c8db85a264e4fc3a3a29c88528d82aa59aedc51017aa322d4e405e85306bfa75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
