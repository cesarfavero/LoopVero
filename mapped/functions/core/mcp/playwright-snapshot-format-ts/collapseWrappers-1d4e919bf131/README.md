# `collapseWrappers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742811-742830](../../../../../../reference/runtime/host-main.cjs#L742811-L742830) | `FunctionDeclaration` | não | `roots` |
| [evaluation:515473-515492](../../../../../../reference/runtime/sand-eval-runner.cjs#L515473-L515492) | `FunctionDeclaration` | não | `roots` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742811-742830](../../../../../../reference/runtime/host-main.cjs#L742811-L742830) | 1 | 2 | 0 | 0 | 0 | 0 |
| [evaluation:515473-515492](../../../../../../reference/runtime/sand-eval-runner.cjs#L515473-L515492) | 1 | 2 | 0 | 0 | 0 | 0 |

### host:742811

Chamadas escritas diretamente neste corpo: `isCollapsibleWrapper`, `walk3`.

Alvos de atribuição ou incremento: `changed`, `node2.skip`.

SHA-256 do trecho: `3e0335589b4149f69a940b3fb60da0186888c3ba5e9f61616703803015bb186c`.

### evaluation:515473

Chamadas escritas diretamente neste corpo: `isCollapsibleWrapper`, `walk3`.

Alvos de atribuição ou incremento: `changed`, `node2.skip`.

SHA-256 do trecho: `3e0335589b4149f69a940b3fb60da0186888c3ba5e9f61616703803015bb186c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
