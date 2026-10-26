# `forgetDeletedAgentsOnHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491710-491726](../../../../../reference/runtime/host-main.cjs#L491710-L491726) | `FunctionDeclaration` | sim | `deps, agentIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491710-491726](../../../../../reference/runtime/host-main.cjs#L491710-L491726) | 0 | 2 | 2 | 0 | 0 | 0 |

### host:491710

Chamadas escritas diretamente neste corpo: `.broker.discardAgentSession`, `automations.deleteAgentSchedules`, `deps.extensions.api`, `deps.hostEvents.emit`, `deps.releaseAgentBox`, `session.forgetHandoff`, `session.forgetUserForm`.

SHA-256 do trecho: `6ccf879fd847361bd244ef33cc1eb34797a924da1633d778bb9e652f55d781c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
