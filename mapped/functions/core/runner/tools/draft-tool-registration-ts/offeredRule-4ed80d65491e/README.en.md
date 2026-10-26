# `offeredRule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756304-756316](../../../../../../../reference/runtime/host-main.cjs#L756304-L756316) | `FunctionDeclaration` | no | `emission, instructions, ruleProposal, agentRuleAllowed` |
| [evaluation:542225-542237](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542225-L542237) | `FunctionDeclaration` | no | `emission, instructions, ruleProposal, agentRuleAllowed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756304-756316](../../../../../../../reference/runtime/host-main.cjs#L756304-L756316) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:542225-542237](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542225-L542237) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:756304

Calls written directly in this body: `.find`, `agentProposedRule`, `draftDestinations`, `offerable`, `recipientRule`.

SHA-256 of the source span: `3c545315f601b71243da4dbb5727991bdc288fda78cd1e8720bd04e435cdbb63`.

### evaluation:542225

Calls written directly in this body: `.find`, `agentProposedRule`, `draftDestinations`, `offerable`, `recipientRule`.

SHA-256 of the source span: `3c545315f601b71243da4dbb5727991bdc288fda78cd1e8720bd04e435cdbb63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
