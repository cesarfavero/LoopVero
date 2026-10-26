# `_VoiceCallRuntime.deliverToLiveCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/voice-call-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742306-742311](../../../../../../../reference/runtime/host-main.cjs#L742306-L742311) | `method` | não | `{ agentId, update, kind }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742306-742311](../../../../../../../reference/runtime/host-main.cjs#L742306-L742311) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:742306

Chamadas escritas diretamente neste corpo: `this.emitInbound`, `this.liveCallByAgent.get`.

SHA-256 do trecho: `af1cc7e3bd558fcd5050fe201ff00a394c366dcca16e04d15ea6274c4ed7d618`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
