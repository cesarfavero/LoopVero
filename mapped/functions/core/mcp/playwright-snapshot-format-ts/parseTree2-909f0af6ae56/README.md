# `parseTree2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742786-742799](../../../../../../reference/runtime/host-main.cjs#L742786-L742799) | `FunctionDeclaration` | não | `lines2` |
| [evaluation:515448-515461](../../../../../../reference/runtime/sand-eval-runner.cjs#L515448-L515461) | `FunctionDeclaration` | não | `lines2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742786-742799](../../../../../../reference/runtime/host-main.cjs#L742786-L742799) | 1 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:515448-515461](../../../../../../reference/runtime/sand-eval-runner.cjs#L515448-L515461) | 1 | 2 | 0 | 1 | 0 | 0 |

### host:742786

Chamadas escritas diretamente neste corpo: `line.slice`, `line.trimStart`, `parent.children.push`, `parseNode`, `roots.push`, `stack.pop`, `stack.push`.

SHA-256 do trecho: `2224183f0fd28ed9b327ecb335b6fcdb77887aa2facea95df82626fad4727605`.

### evaluation:515448

Chamadas escritas diretamente neste corpo: `line.slice`, `line.trimStart`, `parent.children.push`, `parseNode`, `roots.push`, `stack.pop`, `stack.push`.

SHA-256 do trecho: `2224183f0fd28ed9b327ecb335b6fcdb77887aa2facea95df82626fad4727605`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
