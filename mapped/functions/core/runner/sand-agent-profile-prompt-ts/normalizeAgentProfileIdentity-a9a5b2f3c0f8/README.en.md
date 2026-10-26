# `normalizeAgentProfileIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-agent-profile-prompt.ts` · [Module README](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529768-529770](../../../../../../reference/runtime/sand-eval-runner.cjs#L529768-L529770) | `FunctionDeclaration` | no | `profile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529768-529770](../../../../../../reference/runtime/sand-eval-runner.cjs#L529768-L529770) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529768

Calls written directly in this body: `profile.description.trim`, `profile.name.trim`.

SHA-256 of the source span: `f8d5c2925623bf99fb94012b924129ba5a3359164f34edd97fdb0844f11f3169`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
