# `resolveSandAgentKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-kinds.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-kinds-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754413-754427](../../../../../../../reference/runtime/host-main.cjs#L754413-L754427) | `FunctionDeclaration` | no | `runner` |
| [evaluation:536881-536895](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536881-L536895) | `FunctionDeclaration` | no | `runner` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754413-754427](../../../../../../../reference/runtime/host-main.cjs#L754413-L754427) | 11 | 0 | 0 | 12 | 0 | 0 |
| [evaluation:536881-536895](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536881-L536895) | 11 | 0 | 0 | 12 | 0 | 0 |

### host:754413

Calls written directly in this body: `isCarryOverSubagentType`, `isComputerUseSubagentType`, `isDreamSubagentType`, `isKnowledgeWorkSubagentType`, `isMediaReviewSubagentType`, `isMeetingRequestSubagentType`, `isSkillsSubagentType`, `isSortMemoriesSubagentType`, `isUserComputerUseSubagentType`.

SHA-256 of the source span: `c2ead7c10876ed19f936b795b0d4151c522fbe79b6e495e5e48dc5fbde2a1669`.

### evaluation:536881

Calls written directly in this body: `isCarryOverSubagentType`, `isComputerUseSubagentType`, `isDreamSubagentType`, `isKnowledgeWorkSubagentType`, `isMediaReviewSubagentType`, `isMeetingRequestSubagentType`, `isSkillsSubagentType`, `isSortMemoriesSubagentType`, `isUserComputerUseSubagentType`.

SHA-256 of the source span: `c2ead7c10876ed19f936b795b0d4151c522fbe79b6e495e5e48dc5fbde2a1669`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
