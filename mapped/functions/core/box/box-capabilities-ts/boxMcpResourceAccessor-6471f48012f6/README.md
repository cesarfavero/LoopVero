# `boxMcpResourceAccessor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-capabilities.ts` · [README do módulo](../../../../../modules/core/box/box-capabilities-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546710-546715](../../../../../../reference/runtime/host-main.cjs#L546710-L546715) | `FunctionDeclaration` | sim | `box, ctx` |
| [evaluation:475805-475810](../../../../../../reference/runtime/sand-eval-runner.cjs#L475805-L475810) | `FunctionDeclaration` | sim | `box, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546710-546715](../../../../../../reference/runtime/host-main.cjs#L546710-L546715) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:475805-475810](../../../../../../reference/runtime/sand-eval-runner.cjs#L475805-L475810) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:546710

Chamadas escritas diretamente neste corpo: `box.mcpResourceAccessor`, `new BoxMcpUnsupportedError`.

Alvos de lançamento explícito: `BoxMcpUnsupportedError`.

SHA-256 do trecho: `bef8848befafc2d88adc324afde2973e256cebba59da3811eeee37e2bb4affee`.

### evaluation:475805

Chamadas escritas diretamente neste corpo: `box.mcpResourceAccessor`, `new BoxMcpUnsupportedError`.

Alvos de lançamento explícito: `BoxMcpUnsupportedError`.

SHA-256 do trecho: `bef8848befafc2d88adc324afde2973e256cebba59da3811eeee37e2bb4affee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
