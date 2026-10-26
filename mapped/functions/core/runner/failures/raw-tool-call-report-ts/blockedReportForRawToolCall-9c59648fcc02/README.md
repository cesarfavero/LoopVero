# `blockedReportForRawToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/failures/raw-tool-call-report.ts` · [README do módulo](../../../../../../modules/core/runner/failures/raw-tool-call-report-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590425-590436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590425-L590436) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590425-590436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590425-L590436) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:590425

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `.replace`, `.trim`, `new Set`, `text3.matchAll`, `text3.search`, `text3.slice`, `tools.join`.

SHA-256 do trecho: `b6d256ae586022abde669325baf7799391a339026b95cc84cd901e1a0867f7c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
