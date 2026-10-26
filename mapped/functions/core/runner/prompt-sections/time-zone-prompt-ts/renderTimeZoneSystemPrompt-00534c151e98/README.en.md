# `renderTimeZoneSystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/time-zone-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/time-zone-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538925-538932](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538925-L538932) | `FunctionDeclaration` | no | `timeZone, now = /* @__PURE__ */ new Date()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538925-538932](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538925-L538932) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538925

Calls written directly in this body: `.join`, `formatSandTimeZoneWithOffset`.

SHA-256 of the source span: `99ab81632bb0344ba1ba7fac7fe9248bdaa35a1078162a00b16bfc12377a467f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
