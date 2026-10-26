# `createAutomationState/setAutomationEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628716-628722](../../../../../reference/runtime/sand-eval-runner.cjs#L628716-L628722) | `FunctionExpression` | sim | `{ id, isEnabled }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628716-628722](../../../../../reference/runtime/sand-eval-runner.cjs#L628716-L628722) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:628716

Chamadas escritas diretamente neste corpo: `stateWriteFailed`, `stateWriteOk`, `store.setEnabled`.

SHA-256 do trecho: `eb95fbaff2c3ccc460b06282e408cf43b54f3ac10c6f288a8236b4131d3fd046`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
