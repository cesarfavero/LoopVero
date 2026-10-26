# `SandAgentIdentityService.reportAgentReconcileFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495746-495758](../../../../../../../reference/runtime/host-main.cjs#L495746-L495758) | `method` | não | `agentId, error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495746-495758](../../../../../../../reference/runtime/host-main.cjs#L495746-L495758) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:495746

Chamadas escritas diretamente neste corpo: `brandedErrorTag`, `brandedOrInvalidId`, `errorLogTag`, `logFields`, `this.deps.report`.

SHA-256 do trecho: `cd6332af5ade8cfb6e1f85346d59992bfe8fe9a96c844fdc280707ab6cb60694`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
