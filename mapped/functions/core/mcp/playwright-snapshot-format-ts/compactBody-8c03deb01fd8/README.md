# `compactBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742848-742860](../../../../../../reference/runtime/host-main.cjs#L742848-L742860) | `FunctionDeclaration` | não | `node2, origin` |
| [evaluation:515510-515522](../../../../../../reference/runtime/sand-eval-runner.cjs#L515510-L515522) | `FunctionDeclaration` | não | `node2, origin` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742848-742860](../../../../../../reference/runtime/host-main.cjs#L742848-L742860) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515510-515522](../../../../../../reference/runtime/sand-eval-runner.cjs#L515510-L515522) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:742848

Chamadas escritas diretamente neste corpo: `.replace`, `CLICKABLE_ROLES.has`, `body.slice`, `sameOriginPath`.

Alvos de atribuição ou incremento: `body`.

SHA-256 do trecho: `2cfcf97225404f135f7b30540a8827ec907e89affa5bb4a1db3603e3f239c685`.

### evaluation:515510

Chamadas escritas diretamente neste corpo: `.replace`, `CLICKABLE_ROLES.has`, `body.slice`, `sameOriginPath`.

Alvos de atribuição ou incremento: `body`.

SHA-256 do trecho: `2cfcf97225404f135f7b30540a8827ec907e89affa5bb4a1db3603e3f239c685`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
