# `describeHeldDuration`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-revival-prompt.ts` · [README do módulo](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583878-583884](../../../../../../reference/runtime/sand-eval-runner.cjs#L583878-L583884) | `FunctionDeclaration` | não | `heldForMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583878-583884](../../../../../../reference/runtime/sand-eval-runner.cjs#L583878-L583884) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:583878

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.round`.

SHA-256 do trecho: `9d0b732d6150aff41f527c87d8ef129d74794f2135d2c8a14f3457edb1bd1ccb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
