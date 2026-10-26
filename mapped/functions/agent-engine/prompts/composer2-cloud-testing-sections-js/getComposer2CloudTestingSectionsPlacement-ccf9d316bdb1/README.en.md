# `getComposer2CloudTestingSectionsPlacement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/composer2-cloud-testing-sections.js` · [Module README](../../../../../modules/agent-engine/prompts/composer2-cloud-testing-sections-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:638527-638536](../../../../../../reference/runtime/host-main.cjs#L638527-L638536) | `FunctionDeclaration` | no | `props` |
| [evaluation:429120-429129](../../../../../../reference/runtime/sand-eval-runner.cjs#L429120-L429129) | `FunctionDeclaration` | no | `props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:638527-638536](../../../../../../reference/runtime/host-main.cjs#L638527-L638536) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:429120-429129](../../../../../../reference/runtime/sand-eval-runner.cjs#L429120-L429129) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:638527

Calls written directly in this body: `isCloudAgentTestingPromptEligibleEnvironment`, `isNamedAgentHomePromptSession`, `shouldUseExperimentalCloudBehavior`.

SHA-256 of the source span: `808b7283ce20b5b5b708c25b882782e2967fbacd54e29a6cb930055a1df33790`.

### evaluation:429120

Calls written directly in this body: `isCloudAgentTestingPromptEligibleEnvironment`, `isNamedAgentHomePromptSession`, `shouldUseExperimentalCloudBehavior`.

SHA-256 of the source span: `808b7283ce20b5b5b708c25b882782e2967fbacd54e29a6cb930055a1df33790`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
