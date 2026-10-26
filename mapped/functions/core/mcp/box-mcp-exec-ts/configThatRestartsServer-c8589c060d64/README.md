# `configThatRestartsServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684872-684879](../../../../../../reference/runtime/host-main.cjs#L684872-L684879) | `FunctionDeclaration` | não | `configJson, serverIdentifier` |
| [evaluation:514660-514667](../../../../../../reference/runtime/sand-eval-runner.cjs#L514660-L514667) | `FunctionDeclaration` | não | `configJson, serverIdentifier` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684872-684879](../../../../../../reference/runtime/host-main.cjs#L684872-L684879) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:514660-514667](../../../../../../reference/runtime/sand-eval-runner.cjs#L514660-L514667) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:684872

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `serverEntry`.

SHA-256 do trecho: `4e8c5aa2e10c0678dc2f5706ec8d6e2effabf57900e8ff2a9f7d4c6dbd02cc8d`.

### evaluation:514660

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `serverEntry`.

SHA-256 do trecho: `4e8c5aa2e10c0678dc2f5706ec8d6e2effabf57900e8ff2a9f7d4c6dbd02cc8d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
