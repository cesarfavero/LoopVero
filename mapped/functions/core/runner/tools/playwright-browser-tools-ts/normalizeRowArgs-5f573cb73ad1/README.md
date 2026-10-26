# `normalizeRowArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750527-750536](../../../../../../../reference/runtime/host-main.cjs#L750527-L750536) | `FunctionDeclaration` | não | `name18, args` |
| [evaluation:523378-523387](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523378-L523387) | `FunctionDeclaration` | não | `name18, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750527-750536](../../../../../../../reference/runtime/host-main.cjs#L750527-L750536) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523378-523387](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523378-L523387) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:750527

Chamadas escritas diretamente neste corpo: `.filter`, `Object.entries`, `Object.fromEntries`, `browserJobInputFields`.

SHA-256 do trecho: `57d09f066672c0c1d271430eb824e5ce0f8b496ad784d2df94d14c65f743e324`.

### evaluation:523378

Chamadas escritas diretamente neste corpo: `.filter`, `Object.entries`, `Object.fromEntries`, `browserJobInputFields`.

SHA-256 do trecho: `57d09f066672c0c1d271430eb824e5ce0f8b496ad784d2df94d14c65f743e324`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
