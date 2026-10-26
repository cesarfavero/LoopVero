# `createBoxSandMcpExec`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684880-685011](../../../../../../reference/runtime/host-main.cjs#L684880-L685011) | `FunctionDeclaration` | não | `box, options2 = {}` |
| [evaluation:514668-514799](../../../../../../reference/runtime/sand-eval-runner.cjs#L514668-L514799) | `FunctionDeclaration` | não | `box, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684880-685011](../../../../../../reference/runtime/host-main.cjs#L684880-L685011) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514668-514799](../../../../../../reference/runtime/sand-eval-runner.cjs#L514668-L514799) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:684880

Chamadas escritas diretamente neste corpo: `.withName`, `createContext`, `withSandBoxTouchReason`.

SHA-256 do trecho: `62892e65c2f27e922a752aa54efe0549ea1bbdb5f4be35cb46397351dbd8932d`.

### evaluation:514668

Chamadas escritas diretamente neste corpo: `.withName`, `createContext`, `withSandBoxTouchReason`.

SHA-256 do trecho: `f41fdfb3b42be48dfe4d4ed88465866e0648495fe76ea19aca3b6835e11026df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
