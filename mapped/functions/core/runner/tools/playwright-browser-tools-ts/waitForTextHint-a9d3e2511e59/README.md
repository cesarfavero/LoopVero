# `waitForTextHint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750910-750919](../../../../../../../reference/runtime/host-main.cjs#L750910-L750919) | `FunctionDeclaration` | não | `reason, text3, runCodeOffered` |
| [evaluation:523761-523770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523761-L523770) | `FunctionDeclaration` | não | `reason, text3, runCodeOffered` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750910-750919](../../../../../../../reference/runtime/host-main.cjs#L750910-L750919) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523761-523770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523761-L523770) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:750910

Chamadas escritas diretamente neste corpo: `Number`, `String`, `WAITED_TEXT.exec`.

SHA-256 do trecho: `26f326672176c64b7a98fc2514320b8d55a250117c6d0ffd23f4b4f3e342a3d1`.

### evaluation:523761

Chamadas escritas diretamente neste corpo: `Number`, `String`, `WAITED_TEXT.exec`.

SHA-256 do trecho: `26f326672176c64b7a98fc2514320b8d55a250117c6d0ffd23f4b4f3e342a3d1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
