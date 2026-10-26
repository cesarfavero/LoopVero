# `placesCardWithPhotos`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/places/places-card-kind.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-card-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768789-768799](../../../../../../../../reference/runtime/host-main.cjs#L768789-L768799) | `FunctionDeclaration` | yes | `ctx, port, places, clock = realClock` |
| [evaluation:564364-564374](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564364-L564374) | `FunctionDeclaration` | yes | `ctx, port, places, clock = realClock` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768789-768799](../../../../../../../../reference/runtime/host-main.cjs#L768789-L768799) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:564364-564374](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564364-L564374) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:768789

Calls written directly in this body: `places.map`, `placesCardOf`, `resolvedPhotos`.

SHA-256 of the source span: `67bd326160f6aeed732a7f7d1913641c6a92c064c65662bd4ec42312b8657a62`.

### evaluation:564364

Calls written directly in this body: `places.map`, `placesCardOf`, `resolvedPhotos`.

SHA-256 of the source span: `67bd326160f6aeed732a7f7d1913641c6a92c064c65662bd4ec42312b8657a62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
