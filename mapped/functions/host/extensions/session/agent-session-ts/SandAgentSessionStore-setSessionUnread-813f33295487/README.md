# `SandAgentSessionStore.setSessionUnread`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723473-723483](../../../../../../../reference/runtime/host-main.cjs#L723473-L723483) | `method` | sim | `agentId, isUnread, at3 = Date.now()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723473-723483](../../../../../../../reference/runtime/host-main.cjs#L723473-L723483) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:723473

Chamadas escritas diretamente neste corpo: `this.withAgentDb`.

SHA-256 do trecho: `f34b24284202087f8ad557bdf6c65987cf5473dec32f31af20b5f096a52006bc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
