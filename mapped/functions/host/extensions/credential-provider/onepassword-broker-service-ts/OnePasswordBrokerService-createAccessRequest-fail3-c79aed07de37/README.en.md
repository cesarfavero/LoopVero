# `OnePasswordBrokerService.createAccessRequest/fail3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550843-550852](../../../../../../../reference/runtime/host-main.cjs#L550843-L550852) | `ArrowFunctionExpression` | no | `reason, detail, extensionApi` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550843-550852](../../../../../../../reference/runtime/host-main.cjs#L550843-L550852) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:550843

Calls written directly in this body: `auditReasonFor`, `this.options.audit`.

SHA-256 of the source span: `a19091db7ec21e9194e8d75fb7e74652b91fcb8b608aa0b969c5a700101184ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
