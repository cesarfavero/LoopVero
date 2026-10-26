# `includesAgentProfileUpdateMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-agent-profile-prompt.ts` · [Module README](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717235-717237](../../../../../../reference/runtime/host-main.cjs#L717235-L717237) | `FunctionDeclaration` | no | `text3` |
| [evaluation:529764-529766](../../../../../../reference/runtime/sand-eval-runner.cjs#L529764-L529766) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717235-717237](../../../../../../reference/runtime/host-main.cjs#L717235-L717237) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:529764-529766](../../../../../../reference/runtime/sand-eval-runner.cjs#L529764-L529766) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:717235

Calls written directly in this body: `AGENT_PROFILE_UPDATE_MARKERS.some`.

SHA-256 of the source span: `063f5d1301bc32e7e31d6e5485b3a4a2f71af926fe4766e002dbcb3e934709a1`.

### evaluation:529764

Calls written directly in this body: `AGENT_PROFILE_UPDATE_MARKERS.some`.

SHA-256 of the source span: `063f5d1301bc32e7e31d6e5485b3a4a2f71af926fe4766e002dbcb3e934709a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
