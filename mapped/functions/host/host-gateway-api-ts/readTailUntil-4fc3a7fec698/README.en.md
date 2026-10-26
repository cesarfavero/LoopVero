# `readTailUntil`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491849-491865](../../../../../reference/runtime/host-main.cjs#L491849-L491865) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491849-491865](../../../../../reference/runtime/host-main.cjs#L491849-L491865) | 3 | 1 | 1 | 1 | 0 | 0 |

### host:491849

Calls written directly in this body: `args.isSatisfied`, `args.read`, `collected.unshift`.

Assignment or increment targets: `cursor`, `nextBeforeSeq`, `pageIndex`.

SHA-256 of the source span: `45103423f9e389a327ef4e32d7da8a755a3b4e06b3a8fa0cf48e394a6a6b5c9e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
