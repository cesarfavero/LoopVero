# `createSandEvalUserMachines/wrapBox`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596544-596550](../../../../../../reference/runtime/sand-eval-runner.cjs#L596544-L596550) | `ArrowFunctionExpression` | não | `box` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596544-596550](../../../../../../reference/runtime/sand-eval-runner.cjs#L596544-L596550) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596544

Chamadas escritas diretamente neste corpo: `Object.assign`, `Object.create`.

Alvos de atribuição ou incremento: `evalBox`.

SHA-256 do trecho: `1c46478f3c091990678c0cdd0ef9903f098199e4c062a21e6ed514140b46852e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
