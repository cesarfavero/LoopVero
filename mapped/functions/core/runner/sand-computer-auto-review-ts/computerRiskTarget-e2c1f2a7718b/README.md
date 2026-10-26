# `computerRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699416-699430](../../../../../../reference/runtime/host-main.cjs#L699416-L699430) | `FunctionDeclaration` | não | `actionArguments, subject, instructions` |
| [evaluation:513172-513186](../../../../../../reference/runtime/sand-eval-runner.cjs#L513172-L513186) | `FunctionDeclaration` | não | `actionArguments, subject, instructions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699416-699430](../../../../../../reference/runtime/host-main.cjs#L699416-L699430) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513172-513186](../../../../../../reference/runtime/sand-eval-runner.cjs#L513172-L513186) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699416

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `28e769d0ae217c59d2d8a2ccf127402118ab5a853774ed832c73594590f31cc9`.

### evaluation:513172

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `28e769d0ae217c59d2d8a2ccf127402118ab5a853774ed832c73594590f31cc9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
