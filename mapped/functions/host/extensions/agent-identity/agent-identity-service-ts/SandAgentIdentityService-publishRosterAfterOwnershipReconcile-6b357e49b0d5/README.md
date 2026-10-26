# `SandAgentIdentityService.publishRosterAfterOwnershipReconcile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495306-495324](../../../../../../../reference/runtime/host-main.cjs#L495306-L495324) | `method` | sim | `signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495306-495324](../../../../../../../reference/runtime/host-main.cjs#L495306-L495324) | 0 | 0 | 1 | 0 | 0 | 1 |

### host:495306

Chamadas escritas diretamente neste corpo: `errorMessage`, `logFields`, `signal.throwIfAborted`, `this.deps.log`, `this.deps.publishAgentRoster`, `this.deps.report`.

SHA-256 do trecho: `17189666f0ce78238f5f73468e3702f7eba04466ea043a5093b23a927c0a80d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
