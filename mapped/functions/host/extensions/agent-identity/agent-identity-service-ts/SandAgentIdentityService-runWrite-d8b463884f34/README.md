# `SandAgentIdentityService.runWrite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496365-496383](../../../../../../../reference/runtime/host-main.cjs#L496365-L496383) | `method` | sim | `op, agentId, work, retries = true` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496365-496383](../../../../../../../reference/runtime/host-main.cjs#L496365-L496383) | 1 | 0 | 2 | 2 | 0 | 1 |

### host:496365

Chamadas escritas diretamente neste corpo: `brandedOrInvalidId`, `errorMessage`, `logFields`, `this.deps.log`, `this.deps.report`, `this.deps.retry.runWithRetry`, `work`.

SHA-256 do trecho: `e47a2410901b6c509e4b7cb38379e3495640dc5b2b5bf16b65bd2ea9754de2ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
