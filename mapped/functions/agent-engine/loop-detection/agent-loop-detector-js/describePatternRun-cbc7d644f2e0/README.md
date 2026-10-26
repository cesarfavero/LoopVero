# `describePatternRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:310948-310977](../../../../../../reference/runtime/sand-eval-runner.cjs#L310948-L310977) | `FunctionDeclaration` | não | `params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310948-310977](../../../../../../reference/runtime/sand-eval-runner.cjs#L310948-L310977) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:310948

Chamadas escritas diretamente neste corpo: `Math.max`, `collectRunOccurrenceResults`, `messages.slice`, `occurrenceStarts.every`, `patternMessages.every`, `runOccurrenceStarts`.

Alvos de atribuição ou incremento: `i`, `identicalPairs`.

SHA-256 do trecho: `fd97933012364c50f133e2af2dbec6b06edb5eda5b9a7419f79b234140addc6c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
