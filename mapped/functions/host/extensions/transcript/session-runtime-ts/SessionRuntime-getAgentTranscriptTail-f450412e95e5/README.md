# `SessionRuntime.getAgentTranscriptTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738177-738179](../../../../../../../reference/runtime/host-main.cjs#L738177-L738179) | `method` | não | `agentId, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738177-738179](../../../../../../../reference/runtime/host-main.cjs#L738177-L738179) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738177

Chamadas escritas diretamente neste corpo: `.db.getTranscriptTail`, `this.resolveLiveSession`, `this.tm.sessionStore.readAgentTranscriptTail`.

SHA-256 do trecho: `ea007433d3ff98fbf82cd8a8aecc6e66c41439ae504236510f4ef98367abd567`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
