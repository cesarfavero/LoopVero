# `autoReviewSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/executor-lean-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/executor-lean-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552526-552535](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552526-L552535) | `FunctionDeclaration` | não | `{   holdsCloudAgent,   webTools: webTools2 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552526-552535](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552526-L552535) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:552526

Chamadas escritas diretamente neste corpo: `.join`, `webToolException`.

SHA-256 do trecho: `25a64ac95d8b3dc2ed7853b14e4938b8a41940ed1ebedc08fc8e0a85cc7eda90`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
