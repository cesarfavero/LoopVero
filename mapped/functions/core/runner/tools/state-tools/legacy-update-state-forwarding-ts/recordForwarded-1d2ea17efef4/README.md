# `recordForwarded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/legacy-update-state-forwarding.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/legacy-update-state-forwarding-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:555717-555721](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555717-L555721) | `FunctionDeclaration` | não | `ctx, target, forwardedTo` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555717-555721](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555717-L555721) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:555717

Chamadas escritas diretamente neste corpo: `legacyUpdateStateForwarded.applied`, `new ShimCall`, `shims.flush`, `shims.report`.

SHA-256 do trecho: `27fb349e08f8b45675153f8c90674583ecf1df25c097e64200333cae70720e32`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
