# `SessionRuntime.getAgentTranscript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738187-738192](../../../../../../../reference/runtime/host-main.cjs#L738187-L738192) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738187-738192](../../../../../../../reference/runtime/host-main.cjs#L738187-L738192) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:738187

Chamadas escritas diretamente neste corpo: `getTranscript`, `this.tm.sessionStore.getAgentTranscriptEntries`.

SHA-256 do trecho: `9b16b9b7f941fd5a8e1c1a10b5d674ae09c76f5c95c3b9344675b3234843a047`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
