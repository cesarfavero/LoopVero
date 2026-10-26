# `pageChangeCannotRedirect`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750568-750570](../../../../../../../reference/runtime/host-main.cjs#L750568-L750570) | `FunctionDeclaration` | não | `name18, args` |
| [evaluation:523419-523421](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523419-L523421) | `FunctionDeclaration` | não | `name18, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750568-750570](../../../../../../../reference/runtime/host-main.cjs#L750568-L750570) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523419-523421](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523419-L523421) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750568

Chamadas escritas diretamente neste corpo: `PAGE_INDEPENDENT_ROWS.has`, `isAbsoluteHttpUrl`.

SHA-256 do trecho: `5c54656e2d2a0c170d53c9efcbd71585e2a427921cb4018cc13fd704d65c5afd`.

### evaluation:523419

Chamadas escritas diretamente neste corpo: `PAGE_INDEPENDENT_ROWS.has`, `isAbsoluteHttpUrl`.

SHA-256 do trecho: `5c54656e2d2a0c170d53c9efcbd71585e2a427921cb4018cc13fd704d65c5afd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
