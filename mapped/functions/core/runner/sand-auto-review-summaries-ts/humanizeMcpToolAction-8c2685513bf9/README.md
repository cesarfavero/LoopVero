# `humanizeMcpToolAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:491137-491147](../../../../../../reference/runtime/sand-eval-runner.cjs#L491137-L491147) | `FunctionDeclaration` | não | `toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491137-491147](../../../../../../reference/runtime/sand-eval-runner.cjs#L491137-L491147) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:491137

Chamadas escritas diretamente neste corpo: `/^(send|create|update|delete|post|write|read|add|remove|open|close|list|search|fetch|get|set|upload|download|invite|share)$/.test`, `/^[aeiou]/i.test`, `/s$/i.test`, `mcpNameWords`, `words.join`.

SHA-256 do trecho: `35926642f0278d3c3c91ff90b9c6f8381592a987f5ec9a212976f3149b4d8880`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
