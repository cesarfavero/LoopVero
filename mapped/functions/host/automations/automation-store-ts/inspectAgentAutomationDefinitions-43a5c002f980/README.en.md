# `inspectAgentAutomationDefinitions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720437-720483](../../../../../../reference/runtime/host-main.cjs#L720437-L720483) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720437-720483](../../../../../../reference/runtime/host-main.cjs#L720437-L720483) | 5 | 1 | 0 | 5 | 0 | 4 |

### host:720437

Calls written directly in this body: `.isDirectory`, `Date.now`, `Math.floor`, `entry.isDirectory`, `getAgentAutomationsDir`, `isSafeFolderId`, `parseStoredConfig`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `candidateCount`, `entries`, `fallbackCreatedAt`, `raw`, `validDefinitionCount`.

SHA-256 of the source span: `e91dc219cae77adfd9f13e07a92f44949266849ffae18eb4dfc60ae76eeaa724`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
