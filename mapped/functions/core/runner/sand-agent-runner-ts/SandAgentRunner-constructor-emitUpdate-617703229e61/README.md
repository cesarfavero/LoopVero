# `_SandAgentRunner.constructor/emitUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593132-593136](../../../../../../reference/runtime/sand-eval-runner.cjs#L593132-L593136) | `ArrowFunctionExpression` | não | `update` |
| [evaluation:593492-593492](../../../../../../reference/runtime/sand-eval-runner.cjs#L593492-L593492) | `ArrowFunctionExpression` | não | `update, updateObservers` |
| [evaluation:593713-593713](../../../../../../reference/runtime/sand-eval-runner.cjs#L593713-L593713) | `ArrowFunctionExpression` | não | `update` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593132-593136](../../../../../../reference/runtime/sand-eval-runner.cjs#L593132-L593136) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:593492-593492](../../../../../../reference/runtime/sand-eval-runner.cjs#L593492-L593492) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:593492 usa retorno implícito de arrow function.
| [evaluation:593713-593713](../../../../../../reference/runtime/sand-eval-runner.cjs#L593713-L593713) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:593713 usa retorno implícito de arrow function.

### evaluation:593132

Chamadas escritas diretamente neste corpo: `this.observation.recordToolActivity`, `this.transport.onUpdate`.

SHA-256 do trecho: `a3e8ddfbc5fe717d7b469f8a21b4e8a966f18c7e8595a3d77cb6ea90a2f1aa37`.

### evaluation:593492

Chamadas escritas diretamente neste corpo: `this.emitUpdate`.

SHA-256 do trecho: `3e5c652ab960d19588eba4e4c60fe2d3368781639fccb68e82419406652e8970`.

### evaluation:593713

Chamadas escritas diretamente neste corpo: `this.emitUpdate`.

SHA-256 do trecho: `2bed213c00a471aeb4429f38c6e2b90abab020579607311d7efb80d5b5153048`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
