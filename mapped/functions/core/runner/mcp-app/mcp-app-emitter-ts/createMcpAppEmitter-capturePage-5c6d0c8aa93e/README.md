# `createMcpAppEmitter/capturePage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/mcp-app/mcp-app-emitter.ts` · [README do módulo](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585413-585440](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585413-L585440) | `FunctionDeclaration` | sim | `pages, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585413-585440](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585413-L585440) | 1 | 0 | 1 | 2 | 0 | 1 |

### evaluation:585413

Chamadas escritas diretamente neste corpo: `deadline.run`, `deps.agentId`, `pages.noteCapture`.

SHA-256 do trecho: `b69e95ef58c7116c830cb3858fe17d6c888613949d98d7cde285ba67f15348d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
