# `createBackendReachability/fireReturn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/backend-reachability.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711247-711254](../../../../../../../reference/runtime/host-main.cjs#L711247-L711254) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711247-711254](../../../../../../../reference/runtime/host-main.cjs#L711247-L711254) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:711247

Chamadas escritas diretamente neste corpo: `Math.min`, `clock.monotonicNow`, `deps.onReturn`, `elapsedMs`.

Alvos de atribuição ou incremento: `gapMs`, `lastReturnAt`, `pendingReturn`.

SHA-256 do trecho: `a98d0bd401487100fddf740bb5ec13cd838b409dbb19b96268f0514154f7dc9a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
