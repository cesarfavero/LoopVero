# `mentionsServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:491148-491152](../../../../../../reference/runtime/sand-eval-runner.cjs#L491148-L491152) | `FunctionDeclaration` | não | `text3, serverDisplayName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491148-491152](../../../../../../reference/runtime/sand-eval-runner.cjs#L491148-L491152) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:491148

Chamadas escritas diretamente neste corpo: `.includes`, `server.toLowerCase`, `serverDisplayName.trim`, `text3.toLowerCase`.

SHA-256 do trecho: `bc7657895117c7a1c16830ba9e3ce85accae4e57c165d7e910fb873521fc0250`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
