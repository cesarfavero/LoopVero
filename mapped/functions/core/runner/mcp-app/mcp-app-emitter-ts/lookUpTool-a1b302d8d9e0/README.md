# `lookUpTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/mcp-app/mcp-app-emitter.ts` · [README do módulo](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585400-585405](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585400-L585405) | `FunctionDeclaration` | sim | `mcp, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585400-585405](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585400-L585405) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:585400

Chamadas escritas diretamente neste corpo: `.then`, `mcp.findTool`.

SHA-256 do trecho: `fe21ad61a503e77832e6b6f533650a2e034cea67f309fd7596373d31a23d79b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
