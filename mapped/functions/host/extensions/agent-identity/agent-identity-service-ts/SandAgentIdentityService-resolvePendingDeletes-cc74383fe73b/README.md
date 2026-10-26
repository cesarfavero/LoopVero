# `SandAgentIdentityService.resolvePendingDeletes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495654-495662](../../../../../../../reference/runtime/host-main.cjs#L495654-L495662) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495654-495662](../../../../../../../reference/runtime/host-main.cjs#L495654-L495662) | 1 | 0 | 1 | 1 | 0 | 1 |

### host:495654

Chamadas escritas diretamente neste corpo: `.map`, `errorMessage`, `this.deleteAgents`, `this.deletedAgents.pendingUpstream`, `this.deps.log`.

SHA-256 do trecho: `eff5723b79e2a03dccc7611bf1ebd5bdbb108bd29eafdfd6fa1fc1b00f72e5e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
