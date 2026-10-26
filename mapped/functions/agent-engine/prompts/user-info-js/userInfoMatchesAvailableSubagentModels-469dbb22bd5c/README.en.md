# `userInfoMatchesAvailableSubagentModels`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640475-640480](../../../../../../reference/runtime/host-main.cjs#L640475-L640480) | `FunctionDeclaration` | no | `content, description9` |
| [evaluation:431089-431094](../../../../../../reference/runtime/sand-eval-runner.cjs#L431089-L431094) | `FunctionDeclaration` | no | `content, description9` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640475-640480](../../../../../../reference/runtime/host-main.cjs#L640475-L640480) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431089-431094](../../../../../../reference/runtime/sand-eval-runner.cjs#L431089-L431094) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640475

Calls written directly in this body: `content.includes`, `renderAvailableSubagentModelsSection`.

SHA-256 of the source span: `1ecc2f17f2ba12168b9331f1f434b60fcb3cba922b0fe11660a905234e1a2570`.

### evaluation:431089

Calls written directly in this body: `content.includes`, `renderAvailableSubagentModelsSection`.

SHA-256 of the source span: `1ecc2f17f2ba12168b9331f1f434b60fcb3cba922b0fe11660a905234e1a2570`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
