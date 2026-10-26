# `precedingTimestamp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/transcript-window-edge.ts` · [README do módulo](../../../../../modules/shared/transcript/transcript-window-edge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:712728-712747](../../../../../../reference/runtime/host-main.cjs#L712728-L712747) | `FunctionDeclaration` | não | `rows, start, cut` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712728-712747](../../../../../../reference/runtime/host-main.cjs#L712728-L712747) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:712728

Chamadas escritas diretamente neste corpo: `Math.max`, `duplicateRowIndices`, `duplicates.has`, `isAgentPeerMessageEntry`, `isTimelineHiddenEntry`, `isValidTimestampMs`.

Alvos de atribuição ou incremento: `index`, `runStartMs`.

SHA-256 do trecho: `f2b0cd3d24c4acc9e3de2688c39b4cdbd4be015154f8e8bedc35b7625886d2f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
