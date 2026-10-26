# `resolveSandBrowserSurface`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-surface.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-surface-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776755-776760](../../../../../../../reference/runtime/host-main.cjs#L776755-L776760) | `FunctionDeclaration` | não | `host, decisions` |
| [evaluation:576406-576411](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576406-L576411) | `FunctionDeclaration` | não | `host, decisions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776755-776760](../../../../../../../reference/runtime/host-main.cjs#L776755-L776760) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:576406-576411](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576406-L576411) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:776755

Chamadas escritas diretamente neste corpo: `decisions.offers`, `executor.isAvailable`, `executor.sharesBrowserTools`, `host.getRemoteBoxAvailable`, `host.isCombinedComputerUseAvailable`, `sandBrowserToolSurface`.

SHA-256 do trecho: `672a68a19a1fc10cc8314cc157bf229dc9e4273eec73ace7adeef843ed0c4822`.

### evaluation:576406

Chamadas escritas diretamente neste corpo: `decisions.offers`, `executor.isAvailable`, `executor.sharesBrowserTools`, `host.getRemoteBoxAvailable`, `host.isCombinedComputerUseAvailable`, `sandBrowserToolSurface`.

SHA-256 do trecho: `672a68a19a1fc10cc8314cc157bf229dc9e4273eec73ace7adeef843ed0c4822`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
