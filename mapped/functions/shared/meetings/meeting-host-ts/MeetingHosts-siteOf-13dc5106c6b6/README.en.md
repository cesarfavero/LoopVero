# `_MeetingHosts.siteOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-host.ts` · [Module README](../../../../../modules/shared/meetings/meeting-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763182-763190](../../../../../../reference/runtime/host-main.cjs#L763182-L763190) | `method` | no | `hostname4` |
| [evaluation:556147-556155](../../../../../../reference/runtime/sand-eval-runner.cjs#L556147-L556155) | `method` | no | `hostname3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763182-763190](../../../../../../reference/runtime/host-main.cjs#L763182-L763190) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:556147-556155](../../../../../../reference/runtime/sand-eval-runner.cjs#L556147-L556155) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:763182

Calls written directly in this body: `host.endsWith`, `hostname4.toLowerCase`.

SHA-256 of the source span: `d163027a96c78ff543b735462ce1d4d28f03bcf35bb375da7e1ff4e183fdf1a4`.

### evaluation:556147

Calls written directly in this body: `host.endsWith`, `hostname3.toLowerCase`.

SHA-256 of the source span: `fb6b6819b9d734f16c66c67a95a641c97707602412bd5322794dc5c2c82febcd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
