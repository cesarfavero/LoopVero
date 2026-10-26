# `shapeTabs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-result-shaping.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-result-shaping-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585090-585121](../../../../../../reference/runtime/sand-eval-runner.cjs#L585090-L585121) | `FunctionDeclaration` | não | `{   sections,   toolName,   lastTabList }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585090-585121](../../../../../../reference/runtime/sand-eval-runner.cjs#L585090-L585121) | 8 | 0 | 0 | 7 | 0 | 0 |

### evaluation:585090

Chamadas escritas diretamente neste corpo: `isTabList`, `listed.join`, `openTabs.join`, `sectionBody`, `sections.flatMap`, `sections.map`.

SHA-256 do trecho: `e6d455e2907fd159d7e747c8dc95c0b0ff03cda8eafb76f9d2c6426fd920821d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
