# `startCredentialProvider/installAndArm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/extension.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551568-551604](../../../../../../../reference/runtime/host-main.cjs#L551568-L551604) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551568-551604](../../../../../../../reference/runtime/host-main.cjs#L551568-L551604) | 9 | 0 | 4 | 2 | 0 | 0 |

### host:551568

Calls written directly in this body: `applyMarker`, `context2.deps.telemetry.logs.reportOnePasswordExtensionInstall`, `context2.host.log`, `installOnePasswordExtension`, `probeExtensionApi`, `removeOnePasswordExtension`.

Assignment or increment targets: `installedExtension`, `summary`.

SHA-256 of the source span: `77daf9813d2b345623c5123af3ac78ec36fd0411ff152e418d41b94d43ee0cfe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
