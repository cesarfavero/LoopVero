# `createBackendReachability/note`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/backend-reachability.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711256-711267](../../../../../../../reference/runtime/host-main.cjs#L711256-L711267) | `FunctionExpression` | não | `observation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711256-711267](../../../../../../../reference/runtime/host-main.cjs#L711256-L711267) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:711256

Chamadas escritas diretamente neste corpo: `clock.monotonicNow`, `clock.schedule`, `elapsedMs`, `fireReturn`.

Alvos de atribuição ou incremento: `pendingReturn`, `reachable`.

SHA-256 do trecho: `e4da20e3453a2336fa981595de298f3f3eafdf9c55ef8e28b97d09d81b365cf8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
