# `fetchStatsigBootstrap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/statsig-bootstrap.ts` · [Module README](../../../../../../modules/shared/node/experiments/statsig-bootstrap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552399-552457](../../../../../../../reference/runtime/host-main.cjs#L552399-L552457) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552399-552457](../../../../../../../reference/runtime/host-main.cjs#L552399-L552457) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:552399

Calls written directly in this body: `deadline.run`.

SHA-256 of the source span: `5181c8d979b85c43f6a40a2047d800b2838608b2e367635ee75b4a2a4d6df940`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
