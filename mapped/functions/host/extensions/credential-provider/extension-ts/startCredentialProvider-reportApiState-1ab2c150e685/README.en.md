# `startCredentialProvider/reportApiState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/extension.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551680-551683](../../../../../../../reference/runtime/host-main.cjs#L551680-L551683) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551680-551683](../../../../../../../reference/runtime/host-main.cjs#L551680-L551683) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:551680 uses an implicit arrow-function return.

### host:551680

Calls written directly in this body: `context2.deps.telemetry.logs.reportOnePasswordExtensionApiState`, `extensionHost`.

SHA-256 of the source span: `42050637488ba9e4928854b334695dae654e57a91affa341b35539899af313f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
