# `beginGatewayCommandTrace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/send-trace-host.ts` · [Module README](../../../../modules/core/send-trace-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:484142-484144](../../../../../reference/runtime/host-main.cjs#L484142-L484144) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:484142-484144](../../../../../reference/runtime/host-main.cjs#L484142-L484144) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:484142

Calls written directly in this body: `adoptRemoteParent`.

SHA-256 of the source span: `f2c8eb1a78d011ddd48fea33eca3ac6fb36b4d54c0da096bc810825ceb0237ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
