# `isLocatorFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700144-700150](../../../../../../reference/runtime/host-main.cjs#L700144-L700150) | `FunctionDeclaration` | não | `head` |
| [evaluation:513922-513928](../../../../../../reference/runtime/sand-eval-runner.cjs#L513922-L513928) | `FunctionDeclaration` | não | `head` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700144-700150](../../../../../../reference/runtime/host-main.cjs#L700144-L700150) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:513922-513928](../../../../../../reference/runtime/sand-eval-runner.cjs#L513922-L513928) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:700144

Chamadas escritas diretamente neste corpo: `LOCATOR_APIS.has`, `SELECTOR_TAKING_METHODS.has`, `STRICT_MODE_DETAIL.test`.

SHA-256 do trecho: `aa1ee037aa13e7532a3279fff9a99d81746815958bb0f0f41d2e2abb6fbe6375`.

### evaluation:513922

Chamadas escritas diretamente neste corpo: `LOCATOR_APIS.has`, `SELECTOR_TAKING_METHODS.has`, `STRICT_MODE_DETAIL.test`.

SHA-256 do trecho: `aa1ee037aa13e7532a3279fff9a99d81746815958bb0f0f41d2e2abb6fbe6375`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
