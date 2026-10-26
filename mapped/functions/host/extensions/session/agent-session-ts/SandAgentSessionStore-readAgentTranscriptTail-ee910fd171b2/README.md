# `SandAgentSessionStore.readAgentTranscriptTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723443-723445](../../../../../../../reference/runtime/host-main.cjs#L723443-L723445) | `method` | não | `agentId, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723443-723445](../../../../../../../reference/runtime/host-main.cjs#L723443-L723445) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723443

Chamadas escritas diretamente neste corpo: `this.conversationState.readAgentTranscriptTail`.

SHA-256 do trecho: `653c0e398bf03c3f02e2c4030b68c7c7634e2e676006f9def15b021bfe62f55d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
