# `startCredentialProvider/applyMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/extension.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551520-551534](../../../../../../../reference/runtime/host-main.cjs#L551520-L551534) | `ArrowFunctionExpression` | yes | `armed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551520-551534](../../../../../../../reference/runtime/host-main.cjs#L551520-L551534) | 2 | 0 | 1 | 0 | 0 | 0 |

### host:551520

Calls written directly in this body: `.catch`, `applyOnePasswordExtensionMarker`, `context2.host.log`.

SHA-256 of the source span: `0217919ade7d13a203f56150cc74d6f6e495e04a83fc9c35d779584bfb874b60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
