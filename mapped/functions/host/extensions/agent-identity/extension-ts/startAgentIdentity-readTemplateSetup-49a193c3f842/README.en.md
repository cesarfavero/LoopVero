# `startAgentIdentity/readTemplateSetup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496676-496687](../../../../../../../reference/runtime/host-main.cjs#L496676-L496687) | `ArrowFunctionExpression` | yes | `blobGetUrl, gettingStartedTrusted` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496676-496687](../../../../../../../reference/runtime/host-main.cjs#L496676-L496687) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:496676

Calls written directly in this body: `context2.host.log`, `downloadTemplateRecipe`, `errorLogTag`, `importedTemplateSetupFromRecipe`.

SHA-256 of the source span: `7bd7fe479bda06e4b0b37af0b8ae0d5d70d01bffeb225f11bca1027b1e851578`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
