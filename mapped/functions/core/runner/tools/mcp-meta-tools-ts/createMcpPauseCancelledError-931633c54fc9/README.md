# `createMcpPauseCancelledError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554110-554117](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554110-L554117) | `FunctionDeclaration` | não | `toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554110-554117](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554110-L554117) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554110

Chamadas escritas diretamente neste corpo: `new ToolTimeoutError`.

SHA-256 do trecho: `cc1480dfda6073cb6a7d14ef2b1c0733258075839ca5a06602297707806beaa4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
