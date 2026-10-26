# `uploadFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596437-596441](../../../../../../reference/runtime/sand-eval-runner.cjs#L596437-L596441) | `ArrowFunctionExpression` | sim | `_ctx, _agentId, path33, data2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596437-596441](../../../../../../reference/runtime/sand-eval-runner.cjs#L596437-L596441) | 1 | 0 | 0 | 0 | 1 | 0 |

### evaluation:596437

Chamadas escritas diretamente neste corpo: `new Error`, `new Uint8Array`, `this.assertReachable`, `this.files.set`, `this.normalizePath`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `cf75cae27818c9cde6000e1a48b36a60ea99368fc27630ba20adc90e5f7030ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
