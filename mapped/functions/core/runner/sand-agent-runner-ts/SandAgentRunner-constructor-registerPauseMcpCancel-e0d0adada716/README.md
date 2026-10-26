# `_SandAgentRunner.constructor/registerPauseMcpCancel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593292-593300](../../../../../../reference/runtime/sand-eval-runner.cjs#L593292-L593300) | `ArrowFunctionExpression` | não | `cancel` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593292-593300](../../../../../../reference/runtime/sand-eval-runner.cjs#L593292-L593300) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:593292

Chamadas escritas diretamente neste corpo: `cancel`, `this.isPausingForUpgrade`, `this.pauseMcpCallCancellers.add`.

SHA-256 do trecho: `47f8033466fc178b7be37ec0e502d571492c122903ffe483e835d194df9dc832`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
