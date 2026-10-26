# `toolResultOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-result-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-result-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489692-489699](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489692-L489699) | `FunctionDeclaration` | não | `event` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489692-489699](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489692-L489699) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:489692

Chamadas escritas diretamente neste corpo: `CANCELLED_CLASSIFICATIONS.has`, `DENIED_CLASSIFICATIONS.has`.

SHA-256 do trecho: `5aece87cb15c9296f0fe9c2adaa477fef58ff9a59104031e17ccff5762014998`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
