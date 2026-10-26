# `discoverMonitorPorts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547052-547071](../../../../../../../reference/runtime/host-main.cjs#L547052-L547071) | `FunctionDeclaration` | yes | `reportFailure` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547052-547071](../../../../../../../reference/runtime/host-main.cjs#L547052-L547071) | 2 | 1 | 1 | 2 | 0 | 1 |

### host:547052

Calls written directly in this body: `/^X(\d+)$/.exec`, `Number.isInteger`, `Number.parseInt`, `ports.push`, `ports.sort`, `reportFailure`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `87ced1ea701e93076c4e79799cd17a914b093dda29c475dc39ff0db79d49d337`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
