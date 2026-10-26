# `boxLoadMcpServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-capabilities.ts` · [README do módulo](../../../../../modules/core/box/box-capabilities-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546704-546709](../../../../../../reference/runtime/host-main.cjs#L546704-L546709) | `FunctionDeclaration` | sim | `box, ctx, configJson, options2` |
| [evaluation:475799-475804](../../../../../../reference/runtime/sand-eval-runner.cjs#L475799-L475804) | `FunctionDeclaration` | sim | `box, ctx, configJson, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546704-546709](../../../../../../reference/runtime/host-main.cjs#L546704-L546709) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:475799-475804](../../../../../../reference/runtime/sand-eval-runner.cjs#L475799-L475804) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:546704

Chamadas escritas diretamente neste corpo: `box.loadMcpServers`, `new BoxMcpUnsupportedError`.

Alvos de lançamento explícito: `BoxMcpUnsupportedError`.

SHA-256 do trecho: `db180c0f231c0eae936fc82d1e09662d61e04a628d3443364ff83efb0d17300d`.

### evaluation:475799

Chamadas escritas diretamente neste corpo: `box.loadMcpServers`, `new BoxMcpUnsupportedError`.

Alvos de lançamento explícito: `BoxMcpUnsupportedError`.

SHA-256 do trecho: `db180c0f231c0eae936fc82d1e09662d61e04a628d3443364ff83efb0d17300d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
