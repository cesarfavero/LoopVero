# `shouldRerenderUserInfoForRequestContextRecovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639830-639835](../../../../../../reference/runtime/host-main.cjs#L639830-L639835) | `FunctionDeclaration` | no | `params` |
| [evaluation:430444-430449](../../../../../../reference/runtime/sand-eval-runner.cjs#L430444-L430449) | `FunctionDeclaration` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639830-639835](../../../../../../reference/runtime/host-main.cjs#L639830-L639835) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430444-430449](../../../../../../reference/runtime/sand-eval-runner.cjs#L430444-L430449) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:639830

Calls written directly in this body: `isRequestContextComplete`, `requestContextCompletenessIsStrictlyMoreComplete`.

SHA-256 of the source span: `daa54aae4529030e797d620ccdf96807878b295d65ab15c99049757fe27c8f18`.

### evaluation:430444

Calls written directly in this body: `isRequestContextComplete`, `requestContextCompletenessIsStrictlyMoreComplete`.

SHA-256 of the source span: `daa54aae4529030e797d620ccdf96807878b295d65ab15c99049757fe27c8f18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
