# `GroupChatGlue.resolveGroupMembers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738582-738605](../../../../../../../reference/runtime/host-main.cjs#L738582-L738605) | `method` | sim | `memberIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738582-738605](../../../../../../../reference/runtime/host-main.cjs#L738582-L738605) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:738582

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `isSandGroupDir`, `members2.push`, `parseAgentId`, `profile.name.trim`, `readSandProfileFile`, `this.tm.hostLog`, `this.tm.sessionStore.getAgentDir`.

SHA-256 do trecho: `0702967042b5e4c0e91a3f41b12229dbab2a50ecfaca6b0d3f20925993d33e37`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
