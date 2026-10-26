# `buildServerConfigJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779612-779631](../../../../../../../reference/runtime/host-main.cjs#L779612-L779631) | `FunctionDeclaration` | não | `args` |
| [evaluation:579850-579869](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579850-L579869) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779612-779631](../../../../../../../reference/runtime/host-main.cjs#L779612-L779631) | 6 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:579850-579869](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579850-L579869) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:779612

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `Object.keys`.

SHA-256 do trecho: `5999ad19aed662746308565109ef41f29e025f4ac6af46b713aec8eae43dbccd`.

### evaluation:579850

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `Object.keys`.

SHA-256 do trecho: `5999ad19aed662746308565109ef41f29e025f4ac6af46b713aec8eae43dbccd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
