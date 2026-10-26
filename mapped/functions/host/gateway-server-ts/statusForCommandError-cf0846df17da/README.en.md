# `statusForCommandError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493302-493311](../../../../../reference/runtime/host-main.cjs#L493302-L493311) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493302-493311](../../../../../reference/runtime/host-main.cjs#L493302-L493311) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:493302

Calls written directly in this body: `DOMAIN_REFUSALS.some`, `GATEWAY_FAILURE_CODES.has`, `isEdgeFailureOf`.

SHA-256 of the source span: `ce9f8bdcd864521957f41b882d4e670e88e3f9427a595423fa95467743581ed5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
