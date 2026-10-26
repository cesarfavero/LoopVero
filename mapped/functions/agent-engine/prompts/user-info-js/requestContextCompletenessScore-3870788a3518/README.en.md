# `requestContextCompletenessScore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639808-639810](../../../../../../reference/runtime/host-main.cjs#L639808-L639810) | `FunctionDeclaration` | no | `completeness` |
| [evaluation:430422-430424](../../../../../../reference/runtime/sand-eval-runner.cjs#L430422-L430424) | `FunctionDeclaration` | no | `completeness` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639808-639810](../../../../../../reference/runtime/host-main.cjs#L639808-L639810) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430422-430424](../../../../../../reference/runtime/sand-eval-runner.cjs#L430422-L430424) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:639808

Calls written directly in this body: `REQUEST_CONTEXT_COMPLETENESS_KEYS.filter`.

SHA-256 of the source span: `d2173dc68e02988fc393fed23d5af536c392478de240165f4f537594e82ef9c1`.

### evaluation:430422

Calls written directly in this body: `REQUEST_CONTEXT_COMPLETENESS_KEYS.filter`.

SHA-256 of the source span: `d2173dc68e02988fc393fed23d5af536c392478de240165f4f537594e82ef9c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
