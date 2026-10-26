# `readHostSandUiFacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `host/extensions/forever-box/prompt-artifacts.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/prompt-artifacts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680754-680784](../../../../../../../reference/runtime/host-main.cjs#L680754-L680784) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680754-680784](../../../../../../../reference/runtime/host-main.cjs#L680754-L680784) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:680754

Calls written directly in this body: `accountCanRunTeamBots`, `isFlagName`, `source.getAdminPolicy`, `source.getPhoneGates`, `source.hasAuthenticatedBootstrap`, `source.peekFeatureGate`.

Assignment or increment targets: `gates[computed]`, `phoneGates`, `sandUiAct`, `sandUiMap`, `sandUiOpen`.

SHA-256 of the source span: `97f134194ac5e84993f2c5631eb4fb1702be451ee0e825d595cd789377b24ce6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
