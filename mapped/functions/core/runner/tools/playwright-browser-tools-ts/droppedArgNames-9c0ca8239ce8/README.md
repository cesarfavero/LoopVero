# `droppedArgNames`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750549-750556](../../../../../../../reference/runtime/host-main.cjs#L750549-L750556) | `FunctionDeclaration` | não | `{   raw,   kept }` |
| [evaluation:523400-523407](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523400-L523407) | `FunctionDeclaration` | não | `{   raw,   kept }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750549-750556](../../../../../../../reference/runtime/host-main.cjs#L750549-L750556) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523400-523407](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523400-L523407) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:750549

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.map`, `.sort`, `Object.keys`, `new Set`.

SHA-256 do trecho: `49ec0af5e326e851f6e3b579c952ff81b2191724425b81c73932857492c3e63a`.

### evaluation:523400

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.map`, `.sort`, `Object.keys`, `new Set`.

SHA-256 do trecho: `49ec0af5e326e851f6e3b579c952ff81b2191724425b81c73932857492c3e63a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
