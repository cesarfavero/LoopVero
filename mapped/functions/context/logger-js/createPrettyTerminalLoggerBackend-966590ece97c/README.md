# `createPrettyTerminalLoggerBackend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225642-225708](../../../../../reference/runtime/host-main.cjs#L225642-L225708) | `FunctionDeclaration` | não | `options2 = {}` |
| [evaluation:2130-2196](../../../../../reference/runtime/sand-eval-runner.cjs#L2130-L2196) | `FunctionDeclaration` | não | `options2 = {}` |
| [state-worker:21519-21585](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21519-L21585) | `FunctionDeclaration` | não | `options = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225642-225708](../../../../../reference/runtime/host-main.cjs#L225642-L225708) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2130-2196](../../../../../reference/runtime/sand-eval-runner.cjs#L2130-L2196) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:21519-21585](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21519-L21585) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225642

Chamadas escritas diretamente neste corpo: `createColorPalette`, `resolveRenderOptions`, `shouldUseColors`.

SHA-256 do trecho: `48d8bb26e65048b7291f9541a7cf979684cda3a8add5c3fb8a7c6acbe144484c`.

### evaluation:2130

Chamadas escritas diretamente neste corpo: `createColorPalette`, `resolveRenderOptions`, `shouldUseColors`.

SHA-256 do trecho: `48d8bb26e65048b7291f9541a7cf979684cda3a8add5c3fb8a7c6acbe144484c`.

### state-worker:21519

Chamadas escritas diretamente neste corpo: `createColorPalette`, `resolveRenderOptions`, `shouldUseColors`.

SHA-256 do trecho: `0a65772ac53acd8f2ae2351a00b37ac1e00a919828b81245a21c3d0281da5963`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
