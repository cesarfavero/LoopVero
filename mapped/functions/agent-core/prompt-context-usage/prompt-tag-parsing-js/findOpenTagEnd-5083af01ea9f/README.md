# `findOpenTagEnd`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-tag-parsing.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-tag-parsing-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476087-476106](../../../../../../reference/runtime/host-main.cjs#L476087-L476106) | `FunctionDeclaration` | não | `content, startIndex` |
| [evaluation:255397-255416](../../../../../../reference/runtime/sand-eval-runner.cjs#L255397-L255416) | `FunctionDeclaration` | não | `content, startIndex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476087-476106](../../../../../../reference/runtime/host-main.cjs#L476087-L476106) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:255397-255416](../../../../../../reference/runtime/sand-eval-runner.cjs#L255397-L255416) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:476087

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `i`, `inQuote`.

SHA-256 do trecho: `98a9e43e662a3f72b91cfd6bff3840d57fc008ec4accd0a046463fa8c99613db`.

### evaluation:255397

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `i`, `inQuote`.

SHA-256 do trecho: `98a9e43e662a3f72b91cfd6bff3840d57fc008ec4accd0a046463fa8c99613db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
