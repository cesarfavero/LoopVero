# `SessionRuntime.getAgentTranscriptPage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738193-738195](../../../../../../../reference/runtime/host-main.cjs#L738193-L738195) | `method` | não | `agentId, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738193-738195](../../../../../../../reference/runtime/host-main.cjs#L738193-L738195) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738193

Chamadas escritas diretamente neste corpo: `.db.getTranscriptPage`, `this.resolveLiveSession`, `this.tm.sessionStore.readAgentTranscriptPage`.

SHA-256 do trecho: `a72c7875c8cf63ba16a6aaddeced6ba3ef849c0f1ebd3188e69af1201662c569`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
