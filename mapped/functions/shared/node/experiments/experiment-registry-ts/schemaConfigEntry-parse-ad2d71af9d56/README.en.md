# `schemaConfigEntry/parse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/experiment-registry.ts` · [Module README](../../../../../../modules/shared/node/experiments/experiment-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471098-471106](../../../../../../../reference/runtime/host-main.cjs#L471098-L471106) | `ArrowFunctionExpression` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471098-471106](../../../../../../../reference/runtime/host-main.cjs#L471098-L471106) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:471098

Calls written directly in this body: `isUnknownRecord2`, `issuePath`, `new SandConfigParseError`, `schema3.safeParse`.

Explicit throw targets: `SandConfigParseError`.

SHA-256 of the source span: `d9213851bcd7b2cb7219cb70b7926f3e04bbaccbe629f6d859f9e396d48461d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
