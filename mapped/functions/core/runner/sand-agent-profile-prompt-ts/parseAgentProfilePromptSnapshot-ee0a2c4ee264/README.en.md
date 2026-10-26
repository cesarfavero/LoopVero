# `parseAgentProfilePromptSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-agent-profile-prompt.ts` · [Module README](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717245-717270](../../../../../../reference/runtime/host-main.cjs#L717245-L717270) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717245-717270](../../../../../../reference/runtime/host-main.cjs#L717245-L717270) | 9 | 0 | 0 | 8 | 0 | 1 |

### host:717245

Calls written directly in this body: `JSON.parse`, `Number.isFinite`, `parseAgentProfileIdentity`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `50ebcaeaf6c7d1c55845451397977bfc26925fca09e18ab576f120be00152c45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
