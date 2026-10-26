# `migrateAutomationConfigToMinimumInterval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716681-716700](../../../../../../reference/runtime/host-main.cjs#L716681-L716700) | `FunctionDeclaration` | no | `config2, minimumIntervalMs` |
| [evaluation:627395-627414](../../../../../../reference/runtime/sand-eval-runner.cjs#L627395-L627414) | `FunctionDeclaration` | no | `config2, minimumIntervalMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716681-716700](../../../../../../reference/runtime/host-main.cjs#L716681-L716700) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627395-627414](../../../../../../reference/runtime/sand-eval-runner.cjs#L627395-L627414) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:716681

Calls written directly in this body: `.map`, `config2.pendingNotices.includes`, `triggerFromList`, `triggerList`.

SHA-256 of the source span: `4766e8d4c0bcf41deb3d35fd3bd17739445754d81b3673df5be56ed75d015343`.

### evaluation:627395

Calls written directly in this body: `.map`, `config2.pendingNotices.includes`, `triggerFromList`, `triggerList`.

SHA-256 of the source span: `5a6538ffd76b29fc550b38697ff8a339bde1e0aa653613dcde8b057bbaab8350`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
