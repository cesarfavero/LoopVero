# `SendPipeline.appendConnectorCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/send-pipeline.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/send-pipeline-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740212-740224](../../../../../../../reference/runtime/host-main.cjs#L740212-L740224) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740212-740224](../../../../../../../reference/runtime/host-main.cjs#L740212-L740224) | 2 | 0 | 1 | 0 | 0 | 0 |

### host:740212

Chamadas escritas diretamente neste corpo: `Date.now`, `createSendMessageEntry`, `getTranscript`, `nextEntryId`, `this.appendSendMessageEntry`, `this.tm.sessions.ensureActionTarget`.

SHA-256 do trecho: `54b211922fdd5a0fe93d18beaa795b03d19e088e3e9598d4fd1e036f73e251b9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
