# `SandAgentIdentityService.requestMint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495560-495575](../../../../../../../reference/runtime/host-main.cjs#L495560-L495575) | `method` | sim | `create, request5, reportOp = "mint"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495560-495575](../../../../../../../reference/runtime/host-main.cjs#L495560-L495575) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:495560

Chamadas escritas diretamente neste corpo: `brandedOrInvalidId`, `logFields`, `this.deps.report`, `this.deps.retry.runWithRetry`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `8e93d6bf20e8cbe82cf6684bfb9bdfdf514cccd1abf6b7b17256e59329b83234`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
