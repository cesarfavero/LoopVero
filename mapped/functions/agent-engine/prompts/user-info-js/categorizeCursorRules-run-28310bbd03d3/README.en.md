# `categorizeCursorRules/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640659-640704](../../../../../../reference/runtime/host-main.cjs#L640659-L640704) | `ArrowFunctionExpression` | no | `usage` |
| [evaluation:431273-431318](../../../../../../reference/runtime/sand-eval-runner.cjs#L431273-L431318) | `ArrowFunctionExpression` | no | `usage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640659-640704](../../../../../../reference/runtime/host-main.cjs#L640659-L640704) | 11 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:431273-431318](../../../../../../reference/runtime/sand-eval-runner.cjs#L431273-L431318) | 11 | 1 | 0 | 1 | 0 | 0 |

### host:640659

Calls written directly in this body: `Buffer.byteLength`, `agentRequestableRules.push`, `globalRules.push`, `hasDisableModelInvocation`, `isFileScopedCursorRule`, `isSkillPath`, `skills.push`, `usage.add`, `userRules.push`.

SHA-256 of the source span: `a916ffa81d6f39f58072c24c0ed2dc5a421e643ae5ca8d2a3577a0ce9d821116`.

### evaluation:431273

Calls written directly in this body: `Buffer.byteLength`, `agentRequestableRules.push`, `globalRules.push`, `hasDisableModelInvocation`, `isFileScopedCursorRule`, `isSkillPath`, `skills.push`, `usage.add`, `userRules.push`.

SHA-256 of the source span: `a916ffa81d6f39f58072c24c0ed2dc5a421e643ae5ca8d2a3577a0ce9d821116`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
