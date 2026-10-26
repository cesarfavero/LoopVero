# `isWorkingStateWarmEligible`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-warm-eligibility.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-warm-eligibility-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785874-785881](../../../../../../../reference/runtime/host-main.cjs#L785874-L785881) | `FunctionDeclaration` | não | `agentId, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785874-785881](../../../../../../../reference/runtime/host-main.cjs#L785874-L785881) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:785874

Chamadas escritas diretamente neste corpo: `deps.checkGate`, `deps.hasActivePause`, `deps.hasAuthenticatedBootstrap`, `deps.isBoxAgent`, `deps.isStoreEnabled`, `deps.isV2StoreEnabled`.

SHA-256 do trecho: `230fc523ce3c53a8272eb468821839730f73e01cce313c553273e65e5071d47d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
