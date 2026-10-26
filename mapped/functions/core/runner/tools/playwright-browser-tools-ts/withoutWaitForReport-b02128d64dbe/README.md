# `withoutWaitForReport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750694-750697](../../../../../../../reference/runtime/host-main.cjs#L750694-L750697) | `FunctionDeclaration` | não | `result` |
| [evaluation:523545-523548](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523545-L523548) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750694-750697](../../../../../../../reference/runtime/host-main.cjs#L750694-L750697) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523545-523548](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523545-L523548) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:750694

Chamadas escritas diretamente neste corpo: `reportedWaitForSchema.safeParse`, `withoutStructuredField`.

SHA-256 do trecho: `040fb41b8750f61230dca1b4e03c59c6aca78fa4498225d40760948ae74a30c0`.

### evaluation:523545

Chamadas escritas diretamente neste corpo: `reportedWaitForSchema.safeParse`, `withoutStructuredField`.

SHA-256 do trecho: `040fb41b8750f61230dca1b4e03c59c6aca78fa4498225d40760948ae74a30c0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
