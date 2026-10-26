# `startCredentialProvider/probeExtensionApi`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/extension.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551540-551561](../../../../../../../reference/runtime/host-main.cjs#L551540-L551561) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551540-551561](../../../../../../../reference/runtime/host-main.cjs#L551540-L551561) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:551540

Calls written directly in this body: `.start`, `createPollingPolicy2`, `probing.stopped.then`.

SHA-256 of the source span: `69b1c589dd7b326485de511eefcd11bf4b1237be974d7378d082ee219dd226fe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
