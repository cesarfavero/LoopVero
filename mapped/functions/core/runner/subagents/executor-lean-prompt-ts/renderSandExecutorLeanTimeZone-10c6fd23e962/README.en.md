# `renderSandExecutorLeanTimeZone`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/executor-lean-prompt.ts` · [Module README](../../../../../../modules/core/runner/subagents/executor-lean-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552570-552576](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552570-L552576) | `FunctionDeclaration` | no | `timeZone, now = /* @__PURE__ */ new Date()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552570-552576](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552570-L552576) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:552570

Calls written directly in this body: `.join`, `formatSandTimeZoneWithOffset`.

SHA-256 of the source span: `cf402604fd6933f4ff41ec832a184699949bb26bbc890ce6305593aefa3d2848`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
