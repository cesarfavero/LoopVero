# `describePluginFields`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779822-779832](../../../../../../../reference/runtime/host-main.cjs#L779822-L779832) | `FunctionDeclaration` | não | `detail` |
| [evaluation:580060-580070](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580060-L580070) | `FunctionDeclaration` | não | `detail` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779822-779832](../../../../../../../reference/runtime/host-main.cjs#L779822-L779832) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:580060-580070](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580060-L580070) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779822

Chamadas escritas diretamente neste corpo: `.join`, `detail.fields.map`.

SHA-256 do trecho: `d28c54182aef65003d8a28bd922a21322bce977ecb567813955edebc58020ff4`.

### evaluation:580060

Chamadas escritas diretamente neste corpo: `.join`, `detail.fields.map`.

SHA-256 do trecho: `d28c54182aef65003d8a28bd922a21322bce977ecb567813955edebc58020ff4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
