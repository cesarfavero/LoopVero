# `BrowserCredentialFiller.fillSelectedTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547833-547897](../../../../../../../reference/runtime/host-main.cjs#L547833-L547897) | `method` | yes | `targetWebSocketDebuggerUrl, request5, event = "allow-once", options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547833-547897](../../../../../../../reference/runtime/host-main.cjs#L547833-L547897) | 4 | 0 | 2 | 4 | 0 | 0 |

### host:547833

Calls written directly in this body: `clearanceOf`, `credentialFillAuditResult`, `credentialFillFailureDetail`, `discovery.targets.find`, `filledLoginDetail`, `hostFromSite`, `matchCredentialItemToSite`, `stepOf`, `this.auditFill`, `this.executeTargetFill`, `this.listPages`, `trustedBrowserOrigin`.

SHA-256 of the source span: `c2fc0da2379424770ff20d15a7b97a86dcb487b380c2e34bee4b6b1ff5b33d4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
