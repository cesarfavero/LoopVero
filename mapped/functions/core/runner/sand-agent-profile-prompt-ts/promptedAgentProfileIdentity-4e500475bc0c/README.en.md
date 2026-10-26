# `promptedAgentProfileIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-agent-profile-prompt.ts` · [Module README](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529771-529774](../../../../../../reference/runtime/sand-eval-runner.cjs#L529771-L529774) | `FunctionDeclaration` | no | `profile, isDescriptionPrompted` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529771-529774](../../../../../../reference/runtime/sand-eval-runner.cjs#L529771-L529774) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529771

Calls written directly in this body: `normalizeAgentProfileIdentity`.

SHA-256 of the source span: `63d9bb526b5b64e03ee2b71b4c98c2ec3730b54c9e94819b74f3296773a879ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
