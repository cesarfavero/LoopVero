# `fencedBlockRanges`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721945-721970](../../../../../../reference/runtime/host-main.cjs#L721945-L721970) | `FunctionDeclaration` | não | `input2` |
| [evaluation:539922-539947](../../../../../../reference/runtime/sand-eval-runner.cjs#L539922-L539947) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721945-721970](../../../../../../reference/runtime/host-main.cjs#L721945-L721970) | 6 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:539922-539947](../../../../../../reference/runtime/sand-eval-runner.cjs#L539922-L539947) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:721945

Chamadas escritas diretamente neste corpo: `FENCE_LINE_PATTERN.exec`, `infoString.includes`, `input2.split`, `line.slice`, `line.trim`, `ranges.push`.

Alvos de atribuição ou incremento: `offset2`, `openIndent`, `openRun`, `openStart`.

SHA-256 do trecho: `1411aab10a9aa344173d5a4fa17fe5733ff92de5b15d730654637b053b57bf2f`.

### evaluation:539922

Chamadas escritas diretamente neste corpo: `FENCE_LINE_PATTERN.exec`, `infoString.includes`, `input2.split`, `line.slice`, `line.trim`, `ranges.push`.

Alvos de atribuição ou incremento: `offset2`, `openIndent`, `openRun`, `openStart`.

SHA-256 do trecho: `1411aab10a9aa344173d5a4fa17fe5733ff92de5b15d730654637b053b57bf2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
