# `capitalizeLowercaseWord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-server-display-name.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-server-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:577236-577240](../../../../../../reference/runtime/sand-eval-runner.cjs#L577236-L577240) | `FunctionDeclaration` | não | `word` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:577236-577240](../../../../../../reference/runtime/sand-eval-runner.cjs#L577236-L577240) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:577236

Chamadas escritas diretamente neste corpo: `.toLocaleUpperCase`, `word.charAt`, `word.slice`, `word.toLocaleLowerCase`.

SHA-256 do trecho: `958ad80ea1df21036a36712da20623cd487815b053a34a500df9d7bfc6ce26e9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
