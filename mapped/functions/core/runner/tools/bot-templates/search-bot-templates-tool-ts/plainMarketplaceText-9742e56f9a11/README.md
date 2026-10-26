# `plainMarketplaceText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770793-770797](../../../../../../../../reference/runtime/host-main.cjs#L770793-L770797) | `FunctionDeclaration` | não | `text3, maxChars` |
| [evaluation:569888-569892](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569888-L569892) | `FunctionDeclaration` | não | `text3, maxChars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770793-770797](../../../../../../../../reference/runtime/host-main.cjs#L770793-L770797) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:569888-569892](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569888-L569892) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:770793

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `.trimEnd`, `plain.slice`, `text3.replace`.

SHA-256 do trecho: `b5977ced5199a52b8dfff6307f2853a8d76853ef9035d255f8613a13911c5733`.

### evaluation:569888

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `.trimEnd`, `plain.slice`, `text3.replace`.

SHA-256 do trecho: `b5977ced5199a52b8dfff6307f2853a8d76853ef9035d255f8613a13911c5733`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
