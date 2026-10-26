# `OnePasswordBrokerService.fill/fillOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551147-551150](../../../../../../../reference/runtime/host-main.cjs#L551147-L551150) | `ArrowFunctionExpression` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551147-551150](../../../../../../../reference/runtime/host-main.cjs#L551147-L551150) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:551147 uses an implicit arrow-function return.

### host:551147

Calls written directly in this body: `this.options.bridge.fillCredential`.

SHA-256 of the source span: `a7f1ecf56cd93f1c1a39b4c13449f13ec322c779ac8d84fae81aea7c80bc202b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
