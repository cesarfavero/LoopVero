# `isRepoAccessShapedRejection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509219-509225](../../../../../../../reference/runtime/host-main.cjs#L509219-L509225) | `FunctionDeclaration` | no | `rejection` |
| [evaluation:556944-556950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556944-L556950) | `FunctionDeclaration` | no | `rejection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509219-509225](../../../../../../../reference/runtime/host-main.cjs#L509219-L509225) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556944-556950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556944-L556950) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509219

Calls written directly in this body: `/deleted, renamed, made private|not linked for this workspace|do(?:es)? not have access|not accessible|no .*access token found with access|removed from the .* installation|permission denied/i.test`, `/repositor/i.test`.

SHA-256 of the source span: `9873d470fc94e0314704f4c0eda1c12756e3a48c4cf7fd6cf3c8f665c4eca86b`.

### evaluation:556944

Calls written directly in this body: `/deleted, renamed, made private|not linked for this workspace|do(?:es)? not have access|not accessible|no .*access token found with access|removed from the .* installation|permission denied/i.test`, `/repositor/i.test`.

SHA-256 of the source span: `9873d470fc94e0314704f4c0eda1c12756e3a48c4cf7fd6cf3c8f665c4eca86b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
