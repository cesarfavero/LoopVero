# `exactAccessibleNameRef`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727060-727088](../../../../../../../reference/runtime/host-main.cjs#L727060-L727088) | `FunctionDeclaration` | não | `lines2, needle, preferredRole, frame, uniqueExactAcrossFrames` |
| [evaluation:561671-561699](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561671-L561699) | `FunctionDeclaration` | não | `lines2, needle, preferredRole, frame, uniqueExactAcrossFrames` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727060-727088](../../../../../../../reference/runtime/host-main.cjs#L727060-L727088) | 6 | 2 | 0 | 2 | 0 | 0 |
| [evaluation:561671-561699](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561671-L561699) | 6 | 2 | 0 | 2 | 0 | 0 |

### host:727060

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `.trim`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `exactMatchesInScope`, `frame.trim`, `frames.pop`, `frames.push`, `leadingIndent`, `matches.push`, `unescapedSnapshotName`.

SHA-256 do trecho: `6be23d2be15e3d4aa082a5195267811b01c722727755276f41dbfac8f17c7db5`.

### evaluation:561671

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `.trim`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `exactMatchesInScope`, `frame.trim`, `frames.pop`, `frames.push`, `leadingIndent`, `matches.push`, `unescapedSnapshotName`.

SHA-256 do trecho: `6be23d2be15e3d4aa082a5195267811b01c722727755276f41dbfac8f17c7db5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
