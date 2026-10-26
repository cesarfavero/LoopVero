# `stampScenarioMtime`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628654-628660](../../../../../reference/runtime/sand-eval-runner.cjs#L628654-L628660) | `FunctionDeclaration` | não | `automation, scenarioMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628654-628660](../../../../../reference/runtime/sand-eval-runner.cjs#L628654-L628660) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628654

Chamadas escritas diretamente neste corpo: `Math.max`, `new Date`.

SHA-256 do trecho: `330416d8448e05bf6a861a1171f5e0aae14e7e86f15054089205a02d36f1dbb5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
