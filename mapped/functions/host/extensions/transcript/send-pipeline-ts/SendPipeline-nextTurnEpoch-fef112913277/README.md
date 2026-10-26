# `SendPipeline.nextTurnEpoch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/send-pipeline.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/send-pipeline-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740193-740201](../../../../../../../reference/runtime/host-main.cjs#L740193-L740201) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740193-740201](../../../../../../../reference/runtime/host-main.cjs#L740193-L740201) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740193

Chamadas escritas diretamente neste corpo: `this.tm.groupChat.cancelTemporalMemberTurns`, `this.turnEpochs.get`, `this.turnEpochs.set`.

SHA-256 do trecho: `4b6e98db9576081e6736d3d69c31169c423d1749e622beeda7e8f53961d715a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
