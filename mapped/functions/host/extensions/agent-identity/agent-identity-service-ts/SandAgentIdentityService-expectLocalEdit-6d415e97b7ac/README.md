# `SandAgentIdentityService.expectLocalEdit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495594-495609](../../../../../../../reference/runtime/host-main.cjs#L495594-L495609) | `method` | sim | `agentId, write4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495594-495609](../../../../../../../reference/runtime/host-main.cjs#L495594-L495609) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:495594

Chamadas escritas diretamente neste corpo: `this.bindsAwaitingEdit.delete`, `this.expectedEditCounts.delete`, `this.expectedEditCounts.get`, `this.expectedEditCounts.set`, `this.reconcileNow`, `write4`.

SHA-256 do trecho: `695c27153448fe02c620b2f40ec3b9ee04d121d242c17f4c83801b22c47d9ff0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
