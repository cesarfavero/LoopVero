# `promptCacheKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533200-533260](../../../../../../reference/runtime/sand-eval-runner.cjs#L533200-L533260) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533200-533260](../../../../../../reference/runtime/sand-eval-runner.cjs#L533200-L533260) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533200

Calls written directly in this body: `JSON.stringify`, `agentEmailUnavailableLine`, `namedRiskScopeLine`, `normalizeConnectorSearchFirstText`, `normalizeUnblockResearchWhen`, `recentChangesApplies`, `scopedSafetyChecksCopy`, `substituteConnectorClaimsLine`, `unblockResearchApplies`, `userProxyIdentityLine`.

SHA-256 of the source span: `34e842fe97e4f59247e7d9b2234ea0792d378044ac439c85fa0e82665ab51133`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
