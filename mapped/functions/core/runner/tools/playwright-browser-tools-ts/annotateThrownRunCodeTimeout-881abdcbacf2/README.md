# `annotateThrownRunCodeTimeout`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750866-750885](../../../../../../../reference/runtime/host-main.cjs#L750866-L750885) | `FunctionDeclaration` | não | `error64` |
| [evaluation:523717-523736](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523717-L523736) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750866-750885](../../../../../../../reference/runtime/host-main.cjs#L750866-L750885) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523717-523736](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523717-L523736) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:750866

Chamadas escritas diretamente neste corpo: `new CustomToolCallError`, `thrownRunCodeTimeoutMessage`.

SHA-256 do trecho: `27616d0af1b9352068b697a99bcbd305b94df55bdc69615978c09951ae825f33`.

### evaluation:523717

Chamadas escritas diretamente neste corpo: `new CustomToolCallError`, `thrownRunCodeTimeoutMessage`.

SHA-256 do trecho: `f2ee52690bd8d70d81d1c048cab92cbf546782b4c06d0bfe1d3945013db95f2d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
