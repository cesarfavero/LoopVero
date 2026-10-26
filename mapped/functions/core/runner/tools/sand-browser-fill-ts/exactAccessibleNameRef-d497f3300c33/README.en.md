# `exactAccessibleNameRef`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727060-727088](../../../../../../../reference/runtime/host-main.cjs#L727060-L727088) | `FunctionDeclaration` | no | `lines2, needle, preferredRole, frame, uniqueExactAcrossFrames` |
| [evaluation:561671-561699](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561671-L561699) | `FunctionDeclaration` | no | `lines2, needle, preferredRole, frame, uniqueExactAcrossFrames` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727060-727088](../../../../../../../reference/runtime/host-main.cjs#L727060-L727088) | 6 | 2 | 0 | 2 | 0 | 0 |
| [evaluation:561671-561699](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561671-L561699) | 6 | 2 | 0 | 2 | 0 | 0 |

### host:727060

Calls written directly in this body: `.toLowerCase`, `.trim`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `exactMatchesInScope`, `frame.trim`, `frames.pop`, `frames.push`, `leadingIndent`, `matches.push`, `unescapedSnapshotName`.

SHA-256 of the source span: `6be23d2be15e3d4aa082a5195267811b01c722727755276f41dbfac8f17c7db5`.

### evaluation:561671

Calls written directly in this body: `.toLowerCase`, `.trim`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `exactMatchesInScope`, `frame.trim`, `frames.pop`, `frames.push`, `leadingIndent`, `matches.push`, `unescapedSnapshotName`.

SHA-256 of the source span: `6be23d2be15e3d4aa082a5195267811b01c722727755276f41dbfac8f17c7db5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
