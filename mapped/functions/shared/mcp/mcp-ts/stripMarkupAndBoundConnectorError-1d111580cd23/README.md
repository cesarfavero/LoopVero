# `stripMarkupAndBoundConnectorError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226052-226056](../../../../../../reference/runtime/host-main.cjs#L226052-L226056) | `FunctionDeclaration` | não | `raw` |
| [evaluation:495253-495257](../../../../../../reference/runtime/sand-eval-runner.cjs#L495253-L495257) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226052-226056](../../../../../../reference/runtime/host-main.cjs#L226052-L226056) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495253-495257](../../../../../../reference/runtime/sand-eval-runner.cjs#L495253-L495257) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:226052

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `.trimEnd`, `collapsed.slice`, `raw.slice`.

SHA-256 do trecho: `0f8488f9cd63acce2596b6eeac0199ae7f7875bceacd27ea84748953e1ecefe4`.

### evaluation:495253

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `.trimEnd`, `collapsed.slice`, `raw.slice`.

SHA-256 do trecho: `0f8488f9cd63acce2596b6eeac0199ae7f7875bceacd27ea84748953e1ecefe4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
