# `BrowserCredentialFiller.pickFillTarget/refuse2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548108-548117](../../../../../../../reference/runtime/host-main.cjs#L548108-L548117) | `ArrowFunctionExpression` | no | `reason, detail` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548108-548117](../../../../../../../reference/runtime/host-main.cjs#L548108-L548117) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:548108

Calls written directly in this body: `this.auditFill`.

SHA-256 of the source span: `1ee1b34c4b03c9b57a603726f97a48f29d493195a84e97387fb0b36fc3a3d625`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
