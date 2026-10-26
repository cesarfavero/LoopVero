# `alignTranscriptWindowStart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/transcript-window-edge.ts` · [README do módulo](../../../../../modules/shared/transcript/transcript-window-edge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:712701-712715](../../../../../../reference/runtime/host-main.cjs#L712701-L712715) | `FunctionDeclaration` | não | `rows, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712701-712715](../../../../../../reference/runtime/host-main.cjs#L712701-L712715) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:712701

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `isTranscriptWindowEdgeBarrier`, `precedingTimestamp`, `rows.slice`.

Alvos de atribuição ou incremento: `index`, `start`.

SHA-256 do trecho: `75684576cf0fd9378f8482a983ae413105dcf15626b8e54749990a639ae35588`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
