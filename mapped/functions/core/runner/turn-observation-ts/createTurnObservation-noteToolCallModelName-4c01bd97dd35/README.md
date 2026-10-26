# `createTurnObservation/noteToolCallModelName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-observation.ts` · [README do módulo](../../../../../modules/core/runner/turn-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588730-588737](../../../../../../reference/runtime/sand-eval-runner.cjs#L588730-L588737) | `FunctionDeclaration` | não | `callId, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588730-588737](../../../../../../reference/runtime/sand-eval-runner.cjs#L588730-L588737) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588730

Chamadas escritas diretamente neste corpo: `.next`, `modelToolNamesByCallId.delete`, `modelToolNamesByCallId.keys`, `modelToolNamesByCallId.set`.

SHA-256 do trecho: `2ed10601d0310f1a0cf8a849ef8f4946a3e70e0af6761a034bf9145b5bf6fbe5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
