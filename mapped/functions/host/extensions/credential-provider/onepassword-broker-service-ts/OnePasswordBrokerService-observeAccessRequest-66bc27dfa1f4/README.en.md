# `OnePasswordBrokerService.observeAccessRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550969-550980](../../../../../../../reference/runtime/host-main.cjs#L550969-L550980) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550969-550980](../../../../../../../reference/runtime/host-main.cjs#L550969-L550980) | 2 | 0 | 2 | 2 | 0 | 0 |

### host:550969

Calls written directly in this body: `this.adoptAccessRequest`, `this.withSession`.

SHA-256 of the source span: `5827f92e8601df38230d3a24703d4f3b4a00b21336e46cc50abd4155423ae65e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
