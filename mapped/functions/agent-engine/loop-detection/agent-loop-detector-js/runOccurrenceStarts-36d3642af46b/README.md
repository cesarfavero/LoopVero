# `runOccurrenceStarts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:310978-310990](../../../../../../reference/runtime/sand-eval-runner.cjs#L310978-L310990) | `FunctionDeclaration` | não | `keys, { patternStartIdx, patternLength }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310978-310990](../../../../../../reference/runtime/sand-eval-runner.cjs#L310978-L310990) | 1 | 2 | 0 | 2 | 0 | 0 |

### evaluation:310978

Chamadas escritas diretamente neste corpo: `keys.slice`, `starts.push`.

Alvos de atribuição ou incremento: `offset2`, `start`.

SHA-256 do trecho: `ee7a6a694ba8adb232eaa6d1ecef0ccfb082fb2410cb9e9ac23b563b871bcff4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
