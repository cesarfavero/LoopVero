# `BoxHandoffService.domainTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/box-handoff-service.ts` · [Module README](../../../../../../modules/host/extensions/session/box-handoff-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728364-728372](../../../../../../../reference/runtime/host-main.cjs#L728364-L728372) | `method` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728364-728372](../../../../../../../reference/runtime/host-main.cjs#L728364-L728372) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:728364

Calls written directly in this body: `this.deps.privacyMode.get`, `userFormDomainMetricTag`.

SHA-256 of the source span: `206bed7f4e1438ab24caa7642856daa894d47824a58c99999b20cdb82d379003`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
