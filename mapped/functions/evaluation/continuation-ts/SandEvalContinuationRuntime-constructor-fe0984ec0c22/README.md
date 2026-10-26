# `_SandEvalContinuationRuntime.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628758-628768](../../../../../reference/runtime/sand-eval-runner.cjs#L628758-L628768) | `method` | não | `config2, store, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628758-628768](../../../../../reference/runtime/sand-eval-runner.cjs#L628758-L628768) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:628758

Chamadas escritas diretamente neste corpo: `createAutomationState`, `new SandEvalContinuationControl`.

Alvos de atribuição ou incremento: `this.agentState`, `this.automationStore`, `this.control`, `this.maxWakes`, `this.store`.

SHA-256 do trecho: `7f2e90c781b427677d4a7fcf9981c2101016576d37b67a087e4aff12ead03747`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
