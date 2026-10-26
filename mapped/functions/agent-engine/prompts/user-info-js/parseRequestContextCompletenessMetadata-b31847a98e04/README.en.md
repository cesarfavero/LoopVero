# `parseRequestContextCompletenessMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639815-639829](../../../../../../reference/runtime/host-main.cjs#L639815-L639829) | `FunctionDeclaration` | no | `value` |
| [evaluation:430429-430443](../../../../../../reference/runtime/sand-eval-runner.cjs#L430429-L430443) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639815-639829](../../../../../../reference/runtime/host-main.cjs#L639815-L639829) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:430429-430443](../../../../../../reference/runtime/sand-eval-runner.cjs#L430429-L430443) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:639815

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `parsed2[computed]`.

SHA-256 of the source span: `ec85970164cad5ca27d4bdfdd959c1d0dec21ea13f984f0b7a77cfd351875242`.

### evaluation:430429

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `parsed[computed]`.

SHA-256 of the source span: `6d29a2bd1d9fbdb75b4c63c8df1b49832ac4928c328828c479be48ea1ace30cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
