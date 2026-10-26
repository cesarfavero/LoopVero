# `externalUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/external-url-policy.ts` · [Module README](../../../../../modules/shared/desktop/external-url-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486744-486751](../../../../../../reference/runtime/host-main.cjs#L486744-L486751) | `FunctionDeclaration` | no | `value` |
| [evaluation:495055-495062](../../../../../../reference/runtime/sand-eval-runner.cjs#L495055-L495062) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486744-486751](../../../../../../reference/runtime/host-main.cjs#L486744-L486751) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:495055-495062](../../../../../../reference/runtime/sand-eval-runner.cjs#L495055-L495062) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:486744

Calls written directly in this body: `new URL`.

SHA-256 of the source span: `610155431144fb1f96fc134ad55948ed1248193f91b562ac6ac77948c4ff9131`.

### evaluation:495055

Calls written directly in this body: `new URL`.

SHA-256 of the source span: `610155431144fb1f96fc134ad55948ed1248193f91b562ac6ac77948c4ff9131`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
