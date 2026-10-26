# `buildProjectPermissionsContext/appendUnique2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:513123-513130](../../../../../../reference/runtime/sand-eval-runner.cjs#L513123-L513130) | `ArrowFunctionExpression` | não | `target, seen, values` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:513123-513130](../../../../../../reference/runtime/sand-eval-runner.cjs#L513123-L513130) | 1 | 1 | 0 | 0 | 0 | 0 |

### evaluation:513123

Chamadas escritas diretamente neste corpo: `seen.add`, `seen.has`, `target.push`, `value.trim`.

SHA-256 do trecho: `a67f3f7df298f24983d6cd6f10f94b73ee73924371a7a644283b46745ef3666c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
