# `describePluginSignIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779791-779804](../../../../../../../reference/runtime/host-main.cjs#L779791-L779804) | `FunctionDeclaration` | não | `plugin, installed` |
| [evaluation:580029-580042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580029-L580042) | `FunctionDeclaration` | não | `plugin, installed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779791-779804](../../../../../../../reference/runtime/host-main.cjs#L779791-L779804) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:580029-580042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580029-L580042) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:779791

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `installed.filter`, `new Set`, `rows.filter`, `signedOut.map`.

SHA-256 do trecho: `781a690171cefaf9bffc8b34f32488df51020458d2cc1cf43002667b9288b422`.

### evaluation:580029

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `installed.filter`, `new Set`, `rows.filter`, `signedOut.map`.

SHA-256 do trecho: `781a690171cefaf9bffc8b34f32488df51020458d2cc1cf43002667b9288b422`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
