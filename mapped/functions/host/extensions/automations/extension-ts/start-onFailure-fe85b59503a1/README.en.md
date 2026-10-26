# `start/onFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/extension.ts` · [Module README](../../../../../../modules/host/extensions/automations/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505945-505954](../../../../../../../reference/runtime/host-main.cjs#L505945-L505954) | `ArrowFunctionExpression` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505945-505954](../../../../../../../reference/runtime/host-main.cjs#L505945-L505954) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:505945

Calls written directly in this body: `automationSyncFailureTrayIds.has`, `automationSyncFailureTrayIds.set`, `context2.deps.trays.pushError`, `hostTrayTitle`.

SHA-256 of the source span: `8744c66b9c7d9b6dd89bc28ff1389494433a68d81fbb92a404677a6443f5cfbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
