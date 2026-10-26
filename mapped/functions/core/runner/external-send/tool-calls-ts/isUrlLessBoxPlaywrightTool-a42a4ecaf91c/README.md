# `isUrlLessBoxPlaywrightTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/tool-calls.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:539109-539111](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539109-L539111) | `FunctionDeclaration` | não | `toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539109-539111](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539109-L539111) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539109

Chamadas escritas diretamente neste corpo: `playwrightBoxMcpWindowIndex`, `toolName.lastIndexOf`, `toolName.slice`.

SHA-256 do trecho: `54f8da602ab15485403913e1d5482f1206c36a1f8ddfe073f9f3bd903192523a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
