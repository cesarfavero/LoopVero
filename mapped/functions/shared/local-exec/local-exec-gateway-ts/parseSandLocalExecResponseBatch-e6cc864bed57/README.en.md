# `parseSandLocalExecResponseBatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/gateway/README.en.md).

**Module:** `shared/local-exec/local-exec-gateway.ts` · [Module README](../../../../../modules/shared/local-exec/local-exec-gateway-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486687-486693](../../../../../../reference/runtime/host-main.cjs#L486687-L486693) | `FunctionDeclaration` | no | `u2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486687-486693](../../../../../../reference/runtime/host-main.cjs#L486687-L486693) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:486687

Calls written directly in this body: `describeZodIssues`, `new SandWireParseError`, `sandLocalExecResponseBatchSchema.safeParse`.

Explicit throw targets: `SandWireParseError`.

SHA-256 of the source span: `2c6762255671405558279e38259f4963e295bff2b332d72074ea2df51aeda3b1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
