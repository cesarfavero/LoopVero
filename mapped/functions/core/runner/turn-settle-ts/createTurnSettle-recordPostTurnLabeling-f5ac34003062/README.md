# `createTurnSettle/recordPostTurnLabeling`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590900-591013](../../../../../../reference/runtime/sand-eval-runner.cjs#L590900-L591013) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590900-591013](../../../../../../reference/runtime/sand-eval-runner.cjs#L590900-L591013) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:590900

Chamadas escritas diretamente neste corpo: `.then`, `Promise.resolve`, `emit`, `hasUnresolvedMcpInvocation`, `listedMcpServerHosts`, `skippedToolCallIds`.

SHA-256 do trecho: `989a13b8f871b78d947534560070496b624a409f65c6033046a64014774126d0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
