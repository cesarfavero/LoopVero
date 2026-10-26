# `pluginLinkIdsIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-auth-wait.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-auth-wait-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765331-765339](../../../../../../../reference/runtime/host-main.cjs#L765331-L765339) | `FunctionDeclaration` | não | `content` |
| [evaluation:558698-558706](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558698-L558706) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765331-765339](../../../../../../../reference/runtime/host-main.cjs#L765331-L765339) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:558698-558706](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558698-L558706) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:765331

Chamadas escritas diretamente neste corpo: `content.matchAll`, `new Set`, `pluginIds.add`, `sandDeepLinks.parse`.

SHA-256 do trecho: `710e9e19d3a98fac7df9311689f5d701613d6ac5f08ba4e9d186f150f11f1f3e`.

### evaluation:558698

Chamadas escritas diretamente neste corpo: `content.matchAll`, `new Set`, `pluginIds.add`, `sandDeepLinks.parse`.

SHA-256 do trecho: `0bc60be371b12cc061a2935aa05cd78e31e21fcc32d60d8a5946e9f13bb032b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
