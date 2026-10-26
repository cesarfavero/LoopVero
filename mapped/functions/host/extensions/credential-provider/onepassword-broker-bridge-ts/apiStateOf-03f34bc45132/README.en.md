# `apiStateOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549524-549543](../../../../../../../reference/runtime/host-main.cjs#L549524-L549543) | `FunctionDeclaration` | no | `envelope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549524-549543](../../../../../../../reference/runtime/host-main.cjs#L549524-L549543) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:549524

Calls written directly in this body: `apiStateEnvelopeSchema.safeParse`, `flagFetchStatusClass`, `namespaces.includes`.

Assignment or increment targets: `settled`.

SHA-256 of the source span: `46830b948bad11140ca382cd2cdbce69c70c7e6891668bff2388327f45745c0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
