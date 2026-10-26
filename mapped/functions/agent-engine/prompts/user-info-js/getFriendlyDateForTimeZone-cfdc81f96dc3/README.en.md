# `getFriendlyDateForTimeZone`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639947-639958](../../../../../../reference/runtime/host-main.cjs#L639947-L639958) | `FunctionDeclaration` | no | `timeZone, mockNow` |
| [evaluation:430561-430572](../../../../../../reference/runtime/sand-eval-runner.cjs#L430561-L430572) | `FunctionDeclaration` | no | `timeZone, mockNow` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639947-639958](../../../../../../reference/runtime/host-main.cjs#L639947-L639958) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:430561-430572](../../../../../../reference/runtime/sand-eval-runner.cjs#L430561-L430572) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:639947

Calls written directly in this body: `.split`, `buildFriendlyDate`, `new Date`, `now.toISOString`.

SHA-256 of the source span: `00dcc639599cf6a9376ecbd41abcca589ba4bc121da01a657ae0213392e6c31c`.

### evaluation:430561

Calls written directly in this body: `.split`, `buildFriendlyDate`, `new Date`, `now.toISOString`.

SHA-256 of the source span: `00dcc639599cf6a9376ecbd41abcca589ba4bc121da01a657ae0213392e6c31c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
